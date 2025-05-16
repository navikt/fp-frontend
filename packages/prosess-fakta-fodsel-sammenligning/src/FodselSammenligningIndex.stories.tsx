import type { Meta, StoryObj } from '@storybook/react';

import { BehandlingType } from '@navikt/fp-kodeverk';
import type { AvklartBarn, FamilieHendelse, Soknad } from '@navikt/fp-types';

import { FodselSammenligningIndex } from './FodselSammenligningIndex';

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

const meta = {
  title: 'prosessOgFakta/prosess-fakta-fodsel-sammenligning',
  component: FodselSammenligningIndex,
  args: {
    avklartBarn,
    termindato: '2019-01-01',
    soknad,
    familiehendelseOriginalBehandling: familiehendelse,
  },
} satisfies Meta<typeof FodselSammenligningIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const PanelForNårBehandlingstypeErRevurdering: Story = {
  args: {
    behandlingsTypeKode: BehandlingType.REVURDERING,
  },
};

export const PanelForNårBehandlingstypeErFørstegangssoknad: Story = {
  args: {
    behandlingsTypeKode: BehandlingType.FORSTEGANGSSOKNAD,
  },
};

export const PanelForMedVisningAvSvangerskapsuke: Story = {
  args: {
    behandlingsTypeKode: BehandlingType.REVURDERING,
    vedtaksDatoSomSvangerskapsuke: 43,
    familiehendelseOriginalBehandling: {
      avklartBarn: [] as AvklartBarn[],
      termindato: '2019-01-01',
      antallBarnTermin: 1,
    } as FamilieHendelse,
  },
};
