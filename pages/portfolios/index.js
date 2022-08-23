import BaseLayout from '@/components/shared/BaseLayout';
import { useRouter } from 'next/router';
import BasePage from '@/components/BasePage';
import { Row, Col } from 'reactstrap';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';
import PortfolioCard from '../../components/PortfolioCard';

export default function Portfolios({ portfolios }) {
  const router = useRouter();
  const { data: dataU, loading: loadingU } = useGetUser();

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage header='Portfolios' className='portfolio-page'>
        <Row>
          {portfolios &&
            portfolios.map((portfolio) => (
              <Col
                key={portfolio._id}
                onClick={() => {
                  router.push(
                    '/portfolios/[id]',
                    `/portfolios/${portfolio._id}`
                  );
                }}
                md='4'
              >
                <PortfolioCard portfolio={portfolio} />
              </Col>
            ))}
        </Row>
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
