import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import OppgaverForForsteStonadsdag from '../../../typer/oppgaverForForsteStonadsdagTsType';
import OppgaverPerForsteStonadsdagGraf from './OppgaverPerForsteStonadsdagGraf';

interface OwnProps {
  height: number;
  oppgaverPerForsteStonadsdag: OppgaverForForsteStonadsdag[];
}

/**
 * OppgaverPerForsteStonadsdagPanel.
 */
export const OppgaverPerForsteStonadsdagPanel: FunctionComponent<OwnProps> = ({
  height,
  oppgaverPerForsteStonadsdag,
}) => (
  <>
    <Label size="small">
      <FormattedMessage id="OppgaverPerForsteStonadsdagPanel.FordeltPaForsteStonadsdag" />
    </Label>
    <VerticalSpacer sixteenPx />
    <OppgaverPerForsteStonadsdagGraf
      height={height}
      oppgaverPerForsteStonadsdag={oppgaverPerForsteStonadsdag}
    />
  </>
);

export default OppgaverPerForsteStonadsdagPanel;
