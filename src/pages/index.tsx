import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

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
        <div>
          <p className="text-3xl font-bold underline">This is Mia's website!</p>
        </div>
      </main>
    </>
  )
}
