import { Montserrat, Noto_Sans_JP } from 'next/font/google'
import '../styles/globals.css'

const notoSans = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-notosans',
})

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <div className={`${notoSans.variable} ${montserrat.variable} font-sans`}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  )
}

export default MyApp
