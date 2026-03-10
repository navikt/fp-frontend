import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { lagAksjonspunkt, type PanelDataArgs, withPanelData } from '@navikt/fp-storybook-utils';
import type { BehandlingFpSak, KlageVurdering } from '@navikt/fp-types';

import { VedtakKlageProsessIndex } from './VedtakKlageProsessIndex';

const behandling = {
  aksjonspunkt: [],
  aktivPapirsøknad: false,
  behandlendeEnhetId: '4820',
  behandlendeEnhetNavn: 'NAV Familie- og pensjonsytelser Oslo 1',
  behandlingHenlagt: false,
  behandlingPåVent: false,
  behandlingÅrsaker: [],
  behandlingsresultat: {
    harRedigertVedtaksbrev: false,
    id: 1,
    type: 'KLAGE_AVVIST',
    vedtaksbrevStatus: 'INGEN_VEDTAKSBREV',
  },
  harSattEndringsdato: false,
  harSøknad: true,
  id: 1,
  links: [],
  opprettet: '2020-01-01',
  språkkode: 'NB',
  status: 'UTRED',
  type: 'BT-002',
  uuid: '1',
  versjon: 1,
  vilkår: [],
} satisfies BehandlingFpSak;

const meta = {
  title: 'prosess/klage/prosess-vedtak-klage',
  component: VedtakKlageProsessIndex,
  decorators: [withPanelData],
  args: {
    previewVedtakCallback: action('button-click'),
    behandling,
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.FORESLÅ_VEDTAK)],
  },
  render: args => <VedtakKlageProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof VedtakKlageProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const VedtakspanelDerKlageErVurdertAvNk: Story = {
  args: {
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: 'AVVIS_KLAGE',
        klageMedholdÅrsak: 'PROSESSUELL_FEIL',
        fritekstTilBrev: 'test',
      },
      klageFormkravResultatKA: {
        avvistÅrsaker: ['IKKE_KONKRET'],
        begrunnelse: '',
        erKlageKonkret: false,
        erKlagefirstOverholdt: false,
        erKlagerPart: false,
        erSignert: false,
        påKlagdBehandlingUuid: '',
      },
    } satisfies KlageVurdering,
  },
};

export const VedtakspanelDerKlageErVurdertAvNfp: Story = {
  args: {
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NFP',
        klageVurdering: 'AVVIS_KLAGE',
        klageMedholdÅrsak: 'PROSESSUELL_FEIL',
        fritekstTilBrev: 'test',
      },
      klageFormkravResultatKA: {
        avvistÅrsaker: ['IKKE_KONKRET'],
        begrunnelse: '',
        erKlageKonkret: false,
        erKlagefirstOverholdt: false,
        erKlagerPart: false,
        erSignert: false,
        påKlagdBehandlingUuid: '',
      },
    } satisfies KlageVurdering,
  },
};
