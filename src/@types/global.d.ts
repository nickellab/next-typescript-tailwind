type ReactElement = import('react').ReactElement
type ReactNode = import('react').ReactNode
type NextPage = import('next').NextPage
type AppProps = import('next/app').AppProps

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
