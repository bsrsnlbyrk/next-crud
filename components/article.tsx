import React, { useState } from 'react'

import { Box, Button, Text } from '@chakra-ui/react';
import Link from 'next/link';
import DeleteArticleModal from './delete-article-modal';
import { deleteArticle } from '@/api/articles';
import { useRouter } from 'next/router';

const Article = ({ data }: { data: any }) => {
  const router = useRouter()

  const handleDelete = async () => {
    await deleteArticle(data.id)
    router.push('/me')
  }

  return (
    <Box>
        <Link href={data.link ?? ''}>
            <Button colorScheme='teal' variant='link' size="lg">{data.title}</Button>
        </Link>
        {data.actions ? (
            <Box>
                <Link href={{ pathname: "/edit", query: { id: data.id } }}>
                    <Button colorScheme='teal' variant='link' size="sm">Edit</Button>
                </Link>
                <DeleteArticleModal onDelete={handleDelete} />
            </Box>
        ) : null}
        <Text>{data.snippet}</Text>
    </Box>
  )
}

export default Article;
