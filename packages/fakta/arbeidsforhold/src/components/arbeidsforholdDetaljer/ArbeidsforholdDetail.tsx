import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, Label, VStack } from '@navikt/ds-react';
import { DateLabel, FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { ArbeidsforholdKomplettVurderingType } from '@navikt/fp-kodeverk';
import type { AoIArbeidsforhold } from '@navikt/fp-types';

import { BekreftetPermisjonStatus } from '../../kodeverk/bekreftetPermisjonStatus';
import { PermisjonPeriode } from './PermisjonPeriode';

interface Props {
  valgtArbeidsforhold: AoIArbeidsforhold;
}

export const ArbeidsforholdDetail = ({ valgtArbeidsforhold }: Props) => {
  const skalBrukeArbeidsforholdet =
    valgtArbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.BRUK;
  const skalFortsetteUtenInntektsmelding =
    valgtArbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.FORTSETT_UTEN_INNTEKTSMELDING;
  const skalBrukeMedOverstyrtPeriode =
    valgtArbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.BRUK_MED_OVERSTYRT_PERIODE;
  const skalFjerneArbeidsforhold =
    valgtArbeidsforhold.saksbehandlersVurdering ===
    ArbeidsforholdKomplettVurderingType.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING;
  const skalOppretteBasertPåIM =
    valgtArbeidsforhold.saksbehandlersVurdering ===
    ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING;
  const erManueltOpprettetAvSaksbehandler =
    valgtArbeidsforhold.saksbehandlersVurdering ===
    ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER;

  const skalBrukePermisjon =
    valgtArbeidsforhold.permisjonOgMangel?.permisjonStatus === BekreftetPermisjonStatus.BRUK_PERMISJON;
  const skalIkkeBrukePermisjon =
    valgtArbeidsforhold.permisjonOgMangel?.permisjonStatus === BekreftetPermisjonStatus.IKKE_BRUK_PERMISJON;

  const overstyrtTom = finnOverstyrtTom(valgtArbeidsforhold);

  return (
    <FaktaGruppe>
      <VStack gap="4">
        <Heading size="small">
          <FormattedMessage id="ArbeidsforholdDetail.Header" />
        </Heading>
        <PermisjonPeriode arbeidsforhold={valgtArbeidsforhold} />
        {skalBrukeMedOverstyrtPeriode && (
          <>
            <BodyShort size="small">
              <FormattedMessage id="ArbeidsforholdDetail.ArbeidsforholdetErIkkeAktivt" />
            </BodyShort>
            <div>
              <Label size="small">
                <FormattedMessage id="ArbeidsforholdDetail.ArbeidsforholdetAktivTomDato" />
              </Label>
              <BodyShort size="small">{overstyrtTom ? <DateLabel dateString={overstyrtTom} /> : '-'}</BodyShort>
            </div>
          </>
        )}
        {skalBrukeArbeidsforholdet && skalBrukePermisjon && (
          <BodyShort size="small">
            <FormattedMessage id="ArbeidsforholdDetail.SokerErIPermisjon" />
          </BodyShort>
        )}
        {skalOppretteBasertPåIM && (
          <BodyShort size="small">
            <FormattedMessage id="ArbeidsforholdDetail.OppdatertGittIm" />
          </BodyShort>
        )}

        {(erManueltOpprettetAvSaksbehandler ||
          ((skalBrukeArbeidsforholdet || skalFortsetteUtenInntektsmelding) &&
            (!valgtArbeidsforhold.permisjonOgMangel || skalIkkeBrukePermisjon))) && (
          <>
            <BodyShort size="small">
              <FormattedMessage id={utledAktivtArbeidsforholdLabel(valgtArbeidsforhold)} />
            </BodyShort>
            {skalFortsetteUtenInntektsmelding && (
              <BodyShort size="small">
                <FormattedMessage id="ArbeidsforholdDetail.BenyttAInntektIBeregningsgrunnlag" />
              </BodyShort>
            )}
            {!skalFortsetteUtenInntektsmelding && !erManueltOpprettetAvSaksbehandler && (
              <BodyShort size="small">
                <FormattedMessage id="ArbeidsforholdDetail.AvslaYtelseManglendeOpplysninger" />
              </BodyShort>
            )}
          </>
        )}
        {skalFjerneArbeidsforhold && (
          <BodyShort size="small">
            <FormattedMessage
              id={
                skalFjerneArbeidsforhold
                  ? 'ArbeidsforholdDetail.FjernArbeidsforholdet'
                  : 'ArbeidsforholdDetail.IMIkkeRelevant'
              }
            />
          </BodyShort>
        )}
        <div>
          <Label size="small">
            <FormattedMessage id="ArbeidsforholdDetail.Begrunnelse" />
          </Label>
          <BodyShort size="small">{valgtArbeidsforhold.begrunnelse}</BodyShort>
        </div>
      </VStack>
    </FaktaGruppe>
  );
};

const finnOverstyrtTom = (arbeidsforhold: AoIArbeidsforhold): string | undefined => {
  if (arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.BRUK_MED_OVERSTYRT_PERIODE) {
    return arbeidsforhold.tom;
  }
  const skalBrukeMedJustertPeriode =
    arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.BRUK_MED_OVERSTYRT_PERIODE;
  return skalBrukeMedJustertPeriode ? arbeidsforhold.tom : undefined;
};

const utledAktivtArbeidsforholdLabel = (arbeidsforhold: AoIArbeidsforhold): string => {
  if (arbeidsforhold.permisjonOgMangel) {
    return 'ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon';
  }
  if (
    arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER
  ) {
    return 'ArbeidsforholdDetail.OppdaterArbeidsforhold';
  }
  return 'ArbeidsforholdDetail.ArbeidsforholdErAktivt';
};
