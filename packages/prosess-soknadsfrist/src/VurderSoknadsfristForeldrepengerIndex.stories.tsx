import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { alleKodeverk, withFormData } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak, Soknad } from '@navikt/fp-types';

import { VurderSoknadsfristForeldrepengerIndex } from './VurderSoknadsfristForeldrepengerIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const soknad = {
  mottattDato: '2019-01-01',
  søknadsfrist: {
    mottattDato: '2019-01-01',
    dagerOversittetFrist: 2,
    søknadsperiodeStart: '2019-01-01',
    søknadsperiodeSlutt: '2019-01-10',
    utledetSøknadsfrist: '2019-10-01',
  },
} as Soknad;

const meta = {
  title: 'prosess/prosess-soknadsfrist',
  component: VurderSoknadsfristForeldrepengerIndex,
  decorators: [withFormData],
  args: {
    behandling,
    alleKodeverk: alleKodeverk as any,
    isReadOnly: false,
    isAksjonspunktOpen: true,
    readOnlySubmitButton: false,
    status: '',
    vilkar: [],
    alleMerknaderFraBeslutter: {},
    soknad,
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.VURDER_SOKNADSFRIST_FORELDREPENGER,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
      },
    ] as Aksjonspunkt[],
    fagsak: {} as Fagsak,
    submitCallback: action('button-click') as (data: any) => Promise<void>,
  },
} satisfies Meta<typeof VurderSoknadsfristForeldrepengerIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const PanelForSoknadsfrist: Story = {};
