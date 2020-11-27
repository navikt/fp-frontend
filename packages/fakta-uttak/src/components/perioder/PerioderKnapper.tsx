import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';

import uttakPeriodeVurdering from '@fpsak-frontend/kodeverk/src/uttakPeriodeVurdering';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';

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
    <Hovedknapp
      className={styles.oppdaterMargin}
      htmlType="button"
      mini
      disabled={resultat === uttakPeriodeVurdering.PERIODE_IKKE_VURDERT}
      onClick={updatePeriode}
    >
      <FormattedMessage id="UttakInfoPanel.Oppdater" />
    </Hovedknapp>
    {!bekreftet && !updated
      && (
      <Knapp
        className={styles.oppdaterMargin}
        htmlType="button"
        mini
        disabled={resultat === uttakPeriodeVurdering.PERIODE_IKKE_VURDERT}
        onClick={() => resetPeriode()}
      >
        <FormattedMessage id="UttakInfoPanel.Nullstill" />
      </Knapp>
      )}
    {(bekreftet || (!bekreftet && updated))
      && (
      <Knapp
        htmlType="button"
        mini
        onClick={() => {
          resetPeriode();
          cancelEditPeriode(id);
        }}
      >
        <FormattedMessage id="UttakInfoPanel.Avbryt" />
      </Knapp>
      )}
  </div>
  )
);

export default PerioderKnapper;
