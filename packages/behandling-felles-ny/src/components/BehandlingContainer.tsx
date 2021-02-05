import React, { FunctionComponent, ReactElement, useCallback } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import ProsessContainer from './ProsessContainer';
import FaktaContainer from './FaktaContainer';

import messages from '../../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  faktaPaneler?: ((props: any) => ReactElement)[];
  prosessPaneler?: ((props: any) => ReactElement)[];
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
}

const BehandlingContainer: FunctionComponent<OwnProps> = ({
  faktaPaneler,
  prosessPaneler,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
}) => {
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
        oppdaterProsessPanelIUrl={oppdaterProsessPanelIUrl}
      />
      <FaktaContainer
        paneler={faktaPaneler}
        valgtFaktaSteg={valgtFaktaSteg}
        oppdaterFaktaPanelIUrl={oppdaterFaktaPanelIUrl}
      />
    </RawIntlProvider>
  );
};

export default BehandlingContainer;
