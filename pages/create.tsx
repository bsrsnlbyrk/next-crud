import React from 'react'

import { Button, Container, Input, Textarea, Stack } from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { Article } from '@/lib/types';
import { createArticle } from '@/api/articles';

const Create = () => {
  const router = useRouter()
  const toast = useToast()

  const initialValues = {   
    title: '',
    author: '',
    snippet: '',
    publication_info: ''
  }

  const handleCreate = async (data: Article) => {
    const { status } = await createArticle(data)

    if (status === 200) router.push('/')
    else toast({
        description: "Article could not be created",
        status: 'error',
        duration: 9000,
        isClosable: true,
    })
  }

  return (
    <Container maxW='1260px'>
        <Formik initialValues={initialValues} onSubmit={(values) => {handleCreate(values)}}>
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
                        <Button type="submit" colorScheme='teal' w={32}>Submit</Button>
                    </Stack>
                </form>
            )}
        </Formik>
    </Container>
  )
}

export default Create;
