import type { NextPage } from 'next'
import DefaultLayout from '~/layouts/default'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <p className='text-2xl font-bold'>Hello</p>
    </DefaultLayout>
  )
}

export default Home
