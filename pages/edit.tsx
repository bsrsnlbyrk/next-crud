import React from 'react'

import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { Button, Container, Input, Textarea, Stack, useToast } from '@chakra-ui/react';
import { Article } from '@/lib/types';
import { Field, Formik } from 'formik';
import { createArticle } from '@/api/articles';

const Edit = ({ article }: { article: Article }) => {
  const router = useRouter();
  const toast = useToast()

  const handleEdit = async (data: Article) => {
    const { status } = await createArticle(data)

    if (status === 200) router.push('/me')
    else toast({
        description: "Article could not be edited",
        status: 'error',
        duration: 9000,
        isClosable: true,
    })
  };

  return (
    <Container maxW='1260px'>
        <Formik initialValues={{ ...article }} onSubmit={(values) => {handleEdit(values)}}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                <Stack spacing={5} my={16}>
                  <Field name='title'>
                    {({ field }: any) => <Input {...field} placeholder='Title' />}
                  </Field>
                  <Field name='author'>
                    {({ field }: any) => <Input {...field} placeholder='Author' />}
                  </Field>
                  <Field name='snippet'>
                    {({ field }: any) => <Textarea {...field} rows={50} placeholder='Content' />}
                  </Field>
                  <Field name='publication_info'>
                    {({ field }: any) => <Input {...field} placeholder='Publication info' />}
                  </Field>
                  <Stack direction="row">
                    <Button type="submit" colorScheme='teal' w={32}>Submit</Button>
                    <Button colorScheme='teal' variant="outline" w={32} onClick={() => router.back()}>Cancel</Button>
                  </Stack>
                </Stack>
            </form>
          )}
        </Formik>
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
