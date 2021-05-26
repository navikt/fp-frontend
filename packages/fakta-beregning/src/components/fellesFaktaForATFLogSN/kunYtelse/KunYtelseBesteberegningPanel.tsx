import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { FieldArray } from 'redux-form';
import { Element } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { LINK_TIL_BESTE_BEREGNING_REGNEARK } from '@fpsak-frontend/konstanter';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import { ArrowBox } from '@fpsak-frontend/shared-components';
// TODO (SAFIR) PFP-6021 Ta i bruk InntektFieldArray i staden for BrukersAndelFieldArray
import { AlleKodeverk, KunYtelse } from '@fpsak-frontend/types';
import BrukersAndelFieldArray from './BrukersAndelFieldArray';
import { getFormValuesForBeregning } from '../../BeregningFormUtils';

import styles from './kunYtelseBesteberegningPanel.less';

export const besteberegningField = 'besteberegningField';

type OwnProps = {
    readOnly: boolean;
    isAksjonspunktClosed: boolean;
    brukersAndelFieldArrayName: string;
    erBesteberegning?: boolean;
    skalViseInntektstabell?: boolean;
    alleKodeverk: AlleKodeverk;
};

interface StaticFunctions {
  buildInitialValues: (kunYtelse: KunYtelse) => { [besteberegningField] };
  validate: (values: any) => any;
  transformValues: (values: any) => any;
}

/**
 * KunYtelseBesteberegningPanel
 *
 * Presentasjonskomponent. Behandling av aksjonspunktet for fastsetting av bg for kun ytelse
 *  med vurdering av besteberegning.
 */
const KunYtelseBesteberegningImpl: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  isAksjonspunktClosed,
  erBesteberegning,
  brukersAndelFieldArrayName,
  skalViseInntektstabell,
  alleKodeverk,
}) => (
  <div>
    <RadioGroupField
      name={besteberegningField}
      readOnly={readOnly}
      isEdited={isAksjonspunktClosed}
      label={<FormattedMessage id="KunYtelsePanel.HarBesteberegning" />}
    >
      <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Ja" />} value />
      <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Nei" />} value={false} />
    </RadioGroupField>
    {erBesteberegning !== undefined && erBesteberegning !== null
    && (
      <ArrowBox alignOffset={erBesteberegning ? 0 : 60}>
        <Row>
          <Column xs="9">
            <Element>
              <FormattedMessage id="KunYtelsePanel.OverskriftBesteberegning" />
            </Element>
          </Column>
          {erBesteberegning
          && (
            <Column xs="3">
              <a
                className={styles.navetLink}
                href={LINK_TIL_BESTE_BEREGNING_REGNEARK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage id="BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet" />
              </a>
            </Column>
          )}
        </Row>
        {skalViseInntektstabell
        && (
        <Row>
          <Column xs="12">
            <FieldArray
              name={brukersAndelFieldArrayName}
              component={BrukersAndelFieldArray}
              readOnly={readOnly}
              alleKodeverk={alleKodeverk}
            />
          </Column>
        </Row>
        )}
      </ArrowBox>
    )}
  </div>
);

KunYtelseBesteberegningImpl.defaultProps = {
  erBesteberegning: undefined,
  skalViseInntektstabell: true,
};

KunYtelseBesteberegningImpl.buildInitialValues = (kunYtelse) => ({ [besteberegningField]: kunYtelse.erBesteberegning });

KunYtelseBesteberegningImpl.validate = (values) => {
  const errors = {};
  errors[besteberegningField] = required(values[besteberegningField]);
  return errors;
};

KunYtelseBesteberegningImpl.transformValues = (values) => (values[besteberegningField]);

const mapStateToProps = (state) => ({
  erBesteberegning: getFormValuesForBeregning(state)[besteberegningField],
});

export default connect(mapStateToProps)(KunYtelseBesteberegningImpl);
