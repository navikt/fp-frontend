import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';

import telefonImageUrl from '@fpsak-frontend/assets/images/phone-3.svg';
import { Inntektsmelding } from '@fpsak-frontend/types';
import { formatCurrencyNoKr } from '@fpsak-frontend/utils';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow, Image,
} from '@fpsak-frontend/shared-components';
import { hentDokumentLenke } from '@fpsak-frontend/konstanter';
import dokumentSvg from '@fpsak-frontend/assets/images/dokument_filled.svg';

import styles from './inntektsmeldingOpplysningerPanel.less';

interface OwnProps {
  saksnummer: string;
  stillingsprosent?: number;
  inntektsmelding: Inntektsmelding;
  skalViseArbeidsforholdId: boolean;
}

const InntektsmeldingOpplysningerPanel: FunctionComponent<OwnProps> = ({
  saksnummer,
  stillingsprosent,
  inntektsmelding,
  skalViseArbeidsforholdId,
}) => (
  <>
    <VerticalSpacer eightPx />
    <FlexContainer>
      {skalViseArbeidsforholdId && (
        <>
          <FlexRow>
            <FlexColumn>
              <Element><FormattedMessage id="InntektsmeldingOpplysningerPanel.ArbeidsforholdId" /></Element>
            </FlexColumn>
            <FlexColumn>
              <Normaltekst>{inntektsmelding.eksternArbeidsforholdId}</Normaltekst>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer eightPx />
        </>
      )}
      {stillingsprosent && (
        <>
          <FlexRow>
            <FlexColumn>
              <Element><FormattedMessage id="InntektsmeldingOpplysningerPanel.Stillingsprosent" /></Element>
            </FlexColumn>
            <FlexColumn>
              <Normaltekst>{`${stillingsprosent}%`}</Normaltekst>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer eightPx />
        </>
      )}
      <FlexRow>
        <FlexColumn>
          <Element><FormattedMessage id="InntektsmeldingOpplysningerPanel.Inntektsmelding" /></Element>
        </FlexColumn>
        <FlexColumn>
          <Normaltekst>{formatCurrencyNoKr(inntektsmelding.inntektPrMnd)}</Normaltekst>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      <FlexRow>
        <FlexColumn>
          <Element><FormattedMessage id="InntektsmeldingOpplysningerPanel.Refusjon" /></Element>
        </FlexColumn>
        <FlexColumn>
          <Normaltekst>
            <FormattedMessage id={inntektsmelding.refusjonPrMnd ? 'InntektsmeldingOpplysningerPanel.Ja' : 'InntektsmeldingOpplysningerPanel.Nei'} />
          </Normaltekst>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      {inntektsmelding.refusjonPrMnd && (
        <>
          <FlexRow>
            <FlexColumn>
              <Element><FormattedMessage id="InntektsmeldingOpplysningerPanel.Refusjonsbeløp" /></Element>
            </FlexColumn>
            <FlexColumn>
              <Normaltekst>{formatCurrencyNoKr(inntektsmelding.refusjonPrMnd)}</Normaltekst>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer eightPx />
        </>
      )}
      <Lenke href={hentDokumentLenke(saksnummer, inntektsmelding.journalpostId, inntektsmelding.dokumentId)} target="_blank">
        <span>
          <Normaltekst className={styles.inline}>
            <FormattedMessage id="InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding" />
          </Normaltekst>
        </span>
        <Image src={dokumentSvg} />
      </Lenke>
      <VerticalSpacer sixteenPx />
      <FlexRow>
        <FlexColumn>
          <Image src={telefonImageUrl} />
        </FlexColumn>
        <FlexColumn>
          <FlexRow>
            <FlexColumn>
              <Element><FormattedMessage id="InntektsmeldingOpplysningerPanel.Kontaktinfo" /></Element>
            </FlexColumn>
          </FlexRow>
          <FlexRow>
            <FlexColumn>
              <Undertekst>{inntektsmelding.kontaktpersonNavn}</Undertekst>
            </FlexColumn>
          </FlexRow>
          <FlexRow>
            <FlexColumn>
              <Undertekst>
                <FormattedMessage id="InntektsmeldingOpplysningerPanel.Tlf" values={{ nr: inntektsmelding.kontaktpersonNummer }} />
              </Undertekst>
            </FlexColumn>
          </FlexRow>
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
    <VerticalSpacer thirtyTwoPx />
  </>
);

export default InntektsmeldingOpplysningerPanel;
