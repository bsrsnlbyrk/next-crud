import React from 'react'

import { Button, Container, Heading, Link, Stack } from '@chakra-ui/react'

import ArticlesList from '@/components/articles-list'
import { fetchArticlesFromMe } from '@/api/articles'
import { Article } from '@/lib/types'

const Me = ({ articles }: { articles: Article[] }) => {

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
    const response = await fetchArticlesFromMe()

    return {
        props: {
            articles: response.data
        }
    }
}
