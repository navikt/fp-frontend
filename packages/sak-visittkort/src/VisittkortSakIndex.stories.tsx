import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import relasjonsRolleType from '@fpsak-frontend/kodeverk/src/relasjonsRolleType';
import { KjønnkodeEnum, Fagsak, FagsakPersoner } from '@fpsak-frontend/types';
import VisittkortSakIndex from './VisittkortSakIndex';

export default {
  title: 'sak/sak-visittkort',
  component: VisittkortSakIndex,
};

const defaultFagsak = {
  saksnummer: '123456',
  fagsakYtelseType: fagsakYtelseType.FORELDREPENGER,
  relasjonsRolleType: relasjonsRolleType.MOR,
  status: fagsakStatus.LOPENDE,
  dekningsgrad: 100,
};

const fagsakPerson = {
  navn: 'Espen Utvikler',
  fødselsdato: '1979-01-01',
  fødselsnummer: '1234567',
  kjønn: KjønnkodeEnum.MANN,
  aktørId: '234',
  personstatusType: personstatusType.BOSATT,
};

const fagsakPersonAnnenPart = {
  navn: 'Klara Ku',
  fødselsdato: '1980-01-01',
  fødselsnummer: '6565656',
  kjønn: KjønnkodeEnum.KVINNE,
  personstatusType: personstatusType.BOSATT,
  aktørId: 'test',
};

const fagsakPersonAnnenPartUkjent = {
  navn: 'Klara Ku',
  fødselsdato: '1980-01-01',
  fødselsnummer: '6565656',
  kjønn: KjønnkodeEnum.KVINNE,
  personstatusType: personstatusType.BOSATT,
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

const Template: Story<{
  fagsak: Fagsak,
  fagsakPersoner: FagsakPersoner,
  lenkeTilAnnenPart?: string,
}> = ({
  fagsak,
  fagsakPersoner,
  lenkeTilAnnenPart,
}) => (
  <VisittkortSakIndex
    fagsak={fagsak}
    fagsakPersoner={fagsakPersoner}
    lenkeTilAnnenPart={lenkeTilAnnenPart}
  />
);

export const IkkeHarAnnenPart = Template.bind({});
IkkeHarAnnenPart.args = {
  fagsak: defaultFagsak,
  fagsakPersoner: fagsakPersonerUtenAnnenPart,
};

export const PersonopplysningerForBeggeParter = Template.bind({});
PersonopplysningerForBeggeParter.args = {
  fagsak: defaultFagsak,
  fagsakPersoner: fagsakPersonerMedAnnenPart,
  lenkeTilAnnenPart: 'testlenke til annen part',
};

export const ForAnnenPartDerAktørIdErUkjent = Template.bind({});
ForAnnenPartDerAktørIdErUkjent.args = {
  fagsak: defaultFagsak,
  fagsakPersoner: fagsakPersonerMedAnnenPartUkjent,
  lenkeTilAnnenPart: 'testlenke til annen part',
};
