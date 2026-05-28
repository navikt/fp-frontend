import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  lagVilkår,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import type { ArbeidsforholdFodselOgTilrettelegging, BehandlingFpSak, SvpTilrettelegging } from '@navikt/fp-types';

import { SvangerskapVilkarProsessIndex } from './SvangerskapVilkarProsessIndex';

const meta = {
  title: 'prosess/prosess-vilkar-svangerskap',
  component: SvangerskapVilkarProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    svangerskapspengerTilrettelegging: {
      arbeidsforholdListe: [],
      saksbehandlet: false,
    } satisfies SvpTilrettelegging,
  },
  render: args => <SvangerskapVilkarProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof SvangerskapVilkarProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunktSkalIkkeKunneInnvilge: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.MANUELL_VURDERING_AV_SVANGERSKAPSPENGERVILKÅRET, {
        kanLoses: false,
      }),
    ],
    isReadOnly: false,
    vilkårForPanel: [lagVilkår('SVP_VK_1', { vilkarStatus: 'IKKE_VURDERT' })],
    status: 'IKKE_VURDERT',
  },
};

export const ÅpentAksjonspunktSkalKunneInnvilge: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.MANUELL_VURDERING_AV_SVANGERSKAPSPENGERVILKÅRET)],
    status: 'IKKE_VURDERT',
    vilkårForPanel: [lagVilkår('SVP_VK_1', { vilkarStatus: 'IKKE_VURDERT' })],
    svangerskapspengerTilrettelegging: {
      arbeidsforholdListe: [
        {
          avklarteOppholdPerioder: [],
          kanTilrettelegges: true,
          skalBrukes: true,
          tilretteleggingBehovFom: '2019-01-01',
          tilretteleggingDatoer: [
            {
              fom: '2019-01-01',
              kilde: 'SØKNAD',
              type: 'DELVIS_TILRETTELEGGING',
            },
          ],
          tilretteleggingId: 1,
          velferdspermisjoner: [],
          arbeidsforholdetErSplittet: false,
          skalVurdereSplittAvArbeidsforholdet: false,
        } satisfies ArbeidsforholdFodselOgTilrettelegging,
      ],
      saksbehandlet: false,
    } satisfies SvpTilrettelegging,
  },
};

export const OppfyltVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.MANUELL_VURDERING_AV_SVANGERSKAPSPENGERVILKÅRET, {
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er godkjent',
      }),
    ],
    vilkårForPanel: [lagVilkår('SVP_VK_1', { vilkarStatus: 'OPPFYLT' })],
    isReadOnly: true,
    isSubmittable: false,
    status: 'OPPFYLT',
  },
};

export const AvslåttVilkår: Story = {
  args: {
    behandling: {
      uuid: '1',
      versjon: 1,
      type: 'BT-002',
      status: 'UTRED',
      språkkode: '-',
      behandlingsresultat: {
        avslagsarsak: '1099',
        id: 0,
        type: 'AVSLÅTT',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
      behandlingPåVent: false,
      behandlingHenlagt: false,
      aksjonspunkt: [],
      behandlingÅrsaker: [],
      behandlendeEnhetId: '',
      behandlendeEnhetNavn: '',
      aktivPapirsøknad: false,
      vilkår: [],
      links: [],
      harSøknad: false,
      harSattEndringsdato: false,
      id: 1,
      opprettet: '2020-01-01',
    } satisfies BehandlingFpSak,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.MANUELL_VURDERING_AV_SVANGERSKAPSPENGERVILKÅRET, {
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er avslått',
      }),
    ],
    vilkårForPanel: [lagVilkår('SVP_VK_1', { vilkarStatus: 'IKKE_OPPFYLT' })],
    isReadOnly: true,
    isSubmittable: false,
    status: 'IKKE_OPPFYLT',
  },
};
