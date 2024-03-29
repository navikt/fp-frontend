import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { BehandlingAppKontekst } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';
import FatterVedtakApprovalModal from './components/modal/FatterVedtakApprovalModal';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  behandling: BehandlingAppKontekst;
  closeEvent: () => void;
  allAksjonspunktApproved: boolean;
}

const FatterVedtakTotrinnskontrollModalSakIndex: FunctionComponent<OwnProps> = ({
  behandling,
  closeEvent,
  allAksjonspunktApproved,
}) => (
  <RawIntlProvider value={intl}>
    <FatterVedtakApprovalModal
      closeEvent={closeEvent}
      allAksjonspunktApproved={allAksjonspunktApproved}
      behandlingsresultat={behandling.behandlingsresultat}
      behandlingStatusKode={behandling.status}
      behandlingTypeKode={behandling.type}
      harSammeResultatSomOriginalBehandling={behandling.behandlingsresultat?.erRevurderingMedUendretUtfall || false}
    />
  </RawIntlProvider>
);

export default FatterVedtakTotrinnskontrollModalSakIndex;
