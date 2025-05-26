import { FormattedMessage } from 'react-intl';

import { FileFillIcon, PhoneFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail, HStack, Label, VStack } from '@navikt/ds-react';
import { BeløpLabel, DateLabel, PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { AlleKodeverk, AoIArbeidsforhold, Inntektsmelding } from '@navikt/fp-types';
import { DokumentLink } from '@navikt/fp-ui-komponenter';

import type { ArbeidsforholdOgInntektRadData } from '../../types/arbeidsforholdOgInntekt';

import styles from './inntektsmeldingOpplysningerPanel.module.css';

interface Props {
  saksnummer: string;
  arbeidsforhold?: AoIArbeidsforhold;
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
    <VStack gap="4">
      {!ikkeVisInfo && (
        <HStack gap="4">
          <Label size="small">
            <FormattedMessage
              id={
                radData.erPrivatPerson
                  ? 'ArbeidsforholdInformasjonPanel.Fodselsdato'
                  : 'ArbeidsforholdInformasjonPanel.Orgnr'
              }
            />
          </Label>
          <BodyShort size="small">
            {radData.erPrivatPerson ? (
              <DateLabel dateString={radData.arbeidsgiverFødselsdato} />
            ) : (
              radData.arbeidsgiverIdent
            )}
          </BodyShort>
        </HStack>
      )}
      {skalViseArbeidsforholdId && (
        <HStack gap="4">
          <Label size="small">
            <FormattedMessage id="InntektsmeldingOpplysningerPanel.ArbeidsforholdId" />
          </Label>
          <BodyShort size="small">{inntektsmelding.eksternArbeidsforholdId}</BodyShort>
        </HStack>
      )}
      {arbeidsforhold && (
        <>
          <HStack gap="4">
            <Label size="small">
              <FormattedMessage id="InntektsmeldingOpplysningerPanel.Stillingsprosent" />
            </Label>
            <BodyShort size="small">{`${arbeidsforhold.stillingsprosent}%`}</BodyShort>
          </HStack>
          {arbeidsforhold.permisjonOgMangel && (
            <HStack gap="4">
              <Label size="small">
                {alleKodeverk['PermisjonsbeskrivelseType'].find(k => k.kode === arbeidsforhold.permisjonOgMangel?.type)
                  ?.navn ?? ''}
              </Label>
              <BodyShort size="small">
                <PeriodLabel
                  dateStringFom={arbeidsforhold.permisjonOgMangel.permisjonFom}
                  dateStringTom={arbeidsforhold.permisjonOgMangel.permisjonTom}
                />
              </BodyShort>
            </HStack>
          )}
        </>
      )}
      <HStack gap="4">
        <Label size="small">
          <FormattedMessage id="InntektsmeldingOpplysningerPanel.Inntektsmelding" />
        </Label>
        <BodyShort size="small">
          <BeløpLabel beløp={inntektsmelding.inntektPrMnd} />
        </BodyShort>
      </HStack>
      <HStack gap="4">
        <Label size="small">
          <FormattedMessage id="InntektsmeldingOpplysningerPanel.Refusjon" />
        </Label>
        <BodyShort size="small">
          <FormattedMessage
            id={
              inntektsmelding.refusjonPrMnd
                ? 'InntektsmeldingOpplysningerPanel.Ja'
                : 'InntektsmeldingOpplysningerPanel.Nei'
            }
          />
        </BodyShort>
      </HStack>
      {inntektsmelding.refusjonPrMnd !== undefined && inntektsmelding.refusjonPrMnd !== null && (
        <HStack gap="4">
          <Label size="small">
            <FormattedMessage id="InntektsmeldingOpplysningerPanel.Refusjonsbeløp" />
          </Label>
          <BodyShort size="small">
            <BeløpLabel beløp={inntektsmelding.refusjonPrMnd} />
          </BodyShort>
        </HStack>
      )}
      <DokumentLink
        saksnummer={saksnummer}
        journalpostId={inntektsmelding.journalpostId}
        dokumentId={inntektsmelding.dokumentId}
      >
        <BodyShort size="small" className={styles.inline}>
          <FormattedMessage id="InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding" />
        </BodyShort>
        <FileFillIcon className={styles.docIcon} />
      </DokumentLink>
    </VStack>
    <HStack gap="4">
      <PhoneFillIcon className={styles.phoneIcon} />
      <VStack gap="1">
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
