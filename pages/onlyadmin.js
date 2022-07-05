import React from 'react';
import BaseLayout from '@/components/shared/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';

const OnlyAdmin = ({ user, loading }) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <h1>This is the Admin page - hello {user.name}</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(OnlyAdmin)('admin');
