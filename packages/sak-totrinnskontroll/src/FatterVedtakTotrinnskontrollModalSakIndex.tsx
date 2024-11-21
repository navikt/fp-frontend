import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { BehandlingAppKontekst } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';
import { FatterVedtakApprovalModal } from './components/modal/FatterVedtakApprovalModal';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  behandling: BehandlingAppKontekst;
  closeEvent: () => void;
  allAksjonspunktApproved: boolean;
}

export const FatterVedtakTotrinnskontrollModalSakIndex = ({
  behandling,
  closeEvent,
  allAksjonspunktApproved,
}: Props) => (
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
