import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { hentDokumentLenke } from '@navikt/fp-konstanter';
import { DokumenterSakIndex } from '@navikt/fp-sak-dokumenter';
import type { Dokument } from '@navikt/fp-types';

import { useFagsakApi } from '../../data/fagsakApi';
import { SupportHeaderAndContent } from '../SupportHeader';

import styles from './DokumentIndex.module.css';

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
  toggleVisUtvidetBehandlingDetaljerKnapp: React.ReactElement;
}

const EMPTY_ARRAY = [] as Dokument[];

/**
 * DokumentIndex
 *
 *  Har ansvar for å hente sakens dokumenter fra state og rendre det i en liste.
 */
export const DokumentIndex = ({
  behandlingUuid,
  behandlingVersjon,
  saksnummer,
  toggleVisUtvidetBehandlingDetaljerKnapp,
}: Props) => {
  const api = useFagsakApi();
  const intl = useIntl();

  const { data: alleDokumenter = EMPTY_ARRAY, status } = useQuery(
    api.hentDokumenter(saksnummer, behandlingUuid, behandlingVersjon),
  );

  const [top, setTop] = useState<number>();

  if (status === 'pending') {
    return <LoadingPanel />;
  }

  const sorterteDokumenter = alleDokumenter.toSorted(sorterDokumenter);

  return (
    <div
      className={styles.overflow}
      style={{ height: `calc(100vh - ${top}px)` }}
      ref={el => {
        if (el) {
          setTop(el.getBoundingClientRect().top);
        }
      }}
    >
      <SupportHeaderAndContent
        tekst={intl.formatMessage({ id: 'DokumentIndex.Dokumenter' })}
        antall={sorterteDokumenter.length}
        toggleVisUtvidetBehandlingDetaljerKnapp={toggleVisUtvidetBehandlingDetaljerKnapp}
      >
        <DokumenterSakIndex
          documents={sorterteDokumenter}
          selectDocumentCallback={selectDocument(saksnummer)}
          behandlingUuid={behandlingUuid}
        />
      </SupportHeaderAndContent>
    </div>
  );
};
