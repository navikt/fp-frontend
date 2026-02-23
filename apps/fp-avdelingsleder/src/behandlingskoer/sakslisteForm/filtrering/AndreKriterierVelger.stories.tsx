import { useForm } from 'react-hook-form';

import { RhfForm } from '@navikt/ft-form-hooks';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { kriterieFilterOptions, losKodeverkOptions, LosUrl } from '../../../data/fplosAvdelingslederApi';
import { AndreKriterierVelger } from './AndreKriterierVelger';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const kriterieFilterMock = {
  BARE_FAR_RETT: { andreKriterierType: 'BARE_FAR_RETT', valgbarForYtelseTyper: ['FP'], valgbarForBehandlingTyper: [] },
  KLAGE_PÅ_TILBAKEBETALING: {
    andreKriterierType: 'KLAGE_PÅ_TILBAKEBETALING',
    valgbarForYtelseTyper: [],
    valgbarForBehandlingTyper: ['BT-003'],
  },
};

const defaultMswHandlers = [
  http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
  http.get(LosUrl.KODEVERK_KRITERIE_FILTER, () => HttpResponse.json(kriterieFilterMock)),
  http.post(LosUrl.ENDRE_EKSISTERENDE_SAKSLISTE, () => new HttpResponse(null, { status: 200 })),
];

const meta = {
  title: 'los/avdelingsleder/behandlingskoer/AndreKriterierVelger',
  component: AndreKriterierVelger,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: { handlers: defaultMswHandlers },
  },
} satisfies Meta<typeof AndreKriterierVelger>;
export default meta;

type Story = StoryObj<typeof meta>;

const lagRender = (defaultValues: Record<string, unknown>) => () => {
  const formMethods = useForm({ defaultValues });

  const alleKodeverk = useQuery(losKodeverkOptions()).data;
  const filter = useQuery(kriterieFilterOptions()).data;

  return alleKodeverk && filter ? (
    <RhfForm formMethods={formMethods}>
      <AndreKriterierVelger />
    </RhfForm>
  ) : (
    <LoadingPanel />
  );
};

export const Default: Story = {
  render: lagRender({
    fagsakYtelseTyper: [],
    behandlingTyper: [],
    andreKriterie: { inkluder: ['ARBEID_INNTEKT'], ekskluder: [] },
  }),
};

export const MedFpOgFørstegang: Story = {
  render: lagRender({
    fagsakYtelseTyper: ['FP'],
    behandlingTyper: ['BT-002'],
    andreKriterie: { inkluder: ['ARBEID_INNTEKT'], ekskluder: [] },
  }),
};

export const MedEngangsstønad: Story = {
  render: lagRender({
    fagsakYtelseTyper: ['ES'],
    behandlingTyper: [],
    andreKriterie: { inkluder: ['BARE_FAR_RETT'], ekskluder: [] },
  }),
};
