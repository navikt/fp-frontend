import { DateLabel, FaktaGruppe, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { AoIArbeidsforhold } from '@fpsak-frontend/types';
import ArbeidsforholdKomplettVurderingType from '@fpsak-frontend/kodeverk/src/arbeidsforholdKomplettVurderingType';

import PermisjonPeriode from './PermisjonPeriode';
import BekreftetPermisjonStatus from '../../kodeverk/bekreftetPermisjonStatus';

const finnOverstyrtTom = (arbeidsforhold: AoIArbeidsforhold): string | undefined => {
  if (arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.BRUK_MED_OVERSTYRT_PERIODE) {
    return arbeidsforhold.tom;
  }
  const skalBrukeMedJustertPeriode = arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.BRUK_MED_OVERSTYRT_PERIODE;
  return skalBrukeMedJustertPeriode ? arbeidsforhold.tom : undefined;
};

const utledAktivtArbeidsforholdLabel = (arbeidsforhold: AoIArbeidsforhold): string => {
  if (arbeidsforhold.permisjonOgMangel) {
    return 'ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon';
  }
  if (arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER) {
    return 'ArbeidsforholdDetail.OppdaterArbeidsforhold';
  }
  return 'ArbeidsforholdDetail.ArbeidsforholdErAktivt';
};

interface PureOwnProps {
  valgtArbeidsforhold: AoIArbeidsforhold;
}

const ArbeidsforholdDetail: FunctionComponent<PureOwnProps> = ({
  valgtArbeidsforhold,
}) => {
  const skalBrukeArbeidsforholdet = valgtArbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.BRUK;
  const skalFortsetteUtenInntektsmelding = valgtArbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.FORTSETT_UTEN_INNTEKTSMELDING;
  const skalBrukeMedOverstyrtPeriode = valgtArbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.BRUK_MED_OVERSTYRT_PERIODE;
  const skalFjerneArbeidsforhold = valgtArbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING;
  const skalOppretteBasertPåIM = valgtArbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING;
  const erManueltOpprettetAvSaksbehandler = valgtArbeidsforhold.saksbehandlersVurdering
    === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER;

  const skalBrukePermisjon = valgtArbeidsforhold.permisjonOgMangel?.permisjonStatus === BekreftetPermisjonStatus.BRUK_PERMISJON;
  const skalIkkeBrukePermisjon = valgtArbeidsforhold.permisjonOgMangel?.permisjonStatus === BekreftetPermisjonStatus.IKKE_BRUK_PERMISJON;

  return (
    <>
      <VerticalSpacer thirtyTwoPx />
      <FaktaGruppe>
        <Element><FormattedMessage id="ArbeidsforholdDetail.Header" /></Element>
        <PermisjonPeriode arbeidsforhold={valgtArbeidsforhold} />
        {skalBrukeMedOverstyrtPeriode && (
          <>
            <Normaltekst>
              <FormattedMessage id="ArbeidsforholdDetail.ArbeidsforholdetErIkkeAktivt" />
            </Normaltekst>
            <Normaltekst>
              <FormattedMessage id="ArbeidsforholdDetail.ArbeidsforholdetAktivTomDato" />
            </Normaltekst>
            <Normaltekst>
              <DateLabel dateString={finnOverstyrtTom(valgtArbeidsforhold)} />
            </Normaltekst>
          </>
        )}
        {skalBrukeArbeidsforholdet && skalBrukePermisjon && (
          <Normaltekst>
            <FormattedMessage id="ArbeidsforholdDetail.SokerErIPermisjon" />
          </Normaltekst>
        )}
        {skalOppretteBasertPåIM && (
          <Normaltekst>
            <FormattedMessage id="ArbeidsforholdDetail.OppdatertGittIm" />
          </Normaltekst>
        )}
        {(erManueltOpprettetAvSaksbehandler
          || ((skalBrukeArbeidsforholdet || skalFortsetteUtenInntektsmelding) && (!valgtArbeidsforhold.permisjonOgMangel || skalIkkeBrukePermisjon))) && (
          <>
            <Normaltekst>
              <FormattedMessage id={utledAktivtArbeidsforholdLabel(valgtArbeidsforhold)} />
            </Normaltekst>
            <VerticalSpacer sixteenPx />
            {skalFortsetteUtenInntektsmelding && (
              <Normaltekst>
                <FormattedMessage id="ArbeidsforholdDetail.BenyttAInntektIBeregningsgrunnlag" />
              </Normaltekst>
            )}
            {!skalFortsetteUtenInntektsmelding && !erManueltOpprettetAvSaksbehandler && (
              <Normaltekst>
                <FormattedMessage id="ArbeidsforholdDetail.AvslaYtelseManglendeOpplysninger" />
              </Normaltekst>
            )}
          </>
        )}
        {skalFjerneArbeidsforhold && (
          <Normaltekst>
            <FormattedMessage id={skalFjerneArbeidsforhold ? 'ArbeidsforholdDetail.FjernArbeidsforholdet' : 'ArbeidsforholdDetail.IMIkkeRelevant'} />
          </Normaltekst>
        )}
        <VerticalSpacer sixteenPx />
        <Element><FormattedMessage id="ArbeidsforholdDetail.Begrunnelse" /></Element>
        <Normaltekst>{valgtArbeidsforhold.begrunnelse}</Normaltekst>
      </FaktaGruppe>
    </>
  );
};

export default ArbeidsforholdDetail;
