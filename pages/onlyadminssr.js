import BaseLayout from '@/components/shared/BaseLayout';
import BasePage from '@/components/BasePage';
import { authorizeUser, withAuth } from '@/utils/auth0';

export default function OnlyAdminSSR({ user, title }) {
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>
        <h1>I am Only Admin SSR Page - Hello {user && user.name}</h1>
        <h2>{title}</h2>
      </BasePage>
    </BaseLayout>
  );
}

const getTitle = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ title: 'My new title' });
    });
  }, 500);
};

export const getServerSideProps = withAuth(async ({ req, res }, user) => {
  const title = await getTitle();
  return title;
})('admin');
