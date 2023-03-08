import type { ReactElement, FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}
const DefaultLayout = ({ children }: Props) => {
  return (
    <div className='flex h-screen w-screen flex-col'>
      <main
        className={`flex h-full w-full flex-col bg-gradient-to-br from-orange-700 to-orange-900`}
      >
        {children}
      </main>
      <footer className='flex h-64 justify-center bg-gray-800 p-4'>
        <p className='text-white'>Nickel Lab. LLC.</p>
      </footer>
    </div>
  )
}

export default DefaultLayout
