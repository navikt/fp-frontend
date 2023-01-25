import React, { FunctionComponent } from 'react';
import { BodyShort, Heading } from '@navikt/ds-react';

import { VerticalSpacer, Table } from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import OppgaveOversikt from '../typer/oppgaveOversiktTsType';
import OppgaveTabellRad from './OppgaveTabellRad';

type OwnProps = Readonly<{
    oppgaver: OppgaveOversikt[];
    setValgtOppgave: (oppgave: OppgaveOversikt) => void;
}>;

const headerTextCodes = [
  'Oppgavetabell.Opprettet',
  'Oppgavetabell.YtelseType',
  'Oppgavetabell.Beskrivelse',
  'Oppgavetabell.Bruker',
  'Oppgavetabell.Frist',
  'Oppgavetabell.Prioritet',
];

/**
 * OppgaveTabell - Presenterer liste over oppgaver og tar inn callback for å sette valgt oppgave
 */
const OppgaveTabell: FunctionComponent<OwnProps> = ({
  oppgaver,
  setValgtOppgave,
}) => {
  if (oppgaver.length < 1) {
    return (
      <>
        <VerticalSpacer eightPx />
        <BodyShort size="small"><FormattedMessage id="Journalforing.Oppgaver.IngenOppgaver" /></BodyShort>
        <VerticalSpacer eightPx />
      </>
    );
  }
  return (
    <>
      <Heading size="small"><FormattedMessage id="Journalforing.Oppgaver.Tittel" /></Heading>
      <Table headerTextCodes={headerTextCodes}>
        {oppgaver.map((oppgave) => (
          <OppgaveTabellRad oppgave={oppgave} setValgtOppgave={setValgtOppgave} key={oppgave.id} />
        ))}

      </Table>
    </>
  );
};
export default OppgaveTabell;
