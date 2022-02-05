import React, { useState } from "react";
import { getStaticPaths, makeStaticProps } from "@src/lib/getStatic";
import getSlug from "@src/lib/getSlug";
import { useTranslation } from "next-i18next";
import {
  Button,
  Header,
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
import HeroSession from "@src/components/HeroSession";

export default function Homepage({ source }) {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState(
    router.query.locale ? router.query.locale : "en"
  );
  const [currentMod, setCurrentMod] = useState("en/bangladesh")
  const { isDesktop } = useSizeQuery();

  const languageOptions = [
    { key: "en", value: "en", text: "English" },
    { key: "es", value: "es", text: "Spanish" },
    { key: "de", value: "de", text: "German" },
  ];

  const availableOptions = [
    { key: "en/bangladesh", value: "en/bangladesh", text: "Bangladesh (in English)" },
    { key: "en/ghana", value: "en/ghana", text: "Ghana (in English)" },
    { key: "en/nigeria", value: "en/nigeria", text: "Nigeria (in English)" },
    { key: "de/germany", value: "de/germany", text: "Germany (in German)" },
    { key: "es/argentina", value: "es/argentina", text: "Argentina (in Spanish)" },
    { key: "es/mexico", value: "es/mexico", text: "Mexico (in Spanish)" }
  ]

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
      <HeroSession/>
      <Container>
        <Grid stackable>
          <Grid.Row columns={`${isDesktop ? "two" : "one"}`}>
            <Grid.Column
              style={{
                padding: "0rem 4rem",
                marginBottom: `${isDesktop ? "0rem" : "2rem"}`,
              }}
            >
              <h3 className="blue-title">Select Language</h3>
              <p>Select the language of the homepage</p>
              <Dropdown
                placeholder="Select Language"
                fluid
                selection
                defaultValue={currentLanguage}
                options={languageOptions}
                onChange={handleLangChange}
              />
            </Grid.Column>
            <Grid.Column>
              <h3 className="blue-title">Select curriculum localization</h3>
              <p>Select the curriculum you want to view</p>
              <Dropdown
                placeholder="Select Localization"
                fluid
                selection
                defaultValue={currentMod}
                options={availableOptions}
                onChange={handleLangChange}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <h3 className="blue-title">Project Showcase</h3>
        <Grid stackable>
          <Grid.Row columns={`${isDesktop ? "three" : "one"}`}>
            {[1, 2, 3, 4, 5].map((v, i) => {
              return (
                <Grid.Column>
                  <h3>TITLE</h3>
                  <p>Country, Language</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <Button content='READ MORE' primary onClick={() =>
                    router.push(`/${router.query.locale}/showcase`)
                  } />
                </Grid.Column>
              )
            })}
          </Grid.Row> 
            {/* <Grid.Column
              style={{
                padding: "0rem 4rem",
                marginBottom: `${isDesktop ? "0rem" : "2rem"}`,
              }}
            >
              <Container
                style={{
                  border: "0.5px solid #D3D3D3",
                  padding: "1.5rem",
                  textAlign: "left",
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
            </Grid.Column> */}
        </Grid>
      </Container>
    </LayoutComponent>
  );
}

const getStaticProps = makeStaticProps(getSlug(import.meta.url));
export { getStaticPaths, getStaticProps };
