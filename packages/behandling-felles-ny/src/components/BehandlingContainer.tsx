import React, {
  FunctionComponent, ReactElement, useCallback, useState,
} from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { Behandling } from '@fpsak-frontend/types';

import ProsessContainer from './ProsessContainer';
import FaktaContainer from './FaktaContainer';

import messages from '../../i18n/nb_NO.json';

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
  faktaPaneler?: ((props: any) => ReactElement)[];
  prosessPaneler?: ((props: any) => ReactElement)[];
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  oppdaterBehandlingVersjon: (versjon: number) => void;
}

const BehandlingContainer: FunctionComponent<OwnProps> = ({
  behandling,
  faktaPaneler,
  prosessPaneler,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  oppdaterBehandlingVersjon,
}) => {
  const [apentFaktaPanelInfo, setApentFaktaPanel] = useState<FaktaPanelInfo>();

  const oppdaterProsessPanelIUrl = useCallback((nyttProsessSteg: string) => {
    oppdaterProsessStegOgFaktaPanelIUrl(nyttProsessSteg, valgtFaktaSteg);
  }, [valgtProsessSteg]);
  const oppdaterFaktaPanelIUrl = useCallback((nyttFaktaSteg: string) => {
    oppdaterProsessStegOgFaktaPanelIUrl(valgtProsessSteg, nyttFaktaSteg);
  }, [valgtProsessSteg]);

  return (
    <RawIntlProvider value={intl}>
      <ProsessContainer
        paneler={prosessPaneler}
        valgtProsessSteg={valgtProsessSteg}
        oppdaterProsessPanelIUrl={oppdaterProsessPanelIUrl}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        behandling={behandling}
        apentFaktaPanelInfo={apentFaktaPanelInfo}
        oppdaterBehandlingVersjon={oppdaterBehandlingVersjon}
      />
      <FaktaContainer
        paneler={faktaPaneler}
        valgtFaktaSteg={valgtFaktaSteg}
        oppdaterFaktaPanelIUrl={oppdaterFaktaPanelIUrl}
        behandlingVersjon={behandling?.versjon}
        setApentFaktaPanel={setApentFaktaPanel}
        apentFaktaPanelInfo={apentFaktaPanelInfo}
      />
    </RawIntlProvider>
  );
};

export default BehandlingContainer;
