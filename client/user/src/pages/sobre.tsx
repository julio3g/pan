import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Title } from '../components/Title';
import styles from '../styles/pages/about.module.scss';

export default function About() {
  return (
    <main className={`container ${styles.about}`}>
      <Head>
        <title>Sobre Nós - Construágil</title>
        <meta
          name="description"
          content="Empresa de Construção Civil, especializada em pisos industriais - Epóxi, Uretano AN e Argamassados. Serviços de mini e retroescavadeira, e caçamba."
        />
        <meta name="title" content="Sobre Nós - Construágil" />
      </Head>
      <Title title="Sobre Nós" description="conheça mais a Construágil" />
      <p>
        São mais de 20 anos de experiência no ramo da construção civil,
        conhecimento nessa área foi uma herança de família.
      </p>
      <section className={styles.wrapperInformation}>
        <div>
          <h2>Missão</h2>
          <p>
            Promover a satisfação dos nossos clientes, parceiros e colaboradores
            através da execução de atividades planejadas no segmento da
            construção civil, priorizando a qualidade dos produtos aplicados e
            qualidade técnica, a melhoria contínua dos processos acompanhando a
            evolução do segmento.
          </p>
        </div>
        <div>
          <h2>Visão</h2>
          <p>
            Ser uma empresa de destaque e referência em construção civil,
            perpetuando nosso negócio pela qualificação técnica, inovação e
            respeito as necessidades e anseios do cliente.
          </p>
        </div>
        <div>
          <h2>Valores</h2>
          <p>
            Cortesia, eficiência, e trabalho em equipe. Melhoria contínua e
            agilidade no atendimento. Comprometimento com resultados, e respeito
            à cultura do cliente. Combate ao desperdício, proteção ao meio
            ambiente. Uso racional de água e energia.
          </p>
        </div>
      </section>
      <section className={styles.clients}>
        <h2>Nossos Clientes</h2>
        <ul className={styles.wrapper}>
          {/* <Link href="http://www.vinhosrandon.com.br">
            <a target="_blank">
              <li>
                <style jsx>
                  {`
                    .imageLogo {
                      mask: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/icon-bike-black.svg');
                    }
                  `}
                </style>
                <span className={`imageLogo ${styles.imageLogo} `} />
              </li>
            </a>
          </Link> */}
          <Link href="http://www.polpabrasil.com.br">
            <a target="_blank">
              <li>
                <Image
                  src="/shared/clients/polpabrasil.svg"
                  alt="Image client"
                  height="56"
                  width="160"
                />
              </li>
            </a>
          </Link>
          <Link href="http://www.vinhosrandon.com.br">
            <a target="_blank">
              <li>
                <Image
                  src="/shared/clients/randon.svg"
                  alt="Image client"
                  height="56"
                  width="160"
                />
              </li>
            </a>
          </Link>
          <Link href="https://www.videplast.com.br">
            <a target="_blank">
              <li>
                <Image
                  src="/shared/clients/videplast.svg"
                  alt="Image client"
                  height="56"
                  width="160"
                />
              </li>
            </a>
          </Link>
          <Link href="http://www.cpel.ind.br">
            <a target="_blank">
              <li>
                <Image
                  src="/shared/clients/cpel.svg"
                  alt="Image client"
                  height="56"
                  width="160"
                />
              </li>
            </a>
          </Link>
          <Link href="http://caprima.com.br">
            <a target="_blank">
              <li>
                <Image
                  src="/shared/clients/caprima.svg"
                  alt="Image client"
                  height="56"
                  width="160"
                />
              </li>
            </a>
          </Link>
          <Link href="http://www.vinhosduelo.com.br">
            <a target="_blank">
              <li>
                <Image
                  src="/shared/clients/duelo.svg"
                  alt="Image client"
                  height="56"
                  width="160"
                />
              </li>
            </a>
          </Link>
        </ul>
      </section>
    </main>
  );
}
