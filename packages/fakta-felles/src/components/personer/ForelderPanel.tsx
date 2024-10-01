import React from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { FigureOutwardIcon, FigureInwardIcon } from '@navikt/aksel-icons';
import { Label, BodyShort, HStack } from '@navikt/ds-react';
import { AlleKodeverk, KjønnkodeEnum, PersonopplysningerBasis } from '@navikt/fp-types';
import { KodeverkType, getKodeverknavnFraKode } from '@navikt/fp-kodeverk';
import { createIntl } from '@navikt/ft-utils';

import { AdresseVisning } from './AdresseVisning';
import { Boks } from '../Boks';

import styles from './forelderPanel.module.css';
import messages from '../../../i18n/nb_NO.json';
const intl = createIntl(messages);

interface Props {
  forelder: PersonopplysningerBasis;
  erSøker?: boolean;
  alleKodeverk: AlleKodeverk;
  kjønn: string;
}

export const ForelderPanel = ({ forelder, erSøker = false, alleKodeverk, kjønn }: Props) => {
  const erKvinne = kjønn === KjønnkodeEnum.KVINNE;

  return (
    <RawIntlProvider value={intl}>
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
              <FigureInwardIcon
                className={styles.imageMann}
                title={intl.formatMessage({ id: 'ForelderPanel.Soker' })}
              />
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
          <AdresseVisning adresser={forelder.adresser} />
        </HStack>
      </Boks>
    </RawIntlProvider>
  );
};
