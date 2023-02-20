import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from '@navikt/ds-react';

import { uttakPeriodeVurdering } from '@navikt/fp-kodeverk';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import styles from './periodeTyper.less';

interface OwnProps {
  resultat?: string;
  updatePeriode: (...args: any[]) => any;
  updated: boolean;
  bekreftet: boolean;
  resetPeriode: (...args: any[]) => any;
  cancelEditPeriode: (...args: any[]) => any;
  id: string;
  readOnly: boolean;
}

export const PerioderKnapper: FunctionComponent<OwnProps> = ({
  resultat,
  updatePeriode,
  updated,
  resetPeriode,
  id,
  cancelEditPeriode,
  bekreftet,
  readOnly,
}) => (
  !readOnly && (
  <div>
    <VerticalSpacer sixteenPx />
    <FlexContainer>
      <FlexRow>
        <FlexColumn>
          <Button
            className={styles.oppdaterMargin}
            variant="primary"
            size="small"
            disabled={resultat === uttakPeriodeVurdering.PERIODE_IKKE_VURDERT}
            onClick={updatePeriode}
            type="button"
          >
            <FormattedMessage id="UttakInfoPanel.Oppdater" />
          </Button>
        </FlexColumn>
        {!bekreftet && !updated && (
        <FlexColumn>
          <Button
            className={styles.oppdaterMargin}
            size="small"
            variant="secondary"
            disabled={resultat === uttakPeriodeVurdering.PERIODE_IKKE_VURDERT}
            onClick={() => resetPeriode()}
            type="button"
          >
            <FormattedMessage id="UttakInfoPanel.Nullstill" />
          </Button>
        </FlexColumn>
        )}
        {(bekreftet || updated) && (
        <FlexColumn>
          <Button
            size="small"
            variant="secondary"
            onClick={() => {
              resetPeriode();
              cancelEditPeriode(id);
            }}
            type="button"
          >
            <FormattedMessage id="UttakInfoPanel.Avbryt" />
          </Button>
        </FlexColumn>
        )}
      </FlexRow>
    </FlexContainer>
  </div>
  )
);

export default PerioderKnapper;
