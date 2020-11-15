import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';
import { FormattedMessage } from 'react-intl';
import { InputField } from '@fpsak-frontend/form';
import {
  formatCurrencyNoKr, parseCurrencyInput, removeSpacesFromNumber, required,
} from '@fpsak-frontend/utils';
import { BeregningsgrunnlagAndel } from '@fpsak-frontend/types';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../fellesPaneler/aksjonspunktB... Remove this comment to see the full error message
import styles from '../fellesPaneler/aksjonspunktBehandler.less';

interface StaticFunctions {
  buildInitialValues?: (relevanteAndeler: BeregningsgrunnlagAndel[]) => any;
  transformValuesForFL?: (values: any) => number;
}

type OwnProps = {
    readOnly: boolean;
};

const AksjonspunktBehandlerFL: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly }) => (
  <Row className={styles.verticalAlignMiddle}>
    <Column xs="7">
      <Normaltekst>
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL" />
      </Normaltekst>
    </Column>
    <Column xs="5">
      <div id="readOnlyWrapper" className={readOnly ? styles.inputPadding : undefined}>
        <InputField
          name="inntektFrilanser"
          validate={[required]}
          readOnly={readOnly}
          parse={parseCurrencyInput}
          bredde="XS"
        />
      </div>
    </Column>
  </Row>
);

AksjonspunktBehandlerFL.transformValuesForFL = (values) => (values.inntektFrilanser !== undefined ? removeSpacesFromNumber(values.inntektFrilanser) : null);
AksjonspunktBehandlerFL.buildInitialValues = (relevanteAndeler) => {
  if (relevanteAndeler.length === 0) {
    return undefined;
  }
  return {
    inntektFrilanser: relevanteAndeler[0].overstyrtPrAar !== undefined ? formatCurrencyNoKr(relevanteAndeler[0].overstyrtPrAar) : '',
  };
};

export default AksjonspunktBehandlerFL;
