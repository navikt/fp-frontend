import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {
  Element, Normaltekst, Undertekst,
} from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { behandlingFormValueSelector } from '@fpsak-frontend/form';
import {
  getKodeverknavnFn, dateFormat, formatCurrencyNoKr, removeSpacesFromNumber,
} from '@fpsak-frontend/utils';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  FlexColumn, FlexRow, VerticalSpacer, AvsnittSkiller,
} from '@fpsak-frontend/shared-components';

import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagAndel, BeregningsgrunnlagArbeidsforhold,
  BeregningsgrunnlagPeriodeProp, Kodeverk,
} from '@fpsak-frontend/types';
import createVisningsnavnForAktivitet from '../../util/visningsnavnHelper';
import NaturalytelsePanel from './NaturalytelsePanel';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import LinkTilEksterntSystem from '../redesign/LinkTilEksterntSystem';

const formName = 'BeregningForm';

export const andelErIkkeTilkommetEllerLagtTilAvSBH = (andel: BeregningsgrunnlagAndel) => {
  // Andelen er fastsatt før og må kunne fastsettes igjen
  if (andel.overstyrtPrAar !== null && andel.overstyrtPrAar !== undefined) {
    return true;
  }

  // Andeler som er lagt til av sbh eller tilkom før stp skal ikke kunne endres på
  return andel.erTilkommetAndel === false && andel.lagtTilAvSaksbehandler === false;
};

const finnAndelerSomSkalVises = (andeler: BeregningsgrunnlagAndel[]) => {
  if (!andeler) {
    return [];
  }

  return andeler
    .filter((andel) => andel.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER)
    .filter((andel) => andelErIkkeTilkommetEllerLagtTilAvSBH(andel));
};

const beregnbruttoFastsattInntekt = (overstyrteInntekter: number[]): number => {
  if (!overstyrteInntekter || overstyrteInntekter.length === 0) return null;
  return overstyrteInntekter.reduce((sum, andel) => sum + andel, 0);
};
const createArbeidsPeriodeText = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold): string => {
  const periodeArr = [];

  if (Object.prototype.hasOwnProperty.call(arbeidsforhold, 'startdato') && arbeidsforhold.startdato) {
    periodeArr.push(dateFormat(arbeidsforhold.startdato));
  }
  if (Object.prototype.hasOwnProperty.call(arbeidsforhold, 'opphoersdato') && arbeidsforhold.opphoersdato) {
    periodeArr.push('-');
    periodeArr.push(dateFormat(arbeidsforhold.opphoersdato));
  }
  return periodeArr.join(' ');
};

const createArbeidsStillingsNavnOgProsent = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold): string => {
  // TODO: her må stillingsnavn og stillingsprosent hentes når vi får disse dataene fra backend
  const stillingArr = [''];
  if (Object.prototype.hasOwnProperty.call(arbeidsforhold, 'stillingsNavn') && arbeidsforhold.stillingsNavn) {
    stillingArr.push(arbeidsforhold.stillingsNavn);
  }
  if (Object.prototype.hasOwnProperty.call(arbeidsforhold, 'stillingsProsent') && arbeidsforhold.stillingsProsent) {
    stillingArr.push(`${arbeidsforhold.stillingsProsent}%`);
  }
  if (stillingArr.length !== 0) {
    return stillingArr.join(' ');
  }
  return ' ';
};

const lagVisningForAndel = (andel: BeregningsgrunnlagAndel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  getKodeverknavn: (kodeverk: Kodeverk) => string): string => {
  const arbeidsforholdInfo = arbeidsgiverOpplysningerPerId[andel.arbeidsforhold.arbeidsgiverIdent];
  if (!arbeidsforholdInfo) {
    return andel.arbeidsforhold.arbeidsforholdType ? getKodeverknavn(andel.arbeidsforhold.arbeidsforholdType) : '';
  }
  return createVisningsnavnForAktivitet(arbeidsforholdInfo, andel.arbeidsforhold.eksternArbeidsforholdId);
};

const createArbeidsIntektRows = (relevanteAndeler: BeregningsgrunnlagAndel[],
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  userIdent: string | undefined,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): React.ReactNode => {
  const beregnetAarsinntekt = relevanteAndeler.reduce((acc, andel) => acc + andel.beregnetPrAar, 0);
  const beregnetMaanedsinntekt = beregnetAarsinntekt ? beregnetAarsinntekt / 12 : 0;
  const harFlereArbeidsforhold = relevanteAndeler.length > 1;
  const rows = relevanteAndeler.map((andel, index) => (
    <React.Fragment
      key={`ArbInntektWrapper${lagVisningForAndel(andel, arbeidsgiverOpplysningerPerId, getKodeverknavn)}${index + 1}`}
    >
      <Row key={`index${index + 1}`}>
        <Column xs="7" key={`ColLable${andel.arbeidsforhold.arbeidsgiverIdent}`}>
          <Normaltekst key={`ColLableTxt${index + 1}`} className={beregningStyles.semiBoldText}>
            {lagVisningForAndel(andel, arbeidsgiverOpplysningerPerId, getKodeverknavn)}
          </Normaltekst>
        </Column>

        <Column key={`ColBrgMnd${andel.arbeidsforhold.arbeidsgiverIdent}`} xs="2" className={beregningStyles.colMaanedText}>
          <Normaltekst key={`ColBrgMndTxt${andel.arbeidsforhold.arbeidsgiverIdent}`}>
            {formatCurrencyNoKr(andel.beregnetPrAar / 12)}
          </Normaltekst>
        </Column>
        <Column key={`ColBrgAar${andel.arbeidsforhold.arbeidsgiverIdent}`} xs="2" className={beregningStyles.colAarText}>
          <Normaltekst key={`ColBrgAarTxt${andel.arbeidsforhold.arbeidsgiverIdent}`} className={!harFlereArbeidsforhold ? beregningStyles.semiBoldText : ''}>
            {formatCurrencyNoKr(andel.beregnetPrAar)}
          </Normaltekst>
        </Column>
        <Column xs="1" key={`ColLink${andel.arbeidsforhold.arbeidsgiverIdent}`} className={beregningStyles.colLink}>
          {userIdent && (
          <LinkTilEksterntSystem linkText="IM" userIdent={userIdent} type="IM" />
          )}
        </Column>
      </Row>
      <FlexRow key={`indexD${andel.arbeidsforhold.arbeidsgiverIdent}`}>
        {andel.arbeidsforhold && andel.arbeidsforhold.stillingsNavn && (
          <FlexColumn>
            <Normaltekst>
              {createArbeidsStillingsNavnOgProsent(andel.arbeidsforhold)}
            </Normaltekst>
          </FlexColumn>
        )}
        {andel.arbeidsforhold && andel.arbeidsforhold.startdato && (
        <FlexColumn>
          <Undertekst>
            {createArbeidsPeriodeText(andel.arbeidsforhold)}
          </Undertekst>
        </FlexColumn>
        )}
        {andel.erTidsbegrensetArbeidsforhold && (
        <FlexColumn>
          <Undertekst>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Tidsbegrenset" />
          </Undertekst>
        </FlexColumn>
        )}
      </FlexRow>
      {(index < relevanteAndeler.length) && (
        <Row key={`indexSp${andel.arbeidsforhold.arbeidsgiverIdent}`}>
          <VerticalSpacer eightPx />
        </Row>
      )}
    </React.Fragment>
  ));
  if (relevanteAndeler.length > 1) {
    const summaryRow = (
      <React.Fragment key="bruttoBeregningsgrunnlag">
        <Row>
          <Column xs="11" className={beregningStyles.noPaddingRight}>
            <div className={beregningStyles.colDevider} />
          </Column>
        </Row>
        <Row>
          <Column xs="7"><FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt" /></Column>
          <Column
            key="ColBBgMnd"
            xs="2"
            className={beregningStyles.colMaanedText}
          >
            <Normaltekst>{formatCurrencyNoKr(beregnetMaanedsinntekt)}</Normaltekst>
          </Column>
          <Column
            className={beregningStyles.colAarText}
            xs="2"
          >
            <Element>{formatCurrencyNoKr(beregnetAarsinntekt)}</Element>
          </Column>
          <Column className={beregningStyles.colLink} />
        </Row>
      </React.Fragment>
    );
    rows.push(summaryRow);
  }
  return rows;
};

interface StaticFunctions {
  buildInitialValues?: (alleAndeler: BeregningsgrunnlagAndel[]) => any;
}

type OwnProps = {
    alleAndeler: BeregningsgrunnlagAndel[];
    allePerioder?: BeregningsgrunnlagPeriodeProp[];
    getKodeverknavn: (kodeverk: Kodeverk) => string;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

/**
 * GrunnlagForAarsinntektPanelAT
 *
 * Presentasjonskomponent. Viser beregningsgrunnlagstabellen for arbeidstakere.
 * Vises også hvis status er en kombinasjonsstatus som inkluderer arbeidstaker.
 */
export const GrunnlagForAarsinntektPanelATImpl: FunctionComponent<OwnProps> & StaticFunctions = ({
  alleAndeler,
  allePerioder,
  getKodeverknavn,
  arbeidsgiverOpplysningerPerId,
}) => {
  const relevanteAndeler = finnAndelerSomSkalVises(alleAndeler);
  if (!relevanteAndeler || relevanteAndeler.length === 0) return null;
  const userIdent = null; // TODO denne må hentes fra brukerID enten fra brukerObjectet eller på beregningsgrunnlag må avklares
  return (
    <>
      <AvsnittSkiller spaceAbove spaceUnder />
      <FlexRow>
        <FlexColumn>
          <Element className={beregningStyles.avsnittOverskrift}>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt" />
          </Element>
        </FlexColumn>
        <FlexColumn>
          {userIdent && (
            <LinkTilEksterntSystem linkText="Aa" userIdent={userIdent} type="Aa" />
          )}
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      <Row key="Header">
        <Column xs="7" key="ATempthy1" />
        <Column key="ATMndHead" className={beregningStyles.colMaanedText} xs="2">
          <Undertekst>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
          </Undertekst>
        </Column>
        <Column key="ATAarHead" className={beregningStyles.colAarText} xs="2">
          <Undertekst>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar" />
          </Undertekst>
        </Column>
        <Column className={beregningStyles.colLink} xs="1" />
      </Row>
      {createArbeidsIntektRows(relevanteAndeler, getKodeverknavn, userIdent, arbeidsgiverOpplysningerPerId)}
      <NaturalytelsePanel
        allePerioder={allePerioder}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
    </>
  );
};

GrunnlagForAarsinntektPanelATImpl.defaultProps = {
  allePerioder: undefined,
};

const mapStateToProps = (state, initialProps) => {
  const getKodeverknavn = getKodeverknavnFn(initialProps.alleKodeverk, kodeverkTyper);
  const {
    alleAndeler, behandlingId, behandlingVersjon, readOnlySubmitButton,
  } = initialProps;
  const relevanteAndeler = finnAndelerSomSkalVises(alleAndeler);
  const overstyrteInntekter = relevanteAndeler.map((inntekt, index) => {
    const overstyrtInntekt = behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(
      state, `inntekt${index}`,
    );
    return (overstyrtInntekt === undefined || overstyrtInntekt === '') ? 0 : removeSpacesFromNumber(overstyrtInntekt);
  });
  const bruttoFastsattInntekt = beregnbruttoFastsattInntekt(overstyrteInntekter);
  return {
    bruttoFastsattInntekt,
    getKodeverknavn,
    readOnlySubmitButton,
  };
};

GrunnlagForAarsinntektPanelATImpl.buildInitialValues = (alleAndeler) => {
  const relevanteAndeler = finnAndelerSomSkalVises(alleAndeler);
  const initialValues = { };
  relevanteAndeler.forEach((inntekt, index) => {
    initialValues[`inntekt${index}`] = formatCurrencyNoKr(inntekt.overstyrtPrAar);
  });
  return initialValues;
};
export default connect(mapStateToProps)(GrunnlagForAarsinntektPanelATImpl);
