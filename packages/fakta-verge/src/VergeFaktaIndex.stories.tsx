import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Behandling } from '@navikt/fp-types';

import { VergeFaktaIndex } from './VergeFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const aksjonspunkter = [
  {
    definisjon: AksjonspunktKode.AVKLAR_VERGE,
    status: AksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
  },
];

const verge = {};

const merknaderFraBeslutter = {
  notAccepted: false,
};

const meta = {
  title: 'fakta/fakta-verge',
  component: VergeFaktaIndex,
  args: {
    submitCallback: action('button-click') as (data: any) => Promise<void>,
    readOnly: false,
    harApneAksjonspunkter: true,
    submittable: true,
    setFormData: () => undefined,
    verge,
    aksjonspunkter,
    alleKodeverk: alleKodeverk as any,
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.AVKLAR_VERGE]: merknaderFraBeslutter,
    },
  },
} satisfies Meta<typeof VergeFaktaIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    behandling: {
      uuid: '1',
      versjon: 1,
    } as Behandling,
  },
};
