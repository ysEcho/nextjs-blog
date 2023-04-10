import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
         반우수 <a href="https://nextjs.org">2021060682</a>
        </h1>

        <p className={styles.description}>
          This my self-introduction 
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>나이</h3>
            <p>21.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>학교</h3>
            <p>한양대학교</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>취미 및 생활</h3>
            <p>저는 독서, 여행 그리고 새로운 것을 시도하는 것을 좋아합니다. 여가 시간에는 좋은 책을 읽거나 모험을 떠나기를 좋아합니다. 또한 다양한 음식과 문화를 경험하는 것을 좋아합니다. 특히 여행 중에 현지 음식을 맛보는 것이 좋습니다.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>학습 계획</h3>
            <p>
            나는 새로운 기술을 학습하거나 기술을 향상시키기 위해 일주일간 시간을 투자하기로 결정했습니다. 나는 상세한 계획을 세울 것입니다. 매일 학습 및 연습해야 할 내용이 포함됩니다. 학습하는 동안, 나는 관련 문헌을 읽고 비디오 강의를 시청하며 온라인 강좌에 참여할 것입니다. 나는 주기적으로 학습한 내용을 검토하고 요약하려고 노력하며, 이를 적용해 볼 것입니다.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
