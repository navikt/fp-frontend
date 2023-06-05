import React, { FunctionComponent } from 'react';

import { Fagsak } from '@navikt/fp-types';
import { NotatSakIndex } from '@navikt/fp-sak-notat';

import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';

interface OwnProps {
  fagsak: Fagsak;
}

const NotatIndex: FunctionComponent<OwnProps> = ({ fagsak }) => {
  const { startRequest: lagreNotat } = restFagsakApiHooks.useRestApiRunner(FagsakApiKeys.SUBMIT_MESSAGE);

  return <NotatSakIndex fagsak={fagsak} />;
};

export default NotatIndex;
