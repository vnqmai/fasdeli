import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <div className={styles.grid}>
          <Link href="/admin">
            <a className={styles.card}>
              <h2>Admin &rarr;</h2>
              <p>Go to admin page.</p>
            </a>
          </Link>

          <Link href="/consumer">
            <a className={styles.card}>
              <h2>Consumer &rarr;</h2>
              <p>Go to consumer page.</p>
            </a>
          </Link>
          
        </div>
      </main>

    </div>
  )
}

export default Home
