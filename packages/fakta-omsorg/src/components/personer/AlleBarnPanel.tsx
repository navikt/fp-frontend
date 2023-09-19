import { FormattedMessage, useIntl } from 'react-intl';
import React, { FunctionComponent } from 'react';
import { ChildEyesIcon } from '@navikt/aksel-icons';
import { Label, BodyShort, HStack, VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { PersonopplysningerBasis } from '@navikt/fp-types';

import Boks from '../Boks';
import AdresseVisning from './AdresseVisning';

import styles from './alleBarnPanel.module.css';

interface OwnProps {
  alleBarn: PersonopplysningerBasis[];
}

const AlleBarnPanel: FunctionComponent<OwnProps> = ({ alleBarn }) => {
  const intl = useIntl();
  return (
    <>
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
            <div>
              <AdresseVisning personopplysninger={barn} />
            </div>
          </HStack>
        </Boks>
      ))}
    </>
  );
};

export default AlleBarnPanel;
