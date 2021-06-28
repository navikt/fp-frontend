import React from 'react';

import { FatterVedtakStatusModal } from '@fpsak-frontend/behandling-felles';

export default {
  title: 'behandling/vedtak/FatterVedtakStatusModal',
  component: FatterVedtakStatusModal,
};

export const visFatterVedtakModal = () => (
  <FatterVedtakStatusModal
    visModal
    lukkModal={() => undefined}
    tekst="Forslag til vedtak er sendt til beslutter"
  />
);
