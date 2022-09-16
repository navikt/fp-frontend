import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from '@navikt/ds-react';

import uttakPeriodeVurdering from '@fpsak-frontend/kodeverk/src/uttakPeriodeVurdering';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

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
    <Button
      className={styles.oppdaterMargin}
      variant="primary"
      size="small"
      disabled={resultat === uttakPeriodeVurdering.PERIODE_IKKE_VURDERT}
      onClick={updatePeriode}
    >
      <FormattedMessage id="UttakInfoPanel.Oppdater" />
    </Button>
    {!bekreftet && !updated
      && (
      <Button
        className={styles.oppdaterMargin}
        size="small"
        variant="secondary"
        disabled={resultat === uttakPeriodeVurdering.PERIODE_IKKE_VURDERT}
        onClick={() => resetPeriode()}
      >
        <FormattedMessage id="UttakInfoPanel.Nullstill" />
      </Button>
      )}
    {(bekreftet || (!bekreftet && updated))
      && (
      <Button
        size="small"
        variant="secondary"
        onClick={() => {
          resetPeriode();
          cancelEditPeriode(id);
        }}
      >
        <FormattedMessage id="UttakInfoPanel.Avbryt" />
      </Button>
      )}
  </div>
  )
);

export default PerioderKnapper;
