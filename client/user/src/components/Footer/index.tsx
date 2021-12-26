import styles from './styles.module.scss';
import LogoFooter from '../../assets/logo-footer.svg';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import IconButtonTop from '../../assets/top.svg';
import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';

export function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.logo}>
          <div>
            <LogoFooter />
            <h1>
              Construindo sonhos<span>.</span>
            </h1>
          </div>
          <p>
            Construágil 2021
            <br />
            Todos os direitos reservados
            <br />
            Desenvolvido com
            <b> ❤</b> por
            <Link href="https://pollarcode.com">
              <a target="_blank"> Pollar Code</a>
            </Link>
          </p>
        </div>
        <nav className={styles.nav}>
          <h3>Mapa do Site</h3>
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
      </div>
      <nav className={styles.navCopy}>
        <div className={`container ${styles.content}`}>
          <div className={styles.social}>
            <Link href="https://www.facebook.com/construagil.grb">
              <a target="_blank">
                <Facebook />
              </a>
            </Link>
            <Link href="https://www.instagram.com/_construagil">
              <a target="_blank">
                <Instagram />
              </a>
            </Link>
          </div>
          <button onClick={scrollToTop}>
            <IconButtonTop />
          </button>
        </div>
      </nav>
    </footer>
  );
}
