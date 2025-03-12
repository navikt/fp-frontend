import { FormattedMessage } from 'react-intl';

import { FileFillIcon, PhoneFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail, HStack, Label, Link, VStack } from '@navikt/ds-react';
import { DateLabel, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { getKodeverknavnFraKode, KodeverkType } from '@navikt/fp-kodeverk';
import { hentDokumentLenke } from '@navikt/fp-konstanter';
import type { AlleKodeverk, AoIArbeidsforhold, Inntektsmelding } from '@navikt/fp-types';

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
  <>
    <VStack gap="4">
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
            <BodyShort size="small">
              {arbeidsforhold.stillingsprosent ? `${arbeidsforhold.stillingsprosent}%` : '-'}
            </BodyShort>
          </HStack>
          {arbeidsforhold.permisjonOgMangel && (
            <>
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
        </>
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
        <span>
          <BodyShort size="small" className={styles.inline}>
            <FormattedMessage id="InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding" />
          </BodyShort>
        </span>
        <FileFillIcon className={styles.docIcon} />
      </Link>
    </VStack>
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
  </>
);
