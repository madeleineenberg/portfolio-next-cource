
import BaseLayout from '@/components/shared/BaseLayout'
import Link from 'next/link';
import BasePage from '@/components/BasePage';
import { useGetPosts} from '@/actions';
import {useGetUser} from '@/actions/user';

export default function Portfolios() {
const { data, error, loading } = useGetPosts();
const {data: dataU, loading: loadingU} = useGetUser();
 
  return (
    <BaseLayout user={dataU} loading={loadingU}>
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
