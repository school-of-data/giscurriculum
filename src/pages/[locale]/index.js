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
import showcaseData from "@src/data/showcasedata.json";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Homepage({ source }) {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState(
    router.query.locale ? router.query.locale : "en"
  );
  const [currentMod, setCurrentMod] = useState("en/bangladesh");
  const { isDesktop } = useSizeQuery();

  const languageOptions = [
    { key: "en", value: "en", text: "English" },
    { key: "es", value: "es", text: "Spanish" },
    { key: "de", value: "de", text: "German" },
  ];

  const availableOptions = [
    {
      key: "en/bangladesh",
      value: "en/bangladesh",
      text: "Bangladesh (in English)",
    },
    { key: "en/ghana", value: "en/ghana", text: "Ghana (in English)" },
    { key: "en/nigeria", value: "en/nigeria", text: "Nigeria (in English)" },
    { key: "de/germany", value: "de/germany", text: "Germany (in German)" },
    {
      key: "es/argentina",
      value: "es/argentina",
      text: "Argentina (in Spanish)",
    },
    { key: "es/mexico", value: "es/mexico", text: "Mexico (in Spanish)" },
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
      <Container
        fluid
        style={{
          background: "#22B7F8",
          color: "white",
          padding: `${isDesktop ? "4rem" : "0rem !important"}`,
          margin: `${isDesktop ? "0rem !important" : "0rem !important"}`,
        }}
      >
        <Header
          as="h1"
          style={{
            padding: `${isDesktop ? "2rem 0rem" : "2rem"}`,
            color: "white",
            fontSize: `${isDesktop ? "3rem" : "2rem"}`,
            fontWeight: "400",
          }}
        >
          Open Geodata Training Curriculum
        </Header>
        <p>
          Data for Good at Meta has partnered with the Open Knowledge Foundation
          to design, develop, and deliver a training focused on how governments
          and nonprofits around the world can utilise free and open geospatial
          data and geospatial software.
        </p>
        <p>
          This website contains a training curriculum built around the powerful
          free and open source GIS, QGIS, for learning how to utilize free and
          open geospatial data such as OpenStreetMap (OSM) and Meta's High
          Resolution Settlement Layer (HRSL).
        </p>
        <p>
          The curriculum is localized for 16 countries and available in 7
          languages (Amharic, Arabic, English, German, Portuguese, Spanish, and
          Vietnamese). You can select the langugae and country localization
          below.
        </p>
        <p style={{ paddingBottom: "2rem" }}>
          You can also find sample projects made by those trained using the
          curriculum in the Showcase Page.
        </p>
      </Container>
      <div style={{ margin: "1.5rem 0rem" }}>&nbsp;</div>
      <Grid stackable columns={`${isDesktop ? "two" : "one"}`}>
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
                textAlign: "left",
                borderRadius: "0.15rem",
                minHeight: `${isDesktop ? "80vh" : "auto"}`,
                height: "100%",
              }}
            >
              <div
                style={{
                  padding: "0.5rem",
                  margin: "1rem 1rem",
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
                <br />
                <br />
                <br />
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
              </div>
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
                textAlign: "left",
                borderRadius: "0.15rem",
                minHeight: "80vh",
                height: "100%",
              }}
            >
              <h3 className="blue-title">Project Showcase</h3>
              <div
                style={{
                  padding: "0.5rem",
                  margin: "1rem 1rem",
                  height: "70vh",
                  overflowY: "scroll",
                  overflowX: "hidden",
                }}
              >
                <br />
                <Grid stackable columns={`${isDesktop ? "two" : "one"}`}>
                  {showcaseData.map((v, i) => {
                    return (
                      <Grid.Row
                        style={{
                          height: "20rem",
                          width: "100%",
                          cursor: "pointer",
                        }}
                        key={i}
                      >
                        <Grid.Column></Grid.Column>
                        <Grid.Column>
                          <h3>{v.title}</h3>
                          <p>
                            {v.country}, {v.language}
                          </p>
                          {/* <p>
                           {v.project_summary}
                          </p> */}
                          <Button
                            content="READ MORE"
                            primary
                            onClick={() =>
                              router.push(`/${router.query.locale}/showcase#${v.title.toLowerCase().replace(/ /g, "-").replace(/[^\wÄäÖöÜü-]+/g, "")}`)
                            }
                          />
                        </Grid.Column>
                      </Grid.Row>
                    );
                  })}
                </Grid>
              </div>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div style={{ margin: "1.5rem 0rem" }}>&nbsp;</div>
    </LayoutComponent>
  );
}

const getStaticProps = makeStaticProps(getSlug(import.meta.url));
export { getStaticPaths, getStaticProps };
