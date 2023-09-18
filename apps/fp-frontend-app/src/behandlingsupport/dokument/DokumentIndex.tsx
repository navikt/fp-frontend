import React, { FunctionComponent, useMemo } from 'react';
import { DokumenterSakIndex } from '@navikt/ft-sak-dokumenter';
import { LoadingPanel, VerticalSpacer, usePrevious } from '@navikt/ft-ui-komponenter';
import { Dokument } from '@navikt/ft-types';

import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { hentDokumentLenke } from '@navikt/fp-konstanter';

import { useIntl } from 'react-intl';
import useBehandlingEndret from '../../behandling/useBehandlingEndret';
import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';

import '@navikt/ft-sak-dokumenter/dist/style.css';
import SupportHeaderAndContent from '../SupportHeader';

const selectDocument =
  (saksNr: string) =>
  (_e: React.SyntheticEvent, _id?: number | string, document?: Dokument): void => {
    if (document) {
      const newWindow = window.open(hentDokumentLenke(saksNr, document.journalpostId, document.dokumentId), '_blank');
      if (newWindow) {
        newWindow.addEventListener('load', () => {
          newWindow.document.title = document.tittel || 'Dokument';
        });
      }
    }
  };

const sorterDokumenter = (dok1: Dokument, dok2: Dokument): number => {
  if (!dok1.tidspunkt) {
    return +1;
  }

  if (!dok2.tidspunkt) {
    return -1;
  }
  return dok2.tidspunkt.localeCompare(dok1.tidspunkt);
};

interface OwnProps {
  saksnummer: string;
  behandlingUuid?: string;
  behandlingVersjon?: number;
}

const EMPTY_ARRAY = [] as Dokument[];

/**
 * DokumentIndex
 *
 * Container komponent. Har ansvar for å hente sakens dokumenter fra state og rendre det i en liste.
 */
const DokumentIndex: FunctionComponent<OwnProps> = ({ behandlingUuid, behandlingVersjon, saksnummer }) => {
  const intl = useIntl();
  const forrigeSaksnummer = usePrevious(saksnummer);
  const erBehandlingEndretFraUndefined = useBehandlingEndret(behandlingUuid, behandlingVersjon);

  const { data: alleDokumenter = EMPTY_ARRAY, state } = restFagsakApiHooks.useRestApi(
    FagsakApiKeys.ALL_DOCUMENTS,
    { saksnummer },
    {
      updateTriggers: [behandlingUuid, behandlingVersjon],
      suspendRequest: !!forrigeSaksnummer && erBehandlingEndretFraUndefined,
      keepData: true,
    },
  );

  const sorterteDokumenter = useMemo(() => [...alleDokumenter].sort(sorterDokumenter), [alleDokumenter]);

  if (state === RestApiState.LOADING) {
    return <LoadingPanel />;
  }

  return (
    <SupportHeaderAndContent
      tekst={intl.formatMessage({ id: 'DokumentIndex.Dokumenter' })}
      antall={sorterteDokumenter.length}
    >
      <VerticalSpacer sixteenPx />
      <DokumenterSakIndex
        documents={sorterteDokumenter}
        selectDocumentCallback={selectDocument(saksnummer)}
        behandlingUuid={behandlingUuid}
      />
    </SupportHeaderAndContent>
  );
};

export default DokumentIndex;
