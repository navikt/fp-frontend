import React from 'react';

import { StoryFn } from '@storybook/react';

import { BehandlingType } from '@navikt/fp-kodeverk';
import { AvklartBarn, FamilieHendelse, Soknad } from '@navikt/fp-types';

import FodselSammenligningIndex from './FodselSammenligningIndex';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const avklartBarn = [
  {
    fodselsdato: '2019-01-10',
    dodsdato: '2019-01-10',
    fnr: '1213200001',
  },
];

const soknad = {
  fodselsdatoer: { 1: '2019-01-10' } as { [key: number]: string },
  termindato: '2019-01-01',
  utstedtdato: '2019-01-02',
  antallBarn: 1,
} as Soknad;

const familiehendelse = {
  avklartBarn: [
    {
      fodselsdato: '2019-01-10',
    },
  ],
  termindato: '2019-01-01',
  antallBarnTermin: 1,
} as FamilieHendelse;

export default {
  title: 'prosessOgFakta/prosess-fakta-fodsel-sammenligning',
  component: FodselSammenligningIndex,
};

const Template: StoryFn<{
  behandlingsTypeKode: string;
  vedtaksDatoSomSvangerskapsuke?: number;
  familiehendelseOriginalBehandling?: FamilieHendelse;
}> = ({ behandlingsTypeKode, vedtaksDatoSomSvangerskapsuke, familiehendelseOriginalBehandling }) => (
  <FodselSammenligningIndex
    behandlingsTypeKode={behandlingsTypeKode}
    avklartBarn={avklartBarn}
    termindato="2019-01-01"
    soknad={soknad}
    familiehendelseOriginalBehandling={familiehendelseOriginalBehandling || familiehendelse}
    vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke}
  />
);

export const PanelForNårBehandlingstypeErRevurdering = Template.bind({});
PanelForNårBehandlingstypeErRevurdering.args = {
  behandlingsTypeKode: BehandlingType.REVURDERING,
};

export const PanelForNårBehandlingstypeErFørstegangssoknad = Template.bind({});
PanelForNårBehandlingstypeErFørstegangssoknad.args = {
  behandlingsTypeKode: BehandlingType.FORSTEGANGSSOKNAD,
};

export const PanelForMedVisningAvSvangerskapsuke = Template.bind({});
PanelForMedVisningAvSvangerskapsuke.args = {
  behandlingsTypeKode: BehandlingType.REVURDERING,
  vedtaksDatoSomSvangerskapsuke: 43,
  familiehendelseOriginalBehandling: {
    avklartBarn: [] as AvklartBarn[],
    termindato: '2019-01-01',
    antallBarnTermin: 1,
  } as FamilieHendelse,
};
