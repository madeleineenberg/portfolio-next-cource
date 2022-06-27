
import BaseLayout from '@/components/shared/BaseLayout'
import Link from 'next/link';
import BasePage from '@/components/BasePage';
import { useGetData } from '@/actions';

export default function Portfolios() {
const { data, error, loading } = useGetData('/api/v1/posts');
 
  return (
    <BaseLayout>
      <BasePage>
        <h1>This is the Portfolio page</h1>
        {loading && <p>Loading data...</p>}
        <ul>
          {data &&
            data.map((post) => {
              return (
                <li key={post.id}>
                  <Link href={`/portfolios/${post.id}`}> 
                    <a>{post.title}</a>
                  </Link>
                </li>
              );
            })}
        </ul>
        {error && <div className='alert alert-danger'>{error.message}</div>}
      </BasePage>
    </BaseLayout>
  );
}
