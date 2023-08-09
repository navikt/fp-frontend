import React, { FunctionComponent } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import dayjs from 'dayjs';

import { ArbeidsforholdTilretteleggingDato } from '@navikt/fp-types';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { BranchingIcon, CalendarIcon, PersonPregnantIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail } from '@navikt/ds-react';
import { calcDaysAndWeeks } from '@navikt/ft-utils';

import styles from './tilretteleggingInfoPanel.module.css';

const finnTekst = (intl: IntlShape, termindato: string, fom?: string): string => {
  const dager = dayjs(termindato).diff(fom, 'days');
  return intl.formatMessage({ id: 'TilretteleggingInfoPanel.Dager' }, { dager });
};

interface OwnProps {
  tilrettelegging: ArbeidsforholdTilretteleggingDato;
  termindato: string;
  erTomDatoTreUkerFørTermin: boolean;
}

const TilretteleggingInfoPanel: FunctionComponent<OwnProps> = ({
  tilrettelegging,
  termindato,
  erTomDatoTreUkerFørTermin,
}) => {
  const intl = useIntl();

  // @ts-ignore FIKS obligatorisk tom
  const dagerOgUker = calcDaysAndWeeks(tilrettelegging.fom, tilrettelegging.tom);
  const fremTilTidspunkt = erTomDatoTreUkerFørTermin
    ? intl.formatMessage({ id: 'TilretteleggingInfoPanel.TreUker' })
    : finnTekst(intl, termindato, tilrettelegging.tom);
  return (
    <div
      style={{
        background: '#E5E5E5',
        marginLeft: '-30px',
        marginTop: '-30px',
        marginRight: '-30px',
        paddingBottom: '10px',
        paddingLeft: '20px',
        paddingRight: '50px',
        paddingTop: '10px',
      }}
    >
      <FlexContainer>
        <FlexRow spaceBetween>
          <FlexColumn>
            <FlexContainer>
              <FlexRow>
                <FlexColumn className={styles.iconPadding}>
                  <PersonPregnantIcon title="a11y-title" fontSize="1.5rem" />
                </FlexColumn>
                <FlexColumn>
                  <BodyShort size="small">Svangerskapspenger...</BodyShort>
                  <Detail>Av stillingsprosenten på...</Detail>
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
          </FlexColumn>
          <FlexColumn>
            <FlexContainer>
              <FlexRow>
                <FlexColumn className={styles.iconPadding}>
                  <CalendarIcon title="a11y-title" fontSize="1.5rem" />
                </FlexColumn>
                <FlexColumn>
                  <BodyShort size="small">
                    <FormattedMessage
                      id="TilretteleggingInfoPanel.Periode"
                      values={{
                        periode: dagerOgUker.formattedString,
                      }}
                    />
                  </BodyShort>
                  <Detail>{fremTilTidspunkt}</Detail>
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
          </FlexColumn>
          <FlexColumn>
            <FlexContainer>
              <FlexRow>
                <FlexColumn className={styles.iconPadding}>
                  <BranchingIcon title="a11y-title" fontSize="1.5rem" />
                </FlexColumn>
                <FlexColumn>
                  <BodyShort size="small">
                    {' '}
                    <FormattedMessage id="TilretteleggingInfoPanel.FraSoknad" />
                  </BodyShort>
                  <Detail>Sendt...</Detail>
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </div>
  );
};

export default TilretteleggingInfoPanel;
