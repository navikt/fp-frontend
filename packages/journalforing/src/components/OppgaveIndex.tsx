import React, { FunctionComponent, useState, useCallback } from 'react';

import {
  FlexContainer, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import OppgaveOversikt from '../typer/oppgaveOversiktTsType';
import OppgaveTabell from './OppgaveTabell';
import OppgaveDetaljertIndex from './OppgaveDetaljertIndex';

type OwnProps = Readonly<{
  oppgaver: OppgaveOversikt[];
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
}>;

/**
 * OppgaveIndex - Styrer logikk rundt valg av oppgave i listen med oppgaver
 */
const OppgaveIndex: FunctionComponent<OwnProps> = ({
  oppgaver,
  åpneFagsak,
}) => {
  const [valgtOppgave, setValgtOppgave] = useState<OppgaveOversikt>(null);
  const avbryt = useCallback(() => {
    setValgtOppgave(null);
  }, [valgtOppgave]);
  return (
    <FlexContainer>
      <VerticalSpacer sixteenPx />
      {!valgtOppgave
        && <OppgaveTabell oppgaver={oppgaver} setValgtOppgave={setValgtOppgave} />}
      {valgtOppgave
        && (
          <FlexContainer>
            <OppgaveDetaljertIndex avbrytCallback={avbryt} oppgave={valgtOppgave} åpneFagsak={åpneFagsak} />
          </FlexContainer>
        )}
    </FlexContainer>
  );
};

export default OppgaveIndex;
