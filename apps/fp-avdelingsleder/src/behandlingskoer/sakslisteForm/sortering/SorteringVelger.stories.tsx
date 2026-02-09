import { useForm } from 'react-hook-form';

import { RhfForm } from '@navikt/ft-form-hooks';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../../../data/fplosAvdelingslederApi';
import { SorteringVelger } from './SorteringVelger';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/avdelingsleder/behandlingskoer/SorteringVelger',
  component: SorteringVelger,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.post(LosUrl.ENDRE_EKSISTERENDE_SAKSLISTE, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  render: args => {
    const formMethods = useForm({
      defaultValues: {
        sortering: {
          sorteringType: 'BEHFRIST',
          fra: 2,
          til: 3,
          fomDato: '2020-01-10',
          tomDato: '2020-10-01',
          periodefilter: 'FAST_PERIODE',
        },
      },
    });

    const { data: kodeverkLos } = useQuery(losKodeverkOptions());

    return kodeverkLos ? (
      <RhfForm formMethods={formMethods}>
        <SorteringVelger {...args} />
      </RhfForm>
    ) : (
      <LoadingPanel />
    );
  },
} satisfies Meta<typeof SorteringVelger>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SorteringsvelgerNårMangeBehandlingstyperErValgt: Story = {
  args: {
    valgteBehandlingtyper: ['BT-002', 'BT-006'],
    muligeSorteringer: [
      { sorteringType: 'BEHFRIST', feltType: 'DATO', feltKategori: 'UNIVERSAL' },
      { sorteringType: 'OPPRBEH', feltType: 'DATO', feltKategori: 'UNIVERSAL' },
      { sorteringType: 'FORSTONAD', feltType: 'DATO', feltKategori: 'UNIVERSAL' },
    ],
  },
};

export const SorteringsvelgerNårDynamiskPeriodeErValgt: Story = {
  args: {
    valgteBehandlingtyper: ['BT-002', 'BT-006'],
    muligeSorteringer: [
      { sorteringType: 'BEHFRIST', feltType: 'DATO', feltKategori: 'UNIVERSAL' },
      { sorteringType: 'FORSTONAD', feltType: 'DATO', feltKategori: 'UNIVERSAL' },
    ],
  },
  render: args => {
    const formMethods = useForm({
      defaultValues: {
        sortering: {
          sorteringType: 'BEHFRIST',
          fra: 2,
          til: 3,
          periodefilter: 'RELATIV_PERIODE_DAGER',
        },
      },
    });

    const { data: kodeverkLos } = useQuery(losKodeverkOptions());

    return kodeverkLos ? (
      <RhfForm formMethods={formMethods}>
        <SorteringVelger {...args} />
      </RhfForm>
    ) : (
      <LoadingPanel />
    );
  },
};

export const SorteringsvelgerNårKunTilbakekrevingErValgt: Story = {
  args: {
    valgteBehandlingtyper: ['BT-007'],
    muligeSorteringer: [
      { sorteringType: 'BEHFRIST', feltType: 'DATO', feltKategori: 'UNIVERSAL' },
      { sorteringType: 'OPPRBEH', feltType: 'DATO', feltKategori: 'UNIVERSAL' },
      { sorteringType: 'FORSTONAD', feltType: 'DATO', feltKategori: 'UNIVERSAL' },
      { sorteringType: 'BELOP', feltType: 'HELTALL', feltKategori: 'TILBAKEKREVING' },
      { sorteringType: 'FEILUTBETALINGSTART', feltType: 'DATO', feltKategori: 'TILBAKEKREVING' },
    ],
  },
  render: args => {
    const formMethods = useForm({
      defaultValues: {
        sortering: {
          sorteringType: 'BELOP',
          periodefilter: 'RELATIV_PERIODE_DAGER',
          fra: 0,
          til: 1000,
        },
      },
    });

    const { data: kodeverkLos } = useQuery(losKodeverkOptions());

    return kodeverkLos ? (
      <RhfForm formMethods={formMethods}>
        <SorteringVelger {...args} />
      </RhfForm>
    ) : (
      <LoadingPanel />
    );
  },
};
