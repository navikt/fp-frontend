import React, { FunctionComponent, ReactElement } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';

import { InputField } from '@fpsak-frontend/form';
import {
  getKodeverknavnFn, parseCurrencyInput, removeSpacesFromNumber, required,
} from '@fpsak-frontend/utils';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
} from '@fpsak-frontend/types';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';
import createVisningsnavnForAktivitet from '../../util/createVisningsnavnForAktivitet';

import styles from '../fellesPaneler/aksjonspunktBehandler.less';
import {
  ArbeidsinntektTransformedValues,
  ArbeidstakerInntektValues,
} from '../../types/ATFLAksjonspunktTsType';

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
    .filter((andel) => andel.aktivitetStatus === aktivitetStatus.ARBEIDSTAKER)
    .filter((andel) => andel.skalFastsetteGrunnlag === true)
    .filter((andel) => andelErIkkeTilkommetEllerLagtTilAvSBH(andel));
};

const lagVisningsnavn = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const arbeidsgiverInformasjon = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent];
  if (!arbeidsgiverInformasjon) {
    return arbeidsforhold.arbeidsforholdType ? getKodeverknavn(arbeidsforhold.arbeidsforholdType, KodeverkType.OPPTJENING_AKTIVITET_TYPE) : '';
  }
  return createVisningsnavnForAktivitet(arbeidsgiverInformasjon, arbeidsforhold.eksternArbeidsforholdId);
};

const createRows = (relevanteAndelerAT: BeregningsgrunnlagAndel[],
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  readOnly: boolean,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): ReactElement[] => relevanteAndelerAT.map((andel, index) => (
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
  transformValues?: (values: ArbeidstakerInntektValues, relevanteStatuser: RelevanteStatuserProp,
                     alleAndelerIForstePeriode: BeregningsgrunnlagAndel[],) => ArbeidsinntektTransformedValues[];
}

type OwnProps = {
    readOnly: boolean;
    alleAndelerIForstePeriode: BeregningsgrunnlagAndel[];
    alleKodeverk: AlleKodeverk;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};
const AksjonspunktBehandlerAT: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  alleAndelerIForstePeriode,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
}) => {
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk, KodeverkType);
  const relevanteAndelerAT = finnAndelerSomSkalVisesAT(alleAndelerIForstePeriode);
  return (
    <>
      { createRows(relevanteAndelerAT, getKodeverknavn, readOnly, arbeidsgiverOpplysningerPerId) }
    </>
  );
};

AksjonspunktBehandlerAT.transformValues = (values: ArbeidstakerInntektValues,
  relevanteStatuser: RelevanteStatuserProp,
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[]): ArbeidsinntektTransformedValues[] => {
  let inntektPrAndelList = null;
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
  return inntektPrAndelList;
};

export default AksjonspunktBehandlerAT;
