import React from 'react'
import BaseLayout from '@/components/shared/BaseLayout'
import axios from 'axios';
import Link from 'next/link';
import BasePage from '@/components/BasePage';

export default function Portfolios({posts}) {
   
  return (
    <BaseLayout>
    <BasePage>
      <h1>This is the Portfolio page</h1>
      <ul>
          { posts && posts.map((post) => {
              return(
                  <li key={post.id}>
                    <Link href={`/portfolios/${post.id}`}>
                    <a>{post.title}</a>
                    </Link>
                  </li>
              )
          })}
      </ul>
     </BasePage>
    </BaseLayout>
  );
}

Portfolios.getInitialProps = async () => {
  let posts = [];
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts = res.data;
  } catch (e) {
    console.error(e);
  }

  return { posts: posts.slice(0, 10) };
};