import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';
import moment from 'moment';
import { connect } from 'react-redux';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT, getKodeverknavnFn } from '@fpsak-frontend/utils';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import { KodeverkMedNavn } from '@fpsak-frontend/types';
import createVisningsnavnForAktivitet from './util/visningsnavnHelper';

const {
  FORDEL_BEREGNINGSGRUNNLAG,
} = aksjonspunktCodes;

export const textCase = {
  GRADERING: 'GRADERING',
  REFUSJON: 'REFUSJON',
  PERMISJON: 'PERMISJON',
  ENDRING_YTELSE: 'ENDRING_YTELSE',
};

const formatDate = (date) => (date ? moment(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

export const byggListeSomStreng = (listeMedStrenger) => {
  if (listeMedStrenger.length === 0) {
    return '';
  }
  if (listeMedStrenger.length === 1) {
    return listeMedStrenger[0];
  }
  if (listeMedStrenger.length === 2) {
    return `${listeMedStrenger[0]} og ${listeMedStrenger[1]}`;
  }
  if (listeMedStrenger.length > 2) {
    return `${listeMedStrenger.splice(0, listeMedStrenger.length - 1).join(', ')} og ${listeMedStrenger[listeMedStrenger.length - 1]}`;
  }
  return '';
};

const lagPeriodeStreng = (perioder) => {
  const listeMedPeriodeStrenger = perioder.map((periode) => {
    let periodeStreng = ` f.o.m. ${formatDate(periode.fom)}`;
    if (periode.tom && periode.tom !== null) {
      periodeStreng = periodeStreng.concat(` - t.o.m. ${formatDate(periode.tom)}`);
    }
    return periodeStreng;
  });
  return byggListeSomStreng(listeMedPeriodeStrenger);
};

export const createFordelArbeidsforholdString = (listOfArbeidsforhold, mTextCase, getKodeverknavn) => {
  const listOfStrings = listOfArbeidsforhold.map((arbeidsforhold) => {
    const navnOgOrgnr = createVisningsnavnForAktivitet(arbeidsforhold, getKodeverknavn);
    if (mTextCase === textCase.GRADERING) {
      return navnOgOrgnr + lagPeriodeStreng(arbeidsforhold.perioderMedGraderingEllerRefusjon.filter(({ erGradering }) => erGradering));
    }
    if (mTextCase === textCase.REFUSJON) {
      return navnOgOrgnr + lagPeriodeStreng(arbeidsforhold.perioderMedGraderingEllerRefusjon.filter(({ erRefusjon }) => erRefusjon));
    }
    if (mTextCase === textCase.ENDRING_YTELSE) {
      return navnOgOrgnr + lagPeriodeStreng(arbeidsforhold.perioderMedGraderingEllerRefusjon.filter(({ erSøktYtelse }) => erSøktYtelse));
    }
    if (mTextCase === textCase.PERMISJON) {
      return {
        navnOgOrgnr,
        dato: formatDate(arbeidsforhold.permisjon.permisjonTom),
      };
    }
    return null;
  });
  return byggListeSomStreng(listOfStrings);
};

const createGraderingOrRefusjonString = (
  graderingArbeidsforhold,
  refusjonArbeidsforhold,
  permisjonMedGraderingEllerRefusjon,
  endringYtelse,
  getKodeverknavn,
) => {
  const text = [];
  if (permisjonMedGraderingEllerRefusjon.length > 0) {
    const arbeidsforholdString = createFordelArbeidsforholdString(permisjonMedGraderingEllerRefusjon, textCase.PERMISJON, getKodeverknavn);
    text.push(<FormattedMessage
      key="EndringBeregningsgrunnlagPermisjon"
      id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Permisjon"
      values={{
        arbeidsforhold: arbeidsforholdString.navnOgOrgnr,
        dato: arbeidsforholdString.dato,
      }}
    />);
  }
  if (graderingArbeidsforhold.length > 0) {
    const arbeidsforholdString = createFordelArbeidsforholdString(graderingArbeidsforhold, textCase.GRADERING, getKodeverknavn);
    text.push(<FormattedMessage
      key="EndringBeregningsgrunnlagGradering"
      id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Gradering"
      values={{ arbeidsforhold: arbeidsforholdString }}
    />);
  }
  if (refusjonArbeidsforhold.length > 0) {
    const arbeidsforholdString = createFordelArbeidsforholdString(refusjonArbeidsforhold, textCase.REFUSJON, getKodeverknavn);
    text.push(<FormattedMessage
      key="EndringBeregningsgrunnlagRefusjon"
      id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Refusjon"
      values={{ arbeidsforhold: arbeidsforholdString }}
    />);
  }
  if (endringYtelse.length > 0) {
    const arbeidsforholdString = createFordelArbeidsforholdString(endringYtelse, textCase.ENDRING_YTELSE, getKodeverknavn);
    text.push(<FormattedMessage
      key="EndringBeregningsgrunnlagRefusjon"
      id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.EndringYtelse"
      values={{ arbeidsforhold: arbeidsforholdString }}
    />);
  }
  if (text.length < 1) {
    return text;
  }
  text.push(<FormattedMessage
    key="EndringBeregningsgrunnlagFastsetÅrsbeløp"
    id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.FastsetÅrsbeløp"
  />);
  return text;
};

const harGraderingEllerRefusjon = (perioderMedGraderingEllerRefusjon) => perioderMedGraderingEllerRefusjon.map(({ erRefusjon }) => erRefusjon).includes(true)
    || perioderMedGraderingEllerRefusjon.map(({ erGradering }) => erGradering).includes(true);

const lagHelpTextsFordelBG = (endredeArbeidsforhold, getKodeverknavn) => {
  const gradering = endredeArbeidsforhold
    .filter(({ perioderMedGraderingEllerRefusjon }) => perioderMedGraderingEllerRefusjon.map(({ erGradering }) => erGradering).includes(true));
  const refusjon = endredeArbeidsforhold
    .filter(({ perioderMedGraderingEllerRefusjon }) => perioderMedGraderingEllerRefusjon.map(({ erRefusjon }) => erRefusjon).includes(true));
  const permisjonMedGraderingEllerRefusjon = endredeArbeidsforhold
    .filter(({ permisjon }) => permisjon !== undefined && permisjon !== null)
    .filter(({ perioderMedGraderingEllerRefusjon }) => harGraderingEllerRefusjon(perioderMedGraderingEllerRefusjon));
  const endringYtelse = endredeArbeidsforhold
    .filter(({ perioderMedGraderingEllerRefusjon }) => perioderMedGraderingEllerRefusjon.map(({ erSøktYtelse }) => erSøktYtelse).includes(true));
  const helpTexts = createGraderingOrRefusjonString(gradering, refusjon, permisjonMedGraderingEllerRefusjon, endringYtelse, getKodeverknavn);
  if (helpTexts.length === 2) {
    return [
      <>
        {helpTexts[0]}
        <VerticalSpacer eightPx />
        {helpTexts[1]}
      </>];
  }
  return helpTexts;
};

type MappedOwnProps = {
  helpText: React.ReactElement[];
}

type OwnProps = {
    isAksjonspunktClosed: boolean;
};

type OwnInitialProps = {
  beregningsgrunnlag: Beregningsgrunnlag;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  aksjonspunkter: Aksjonspunkt[];
}

export const FordelingHelpTextImpl: FunctionComponent<OwnProps & MappedOwnProps & OwnInitialProps> = ({ helpText, isAksjonspunktClosed }) => (
  <AksjonspunktHelpTextTemp isAksjonspunktOpen={!isAksjonspunktClosed}>{helpText}</AksjonspunktHelpTextTemp>
);

export const getHelpTextsFordelBG = createSelector(
  [(ownProps: OwnInitialProps) => ownProps.beregningsgrunnlag,
    (ownProps: OwnInitialProps) => ownProps.alleKodeverk,
    (ownProps: OwnInitialProps) => ownProps.aksjonspunkter],
  (beregningsgrunnlag, alleKodeverk, aksjonspunkter) => {
    const fordelBG = beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag;
    const endredeArbeidsforhold = fordelBG ? fordelBG.arbeidsforholdTilFordeling : [];
    return hasAksjonspunkt(FORDEL_BEREGNINGSGRUNNLAG, aksjonspunkter)
      ? lagHelpTextsFordelBG(endredeArbeidsforhold, getKodeverknavnFn(alleKodeverk, kodeverkTyper))
      : [];
  },
);

const mapStateToProps = (state, ownProps: OwnInitialProps) => ({
  helpText: getHelpTextsFordelBG(ownProps),
});

export default connect(mapStateToProps)(FordelingHelpTextImpl);
