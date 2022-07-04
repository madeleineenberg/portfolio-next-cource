import React from 'react'
import BaseLayout from '@/components/shared/BaseLayout';
import BasePage from '@/components/BasePage';
import  {useGetUser} from '@/actions/user'


export default function About() {
  const {data, loading} = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage>
        <h1>This is the About page</h1>
      </BasePage>
    </BaseLayout>
  );
}
