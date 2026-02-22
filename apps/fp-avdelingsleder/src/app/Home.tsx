import { Link, Route, Routes } from 'react-router-dom';

import { NotFoundPage } from '@navikt/fp-sak-infosider';
import type { fplosInitLinksDto } from '@navikt/fp-types';

import { AvdelingslederIndex } from './AvdelingslederIndex';

interface Props {
  headerHeight: number;
  initData: fplosInitLinksDto;
}

/**
 * Home
 *
 * Wrapper for sideinnholdet som vises under header.
 */
export const Home = ({ headerHeight, initData }: Props) => {
  return (
    <div style={{ margin: `${headerHeight}px auto 0` }}>
      <Routes>
        <Route path="/" element={<AvdelingslederIndex initData={initData} />} />
        <Route path="*" element={<NotFoundPage renderSomLenke={tekst => <Link to="/">{tekst}</Link>} />} />
      </Routes>
    </div>
  );
};
