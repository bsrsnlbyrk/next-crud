import React from 'react'

import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { Button, Container, Input, Textarea, Stack } from '@chakra-ui/react';

const Edit = ({ article }: { article: any }) => {
  const router = useRouter();
  const handleEdit = () => {};

  return (
    <Container maxW='1260px'>
        <form onSubmit={handleEdit}>
            <Stack spacing={5} my={16}>
                <Input placeholder='Title' defaultValue={article?.title} />
                <Input placeholder='Author' defaultValue={article?.author_id} />
                <Textarea placeholder='Content' rows={50}  defaultValue={article?.snippet} />
                <Input placeholder='Publication info' defaultValue={article?.publication_info} />
                <Stack direction="row">
                    <Button type="submit" colorScheme='teal' w={32}>Submit</Button>
                    <Button colorScheme='teal' variant="outline" w={32} onClick={() => router.back()}>Cancel</Button>
                </Stack>
            </Stack>
        </form>
    </Container>
  )
}

export default Edit;

export const getServerSideProps = ({ query }: NextPageContext) => {
    return {
        props: {
            query,
        }
    }
}
