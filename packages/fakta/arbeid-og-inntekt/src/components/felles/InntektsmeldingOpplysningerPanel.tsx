import { FormattedMessage } from 'react-intl';

import { FileIcon, PhoneFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail, HStack, Label, VStack } from '@navikt/ds-react';
import { BeløpLabel, DateLabel, LabeledValue, PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { AlleKodeverk, Arbeidsforhold, Inntektsmelding } from '@navikt/fp-types';
import { DokumentLink } from '@navikt/fp-ui-komponenter';

import type { ArbeidsforholdOgInntektRadData } from '../../types/arbeidsforholdOgInntekt';

interface Props {
  saksnummer: string;
  arbeidsforhold?: Arbeidsforhold;
  inntektsmelding: Inntektsmelding;
  skalViseArbeidsforholdId: boolean;
  alleKodeverk: AlleKodeverk;
  radData: ArbeidsforholdOgInntektRadData;
  ikkeVisInfo?: boolean;
}

export const InntektsmeldingOpplysningerPanel = ({
  saksnummer,
  arbeidsforhold,
  inntektsmelding,
  skalViseArbeidsforholdId,
  alleKodeverk,
  ikkeVisInfo,
  radData,
}: Props) => (
  <>
    <VStack gap="space-16">
      {!ikkeVisInfo && (
        <LabeledValue
          size="small"
          horizontal
          label={
            <FormattedMessage
              id={
                radData.erPrivatPerson
                  ? 'ArbeidsforholdInformasjonPanel.Fodselsdato'
                  : 'ArbeidsforholdInformasjonPanel.Orgnr'
              }
            />
          }
          value={
            radData.erPrivatPerson ? (
              <DateLabel dateString={radData.arbeidsgiverFødselsdato} />
            ) : (
              radData.arbeidsgiverIdent
            )
          }
        />
      )}

      {skalViseArbeidsforholdId && (
        <LabeledValue
          size="small"
          horizontal
          label={<FormattedMessage id="InntektsmeldingOpplysningerPanel.ArbeidsforholdId" />}
          value={inntektsmelding.eksternArbeidsforholdId ?? '-'}
        />
      )}

      {arbeidsforhold && (
        <>
          <LabeledValue
            size="small"
            horizontal
            label={<FormattedMessage id="InntektsmeldingOpplysningerPanel.Stillingsprosent" />}
            value={`${arbeidsforhold.stillingsprosent}%`}
          />

          {arbeidsforhold.permisjonOgMangel && (
            <LabeledValue
              size="small"
              horizontal
              label={
                alleKodeverk['PermisjonsbeskrivelseType'].find(k => k.kode === arbeidsforhold.permisjonOgMangel?.type)
                  ?.navn ?? ''
              }
              value={
                <PeriodLabel
                  dateStringFom={arbeidsforhold.permisjonOgMangel.permisjonFom}
                  dateStringTom={arbeidsforhold.permisjonOgMangel.permisjonTom}
                />
              }
            />
          )}
        </>
      )}

      <LabeledValue
        size="small"
        horizontal
        label={<FormattedMessage id="InntektsmeldingOpplysningerPanel.Inntektsmelding" />}
        value={<BeløpLabel beløp={inntektsmelding.inntektPrMnd} />}
      />

      <LabeledValue
        size="small"
        horizontal
        label={<FormattedMessage id="InntektsmeldingOpplysningerPanel.Refusjon" />}
        value={
          <FormattedMessage
            id={
              inntektsmelding.refusjonPrMnd
                ? 'InntektsmeldingOpplysningerPanel.Ja'
                : 'InntektsmeldingOpplysningerPanel.Nei'
            }
          />
        }
      />

      {inntektsmelding.refusjonPrMnd !== undefined && (
        <LabeledValue
          size="small"
          horizontal
          label={<FormattedMessage id="InntektsmeldingOpplysningerPanel.Refusjonsbeløp" />}
          value={<BeløpLabel beløp={inntektsmelding.refusjonPrMnd} />}
        />
      )}

      <BodyShort size="small">
        <DokumentLink
          saksnummer={saksnummer}
          journalpostId={inntektsmelding.journalpostId}
          dokumentId={inntektsmelding.dokumentId}
        >
          <HStack gap="space-4" wrap={false} align="center" as="span">
            <FileIcon fontSize="1.125rem" aria-hidden />
            <FormattedMessage id="InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding" />
          </HStack>
        </DokumentLink>
      </BodyShort>
    </VStack>

    <HStack gap="space-16">
      <PhoneFillIcon aria-hidden fontSize="1.5rem" />
      <VStack gap="space-4">
        <Label size="small">
          <FormattedMessage id="InntektsmeldingOpplysningerPanel.Kontaktinfo" />
        </Label>
        <Detail>{inntektsmelding.kontaktpersonNavn}</Detail>
        <Detail>
          <FormattedMessage
            id="InntektsmeldingOpplysningerPanel.Tlf"
            values={{ nr: inntektsmelding.kontaktpersonNummer }}
          />
        </Detail>
      </VStack>
    </HStack>
  </>
);
