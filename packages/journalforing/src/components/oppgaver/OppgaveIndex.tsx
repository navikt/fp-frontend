import React, { FunctionComponent, useState, useCallback } from 'react';

import {
  FlexContainer, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { NavAnsatt } from '@navikt/fp-types';

import OppgaveOversikt from '../../typer/oppgaveOversiktTsType';
import OppgaveTabell from './OppgaveTabell';
import OppgaveDetaljertIndex from '../journalpost/OppgaveDetaljertIndex';

type OwnProps = Readonly<{
  oppgaver: OppgaveOversikt[];
  innhentAlleOppgaver: (param: { ident: string }) => Promise<OppgaveOversikt[] | undefined>;
  navAnsatt: NavAnsatt;
}>;

/**
 * OppgaveIndex - Styrer logikk rundt valg av oppgave i listen med oppgaver
 */
const OppgaveIndex: FunctionComponent<OwnProps> = ({
  oppgaver,
  innhentAlleOppgaver,
  navAnsatt,
}) => {
  const [valgtOppgave, setValgtOppgave] = useState<OppgaveOversikt | undefined>(undefined);
  const avbryt = useCallback(() => {
    setValgtOppgave(undefined);
  }, [valgtOppgave]);
  return (
    <FlexContainer>
      <VerticalSpacer sixteenPx />
      {!valgtOppgave
        && <OppgaveTabell oppgaver={oppgaver} setValgtOppgave={setValgtOppgave} />}
      {valgtOppgave
        && (
          <OppgaveDetaljertIndex
            avbrytVisningAvJournalpost={avbryt}
            oppgave={valgtOppgave}
            innhentAlleOppgaver={innhentAlleOppgaver}
            navAnsatt={navAnsatt}
          />
        )}
    </FlexContainer>
  );
};

export default OppgaveIndex;
