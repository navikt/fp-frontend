import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { Button, VStack } from '@navikt/ds-react';

import { SaksbehandlerProfil } from '@navikt/fp-los-felles';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import SaksbehandlereOgSaksbehandlerGrupper from '../../typer/saksbehandlereOgSaksbehandlerGrupper ';
import GrupperTabell from './GrupperTabell';

interface OwnProps {
  grupper: SaksbehandlereOgSaksbehandlerGrupper;
  avdelingensSaksbehandlere: SaksbehandlerProfil[];
  opprettOgHentAlleGrupper: () => void;
  opprettNyGruppeState?: RestApiState;
  lagreValgtSaksbehandlar: (brukerIdent: string, gruppeId: number, leggTil: boolean) => void;
  endreGruppenavn: (gruppeId: number, gruppeNavn: string) => void;
  slettGruppe: (gruppeId: number) => void;
}

const GrupperPanel: FunctionComponent<OwnProps> = ({
  grupper,
  avdelingensSaksbehandlere,
  opprettOgHentAlleGrupper,
  opprettNyGruppeState,
  lagreValgtSaksbehandlar,
  endreGruppenavn,
  slettGruppe,
}) => (
  <VStack gap="5" align="start">
    <GrupperTabell
      grupper={grupper}
      avdelingensSaksbehandlere={avdelingensSaksbehandlere}
      lagreValgtSaksbehandlar={lagreValgtSaksbehandlar}
      endreGruppenavn={endreGruppenavn}
      slettGruppe={slettGruppe}
    />
    <Button
      size="small"
      variant="secondary"
      loading={opprettNyGruppeState === RestApiState.LOADING}
      disabled={opprettNyGruppeState === RestApiState.LOADING}
      tabIndex={0}
      onClick={opprettOgHentAlleGrupper}
    >
      <FormattedMessage id="GrupperPanel.OpprettGruppe" />
    </Button>
  </VStack>
);

export default GrupperPanel;
