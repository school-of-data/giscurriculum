import { useState, useEffect, useRef } from "react";
import {
  Button,
  Container,
  Grid,
  Dropdown,
  Icon,
  Modal,
  Segment,
  Sidebar,
  Menu,
  MenuItems,
  Header,
  Divider,
} from "semantic-ui-react";
import { MDXRemote } from "next-mdx-remote";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useMediaQuery } from "react-responsive";
import localematcher from "@src/config/matchLocale";
import ctytolocale from "@src/config/ctytoLocale";
import nameCodes from "@src/config/nameCodes";
import { toCapitalize } from "@src/lib/utils";

const DesktopLayoutContent = ({ source, frontMatter }) => {
  const { mods, outlines, prev, next } = frontMatter;
  const { t, i18n } = useTranslation("countrylevel");
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const segmentRef = useRef();
  const [visible, setVisible] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(
    router.query.locale ? router.query.locale : "en"
  );
  const [selectedLang, setSelectedlang] = useState("en");
  const [availableCountries, setAvailableCountries] = useState([]);
  const [countryOptions, setCountryOptions] = useState([
    { key: "bangladesh", value: "bangladesh", flag: "bd", text: "Bangladesh" },
    { key: "germany", value: "germany", flag: "de", text: "Germany" },
  ]);
  const [providedLanguageOptions, setProvidedLanguageOptions] = useState([
    { key: "en", value: "en", text: "English" },
  ]);
  const languageOptions = [
    { key: "en", value: "en", text: "English" },
    { key: "es", value: "es", text: "Spanish" },
    { key: "de", value: "de", text: "German" },
  ];
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  useEffect(() => {
    setCountryOptions(
      localematcher[currentLanguage].map((cty) => ({
        key: cty,
        value: cty,
        text: toCapitalize(cty),
      }))
    );
  }, [currentLanguage]);

  const handleLangChange = (event, data) => {
    if (ctytolocale[router.query.country].includes(data.value)) {
      let orgPath = router.asPath;
      let currentPath = orgPath.replace(
        `/${router.query.locale}`,
        `/${data.value}`
      );
      setCurrentLanguage(data.value);
      router.push(currentPath);
    }
    if (!ctytolocale[router.query.country].includes(data.value)) {
      setSelectedlang(data.value);
      setAvailableCountries(localematcher[data.value]);

      //   setProvidedLanguageOptions(
      //     ctytolocale[router.query.country].map((lng) => ({
      //       key: lng,
      //       value: lng,
      //       text: nameCodes[lng],
      //     }))
      //   );
      setOpen(true);
    }
  };
  const handleCountryChange = (event, data) => {
    let orgPath = router.asPath;
    let currentPath = orgPath.replace(
      `/${router.query.country}`,
      `/${data.value}`
    );
    router.push(currentPath);
  };

  // console.log("loc", router.query.locale);
  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        dimmer={"inverted"}
      >
        <Modal.Header>
          Modules available in {nameCodes[selectedLang]}
        </Modal.Header>
        <Modal.Content>
          <Container
            style={{
              padding: "1.5rem",
              textAlign: "center",
            }}
          >
            {availableCountries.map((acty, i) => {
              return (
                <div
                  style={{
                    border: "0.25px solid #D3D3D3",
                    padding: "0.5rem",
                    margin: "1rem 3rem",
                  }}
                  key={i}
                >
                  <Link href={`/${selectedLang}/${acty}`} passHref>
                    <h5 style={{ cursor: "pointer" }}>{toCapitalize(acty)}</h5>
                  </Link>
                </div>
              );
            })}
          </Container>
        </Modal.Content>
      </Modal>

      <Grid>
        <Grid.Row style={{ margin: "0px", padding: "0px" }}>
          <Grid.Column
            width={isTabletOrMobile ? 1 : 3}
            style={{
              background: "#E8EFF2",
              color: "black",
              padding: "2.5rem",
            }}
          >
            <Container>
              <h4 style={{ padding: "0.25rem" }}>{t("language")}</h4>
              <Dropdown
                placeholder="Change Locale"
                fluid
                selection
                defaultValue={currentLanguage}
                options={languageOptions}
                onChange={handleLangChange}
                style={{ margin: "0.2rem" }}
              />
              <br />
              <p style={{ padding: "0.35rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <h4 style={{ padding: "0.25rem" }}>{t("region")}</h4>
              <Dropdown
                placeholder="Change Locale"
                fluid
                selection
                defaultValue={router.query.country}
                options={countryOptions}
                onChange={handleCountryChange}
                style={{ margin: "0.2rem" }}
              />
              <br />
              <hr />
              <br />
              <h3
                style={{ padding: "0.25rem", cursor: "pointer" }}
                onClick={() =>
                  router.push(
                    `/${router.query.locale}/${router.query.country}`
                  )
                }
              >
                <a>{t("content_page")}</a>
              </h3>
              {mods &&
                mods.map((m, i) => {
                  return (
                    <p key={i} style={{ padding: "0rem 0.35rem" }}>
                      <Link href={m.match(/\[(.*?)\]/)[1]} passHref key={i}>
                        <a style={{ cursor: "pointer" }}>
                          Module&nbsp;{i}:&nbsp;
                          {m.replace(/\s*(?:\[[^\]]*\]|\([^)]*\))\s*/g, "")}
                        </a>
                      </Link>
                    </p>
                  );
                })}

              {/* <Grid style={{ height: '2%'}}>
                    <Grid.Row>
                      <Grid.Column width={6}>
                        &nbsp;
                        <Icon name="book" />
                      </Grid.Column>
                      <Grid.Column width={6}>
                        &nbsp;
                        <Icon name="book" />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid> */}
            </Container>
          </Grid.Column>
          <Grid.Column width={10} style={{ margin: 0, padding: 0 }}>
            <Container
              textAlign="justified"
              style={{
                padding: "2rem 1rem 0rem 1rem",
              }}
            >
              <MDXRemote {...source} />
              <Grid style={{ marginTop: "1rem" }}>
                <Grid.Row>
                  <Grid.Column width={2}>
                    {prev !== "" ? (
                      <>
                        <Link href={prev} passHref>
                          <Button
                            icon
                            labelPosition="left"
                            size="large"
                            style={{
                              color: "#2A71FF",
                              background: "#EBF1FF",
                            }}
                          >
                            {t("back")}
                            <Icon name="angle left" />
                          </Button>
                        </Link>
                      </>
                    ) : null}
                  </Grid.Column>
                  <Grid.Column width={10}>&nbsp;</Grid.Column>
                  <Grid.Column width={2} style={{ textAlign: "right" }}>
                    {next ? (
                      <>
                        <Link href={next} passHref>
                          <Button
                            icon
                            labelPosition="right"
                            size="large"
                            style={{
                              color: "#2A71FF",
                              background: "#EBF1FF",
                            }}
                          >
                            {t("next")}
                            <Icon name="angle right" />
                          </Button>
                        </Link>
                      </>
                    ) : null}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
            <Container
              textAlign="justified"
              style={{ padding: "1rem" }}
            ></Container>
          </Grid.Column>

          <Grid.Column
            width={3}
            style={{
              borderLeft: "0.15px solid #EFEFEF",
              height: "80vh",
              margin: "1rem 0rem",
            }}
          >
            <Container
              textAlign="justified"
              style={{ padding: "2rem 1rem" }}
            >
              {outlines ? (
                <>
                  <h1>{t("outlines")}</h1>
                  {outlines.map((v, i) => (
                    <h4 key={i}>
                      <a
                        href={`#${v
                          .toLowerCase()
                          .replace(/ /g, "-")
                          .replace(/[^\wÄäÖöÜü-]+/g, "")}`}
                      >
                        {v}
                      </a>
                    </h4>
                  ))}
                </>
              ) : null}
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default DesktopLayoutContent;
