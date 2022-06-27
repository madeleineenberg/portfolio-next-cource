import React from 'react'
import BaseLayout from '@/components/shared/BaseLayout'
import { useRouter } from 'next/router'
import { useGetData } from '@/actions';
import BasePage from '@/components/BasePage';

export default function Portfolio() {
    const router = useRouter();
    const {data: portfolio, error, loading} = useGetData(router.query.id ?  `/api/v1/posts/${router.query.id}` : null)
  return (
    <BaseLayout>
      <BasePage>
        {loading && <p>Loading Data...</p>}
        {error && <div className='alert alert-danger'>{error.message}</div>}
        {portfolio && (
          <>
            <h1>Portfolio detail page</h1>
            <h2>{router.query.id}</h2>
            <h2>{portfolio.title}</h2>
            <p>Body: {portfolio.body}</p>
            <p>ID: {portfolio.id}</p>
          </>
        )}
      </BasePage>
    </BaseLayout>
  );
}
