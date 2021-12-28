import Image from 'next/image';
import styles from './styles.module.scss';

export function Clients() {
  return (
    <section className={styles.clients}>
      <ul className={styles.imagesClients}>
        <li>
          <Image
            src="/shared/MG_1564-scaled-e1596194843126.jpg"
            alt="image"
            layout="fill"
            objectFit="cover"
          />
        </li>
        <li>
          <Image
            src="/shared/MG_1564-scaled-e1596194843126.jpg"
            alt="image"
            layout="fill"
            objectFit="cover"
          />
        </li>
        <li>
          <Image
            src="/shared/MG_1564-scaled-e1596194843126.jpg"
            alt="image"
            layout="fill"
            objectFit="cover"
          />
        </li>
        <li>
          <Image
            src="/shared/MG_1564-scaled-e1596194843126.jpg"
            alt="image"
            layout="fill"
            objectFit="cover"
          />
        </li>
        <li>
          <Image
            src="/shared/MG_1564-scaled-e1596194843126.jpg"
            alt="image"
            layout="fill"
            objectFit="cover"
          />
        </li>
        <li>
          <Image
            src="/shared/MG_1564-scaled-e1596194843126.jpg"
            alt="image"
            layout="fill"
            objectFit="cover"
          />
        </li>
        <li>
          <Image
            src="/shared/MG_1564-scaled-e1596194843126.jpg"
            alt="image"
            layout="fill"
            objectFit="cover"
          />
        </li>
        <li>
          <Image
            src="/shared/MG_1564-scaled-e1596194843126.jpg"
            alt="image"
            layout="fill"
            objectFit="cover"
          />
        </li>
      </ul>
      <button type="button" className={styles.button}>
        <Image
          src="/icons/arrow-down.svg"
          alt="arrow-down"
          width={12.5}
          height={14}
        />
        Carregar mais
      </button>
    </section>
  );
}
