import Image from 'next/image'
import styles from './page.module.css'
import PhotoList from '@/components/PhotoList'
import queryOptions from '@/service/photo/queries';
import { Hydrate, getDehydratedQuery } from '@/utils/react-query';

export default async function Home() {
  const { queryKey, queryFn } = queryOptions.all();

  const query = await getDehydratedQuery({ queryKey, queryFn });

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Server Side Rendering with react-query
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            soobing
          </a>
        </div>
      </div>

      <div className={styles.center}>
        
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

    {/* 서버 사이드 렌더링 & 서버 컴포넌트 */}
    <Hydrate state={{ queries: [query] }}>
      <PhotoList/>
    </Hydrate>
    </main>
  )
}
