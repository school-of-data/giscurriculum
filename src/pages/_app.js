import { appWithTranslation } from 'next-i18next'
import 'semantic-ui-css/semantic.min.css'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

const WrappedApp = appWithTranslation(MyApp)

export default function RouterEmulatedApp ({ ...props }) {
  props.router.locale = props.router.query.locale
  return <WrappedApp {...props} />
}