import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import LocalTimeWidget from '@/components/widgets/localTime'
import GitHubWidget from '@/components/widgets/github'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mia Taylor</title>
        <meta name="description" content="Mia Taylor's cv site :)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.column}>
            <div className={styles.header}>
                <h1 className="text-6xl dark:text-white mr-lg">Mia Taylor</h1>
            </div>
            <GitHubWidget />
        </div>
        <div className={styles.column}>
            <LocalTimeWidget />
        </div>
      </main>
    </>
  )
}
