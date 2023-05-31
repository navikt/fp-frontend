import React, { FunctionComponent, useCallback } from 'react';
import { MenyEndreUtlandIndex, FormValues as EndreUtlandFormValues } from '@navikt/fp-sak-meny-endre-utland';
import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';

interface OwnProps {
  saksnummer: string;
  fagsakMarkering: string | undefined;
  oppdaterFagsak: () => void;
  hentOgSettBehandling: () => void;
  lukkModal: () => void;
}

const EndreFagsakMarkeringMenyModal: FunctionComponent<OwnProps> = ({
  saksnummer,
  fagsakMarkering,
  oppdaterFagsak,
  hentOgSettBehandling,
  lukkModal,
}) => {
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
      fagsakMarkering={fagsakMarkering}
      endreFagsakMarkering={endreFagsakMarkering}
      lukkModal={lukkModal}
    />
  );
};

export default EndreFagsakMarkeringMenyModal;
