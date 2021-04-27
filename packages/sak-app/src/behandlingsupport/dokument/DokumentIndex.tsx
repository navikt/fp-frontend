import React, { FunctionComponent, useMemo } from 'react';

import { LoadingPanel, usePrevious } from '@fpsak-frontend/shared-components';
import DokumenterSakIndex from '@fpsak-frontend/sak-dokumenter';
import { Dokument } from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import useBehandlingEndret from '../../behandling/useBehandlingEndret';
import { FpsakApiKeys, restApiHooks } from '../../data/fpsakApi';

// TODO (hb) lag linker, ikke callback
// TODO (hb) Kan implementeres med spesialisert selector som genererer hrefs til bruk i mapStateToProps
const selectDocument = (saksNr: string) => (_e: React.SyntheticEvent, _id: number, document: Dokument): void => {
  window.open(`/fpsak/api/dokument/hent-dokument?saksnummer=${saksNr}&journalpostId=${document.journalpostId}&dokumentId=${document.dokumentId}`, '_blank');
};

const sorterDokumenter = ((dok1: Dokument, dok2: Dokument): number => {
  if (!dok1.tidspunkt) {
    return +1;
  }

  if (!dok2.tidspunkt) {
    return -1;
  }
  return dok2.tidspunkt.localeCompare(dok1.tidspunkt);
});

interface OwnProps {
  saksnummer: string;
  behandlingId?: number;
  behandlingVersjon?: number;
}

const EMPTY_ARRAY = [] as Dokument[];

/**
 * DokumentIndex
 *
 * Container komponent. Har ansvar for å hente sakens dokumenter fra state og rendre det i en liste.
 */
export const DokumentIndex: FunctionComponent<OwnProps> = ({
  behandlingId,
  behandlingVersjon,
  saksnummer,
}) => {
  const forrigeSaksnummer = usePrevious(saksnummer);
  const erBehandlingEndretFraUndefined = useBehandlingEndret(behandlingId, behandlingVersjon);
  const { data: alleDokumenter = EMPTY_ARRAY, state } = restApiHooks.useRestApi(FpsakApiKeys.ALL_DOCUMENTS, { saksnummer }, {
    updateTriggers: [behandlingId, behandlingVersjon],
    suspendRequest: !!forrigeSaksnummer && erBehandlingEndretFraUndefined,
    keepData: true,
  });

  const sorterteDokumenter = useMemo(() => [...alleDokumenter].sort(sorterDokumenter), [alleDokumenter]);

  if (state === RestApiState.LOADING) {
    return <LoadingPanel />;
  }

  return (
    <DokumenterSakIndex
      documents={sorterteDokumenter}
      selectDocumentCallback={selectDocument(saksnummer)}
      behandlingId={behandlingId}
    />
  );
};

export default DokumentIndex;
