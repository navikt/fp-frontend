import {
  DateLabel,
  FlexColumn, FlexContainer, FlexRow, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label, BodyShort } from '@navikt/ds-react';
import { Column, Row } from 'nav-frontend-grid';
import { PersonopplysningerBasis } from '@fpsak-frontend/types';
import barnIkonUrl from '@fpsak-frontend/assets/images/child.svg';
import Boks from '../Boks';

import styles from './alleBarnPanel.less';
import AdresseVisning from './AdresseVisning';

interface OwnProps {
  alleBarn: PersonopplysningerBasis[];
}

const AlleBarnPanel: FunctionComponent<OwnProps> = ({
  alleBarn,
}) => {
  const intl = useIntl();
  return (
    <>
      {alleBarn.map((barn, index) => (
        <Boks key={barn.aktoerId} harBorderTop={index === 0}>
          <Row>
            <Column xs="5">
              <FlexContainer>
                <FlexRow>
                  <FlexColumn>
                    <Image alt={intl.formatMessage({ id: 'AlleBarnPanel.Barn' })} src={barnIkonUrl} />
                  </FlexColumn>
                  <FlexColumn>
                    <FlexContainer>
                      <FlexRow>
                        <FlexColumn>
                          <Label size="small">
                            <FormattedMessage id="AlleBarnPanel.BarnNr" values={{ nummer: index + 1 }} />
                          </Label>
                          <BodyShort size="small">
                            {barn.navn ? barn.navn : '-'}
                          </BodyShort>
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
            </Column>
            <Column xs="7">
              <AdresseVisning personopplysninger={barn} />
            </Column>
          </Row>
        </Boks>
      ))}
    </>
  );
};

export default AlleBarnPanel;
