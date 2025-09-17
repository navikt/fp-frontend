import { useIntl } from 'react-intl';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { NotatSakIndex } from '@navikt/fp-sak-notat';
import type { Fagsak } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { FagsakRel, initFetchOptions, useFagsakApi } from '../../data/fagsakApi';
import { SupportHeaderAndContent } from '../SupportHeader';

interface Props {
  fagsak: Fagsak;
  toggleVisUtvidetBehandlingDetaljerKnapp: React.ReactElement;
}

export const NotatIndex = ({ fagsak, toggleVisUtvidetBehandlingDetaljerKnapp }: Props) => {
  const queryClient = useQueryClient();
  const api = useFagsakApi();
  const intl = useIntl();

  const { mutate: lagreNotat } = useMutation({
    mutationFn: (valuesToStore: { saksnummer: string; notat: string }) =>
      api.lagreNotat(valuesToStore.saksnummer, valuesToStore.notat),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [FagsakRel.FETCH_FAGSAK],
      });
    },
  });

  const initFetchQuery = useQuery(initFetchOptions());
  const { innloggetBruker } = notEmpty(initFetchQuery.data);

  return (
    <SupportHeaderAndContent
      tekst={intl.formatMessage({ id: 'NotatIndex.Notatblokk' })}
      antall={fagsak.notater.length}
      brukPadding={false}
      toggleVisUtvidetBehandlingDetaljerKnapp={toggleVisUtvidetBehandlingDetaljerKnapp}
    >
      <NotatSakIndex
        saksnummer={fagsak.saksnummer}
        notater={fagsak.notater}
        lagreNotat={lagreNotat}
        saksbehandlerNavn={innloggetBruker.brukernavn}
        kanSaksbehandle={innloggetBruker.kanSaksbehandle}
      />
    </SupportHeaderAndContent>
  );
};
