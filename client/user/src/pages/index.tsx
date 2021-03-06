import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Slide } from '../components/Slide';
import Arrow from '../../public/assets/arrow.svg';
import styles from '../styles/pages/home.module.scss';
import { GetStaticProps } from 'next';

export default function Home() {
  return (
    <main>
      <Head>
        <title>
          Construágil - Construindo seus sonhos.
          {/* · */}
        </title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <section className={`container ${styles.banner}`}>
        <div>
          <h1>Entre em contato, solicite um orçamento ou visite-nos</h1>
          <Link href="/contato">
            <a>
              Entre em Contato
              <Arrow />
            </a>
          </Link>
        </div>
        <Image
          src="/shared/image-banner.svg"
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
            <Image
              src="/shared/services/image-1.jpg"
              alt="image service"
              layout="fill"
              objectFit="cover"
            />
          </li>
          <li>
            <span className={styles.overlay}></span>
            <Image
              src="/shared/services/image-2.jpg"
              alt="image service"
              layout="fill"
              objectFit="cover"
            />
          </li>
          <li>
            <span className={styles.overlay}></span>
            <Image
              src="/shared/services/image-3.jpg"
              alt="image service"
              layout="fill"
              objectFit="cover"
            />
          </li>
          <li>
            <span className={styles.overlay}></span>
            <Image
              src="/shared/services/image-4.jpg"
              alt="image service"
              layout="fill"
              objectFit="cover"
            />
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
          <li>
            <div>
              <Image
                src="/icons/truck.svg"
                alt="Truck"
                width={32}
                height={32}
              />
            </div>
            <span>Caçamba, Retroescavadeira e Mini Escavadeira</span>
          </li>
          <li>
            <div>
              <Image
                src="/icons/floor.svg"
                alt="Floor"
                width={32}
                height={32}
              />
            </div>
            <span>Pisos Industriais</span>
          </li>
          <li>
            <div>
              <Image
                src="/icons/buildings.svg"
                alt="Building"
                width={32}
                height={32}
              />
            </div>
            <span>Construção de Casas e Barracões</span>
          </li>
        </ul>
      </section>
      <Slide />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'publication')],
    {
      fetch: [
        'publication.title',
        'publication.thumbnail',
        'publication.content',
      ],
      pageSize: 3,
      orderings: '[document.last_publication_date desc]',
    },
  );
  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      thumbnail: { url: post.data.thumbnail.url },
      excerpt:
        post.data.content.find((content: any) => content.type === 'paragraph')
          ?.text ?? '',
      createdAt: new Date(post.first_publication_date!).toLocaleString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        },
      ),
    };
  });
  // revalidate: 60 * 60 (one hour), // In seconds
  return { props: { posts }, revalidate: 60 * 60 };
};
