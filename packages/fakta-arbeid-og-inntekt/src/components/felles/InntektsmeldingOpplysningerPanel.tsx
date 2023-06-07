import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, Label, BodyShort, Detail } from '@navikt/ds-react';
import { Image, FlexColumn, FlexContainer, FlexRow, PeriodLabel, VerticalSpacer } from '@navikt/ft-ui-komponenter';
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
}

const InntektsmeldingOpplysningerPanel: FunctionComponent<OwnProps> = ({
  saksnummer,
  arbeidsforhold,
  inntektsmelding,
  skalViseArbeidsforholdId,
  alleKodeverk,
}) => (
  <>
    <VerticalSpacer eightPx />
    <FlexContainer>
      {skalViseArbeidsforholdId && (
        <>
          <FlexRow>
            <FlexColumn>
              <Label size="small">
                <FormattedMessage id="InntektsmeldingOpplysningerPanel.ArbeidsforholdId" />
              </Label>
            </FlexColumn>
            <FlexColumn className={styles.textMargin}>
              <BodyShort size="small">{inntektsmelding.eksternArbeidsforholdId}</BodyShort>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer eightPx />
        </>
      )}
      {arbeidsforhold && (
        <>
          <FlexRow>
            <FlexColumn>
              <Label size="small">
                <FormattedMessage id="InntektsmeldingOpplysningerPanel.Stillingsprosent" />
              </Label>
            </FlexColumn>
            <FlexColumn className={styles.textMargin}>
              <BodyShort size="small">
                {arbeidsforhold.stillingsprosent ? `${arbeidsforhold.stillingsprosent}%` : '-'}
              </BodyShort>
            </FlexColumn>
          </FlexRow>
          {arbeidsforhold.permisjonOgMangel && (
            <>
              <VerticalSpacer eightPx />
              <FlexRow>
                <FlexColumn>
                  <Label size="small">
                    {getKodeverknavnFraKode(
                      alleKodeverk,
                      KodeverkType.PERMISJONSBESKRIVELSE_TYPE,
                      arbeidsforhold.permisjonOgMangel.type,
                    )}
                  </Label>
                </FlexColumn>
                <FlexColumn className={styles.textMargin}>
                  <BodyShort size="small">
                    <PeriodLabel
                      dateStringFom={arbeidsforhold.permisjonOgMangel.permisjonFom}
                      dateStringTom={arbeidsforhold.permisjonOgMangel.permisjonTom}
                    />
                  </BodyShort>
                </FlexColumn>
              </FlexRow>
            </>
          )}
          <VerticalSpacer eightPx />
        </>
      )}
      <FlexRow>
        <FlexColumn>
          <Label size="small">
            <FormattedMessage id="InntektsmeldingOpplysningerPanel.Inntektsmelding" />
          </Label>
        </FlexColumn>
        <FlexColumn className={styles.textMargin}>
          <BodyShort size="small">{formatCurrencyNoKr(inntektsmelding.inntektPrMnd)}</BodyShort>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      <FlexRow>
        <FlexColumn>
          <Label size="small">
            <FormattedMessage id="InntektsmeldingOpplysningerPanel.Refusjon" />
          </Label>
        </FlexColumn>
        <FlexColumn className={styles.textMargin}>
          <BodyShort size="small">
            <FormattedMessage
              id={
                inntektsmelding.refusjonPrMnd
                  ? 'InntektsmeldingOpplysningerPanel.Ja'
                  : 'InntektsmeldingOpplysningerPanel.Nei'
              }
            />
          </BodyShort>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      {inntektsmelding.refusjonPrMnd !== undefined && inntektsmelding.refusjonPrMnd !== null && (
        <>
          <FlexRow>
            <FlexColumn>
              <Label size="small">
                <FormattedMessage id="InntektsmeldingOpplysningerPanel.Refusjonsbeløp" />
              </Label>
            </FlexColumn>
            <FlexColumn className={styles.textMargin}>
              <BodyShort size="small">{formatCurrencyNoKr(inntektsmelding.refusjonPrMnd)}</BodyShort>
            </FlexColumn>
          </FlexRow>
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
      <FlexRow>
        <FlexColumn>
          <PhoneFillIcon className={styles.phoneIcon} />
        </FlexColumn>
        <FlexColumn>
          <FlexRow>
            <FlexColumn>
              <Label size="small">
                <FormattedMessage id="InntektsmeldingOpplysningerPanel.Kontaktinfo" />
              </Label>
            </FlexColumn>
          </FlexRow>
          <FlexRow>
            <FlexColumn>
              <Detail size="small">{inntektsmelding.kontaktpersonNavn}</Detail>
            </FlexColumn>
          </FlexRow>
          <FlexRow>
            <FlexColumn>
              <Detail size="small">
                <FormattedMessage
                  id="InntektsmeldingOpplysningerPanel.Tlf"
                  values={{ nr: inntektsmelding.kontaktpersonNummer }}
                />
              </Detail>
            </FlexColumn>
          </FlexRow>
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
    <VerticalSpacer thirtyTwoPx />
  </>
);

export default InntektsmeldingOpplysningerPanel;
