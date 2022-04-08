import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import {
  Image, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';

import telefonImageUrl from '@fpsak-frontend/assets/images/phone-3.svg';
import { Inntektsmelding, AoIArbeidsforhold, AlleKodeverk } from '@fpsak-frontend/types';
import { formatCurrencyNoKr } from '@fpsak-frontend/utils';
import { getKodeverknavnFraKode } from '@fpsak-frontend/utils/src/kodeverkUtils';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  PeriodLabel,
  VerticalSpacer,
} from '@fpsak-frontend/shared-components';
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
              <Element><FormattedMessage id="InntektsmeldingOpplysningerPanel.ArbeidsforholdId" /></Element>
            </FlexColumn>
            <FlexColumn>
              <Normaltekst>{inntektsmelding.eksternArbeidsforholdId}</Normaltekst>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer eightPx />
        </>
      )}
      {arbeidsforhold && (
        <>
          <FlexRow>
            <FlexColumn>
              <Element><FormattedMessage id="InntektsmeldingOpplysningerPanel.Stillingsprosent" /></Element>
            </FlexColumn>
            <FlexColumn>
              <Normaltekst>{arbeidsforhold.stillingsprosent ? `${arbeidsforhold.stillingsprosent}%` : '-'}</Normaltekst>
            </FlexColumn>
          </FlexRow>
          {arbeidsforhold.permisjonOgMangel && (
            <>
              <VerticalSpacer eightPx />
              <FlexRow>
                <FlexColumn>
                  <Element>
                    {getKodeverknavnFraKode(alleKodeverk,
                      KodeverkType.PERMISJONSBESKRIVELSE_TYPE, arbeidsforhold.permisjonOgMangel.type)}
                  </Element>
                </FlexColumn>
                <FlexColumn>
                  <Normaltekst>
                    <PeriodLabel
                      dateStringFom={arbeidsforhold.permisjonOgMangel.permisjonFom}
                      dateStringTom={arbeidsforhold.permisjonOgMangel.permisjonTom}
                    />
                  </Normaltekst>
                </FlexColumn>
              </FlexRow>
            </>
          )}
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
      {inntektsmelding.refusjonPrMnd !== undefined && inntektsmelding.refusjonPrMnd !== null && (
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
