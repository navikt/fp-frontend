import React, { FunctionComponent, useMemo } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import {
  Label, Heading, BodyShort,
} from '@navikt/ds-react';
import Office1 from '@navikt/ds-icons/svg/Office1.svg';

import kvinneIkonUrl from '@navikt/fp-assets/images/kvinne.svg';
import mannIkonUrl from '@navikt/fp-assets/images/mann.svg';
import ukjentIkonUrl from '@navikt/fp-assets/images/ukjent.svg';
import {
  FlexColumn, FlexRow, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import VelgSakForm from './VelgSakForm';
import Journalpost from '../typer/journalpostTsType';
import styles from './journalforingPanel.less';
import JournalDokument from '../typer/journalDokumentTsType';
import VelgDokumentForm from './VelgDokumentForm';

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
  valgtDokument?: JournalDokument;
  avbrytCallback: () => void;
  setValgtDokument: (dokument: JournalDokument) => void;
}>;

/**
 * OppgaveDetaljertVisning - Viser detaljer om valgt oppgave
 */
const OppgaveDetaljertVisning: FunctionComponent<OwnProps> = ({
  journalpost,
  valgtDokument,
  avbrytCallback,
  setValgtDokument,
}) => {
  const intl = useIntl();
  const saker = journalpost?.fagsaker || TOM_ARRAY;
  const kjønnBilde = useMemo(() => finnKjønnBilde(journalpost), [journalpost]);
  const avsenderBilde = useMemo(() => finnAvsenderBilde(journalpost), [journalpost]);
  return (
    <>
      <FlexRow>
        <FlexColumn>
          <Heading size="small">{journalpost.tittel}</Heading>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer sixteenPx />
      <FlexRow>
        <FlexColumn>
          <Label size="medium"><FormattedMessage id="ValgtOppgave.Bruker" /></Label>
        </FlexColumn>
      </FlexRow>
      {journalpost.bruker && (
        <FlexRow>
          <FlexColumn>
            <Image
              alt={intl.formatMessage({ id: 'ValgtOppgave.Bruker' })}
              tooltip={intl.formatMessage({ id: 'ValgtOppgave.Bruker' })}
              src={kjønnBilde}
              className={styles.brukerBilde}
            />
          </FlexColumn>
          <FlexColumn>
            <BodyShort>
              {journalpost.bruker.navn}
            </BodyShort>
            <BodyShort>
              {journalpost.bruker.fnr}
            </BodyShort>
          </FlexColumn>
        </FlexRow>
      )}
      <VerticalSpacer sixteenPx />
      <FlexRow>
        <FlexColumn>
          <Label size="medium"><FormattedMessage id="ValgtOppgave.Avsender" /></Label>
        </FlexColumn>
      </FlexRow>
      {journalpost.avsender && (
        <FlexRow>
          <FlexColumn>
            <Image
              alt={intl.formatMessage({ id: 'ValgtOppgave.Bruker' })}
              tooltip={intl.formatMessage({ id: 'ValgtOppgave.Bruker' })}
              src={avsenderBilde}
              className={styles.avsenderBilde}
            />
          </FlexColumn>
          <FlexColumn>
            <BodyShort>
              {journalpost.avsender.navn}
            </BodyShort>
            <BodyShort>
              {journalpost.avsender.id}
            </BodyShort>
          </FlexColumn>
        </FlexRow>
      )}
      <VerticalSpacer sixteenPx />
      {journalpost.dokumenter
        && (
          <div className={styles.dokumentValg}>
            <VelgDokumentForm dokumenter={journalpost.dokumenter} setValgtDokument={setValgtDokument} valgtDokument={valgtDokument} />
            <VerticalSpacer sixteenPx />
          </div>
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
