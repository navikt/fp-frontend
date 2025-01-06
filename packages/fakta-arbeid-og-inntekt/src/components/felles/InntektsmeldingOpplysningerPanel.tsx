import React from 'react';
import { FormattedMessage } from 'react-intl';

import { FileFillIcon, PhoneFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail, HStack, Label, Link, VStack } from '@navikt/ds-react';
import { DateLabel, PeriodLabel, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { dateFormat, formatCurrencyNoKr } from '@navikt/ft-utils';

import { formaterPeriode } from '@navikt/fp-fakta-felles';
import { getKodeverknavnFraKode, KodeverkType } from '@navikt/fp-kodeverk';
import { hentDokumentLenke } from '@navikt/fp-konstanter';
import { AlleKodeverk, AoIArbeidsforhold, Inntektsmelding } from '@navikt/fp-types';

import styles from './inntektsmeldingOpplysningerPanel.module.css';

interface Props {
  saksnummer: string;
  arbeidsforhold?: AoIArbeidsforhold;
  inntektsmelding: Inntektsmelding;
  skalViseArbeidsforholdId: boolean;
  alleKodeverk?: AlleKodeverk;
  arbeidsgiverFødselsdato?: string;
  ikkeVisInfo?: boolean;
}

export const InntektsmeldingOpplysningerPanel = ({
  saksnummer,
  arbeidsforhold,
  inntektsmelding,
  skalViseArbeidsforholdId,
  alleKodeverk,
  arbeidsgiverFødselsdato,
  ikkeVisInfo,
}: Props) => (
  <VStack gap="2" paddingBlock="2 7">
    {!ikkeVisInfo && arbeidsgiverFødselsdato && (
      <HStack gap="4">
        <Label size="small">
          <FormattedMessage id="ArbeidsforholdInformasjonPanel.Fodselsdato" />
        </Label>
        <BodyShort size="small">{dateFormat(arbeidsgiverFødselsdato)}</BodyShort>
      </HStack>
    )}

    {!ikkeVisInfo && !arbeidsgiverFødselsdato && (
      <HStack gap="4">
        <Label size="small">
          <FormattedMessage id="ArbeidsforholdInformasjonPanel.Orgnr" />
        </Label>
        <BodyShort size="small">{inntektsmelding.arbeidsgiverIdent}</BodyShort>
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
      <HStack gap="4">
        <Label size="small">
          <FormattedMessage id="InntektsmeldingOpplysningerPanel.Stillingsprosent" />
        </Label>
        <BodyShort size="small">
          {arbeidsforhold.stillingsprosent ? `${arbeidsforhold.stillingsprosent}%` : '-'}
        </BodyShort>
      </HStack>
    )}
    {arbeidsforhold?.permisjonOgMangel && (
      <HStack gap="4">
        <Label size="small">
          {getKodeverknavnFraKode(
            alleKodeverk,
            KodeverkType.PERMISJONSBESKRIVELSE_TYPE,
            arbeidsforhold.permisjonOgMangel.type,
          )}
        </Label>
        <BodyShort size="small">
          {formaterPeriode({
            fom: arbeidsforhold.permisjonOgMangel.permisjonFom,
            tom: arbeidsforhold.permisjonOgMangel.permisjonTom,
          })}
        </BodyShort>
      </HStack>
    )}

    <HStack gap="4">
      <Label size="small">
        <FormattedMessage id="InntektsmeldingOpplysningerPanel.Inntektsmelding" />
      </Label>
      <BodyShort size="small">{formatCurrencyNoKr(inntektsmelding.inntektPrMnd)}</BodyShort>
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
        <BodyShort size="small">{formatCurrencyNoKr(inntektsmelding.refusjonPrMnd)}</BodyShort>
      </HStack>
    )}

    <Link
      href={hentDokumentLenke(saksnummer, inntektsmelding.journalpostId, inntektsmelding.dokumentId)}
      target="_blank"
    >
      <FileFillIcon height={24} width={24} />
      <BodyShort as="span" size="small">
        <FormattedMessage id="InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding" />
      </BodyShort>
    </Link>

    <HStack gap="4" align="center">
      <PhoneFillIcon height={35} width={35} />
      <VStack>
        <Label size="small">
          <FormattedMessage id="InntektsmeldingOpplysningerPanel.Kontaktinfo" />
        </Label>
        <BodyShort size="small">{inntektsmelding.kontaktpersonNavn}</BodyShort>
        <BodyShort size="small">
          <FormattedMessage
            id="InntektsmeldingOpplysningerPanel.Tlf"
            values={{ nr: inntektsmelding.kontaktpersonNummer }}
          />
        </BodyShort>
      </VStack>
    </HStack>
  </VStack>
);
