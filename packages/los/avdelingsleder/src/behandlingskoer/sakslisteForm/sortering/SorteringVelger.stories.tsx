import { useForm } from 'react-hook-form';

import { RhfForm } from '@navikt/ft-form-hooks';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { BehandlingTypeEnum, KøSortering } from '@navikt/fp-kodeverk';
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
        http.post(LosUrl.LAGRE_SAKSLISTE_SORTERING, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_SORTERING_INTERVALL, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  args: {
    valgtSakslisteId: 1,
    valgtAvdelingEnhet: 'Nav Vikafossen',
  },
  render: args => {
    const formMethods = useForm({
      defaultValues: {
        sortering: KøSortering.BEHANDLINGSFRIST,
        fra: 2,
        til: 3,
        fomDato: '2020-01-10',
        tomDato: '2020-10-01',
        erDynamiskPeriode: args.erDynamiskPeriode,
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
    valgteBehandlingtyper: [BehandlingTypeEnum.FORSTEGANGSSOKNAD, BehandlingTypeEnum.DOKUMENTINNSYN],
    erDynamiskPeriode: false,
  },
};

export const SorteringsvelgerNårDynamiskPeriodeErValgt: Story = {
  args: {
    valgteBehandlingtyper: [BehandlingTypeEnum.FORSTEGANGSSOKNAD, BehandlingTypeEnum.DOKUMENTINNSYN],
    erDynamiskPeriode: true,
  },
};

export const SorteringsvelgerNårKunTilbakekrevingErValgt: Story = {
  args: {
    valgteBehandlingtyper: [BehandlingTypeEnum.TILBAKEKREVING],
    erDynamiskPeriode: false,
  },
};
