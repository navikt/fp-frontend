import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { Behandling, Kodeverk } from '@fpsak-frontend/types';
import FatterVedtakApprovalModal from './components/modal/FatterVedtakApprovalModal';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  closeEvent: () => void;
  allAksjonspunktApproved: boolean;
  fagsakYtelseType: Kodeverk;
  erKlageWithKA?: boolean;
  behandlingsresultat: Behandling['behandlingsresultat'];
  behandlingId: number;
  behandlingStatusKode: string;
  behandlingTypeKode: string;
  harSammeResultatSomOriginalBehandling?: boolean;
}

const FatterVedtakTotrinnskontrollModalSakIndex: FunctionComponent<OwnProps> = ({
  closeEvent,
  allAksjonspunktApproved,
  fagsakYtelseType,
  erKlageWithKA,
  behandlingsresultat,
  behandlingId,
  behandlingStatusKode,
  behandlingTypeKode,
  harSammeResultatSomOriginalBehandling,
}) => (
  <RawIntlProvider value={intl}>
    <FatterVedtakApprovalModal
      closeEvent={closeEvent}
      allAksjonspunktApproved={allAksjonspunktApproved}
      fagsakYtelseType={fagsakYtelseType}
      erKlageWithKA={erKlageWithKA}
      behandlingsresultat={behandlingsresultat}
      behandlingId={behandlingId}
      behandlingStatusKode={behandlingStatusKode}
      behandlingTypeKode={behandlingTypeKode}
      harSammeResultatSomOriginalBehandling={harSammeResultatSomOriginalBehandling}
    />
  </RawIntlProvider>
);

FatterVedtakTotrinnskontrollModalSakIndex.defaultProps = {
  harSammeResultatSomOriginalBehandling: false,
};

export default FatterVedtakTotrinnskontrollModalSakIndex;
