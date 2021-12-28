import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';
// import { NavLink, useLocation } from 'rea';
import styles from './styles.module.scss';
import Logo from '../../assets/logo.svg';
import useMedia from '../../Hooks/useMedia';
import React from 'react';
import { useRouter } from 'next/router';

export function Header() {
  const mobile = useMedia('(max-width: 720px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useRouter();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <nav className={`container `}>
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>
        {mobile && (
          <button
            type="button"
            aria-label="Menu"
            className={`${styles.mobileButton} ${
              mobileMenu && styles.mobileButtonActive
            }`}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <div />
          </button>
        )}
        <nav
          className={`${mobile ? styles.navMobile : styles.nav} ${
            mobileMenu && styles.navMobileActive
          }`}
        >
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
