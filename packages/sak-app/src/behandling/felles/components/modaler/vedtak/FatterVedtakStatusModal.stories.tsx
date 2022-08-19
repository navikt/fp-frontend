import React from 'react';

import FatterVedtakStatusModal from './FatterVedtakStatusModal';

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
