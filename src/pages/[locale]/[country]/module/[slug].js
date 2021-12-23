import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { getPaths } from "@src/lib/geModuleStatic";
import { getFiles, getCountryLocaleModuleFile } from "@src/lib/mdx";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nConfig from "../../../../../next-i18next.config";
import LayoutComponent from "@src/components/LayoutComponent";
import MobileLayoutContent from "@src/components/MobileLayoutContent";
import DesktopLayoutContent from "@src/components/DesktopLayoutContent";
import useSizeQuery from "@src/hooks/useSizeQuery";
import ModalComponent from "@src/components/ModalComponent";
import localematcher from "@src/config/matchLocale";
import ctytolocale from "@src/config/ctytoLocale";
import { toCapitalize } from "@src/lib/utils";

export default function Homepage({ source, frontMatter }) {
  const { isDesktop } = useSizeQuery();

  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(
    router.query.locale ? router.query.locale : "en"
  );
  const [selectedLang, setSelectedlang] = useState("en");
  const [availableCountries, setAvailableCountries] = useState([]);
  const [countryOptions, setCountryOptions] = useState([
    { key: "bangladesh", value: "bangladesh", flag: "bd", text: "Bangladesh" },
    { key: "germany", value: "germany", flag: "de", text: "Germany" },
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

  return (
    <LayoutComponent>
      <ModalComponent
        open={open}
        setOpen={setOpen}
        setCountryOptions={setCountryOptions}
        currentLanguage={currentLanguage}
        selectedLang={selectedLang}
        availableCountries={availableCountries}
      />
      {isDesktop ? (
        <DesktopLayoutContent
          source={source}
          frontMatter={frontMatter}
          open={open}
          setOpen={setOpen}
          currentLanguage={currentLanguage}
          selectedLang={selectedLang}
          availableCountries={availableCountries}
          countryOptions={countryOptions}
          handleCountryChange={handleCountryChange}
          languageOptions={languageOptions}
          handleLangChange={handleLangChange}
        />
      ) : (
        <MobileLayoutContent
          source={source}
          frontMatter={frontMatter}
          currentLanguage={currentLanguage}
          countryOptions={countryOptions}
          handleCountryChange={handleCountryChange}
          languageOptions={languageOptions}
          handleLangChange={handleLangChange}
        />
      )}
    </LayoutComponent>
  );
}

export async function getStaticPaths() {
  const mods = await getFiles(
    `locales/${i18nConfig.i18n.defaultLocale}/${i18nConfig.i18n.defaultCountry}/module`
  );
  const res = mods
    .map((m) =>
      getPaths().map((lr) => ({
        params: {
          locale: lr.params["locale"],
          country: lr.params["country"],
          slug: m.replace(/\.mdx/, ""),
        },
      }))
    )
    .reduce((ret, curr) => {
      ret = ret.concat(curr);
      return ret;
    }, []);
  // return {
  //     paths: mods.map((m) => getPaths().map((lr) => ({
  //         params: {
  //             locale: lr.params['locale'],
  //             country: lr.params['country'],
  //             slug: m.replace(/\.mdx/, '')
  //         }
  //     }))).reduce((ret, curr) => {
  //         ret = ret.concat(curr)
  //         return ret
  //     }, []),
  //     fallback: false
  // };

  return {
    paths: [
      { params: { locale: "en", country: "bangladesh", slug: "module0" } },
      { params: { locale: "en", country: "bangladesh", slug: "module1" } },
      { params: { locale: "en", country: "bangladesh", slug: "module2" } },
      { params: { locale: "en", country: "bangladesh", slug: "module3" } },
      { params: { locale: "en", country: "bangladesh", slug: "module4" } },
      { params: { locale: "en", country: "bangladesh", slug: "module5" } },
      { params: { locale: "en", country: "bangladesh", slug: "module6" } },
      { params: { locale: "en", country: "bangladesh", slug: "module7" } },
      { params: { locale: "en", country: "bangladesh", slug: "module8" } },
      { params: { locale: "en", country: "bangladesh", slug: "module9" } },
      { params: { locale: "en", country: "bangladesh", slug: "module10" } },
      { params: { locale: "en", country: "ghana", slug: "module0" } },
      { params: { locale: "en", country: "ghana", slug: "module1" } },
      { params: { locale: "en", country: "ghana", slug: "module2" } },
      { params: { locale: "en", country: "ghana", slug: "module3" } },
      { params: { locale: "en", country: "ghana", slug: "module4" } },
      { params: { locale: "en", country: "ghana", slug: "module5" } },
      { params: { locale: "en", country: "ghana", slug: "module6" } },
      { params: { locale: "en", country: "ghana", slug: "module7" } },
      { params: { locale: "en", country: "ghana", slug: "module8" } },
      { params: { locale: "en", country: "ghana", slug: "module9" } },
      { params: { locale: "en", country: "ghana", slug: "module10" } },
      { params: { locale: "en", country: "nigeria", slug: "module0" } },
      { params: { locale: "en", country: "nigeria", slug: "module1" } },
      { params: { locale: "en", country: "nigeria", slug: "module2" } },
      { params: { locale: "en", country: "nigeria", slug: "module3" } },
      { params: { locale: "en", country: "nigeria", slug: "module4" } },
      { params: { locale: "en", country: "nigeria", slug: "module5" } },
      { params: { locale: "en", country: "nigeria", slug: "module6" } },
      { params: { locale: "en", country: "nigeria", slug: "module7" } },
      { params: { locale: "en", country: "nigeria", slug: "module8" } },
      { params: { locale: "en", country: "nigeria", slug: "module9" } },
      { params: { locale: "en", country: "nigeria", slug: "module10" } },
      { params: { locale: "es", country: "argentina", slug: "module0" } },
      { params: { locale: "es", country: "argentina", slug: "module1" } },
      { params: { locale: "es", country: "argentina", slug: "module2" } },
      { params: { locale: "es", country: "argentina", slug: "module3" } },
      { params: { locale: "es", country: "argentina", slug: "module4" } },
      { params: { locale: "es", country: "argentina", slug: "module5" } },
      { params: { locale: "es", country: "argentina", slug: "module6" } },
      { params: { locale: "es", country: "argentina", slug: "module7" } },
      { params: { locale: "es", country: "argentina", slug: "module8" } },
      { params: { locale: "es", country: "argentina", slug: "module9" } },
      { params: { locale: "es", country: "mexico", slug: "module0" } },
      { params: { locale: "es", country: "mexico", slug: "module1" } },
      { params: { locale: "es", country: "mexico", slug: "module2" } },
      { params: { locale: "es", country: "mexico", slug: "module3" } },
      { params: { locale: "es", country: "mexico", slug: "module4" } },
      { params: { locale: "es", country: "mexico", slug: "module5" } },
      { params: { locale: "es", country: "mexico", slug: "module6" } },
      { params: { locale: "es", country: "mexico", slug: "module7" } },
      { params: { locale: "es", country: "mexico", slug: "module8" } },
      { params: { locale: "es", country: "mexico", slug: "module9" } },
      { params: { locale: "de", country: "germany", slug: "module0" } },
      { params: { locale: "de", country: "germany", slug: "module1" } },
      { params: { locale: "de", country: "germany", slug: "module2" } },
      { params: { locale: "de", country: "germany", slug: "module3" } },
      { params: { locale: "de", country: "germany", slug: "module4" } },
      { params: { locale: "de", country: "germany", slug: "module5" } },
      { params: { locale: "de", country: "germany", slug: "module6" } },
      { params: { locale: "de", country: "germany", slug: "module7" } },
      { params: { locale: "de", country: "germany", slug: "module8" } },
      { params: { locale: "de", country: "germany", slug: "module9" } },
      { params: { locale: "de", country: "germany", slug: "module10" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(ctx, ns = ["countrylevel"]) {
  return {
    props: {
      ...(await getCountryLocaleModuleFile(
        ctx?.params?.locale,
        ctx?.params?.country,
        ctx?.params?.slug
      )),
      ...(await serverSideTranslations(
        ctx?.params?.locale,
        ns /*i18nextConfig*/
      )),
    },
  };
}
