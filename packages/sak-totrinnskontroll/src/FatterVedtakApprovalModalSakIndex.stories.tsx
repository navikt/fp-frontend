import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { behandlingType, behandlingStatus, behandlingResultatType } from '@navikt/fp-kodeverk';
import { BehandlingAppKontekst } from '@navikt/fp-types';
import FatterVedtakTotrinnskontrollModalSakIndex from './FatterVedtakTotrinnskontrollModalSakIndex';

export default {
  title: 'sak/sak-totrinnskontroll-fatter-vedtak-modal',
  component: FatterVedtakTotrinnskontrollModalSakIndex,
};

const Template: StoryFn<{
  closeEvent: () => void;
  behandling: BehandlingAppKontekst;
  allAksjonspunktApproved: boolean;
}> = ({ closeEvent, behandling, allAksjonspunktApproved }) => (
  <FatterVedtakTotrinnskontrollModalSakIndex
    behandling={behandling}
    closeEvent={closeEvent}
    allAksjonspunktApproved={allAksjonspunktApproved}
  />
);

export const EtterFatterVedtakOgGodkjent = Template.bind({});
EtterFatterVedtakOgGodkjent.args = {
  closeEvent: action('button-click'),
  behandling: {
    uuid: '1',
    status: behandlingStatus.FATTER_VEDTAK,
    type: behandlingType.FORSTEGANGSSOKNAD,
  } as BehandlingAppKontekst,
  allAksjonspunktApproved: true,
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
  } as BehandlingAppKontekst,
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
  } as BehandlingAppKontekst,
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
  } as BehandlingAppKontekst,
  allAksjonspunktApproved: false,
};
