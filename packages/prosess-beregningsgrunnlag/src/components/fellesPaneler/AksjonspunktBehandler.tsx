import React, { FunctionComponent, ReactElement } from 'react';
import Panel from 'nav-frontend-paneler';
import { Column, Row } from 'nav-frontend-grid';
import { Element } from 'nav-frontend-typografi';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';

import {
  dateFormat,
  hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import { TextAreaField } from '@fpsak-frontend/form';

import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import {
  ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
  KodeverkMedNavn,
} from '@fpsak-frontend/types';
import styles from './aksjonspunktBehandler.less';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import AksjonspunktBehandlerAT from '../arbeidstaker/AksjonspunktBehandlerAT';
import AksjonspunktBehandlerFL from '../frilanser/AksjonspunktBehandlerFL';
import AksjonspunktBehandlerTB from '../arbeidstaker/AksjonspunktBehandlerTB';
import AksjonspunktBehandlerSN from '../selvstendigNaeringsdrivende/AksjonspunktsbehandlerSN';
import ArbeidstakerFrilansValues from '../../types/ATFLAksjonspunktTsType';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const finnAlleAndelerIFørstePeriode = (allePerioder: BeregningsgrunnlagPeriodeProp[]): BeregningsgrunnlagAndel[] => {
  if (allePerioder && allePerioder.length > 0) {
    return allePerioder[0].beregningsgrunnlagPrStatusOgAndel;
  }
  return undefined;
};
const harFlereAksjonspunkter = (gjeldendeAksjonspunkter: Aksjonspunkt[]): boolean => !!gjeldendeAksjonspunkter && gjeldendeAksjonspunkter.length > 1;
const finnATFLVurderingLabel = (gjeldendeAksjonspunkter: Aksjonspunkt[]): ReactElement => {
  if (harFlereAksjonspunkter(gjeldendeAksjonspunkter)) {
    return <FormattedMessage id="Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag" />;
  }
  return <FormattedMessage id="Beregningsgrunnlag.Forms.Vurdering" />;
};
const finnGjeldeneAksjonsPunkt = (aksjonspunkter: Aksjonspunkt[], erNyiArbeidslivet: boolean, readOnly: boolean, erSNellerFL: boolean): Aksjonspunkt => {
  if (erSNellerFL) {
    return aksjonspunkter.find((ap) => ap.definisjon.kode === aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS);
  }
  if (erNyiArbeidslivet) {
    return aksjonspunkter.find((ap) => ap.definisjon.kode === aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET);
  }
  return aksjonspunkter.find((ap) => ap.definisjon.kode === aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);
};

const lagEndretTekst = (aksjonspunkter: Aksjonspunkt[], erNyiArbeidslivet: boolean, readOnly: boolean, erSNellerFL: boolean): ReactElement => {
  if (!aksjonspunkter || !readOnly) return null;
  const aksjonspunkt = finnGjeldeneAksjonsPunkt(aksjonspunkter, erNyiArbeidslivet, readOnly, erSNellerFL);
  if (!aksjonspunkt) return null;
  const { endretAv, endretTidspunkt } = aksjonspunkt;
  if (!endretTidspunkt) return null;
  const godkjentEndretAv = /[a-zA-Z]{1}[0-9]{6}/.test(endretAv) ? endretAv : '';
  return (
    <FormattedMessage
      id="Beregningsgrunnlag.Forms.EndretTekst"
      values={{ endretAv: godkjentEndretAv, endretDato: dateFormat(endretTidspunkt) }}
    />
  );
};

interface StaticFunctions {
  transformValues?: (values: ArbeidstakerFrilansValues) => string;
}

type OwnProps = {
    readOnly: boolean;
    aksjonspunkter: Aksjonspunkt[];
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
    formName: string;
    readOnlySubmitButton: boolean;
    tidsBegrensetInntekt: boolean;
    allePerioder?: BeregningsgrunnlagPeriodeProp[];
    relevanteStatuser: RelevanteStatuserProp;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

export const AksjonspunktBehandlerImpl: FunctionComponent<OwnProps & WrappedComponentProps> & StaticFunctions = ({
  intl,
  readOnly,
  aksjonspunkter,
  formName,
  readOnlySubmitButton,
  allePerioder,
  alleKodeverk,
  relevanteStatuser,
  tidsBegrensetInntekt,
  arbeidsgiverOpplysningerPerId,
}) => {
  const alleAndelerIForstePeriode = finnAlleAndelerIFørstePeriode(allePerioder);
  let erVarigEndring = false;
  let erNyoppstartet = false;
  let erNyArbLivet = false;
  let visFL = false;
  let visAT = false;
  const snAndel = alleAndelerIForstePeriode.find(
    (andel) => andel.aktivitetStatus && andel.aktivitetStatus.kode === aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  );
  const flAndel = alleAndelerIForstePeriode.find(
    (andel) => andel.aktivitetStatus && andel.aktivitetStatus.kode === aktivitetStatus.FRILANSER,
  );
  const atAndel = alleAndelerIForstePeriode.find(
    (andel) => andel.aktivitetStatus && andel.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER,
  );
  if (flAndel) {
    visFL = flAndel.skalFastsetteGrunnlag;
  }
  if (atAndel) {
    visAT = atAndel.skalFastsetteGrunnlag;
  }
  if (snAndel && snAndel.erNyIArbeidslivet) {
    erNyArbLivet = snAndel.erNyIArbeidslivet;
  }
  erVarigEndring = snAndel && snAndel.næringer && snAndel.næringer.some((naring) => naring.erVarigEndret === true);
  erNyoppstartet = snAndel && snAndel.næringer && snAndel.næringer.some((naring) => naring.erNyoppstartet === true);
  if (!aksjonspunkter || aksjonspunkter.length === 0) {
    return null;
  }
  if (!relevanteStatuser.isSelvstendigNaeringsdrivende) {
    return (
      <div className={readOnly ? '' : styles.aksjonspunktBehandlerContainer}>
        <Panel className={readOnly ? beregningStyles.panelRight : styles.aksjonspunktBehandlerBorder}>
          <Row>
            <Column xs="12">
              <Element className={beregningStyles.avsnittOverskrift}>
                <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler" />
              </Element>
            </Column>
          </Row>
          <VerticalSpacer eightPx />
          {tidsBegrensetInntekt && (
          <AksjonspunktBehandlerTB
            readOnly={readOnly}
            formName={formName}
            allePerioder={allePerioder}
            alleKodeverk={alleKodeverk}
            aksjonspunkter={aksjonspunkter}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
          )}
          {!tidsBegrensetInntekt && visAT && (
          <AksjonspunktBehandlerAT
            readOnly={readOnly}
            alleAndelerIForstePeriode={alleAndelerIForstePeriode}
            alleKodeverk={alleKodeverk}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
          )}
          {visFL && (
          <AksjonspunktBehandlerFL
            readOnly={readOnly}
          />
          )}

          <VerticalSpacer sixteenPx />
          <Row>
            <Column xs="12">
              <TextAreaField
                name="ATFLVurdering"
                label={finnATFLVurderingLabel(aksjonspunkter)}
                validate={[required, maxLength1500, minLength3, hasValidText]}
                maxLength={1500}
                readOnly={readOnly}
                textareaClass={styles.textAreaStyle}
                placeholder={intl.formatMessage({ id: 'Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Placeholder' })}
                endrettekst={lagEndretTekst(aksjonspunkter, erNyArbLivet, readOnly, true)}
              />
            </Column>
          </Row>
          <VerticalSpacer sixteenPx />
          <Row>
            <Column xs="12">
              <ProsessStegSubmitButton
                formName={formName}
                isReadOnly={readOnly}
                isSubmittable={!readOnlySubmitButton}
              />
            </Column>
          </Row>
          <VerticalSpacer sixteenPx />
        </Panel>
      </div>
    );
  }
  if (relevanteStatuser.isSelvstendigNaeringsdrivende) {
    return (
      <div className={readOnly ? '' : styles.aksjonspunktBehandlerContainer}>
        <Panel className={readOnly ? beregningStyles.panelRight : styles.aksjonspunktBehandlerBorder}>
          <Row>
            <Column xs="12">
              <Element className={beregningStyles.avsnittOverskrift}>
                {erNyArbLivet && (
                  <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.NyIArbeidslivet" />
                )}
                {erNyoppstartet && !erVarigEndring && (
                  <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.Nyoppstartet" />
                )}
                {!erNyArbLivet && !erNyoppstartet && erVarigEndring && (
                  <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.VarigEndring" />
                )}
                {!erNyArbLivet && erNyoppstartet && erVarigEndring && (
                  <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler" />
                )}
              </Element>
            </Column>
          </Row>
          <VerticalSpacer eightPx />
          <AksjonspunktBehandlerSN
            readOnly={readOnly}
            aksjonspunkter={aksjonspunkter}
            erNyArbLivet={erNyArbLivet}
            erVarigEndring={erVarigEndring}
            erNyoppstartet={erNyoppstartet}
            endretTekst={lagEndretTekst(aksjonspunkter, erNyArbLivet, readOnly, false)}
          />
          <VerticalSpacer sixteenPx />
          <Row>
            <Column xs="12">
              <ProsessStegSubmitButton
                formName={formName}
                isReadOnly={readOnly}
                isSubmittable={!readOnlySubmitButton}
              />
            </Column>
          </Row>
        </Panel>
      </div>
    );
  }
  return null;
};

AksjonspunktBehandlerImpl.defaultProps = {
  allePerioder: undefined,
};

AksjonspunktBehandlerImpl.transformValues = (values: ArbeidstakerFrilansValues): string => values.ATFLVurdering;

export default injectIntl(AksjonspunktBehandlerImpl);
