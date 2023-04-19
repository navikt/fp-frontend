import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { RawIntlProvider } from 'react-intl';
import { VilkarUtfallType } from '@navikt/ft-kodeverk';
import { createIntl } from '@navikt/ft-utils';

import { Behandling } from '@navikt/fp-types';
import { RequestApi } from '@navikt/fp-rest-api';

import BehandlingContainer from './BehandlingContainer';
import FaktaPanelInitProps from './typer/faktaPanelInitProps';
import ProsessPanelInitProps from './typer/prosessPanelInitProps';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

const FaktaPanelTest1: FunctionComponent<FaktaPanelInitProps> = ({ registrerFaktaPanel, valgtFaktaSteg }) => {
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

  return <div>Dette er et testpanel</div>;
};
const FaktaPanelTest2: FunctionComponent<FaktaPanelInitProps> = ({ registrerFaktaPanel, valgtFaktaSteg }) => {
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

  return <div>Dette er et annet panel</div>;
};

const ProsessPanelTest1: FunctionComponent<ProsessPanelInitProps> = ({ registrerProsessPanel, valgtProsessSteg }) => {
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

  return <div>Dette er et testpanel for adopsjon</div>;
};

const ProsessPanelTest2: FunctionComponent<ProsessPanelInitProps> = ({ registrerProsessPanel, valgtProsessSteg }) => {
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

  return <div>Dette er et testpanel for fødsel</div>;
};

export default {
  title: 'behandling/behandling-container',
  component: BehandlingContainer,
};

export const VisKunFaktaPaneler = () => {
  const [valgtFaktaPanel, setValgtFaktaPanel] = useState<string | undefined>('default');
  const faktaPaneler = useCallback(
    (props: FaktaPanelInitProps) => (
      <>
        <FaktaPanelTest1 {...props} />
        <FaktaPanelTest2 {...props} />
      </>
    ),
    [],
  );
  return (
    <RawIntlProvider value={intl}>
      <BehandlingContainer
        behandling={{} as Behandling}
        valgtFaktaSteg={valgtFaktaPanel}
        oppdaterProsessStegOgFaktaPanelIUrl={(_prosessPanel?: string, faktaPanel?: string) =>
          setValgtFaktaPanel(faktaPanel)
        }
        requestApi={{} as RequestApi}
        hentFaktaPaneler={faktaPaneler}
      />
    </RawIntlProvider>
  );
};

export const VisKunProsessPaneler = () => {
  const [valgtProsessPanel, setValgtProsessPanel] = useState<string | undefined>('default');
  const prosessPaneler = useCallback(
    (props: ProsessPanelInitProps) => (
      <>
        <ProsessPanelTest1 {...props} />
        <ProsessPanelTest2 {...props} />
      </>
    ),
    [],
  );
  return (
    <BehandlingContainer
      behandling={{} as Behandling}
      valgtProsessSteg={valgtProsessPanel}
      oppdaterProsessStegOgFaktaPanelIUrl={(prosessPanel?: string) => setValgtProsessPanel(prosessPanel)}
      requestApi={{} as RequestApi}
      hentProsessPaneler={prosessPaneler}
    />
  );
};
