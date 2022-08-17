import BaseLayout from '@/components/shared/BaseLayout';
import Link from 'next/link';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';

export default function Portfolios({ portfolios }) {
  const { data: dataU, loading: loadingU } = useGetUser();

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage>
        <h1>This is the Portfolio page</h1>

        <ul>
          {portfolios &&
            portfolios.map((portfolio) => {
              return (
                <li key={portfolio._id}>
                  <Link
                    as={`/portfolios/${portfolio._id}`}
                    href={'/portfolios/[id]'}
                  >
                    <a>{portfolio.title}</a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </BasePage>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;

  return {
    props: { portfolios },
  };
}
