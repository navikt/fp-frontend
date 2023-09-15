import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, Label, BodyShort, Detail, VStack, HStack } from '@navikt/ds-react';
import { DateLabel, PeriodLabel, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FileFillIcon, PhoneFillIcon } from '@navikt/aksel-icons';

import { Inntektsmelding, AoIArbeidsforhold, AlleKodeverk } from '@navikt/fp-types';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { KodeverkType, getKodeverknavnFraKode } from '@navikt/fp-kodeverk';
import { hentDokumentLenke } from '@navikt/fp-konstanter';

import styles from './inntektsmeldingOpplysningerPanel.module.css';

interface OwnProps {
  saksnummer: string;
  arbeidsforhold?: AoIArbeidsforhold;
  inntektsmelding: Inntektsmelding;
  skalViseArbeidsforholdId: boolean;
  alleKodeverk?: AlleKodeverk;
  arbeidsgiverFødselsdato?: string;
  ikkeVisInfo?: boolean;
}

const InntektsmeldingOpplysningerPanel: FunctionComponent<OwnProps> = ({
  saksnummer,
  arbeidsforhold,
  inntektsmelding,
  skalViseArbeidsforholdId,
  alleKodeverk,
  arbeidsgiverFødselsdato,
  ikkeVisInfo,
}) => (
  <>
    <VerticalSpacer eightPx />
    {!ikkeVisInfo && arbeidsgiverFødselsdato && (
      <HStack gap="4">
        <Label size="small">
          <FormattedMessage id="ArbeidsforholdInformasjonPanel.Fodselsdato" />
        </Label>
        <Detail>
          <DateLabel dateString={arbeidsgiverFødselsdato} />
        </Detail>
      </HStack>
    )}
    {!ikkeVisInfo && !arbeidsgiverFødselsdato && (
      <HStack gap="4">
        <Label size="small">
          <FormattedMessage id="ArbeidsforholdInformasjonPanel.Orgnr" />
        </Label>
        <Detail>{inntektsmelding.arbeidsgiverIdent}</Detail>
      </HStack>
    )}
    <VerticalSpacer eightPx />
    {skalViseArbeidsforholdId && (
      <>
        <HStack gap="4">
          <Label size="small">
            <FormattedMessage id="InntektsmeldingOpplysningerPanel.ArbeidsforholdId" />
          </Label>
          <BodyShort size="small">{inntektsmelding.eksternArbeidsforholdId}</BodyShort>
        </HStack>
        <VerticalSpacer eightPx />
      </>
    )}
    {arbeidsforhold && (
      <>
        <HStack gap="4">
          <Label size="small">
            <FormattedMessage id="InntektsmeldingOpplysningerPanel.Stillingsprosent" />
          </Label>
          <BodyShort size="small">
            {arbeidsforhold.stillingsprosent ? `${arbeidsforhold.stillingsprosent}%` : '-'}
          </BodyShort>
        </HStack>
        {arbeidsforhold.permisjonOgMangel && (
          <>
            <VerticalSpacer eightPx />
            <HStack gap="4">
              <Label size="small">
                {getKodeverknavnFraKode(
                  alleKodeverk,
                  KodeverkType.PERMISJONSBESKRIVELSE_TYPE,
                  arbeidsforhold.permisjonOgMangel.type,
                )}
              </Label>
              <BodyShort size="small">
                <PeriodLabel
                  dateStringFom={arbeidsforhold.permisjonOgMangel.permisjonFom}
                  dateStringTom={arbeidsforhold.permisjonOgMangel.permisjonTom}
                />
              </BodyShort>
            </HStack>
          </>
        )}
        <VerticalSpacer eightPx />
      </>
    )}
    <HStack gap="4">
      <Label size="small">
        <FormattedMessage id="InntektsmeldingOpplysningerPanel.Inntektsmelding" />
      </Label>
      <BodyShort size="small">{formatCurrencyNoKr(inntektsmelding.inntektPrMnd)}</BodyShort>
    </HStack>
    <VerticalSpacer eightPx />
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
    <VerticalSpacer eightPx />
    {inntektsmelding.refusjonPrMnd !== undefined && inntektsmelding.refusjonPrMnd !== null && (
      <>
        <HStack gap="4">
          <Label size="small">
            <FormattedMessage id="InntektsmeldingOpplysningerPanel.Refusjonsbeløp" />
          </Label>
          <BodyShort size="small">{formatCurrencyNoKr(inntektsmelding.refusjonPrMnd)}</BodyShort>
        </HStack>
        <VerticalSpacer eightPx />
      </>
    )}
    <Link
      href={hentDokumentLenke(saksnummer, inntektsmelding.journalpostId, inntektsmelding.dokumentId)}
      target="_blank"
    >
      <span>
        <BodyShort size="small" className={styles.inline}>
          <FormattedMessage id="InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding" />
        </BodyShort>
      </span>
      <FileFillIcon className={styles.docIcon} />
    </Link>
    <VerticalSpacer sixteenPx />
    <HStack gap="4">
      <PhoneFillIcon className={styles.phoneIcon} />
      <div>
        <VStack>
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
      </div>
    </HStack>
    <VerticalSpacer thirtyTwoPx />
  </>
);

export default InntektsmeldingOpplysningerPanel;
