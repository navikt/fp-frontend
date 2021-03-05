import React, {
  FunctionComponent, ReactElement, useState,
} from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { Behandling } from '@fpsak-frontend/types';

import ProsessContainer from './ProsessContainer';
import FaktaContainer from './FaktaContainer';

import messages from '../../i18n/nb_NO.json';
import ProsessPanelInitProps, { ProsessPanelExtraInitProps } from '../types/prosessPanelInitProps';
import FaktaPanelInitProps from '../types/faktaPanelInitProps';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface FaktaPanelInfo {
  urlCode: string;
  text: string;
}

interface OwnProps {
  behandling: Behandling;
  hentFaktaPaneler?: ((props: FaktaPanelInitProps) => ReactElement);
  hentProsessPaneler?: ((props: ProsessPanelInitProps, ekstraProps: ProsessPanelExtraInitProps) => ReactElement);
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  oppdaterBehandlingVersjon: (versjon: number) => void;
}

const BehandlingContainer: FunctionComponent<OwnProps> = ({
  behandling,
  hentFaktaPaneler,
  hentProsessPaneler,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  oppdaterBehandlingVersjon,
}) => {
  const [apentFaktaPanelInfo, setApentFaktaPanel] = useState<FaktaPanelInfo>();

  return (
    <RawIntlProvider value={intl}>
      <ProsessContainer
        hentPaneler={hentProsessPaneler}
        valgtProsessSteg={valgtProsessSteg}
        valgtFaktaSteg={valgtFaktaSteg}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        behandling={behandling}
        apentFaktaPanelInfo={apentFaktaPanelInfo}
        oppdaterBehandlingVersjon={oppdaterBehandlingVersjon}
      />
      <FaktaContainer
        hentPaneler={hentFaktaPaneler}
        valgtFaktaSteg={valgtFaktaSteg}
        valgtProsessSteg={valgtProsessSteg}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        behandlingVersjon={behandling?.versjon}
        setApentFaktaPanel={setApentFaktaPanel}
        apentFaktaPanelInfo={apentFaktaPanelInfo}
      />
    </RawIntlProvider>
  );
};

export default BehandlingContainer;
