import React, { useCallback } from 'react';

import { KodeverkType } from '@navikt/fp-kodeverk';
import { FormValues as EndreUtlandFormValues, MenyEndreUtlandIndex } from '@navikt/fp-sak-meny-endre-utland';
import { Saksmarkering } from '@navikt/fp-types';

import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';
import { useFpSakKodeverk } from '../../data/useKodeverk';

interface Props {
  saksnummer: string;
  fagsakMarkeringer: Saksmarkering[] | undefined;
  oppdaterFagsak: () => void;
  hentOgSettBehandling: () => void;
  lukkModal: () => void;
}

export const EndreFagsakMarkeringMenyModal = ({
  saksnummer,
  fagsakMarkeringer,
  oppdaterFagsak,
  hentOgSettBehandling,
  lukkModal,
}: Props) => {
  const fagsakMarkeringerKodeverk = useFpSakKodeverk(KodeverkType.FAGSAK_MARKERING).sort((a, b) =>
    a.navn.localeCompare(b.navn),
  );

  const { startRequest: endreSaksmerking } = restFagsakApiHooks.useRestApiRunner(FagsakApiKeys.ENDRE_SAK_MARKERING);

  const endreFagsakMarkering = useCallback(
    (params: EndreUtlandFormValues) =>
      endreSaksmerking(params).then(() => {
        hentOgSettBehandling();
        oppdaterFagsak();
      }),
    [oppdaterFagsak],
  );

  return (
    <MenyEndreUtlandIndex
      saksnummer={saksnummer}
      fagsakMarkeringer={fagsakMarkeringer}
      endreFagsakMarkering={endreFagsakMarkering}
      lukkModal={lukkModal}
      fagsakMarkeringerKodeverk={fagsakMarkeringerKodeverk}
    />
  );
};
