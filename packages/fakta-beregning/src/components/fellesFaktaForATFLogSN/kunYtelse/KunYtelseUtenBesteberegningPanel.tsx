import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Element } from 'nav-frontend-typografi';
import { FieldArray } from 'redux-form';
import { BorderBox } from '@fpsak-frontend/shared-components';
import { Column, Row } from 'nav-frontend-grid';
import { KodeverkMedNavn } from '@fpsak-frontend/types';
import BrukersAndelFieldArray from './BrukersAndelFieldArray';

type OwnProps = {
    readOnly: boolean;
    brukersAndelFieldArrayName: string;
    isAksjonspunktClosed: boolean;
    behandlingId: number;
    behandlingVersjon: number;
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
};

/**
 * KunYtelseUtenBesteberegningPanel
 *
 * Presentasjonskomponent. Behandling av aksjonspunktet for fastsetting av bg for
 *  kun ytelse uten vurdering av besteberegning.
 */

const KunYtelseUtenBesteberegningPanel: FunctionComponent<OwnProps> = ({
  readOnly,
  brukersAndelFieldArrayName,
  alleKodeverk,
  behandlingVersjon, behandlingId,
  isAksjonspunktClosed,
}) => (
  <BorderBox>
    <Row>
      <Column xs="9">
        <Element>
          <FormattedMessage id="KunYtelsePanel.Overskrift" />
        </Element>
      </Column>
    </Row>
    <FieldArray
      name={brukersAndelFieldArrayName}
      component={BrukersAndelFieldArray}
      readOnly={readOnly}
      isAksjonspunktClosed={isAksjonspunktClosed}
      behandlingId={behandlingId}
      behandlingVersjon={behandlingVersjon}
      alleKodeverk={alleKodeverk}
    />
  </BorderBox>
);

export default KunYtelseUtenBesteberegningPanel;
