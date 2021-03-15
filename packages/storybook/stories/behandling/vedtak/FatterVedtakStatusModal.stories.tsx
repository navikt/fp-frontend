import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { FatterVedtakStatusModal } from '@fpsak-frontend/behandling-felles-ny';

export default {
  title: 'behandling/vedtak/FatterVedtakStatusModal',
  component: FatterVedtakStatusModal,
  decorators: [withKnobs],
};

export const visFatterVedtakModal = () => (
  <FatterVedtakStatusModal
    visModal
    lukkModal={() => undefined}
    tekst="Forslag til vedtak er sendt til beslutter"
  />
);
