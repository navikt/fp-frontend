import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label, BodyShort } from '@navikt/ds-react';
import { FigureOutwardIcon, FigureInwardIcon } from '@navikt/aksel-icons';
import { AlleKodeverk, KjønnkodeEnum, PersonopplysningerBasis } from '@navikt/fp-types';
import { KodeverkType, getKodeverknavnFraKode } from '@navikt/fp-kodeverk';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import Boks from '../Boks';

import AdresseVisning from './AdresseVisning';

import styles from './forelderPanel.module.css';

interface OwnProps {
  forelder: PersonopplysningerBasis;
  erSøker: boolean;
  alleKodeverk: AlleKodeverk;
  kjønn: string;
}

const ForelderPanel: FunctionComponent<OwnProps> = ({ forelder, erSøker, alleKodeverk, kjønn }) => {
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
                  {erKvinne && (
                    <FigureOutwardIcon
                      className={styles.imageKvinne}
                      title={intl.formatMessage({ id: 'ForelderPanel.Soker' })}
                    />
                  )}
                  {!erKvinne && (
                    <FigureInwardIcon
                      className={styles.imageMann}
                      title={intl.formatMessage({ id: 'ForelderPanel.Soker' })}
                    />
                  )}
                </FlexColumn>
                <FlexColumn>
                  <FlexContainer>
                    <FlexRow>
                      <FlexColumn>
                        <Label size="small">
                          <FormattedMessage id={erSøker ? 'ForelderPanel.Soker' : 'ForelderPanel.AnnenForelder'} />
                        </Label>
                        <BodyShort size="small">{forelder.navn}</BodyShort>
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
