import React from 'react'

import { Button, Container, Heading, Link, Stack } from '@chakra-ui/react'

import ArticlesList from '@/components/articles-list'

const Me = ({ articles }: { articles: any }) => {

  return (
    <Container maxW='1260px'>
        <Link href="/create"><Button colorScheme='teal' my={8} variant='ghost'>Create Article</Button></Link>
        <Link href="/"><Button colorScheme='teal' my={8} variant='ghost'>Home</Button></Link>
        <Stack spacing={12}>
          <Heading as='h1' noOfLines={1} textAlign="center">
            Articles from me
          </Heading>
          <ArticlesList data={articles} />
        </Stack>
      </Container>
  )
}

export default Me

export const getStaticProps = async () => {
    const response = await fetch(`${process.env.HOST_BASE_URL}/api/get-articles`)
    const articles = await response.json()

    return {
        props: {
            articles: articles.data
        }
    }
}
