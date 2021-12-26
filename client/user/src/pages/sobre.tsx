import styles from '../styles/pages/about.module.scss';
import { Title } from '../components/Title';
// import RandonLogo from '../assets/randon.svg';
import VideplastLogo from '../assets/videplast.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main className={`container ${styles.about}`}>
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
          <div>
            <Image
              src="/images/polpabrasil.svg"
              alt="Image client"
              height="56"
              width="160"
            />
          </div>
          <div>
            <Image
              src="/images/duelo.svg"
              alt="Image client"
              height="56"
              width="160"
            />
          </div>

          <Link href="http://www.vinhosrandon.com.br">
            <a target="_blank">
              <li>
                <VideplastLogo />
              </li>
            </a>
          </Link>

          <Link href="https://www.videplast.com.br">
            <a target="_blank">
              <li>
                <VideplastLogo />
              </li>
            </a>
          </Link>
        </ul>
      </section>
    </main>
  );
}
