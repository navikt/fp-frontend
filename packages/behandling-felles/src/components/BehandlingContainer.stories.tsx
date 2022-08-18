import React, { FunctionComponent, useEffect, useState } from 'react';
import { VilkarUtfallType } from '@navikt/ft-kodeverk';
import { Behandling } from '@navikt/ft-types';

import BehandlingContainer from './BehandlingContainer';
import FaktaPanelInitProps from '../types/faktaPanelInitProps';
import ProsessPanelInitProps from '../types/prosessPanelInitProps';

const FaktaPanelTest1: FunctionComponent<FaktaPanelInitProps> = ({
  registrerFaktaPanel,
  valgtFaktaSteg,
}) => {
  useEffect(() => {
    registrerFaktaPanel({
      id: '1',
      tekst: 'Dette er en paneltittel',
      erAktiv: valgtFaktaSteg === '1',
      harApneAksjonspunkter: true,
      harHentetInitData: true,
    });
  }, []);

  if (valgtFaktaSteg !== '1') {
    return null;
  }

  return (
    <div>
      Dette er et testpanel
    </div>
  );
};
const FaktaPanelTest2: FunctionComponent<FaktaPanelInitProps> = ({
  registrerFaktaPanel,
  valgtFaktaSteg,
}) => {
  useEffect(() => {
    registrerFaktaPanel({
      id: '2',
      tekst: 'Annet panel',
      erAktiv: valgtFaktaSteg === '2',
      harApneAksjonspunkter: false,
      harHentetInitData: true,
    });
  }, [valgtFaktaSteg]);

  if (valgtFaktaSteg !== '2') {
    return null;
  }

  return (
    <div>
      Dette er et annet panel
    </div>
  );
};

const ProsessPanelTest1: FunctionComponent<ProsessPanelInitProps> = ({
  registrerProsessPanel,
  valgtProsessSteg,
}) => {
  useEffect(() => {
    registrerProsessPanel({
      id: '1',
      tekst: 'Adopsjon',
      erAktiv: valgtProsessSteg === '1',
      harApentAksjonspunkt: false,
      status: VilkarUtfallType.OPPFYLT,
      harHentetInitData: true,
    });
  }, []);

  if (valgtProsessSteg !== '1') {
    return null;
  }

  return (
    <div>
      Dette er et testpanel for adopsjon
    </div>
  );
};

const ProsessPanelTest2: FunctionComponent<ProsessPanelInitProps> = ({
  registrerProsessPanel,
  valgtProsessSteg,
}) => {
  useEffect(() => {
    registrerProsessPanel({
      id: '2',
      tekst: 'Fødsel',
      erAktiv: valgtProsessSteg === '2',
      harApentAksjonspunkt: true,
      status: VilkarUtfallType.IKKE_OPPFYLT,
      harHentetInitData: true,
    });
  }, []);

  if (valgtProsessSteg !== '2') {
    return null;
  }

  return (
    <div>
      Dette er et testpanel for fødsel
    </div>
  );
};

export default {
  title: 'behandling/behandling-container',
  component: BehandlingContainer,
};

export const visKunFaktaPaneler = () => {
  const [valgtFaktaPanel, setValgtFaktaPanel] = useState<string | undefined>('default');
  return (
    <BehandlingContainer
      behandling={{} as Behandling}
      valgtFaktaSteg={valgtFaktaPanel}
      oppdaterProsessStegOgFaktaPanelIUrl={(_prosessPanel?: string, faktaPanel?: string) => setValgtFaktaPanel(faktaPanel)}
      hentFaktaPaneler={(props) => (
        <>
          <FaktaPanelTest1 {...props} />
          <FaktaPanelTest2 {...props} />
        </>
      )}
    />
  );
};

export const visKunProsessPaneler = () => {
  const [valgtProsessPanel, setValgtProsessPanel] = useState<string | undefined>('default');
  return (
    <BehandlingContainer
      behandling={{} as Behandling}
      valgtProsessSteg={valgtProsessPanel}
      oppdaterProsessStegOgFaktaPanelIUrl={(prosessPanel?: string) => setValgtProsessPanel(prosessPanel)}
      hentProsessPaneler={(props) => (
        <>
          <ProsessPanelTest1 {...props} />
          <ProsessPanelTest2 {...props} />
        </>
      )}
    />
  );
};
