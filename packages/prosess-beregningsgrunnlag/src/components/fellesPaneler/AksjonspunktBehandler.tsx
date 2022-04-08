import React, { FunctionComponent, ReactElement } from 'react';
import Panel from 'nav-frontend-paneler';
import { Column, Row } from 'nav-frontend-grid';
import { Element } from 'nav-frontend-typografi';
import {
  FormattedMessage, IntlShape,
  useIntl,
} from 'react-intl';

import {
  hasValidText, maxLength, minLength, required,
} from '@navikt/ft-utils';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { ProsessStegSubmitButtonNew } from '@fpsak-frontend/prosess-felles';
import { TextAreaField } from '@navikt/ft-form-hooks';

import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
} from '@fpsak-frontend/types';
import periodeAarsak from '@fpsak-frontend/kodeverk/src/periodeAarsak';
import styles from './aksjonspunktBehandler.less';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import AksjonspunktBehandlerAT from '../arbeidstaker/AksjonspunktBehandlerAT';
import AksjonspunktBehandlerFL from '../frilanser/AksjonspunktBehandlerFL';
import AksjonspunktBehandlerTB from '../arbeidstaker/AksjonspunktBehandlerTB';
import AksjonspunktBehandlerSN from '../selvstendigNaeringsdrivende/AksjonspunktsbehandlerSN';
import ArbeidstakerFrilansValues from '../../types/ATFLAksjonspunktTsType';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';
import DekningsgradAksjonspunktPanel from './DekningsgradAksjonspunktPanel';

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

const harPerioderMedAvsluttedeArbeidsforhold = (allePerioder: BeregningsgrunnlagPeriodeProp[]): boolean => allePerioder
  .some(({ periodeAarsaker }) => periodeAarsaker
    && periodeAarsaker.some((kode) => kode === periodeAarsak.ARBEIDSFORHOLD_AVSLUTTET));

const settOppKomponenterForNæring = (readOnly: boolean,
  allePerioder: BeregningsgrunnlagPeriodeProp[],
  aksjonspunkter: Aksjonspunkt[]): ReactElement => {
  const alleAndelerIForstePeriode = finnAlleAndelerIFørstePeriode(allePerioder);
  const snAndel = alleAndelerIForstePeriode.find(
    (andel) => andel.aktivitetStatus && andel.aktivitetStatus === aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  );
  if (!snAndel) {
    return null;
  }
  const erNyArbLivet = snAndel.erNyIArbeidslivet;
  const erVarigEndring = snAndel.næringer && snAndel.næringer.some((naring) => naring.erVarigEndret === true);
  const erNyoppstartet = snAndel.næringer && snAndel.næringer.some((naring) => naring.erNyoppstartet === true);
  return (
    <>
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
      />
    </>
  );
};

const settOppKomponenterForATFL = (aksjonspunkter: Aksjonspunkt[],
  alleKodeverk: AlleKodeverk,
  allePerioder: BeregningsgrunnlagPeriodeProp[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  readOnly: boolean,
  formName: string,
  intl: IntlShape): ReactElement => {
  const erTidsbegrenset = harPerioderMedAvsluttedeArbeidsforhold(allePerioder);
  const alleAndelerIForstePeriode = finnAlleAndelerIFørstePeriode(allePerioder);
  const flAndel = alleAndelerIForstePeriode.find(
    (andel) => andel.aktivitetStatus && andel.aktivitetStatus === aktivitetStatus.FRILANSER,
  );
  const atAndel = alleAndelerIForstePeriode.find(
    (andel) => andel.aktivitetStatus && andel.aktivitetStatus === aktivitetStatus.ARBEIDSTAKER,
  );
  const visFL = flAndel && flAndel.skalFastsetteGrunnlag;
  const visAT = atAndel && atAndel.skalFastsetteGrunnlag;
  return (
    <>
      <Row>
        <Column xs="12">
          <Element className={beregningStyles.avsnittOverskrift}>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler" />
          </Element>
        </Column>
      </Row>
      <VerticalSpacer eightPx />
      {erTidsbegrenset && (
      <AksjonspunktBehandlerTB
        readOnly={readOnly}
        formName={formName}
        allePerioder={allePerioder}
        alleKodeverk={alleKodeverk}
        aksjonspunkter={aksjonspunkter}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
      )}
      {!erTidsbegrenset && visAT && (
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
          />
        </Column>
      </Row>
      <VerticalSpacer sixteenPx />
    </>
  );
};

interface StaticFunctions {
  transformValues?: (values: ArbeidstakerFrilansValues) => string;
}

type OwnProps = {
    readOnly: boolean;
    aksjonspunkter: Aksjonspunkt[];
    alleKodeverk: AlleKodeverk;
    formName: string;
    readOnlySubmitButton: boolean;
    allePerioder?: BeregningsgrunnlagPeriodeProp[];
    relevanteStatuser: RelevanteStatuserProp;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
    isSubmitting: boolean;
    isDirty: boolean;
};

const AksjonspunktBehandler: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  aksjonspunkter,
  formName,
  readOnlySubmitButton,
  allePerioder,
  alleKodeverk,
  relevanteStatuser,
  arbeidsgiverOpplysningerPerId,
  isDirty,
  isSubmitting,
}) => {
  const intl = useIntl();
  if (!aksjonspunkter || aksjonspunkter.length === 0) {
    return null;
  }
  const submittKnapp = (
    <Row>
      <Column xs="12">
        <ProsessStegSubmitButtonNew
          isReadOnly={readOnly}
          isSubmittable={!readOnlySubmitButton}
          isDirty={isDirty}
          isSubmitting={isSubmitting}
        />
      </Column>
    </Row>
  );
  if (relevanteStatuser.isSelvstendigNaeringsdrivende) {
    return (
      <div className={readOnly ? '' : styles.aksjonspunktBehandlerContainer}>
        <Panel className={readOnly ? beregningStyles.panelRight : styles.aksjonspunktBehandlerBorder}>
          {settOppKomponenterForNæring(readOnly, allePerioder, aksjonspunkter)}
          <VerticalSpacer sixteenPx />
          {submittKnapp}
          <VerticalSpacer sixteenPx />
        </Panel>
      </div>
    );
  }
  const atflAPKoder = [aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
    aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD] as string[];

  const harATFLAP = aksjonspunkter.some((ap) => atflAPKoder.includes(ap.definisjon));
  const harDekningsgradAP = aksjonspunkter.some((ap) => ap.definisjon === aksjonspunktCodes.VURDER_DEKNINGSGRAD);
  return (
    <div className={readOnly ? '' : styles.aksjonspunktBehandlerContainer}>
      <Panel className={readOnly ? beregningStyles.panelRight : styles.aksjonspunktBehandlerBorder}>
        {harATFLAP && settOppKomponenterForATFL(aksjonspunkter, alleKodeverk, allePerioder, arbeidsgiverOpplysningerPerId, readOnly, formName, intl)}
        {harDekningsgradAP
        && (
          <>
            <Row>
              <Column xs="12">
                <Element className={beregningStyles.avsnittOverskrift}>
                  <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.Dekningsgrad" />
                </Element>
              </Column>
            </Row>
            <VerticalSpacer eightPx />
            <Row>
              <Column xs="12">
                <DekningsgradAksjonspunktPanel
                  readOnly={readOnly}
                />
              </Column>
            </Row>
            <VerticalSpacer sixteenPx />
          </>
        )}
        {submittKnapp}
        <VerticalSpacer sixteenPx />
      </Panel>
    </div>
  );
};

AksjonspunktBehandler.defaultProps = {
  allePerioder: undefined,
};

AksjonspunktBehandler.transformValues = (values: ArbeidstakerFrilansValues): string => values.ATFLVurdering;

export default AksjonspunktBehandler;
