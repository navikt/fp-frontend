import { KodeverkType } from '@navikt/fp-kodeverk';
import { FormValues as EndreUtlandFormValues, MenyEndreUtlandIndex } from '@navikt/fp-sak-meny-endre-utland';
import { Saksmarkering } from '@navikt/fp-types';
import React, { FunctionComponent, useCallback } from 'react';
import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';
import { useFpSakKodeverk } from '../../data/useKodeverk';

interface OwnProps {
  saksnummer: string;
  fagsakMarkeringer: Saksmarkering[] | undefined;
  oppdaterFagsak: () => void;
  hentOgSettBehandling: () => void;
  lukkModal: () => void;
}

const EndreFagsakMarkeringMenyModal: FunctionComponent<OwnProps> = ({
  saksnummer,
  fagsakMarkeringer,
  oppdaterFagsak,
  hentOgSettBehandling,
  lukkModal,
}) => {
  const fagsakMarkeringerKodeverk = useFpSakKodeverk(KodeverkType.FAGSAK_MARKERING);

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

export default EndreFagsakMarkeringMenyModal;
