import React from 'react'
import BaseLayout from '@/components/shared/BaseLayout'
import { useRouter } from 'next/router'
import axios from 'axios';
import BasePage from '@/components/BasePage';

export default function Portfolio({portfolio}) {
    const router = useRouter();
  return (
    <BaseLayout>
      <BasePage>
        <h1>Portfolio detail page</h1>
        <h2>{router.query.id}</h2>
        <h2>{portfolio.title}</h2>
        <p>Body: {portfolio.body}</p>
        <p>ID: {portfolio.id}</p>
      </BasePage>
    </BaseLayout>
  );
}

Portfolio.getInitialProps = async ({query}) => {
    let post = {};
    
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
        post = res.data;
    } catch(e) {
        console.error(e)
    }

    return {
        portfolio: post
    }
};
