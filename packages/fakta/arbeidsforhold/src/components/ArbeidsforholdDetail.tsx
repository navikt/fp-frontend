import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, Label, VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import type { Arbeidsforhold } from '@navikt/fp-types';

import { BekreftetPermisjonStatus } from '../kodeverk/bekreftetPermisjonStatus';
import { PermisjonPeriode } from './PermisjonPeriode';

interface Props {
  valgtArbeidsforhold: Arbeidsforhold;
}

export const ArbeidsforholdDetail = ({ valgtArbeidsforhold }: Props) => {
  const skalBrukeArbeidsforholdet = valgtArbeidsforhold.saksbehandlersVurdering === 'BRUK';
  const skalFortsetteUtenInntektsmelding =
    valgtArbeidsforhold.saksbehandlersVurdering === 'FORTSETT_UTEN_INNTEKTSMELDING';
  const skalBrukeMedOverstyrtPeriode = valgtArbeidsforhold.saksbehandlersVurdering === 'BRUK_MED_OVERSTYRT_PERIODE';
  const skalFjerneArbeidsforhold =
    valgtArbeidsforhold.saksbehandlersVurdering === 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING';
  const skalOppretteBasertPåIM = valgtArbeidsforhold.saksbehandlersVurdering === 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING';
  const erManueltOpprettetAvSaksbehandler =
    valgtArbeidsforhold.saksbehandlersVurdering === 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER';

  const skalBrukePermisjon =
    valgtArbeidsforhold.permisjonOgMangel?.permisjonStatus === BekreftetPermisjonStatus.BRUK_PERMISJON;
  const skalIkkeBrukePermisjon =
    valgtArbeidsforhold.permisjonOgMangel?.permisjonStatus === BekreftetPermisjonStatus.IKKE_BRUK_PERMISJON;

  const overstyrtTom = finnOverstyrtTom(valgtArbeidsforhold);

  return (
    <VStack gap="space-16">
      <Heading size="small" level="3">
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
          <FormattedMessage id="ArbeidsforholdDetail.FjernArbeidsforholdet" />
        </BodyShort>
      )}
      <div>
        <Label size="small">
          <FormattedMessage id="ArbeidsforholdDetail.Begrunnelse" />
        </Label>
        <BodyShort size="small">{valgtArbeidsforhold.begrunnelse}</BodyShort>
      </div>
    </VStack>
  );
};

const finnOverstyrtTom = (arbeidsforhold: Arbeidsforhold): string | undefined => {
  if (arbeidsforhold.saksbehandlersVurdering === 'BRUK_MED_OVERSTYRT_PERIODE') {
    return arbeidsforhold.tom;
  }

  return undefined;
};

const utledAktivtArbeidsforholdLabel = (arbeidsforhold: Arbeidsforhold): string => {
  if (arbeidsforhold.permisjonOgMangel) {
    return 'ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon';
  }
  if (arbeidsforhold.saksbehandlersVurdering === 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER') {
    return 'ArbeidsforholdDetail.OppdaterArbeidsforhold';
  }
  return 'ArbeidsforholdDetail.ArbeidsforholdErAktivt';
};
