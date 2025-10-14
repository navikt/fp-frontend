import { Link, Route, Routes } from 'react-router-dom';

import { NotFoundPage } from '@navikt/fp-sak-infosider';

import { OppgaveJournalføringIndex } from './OppgaveJournalføringIndex';

import styles from './home.module.css';

interface Props {
  headerHeight: number;
  ansattIdent?: string;
}

/**
 * Home
 *
 * Wrapper for sideinnholdet som vises under header.
 */
export const Home = ({ headerHeight, ansattIdent }: Props) => {
  return (
    <div className={styles['content']} style={{ margin: `${headerHeight}px auto 0` }}>
      <Routes>
        <Route path="/" element={<OppgaveJournalføringIndex ansattIdent={ansattIdent} />} />
        <Route path="*" element={<NotFoundPage renderSomLenke={tekst => <Link to="/">{tekst}</Link>} />} />
      </Routes>
    </div>
  );
};
