import BaseLayout from '@/components/shared/BaseLayout';
import BasePage from '@/components/BasePage';
import { authorizeUser } from '@/utils/auth0';

export default function SecretSSR({ user }) {
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>
        <h1>I am SecretSSR Page - Hello {user && user.name}</h1>
      </BasePage>
    </BaseLayout>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const user = await authorizeUser(req, res);

  return {
    props: { user },
  };
};
