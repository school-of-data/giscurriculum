import { getStaticPaths, makeStaticProps } from '@lib/getCountryStatic'
import getSlug from '@lib/getSlug'
import LayoutComponent from '@src/components/LayoutComponent'
import MobileLayoutContent from '@src/components/MobileLayoutContent';
import DesktopLayoutContent from '@src/components/DesktopLayoutContent';
import useSizeQuery from '@src/hooks/useSizeQuery';

export default function Homepage({ source, frontMatter }) {
    const { isDesktop } = useSizeQuery()
    return (
        <LayoutComponent>
            {
                isDesktop ? <DesktopLayoutContent source={source} frontMatter={frontMatter} /> : <MobileLayoutContent source={source} frontMatter={frontMatter} />
            }
        </LayoutComponent>
    )
}

const getStaticProps = makeStaticProps(getSlug(import.meta.url));
export { getStaticPaths, getStaticProps };
