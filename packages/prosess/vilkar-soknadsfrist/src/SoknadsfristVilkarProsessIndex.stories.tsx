import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  Avslagsarsak,
  SoknadType,
  VilkarType,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, Behandling, FamilieHendelse, Soknad } from '@navikt/fp-types';

import { SoknadsfristVilkarProsessIndex } from './SoknadsfristVilkarProsessIndex';

const soknad = {
  soknadType: SoknadType.FODSEL,
  utstedtdato: '2019-01-01',
  termindato: '2019-01-01',
  fodselsdatoer: { 1: '2019-01-01' },
  begrunnelseForSenInnsending: 'Dette er en begrunnelse',
  søknadsfrist: {
    utledetSøknadsfrist: '2019-07-01',
    dagerOversittetFrist: 2,
    søknadsperiodeStart: null,
    søknadsperiodeSlutt: null,
    mottattDato: '2019-01-01',
  },
  antallBarn: 0,
  oppgittTilknytning: {
    oppholdNorgeNa: false,
    oppholdSistePeriode: false,
    oppholdNestePeriode: false,
    utlandsoppholdFor: [],
    utlandsoppholdEtter: [],
  },
  manglendeVedlegg: [],
  oppgittFordeling: {
    startDatoForPermisjon: null,
    dekningsgrader: {
      avklartDekningsgrad: null,
      søker: {
        søknadsdato: '',
        dekningsgrad: 0,
      },
      annenPart: null,
    },
  },
  farSokerType: null,
  mottattDato: '2019-01-01',
} satisfies Soknad;

const familiehendelse = {
  avklartBarn: [
    {
      fodselsdato: '2019-01-02',
      dodsdato: null,
    },
  ],
  '@type': 'foreldrepenger.familiehendelse.rest.AvklartDataFodselDto',
  soknadType: 'ST-001',
  skjaringstidspunkt: '',
  dokumentasjonForligger: null,
  dokumentasjonForeligger: null,
  brukAntallBarnFraTps: null,
  termindato: null,
  antallBarnTermin: null,
  utstedtdato: null,
  morForSykVedFodsel: null,
  vedtaksDatoSomSvangerskapsuke: null,
} satisfies FamilieHendelse;

const meta = {
  title: 'prosess/prosess-vilkar-soknadsfrist',
  component: SoknadsfristVilkarProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    soknad,
    gjeldendeFamiliehendelse: familiehendelse,
  },
  render: args => <SoknadsfristVilkarProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof SoknadsfristVilkarProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.SOKNADSFRISTVILKARET,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        vilkarType: VilkarType.SOKNADFRISTVILKARET,
      },
    ] as Aksjonspunkt[],
    isReadOnly: false,
    readOnlySubmitButton: false,
    status: VilkarUtfallType.IKKE_VURDERT,
  },
};

export const OppfyltVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.SOKNADSFRISTVILKARET,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Dette vilkåret er godkjent',
        vilkarType: VilkarType.SOKNADFRISTVILKARET,
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    readOnlySubmitButton: true,
    status: VilkarUtfallType.OPPFYLT,
  },
};

export const AvslåttVilkår: Story = {
  args: {
    behandling: {
      uuid: '1',
      versjon: 1,
      behandlingsresultat: {
        avslagsarsak: Avslagsarsak.INGEN_BEREGNINGSREGLER,
      },
    } as Behandling,
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.SOKNADSFRISTVILKARET,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Dette vilkåret er avslått',
        vilkarType: VilkarType.SOKNADFRISTVILKARET,
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    readOnlySubmitButton: true,
    status: VilkarUtfallType.IKKE_OPPFYLT,
  },
};
