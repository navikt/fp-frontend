import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Element } from 'nav-frontend-typografi';
import { FieldArray } from 'redux-form';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { Column, Row } from 'nav-frontend-grid';
import { AlleKodeverk } from '@fpsak-frontend/types';
import BrukersAndelFieldArray from './BrukersAndelFieldArray';

type OwnProps = {
    readOnly: boolean;
    brukersAndelFieldArrayName: string;
    isAksjonspunktClosed: boolean;
    alleKodeverk: AlleKodeverk;
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
      // @ts-ignore
      component={BrukersAndelFieldArray}
      readOnly={readOnly}
      isAksjonspunktClosed={isAksjonspunktClosed}
      alleKodeverk={alleKodeverk}
    />
  </BorderBox>
);

export default KunYtelseUtenBesteberegningPanel;
