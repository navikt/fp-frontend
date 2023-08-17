import React, { FunctionComponent } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import dayjs from 'dayjs';

import { ArbeidsforholdTilretteleggingDato, SvpTilretteleggingFomKilde } from '@navikt/fp-types';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { BranchingIcon, CalendarIcon, PersonPregnantIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail } from '@navikt/ds-react';
import { DDMMYYYY_DATE_FORMAT, calcDaysAndWeeks } from '@navikt/ft-utils';

import { tilretteleggingType } from '@navikt/fp-kodeverk';
import styles from './tilretteleggingInfoPanel.module.css';

const finnTekst = (intl: IntlShape, termindato: string, fom?: string): string => {
  const dager = dayjs(termindato).diff(fom, 'days');
  return intl.formatMessage({ id: 'TilretteleggingInfoPanel.Dager' }, { dager });
};

interface OwnProps {
  tilrettelegging: ArbeidsforholdTilretteleggingDato;
  termindato: string;
  erTomDatoTreUkerFørTermin: boolean;
  stillingsprosentArbeidsforhold: number;
  prosentSvangerskapspenger?: number;
  tomDato: string;
}

const TilretteleggingInfoPanel: FunctionComponent<OwnProps> = ({
  tilrettelegging,
  termindato,
  erTomDatoTreUkerFørTermin,
  stillingsprosentArbeidsforhold,
  prosentSvangerskapspenger,
  tomDato,
}) => {
  const intl = useIntl();

  const dagerOgUker = calcDaysAndWeeks(tilrettelegging.fom, tomDato);
  const fremTilTidspunkt = erTomDatoTreUkerFørTermin
    ? intl.formatMessage({ id: 'TilretteleggingInfoPanel.TreUker' })
    : finnTekst(intl, termindato, tomDato);

  const registrertAvSaksbehandler = tilrettelegging.kilde === SvpTilretteleggingFomKilde.REGISTRERT_AV_SAKSBEHANDLER;

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
                  <BodyShort size="small">
                    <FormattedMessage
                      id="TilretteleggingInfoPanel.SvpOgArbeid"
                      values={{
                        svp: prosentSvangerskapspenger || 0,
                        arbeid:
                          tilrettelegging.type === tilretteleggingType.HEL_TILRETTELEGGING
                            ? 100
                            : tilrettelegging.stillingsprosent,
                      }}
                    />
                  </BodyShort>
                  {stillingsprosentArbeidsforhold && (
                    <Detail>
                      <FormattedMessage
                        id="TilretteleggingInfoPanel.AvStillingsprosent"
                        values={{
                          stillingsprosent: stillingsprosentArbeidsforhold,
                        }}
                      />
                    </Detail>
                  )}
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
                {!registrertAvSaksbehandler && (
                  <>
                    <FlexColumn className={styles.iconPadding}>
                      <BranchingIcon title="a11y-title" fontSize="1.5rem" />
                    </FlexColumn>
                    <FlexColumn>
                      <BodyShort size="small">
                        <FormattedMessage id="TilretteleggingInfoPanel.FraSoknad" />
                      </BodyShort>
                      <Detail>
                        {tilrettelegging.mottattDato && (
                          <FormattedMessage
                            id="TilretteleggingInfoPanel.Sendt"
                            values={{
                              dato: tilrettelegging.mottattDato
                                ? dayjs(tilrettelegging.mottattDato).format(DDMMYYYY_DATE_FORMAT)
                                : '',
                            }}
                          />
                        )}
                      </Detail>
                    </FlexColumn>
                  </>
                )}
                {registrertAvSaksbehandler && (
                  <>
                    <FlexColumn className={styles.iconPadding}>
                      <BranchingIcon title="a11y-title" fontSize="1.5rem" />
                    </FlexColumn>
                    <FlexColumn className={styles.iconPadding}>
                      <BodyShort size="small">
                        <FormattedMessage id="TilretteleggingInfoPanel.Saksbehandler" />
                      </BodyShort>
                    </FlexColumn>
                  </>
                )}
              </FlexRow>
            </FlexContainer>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </div>
  );
};

export default TilretteleggingInfoPanel;
