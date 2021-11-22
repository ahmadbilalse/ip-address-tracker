import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Input from '../components/Input/Input'
import Info from '../components/Info/Info'
import dynamic from "next/dynamic";
import GithubLink from '../components/GithubLink/GithubLink';

export default function Home() {
  const Map = dynamic(() => import("../components/Map/Map"), {
    ssr: false
  });

  return (
    <div>
      <Head>
        <title>IP Address Tracker</title>
        <meta name="description" content="IP address tracker with map" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.heading}>IP Address Tracker</h1>
          <div className={styles.input}>
            <Input />
          </div>
          <div >
            <GithubLink />
          </div>
          <div className={styles.info}>
            <Info />
          </div>
        </div>
        <div className={styles.bg}></div>
        <div className={styles.map} id="map">
          <Map />
        </div>
      </main>
    </div>
  )
}
