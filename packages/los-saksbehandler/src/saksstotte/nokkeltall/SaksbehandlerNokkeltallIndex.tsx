import React from 'react';

import { RestApiPathsKeys, restApiHooks } from '../../data/fplosSaksbehandlerRestApi';

import { SaksbehandlerNokkeltallPanel } from './SaksbehandlerNokkeltallPanel';

interface Props {
  valgtSakslisteId: number;
}

export const SaksbehandlerNokkeltallIndex = ({ valgtSakslisteId }: Props) => {
  const { data: nyeOgFerdigstilteOppgaver } = restApiHooks.useRestApi(
    RestApiPathsKeys.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,
    { sakslisteId: valgtSakslisteId },
    {
      updateTriggers: [valgtSakslisteId],
    },
  );

  return <SaksbehandlerNokkeltallPanel nyeOgFerdigstilteOppgaver={nyeOgFerdigstilteOppgaver} />;
};
