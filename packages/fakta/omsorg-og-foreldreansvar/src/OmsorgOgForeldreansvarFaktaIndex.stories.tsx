import type { ComponentProps } from 'react';

import { TIDENES_ENDE } from '@navikt/ft-utils';
import type { Meta, StoryObj } from '@storybook/react';

import {
  AdresseType,
  AksjonspunktKode,
  AksjonspunktStatus,
  AksjonspunktType,
  FarSøkerType,
  NavBrukerKjonn,
  SivilstandType,
  SoknadType,
  VilkarType,
} from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withPanelData } from '@navikt/fp-storybook-utils';
import type {
  AdopsjonFamilieHendelse,
  Aksjonspunkt,
  Personoversikt,
  RelatertTilgrensedYtelse,
  Soknad,
} from '@navikt/fp-types';

import { OmsorgOgForeldreansvarFaktaIndex } from './OmsorgOgForeldreansvarFaktaIndex';

const søknad = {
  adopsjonFodelsedatoer: { 1: '2019-01-10', 2: '2019-01-11' },
  antallBarn: 2,
  soknadType: SoknadType.ADOPSJON,
  farSokerType: FarSøkerType.ADOPTERER_ALENE,

  barnetsAnkomstTilNorgeDato: '2022-09-13',
  mottattDato: '',

  oppgittTilknytning: {
    oppholdNorgeNa: false,
    oppholdSistePeriode: false,
    oppholdNestePeriode: false,
    utlandsoppholdFor: [],
    utlandsoppholdEtter: [],
  },
  manglendeVedlegg: [],
  oppgittFordeling: {
    dekningsgrader: {
      søker: {
        søknadsdato: '',
        dekningsgrad: 0,
      },
      annenPart: {
        søknadsdato: '',
        dekningsgrad: undefined,
      },
    },
  },
  søknadsfrist: {},
} satisfies Soknad;

const personoversikt: Personoversikt = {
  bruker: {
    navn: 'Olga Utvikler',
    aktoerId: '2',
    kjønn: NavBrukerKjonn.KVINNE,
    sivilstand: SivilstandType.GIFT,
    fødselsdato: '1979-01-01',

    adresser: [
      {
        fom: '2019-01-01',
        tom: TIDENES_ENDE,
        adresseType: AdresseType.POSTADRESSE,
        adresselinje1: 'Gateadresse 1',
        postNummer: '1000',
        poststed: 'Oslo',
        land: 'Norge',
      },
    ],
  },
  annenPart: {
    navn: 'Espen Utvikler',
    aktoerId: '1',
    kjønn: NavBrukerKjonn.MANN,
    sivilstand: SivilstandType.GIFT,
    fødselsdato: '1989-01-01',
    dødsdato: '2021-01-01',
    adresser: [],
  },
  barn: [],
};

const innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[] = [
  {
    tilgrensendeYtelserListe: [
      {
        statusNavn: 'Løpende',
        periodeFraDato: '2019-01-01',
        periodeTilDato: '2019-02-02',
        saksNummer: '2323',
      },
    ],
    relatertYtelseNavn: 'Foreldrepenger',
  },
];

const merknaderFraBeslutter = {
  notAccepted: false,
};

const defaultAdopsjon = {
  fødselsdatoer: { 1: '2019-01-10', 2: '2019-01-11' } as { [key: number]: string },
  omsorgsovertakelseDato: '2019-01-10',
  antallBarn: 2,
  omsorgsovertakelseVilkårType: 'FP_VK_8',
} as AdopsjonFamilieHendelse;

const meta = {
  title: 'fakta/fakta-omsorg-og-foreldreansvar',
  component: OmsorgOgForeldreansvarFaktaIndex,
  decorators: [withPanelData],
  args: {
    søknad,
    adopsjon: defaultAdopsjon,
    personoversikt,
    innvilgetRelatertTilgrensendeYtelserForAnnenForelder,
  },
  render: args => <OmsorgOgForeldreansvarFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof OmsorgOgForeldreansvarFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

const aksjonspunktDefault = {
  definisjon: AksjonspunktKode.OMSORGSOVERTAKELSE,
  status: AksjonspunktStatus.OPPRETTET,

  kanLoses: true,
  toTrinnsBehandling: false,

  aksjonspunktType: AksjonspunktType.AUTOPUNKT,
  vilkarType: VilkarType.OMSORGSVILKARET,
  erAktivt: true,
} satisfies Aksjonspunkt;

export const ÅpentAksjonspunktForOmsorgovertakelse: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.OMSORGSOVERTAKELSE,
        status: AksjonspunktStatus.OPPRETTET,

        kanLoses: true,
      },
    ],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.OMSORGSOVERTAKELSE]: merknaderFraBeslutter,
    },
    isReadOnly: false,
  },
};

export const UtførtAksjonspunktForOmsorgovertakelse: Story = {
  args: {
    adopsjon: {
      ...defaultAdopsjon,
      omsorgsovertakelseDato: '2021-01-01',
      foreldreansvarDato: '2021-02-02',
      omsorgsovertakelseVilkårType: 'FP_VK_8',
    },
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.OMSORGSOVERTAKELSE,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'dette er en begrunnelse',
        kanLoses: false,
      },
    ],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.OMSORGSOVERTAKELSE]: merknaderFraBeslutter,
    },
    isReadOnly: true,
  },
};

export const ÅpentAksjonspunktForAvklareVilkårForForeldreansvar: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR,
        status: AksjonspunktStatus.OPPRETTET,

        kanLoses: true,
      },
    ],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR]: merknaderFraBeslutter,
    },
    isReadOnly: false,
  },
};

export const UtførtAksjonspunktForAvklareVilkårForForeldreansvar: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'dette er en begrunnelse',
        kanLoses: false,
      },
    ],
    adopsjon: {
      ...defaultAdopsjon,
      omsorgsovertakelseDato: '2021-01-01',
      foreldreansvarDato: '2021-02-02',
    },
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR]: merknaderFraBeslutter,
    },
    isReadOnly: true,
  },
};
