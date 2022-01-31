import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { BehandlingAppKontekst } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import FatterVedtakApprovalModal from './components/modal/FatterVedtakApprovalModal';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  behandling: BehandlingAppKontekst;
  closeEvent: () => void;
  allAksjonspunktApproved: boolean;
  erKlageWithKA?: boolean;
  harSammeResultatSomOriginalBehandling?: boolean;
}

const FatterVedtakTotrinnskontrollModalSakIndex: FunctionComponent<OwnProps> = ({
  behandling,
  closeEvent,
  allAksjonspunktApproved,
  erKlageWithKA,
  harSammeResultatSomOriginalBehandling = false,
}) => (
  <RawIntlProvider value={intl}>
    <FatterVedtakApprovalModal
      closeEvent={closeEvent}
      allAksjonspunktApproved={allAksjonspunktApproved}
      erKlageWithKA={erKlageWithKA}
      behandlingsresultat={behandling.behandlingsresultat}
      behandlingStatusKode={behandling.status}
      behandlingTypeKode={behandling.type}
      harSammeResultatSomOriginalBehandling={harSammeResultatSomOriginalBehandling}
    />
  </RawIntlProvider>
);

export default FatterVedtakTotrinnskontrollModalSakIndex;
