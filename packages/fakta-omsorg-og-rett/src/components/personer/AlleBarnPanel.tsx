import {
  DateLabel,
  FlexColumn, FlexContainer, FlexRow, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Element, Normaltekst } from 'nav-frontend-typografi';
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
                    <Image alt={intl.formatMessage({ id: 'PersonInfoPanel.Barn' })} src={barnIkonUrl} />
                  </FlexColumn>
                  <FlexColumn>
                    <FlexContainer>
                      <FlexRow>
                        <FlexColumn>
                          <Element>
                            <FormattedMessage id="PersonInfoPanel.BarnNr" values={{ nummer: index + 1 }} />
                          </Element>
                          <Normaltekst>
                            {barn.navn ? barn.navn : '-'}
                          </Normaltekst>
                        </FlexColumn>
                      </FlexRow>
                      <VerticalSpacer sixteenPx />
                      <FlexRow>
                        <FlexColumn>
                          <Element>
                            <FormattedMessage id="PersonInfoPanel.Fodt" />
                          </Element>
                          <Normaltekst>
                            <DateLabel dateString={barn.fødselsdato ? barn.fødselsdato : '-'} />
                          </Normaltekst>
                        </FlexColumn>
                      </FlexRow>
                      <VerticalSpacer sixteenPx />
                      {barn.dødsdato && (
                        <FlexRow>
                          <FlexColumn>
                            <Element className={styles.dodTekst}>
                              <FormattedMessage id="PersonInfoPanel.Dod" />
                            </Element>
                            <Normaltekst className={styles.dodTekst}>
                              <DateLabel dateString={barn.dødsdato} />
                            </Normaltekst>
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
