
import BaseLayout from '@/components/shared/BaseLayout'
import Link from 'next/link';
import BasePage from '@/components/BasePage';
import { useGetPosts} from '@/actions';

export default function Portfolios() {
const { data, error, loading } = useGetPosts();
 
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
