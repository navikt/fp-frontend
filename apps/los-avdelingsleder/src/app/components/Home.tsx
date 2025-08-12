import { Link, Route, Routes } from 'react-router-dom';

import { AvdelingslederIndex } from '@navikt/fp-los-avdelingsleder';
import { NotFoundPage } from '@navikt/fp-sak-infosider';
import type { NavAnsatt } from '@navikt/fp-types';

import styles from './home.module.css';

interface Props {
  headerHeight: number;
  navAnsatt?: NavAnsatt;
}

/**
 * Home
 *
 * Wrapper for sideinnholdet som vises under header.
 */
export const Home = ({ headerHeight, navAnsatt }: Props) => {
  return (
    <div className={styles.content} style={{ margin: `${headerHeight}px auto 0` }}>
      <Routes>
        <Route path="/" element={<AvdelingslederIndex navAnsatt={navAnsatt} />} />
        <Route path="*" element={<NotFoundPage renderSomLenke={tekst => <Link to="/">{tekst}</Link>} />} />
      </Routes>
    </div>
  );
};
