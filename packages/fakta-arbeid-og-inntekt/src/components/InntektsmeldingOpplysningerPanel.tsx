import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Element, Undertekst } from 'nav-frontend-typografi';

import telefonImageUrl from '@fpsak-frontend/assets/images/phone-3.svg';
import { Inntektsmelding } from '@fpsak-frontend/types';
import { formatCurrencyNoKr } from '@fpsak-frontend/utils';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow, Image,
} from '@fpsak-frontend/shared-components';

interface OwnProps {
  stillingsprosent?: number;
  inntektsmelding: Inntektsmelding;
}

const InntektsmeldingOpplysningerPanel: FunctionComponent<OwnProps> = ({
  stillingsprosent,
  inntektsmelding,
}) => (
  <>
    <VerticalSpacer eightPx />
    <FlexContainer>
      {stillingsprosent && (
        <>
          <FlexRow>
            <FlexColumn>
              <Element><FormattedMessage id="InntektsmeldingOpplysningerPanel.Stillingsprosent" /></Element>
            </FlexColumn>
            <FlexColumn>
              {`${stillingsprosent}%`}
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
          {formatCurrencyNoKr(inntektsmelding.inntektPrMnd)}
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      <FlexRow>
        <FlexColumn>
          <Element><FormattedMessage id="InntektsmeldingOpplysningerPanel.Refusjon" /></Element>
        </FlexColumn>
        <FlexColumn>
          <FormattedMessage id={inntektsmelding.refusjonPrMnd ? 'InntektsmeldingOpplysningerPanel.Ja' : 'InntektsmeldingOpplysningerPanel.Nei'} />
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
              {formatCurrencyNoKr(inntektsmelding.refusjonPrMnd)}
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer eightPx />
        </>
      )}
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
  </>
);

export default InntektsmeldingOpplysningerPanel;
