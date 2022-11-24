import {
  FlexColumn, FlexContainer, FlexRow, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label, BodyShort } from '@navikt/ds-react';
import { AlleKodeverk, KjønnkodeEnum, PersonopplysningerBasis } from '@fpsak-frontend/types';
import kvinneIkonUrl from '@fpsak-frontend/assets/images/female.svg';
import mannIkonUrl from '@fpsak-frontend/assets/images/male.svg';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { getKodeverknavnFraKode } from '@fpsak-frontend/kodeverk/src/kodeverkUtils';

import Boks from '../Boks';

import AdresseVisning from './AdresseVisning';

import styles from './forelderPanel.less';

interface OwnProps {
  forelder: PersonopplysningerBasis;
  erSøker: boolean;
  alleKodeverk: AlleKodeverk;
  kjønn: string;
}

const ForelderPanel: FunctionComponent<OwnProps> = ({
  forelder,
  erSøker,
  alleKodeverk,
  kjønn,
}) => {
  const intl = useIntl();

  const erKvinne = kjønn === KjønnkodeEnum.KVINNE;

  return (
    <Boks harBorderTop={false}>
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.leftCol}>
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <Image alt={intl.formatMessage({ id: 'ForelderPanel.Soker' })} src={erKvinne ? kvinneIkonUrl : mannIkonUrl} />
                </FlexColumn>
                <FlexColumn>
                  <FlexContainer>
                    <FlexRow>
                      <FlexColumn>
                        <Label size="small">
                          <FormattedMessage id={erSøker ? 'ForelderPanel.Soker' : 'ForelderPanel.AnnenForelder'} />
                        </Label>
                        <BodyShort size="small">
                          {forelder.navn}
                        </BodyShort>
                        <BodyShort size="small">
                          {getKodeverknavnFraKode(alleKodeverk, KodeverkType.SIVILSTAND_TYPE, forelder.sivilstand)}
                        </BodyShort>
                      </FlexColumn>
                    </FlexRow>
                    <VerticalSpacer sixteenPx />
                  </FlexContainer>
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
          </FlexColumn>
          <FlexColumn>
            <AdresseVisning personopplysninger={forelder} />
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </Boks>
  );
};

export default ForelderPanel;
