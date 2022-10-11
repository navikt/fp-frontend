import React, { FunctionComponent, useMemo } from 'react';
import dayjs from 'dayjs';
import { FormattedMessage } from 'react-intl';
import { Label } from '@navikt/ds-react';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import NyeOgFerdigstilteOppgaver from '../../../../typer/nyeOgFerdigstilteOppgaverTsType';
import NyeOgFerdigstilteOppgaverForSisteSyvGraf from './NyeOgFerdigstilteOppgaverForSisteSyvGraf';

export const getNyeOgFerdigstilteForSisteSyvDager = (nyeOgFerdigstilte: NyeOgFerdigstilteOppgaver[] = []): NyeOgFerdigstilteOppgaver[] => {
  const iDag = dayjs().startOf('day');
  return nyeOgFerdigstilte.filter((oppgave) => iDag.isAfter(dayjs(oppgave.dato, ISO_DATE_FORMAT)));
};

interface OwnProps {
  height: number;
  nyeOgFerdigstilteOppgaver?: NyeOgFerdigstilteOppgaver[];
}

/**
 * NyeOgFerdigstilteOppgaverForSisteSyvPanel.
 */
const NyeOgFerdigstilteOppgaverForSisteSyvPanel: FunctionComponent<OwnProps> = ({
  height,
  nyeOgFerdigstilteOppgaver,
}) => {
  const filtrertenyeOgFerdigstilteOppgaver = useMemo(() => getNyeOgFerdigstilteForSisteSyvDager(nyeOgFerdigstilteOppgaver), [nyeOgFerdigstilteOppgaver]);
  return (
    <>
      <VerticalSpacer eightPx />
      <Label size="small">
        <FormattedMessage id="NyeOgFerdigstilteOppgaverForSisteSyvPanel.SisteSyv" />
      </Label>
      <NyeOgFerdigstilteOppgaverForSisteSyvGraf
        height={height}
        nyeOgFerdigstilteOppgaver={filtrertenyeOgFerdigstilteOppgaver}
      />
    </>
  );
};

export default NyeOgFerdigstilteOppgaverForSisteSyvPanel;
