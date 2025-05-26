import React from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { DokumenterSakIndex } from '@navikt/fp-sak-dokumenter';
import type { Dokument } from '@navikt/fp-types';

import { useFagsakApi } from '../../data/fagsakApi';
import { SupportHeaderAndContent } from '../SupportHeader';

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

  const { data: alleDokumenter = [], status } = useQuery(
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
      toggleVisUtvidetBehandlingDetaljerKnapp={toggleVisUtvidetBehandlingDetaljerKnapp}
    >
      <DokumenterSakIndex documents={sorterteDokumenter} saksnummer={saksnummer} behandlingUuid={behandlingUuid} />
    </SupportHeaderAndContent>
  );
};
