import React, { FunctionComponent, useMemo, ReactElement } from 'react';
import { BodyShort, Heading } from '@navikt/ds-react';
import { Clipboard } from '@navikt/ft-plattform-komponenter';
import {
  FlexColumn, FlexRow, Image,
} from '@navikt/ft-ui-komponenter';
import { Office1 } from '@navikt/ds-icons';
import { useIntl, FormattedMessage, IntlShape } from 'react-intl';
import kvinneIkonUrl from '../../images/kvinne.svg';
import mannIkonUrl from '../../images/mann.svg';
import ukjentIkonUrl from '../../images/ukjent.svg';
import styles from './brukerAvsenderPanel.less';
import Journalpost from '../../typer/journalpostTsType';

const finnKjønnBilde = (journalpost: Journalpost): string => {
  const fnr = journalpost.bruker?.fnr;
  if (!fnr || fnr.length !== 11) {
    return ukjentIkonUrl;
  }
  const tall = parseInt(fnr.charAt(8), 10);
  return tall % 2 === 0 ? kvinneIkonUrl : mannIkonUrl;
};

const finnAvsenderBilde = (journalpost: Journalpost, intl: IntlShape): ReactElement => {
  const avsenderId = journalpost.avsender?.id;
  if (!avsenderId) {
    return (
      <Image
        alt={intl.formatMessage({ id: 'ValgtOppgave.Avsender' })}
        tooltip={intl.formatMessage({ id: 'ValgtOppgave.Avsender' })}
        src={ukjentIkonUrl}
        className={styles.avsenderBilde}
      />
    );
  }
  if (avsenderId.length === 9) {
    return <Office1 className={styles.avsenderBilde} />;
  }
  if (avsenderId.length === 11) {
    const tall = parseInt(avsenderId.charAt(8), 10);
    const source = tall % 2 === 0 ? kvinneIkonUrl : mannIkonUrl;
    return (
      <Image
        alt={intl.formatMessage({ id: 'ValgtOppgave.Avsender' })}
        tooltip={intl.formatMessage({ id: 'ValgtOppgave.Avsender' })}
        src={source}
        className={styles.avsenderBilde}
      />
    );
  }
  return (
    <Image
      alt={intl.formatMessage({ id: 'ValgtOppgave.Avsender' })}
      tooltip={intl.formatMessage({ id: 'ValgtOppgave.Avsender' })}
      src={ukjentIkonUrl}
      className={styles.avsenderBilde}
    />
  );
};

type OwnProps = Readonly<{
  journalpost: Journalpost
}>;

/**
 * BrukerAvsenderPanel - Inneholder detaljer om bruker og avsender
 */
const BrukerAvsenderPanel: FunctionComponent<OwnProps> = ({
  journalpost,
}) => {
  const intl = useIntl();
  const kjønnBilde = useMemo(() => finnKjønnBilde(journalpost), [journalpost]);
  const avsenderBilde = useMemo(() => finnAvsenderBilde(journalpost, intl), [journalpost]);
  return (
    <>
      <FlexRow>
        <FlexColumn className={styles.brukerAvsenderTittel}>
          <Heading size="small"><FormattedMessage id="ValgtOppgave.Bruker" /></Heading>
        </FlexColumn>
        <FlexColumn>
          <Heading size="small"><FormattedMessage id="ValgtOppgave.Avsender" /></Heading>
        </FlexColumn>
      </FlexRow>
      {journalpost.bruker && (
        <FlexRow>
          <FlexColumn className={styles.brukerAvsenderIkon}>
            <Image
              alt={intl.formatMessage({ id: 'ValgtOppgave.Bruker' })}
              tooltip={intl.formatMessage({ id: 'ValgtOppgave.Bruker' })}
              src={kjønnBilde}
              className={styles.brukerBilde}
            />
          </FlexColumn>
          <FlexColumn className={styles.brukerAvsenderInnhold}>
            <FlexRow>
              <FlexColumn>
                <BodyShort>
                  {journalpost.bruker.navn}
                </BodyShort>
              </FlexColumn>
            </FlexRow>
            <FlexRow>
              <FlexColumn>
                <Clipboard>
                  <BodyShort>
                    {journalpost.bruker.fnr}
                  </BodyShort>
                </Clipboard>
              </FlexColumn>
            </FlexRow>
          </FlexColumn>
          <FlexColumn className={styles.brukerAvsenderIkon}>
            {avsenderBilde}
          </FlexColumn>
          <FlexColumn className={styles.brukerAvsenderInnhold}>
            <BodyShort>
              {journalpost.avsender.navn}
            </BodyShort>
            <Clipboard>
              <BodyShort>
                {journalpost.avsender.id}
              </BodyShort>
            </Clipboard>
          </FlexColumn>

        </FlexRow>
      )}
    </>
  );
};
export default BrukerAvsenderPanel;
