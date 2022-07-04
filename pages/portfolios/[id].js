import React from 'react'
import BaseLayout from '@/components/shared/BaseLayout'
import { useRouter } from 'next/router'
import { useGetPostsById } from '@/actions';
import BasePage from '@/components/BasePage';
import {useGetUser} from '@/actions/user';

export default function Portfolio() {
    const router = useRouter();
    const {data: portfolio, error, loading} = useGetPostsById(router.query.id)
    const {data: dataU, loading: loadingU} = useGetUser();
  return (
    <BaseLayout user={dataU} loading={loadingU}>
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
