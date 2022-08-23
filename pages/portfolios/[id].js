import React from 'react';
import BaseLayout from '@/components/shared/BaseLayout';
import { useRouter } from 'next/router';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';

export default function Portfolio({ portfolio }) {
  const router = useRouter();
  const { data: dataU, loading: loadingU } = useGetUser();
  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage header='Portfolio Detail'>{JSON.stringify(portfolio)}</BasePage>
    </BaseLayout>
  );
}

// export async function getServerSideProps({ query }) {
//   const json = await new PortfolioApi().getById(query.id);
//   const portfolio = json.data;

//   return {
//     props: { portfolio },
//   };
// }

// This function is executed at the build time
export async function getStaticPaths() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;

  const paths = portfolios.map((portfolio) => {
    return {
      params: { id: portfolio._id },
    };
  });

  // fallback: false means that "not found pages" will be resolved into 404 page
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;

  return {
    props: { portfolio },
  };
}
