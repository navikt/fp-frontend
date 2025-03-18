import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import {
  type AktivitetskravGrunnlagArbeid,
  type DokumentasjonVurderingBehov,
  UttakÅrsak,
  UttakType,
  UttakVurdering,
} from '@navikt/fp-types';

import { UttakDokumentasjonFaktaIndex } from './UttakDokumentasjonFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const aktivitetskravGrunnlagListe = [
  {
    orgNummer: '123456789',
    stillingsprosent: 60,
    permisjon: {
      prosent: 40,
      type: 'UTDANNING',
    },
  },
  {
    orgNummer: '987654321',
    stillingsprosent: 50,
    permisjon: {
      prosent: 0,
      type: '-',
    },
  },
] as AktivitetskravGrunnlagArbeid[];

const opprettetDokumentasjonVurderingBehovListe = [
  {
    fom: '2022-11-01',
    tom: '2023-01-07',
    type: UttakType.UTSETTELSE,
    årsak: UttakÅrsak.INNLEGGELSE_SØKER,
    aktivitetskravGrunnlag: [],
  },
  {
    fom: '2022-01-08',
    tom: '2022-02-13',
    type: UttakType.OVERFØRING,
    årsak: UttakÅrsak.SYKDOM_ANNEN_FORELDER,
    aktivitetskravGrunnlag: [],
  },
  {
    fom: '2022-11-18',
    tom: '2022-12-03',
    type: UttakType.UTTAK,
    årsak: UttakÅrsak.AKTIVITETSKRAV_ARBEID,
    aktivitetskravGrunnlag: aktivitetskravGrunnlagListe,
  },
  {
    fom: '2022-11-15',
    tom: '2022-11-20',
    type: UttakType.UTTAK,
    årsak: UttakÅrsak.TIDLIG_OPPSTART_FAR,
    aktivitetskravGrunnlag: [],
  },
] as DokumentasjonVurderingBehov[];

const automatiskAvklartBehovListe = [
  {
    fom: '2022-11-18',
    tom: '2022-12-03',
    type: UttakType.UTTAK,
    årsak: UttakÅrsak.AKTIVITETSKRAV_ARBEID,
    vurdering: UttakVurdering.GODKJENT_AUTOMATISK,
    aktivitetskravGrunnlag: [
      {
        orgNummer: '123456789',
        stillingsprosent: 100,
        permisjon: {
          prosent: 0,
          type: '-',
        },
      },
    ],
  },
] as DokumentasjonVurderingBehov[];

const meta = {
  title: 'fakta/fakta-uttaksdokumentasjon',
  component: UttakDokumentasjonFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  render: args => <UttakDokumentasjonFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof UttakDokumentasjonFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const AksjonspunktMedUavklartePerioder: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    dokumentasjonVurderingBehov: opprettetDokumentasjonVurderingBehovListe,
    submittable: true,
  },
};

export const ReadonlyAutomatiskAvklartPeriodeAAReg: Story = {
  args: {
    aksjonspunkterForPanel: [],
    dokumentasjonVurderingBehov: automatiskAvklartBehovListe,
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
    aktivitetskravGrunnlag: [],
  },
  {
    fom: '2024-02-08',
    tom: '2024-02-13',
    type: UttakType.OVERFØRING,
    årsak: UttakÅrsak.SYKDOM_ANNEN_FORELDER,
    vurdering: UttakVurdering.GODKJENT,
    aktivitetskravGrunnlag: [],
  },
  {
    fom: '2024-05-30',
    tom: '2024-06-11',
    type: UttakType.UTTAK,
    årsak: UttakÅrsak.AKTIVITETSKRAV_ARBEID,
    vurdering: UttakVurdering.GODKJENT,
    morsStillingsprosent: 60,
    aktivitetskravGrunnlag: aktivitetskravGrunnlagListe,
  },
  {
    fom: '2024-08-07',
    tom: '2024-08-23',
    type: UttakType.UTTAK,
    årsak: UttakÅrsak.TIDLIG_OPPSTART_FAR,
    vurdering: UttakVurdering.IKKE_DOKUMENTERT,
    aktivitetskravGrunnlag: [],
  },
] as DokumentasjonVurderingBehov[];

export const AksjonspunktSomErBekreftetOgBehandlingAvsluttet: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Dette er en begrunnelse',
        kanLoses: false,
      },
    ],
    dokumentasjonVurderingBehov: utfortDokumentasjonVurderingBehovListe,
    isReadOnly: true,
    submittable: false,
  },
};

export const AksjonspunktErBekreftetMenBehandlingErÅpen: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    dokumentasjonVurderingBehov: [
      {
        fom: '2022-12-08',
        tom: '2022-12-13',
        type: UttakType.UTTAK,
        årsak: UttakÅrsak.HV_ØVELSE,
        vurdering: UttakVurdering.GODKJENT,
        aktivitetskravGrunnlag: [],
      },
    ],
    submittable: true,
  },
};

export const UavklartePerioderMenIkkeAksjonspunktEnnå: Story = {
  args: {
    aksjonspunkterForPanel: [],
    dokumentasjonVurderingBehov: opprettetDokumentasjonVurderingBehovListe,
    submittable: true,
  },
};
