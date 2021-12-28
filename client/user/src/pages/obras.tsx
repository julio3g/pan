import Head from 'next/head';
import { Title } from '../components/Title';
import { Clients } from '../components/Clients';

export default function worker() {
  return (
    <main className={`container content `}>
      <Head>
        <title>Obras - Construágil</title>
        <meta
          name="description"
          content="Empresa de Construção Civil, especializada em pisos industriais - Epóxi, Uretano AN e Argamassados. Serviços de mini e retroescavadeira, e caçamba."
        />
        <meta name="title" content="Obras - Construágil" />
      </Head>
      <Title title="Obras" description="confira nossas obras realizadas" />
      <Clients />
    </main>
  );
}
