// import { getCountryLocaleModuleFile } from "./mdx";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nConfig from "../../next-i18next.config";
import localeConfig from "@src/config/localeConfig.json";

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

// export const getStaticPaths = async () => ({
//   fallback: false,
//   paths: [
//     { params: { locale: "en", country: "bangladesh", slug: "module0" } },
//     { params: { locale: "en", country: "bangladesh", slug: "module1" } },
//    .
//    .
//    .
//   ],
// });

export const getInnerPaths = () =>
  localeConfig
    .map((v) =>
      v.modules.map((mod) => ({
        params: { locale: v.language, country: v.country, slug: mod },
      }))
    )
    .flat();

// export const getStaticPaths = async () => ({
//   paths: await getInnerPaths(),
//   fallback: false,
// });

// export function makeStaticProps(slug, ns = ["countrylevel"]) {
//   return async function getStaticProps(ctx) {
//     return {
//       props: {
//         ...(await getCountryLocaleModuleFile(
//           ctx?.params?.locale,
//           ctx?.params?.country,
//           slug
//         )),
//         ...(await serverSideTranslations(
//           ctx?.params?.locale,
//           ns /*i18nextConfig*/
//         )),
//       },
//     };
//   };
// }
