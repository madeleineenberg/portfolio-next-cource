import React from 'react';
import BaseLayout from '@/components/shared/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';

const Secret = ({ user, loading }) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <h1>This is the Secret page - hello {user.name}</h1>
      </BasePage>
    </BaseLayout>
  );
};

// High Order Component - HOC
// Simple function that takes a component and returns new
// component with some extended functionality

// function withAuth(Component) {
//   return function(props) {
//     return <Component title="Hello World" {...props}/>
//   }
// }

// const withAuth = (Component) => props =>
//   <Component title="Hello World" {...props}/>

export default withAuth(Secret)();
