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
  Image
} from "semantic-ui-react";
import { MDXRemote } from "next-mdx-remote";
import LayoutComponent from "@src/components/LayoutComponent";
import useSizeQuery from "@src/hooks/useSizeQuery";
import showcaseData from "@src/data/showcasedata.json";
import { useRouter } from "next/router";
import Link from "next/link";
import HeroSession from "@src/components/HeroSession";

export default function Homepage({ source }) {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState(
    router.query.locale ? router.query.locale : ""
  );
  const [currentMod, setCurrentMod] = useState("");
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
      <HeroSession/>
      <Container>
        <Grid stackable className="home-session divider-border">
          <Grid.Row columns={`${isDesktop ? "two" : "one"}`}>
            <Grid.Column style={{ paddingLeft: "0px" }}>
              <h3 className="blue-title">{t("select_language")}</h3>
              <p>{t("select_lang_homepage")}</p>
              <Dropdown
                placeholder={t("select_language")}
                fluid
                selection
                defaultValue={currentLanguage}
                options={languageOptions}
                onChange={handleLangChange}
              />
            </Grid.Column>
            <Grid.Column style={{ paddingRight: "0px" }}>
              <h3 className="blue-title">{t("select_curriculum")}</h3>
              <p>{t("select_curriculum_view")}</p>
              <Dropdown
                placeholder={t("select_localization")}
                fluid
                selection
                defaultValue={currentMod}
                options={availableOptions}
                onChange={handleLangChange}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="home-session">
          <h3 className="blue-title">Project Showcase</h3>
          <Grid stackable columns={`${isDesktop ? "two" : "one"}`}>
            {showcaseData.map((v, i) => {
              return (
                <Grid.Column>
                  <Grid stackable columns={`${isDesktop ? "two" : "one"}`} key={i}>
                    <Grid.Column>
                      <Image src="https://dummyimage.com/300x200" width="100%"/>
                    </Grid.Column>
                    <Grid.Column>
                      <h3>{v.title}</h3>
                      <p>
                        {v.country}, {v.language}
                      </p>
                      {/* <p>
                       {v.project_summary}
                      </p> */}
                      <Button
                        content={t("read_more")}
                        primary
                        onClick={() =>
                          router.push(`/${router.query.locale}/showcase#${v.title.toLowerCase().replace(/ /g, "-").replace(/[^\wÄäÖöÜü-]+/g, "")}`)
                        }
                      />
                    </Grid.Column>
                  </Grid>
                </Grid.Column>
              );
            })}
          </Grid>
          <div className="view-all-toolbar">
            <Button 
              as="a"
              onClick={() =>
                router.push(`/${router.query.locale}/showcase`)
              }
              >
                {t("view_all_showcase")}
              </Button>
          </div>
        </div>
      </Container>
    </LayoutComponent>
  );
}

const getStaticProps = makeStaticProps(getSlug(import.meta.url));
export { getStaticPaths, getStaticProps };
