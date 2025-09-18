import { useState } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../data/fplosAvdelingslederApi';
import { GjeldendeSakslisterTabell } from './GjeldendeSakslisterTabell';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell',
  component: GjeldendeSakslisterTabell,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.post(LosUrl.SLETT_SAKSLISTE, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  args: {
    setValgtSakslisteId: action('button-click'),
    resetValgtSakslisteId: action('button-click'),
    lagNySaksliste: action('button-click'),
    valgtAvdelingEnhet: '1',
    children: <div>test</div>,
  },
  render: storyArgs => {
    const [args, setArgs] = useState(storyArgs);

    const { data: kodeverkLos } = useQuery(losKodeverkOptions());

    const lagNySaksliste = () => {
      args.lagNySaksliste();
      setArgs(oldArgs => ({
        ...oldArgs,
        sakslister: oldArgs.sakslister.concat({
          sakslisteId: oldArgs.sakslister.length === 1 ? 1 : 2,
          navn: 'Ny liste',
          saksbehandlerIdenter: [],
        }),
      }));
    };

    return kodeverkLos ? <GjeldendeSakslisterTabell {...args} lagNySaksliste={lagNySaksliste} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof GjeldendeSakslisterTabell>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TabellNårDetIkkeFinnesBehandlingskøer: Story = {
  args: {
    sakslister: [],
  },
};

export const TabellNårDetFinnesEnBehandlingskø: Story = {
  args: {
    sakslister: [
      {
        sakslisteId: 1,
        navn: 'Saksliste 1',
        saksbehandlerIdenter: ['R23233'],
      },
    ],
    oppgaverForAvdelingAntall: 1,
  },
};
