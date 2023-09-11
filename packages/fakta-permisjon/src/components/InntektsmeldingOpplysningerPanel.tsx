import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort, Detail, Link } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { PhoneFillIcon, FileFillIcon } from '@navikt/aksel-icons';

import { Inntektsmelding } from '@navikt/fp-types';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { hentDokumentLenke } from '@navikt/fp-konstanter';

import styles from './inntektsmeldingOpplysningerPanel.module.css';

interface OwnProps {
  saksnummer: string;
  inntektsmelding: Inntektsmelding;
}

const InntektsmeldingOpplysningerPanel: FunctionComponent<OwnProps> = ({ saksnummer, inntektsmelding }) => (
  <>
    <VerticalSpacer eightPx />
    <FlexContainer>
      <FlexRow>
        <FlexColumn>
          <Label size="small">
            <FormattedMessage id="InntektsmeldingOpplysningerPanel.Inntektsmelding" />
          </Label>
        </FlexColumn>
        <FlexColumn className={styles.topPadding}>
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
        <FlexColumn className={styles.topPadding}>
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
      {inntektsmelding.refusjonPrMnd && (
        <>
          <FlexRow>
            <FlexColumn>
              <Label size="small">
                <FormattedMessage id="InntektsmeldingOpplysningerPanel.Refusjonsbeløp" />
              </Label>
            </FlexColumn>
            <FlexColumn className={styles.topPadding}>
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
              <Detail>{inntektsmelding.kontaktpersonNavn}</Detail>
            </FlexColumn>
          </FlexRow>
          <FlexRow>
            <FlexColumn>
              <Detail>
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
