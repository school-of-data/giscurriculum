import { getAllFilesFrontMatter, getLocaleFile } from './mdx';
import { getI18nPaths } from './getI18nPaths'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// import i18nextConfig from '../next-i18next.config' // used as current next-i18next workaround for next.js > v10.2

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
})

// export const getCountryStaticPaths = () => ({
//   fallback: false,
//   paths: getNestedI18nPaths(),
// })


// export function makeStaticProps(slug, ns = ['common']) {
//   return async function getStaticProps(ctx) {
//     return {
//       props: {
//         ...await getLocaleFile(ctx?.params?.locale, slug),
//         ...await serverSideTranslations(ctx?.params?.locale, ns, /*i18nextConfig*/),
//       }
//     }
//   };
// }

export function makeStaticProps(slug, ns = ['common']) {
  return async function getStaticProps(ctx) {
    return {
      props: {
        ...await getLocaleFile(ctx?.params?.locale, slug),
        ...await serverSideTranslations(ctx?.params?.locale, ns, /*i18nextConfig*/),
      }
    }
  };
}

export function makeCountryStaticProps(slug, ns = ['common']) {
  return async function getStaticProps(ctx) {
    return {
      props: {
        ...await getCountryLocaleFile(ctx?.params?.locale, ctx?.params?.country, slug),
        ...await serverSideTranslations(ctx?.params?.locale, ns, /*i18nextConfig*/),
      }
    }
  };
}


// export function makeStaticProps(slug, ns = ['common']) {
//   return async function getStaticProps(ctx) {
//     const posts = await getAllFilesFrontMatter(`locales/${ctx?.params?.locale}/blog`)
//     return {
//       props: {
//         ...await serverSideTranslations(ctx?.params?.locale, ns, /*i18nextConfig*/),
//         posts
//       }
//     }
//   };
// }