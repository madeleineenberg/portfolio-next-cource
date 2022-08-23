import React from 'react';
import BaseLayout from '@/components/shared/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';

export default function About() {
  const { data, loading } = useGetUser();
  debugger;
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage header='About'>
        <h1>This is about me</h1>
      </BasePage>
    </BaseLayout>
  );
}
