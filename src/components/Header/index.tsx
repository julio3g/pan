import Image from 'next/image';
import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';
import Logo from '../../../public/images/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link href="/" passHref>
          <a>
            {/* <Image
              src="/images/logo.svg"
              alt="Construágil logo"
              width={182}
              height={40}
            /> */}
            <Logo />
          </a>
        </Link>
        <nav className={styles.headerNav}>
          <ul>
            <li>
              <ActiveLink activeClassName={styles.active} href="/">
                <a>Home</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/servicos">
                <a>Serviços</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/obras">
                <a>Obras</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/sobre">
                <a>Sobre</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/contato">
                <a>Contato</a>
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </nav>
    </header>
  );
}
