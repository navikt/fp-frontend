import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Link, Label, BodyShort, Detail,
} from '@navikt/ds-react';
import {
  Image, FlexColumn, FlexContainer, FlexRow, PeriodLabel, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import telefonImageUrl from '@fpsak-frontend/assets/images/phone-3.svg';
import { Inntektsmelding, AoIArbeidsforhold, AlleKodeverk } from '@fpsak-frontend/types';
import { formatCurrencyNoKr, getKodeverknavnFraKode } from '@navikt/ft-utils';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { hentDokumentLenke } from '@fpsak-frontend/konstanter';
import dokumentSvg from '@fpsak-frontend/assets/images/dokument_filled.svg';

import styles from './inntektsmeldingOpplysningerPanel.less';

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
              <Label size="small"><FormattedMessage id="InntektsmeldingOpplysningerPanel.ArbeidsforholdId" /></Label>
            </FlexColumn>
            <FlexColumn>
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
              <Label size="small"><FormattedMessage id="InntektsmeldingOpplysningerPanel.Stillingsprosent" /></Label>
            </FlexColumn>
            <FlexColumn>
              <BodyShort size="small">{arbeidsforhold.stillingsprosent ? `${arbeidsforhold.stillingsprosent}%` : '-'}</BodyShort>
            </FlexColumn>
          </FlexRow>
          {arbeidsforhold.permisjonOgMangel && (
            <>
              <VerticalSpacer eightPx />
              <FlexRow>
                <FlexColumn>
                  <Label size="small">
                    {getKodeverknavnFraKode(alleKodeverk,
                      KodeverkType.PERMISJONSBESKRIVELSE_TYPE, arbeidsforhold.permisjonOgMangel.type)}
                  </Label>
                </FlexColumn>
                <FlexColumn>
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
          <Label size="small"><FormattedMessage id="InntektsmeldingOpplysningerPanel.Inntektsmelding" /></Label>
        </FlexColumn>
        <FlexColumn>
          <BodyShort size="small">{formatCurrencyNoKr(inntektsmelding.inntektPrMnd)}</BodyShort>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      <FlexRow>
        <FlexColumn>
          <Label size="small"><FormattedMessage id="InntektsmeldingOpplysningerPanel.Refusjon" /></Label>
        </FlexColumn>
        <FlexColumn>
          <BodyShort size="small">
            <FormattedMessage id={inntektsmelding.refusjonPrMnd ? 'InntektsmeldingOpplysningerPanel.Ja' : 'InntektsmeldingOpplysningerPanel.Nei'} />
          </BodyShort>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      {inntektsmelding.refusjonPrMnd !== undefined && inntektsmelding.refusjonPrMnd !== null && (
        <>
          <FlexRow>
            <FlexColumn>
              <Label size="small"><FormattedMessage id="InntektsmeldingOpplysningerPanel.Refusjonsbeløp" /></Label>
            </FlexColumn>
            <FlexColumn>
              <BodyShort size="small">{formatCurrencyNoKr(inntektsmelding.refusjonPrMnd)}</BodyShort>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer eightPx />
        </>
      )}
      <Link href={hentDokumentLenke(saksnummer, inntektsmelding.journalpostId, inntektsmelding.dokumentId)} target="_blank">
        <span>
          <BodyShort size="small" className={styles.inline}>
            <FormattedMessage id="InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding" />
          </BodyShort>
        </span>
        <Image src={dokumentSvg} />
      </Link>
      <VerticalSpacer sixteenPx />
      <FlexRow>
        <FlexColumn>
          <Image src={telefonImageUrl} />
        </FlexColumn>
        <FlexColumn>
          <FlexRow>
            <FlexColumn>
              <Label size="small"><FormattedMessage id="InntektsmeldingOpplysningerPanel.Kontaktinfo" /></Label>
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
                <FormattedMessage id="InntektsmeldingOpplysningerPanel.Tlf" values={{ nr: inntektsmelding.kontaktpersonNummer }} />
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
