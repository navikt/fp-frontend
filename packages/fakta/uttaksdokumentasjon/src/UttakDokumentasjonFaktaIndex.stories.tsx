import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  AksjonspunktType,
  AktivitetskravPermisjonType,
  VilkarType,
} from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import {
  type Aksjonspunkt,
  type AktivitetskravGrunnlagArbeid,
  type DokumentasjonVurderingBehov,
} from '@navikt/fp-types';

import { UttakDokumentasjonFaktaIndex } from './UttakDokumentasjonFaktaIndex';

const aktivitetskravGrunnlagListe = [
  {
    orgNummer: '123456789',
    stillingsprosent: 60,
    permisjon: {
      prosent: 40,
      type: AktivitetskravPermisjonType.UTDANNING,
    },
  },
  {
    orgNummer: '987654321',
    stillingsprosent: 50,
    permisjon: {
      prosent: 0,
      type: AktivitetskravPermisjonType.UDEFINERT,
    },
  },
] as AktivitetskravGrunnlagArbeid[];

const aksjonspunktDefault = {
  definisjon: AksjonspunktKode.OMSORGSOVERTAKELSE,
  status: AksjonspunktStatus.OPPRETTET,
  begrunnelse: null,
  kanLoses: true,
  toTrinnsBehandling: false,
  toTrinnsBehandlingGodkjent: null,
  vurderPaNyttArsaker: null,
  besluttersBegrunnelse: null,
  aksjonspunktType: AksjonspunktType.AUTOPUNKT,
  vilkarType: VilkarType.OMSORGSVILKARET,
  erAktivt: true,
  fristTid: null,
  endretTidspunkt: null,
  endretAv: null,
} satisfies Aksjonspunkt;

const opprettetDokumentasjonVurderingBehovListe = [
  {
    fom: '2022-11-01',
    tom: '2023-01-07',
    type: 'UTSETTELSE',
    årsak: 'INNLEGGELSE_SØKER',
    aktivitetskravGrunnlag: [],
  },
  {
    fom: '2022-01-08',
    tom: '2022-02-13',
    type: 'OVERFØRING',
    årsak: 'SYKDOM_ANNEN_FORELDER',
    aktivitetskravGrunnlag: [],
  },
  {
    fom: '2022-11-18',
    tom: '2022-12-03',
    type: 'UTTAK',
    årsak: 'AKTIVITETSKRAV_ARBEID',
    aktivitetskravGrunnlag: aktivitetskravGrunnlagListe,
  },
  {
    fom: '2022-11-15',
    tom: '2022-11-20',
    type: 'UTTAK',
    årsak: 'TIDLIG_OPPSTART_FAR',
    aktivitetskravGrunnlag: [],
  },
] as DokumentasjonVurderingBehov[];

const automatiskAvklartBehovListe = [
  {
    fom: '2022-11-18',
    tom: '2022-12-03',
    type: 'UTTAK',
    årsak: 'AKTIVITETSKRAV_ARBEID',
    vurdering: 'GODKJENT_AUTOMATISK',
    aktivitetskravGrunnlag: [
      {
        orgNummer: '123456789',
        stillingsprosent: 100,
        permisjon: {
          prosent: 0,
          type: AktivitetskravPermisjonType.UDEFINERT,
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
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    dokumentasjonVurderingBehov: opprettetDokumentasjonVurderingBehovListe,
  },
};

export const ReadonlyAutomatiskAvklartPeriodeAAReg: Story = {
  args: {
    aksjonspunkterForPanel: [],
    dokumentasjonVurderingBehov: automatiskAvklartBehovListe,
  },
};

const utfortDokumentasjonVurderingBehovListe = [
  {
    fom: '2024-07-30',
    tom: '2024-08-02',
    type: 'UTSETTELSE',
    årsak: 'INNLEGGELSE_SØKER',
    vurdering: 'IKKE_GODKJENT',
    aktivitetskravGrunnlag: [],
  },
  {
    fom: '2024-02-08',
    tom: '2024-02-13',
    type: 'OVERFØRING',
    årsak: 'SYKDOM_ANNEN_FORELDER',
    vurdering: 'GODKJENT',
    aktivitetskravGrunnlag: [],
  },
  {
    fom: '2024-05-30',
    tom: '2024-06-11',
    type: 'UTTAK',
    årsak: 'AKTIVITETSKRAV_ARBEID',
    vurdering: 'GODKJENT',
    morsStillingsprosent: 60,
    aktivitetskravGrunnlag: aktivitetskravGrunnlagListe,
  },
  {
    fom: '2024-08-07',
    tom: '2024-08-23',
    type: 'UTTAK',
    årsak: 'TIDLIG_OPPSTART_FAR',
    vurdering: 'IKKE_DOKUMENTERT',
    aktivitetskravGrunnlag: [],
  },
] as DokumentasjonVurderingBehov[];

export const AksjonspunktSomErBekreftetOgBehandlingAvsluttet: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Dette er en begrunnelse',
        kanLoses: false,
      },
    ],
    dokumentasjonVurderingBehov: utfortDokumentasjonVurderingBehovListe,
    isReadOnly: true,
  },
};

export const AksjonspunktErBekreftetMenBehandlingErÅpen: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
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
        type: 'UTTAK',
        årsak: 'HV_ØVELSE',
        vurdering: 'GODKJENT',
        aktivitetskravGrunnlag: [],
      },
    ],
  },
};

export const UavklartePerioderMenIkkeAksjonspunktEnnå: Story = {
  args: {
    aksjonspunkterForPanel: [],
    dokumentasjonVurderingBehov: opprettetDokumentasjonVurderingBehovListe,
  },
};
