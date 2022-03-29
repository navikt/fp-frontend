import React, { FunctionComponent } from 'react';
import {
  FormattedMessage, useIntl,
} from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import {
  hasValidText,
  maxLength,
  minLength,
  parseCurrencyInput,
  removeSpacesFromNumber,
  required,
  formatCurrencyNoKr,
} from '@fpsak-frontend/utils';
import {
  InputField, TextAreaField,
} from '@fpsak-frontend/form-hooks';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { Normaltekst } from 'nav-frontend-typografi';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import { BeregningsgrunnlagAndel } from '@fpsak-frontend/types';
import { NyIArbeidslivetruttoNæringResultatAP } from '@fpsak-frontend/types-avklar-aksjonspunkter/src/prosess/BeregningsgrunnlagAP';
import styles from '../fellesPaneler/aksjonspunktBehandler.less';
import {
  NyIArbeidslivetValues,
} from '../../types/NaringAksjonspunktTsType';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);
export const begrunnelseFieldname = 'fastsettBeregningsgrnunnlagSNBegrunnelse';
export const fastsettInntektFieldname = 'bruttoBeregningsgrunnlag';
const {
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
} = aksjonspunktCodes;

type OwnProps = {
    endretTekst?: React.ReactNode;
    readOnly: boolean;
    isAksjonspunktClosed: boolean;
    erNyArbLivet: boolean;
    gjeldendeAksjonspunkter: Aksjonspunkt[];
};

interface StaticFunctions {
  buildInitialValuesNyIArbeidslivet: (relevanteAndeler: BeregningsgrunnlagAndel[], gjeldendeAksjonspunkter: Aksjonspunkt[]) => NyIArbeidslivetValues;
  transformValuesNyIArbeidslivet: (values: Required<NyIArbeidslivetValues>) => NyIArbeidslivetruttoNæringResultatAP
}

/**
 * FastsettSN
 *
 * Aksjonspunkt: FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE
 *
 * Presentasjonskomponent. Setter opp inputfelt som lar saksbehandler fastsette
 * næringsinntekt for selvstendig næringsdrivende. Opprettes enten hvis det er varig endret / nyoppstartet næring eller søker er ny i arbeidslivet.
 */
const FastsettSNNyIArbeid: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly, isAksjonspunktClosed, gjeldendeAksjonspunkter, erNyArbLivet,
}) => {
  const harGammeltAPFastsettBrutto = gjeldendeAksjonspunkter
    ? gjeldendeAksjonspunkter.find((ap) => ap.definisjon === FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE)
    : false;
  const harAPSNNyiArbLiv = gjeldendeAksjonspunkter
    ? gjeldendeAksjonspunkter.find((ap) => ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)
    : false;
  const intl = useIntl();

  return (
    <>
      {erNyArbLivet && (
        <>
          <Row className={styles.verticalAlignMiddle}>
            <Column className={styles.dynamiskKolonne}>
              <Normaltekst>
                <FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2" />
              </Normaltekst>
            </Column>
            <Column xs="5">
              <div id="readOnlyWrapper" className={readOnly ? styles.inputPadding : undefined}>
                <InputField
                  name={fastsettInntektFieldname}
                  bredde="XS"
                  validate={[required]}
                  parse={parseCurrencyInput}
                  className={styles['input--xs']}
                  isEdited={isAksjonspunktClosed}
                  readOnly={readOnly}
                />
              </div>
            </Column>
          </Row>
          <VerticalSpacer eightPx />
        </>
      )}

      {(harGammeltAPFastsettBrutto || harAPSNNyiArbLiv)
      && (
        <>
          <VerticalSpacer sixteenPx />
          <Row>
            <Column xs="12" className={styles.marginTop}>
              <div id="readOnlyWrapper" className={readOnly ? styles.verticalLine : styles.textAreaWrapperHeigh}>
                <TextAreaField
                  name={begrunnelseFieldname}
                  label={<FormattedMessage id="Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag" />}
                  validate={[required, maxLength1500, minLength3, hasValidText]}
                  maxLength={1500}
                  readOnly={readOnly}
                  placeholder={intl.formatMessage({ id: 'Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Placeholder' })}
                />
              </div>
            </Column>
          </Row>
        </>
      )}
    </>
  );
};

FastsettSNNyIArbeid.buildInitialValuesNyIArbeidslivet = (relevanteAndeler: BeregningsgrunnlagAndel[],
  gjeldendeAksjonspunkter: Aksjonspunkt[]): NyIArbeidslivetValues => {
  const snAndel = relevanteAndeler.find((andel) => andel.aktivitetStatus === aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE);
  const nyIArbeidslivetAP = gjeldendeAksjonspunkter
    .find((ap) => ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET);
  return {
    [fastsettInntektFieldname]: snAndel ? formatCurrencyNoKr(snAndel.overstyrtPrAar) : undefined,
    [begrunnelseFieldname]: nyIArbeidslivetAP && nyIArbeidslivetAP.begrunnelse ? nyIArbeidslivetAP.begrunnelse : undefined,
  };
};

FastsettSNNyIArbeid.transformValuesNyIArbeidslivet = (values:Required<NyIArbeidslivetValues>): NyIArbeidslivetruttoNæringResultatAP => ({
  kode: FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  begrunnelse: values[begrunnelseFieldname],
  bruttoBeregningsgrunnlag: removeSpacesFromNumber(values[fastsettInntektFieldname]),
});

export default FastsettSNNyIArbeid;
