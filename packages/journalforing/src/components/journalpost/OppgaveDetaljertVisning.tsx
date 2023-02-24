import React, {
  FunctionComponent, useMemo,
} from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { Heading, BodyShort, BodyLong } from '@navikt/ds-react';
import { Clipboard } from '@navikt/ft-plattform-komponenter';

import {
  FlexColumn, FlexRow, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import VelgSakForm from './VelgSakForm';
import Journalpost from '../../typer/journalpostTsType';
import JournalførSubmitValue from '../../typer/ferdigstillJournalføringSubmit';
import styles from './oppgaveDetaljertVisning.less';
import VelgDokumentForm from './VelgDokumentForm';
import OppgaveOversikt from '../../typer/oppgaveOversiktTsType';
import kvinneIkonUrl from '../../images/kvinne.svg';
import mannIkonUrl from '../../images/mann.svg';
import office from '../../images/office.svg';
import ukjentIkonUrl from '../../images/ukjent.svg';
import SakDetaljer from './SakDetaljer';

const finnKjønnBilde = (journalpost: Journalpost): string => {
  const fnr = journalpost.bruker?.fnr;
  if (!fnr || fnr.length !== 11) {
    return ukjentIkonUrl;
  }
  const tall = parseInt(fnr.charAt(8), 10);
  return tall % 2 === 0 ? kvinneIkonUrl : mannIkonUrl;
};

const finnAvsenderBilde = (journalpost: Journalpost): string => {
  const avsenderId = journalpost.avsender?.id;
  if (!avsenderId) {
    return ukjentIkonUrl;
  }
  if (avsenderId.length === 9) {
    return office;
  }
  if (avsenderId.length === 11) {
    const tall = parseInt(avsenderId.charAt(8), 10);
    return tall % 2 === 0 ? kvinneIkonUrl : mannIkonUrl;
  }
  return ukjentIkonUrl;
};

type OwnProps = Readonly<{
  journalpost: Journalpost;
  oppgave: OppgaveOversikt;
  avbrytVisningAvJournalpost: () => void;
  submitJournalføring: (params: JournalførSubmitValue) => void;
}>;

/**
 * OppgaveDetaljertVisning - Viser detaljer om valgt oppgave
 */
const OppgaveDetaljertVisning: FunctionComponent<OwnProps> = ({
  journalpost,
  oppgave,
  avbrytVisningAvJournalpost,
  submitJournalføring,
}) => {
  const intl = useIntl();
  const kjønnBilde = useMemo(() => finnKjønnBilde(journalpost), [journalpost]);
  const avsenderBilde = useMemo(() => finnAvsenderBilde(journalpost), [journalpost]);
  const saker = journalpost.fagsaker || [];
  return (
    <>
      <FlexRow>
        <FlexColumn>
          <Heading size="large">{journalpost.tittel}</Heading>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer sixteenPx />
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
            <Image
              alt={intl.formatMessage({ id: 'ValgtOppgave.Avsender' })}
              tooltip={intl.formatMessage({ id: 'ValgtOppgave.Avsender' })}
              src={avsenderBilde}
              className={styles.avsenderBilde}
            />
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
      <VerticalSpacer twentyPx />
      {oppgave.beskrivelse && (
        <>
          <FlexRow>
            <FlexColumn>
              <Heading size="small"><FormattedMessage id="ValgtOppgave.Notat" /></Heading>
            </FlexColumn>
          </FlexRow>
          <FlexRow>
            <FlexColumn>
              <BodyLong>{oppgave.beskrivelse}</BodyLong>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer twentyPx />
        </>
      )}
      <VerticalSpacer sixteenPx />
      {journalpost.dokumenter
        && (
          <>
            <FlexRow>
              <FlexColumn>
                <Heading size="small"><FormattedMessage id="ValgtOppgave.Dokumenter" /></Heading>
              </FlexColumn>
            </FlexRow>
            <VerticalSpacer eightPx />
            <VelgDokumentForm dokumenter={journalpost.dokumenter} />
            <VerticalSpacer thirtyTwoPx />
          </>
        )}
      <FlexRow>
        <FlexColumn>
          <Heading size="small">
            <FormattedMessage id="ValgtOppgave.RelaterteSaker" />
          </Heading>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      {saker.map((sak) => (
        <SakDetaljer sak={sak} key={sak.saksnummer} />
      ))}
      <VerticalSpacer thirtyTwoPx />
      <FlexRow>
        <FlexColumn>
          <Heading size="small">
            <FormattedMessage id="ValgtOppgave.KnyttTilSak" />
          </Heading>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      <VelgSakForm
        journalpost={journalpost}
        avbrytVisningAvJournalpost={avbrytVisningAvJournalpost}
        submitJournalføring={submitJournalføring}
        oppgave={oppgave}
      />
    </>
  );
};
export default OppgaveDetaljertVisning;
