import { getCountryLocaleModuleFile } from "./mdx";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nConfig from "../../next-i18next.config";

export const getPaths = () =>
  i18nConfig.i18n.locales
    .map((lng) =>
      i18nConfig.i18n.countries.map((cty) => ({
        params: { locale: lng, country: cty },
      }))
    )
    .flat();

// export async function getStaticPaths() {
//   const mods = await getFiles(
//     `locales/${i18nConfig.i18n.defaultLocale}/${i18nConfig.i18n.defaultCountry}/module`
//   );
//   console.log("HEEEEEE")
//   return {
//     paths: mods
//       .map((m) =>
//         getPaths().map((lr) => ({
//           params: {
//             locale: lr.params["locale"],
//             country: lr.params["country"],
//             slug: m.replace(/\.mdx/, ""),
//           },
//         }))
//       )
//       .reduce((ret, curr) => {
//         ret = ret.concat(curr);
//         return ret;
//       }, []),
//     fallback: false,
//   };
// }

export const getStaticPaths = async () => ({
  fallback: false,
  // paths: getNestedI18nPaths(),
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
});

export function makeStaticProps(slug, ns = ["common"]) {
  return async function getStaticProps(ctx) {
    return {
      props: {
        ...(await getCountryLocaleModuleFile(
          ctx?.params?.locale,
          ctx?.params?.country,
          slug
        )),
        ...(await serverSideTranslations(
          ctx?.params?.locale,
          ns /*i18nextConfig*/
        )),
      },
    };
  };
}
