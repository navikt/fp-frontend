import React from 'react';

import { TIDENES_ENDE } from '@navikt/ft-utils';
import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import {
  AdresseType,
  AksjonspunktKode,
  AksjonspunktStatus,
  NavBrukerKjonn,
  SivilstandType,
  SoknadType,
} from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import {
  Aksjonspunkt,
  Behandling,
  FamilieHendelseSamling,
  InntektArbeidYtelse,
  Personoversikt,
  Soknad,
} from '@navikt/fp-types';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import OmsorgOgForeldreansvarFaktaIndex from './OmsorgOgForeldreansvarFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

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

export default {
  title: 'fakta/fakta-omsorg-og-foreldreansvar',
  component: OmsorgOgForeldreansvarFaktaIndex,
};

const Template: StoryFn<{
  familieHendelse: FamilieHendelseSamling;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  readOnly: boolean;
}> = ({
  familieHendelse = defaultFamilieHendelse,
  aksjonspunkter,
  submitCallback = action('button-click') as (data: any) => Promise<any>,
  alleMerknaderFraBeslutter,
  readOnly = false,
}) => (
  <OmsorgOgForeldreansvarFaktaIndex
    submitCallback={submitCallback}
    readOnly={readOnly}
    harApneAksjonspunkter={aksjonspunkter.some(ap => ap.status === AksjonspunktStatus.OPPRETTET)}
    submittable
    setFormData={() => undefined}
    behandling={behandling}
    soknad={soknad}
    familiehendelse={familieHendelse}
    personoversikt={personoversikt}
    inntektArbeidYtelse={inntektArbeidYtelse}
    aksjonspunkter={aksjonspunkter}
    alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
    alleKodeverk={alleKodeverk as any}
  />
);

export const ÅpentAksjonspunktForOmsorgovertakelse = Template.bind({});
ÅpentAksjonspunktForOmsorgovertakelse.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.OMSORGSOVERTAKELSE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  alleMerknaderFraBeslutter: {
    [AksjonspunktKode.OMSORGSOVERTAKELSE]: merknaderFraBeslutter,
  },
  readOnly: false,
};

export const UtførtAksjonspunktForOmsorgovertakelse = Template.bind({});
UtførtAksjonspunktForOmsorgovertakelse.args = {
  familieHendelse: {
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
  alleMerknaderFraBeslutter: {
    [AksjonspunktKode.OMSORGSOVERTAKELSE]: merknaderFraBeslutter,
  },
  readOnly: true,
};

export const ÅpentAksjonspunktForAvklareVilkårForForeldreansvar = Template.bind({});
ÅpentAksjonspunktForAvklareVilkårForForeldreansvar.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  alleMerknaderFraBeslutter: {
    [AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR]: merknaderFraBeslutter,
  },
  readOnly: false,
};

export const UtførtAksjonspunktForAvklareVilkårForForeldreansvar = Template.bind({});
UtførtAksjonspunktForAvklareVilkårForForeldreansvar.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR,
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'dette er en begrunnelse',
      kanLoses: false,
    },
  ],
  familieHendelse: {
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
};
