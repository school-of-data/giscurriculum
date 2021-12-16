import { getStaticPaths, makeStaticProps } from '@lib/getCountryStatic'
import getSlug from '@lib/getSlug'
import LayoutComponent from '@src/components/LayoutComponent'
import ContentLayoutComponent from '@src/components/ContentLayoutComponent'

export default function Homepage({ source, frontMatter }) {
    return (
        <LayoutComponent>
            <ContentLayoutComponent source={source} frontMatter={frontMatter} />
        </LayoutComponent>
    )
}

const getStaticProps = makeStaticProps(getSlug(import.meta.url));
export { getStaticPaths, getStaticProps };
