import DefaultLayout from '~/layouts/default'

const Home: NextPageWithLayout = () => {
  return (
    <div className={`contents`}>
      <div className='mt-64 flex flex-col items-center text-white'>
        <h1 className='text-xl font-bold'>Nickel Lab. LLC.</h1>
        <sub className={`text-4xl`}>Next.js 13 Template</sub>
      </div>
    </div>
  )
}

Home.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
