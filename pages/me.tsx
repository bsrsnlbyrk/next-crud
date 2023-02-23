import React from 'react'

import { Button, Container, Heading, Link, Stack } from '@chakra-ui/react'

import ArticlesList from '@/components/articles-list'
import { fetchArticlesFromMe } from '@/api/articles'
import { collection, DocumentData, getDocs, query } from 'firebase/firestore'
import { database } from '@/firebaseConfig'

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
    const q = query(collection(database, "articles"));
    const data: DocumentData[] = [];

    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id })
        });
    } catch (error) {
        console.log(error);
    }

    return {
        props: {
            articles: data
        }
    }
}
