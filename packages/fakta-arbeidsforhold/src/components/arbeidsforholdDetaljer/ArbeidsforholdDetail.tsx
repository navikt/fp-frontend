import { FaktaGruppe, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Arbeidsforhold } from '@fpsak-frontend/types';

import ArbeidsforholdKilder from '../../kodeverk/arbeidsforholdKilder';
import PermisjonPeriode from './PermisjonPeriode';

const finnOverstyrtTom = (arbeidsforhold: Arbeidsforhold): string | undefined => {
  if (arbeidsforhold.overstyrtTom) {
    return arbeidsforhold.overstyrtTom;
  }
  return arbeidsforhold.brukMedJustertPeriode ? arbeidsforhold.tomDato : undefined;
};

const utledAktivtArbeidsforholdLabel = (arbeidsforhold: Arbeidsforhold): string => {
  if (arbeidsforhold.permisjoner && arbeidsforhold.permisjoner.length > 0) {
    return 'ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon';
  }
  if (arbeidsforhold.kilde.navn === ArbeidsforholdKilder.INNTEKTSMELDING) {
    return 'ArbeidsforholdDetail.OppdaterArbeidsforhold';
  }
  return 'ArbeidsforholdDetail.ArbeidsforholdErAktivt';
};

interface PureOwnProps {
  valgtArbeidsforhold: Arbeidsforhold;
}

const ArbeidsforholdDetail: FunctionComponent<PureOwnProps> = ({
  valgtArbeidsforhold,
}) => {
  const harSøkerPermisjoner = valgtArbeidsforhold.brukArbeidsforholdet === true
    && valgtArbeidsforhold.permisjoner
    && valgtArbeidsforhold.permisjoner.length > 0;

  const erArbeidsforholdIkkeAktivt = valgtArbeidsforhold.brukArbeidsforholdet === true && valgtArbeidsforhold.brukMedJustertPeriode === true;

  const harIkkeOverstyrtTom = valgtArbeidsforhold.brukArbeidsforholdet === true && valgtArbeidsforhold.brukMedJustertPeriode === false;
  const søkerErIkkeIPermisjon = harSøkerPermisjoner && valgtArbeidsforhold.brukPermisjon === false;
  const erAktivtArbeidsforhold = harIkkeOverstyrtTom || søkerErIkkeIPermisjon;

  const erArbeidsforholdFjernet = valgtArbeidsforhold.brukArbeidsforholdet === false;

  return (
    <>
      <VerticalSpacer thirtyTwoPx />
      <FaktaGruppe>
        <Element><FormattedMessage id="ArbeidsforholdDetail.Header" /></Element>
        <PermisjonPeriode arbeidsforhold={valgtArbeidsforhold} />
        {erArbeidsforholdIkkeAktivt && (
          <>
            <FormattedMessage id="ArbeidsforholdDetail.ArbeidsforholdetErIkkeAktivt" />
            <FormattedMessage id="ArbeidsforholdDetail.ArbeidsforholdetAktivTomDato" />
            {finnOverstyrtTom(valgtArbeidsforhold)}
          </>
        )}
        {harSøkerPermisjoner && valgtArbeidsforhold.brukPermisjon && (
          <FormattedMessage id="ArbeidsforholdDetail.SokerErIPermisjon" />
        )}
        {erAktivtArbeidsforhold && (
          <>
            <FormattedMessage id={utledAktivtArbeidsforholdLabel(valgtArbeidsforhold)} />
            {valgtArbeidsforhold.fortsettBehandlingUtenInntektsmelding && (
              <FormattedMessage id="ArbeidsforholdDetail.BenyttAInntektIBeregningsgrunnlag" />
            )}
            {!valgtArbeidsforhold.fortsettBehandlingUtenInntektsmelding && (
              <FormattedMessage id="ArbeidsforholdDetail.AvslaYtelseManglendeOpplysninger" />
            )}
          </>
        )}
        {erArbeidsforholdFjernet && !erAktivtArbeidsforhold && (
          <FormattedMessage id="ArbeidsforholdDetail.FjernArbeidsforholdet" />
        )}
        <VerticalSpacer sixteenPx />
        <Element><FormattedMessage id="ArbeidsforholdDetail.Begrunnelse" /></Element>
        <Normaltekst>{valgtArbeidsforhold.begrunnelse}</Normaltekst>
      </FaktaGruppe>
    </>
  );
};

export default ArbeidsforholdDetail;
