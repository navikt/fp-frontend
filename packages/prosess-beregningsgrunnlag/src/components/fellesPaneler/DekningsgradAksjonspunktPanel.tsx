import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import { Beregningsgrunnlag } from '@fpsak-frontend/types';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import { RadioGroupField, RadioOption, TextAreaField } from '@fpsak-frontend/form';
import {
  hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { Column, Row } from 'nav-frontend-grid';
import dekningsgrad from '@fpsak-frontend/kodeverk/src/dekningsgrad';
import DekningsgradTransformedValues, {
  DekningsgradValues,
} from '../../types/DekningsgradAksjonspunktTsType';
import styles from './aksjonspunktBehandler.less';

const RADIO_GROUP_FIELD_DEKNINGSGRAD_NAVN = 'dekningsgrad';
const TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING = 'begrunnDekningsgradEndring';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

interface StaticFunctions {
  buildInitialValues: (beregningsgrunnlag: Beregningsgrunnlag, aksjonspunkter: Aksjonspunkt[]) => DekningsgradValues;
  transformValues: (values: Required<DekningsgradValues>) => DekningsgradTransformedValues
}

type OwnProps = {
    readOnly: boolean;
};

/**
 * SkjeringspunktOgStatusPanel
 *
 * Viser skjæringstidspunkt for beregningen og en liste med aktivitetsstatuser.
 */
export const DekningsgradAksjonspunktPanelImpl: FunctionComponent<OwnProps & WrappedComponentProps> & StaticFunctions = ({
  intl,
  readOnly,
}) => (
  <>
    <RadioGroupField name={RADIO_GROUP_FIELD_DEKNINGSGRAD_NAVN} readOnly={readOnly} validate={[required]}>
      <RadioOption label={intl.formatMessage({ id: 'Beregningsgrunnlag.Skjeringstidspunkt.Prosent80' })} value={dekningsgrad.ATTI} />
      <RadioOption label={intl.formatMessage({ id: 'Beregningsgrunnlag.Skjeringstidspunkt.Prosent100' })} value={dekningsgrad.HUNDRE} />
    </RadioGroupField>
    <Row>
      <Column xs="12">
        <TextAreaField
          name={TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING}
          label={{ id: 'Beregningsgrunnlag.Forms.Vurdering' }}
          validate={[required, maxLength1500, minLength3, hasValidText]}
          maxLength={1500}
          readOnly={readOnly}
          textareaClass={styles.textAreaStyle}
          placeholder={intl.formatMessage({ id: 'Beregningsgrunnlag.Forms.BegrunnEndringAvDekningsgrad' })}
        />
      </Column>
    </Row>
  </>
);

DekningsgradAksjonspunktPanelImpl.buildInitialValues = (beregningsgrunnlag: Beregningsgrunnlag, aksjonspunter: Aksjonspunkt[]): DekningsgradValues => {
  const aksjonspunkt = aksjonspunter && aksjonspunter.find((ap) => ap.definisjon === aksjonspunktCodes.VURDER_DEKNINGSGRAD);
  const begrunnelse = aksjonspunkt && aksjonspunkt.begrunnelse ? aksjonspunkt.begrunnelse : null;
  const initialDekningsgrad = aksjonspunkt && !isAksjonspunktOpen(aksjonspunkt.status) ? beregningsgrunnlag.dekningsgrad : null;
  if (initialDekningsgrad && begrunnelse) {
    return {
      [RADIO_GROUP_FIELD_DEKNINGSGRAD_NAVN]: initialDekningsgrad,
      [TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING]: begrunnelse,
    };
  }
  return {};
};

DekningsgradAksjonspunktPanelImpl.transformValues = (values: Required<DekningsgradValues>): DekningsgradTransformedValues => ({
  kode: aksjonspunktCodes.VURDER_DEKNINGSGRAD,
  begrunnelse: values[TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING],
  dekningsgrad: values[RADIO_GROUP_FIELD_DEKNINGSGRAD_NAVN],
});

export default injectIntl(DekningsgradAksjonspunktPanelImpl);
