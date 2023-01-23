import React, { FunctionComponent, useState } from 'react';

import { FlexContainer, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import OppgaveOversikt from '../typer/oppgaveOversiktTsType';
import OppgaveTabell from './OppgaveTabell';

type OwnProps = Readonly<{
  oppgaver: OppgaveOversikt[];
}>;

/**
 * OppgaveIndex - Styrer logikk rundt valg av oppgave i listen med oppgaver
 */
const OppgaveIndex: FunctionComponent<OwnProps> = ({
  oppgaver,
}) => {
  const [valgtOppgave, setValgtOppgave] = useState<OppgaveOversikt>(null);

  return (
    <FlexContainer>
      <VerticalSpacer sixteenPx />
      <OppgaveTabell oppgaver={oppgaver} setValgtOppgave={setValgtOppgave} />
      {valgtOppgave
      && (
        <p>
          Valgt oppgave har id
            {valgtOppgave.id}
        </p>
      )}
    </FlexContainer>
  );
};

export default OppgaveIndex;
