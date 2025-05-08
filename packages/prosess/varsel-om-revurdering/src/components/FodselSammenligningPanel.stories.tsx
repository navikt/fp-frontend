import type { Meta, StoryObj } from '@storybook/react';

import { BehandlingType } from '@navikt/fp-kodeverk';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import type { AvklartBarn, FamilieHendelse, Soknad } from '@navikt/fp-types';

import { FodselSammenligningPanel } from './FodselSammenligningPanel';

import messages from '../../i18n/nb_NO.json';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const withIntl = getIntlDecorator(messages);

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
  component: FodselSammenligningPanel,
  args: {
    avklartBarn,
    termindato: '2019-01-01',
    soknad,
    familiehendelseOriginalBehandling: familiehendelse,
    soknadOriginalBehandling: undefined,
    vedtaksDatoSomSvangerskapsuke: undefined,
  },
  decorators: [withIntl],
} satisfies Meta<typeof FodselSammenligningPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const PanelForNårBehandlingstypeErRevurdering: Story = {
  args: {
    behandlingsType: BehandlingType.REVURDERING,
  },
};

export const PanelForNårBehandlingstypeErFørstegangssoknad: Story = {
  args: {
    behandlingsType: BehandlingType.FORSTEGANGSSOKNAD,
  },
};

export const PanelForMedVisningAvSvangerskapsuke: Story = {
  args: {
    behandlingsType: BehandlingType.REVURDERING,
    vedtaksDatoSomSvangerskapsuke: 43,
    familiehendelseOriginalBehandling: {
      avklartBarn: [] as AvklartBarn[],
      termindato: '2019-01-01',
      antallBarnTermin: 1,
    } as FamilieHendelse,
  },
};
