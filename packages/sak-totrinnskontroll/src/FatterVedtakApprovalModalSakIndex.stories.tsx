import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { Behandling } from '@fpsak-frontend/types';
import FatterVedtakTotrinnskontrollModalSakIndex from './FatterVedtakTotrinnskontrollModalSakIndex';

export default {
  title: 'sak/sak-totrinnskontroll-fatter-vedtak-modal',
  component: FatterVedtakTotrinnskontrollModalSakIndex,
};

const Template: Story<{
  closeEvent: () => void,
  behandling: Behandling,
  allAksjonspunktApproved: boolean,
  erKlageWithKA?: boolean;
}> = ({
  closeEvent,
  behandling,
  allAksjonspunktApproved,
  erKlageWithKA = false,
}) => (
  <FatterVedtakTotrinnskontrollModalSakIndex
    behandling={behandling}
    closeEvent={closeEvent}
    allAksjonspunktApproved={allAksjonspunktApproved}
    erKlageWithKA={erKlageWithKA}
    harSammeResultatSomOriginalBehandling={false}
  />
);

export const EtterFatterVedtakOgGodkjent = Template.bind({});
EtterFatterVedtakOgGodkjent.args = {
  closeEvent: action('button-click'),
  behandling: {
    uuid: '1',
    status: behandlingStatus.FATTER_VEDTAK,
    type: behandlingType.FORSTEGANGSSOKNAD,
  } as Behandling,
  allAksjonspunktApproved: true,
  erKlageWithKA: true,
};

export const EtterGodkjenning = Template.bind({});
EtterGodkjenning.args = {
  closeEvent: action('button-click'),
  behandling: {
    uuid: '1',
    status: behandlingStatus.FATTER_VEDTAK,
    type: behandlingType.FORSTEGANGSSOKNAD,
    behandlingsresultat: {
      type: behandlingResultatType.OPPHOR,
    },
  } as Behandling,
  allAksjonspunktApproved: true,
};

export const EtterGodkjenningAvKlage = Template.bind({});
EtterGodkjenningAvKlage.args = {
  closeEvent: action('button-click'),
  behandling: {
    uuid: '1',
    status: behandlingStatus.FATTER_VEDTAK,
    type: behandlingType.KLAGE,
    behandlingsresultat: {
      type: behandlingResultatType.OPPHOR,
    },
  } as Behandling,
  allAksjonspunktApproved: true,
};

export const EtterTilbakesendingTilSaksbehandler = Template.bind({});
EtterTilbakesendingTilSaksbehandler.args = {
  closeEvent: action('button-click'),
  behandling: {
    uuid: '1',
    status: behandlingStatus.FATTER_VEDTAK,
    type: behandlingType.FORSTEGANGSSOKNAD,
    behandlingsresultat: {
      type: behandlingResultatType.OPPHOR,
    },
  } as Behandling,
  allAksjonspunktApproved: false,
};

export const EtterTilbakesendingTilSaksbehandlerNårKlageKa = Template.bind({});
EtterTilbakesendingTilSaksbehandlerNårKlageKa.args = {
  closeEvent: action('button-click'),
  behandling: {
    uuid: '1',
    status: behandlingStatus.FATTER_VEDTAK,
    type: behandlingType.KLAGE,
  } as Behandling,
  allAksjonspunktApproved: true,
  erKlageWithKA: true,
};
