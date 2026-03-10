import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { alleKodeverk, alleKodeverkTilbakekreving, lagFagsakBehandling } from '@navikt/fp-storybook-utils';

import { BehandlingVelgerSakIndex } from './BehandlingVelgerSakIndex';

import '@navikt/ft-ui-komponenter/dist/style.css';


const meta = {
  title: 'sak/sak-behandling-velger',
  component: BehandlingVelgerSakIndex,
  args: {
    behandlingUuid: '1',
    skalViseAlleBehandlinger: false,
    toggleVisAlleBehandlinger: action('button-click'),
    renderRadSomLenke: () => <div>dummy</div>,
    alleKodeverk: alleKodeverk,
    alleKodeverkTilbakekreving: alleKodeverkTilbakekreving,
  },
  render: storyArgs => {
    const [args, setArgs] = useState(storyArgs);

    const toggleVisAlleBehandlinger = () => {
      args.toggleVisAlleBehandlinger();
      setArgs(oldArgs => ({ ...oldArgs, skalViseAlleBehandlinger: !oldArgs.skalViseAlleBehandlinger }));
    };

    return (
      <div style={{ width: '600px' }}>
        <BehandlingVelgerSakIndex
          {...args}
          toggleVisAlleBehandlinger={toggleVisAlleBehandlinger}
          renderRadSomLenke={(className, behandlingInfoKomponent) => (
            <button type="button" className={className} onClick={toggleVisAlleBehandlinger}>
              {behandlingInfoKomponent}
            </button>
          )}
        />
      </div>
    );
  },
} satisfies Meta<typeof BehandlingVelgerSakIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    behandlinger: [
      lagFagsakBehandling({
        behandlendeEnhetId: '4812',
        behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser Bergen',
        versjon: 2,
        uuid: '1',
        type: 'BT-002',
        status: 'AVSLU',
        språkkode: 'NB',
        opprettet: '2017-08-02T02:04:25.455',
        avsluttet: '2017-08-03T02:04:25.455',
        gjeldendeVedtak: true,
        behandlingsresultat: { type: 'AVSLÅTT', harRedigertVedtaksbrev: false, id: 1, vedtaksbrevStatus: 'INGEN_VEDTAKSBREV' },
      }),
      lagFagsakBehandling({
        behandlendeEnhetId: '4812',
        behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser Bergen',
        versjon: 2,
        uuid: '2',
        type: 'BT-006',
        status: 'OPPRE',
        språkkode: 'NB',
        opprettet: '2017-08-01T02:04:25.455',
        avsluttet: '2017-08-01T02:04:25.455',
        gjeldendeVedtak: false,
        behandlingsresultat: { type: 'INNVILGET', harRedigertVedtaksbrev: false, id: 2, vedtaksbrevStatus: 'INGEN_VEDTAKSBREV' },
      }),
      lagFagsakBehandling({
        behandlendeEnhetId: '4812',
        behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser Bergen',
        versjon: 2,
        uuid: '3',
        type: 'BT-004',
        status: 'OPPRE',
        språkkode: 'NB',
        opprettet: '2017-10-02T02:04:25.455',
        gjeldendeVedtak: false,
      }),
      lagFagsakBehandling({
        behandlendeEnhetId: '4812',
        behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser Bergen',
        versjon: 2,
        uuid: '4',
        type: 'BT-002',
        status: 'AVSLU',
        språkkode: 'NB',
        opprettet: '2017-07-12T02:04:25.455',
        avsluttet: '2017-07-13T02:04:25.455',
        gjeldendeVedtak: false,
        behandlingsresultat: {
          type: 'HENLAGT_SØKNAD_TRUKKET',
          harRedigertVedtaksbrev: false,
          id: 4,
          vedtaksbrevStatus: 'INGEN_VEDTAKSBREV',
        },
      }),
    ],
  },
};

export const IngenBehandlinger: Story = {
  args: {
    behandlinger: [],
  },
};
