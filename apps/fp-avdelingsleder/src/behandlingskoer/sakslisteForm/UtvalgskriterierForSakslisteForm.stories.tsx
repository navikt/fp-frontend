import type { ComponentProps } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { lagNySaksliste } from '../../../testdata/lagNySaksliste';
import { losKodeverkOptions, LosUrl } from '../../data/fplosAvdelingslederApi';
import { UtvalgskriterierForSakslisteForm } from './UtvalgskriterierForSakslisteForm';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const RenderUtvalgskriterierForSakslisteForm = (args: ComponentProps<typeof UtvalgskriterierForSakslisteForm>) => {
  const { data: kodeverkLos } = useQuery(losKodeverkOptions());

  return kodeverkLos ? <UtvalgskriterierForSakslisteForm {...args} /> : <LoadingPanel />;
};

const meta = {
  title: 'los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm',
  component: UtvalgskriterierForSakslisteForm,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.OPPGAVE_ANTALL, () => HttpResponse.json(1)),
        http.post(LosUrl.ENDRE_EKSISTERENDE_SAKSLISTE, () => new HttpResponse(null, { status: 204 })),
      ],
    },
  },
  args: {
    valgtAvdelingEnhet: '',
  },
  render: args => <RenderUtvalgskriterierForSakslisteForm {...args} />,
} satisfies Meta<typeof UtvalgskriterierForSakslisteForm>;
export default meta;

type Story = StoryObj<typeof meta>;

export const MedGittNavn: Story = {
  args: {
    valgtSaksliste: lagNySaksliste({ navn: 'liste' }),
  },
};
