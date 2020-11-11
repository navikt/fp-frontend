import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import { Location } from 'history';

import { BehandlingAppKontekst, KodeverkMedNavn, Kodeverk } from '@fpsak-frontend/types';

import BehandlingPicker from './components/BehandlingPicker';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  behandlinger: BehandlingAppKontekst[];
  getBehandlingLocation: (behandlingId: number) => Location;
  noExistingBehandlinger: boolean;
  behandlingId?: number;
  showAll: boolean;
  toggleShowAll: () => void;
  getKodeverkFn: (kodeverk: Kodeverk, behandlingType?: Kodeverk) => KodeverkMedNavn;
}

const BehandlingVelgerSakIndex: FunctionComponent<OwnProps> = ({
  behandlinger,
  getBehandlingLocation,
  noExistingBehandlinger,
  behandlingId,
  showAll,
  toggleShowAll,
  getKodeverkFn,
}) => (
  <RawIntlProvider value={intl}>
    <BehandlingPicker
      behandlinger={behandlinger}
      getBehandlingLocation={getBehandlingLocation}
      noExistingBehandlinger={noExistingBehandlinger}
      behandlingId={behandlingId}
      showAll={showAll}
      toggleShowAll={toggleShowAll}
      getKodeverkFn={getKodeverkFn}
    />
  </RawIntlProvider>
);

export default BehandlingVelgerSakIndex;
