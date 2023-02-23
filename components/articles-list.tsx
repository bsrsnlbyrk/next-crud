import React from 'react';

import { Stack, Divider } from '@chakra-ui/react';

import Article from './article';

const ArticlesList = ({ data }: { data: any[] }) => (
  <Stack spacing={5}>{data.map((article, i) => (
    <>
      <Article key={article.author_id} data={article} />
      {i !== data.length - 1 ? <Divider /> : null}
    </>
  ))}</Stack>
)

export default ArticlesList;
