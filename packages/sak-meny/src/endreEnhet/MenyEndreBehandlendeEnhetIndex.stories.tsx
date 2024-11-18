import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { MenyEndreBehandlendeEnhetIndex } from './MenyEndreBehandlendeEnhetIndex';

import '@navikt/ds-css';

export default {
  title: 'sak/sak-meny-endre-enhet',
  component: MenyEndreBehandlendeEnhetIndex,
};

const Template: StoryFn<{
  lagreNyBehandlendeEnhet: () => Promise<any>;
  lukkModal: () => Promise<any>;
}> = ({ lagreNyBehandlendeEnhet, lukkModal }) => (
  <MenyEndreBehandlendeEnhetIndex
    behandlingVersjon={2}
    behandlendeEnhetId="4292"
    behandlendeEnhetNavn="Nav klageinstans Midt-Norge"
    nyBehandlendeEnhet={lagreNyBehandlendeEnhet}
    behandlendeEnheter={[
      {
        enhetId: '4292',
        enhetNavn: 'Nav klageinstans Midt-Norge',
      },
      {
        enhetId: '1000',
        enhetNavn: 'Nav Vikafossen',
      },
    ]}
    lukkModal={lukkModal}
  />
);

export const Default = Template.bind({});
Default.args = {
  lagreNyBehandlendeEnhet: action('button-click') as () => Promise<any>,
  lukkModal: action('button-click') as () => Promise<any>,
};
