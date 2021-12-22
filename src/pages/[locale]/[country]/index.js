import { useState, useEffect } from 'react'
import { getStaticPaths, makeStaticProps } from '@lib/getCountryStatic'
import getSlug from '@lib/getSlug'
import LayoutComponent from '@src/components/LayoutComponent'
import MobileLayoutContent from '@src/components/MobileLayoutContent';
import DesktopLayoutContent from '@src/components/DesktopLayoutContent';

export default function Homepage({ source, frontMatter }) {
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        const media = window.matchMedia('(min-width: 960px)');
        const listener = () => setIsDesktop(media.matches);
        listener();
        window.addEventListener('resize', listener);

        return () => window.removeEventListener('resize', listener);
    }, [isDesktop]);

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
