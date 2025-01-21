import { TIDENES_ENDE } from '@navikt/ft-utils';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import {
  AdresseType,
  AksjonspunktKode,
  AksjonspunktStatus,
  NavBrukerKjonn,
  SivilstandType,
  SoknadType,
} from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Behandling, FamilieHendelseSamling, InntektArbeidYtelse, Personoversikt, Soknad } from '@navikt/fp-types';

import { OmsorgOgForeldreansvarFaktaIndex } from './OmsorgOgForeldreansvarFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

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
  farSokerType: 'ADOPTERER_ALENE',
} as Soknad;

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
  args: {
    submitCallback: action('button-click') as (data: any) => Promise<void>,
    readOnly: false,
    submittable: true,
    setFormData: () => undefined,
    behandling,
    soknad,
    familiehendelse: defaultFamilieHendelse,
    personoversikt,
    inntektArbeidYtelse,
    alleKodeverk: alleKodeverk as any,
  },
} satisfies Meta<typeof OmsorgOgForeldreansvarFaktaIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunktForOmsorgovertakelse: Story = {
  args: {
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.OMSORGSOVERTAKELSE,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: true,
      },
    ],
    harApneAksjonspunkter: true,
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.OMSORGSOVERTAKELSE]: merknaderFraBeslutter,
    },
    readOnly: false,
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
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.OMSORGSOVERTAKELSE,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'dette er en begrunnelse',
        kanLoses: false,
      },
    ],
    harApneAksjonspunkter: false,
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.OMSORGSOVERTAKELSE]: merknaderFraBeslutter,
    },
    readOnly: true,
  },
};

export const ÅpentAksjonspunktForAvklareVilkårForForeldreansvar: Story = {
  args: {
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: true,
      },
    ],
    harApneAksjonspunkter: true,
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR]: merknaderFraBeslutter,
    },
    readOnly: false,
  },
};

export const UtførtAksjonspunktForAvklareVilkårForForeldreansvar: Story = {
  args: {
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'dette er en begrunnelse',
        kanLoses: false,
      },
    ],
    harApneAksjonspunkter: false,
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
    readOnly: true,
  },
};
