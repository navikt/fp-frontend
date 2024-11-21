import React, { useCallback } from 'react';

import { Fagsak } from '@navikt/fp-types';
import { NotatSakIndex } from '@navikt/fp-sak-notat';

import { useIntl } from 'react-intl';
import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';
import { SupportHeaderAndContent } from '../SupportHeader';

interface Props {
  fagsak: Fagsak;
  oppdaterFagsak: () => void;
}

export const NotatIndex = ({ fagsak, oppdaterFagsak }: Props) => {
  const intl = useIntl();
  const { startRequest: lagreNotat } = restFagsakApiHooks.useRestApiRunner(FagsakApiKeys.LAGRE_NOTAT);
  const lagre = useCallback(
    (params: { saksnummer: string; notat: string }) => lagreNotat(params).then(() => oppdaterFagsak()),
    [],
  );

  const initFetch = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.INIT_FETCH);
  const { innloggetBruker } = initFetch;

  return (
    <SupportHeaderAndContent
      tekst={intl.formatMessage({ id: 'NotatIndex.Notatblokk' })}
      antall={fagsak.notater.length}
      brukPadding={false}
    >
      <NotatSakIndex
        saksnummer={fagsak.saksnummer}
        notater={fagsak.notater}
        lagreNotat={lagre}
        saksbehandlerNavn={innloggetBruker.brukernavn}
        kanSaksbehandle={innloggetBruker.kanSaksbehandle}
      />
    </SupportHeaderAndContent>
  );
};
