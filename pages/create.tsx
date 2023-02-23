import React from 'react'

import { Button, Container, Input, Textarea, Stack } from '@chakra-ui/react';
import { Field, FieldArrayRenderProps, FieldAttributes, FieldHelperProps, Formik } from 'formik';
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router';

const Create = () => {
  const router = useRouter()
  const toast = useToast()

  const initialValues = {   
    title: '',
    author: '',
    content: '',
    publication_info: ''
  }

  const handleCreate = async (data: { [key:string]: string}) => {
    const response = await fetch('/api/add-article', {
        method: 'POST',
        body: JSON.stringify({ ...data, actions: true })
    })

    if (response.status === 200) router.push('/')
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
                            {({ field }: any) => <Textarea {...field} placeholder='Content' />}
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
