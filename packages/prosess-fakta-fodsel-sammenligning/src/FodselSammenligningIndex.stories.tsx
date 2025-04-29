import type { Meta, StoryObj } from '@storybook/react';

import { BehandlingType } from '@navikt/fp-kodeverk';
import type { AvklartBarn, FamilieHendelse, FamilieHendelseSamling, Soknad } from '@navikt/fp-types';

import { FodselSammenligningIndex } from './FodselSammenligningIndex';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const soknad = {
  fodselsdatoer: { 1: '2019-01-10' } as { [key: number]: string },
  termindato: '2019-01-01',
  utstedtdato: '2019-01-02',
  antallBarn: 1,
} as Soknad;

const familiehendelseSamling = {
  oppgitt: {
    '@type': 'AvklartDataFodselDto',
    soknadType: 'ST-001',
    skjaringstidspunkt: '2025-04-22',
    avklartBarn: [
      {
        fodselsdato: '2025-04-22',
        dodsdato: null,
      },
    ],
    termindato: '2025-04-22',
    antallBarnTermin: 1,
  },
  gjeldende: {
    '@type': 'AvklartDataFodselDto',
    soknadType: 'ST-001',
    skjaringstidspunkt: '2025-04-22',
    avklartBarn: [
      {
        fodselsdato: '2025-04-22',
        dodsdato: null,
      },
    ],
    termindato: '2025-04-22',
    antallBarnTermin: 1,
  },
  register: {
    '@type': 'AvklartDataFodselDto',
    soknadType: 'ST-001',
    skjaringstidspunkt: '2025-04-22',
    avklartBarn: [
      {
        fodselsdato: '2025-04-22',
        dodsdato: null,
      },
    ],
    termindato: '2025-04-22',
    antallBarnTermin: 1,
  },
} as FamilieHendelseSamling;

const meta = {
  title: 'prosessOgFakta/prosess-fakta-fodsel-sammenligning',
  component: FodselSammenligningIndex,
  args: {
    gjeldendeFamilieHendelse: familiehendelseSamling.gjeldende,
    soknad,
    registerFamiliehendelse: familiehendelseSamling.register ?? undefined,
    familiehendelseOriginalBehandling: undefined,
  },
} satisfies Meta<typeof FodselSammenligningIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const PanelForNårBehandlingstypeErRevurdering: Story = {
  args: {
    behandlingsTypeKode: BehandlingType.REVURDERING,
  },
};

export const PanelForFørstegangssoknad: Story = {
  args: {
    behandlingsTypeKode: BehandlingType.FORSTEGANGSSOKNAD,
  },
};
export const PanelFørstegangssoknadMedDødTvilling: Story = {
  args: {
    behandlingsTypeKode: BehandlingType.FORSTEGANGSSOKNAD,
    soknad: { ...soknad, antallBarn: 1, fodselsdatoer: undefined },
    gjeldendeFamilieHendelse: familiehendelseSamling.gjeldende,
    registerFamiliehendelse: {
      ...familiehendelseSamling.register,
      avklartBarn: [
        {
          fodselsdato: '2025-04-22',
          dodsdato: null,
        },
        {
          fodselsdato: '2025-04-22',
          dodsdato: '2025-04-24',
        },
      ],
    } as FamilieHendelse,
  },
};

export const PanelForMedVisningAvSvangerskapsuke: Story = {
  args: {
    behandlingsTypeKode: BehandlingType.REVURDERING,
    familiehendelseOriginalBehandling: {
      avklartBarn: [] as AvklartBarn[],
      termindato: '2019-01-01',
      antallBarnTermin: 1,
    } as FamilieHendelse,
  },
};
