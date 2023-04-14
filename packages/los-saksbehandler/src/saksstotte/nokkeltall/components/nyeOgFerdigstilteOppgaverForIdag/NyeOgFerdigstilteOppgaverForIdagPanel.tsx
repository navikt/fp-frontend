import React, { FunctionComponent, useMemo } from 'react';
import dayjs from 'dayjs';
import { FormattedMessage } from 'react-intl';
import { Heading, Label } from '@navikt/ds-react';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { KodeverkType } from '@navikt/ft-kodeverk';

import NyeOgFerdigstilteOppgaver from '../../../../typer/nyeOgFerdigstilteOppgaverTsType';
import useLosKodeverk from '../../../../data/useLosKodeverk';
import NyeOgFerdigstilteOppgaverForIdagGraf from './NyeOgFerdigstilteOppgaverForIdagGraf';

export const getNyeOgFerdigstilteForIDag = (
  nyeOgFerdigstilte: NyeOgFerdigstilteOppgaver[] = [],
): NyeOgFerdigstilteOppgaver[] => {
  const iDag = dayjs();
  return nyeOgFerdigstilte.filter(oppgave => iDag.isSame(dayjs(oppgave.dato, ISO_DATE_FORMAT), 'day'));
};

interface OwnProps {
  height: number;
  nyeOgFerdigstilteOppgaver?: NyeOgFerdigstilteOppgaver[];
}

/**
 * NyeOgFerdigstilteOppgaverForIdagPanel.
 */
const NyeOgFerdigstilteOppgaverForIdagPanel: FunctionComponent<OwnProps> = ({ height, nyeOgFerdigstilteOppgaver }) => {
  const behandlingTyper = useLosKodeverk(KodeverkType.BEHANDLING_TYPE);

  const filtrerteNyeOgFerdigstilteOppgaver = useMemo(
    () => getNyeOgFerdigstilteForIDag(nyeOgFerdigstilteOppgaver),
    [nyeOgFerdigstilteOppgaver],
  );

  return (
    <>
      <Heading size="small">
        <FormattedMessage id="NyeOgFerdigstilteOppgaverForIdagPanel.NyeOgFerdigstilte" />
      </Heading>
      <VerticalSpacer eightPx />
      <Label size="small">
        <FormattedMessage id="NyeOgFerdigstilteOppgaverForIdagPanel.IDag" />
      </Label>
      <NyeOgFerdigstilteOppgaverForIdagGraf
        height={height}
        nyeOgFerdigstilteOppgaver={filtrerteNyeOgFerdigstilteOppgaver}
        behandlingTyper={behandlingTyper}
      />
    </>
  );
};

export default NyeOgFerdigstilteOppgaverForIdagPanel;
