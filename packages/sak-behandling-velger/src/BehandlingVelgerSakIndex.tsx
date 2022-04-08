import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { Location } from 'history';

import { BehandlingAppKontekst, KodeverkMedNavn } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import BehandlingPicker from './components/BehandlingPicker';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  behandlinger: BehandlingAppKontekst[];
  getBehandlingLocation: (behandlingUuid: string) => Location;
  noExistingBehandlinger: boolean;
  behandlingUuid?: string;
  showAll: boolean;
  toggleShowAll: () => void;
  getKodeverkFn: (kode: string, kodeverk: KodeverkType, behandlingType?: string) => KodeverkMedNavn | undefined;
}

const BehandlingVelgerSakIndex: FunctionComponent<OwnProps> = ({
  behandlinger,
  getBehandlingLocation,
  noExistingBehandlinger,
  behandlingUuid,
  showAll,
  toggleShowAll,
  getKodeverkFn,
}) => (
  <RawIntlProvider value={intl}>
    <BehandlingPicker
      behandlinger={behandlinger}
      getBehandlingLocation={getBehandlingLocation}
      noExistingBehandlinger={noExistingBehandlinger}
      behandlingUuid={behandlingUuid}
      showAll={showAll}
      toggleShowAll={toggleShowAll}
      getKodeverkFn={getKodeverkFn}
    />
  </RawIntlProvider>
);

export default BehandlingVelgerSakIndex;
