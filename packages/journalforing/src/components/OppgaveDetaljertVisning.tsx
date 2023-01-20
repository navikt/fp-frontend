import React, { FunctionComponent } from 'react';
import {
  Button, Label, Heading, BodyShort,
} from '@navikt/ds-react';

import { FormattedMessage } from 'react-intl';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import OppgaveDetaljert from '../typer/oppgaveDetaljertTsType';
import Saksliste from './Saksliste';
import Sak from '../typer/sakTsType';

const finnSaksliste = (oppgave: OppgaveDetaljert): Sak[] => oppgave?.relaterteSaker || [];

type OwnProps = Readonly<{
  oppgave: OppgaveDetaljert;
  avbrytCallback: () => void;
}>;

/**
 * OppgaveDetaljertVisning - Viser detaljer om valgt oppgave
 */
const OppgaveDetaljertVisning: FunctionComponent<OwnProps> = ({
  oppgave,
  avbrytCallback,
}) => {
  if (!oppgave) {
    return null;
  }
  const muligRelaterteSaker = finnSaksliste(oppgave);
  return (
    <>
      <FlexRow>
        <FlexColumn>
          <Heading size="small">{oppgave.beskrivelse}</Heading>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer twentyPx />
      <FlexRow>
        <FlexColumn>
          <Label size="medium"><FormattedMessage id="ValgtOppgave.Bruker" /></Label>
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn>
          <BodyShort>
            {oppgave.brukerNavn}
            {' '}
            -
            {' '}
            {oppgave.brukerIdent}
          </BodyShort>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer twentyPx />
      <FlexRow>
        <FlexColumn>
          <Label size="medium"><FormattedMessage id="ValgtOppgave.Avsender" /></Label>
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn>
          <BodyShort>
            {oppgave.avsenderNavn}
            {' '}
            -
            {' '}
            {oppgave.avsenderIdent}
          </BodyShort>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer twentyPx />
      {muligRelaterteSaker.length > 0
        && (
        <>
          <FlexRow>
            <FlexColumn>
              <Label size="medium">
                <FormattedMessage id="ValgtOppgave.RelaterteSaker" />
              </Label>
            </FlexColumn>
          </FlexRow>
          <Saksliste saksliste={muligRelaterteSaker} />

        </>
        )}
      <Button
        size="small"
        variant="secondary"
        onClick={avbrytCallback}
        disabled={false}
        type="button"
      >
        <FormattedMessage id="ValgtOppgave.Avbryt" />
      </Button>
    </>
  );
};
export default OppgaveDetaljertVisning;
