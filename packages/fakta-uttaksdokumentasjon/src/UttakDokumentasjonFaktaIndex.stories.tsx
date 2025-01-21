import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Behandling, DokumentasjonVurderingBehov, UttakÅrsak, UttakType, UttakVurdering } from '@navikt/fp-types';

import { UttakDokumentasjonFaktaIndex } from './UttakDokumentasjonFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const opprettetDokumentasjonVurderingBehovListe = [
  {
    fom: '2022-11-01',
    tom: '2023-01-07',
    type: UttakType.UTSETTELSE,
    årsak: UttakÅrsak.INNLEGGELSE_SØKER,
  },
  {
    fom: '2022-01-08',
    tom: '2022-02-13',
    type: UttakType.OVERFØRING,
    årsak: UttakÅrsak.SYKDOM_ANNEN_FORELDER,
  },
  {
    fom: '2022-11-18',
    tom: '2022-12-03',
    type: UttakType.UTTAK,
    årsak: UttakÅrsak.AKTIVITETSKRAV_ARBEID,
  },
  {
    fom: '2022-11-15',
    tom: '2022-11-20',
    type: UttakType.UTTAK,
    årsak: UttakÅrsak.TIDLIG_OPPSTART_FAR,
  },
] as DokumentasjonVurderingBehov[];

const meta = {
  title: 'fakta/fakta-uttaksdokumentasjon',
  component: UttakDokumentasjonFaktaIndex,
  args: {
    behandling,
    alleKodeverk: alleKodeverk as any,
    alleMerknaderFraBeslutter: {},
    setFormData: () => undefined,
    submitCallback: action('button-click') as (data: any) => Promise<void>,
  },
} satisfies Meta<typeof UttakDokumentasjonFaktaIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const AksjonspunktMedUavklartePerioder: Story = {
  args: {
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: true,
      },
    ],
    harApneAksjonspunkter: true,
    dokumentasjonVurderingBehov: opprettetDokumentasjonVurderingBehovListe,
    readOnly: false,
    submittable: true,
  },
};

const utfortDokumentasjonVurderingBehovListe = [
  {
    fom: '2024-07-30',
    tom: '2024-08-02',
    type: UttakType.UTSETTELSE,
    årsak: UttakÅrsak.INNLEGGELSE_SØKER,
    vurdering: UttakVurdering.IKKE_GODKJENT,
  },
  {
    fom: '2024-02-08',
    tom: '2024-02-13',
    type: UttakType.OVERFØRING,
    årsak: UttakÅrsak.SYKDOM_ANNEN_FORELDER,
    vurdering: UttakVurdering.GODKJENT,
  },
  {
    fom: '2024-05-30',
    tom: '2024-06-11',
    type: UttakType.UTTAK,
    årsak: UttakÅrsak.AKTIVITETSKRAV_ARBEID,
    vurdering: UttakVurdering.GODKJENT,
    morsStillingsprosent: 60,
  },
  {
    fom: '2024-08-07',
    tom: '2024-08-23',
    type: UttakType.UTTAK,
    årsak: UttakÅrsak.TIDLIG_OPPSTART_FAR,
    vurdering: UttakVurdering.IKKE_DOKUMENTERT,
  },
] as DokumentasjonVurderingBehov[];

export const AksjonspunktSomErBekreftetOgBehandlingAvsluttet: Story = {
  args: {
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Dette er en begrunnelse',
        kanLoses: false,
      },
    ],
    harApneAksjonspunkter: false,
    dokumentasjonVurderingBehov: utfortDokumentasjonVurderingBehovListe,
    readOnly: true,
    submittable: false,
  },
};

export const AksjonspunktErBekreftetMenBehandlingErÅpen: Story = {
  args: {
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: undefined,
        kanLoses: true,
      },
    ],
    harApneAksjonspunkter: false,
    dokumentasjonVurderingBehov: [
      {
        fom: '2022-12-08',
        tom: '2022-12-13',
        type: UttakType.UTTAK,
        årsak: UttakÅrsak.HV_ØVELSE,
        vurdering: UttakVurdering.GODKJENT,
      },
    ],
    readOnly: false,
    submittable: true,
    alleMerknaderFraBeslutter: {},
  },
};

export const UavklartePerioderMenIkkeAksjonspunktEnnå: Story = {
  args: {
    aksjonspunkter: [],
    harApneAksjonspunkter: false,
    dokumentasjonVurderingBehov: opprettetDokumentasjonVurderingBehovListe,
    readOnly: false,
    submittable: true,
  },
};
