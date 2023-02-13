import React, {
  FunctionComponent, useMemo,
} from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import {
  Label, Heading, BodyShort, BodyLong,
} from '@navikt/ds-react';
import Office1 from '@navikt/ds-icons/svg/Office1.svg';
import { Clipboard } from '@navikt/ft-plattform-komponenter';

import kvinneIkonUrl from '@navikt/fp-assets/images/kvinne.svg';
import mannIkonUrl from '@navikt/fp-assets/images/mann.svg';
import ukjentIkonUrl from '@navikt/fp-assets/images/ukjent.svg';
import {
  FlexColumn, FlexRow, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import VelgSakForm from './VelgSakForm';
import Journalpost from '../typer/journalpostTsType';
import styles from './journalforingPanel.less';
import VelgDokumentForm from './VelgDokumentForm';
import OppgaveOversikt from '../typer/oppgaveOversiktTsType';

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
    return Office1;
  }
  if (avsenderId.length === 11) {
    const tall = parseInt(avsenderId.charAt(8), 10);
    return tall % 2 === 0 ? kvinneIkonUrl : mannIkonUrl;
  }
  return ukjentIkonUrl;
};

const TOM_ARRAY = [];

type OwnProps = Readonly<{
  journalpost: Journalpost;
  oppgave: OppgaveOversikt;
  avbrytCallback: () => void;
}>;

/**
 * OppgaveDetaljertVisning - Viser detaljer om valgt oppgave
 */
const OppgaveDetaljertVisning: FunctionComponent<OwnProps> = ({
  journalpost,
  oppgave,
  avbrytCallback,
}) => {
  const intl = useIntl();
  const saker = journalpost?.fagsaker || TOM_ARRAY;
  const kjønnBilde = useMemo(() => finnKjønnBilde(journalpost), [journalpost]);
  const avsenderBilde = useMemo(() => finnAvsenderBilde(journalpost), [journalpost]);
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
            <VelgDokumentForm dokumenter={journalpost.dokumenter} />
            <VerticalSpacer sixteenPx />
          </>
        )}
      <>
        <FlexRow>
          <FlexColumn>
            <Label size="medium">
              <FormattedMessage id="ValgtOppgave.RelaterteSaker" />
            </Label>
          </FlexColumn>
        </FlexRow>
        <VelgSakForm saksliste={saker} avbrytCallback={avbrytCallback} />
      </>
    </>
  );
};
export default OppgaveDetaljertVisning;
