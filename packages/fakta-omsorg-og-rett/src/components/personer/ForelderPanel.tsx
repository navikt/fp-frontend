import {
  FlexColumn, FlexContainer, FlexRow, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { AlleKodeverk, KjønnkodeEnum, PersonopplysningerBasis } from '@fpsak-frontend/types';
import kvinneIkonUrl from '@fpsak-frontend/assets/images/female.svg';
import mannIkonUrl from '@fpsak-frontend/assets/images/male.svg';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { getKodeverknavnFraKode } from '@navikt/ft-utils';
import Boks from '../Boks';

import AdresseVisning from './AdresseVisning';

interface OwnProps {
  forelder: PersonopplysningerBasis;
  erSøker: boolean;
  alleKodeverk: AlleKodeverk;
}

const ForelderPanel: FunctionComponent<OwnProps> = ({
  forelder,
  erSøker,
  alleKodeverk,
}) => {
  const intl = useIntl();

  const erKvinne = forelder.kjønn === KjønnkodeEnum.KVINNE;

  return (
    <Boks harBorderTop={false}>
      <Row>
        <Column xs="5">
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Image alt={intl.formatMessage({ id: 'ForelderPanel.Soker' })} src={erKvinne ? kvinneIkonUrl : mannIkonUrl} />
              </FlexColumn>
              <FlexColumn>
                <FlexContainer>
                  <FlexRow>
                    <FlexColumn>
                      <Element>
                        <FormattedMessage id={erSøker ? 'ForelderPanel.Soker' : 'ForelderPanel.AnnenForelder'} />
                      </Element>
                      <Normaltekst>
                        {forelder.navn}
                      </Normaltekst>
                      <Normaltekst>
                        {getKodeverknavnFraKode(alleKodeverk, KodeverkType.SIVILSTAND_TYPE, forelder.sivilstand)}
                      </Normaltekst>
                    </FlexColumn>
                  </FlexRow>
                  <VerticalSpacer sixteenPx />
                </FlexContainer>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </Column>
        <Column xs="7">
          <AdresseVisning personopplysninger={forelder} />
        </Column>
      </Row>
    </Boks>
  );
};

export default ForelderPanel;
