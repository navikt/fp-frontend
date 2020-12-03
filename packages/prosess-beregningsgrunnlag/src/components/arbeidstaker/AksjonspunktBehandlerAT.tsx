import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';

import { InputField } from '@fpsak-frontend/form';
import {
  getKodeverknavnFn, parseCurrencyInput, removeSpacesFromNumber, required,
} from '@fpsak-frontend/utils';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagAndel, BeregningsgrunnlagArbeidsforhold, Kodeverk,
  KodeverkMedNavn,
  RelevanteStatuserProp,
} from '@fpsak-frontend/types';
import createVisningsnavnForAktivitet from '../../util/visningsnavnHelper';

import styles from '../fellesPaneler/aksjonspunktBehandler.less';

const andelErIkkeTilkommetEllerLagtTilAvSBH = (andel: BeregningsgrunnlagAndel): boolean => {
  if (andel.overstyrtPrAar !== null && andel.overstyrtPrAar !== undefined) {
    return true;
  }
  // Andeler som er lagt til av sbh eller tilkom før stp skal ikke kunne endres på
  return andel.erTilkommetAndel === false && andel.lagtTilAvSaksbehandler === false;
};

const finnAndelerSomSkalVisesAT = (andeler: BeregningsgrunnlagAndel[]): BeregningsgrunnlagAndel[] => {
  if (!andeler) {
    return [];
  }
  return andeler
    .filter((andel) => andel.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER)
    .filter((andel) => andel.skalFastsetteGrunnlag === true)
    .filter((andel) => andelErIkkeTilkommetEllerLagtTilAvSBH(andel));
};

const lagVisningsnavn = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold,
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const arbeidsgiverInformasjon = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverId];
  if (!arbeidsgiverInformasjon) {
    return arbeidsforhold.arbeidsforholdType ? getKodeverknavn(arbeidsforhold.arbeidsforholdType) : '';
  }
  return createVisningsnavnForAktivitet(arbeidsgiverInformasjon, arbeidsforhold.eksternArbeidsforholdId);
};

const createRows = (relevanteAndelerAT: BeregningsgrunnlagAndel[],
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  readOnly: boolean,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) => relevanteAndelerAT.map((andel, index) => (
    <Row key={`index${index + 1}`} className={styles.verticalAlignMiddle}>
      <Column xs="7">
        <Normaltekst>
          {lagVisningsnavn(andel.arbeidsforhold, getKodeverknavn, arbeidsgiverOpplysningerPerId)}
        </Normaltekst>
      </Column>
      <Column xs="5">
        <div id="readOnlyWrapper" className={readOnly ? styles.inputPadding : undefined}>
          <InputField
            name={`inntekt${index}`}
            validate={[required]}
            readOnly={readOnly}
            parse={parseCurrencyInput}
            bredde="XS"
          />
        </div>
      </Column>
    </Row>
));

interface StaticFunctions {
  transformValuesForAT?: (values: any, alleAndelerIForstePeriode: BeregningsgrunnlagAndel[],) => any;
  transformValues?: (values: any, relevanteStatuser: RelevanteStatuserProp, alleAndelerIForstePeriode: BeregningsgrunnlagAndel[],) => any;
}

type OwnProps = {
    readOnly: boolean;
    alleAndelerIForstePeriode: BeregningsgrunnlagAndel[];
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};
const AksjonspunktBehandlerAT: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  alleAndelerIForstePeriode,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
}) => {
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk, kodeverkTyper);
  const relevanteAndelerAT = finnAndelerSomSkalVisesAT(alleAndelerIForstePeriode);
  return (
    <>
      { createRows(relevanteAndelerAT, getKodeverknavn, readOnly, arbeidsgiverOpplysningerPerId) }
    </>
  );
};

AksjonspunktBehandlerAT.transformValues = (values, relevanteStatuser, alleAndelerIForstePeriode) => {
  let inntektPrAndelList = null;
  let frilansInntekt = null;
  if (relevanteStatuser.isArbeidstaker) {
    inntektPrAndelList = finnAndelerSomSkalVisesAT(alleAndelerIForstePeriode)
      .map(({ andelsnr }, index) => {
        const overstyrtInntekt = values[`inntekt${index}`];
        return {
          inntekt: (overstyrtInntekt === undefined || overstyrtInntekt === '') ? 0 : removeSpacesFromNumber(overstyrtInntekt),
          andelsnr,
        };
      });
  }
  if (relevanteStatuser.isFrilanser) {
    frilansInntekt = removeSpacesFromNumber(values.inntektFrilanser);
  }
  return {
    kode: aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
    begrunnelse: values.ATFLVurdering,
    inntektFrilanser: frilansInntekt,
    inntektPrAndelList,
  };
};

AksjonspunktBehandlerAT.transformValuesForAT = (values, alleAndelerIForstePeriode) => {
  const inntektPrAndelList = finnAndelerSomSkalVisesAT(alleAndelerIForstePeriode)
    .map(({ andelsnr }, index) => {
      const overstyrtInntekt = values[`inntekt${index}`];
      return {
        inntekt: (overstyrtInntekt === undefined || overstyrtInntekt === '') ? 0 : removeSpacesFromNumber(overstyrtInntekt),
        andelsnr,
      };
    });
  return inntektPrAndelList;
};

export default AksjonspunktBehandlerAT;
