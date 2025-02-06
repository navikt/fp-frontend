import React from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { hentDokumentLenke } from '@navikt/fp-konstanter';
import { DokumenterSakIndex } from '@navikt/fp-sak-dokumenter';
import type { Dokument } from '@navikt/fp-types';

import { useFagsakApi } from '../../data/fagsakApi';
import { SupportHeaderAndContent } from '../SupportHeader';

const selectDocument =
  (saksNr: string) =>
  (_e: React.SyntheticEvent, _id?: number | string, document?: Dokument): void => {
    if (document) {
      const newWindow = window.open(hentDokumentLenke(saksNr, document.journalpostId, document.dokumentId), '_blank');
      if (newWindow) {
        setTimeout(() => {
          newWindow.document.title = document.tittel || 'Dokument';
        }, 1000);
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

interface Props {
  saksnummer: string;
  behandlingUuid?: string;
  behandlingVersjon?: number;
}

const EMPTY_ARRAY = [] as Dokument[];

/**
 * DokumentIndex
 *
 *  Har ansvar for å hente sakens dokumenter fra state og rendre det i en liste.
 */
export const DokumentIndex = ({ behandlingUuid, behandlingVersjon, saksnummer }: Props) => {
  const api = useFagsakApi();
  const intl = useIntl();

  const { data: alleDokumenter = EMPTY_ARRAY, status } = useQuery(
    api.hentDokumenter(saksnummer, behandlingUuid, behandlingVersjon),
  );

  if (status === 'pending') {
    return <LoadingPanel />;
  }

  const sorterteDokumenter = alleDokumenter.toSorted(sorterDokumenter);

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
