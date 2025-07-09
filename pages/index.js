import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TamaPlayShop</title>
        <meta name="description" content="Gioca, Vinci e Guadagna con TamaPlayShop!" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>🎮 TamaPlayShop</h1>
        <div className={styles.grid}>
          <a href="#" className={styles.card}><h2>🕹️ Giochi</h2></a>
          <a href="#" className={styles.card}><h2>🎁 Premi</h2></a>
          <a href="#" className={styles.card}><h2>🤝 Collabora con noi</h2></a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by RewardRush™</p>
      </footer>
    </div>
  )
}
