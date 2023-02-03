import React, { FunctionComponent, useMemo } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import {
  Label, Heading, BodyShort,
} from '@navikt/ds-react';

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

const TOM_ARRAY = [];

type OwnProps = Readonly<{
  journalpost: Journalpost;
  valgtDokument?: JournalDokument;
  avbrytCallback: () => void;
  setValgtDokument: (dokument: JournalDokument) => void;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
}>;

/**
 * OppgaveDetaljertVisning - Viser detaljer om valgt oppgave
 */
const OppgaveDetaljertVisning: FunctionComponent<OwnProps> = ({
  journalpost,
  valgtDokument,
  avbrytCallback,
  setValgtDokument,
  åpneFagsak,
}) => {
  const intl = useIntl();
  const saker = journalpost?.fagsaker || TOM_ARRAY;
  const kjønnBilde = useMemo(() => finnKjønnBilde(journalpost), [journalpost]);
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
      {saker.length > 0
        && (
          <>
            <FlexRow>
              <FlexColumn>
                <Label size="medium">
                  <FormattedMessage id="ValgtOppgave.RelaterteSaker" />
                </Label>
              </FlexColumn>
            </FlexRow>
            <VelgSakForm saksliste={saker} avbrytCallback={avbrytCallback} åpneFagsak={åpneFagsak} />
          </>
        )}
    </>
  );
};
export default OppgaveDetaljertVisning;
