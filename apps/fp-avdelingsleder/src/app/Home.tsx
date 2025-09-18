import { Link, Route, Routes } from 'react-router-dom';

import { NotFoundPage } from '@navikt/fp-sak-infosider';

import type { InitDataLos } from '../data/fplosAvdelingslederApi';
import { AvdelingslederIndex } from './AvdelingslederIndex';

import styles from './home.module.css';

interface Props {
  headerHeight: number;
  initData: InitDataLos;
}

/**
 * Home
 *
 * Wrapper for sideinnholdet som vises under header.
 */
export const Home = ({ headerHeight, initData }: Props) => {
  return (
    <div className={styles['content']} style={{ margin: `${headerHeight}px auto 0` }}>
      <Routes>
        <Route path="/" element={<AvdelingslederIndex initData={initData} />} />
        <Route path="*" element={<NotFoundPage renderSomLenke={tekst => <Link to="/">{tekst}</Link>} />} />
      </Routes>
    </div>
  );
};
