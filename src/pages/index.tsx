import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './home.module.scss';
import Arrow from '../../public/assets/arrow.svg';
import Truck from '../../public/assets/truck.svg';
import Floor from '../../public/assets/floor.svg';
import Building from '../../public/assets/buildings.svg';
import React from 'react';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <section className={`container ${styles.banner}`}>
        <div>
          <h1>Entre em contato, solicite um orçamento ou visite-nos</h1>
          <Link href="/contato">
            <a>
              Entre em Contato <Arrow />
            </a>
          </Link>
        </div>
        <Image
          src="/images/image-banner.svg"
          alt="Image banner"
          width={550}
          height={365}
        />
      </section>
      <section className={`container ${styles.clients}`}>
        <h2>Conheça nossos clientes</h2>
        <ul>
          <li>
            <span className={styles.overlay}></span>
            <img src="" alt="" />
          </li>
          <li>
            <span className={styles.overlay}></span>
            <img src="" alt="" />
          </li>
          <li>
            <span className={styles.overlay}></span>
            <img src="" alt="" />
          </li>
          <li>
            <span className={styles.overlay}></span>
            <img src="" alt="" />
          </li>
          <li>
            <span className={styles.overlay}></span>
            <img src="" alt="" />
          </li>
          <li>
            <span className={styles.overlay}></span>
            <img src="" alt="" />
          </li>
          <li>
            <span className={styles.overlay}></span>
            <img src="" alt="" />
          </li>
          <li>
            <span className={styles.overlay}></span>
            <img src="" alt="" />
          </li>
        </ul>
        <Link href="/servicos">
          <a>
            Ver mais
            <Arrow />
          </a>
        </Link>
      </section>
      <section className={styles.services}>
        <ul className={`container`}>
          <li className={styles.left}>
            <div>
              <Floor />
            </div>
            <span>Caçamba, Retroescavadeira e Mini Escavadeira</span>
          </li>
          <li className={styles.center}>
            <div>
              <Truck />
            </div>
            <span>Pisos Industriais</span>
          </li>
          <li className={styles.right}>
            <div>
              <Building />
            </div>
            <span>Construção de Casas e Barracões</span>
          </li>
        </ul>
      </section>
      <section></section>
    </main>
  );
}
