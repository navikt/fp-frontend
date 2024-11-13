import React from 'react';
import { StoryFn } from '@storybook/react';
import dayjs from 'dayjs';

import {
  NavBrukerKjonn,
  FagsakStatus,
  PersonstatusType,
  FagsakYtelseType,
  RelasjonsRolleType,
  FamilieHendelseType,
  DiskresjonskodeType,
} from '@navikt/fp-kodeverk';
import { Fagsak, FagsakPersoner } from '@navikt/fp-types';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

import { VisittkortSakIndex } from './VisittkortSakIndex';

import '@navikt/ds-css';

import '@navikt/ft-plattform-komponenter/dist/style.css';

export default {
  title: 'sak/sak-visittkort',
  component: VisittkortSakIndex,
};

const defaultFagsak = {
  saksnummer: '123456',
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  relasjonsRolleType: RelasjonsRolleType.MOR,
  status: FagsakStatus.LOPENDE,
  dekningsgrad: 100,
};

const fagsakPerson = {
  navn: 'Espen Utvikler',
  fødselsdato: '1979-01-01',
  fødselsnummer: '12345678910',
  kjønn: NavBrukerKjonn.MANN,
  aktørId: '234',
  personstatusType: PersonstatusType.BOSATT,
};

const fagsakPersonAnnenPartUkjent = {
  navn: 'Klara Ku',
  fødselsdato: '1980-01-01',
  fødselsnummer: '65656578787',
  kjønn: NavBrukerKjonn.KVINNE,
  personstatusType: PersonstatusType.BOSATT,
};

const fagsakPersonAnnenPart = {
  ...fagsakPersonAnnenPartUkjent,
  aktørId: 'test',
};

const fagsakPersonerUtenAnnenPart = {
  bruker: fagsakPerson,
};

const fagsakPersonerMedAnnenPart = {
  bruker: fagsakPerson,
  annenPart: fagsakPersonAnnenPart,
};

const fagsakPersonerMedAnnenPartUkjent = {
  bruker: fagsakPerson,
  annenPart: fagsakPersonAnnenPartUkjent,
};

const Template: StoryFn<{
  fagsak: Fagsak;
  fagsakPersoner: FagsakPersoner;
  harVerge?: boolean;
  lenkeTilAnnenPart?: string;
}> = ({ fagsak, fagsakPersoner, lenkeTilAnnenPart, harVerge }) => (
  <VisittkortSakIndex
    fagsak={fagsak}
    fagsakPersoner={fagsakPersoner}
    lenkeTilAnnenPart={lenkeTilAnnenPart}
    harVerge={harVerge}
  />
);

export const UtenAnnenPart = Template.bind({});
UtenAnnenPart.args = {
  fagsak: defaultFagsak,
  fagsakPersoner: fagsakPersonerUtenAnnenPart,
};

export const PersonopplysningerForBeggeParter = Template.bind({});
PersonopplysningerForBeggeParter.args = {
  fagsak: defaultFagsak,
  fagsakPersoner: fagsakPersonerMedAnnenPart,
  lenkeTilAnnenPart: 'testlenke til annen part',
};

export const PersonopplysningerForBeggeParterMedLangtNavn = Template.bind({});
PersonopplysningerForBeggeParterMedLangtNavn.args = {
  fagsak: defaultFagsak,
  fagsakPersoner: {
    annenPart: { ...fagsakPersonAnnenPart, navn: 'Klara Kuuuuuuuuuuu' },
    bruker: {
      ...fagsakPerson,
      navn: 'Espen Utvikler Utvikler Utvikler Utvikler Utvikler Utvikler Utvikler Utvikler Utvikler',
    },
  },
  lenkeTilAnnenPart: 'testlenke til annen part',
};

export const MedDiskresjonskodeOgDødAnnenpart = Template.bind({});
MedDiskresjonskodeOgDødAnnenpart.args = {
  fagsak: defaultFagsak,
  fagsakPersoner: {
    bruker: { ...fagsakPerson, diskresjonskode: DiskresjonskodeType.KODE6 },
    annenPart: { ...fagsakPersonAnnenPart, dodsdato: '2024-02-01' },
  },
  lenkeTilAnnenPart: 'testlenke til annen part',
};

export const ForAnnenPartDerAktørIdErUkjent = Template.bind({});
ForAnnenPartDerAktørIdErUkjent.args = {
  fagsak: defaultFagsak,
  fagsakPersoner: fagsakPersonerMedAnnenPartUkjent,
  lenkeTilAnnenPart: 'testlenke til annen part',
};

export const MedVergeOgBrukerUnder18 = Template.bind({});
MedVergeOgBrukerUnder18.args = {
  fagsak: defaultFagsak,
  harVerge: true,
  fagsakPersoner: {
    bruker: { ...fagsakPerson, fødselsdato: dayjs().subtract(17, 'years').format(ISO_DATE_FORMAT) },
  },
};

export const FamilieMedDødfødtBarn = Template.bind({});
FamilieMedDødfødtBarn.args = {
  fagsak: defaultFagsak,
  fagsakPersoner: {
    bruker: fagsakPerson,
    familiehendelse: {
      hendelseType: FamilieHendelseType.FODSEL,
      hendelseDato: '2020-01-21',
      dødfødsel: true,
      antallBarn: 1,
    },
  },
};

export const FamilieMedTermin = Template.bind({});
FamilieMedTermin.args = {
  fagsak: defaultFagsak,
  fagsakPersoner: {
    bruker: fagsakPerson,
    familiehendelse: {
      hendelseType: FamilieHendelseType.TERMIN,
      hendelseDato: '2020-01-21',
      dødfødsel: false,
      antallBarn: 1,
    },
  },
};

export const FamilieMedOmsorgovertakelse = Template.bind({});
FamilieMedOmsorgovertakelse.args = {
  fagsak: defaultFagsak,
  fagsakPersoner: {
    bruker: fagsakPerson,
    familiehendelse: {
      hendelseType: FamilieHendelseType.OMSORG,
      hendelseDato: '2020-01-21',
      dødfødsel: false,
      antallBarn: 1,
    },
  },
};

export const FamilieMedAdopsjon = Template.bind({});
FamilieMedAdopsjon.args = {
  fagsak: defaultFagsak,
  fagsakPersoner: {
    bruker: fagsakPerson,
    familiehendelse: {
      hendelseType: FamilieHendelseType.ADOPSJON,
      hendelseDato: '2020-01-21',
      dødfødsel: false,
      antallBarn: 1,
    },
  },
};
