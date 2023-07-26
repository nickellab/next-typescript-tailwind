import Link from 'next/link'
import { Suspense } from 'react'
import Button from '~/components/Button'
import PostList from '~/features/post/PostList'
import UserList from '~/features/user/UserList'

const NestPage = () => {
  return (
    <main>
      <Link href={`/`}>
        <Button>Back to Home</Button>
      </Link>
      <h1>Nest page</h1>
      <UserList />
      <PostList />
    </main>
  )
}

export default NestPage
