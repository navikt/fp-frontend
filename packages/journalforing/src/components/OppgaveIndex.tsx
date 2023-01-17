import React, { FunctionComponent, useState } from 'react';

import { FlexContainer, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import Oppgave from '../typer/oppgaveTsType';
import OppgaveTabell from './OppgaveTabell';
import OppgaveFiltrering from './OppgaveFiltrering';

type OwnProps = Readonly<{
  oppgaver: Oppgave[];
}>;

/**
 * JournalforingPanel
 */
const OppgaveIndex: FunctionComponent<OwnProps> = ({
  oppgaver,
}) => {
  const [valgtOppgave, setValgtOppgave] = useState<Oppgave>(null);

  return (
    <FlexContainer>
      <VerticalSpacer sixteenPx />
      <OppgaveFiltrering oppgaver={[]} />
      <VerticalSpacer sixteenPx />
      <OppgaveTabell oppgaver={oppgaver} setValgtOppgave={setValgtOppgave} />
      {valgtOppgave
      && (
        <>
          <p>
            Valg oppgave har id
            {valgtOppgave.id}
          </p>
          <p>
            Få inn en kul pdf kanskje?
          </p>
        </>
      )}
    </FlexContainer>
  );
};

export default OppgaveIndex;
