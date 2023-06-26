import React, { FunctionComponent } from 'react';

import { Fagsak } from '@navikt/fp-types';
import { NotatSakIndex } from '@navikt/fp-sak-notat';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { useIntl } from 'react-intl';
import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';
import SupportHeader from '../SupportHeader';

interface OwnProps {
  fagsak: Fagsak;
}

const NotatIndex: FunctionComponent<OwnProps> = ({ fagsak }) => {
  const intl = useIntl();
  const { startRequest: lagreNotat } = restFagsakApiHooks.useRestApiRunner(FagsakApiKeys.LAGRE_NOTAT);

  const initFetch = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.INIT_FETCH);
  const { innloggetBruker } = initFetch;

  return (
    <>
      <SupportHeader tekst={intl.formatMessage({ id: 'NotatIndex.Notater' })} antall={fagsak.notater.length} />
      <VerticalSpacer sixteenPx />
      <NotatSakIndex
        saksnummer={fagsak.saksnummer}
        notater={fagsak.notater}
        lagreNotat={lagreNotat}
        saksbehandlerNavn={innloggetBruker.brukernavn}
      />
    </>
  );
};

export default NotatIndex;
