import React, {
  FunctionComponent, ReactElement, useState,
} from 'react';
import { RawIntlProvider } from 'react-intl';

import { Behandling } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import ProsessContainer from './prosess/ProsessContainer';
import FaktaContainer from './fakta/FaktaContainer';

import messages from '../../i18n/nb_NO.json';
import ProsessPanelInitProps, { ProsessPanelExtraInitProps } from '../types/prosessPanelInitProps';
import FaktaPanelInitProps from '../types/faktaPanelInitProps';

const intl = createIntl(messages);

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
}

const BehandlingContainer: FunctionComponent<OwnProps> = ({
  behandling,
  hentFaktaPaneler,
  hentProsessPaneler,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
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
      />
      <FaktaContainer
        hentPaneler={hentFaktaPaneler}
        valgtFaktaSteg={valgtFaktaSteg}
        valgtProsessSteg={valgtProsessSteg}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        behandlingVersjon={behandling.versjon}
        setApentFaktaPanel={setApentFaktaPanel}
        apentFaktaPanelInfo={apentFaktaPanelInfo}
      />
    </RawIntlProvider>
  );
};

export default BehandlingContainer;
