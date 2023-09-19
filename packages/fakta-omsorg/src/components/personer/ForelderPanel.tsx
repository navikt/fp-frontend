import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { FigureOutwardIcon, FigureInwardIcon } from '@navikt/aksel-icons';
import { Label, BodyShort, HStack } from '@navikt/ds-react';
import { AlleKodeverk, KjønnkodeEnum, PersonopplysningerBasis } from '@navikt/fp-types';
import { KodeverkType, getKodeverknavnFraKode } from '@navikt/fp-kodeverk';

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
      <HStack>
        <HStack gap="5" className={styles.leftCol}>
          {erKvinne && (
            <FigureOutwardIcon
              className={styles.imageKvinne}
              title={intl.formatMessage({ id: 'ForelderPanel.Soker' })}
            />
          )}
          {!erKvinne && (
            <FigureInwardIcon className={styles.imageMann} title={intl.formatMessage({ id: 'ForelderPanel.Soker' })} />
          )}
          <div>
            <Label size="small">
              <FormattedMessage id={erSøker ? 'ForelderPanel.Soker' : 'ForelderPanel.AnnenForelder'} />
            </Label>
            <BodyShort size="small">{forelder.navn}</BodyShort>
            <BodyShort size="small">
              {getKodeverknavnFraKode(alleKodeverk, KodeverkType.SIVILSTAND_TYPE, forelder.sivilstand)}
            </BodyShort>
          </div>
        </HStack>
        <div>
          <AdresseVisning personopplysninger={forelder} />
        </div>
      </HStack>
    </Boks>
  );
};

export default ForelderPanel;
