import React, { useState } from "react";
import { getStaticPaths, makeStaticProps } from "@lib/getStatic";
import getSlug from "@lib/getSlug";
import { useTranslation } from "next-i18next";
import {
  Button,
  Container,
  Grid,
  Placeholder,
  Dropdown,
} from "semantic-ui-react";
import { MDXRemote } from "next-mdx-remote";
import LayoutComponent from "@src/components/LayoutComponent";
import useSizeQuery from "@src/hooks/useSizeQuery";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Homepage({ source }) {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState(
    router.query.locale ? router.query.locale : "en"
  );
  const { isDesktop } = useSizeQuery()

  const languageOptions = [
    { key: "en", value: "en", text: "English" },
    { key: "es", value: "es", text: "Spanish" },
    { key: "de", value: "de", text: "German" },
  ];
  const availableMods = [
    {
      country: "Bangladesh",
      countrykey: "bangladesh",
      language: "English",
      lng: "en",
    },
    { country: "Ghana", countrykey: "ghana", language: "English", lng: "en" },
    {
      country: "Nigeria",
      countrykey: "nigeria",
      language: "English",
      lng: "en",
    },
    {
      country: "Germany",
      countrykey: "germany",
      language: "German",
      lng: "de",
    },
    {
      country: "Argentina",
      countrykey: "argentina",
      language: "Spanish",
      lng: "es",
    },
    { country: "Mexico", countrykey: "mexico", language: "Spanish", lng: "es" },
  ];

  const handleLangChange = (event, data) => {
    let orgPath = router.asPath;
    let currentPath = orgPath.replace(
      `/${router.query.locale}`,
      `/${data.value}`
    );
    setCurrentLanguage(data.value);
    router.push(currentPath);
  };

  return (
    <LayoutComponent>
      <div style={{ margin: "1.5rem 0rem" }}>&nbsp;</div>
      <Grid stackable columns={`${isDesktop ? "three" : "one"}`}>
        <Grid.Row>
          <Grid.Column
            style={{
              padding: "0rem 4rem",
              marginBottom: `${isDesktop ? "0rem" : "2rem"}`,
            }}
          >
            <Container
              style={{
                border: "0.5px solid #D3D3D3",
                padding: "1.5rem",
                borderRadius: "0.15rem",
                minHeight: "80vh",
                height: "100%",
              }}
            >
              <h3 style={{ textAlign: "justified" }}>{t("welcome_to")}</h3>
              <h5 style={{ textAlign: "justified" }}>
                {t("welcome_sub_description")}
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Hendrerit gravida rutrum quisque non tellus orci. Curabitur
                gravida arcu ac tortor dignissim. Euismod elementum nisi quis
                eleifend quam adipiscing vitae. Vulputate mi sit amet mauris.
                Non odio euismod lacinia at quis risus. Porta nibh venenatis
                cras sed felis. Consequat interdum varius sit amet mattis
                vulputate enim nulla aliquet. Libero volutpat sed cras ornare
                arcu dui vivamus arcu felis. Pretium quam vulputate dignissim
                suspendisse in est ante in nibh.
                <br />
                <br /> A diam maecenas sed enim. Ut placerat orci nulla
                pellentesque dignissim enim. Morbi tristique senectus et netus
                et malesuada fames ac. Posuere sollicitudin aliquam ultrices
                sagittis orci a scelerisque purus. Odio tempor orci dapibus
                ultrices. Neque sodales ut etiam sit amet nisl. Sit amet
                porttitor eget dolor. Consequat ac felis donec et. In cursus
                turpis massa tincidunt dui ut. Sodales ut eu sem integer vitae
                justo eget. Fermentum et sollicitudin ac orci phasellus. Id
                cursus metus aliquam eleifend mi in nulla posuere sollicitudin.
              </p>
            </Container>
          </Grid.Column>
          <Grid.Column
            style={{
              padding: "0rem 4rem",
              marginBottom: `${isDesktop ? "0rem" : "2rem"}`,
            }}
          >
            <Container
              style={{
                border: "0.5px solid #D3D3D3",
                padding: "1.5rem",
                textAlign: "center",
                borderRadius: "0.15rem",
                minHeight: "80vh",
                height: "100%",
              }}
            >
              <h3>{t("localization_available")}</h3>
              <div
                style={{
                  padding: "0.5rem",
                  margin: "1rem 1rem",
                }}
              >
                <Dropdown
                  placeholder="Change Locale"
                  fluid
                  selection
                  defaultValue={currentLanguage}
                  options={languageOptions}
                  onChange={handleLangChange}
                />
                <p style={{ textAlign: "left", margin: "0.2rem" }}>
                  A diam maecenas sed enim. Ut placerat orci nulla pellentesque
                  dignissim enim. Morbi tristique senectus et netus et malesuada
                  fames ac. Posuere sollicitudin aliquam ultrices sagittis orci
                  a scelerisque purus. Odio tempor orci dapibus ultrices. Neque
                  sodales ut etiam sit amet nisl. Sit amet porttitor eget dolor.
                  Consequat ac felis donec et. In cursus turpis massa tincidunt
                  dui ut. Sodales ut eu sem integer vitae justo eget. Fermentum
                  et sollicitudin ac orci phasellus. Id cursus metus aliquam
                  eleifend mi in nulla posuere sollicitudin.
                </p>
              </div>
              {availableMods.map((val, i) => {
                return (
                  <div
                    style={{
                      border: "0.25px solid #D3D3D3",
                      padding: "0.5rem",
                      margin: "1rem 1.5rem",
                      color: `${
                        currentLanguage === val.lng ? "black" : "#808088"
                      }`,
                      fontWeight: `${
                        currentLanguage === val.lng ? "bold" : "normal"
                      }`,
                    }}
                    key={i}
                  >
                    <Link href={`/${val.lng}/${val.countrykey}`} passHref>
                      <h5
                        style={{
                          cursor: `${
                            currentLanguage === val.lng ? "pointer" : "default"
                          }`,
                          pointerEvents: `${
                            currentLanguage === val.lng ? "auto" : "none"
                          }`,
                        }}
                      >
                        {val.country} (in {val.language})
                      </h5>
                    </Link>
                  </div>
                );
              })}
            </Container>
          </Grid.Column>
          <Grid.Column
            style={{
              padding: "0rem 4rem",
              marginBottom: `${isDesktop ? "0rem" : "2rem"}`,
            }}
          >
            <Container
              style={{
                border: "0.5px solid #D3D3D3",
                padding: "1.5rem",
                textAlign: "center",
                borderRadius: "0.15rem",
                minHeight: "80vh",
                height: "100%",
              }}
            >
              <h3>{t("projects_showcase")}</h3>

              <div
                style={{
                  height: "70vh",
                  overflowY: "scroll",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                {[1, 2, 3, 4].map((v, i) => {
                  return (
                    <div
                      style={{
                        height: "20rem",
                        width: "100%",
                        backgroundColor: "#D3D3D3",
                        marginBottom: "1.5rem",
                        cursor: "pointer",
                      }}
                      key={i + v}
                      onClick={() =>
                        router.push(`/${router.query.locale}/showcase`)
                      }
                    >
                      &nbsp;
                    </div>
                  );
                })}
              </div>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </LayoutComponent>
  );
}

const getStaticProps = makeStaticProps(getSlug(import.meta.url));
export { getStaticPaths, getStaticProps };
