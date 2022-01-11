import type { ReactElement, FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}
const DefaultLayout = ({ children }: Props) => {
  return <>{children}</>
}

    DefaultLayout.getLayout = (page: ReactElement) => {
    return <DefaultLayout>{page}</DefaultLayout>
    }

export default DefaultLayout
