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
import localematcher from "@src/config/matchLocale";
import ctytolocale from "@src/config/ctytoLocale";
import nameCodes from "@src/config/nameCodes";
import { toCapitalize } from "@src/lib/utils";

const MobileLayoutContent = ({ source, frontMatter }) => {
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

      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="wide"
          style={{ border: "0px", maxWidth: "80vw" }}
        >
          <Menu.Item>&nbsp;</Menu.Item>
          <Menu.Item style={{ textAlign: "left" }}>
            <h4>{t("language")}</h4>
            <Dropdown
              placeholder="Change Locale"
              fluid
              selection
              defaultValue={currentLanguage}
              options={languageOptions}
              onChange={handleLangChange}
            />
            <br />
          </Menu.Item>
          <Menu.Item style={{ textAlign: "left" }}>
            <h4>{t("region")}</h4>
            <Dropdown
              placeholder="Change Locale"
              fluid
              selection
              defaultValue={router.query.country}
              options={countryOptions}
              onChange={handleCountryChange}
            />
            <br />
          </Menu.Item>
          <Menu.Item style={{ textAlign: "left" }}>
            <h4
              style={{ padding: "0.25rem", cursor: "pointer" }}
              onClick={() =>
                router.push(`/${router.query.locale}/${router.query.country}`)
              }
            >
              <a>{t("content_page")}</a>
            </h4>
            {mods &&
              mods.map((m, i) => {
                return (
                  <p key={i} style={{ padding: "0rem 0.12rem" }}>
                    <Link href={m.match(/\[(.*?)\]/)[1]} passHref key={i}>
                      <a style={{ cursor: "pointer" }}>
                        Module&nbsp;{i}:&nbsp;
                        {m.replace(/\s*(?:\[[^\]]*\]|\([^)]*\))\s*/g, "")}
                      </a>
                    </Link>
                  </p>
                );
              })}
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={visible}>
          <Segment basic>
            <div style={{ margin: "0rem", padding: "0.15rem" }}>
              <Button onClick={() => setVisible(!visible)}>
                {t("content_menu")}
              </Button>
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
                  <Grid.Column width={7}>&nbsp;</Grid.Column>
                  <Grid.Column width={2} style={{ textAlign: "center" }}>
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
                  <Grid.Column width={1}> &nbsp;</Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
            <Container
              textAlign="justified"
              style={{ padding: "1rem" }}
            ></Container>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default MobileLayoutContent;
