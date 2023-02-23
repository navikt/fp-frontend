import {
  FlexColumn, FlexContainer, FlexRow, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label, BodyShort } from '@navikt/ds-react';
import { AlleKodeverk, KjønnkodeEnum, PersonopplysningerBasis } from '@navikt/fp-types';
import { KodeverkType, getKodeverknavnFraKode } from '@navikt/fp-kodeverk';

import Boks from '../Boks';
import kvinneIkonUrl from '../../images/female.svg';
import mannIkonUrl from '../../images/male.svg';
import AdresseVisning from './AdresseVisning';

import styles from './forelderPanel.module.css';

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
