import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import {
  aktivitetStatus,
  aksjonspunktStatus,
  arbeidsforholdHandlingType,
  StonadskontoType,
  navBrukerKjonn,
  fagsakYtelseType,
  soknadType,
  AksjonspunktCode,
  relasjonsRolleType,
} from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import {
  Aksjonspunkt,
  Behandling,
  BeregningsresultatDagytelse,
  Fagsak,
  FamilieHendelse,
  FamilieHendelseSamling,
  Feriepengegrunnlag,
  Personoversikt,
  Soknad,
} from '@navikt/fp-types';

import TilkjentYtelseProsessIndex from './TilkjentYtelseProsessIndex';

const fagsak = {
  fagsakYtelseType: fagsakYtelseType.FORELDREPENGER,
  relasjonsRolleType: relasjonsRolleType.MOR,
} as Fagsak;

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const defaultFamiliehendelse = {
  gjeldende: {
    avklartBarn: [
      {
        fodselsdato: '2019-01-01',
      },
    ],
    omsorgsovertakelseDato: '2019-01-01',
    soknadType: soknadType.FODSEL,
  } as FamilieHendelse,
} as FamilieHendelseSamling;

const personoversikt = {
  bruker: {
    kjønn: navBrukerKjonn.KVINNE,
  },
} as Personoversikt;

const beregningresultat = {
  perioder: [
    {
      andeler: [
        {
          uttak: {
            stonadskontoType: StonadskontoType.FELLESPERIODE,
          },
          aktivitetStatus: aktivitetStatus.ARBEIDSTAKER,
          arbeidsforholdType: arbeidsforholdHandlingType.NYTT_ARBEIDSFORHOLD,
        },
      ],
      fom: '2018-01-01',
      tom: '2019-01-10',
      dagsats: 1000,
    },
    {
      andeler: [
        {
          uttak: {
            stonadskontoType: StonadskontoType.FORELDREPENGER,
          },
          aktivitetStatus: aktivitetStatus.ARBEIDSTAKER,
          arbeidsforholdType: arbeidsforholdHandlingType.NYTT_ARBEIDSFORHOLD,
        },
      ],
      fom: '2019-02-01',
      tom: '2019-06-10',
      dagsats: 100,
    },
  ],
} as BeregningsresultatDagytelse;

const søknad = {
  mottattDato: '2019-01-10',
  soknadType: soknadType.FODSEL,
  omsorgsovertakelseDato: '2019-01-10',
  fodselsdatoer: {
    1: '2019-01-01',
  } as { [key: number]: string },
  adopsjonFodelsedatoer: {
    1: '2019-01-01',
  } as { [key: number]: string },
  termindato: '2019-02-01',
} as Soknad;

const arbeidsgiverOpplysningerPerId = {
  1: {
    erPrivatPerson: false,
    identifikator: '973861778',
    navn: 'EQUINOR ASA AVD STATOIL SOKKELVIRKSOMHET',
  },
};

export default {
  title: 'prosess/prosess-tilkjent-ytelse',
  component: TilkjentYtelseProsessIndex,
};

const Template: StoryFn<{
  aksjonspunkter: Aksjonspunkt[];
  feriepengegrunnlag?: Feriepengegrunnlag;
  familiehendelse?: FamilieHendelseSamling;
}> = ({ aksjonspunkter, feriepengegrunnlag, familiehendelse = defaultFamiliehendelse }) => (
  <TilkjentYtelseProsessIndex
    submitCallback={vi.fn()}
    readOnlySubmitButton
    behandling={behandling}
    alleKodeverk={alleKodeverk as any}
    aksjonspunkter={aksjonspunkter}
    isReadOnly={false}
    isAksjonspunktOpen
    status=""
    vilkar={[]}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    beregningresultat={beregningresultat}
    familiehendelse={familiehendelse}
    personoversikt={personoversikt}
    soknad={søknad}
    fagsak={fagsak}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    feriepengegrunnlag={feriepengegrunnlag}
  />
);

export const UtenAksjonspunkt = Template.bind({});
UtenAksjonspunkt.args = {
  aksjonspunkter: [],
};

export const UtførtAksjonspunkt = Template.bind({});
UtførtAksjonspunkt.args = {
  aksjonspunkter: [
    {
      begrunnelse: 'Dette er en begrunnelse saksbehandler tidligere har gjort.',
      definisjon: AksjonspunktCode.VURDER_TILBAKETREKK,
      status: aksjonspunktStatus.UTFORT,
    },
  ] as Aksjonspunkt[],
};

export const MedFeriepengegrunnlag = Template.bind({});
MedFeriepengegrunnlag.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_TILBAKETREKK,
      status: aksjonspunktStatus.OPPRETTET,
    },
  ] as Aksjonspunkt[],
  feriepengegrunnlag: {
    feriepengeperiodeFom: '2020-01-01',
    feriepengeperiodeTom: '2022-10-10',
    andeler: [
      {
        aktivitetStatus: aktivitetStatus.ARBEIDSTAKER,
        opptjeningsår: 2,
        årsbeløp: 500000,
        erBrukerMottaker: true,
        ytelseperiodeFom: '2020-01-01',
        ytelseperiodeTom: '2022-01-01',
      },
    ],
  },
};

export const MedBarnFodtLengeForForstePeriode = Template.bind({});
MedBarnFodtLengeForForstePeriode.args = {
  aksjonspunkter: [],
  familiehendelse: {
    ...defaultFamiliehendelse,
    gjeldende: {
      avklartBarn: [
        {
          fodselsdato: '2017-01-01',
        },
      ],
      soknadType: soknadType.FODSEL,
    } as FamilieHendelse,
  },
};
