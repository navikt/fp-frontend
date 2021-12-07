import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Element, Undertekst } from 'nav-frontend-typografi';

import telefonImageUrl from '@fpsak-frontend/assets/images/phone-3.svg';
import { AoIArbeidsforhold, Inntektsmelding } from '@fpsak-frontend/types';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow, Image,
} from '@fpsak-frontend/shared-components';

interface OwnProps {
  arbeidsforhold: AoIArbeidsforhold;
  inntektsmelding: Inntektsmelding;
}

const ReadonlyPanel: FunctionComponent<OwnProps> = ({
  arbeidsforhold,
  inntektsmelding,
}) => (
  <>
    <VerticalSpacer sixteenPx />
    <FlexContainer>
      {arbeidsforhold.stillingsprosent && (
        <FlexRow>
          <FlexColumn>
            <Element><FormattedMessage id="ReadonlyPanel.Stillingsprosent" /></Element>
          </FlexColumn>
          <FlexColumn>
            {`${arbeidsforhold.stillingsprosent} %`}
          </FlexColumn>
        </FlexRow>
      )}
      <FlexRow>
        <FlexColumn>
          <Element><FormattedMessage id="ReadonlyPanel.Inntektsmelding" /></Element>
        </FlexColumn>
        <FlexColumn>
          {inntektsmelding.inntektPrMnd}
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn>
          <Element><FormattedMessage id="ReadonlyPanel.Refusjon" /></Element>
        </FlexColumn>
        <FlexColumn>
          <FormattedMessage id={inntektsmelding.refusjonPrMnd ? 'ReadonlyPanel.Ja' : 'ReadonlyPanel.Nei'} />
        </FlexColumn>
      </FlexRow>
      {inntektsmelding.refusjonPrMnd && (
        <FlexRow>
          <FlexColumn>
            <Element><FormattedMessage id="ReadonlyPanel.Refusjonsbeløp" /></Element>
          </FlexColumn>
          <FlexColumn>
            {inntektsmelding.refusjonPrMnd}
          </FlexColumn>
        </FlexRow>
      )}
      <FlexRow>
        <FlexColumn>
          <Image src={telefonImageUrl} />
        </FlexColumn>
        <FlexColumn>
          <FlexRow>
            <FlexColumn>
              <Element><FormattedMessage id="ReadonlyPanel.Kontaktinfo" /></Element>
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
                <FormattedMessage id="ReadonlyPanel.Tlf" />
                {inntektsmelding.kontaktpersonNummer}
              </Undertekst>
            </FlexColumn>
          </FlexRow>
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  </>
);

export default ReadonlyPanel;
