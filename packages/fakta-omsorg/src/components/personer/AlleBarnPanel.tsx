import { FormattedMessage, useIntl } from 'react-intl';
import React, { FunctionComponent } from 'react';
import { ChildEyesIcon } from '@navikt/aksel-icons';
import { Label, BodyShort } from '@navikt/ds-react';
import { DateLabel, FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
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
          <FlexContainer>
            <FlexRow>
              <FlexColumn className={styles.leftCol}>
                <FlexContainer>
                  <FlexRow>
                    <FlexColumn>
                      <ChildEyesIcon
                        className={styles.image}
                        title={intl.formatMessage({ id: 'AlleBarnPanel.Barn' })}
                      />
                    </FlexColumn>
                    <FlexColumn>
                      <FlexContainer>
                        <FlexRow>
                          <FlexColumn>
                            <Label size="small">
                              <FormattedMessage id="AlleBarnPanel.BarnNr" values={{ nummer: index + 1 }} />
                            </Label>
                            <BodyShort size="small">{barn.navn ? barn.navn : '-'}</BodyShort>
                          </FlexColumn>
                        </FlexRow>
                        <VerticalSpacer sixteenPx />
                        <FlexRow>
                          <FlexColumn>
                            <Label size="small">
                              <FormattedMessage id="AlleBarnPanel.Fodt" />
                            </Label>
                            <BodyShort size="small">
                              <DateLabel dateString={barn.fødselsdato ? barn.fødselsdato : '-'} />
                            </BodyShort>
                          </FlexColumn>
                        </FlexRow>
                        <VerticalSpacer sixteenPx />
                        {barn.dødsdato && (
                          <FlexRow>
                            <FlexColumn>
                              <Label size="small" className={styles.dodTekst}>
                                <FormattedMessage id="AlleBarnPanel.Dod" />
                              </Label>
                              <BodyShort size="small" className={styles.dodTekst}>
                                <DateLabel dateString={barn.dødsdato} />
                              </BodyShort>
                            </FlexColumn>
                          </FlexRow>
                        )}
                      </FlexContainer>
                    </FlexColumn>
                  </FlexRow>
                </FlexContainer>
              </FlexColumn>
              <FlexColumn>
                <AdresseVisning personopplysninger={barn} />
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </Boks>
      ))}
    </>
  );
};

export default AlleBarnPanel;
