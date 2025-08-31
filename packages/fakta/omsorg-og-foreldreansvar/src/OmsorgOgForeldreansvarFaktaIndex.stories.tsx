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
  Aksjonspunkt,
  FamilieHendelseSamling,
  InntektArbeidYtelse,
  Personoversikt,
  Soknad,
} from '@navikt/fp-types';

import { OmsorgOgForeldreansvarFaktaIndex } from './OmsorgOgForeldreansvarFaktaIndex';

const defaultFamilieHendelse = {
  gjeldende: {
    termindato: '2019-01-01',
    utstedtdato: '2019-01-01',
    antallBarnTermin: 1,
    dokumentasjonForeligger: true,
  },
} as FamilieHendelseSamling;

const soknad = {
  adopsjonFodelsedatoer: { 1: '2019-01-10', 2: '2019-01-11' } as { [key: number]: string },
  utstedtdato: '2019-01-02',
  antallBarn: 2,
  soknadType: SoknadType.ADOPSJON,
  farSokerType: FarSøkerType.ADOPTERER_ALENE,
} as Soknad;

const personoversikt: Personoversikt = {
  bruker: {
    navn: 'Olga Utvikler',
    aktoerId: '2',
    kjønn: NavBrukerKjonn.KVINNE,
    sivilstand: SivilstandType.GIFT,
    fødselsdato: '1979-01-01',
    dødsdato: null,
    adresser: [
      {
        fom: '2019-01-01',
        tom: TIDENES_ENDE,
        adresseType: AdresseType.POSTADRESSE,
        adresselinje1: 'Gateadresse 1',
        postNummer: '1000',
        poststed: 'Oslo',
        land: 'Norge',
        adresselinje2: null,
        adresselinje3: null,
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

const inntektArbeidYtelse = {
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: [
    {
      tilgrensendeYtelserListe: [
        {
          statusNavn: 'Løpende',
          periodeFraDato: '2019-01-01',
          saksNummer: '2323',
        },
      ],
      relatertYtelseNavn: 'Foreldrepenger',
    },
  ],
} as InntektArbeidYtelse;

const merknaderFraBeslutter = {
  notAccepted: false,
};

const meta = {
  title: 'fakta/fakta-omsorg-og-foreldreansvar',
  component: OmsorgOgForeldreansvarFaktaIndex,
  decorators: [withPanelData],
  args: {
    submittable: true,
    soknad,
    familiehendelse: defaultFamilieHendelse,
    personoversikt,
    inntektArbeidYtelse,
  },
  render: args => <OmsorgOgForeldreansvarFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof OmsorgOgForeldreansvarFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

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

export const ÅpentAksjonspunktForOmsorgovertakelse: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.OMSORGSOVERTAKELSE,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
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
    familiehendelse: {
      ...defaultFamilieHendelse,
      gjeldende: {
        ...defaultFamilieHendelse.gjeldende,
        omsorgsovertakelseDato: '2021-01-01',
        foreldreansvarDato: '2021-02-02',
        vilkarType: 'FP_VK_8',
      },
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
        begrunnelse: null,
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
    familiehendelse: {
      ...defaultFamilieHendelse,
      gjeldende: {
        ...defaultFamilieHendelse.gjeldende,
        omsorgsovertakelseDato: '2021-01-01',
        foreldreansvarDato: '2021-02-02',
      },
    },
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR]: merknaderFraBeslutter,
    },
    isReadOnly: true,
  },
};
