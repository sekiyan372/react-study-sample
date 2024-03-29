// Access to http://localhost:3000/week4/post/

import React, { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import Wrapper from '~/components/Wrapper'

const Card = styled.div`
  margin: 30px;
`

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

const Post: FC = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPost = async (): Promise<Post[]> => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      return await response.json()
    }
    fetchPost().then((data) => setPosts(data))
  }, [])

  return (
    <Wrapper>
      <h1>useEffect API Sample</h1>
      <div>
        {posts.map((post) => (
          <Card key={post.id}>
            <div>{post.title}</div>
            <div>{post.body}</div>
          </Card>
        ))}
      </div>
    </Wrapper>
  )
}

export default Post
