import React from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { ChildEyesIcon } from '@navikt/aksel-icons';
import { Label, BodyShort, HStack, VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { PersonopplysningerBasis } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import { Boks } from '../Boks';
import { AdresseVisning } from './AdresseVisning';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

import styles from './alleBarnPanel.module.css';

interface Props {
  alleBarn: PersonopplysningerBasis[];
}

export const AlleBarnPanel = ({ alleBarn }: Props) => {
  return (
    <RawIntlProvider value={intl}>
      {alleBarn.map((barn, index) => (
        <Boks key={barn.aktoerId} harBorderTop={index === 0}>
          <HStack>
            <HStack gap="5" className={styles.leftCol}>
              <ChildEyesIcon className={styles.image} title={intl.formatMessage({ id: 'AlleBarnPanel.Barn' })} />
              <VStack gap="2">
                <div>
                  <Label size="small">
                    <FormattedMessage id="AlleBarnPanel.BarnNr" values={{ nummer: index + 1 }} />
                  </Label>
                  <BodyShort size="small">{barn.navn ? barn.navn : '-'}</BodyShort>
                </div>
                <div>
                  <Label size="small">
                    <FormattedMessage id="AlleBarnPanel.Fodt" />
                  </Label>
                  <BodyShort size="small">
                    <DateLabel dateString={barn.fødselsdato ? barn.fødselsdato : '-'} />
                  </BodyShort>
                </div>
                {barn.dødsdato && (
                  <div>
                    <Label size="small" className={styles.dodTekst}>
                      <FormattedMessage id="AlleBarnPanel.Dod" />
                    </Label>
                    <BodyShort size="small" className={styles.dodTekst}>
                      <DateLabel dateString={barn.dødsdato} />
                    </BodyShort>
                  </div>
                )}
              </VStack>
            </HStack>
            <AdresseVisning adresser={barn.adresser} />
          </HStack>
        </Boks>
      ))}
    </RawIntlProvider>
  );
};
