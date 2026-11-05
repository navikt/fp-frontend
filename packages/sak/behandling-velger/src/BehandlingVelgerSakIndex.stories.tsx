import { useState } from 'react';

import { Box } from '@navikt/ds-react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { alleKodeverk, alleKodeverkTilbakekreving, lagFagsakBehandling } from '@navikt/fp-storybook-utils';

import { type BehandlingLenkeProps, BehandlingVelgerSakIndex } from './BehandlingVelgerSakIndex';

import '@navikt/ft-ui-komponenter/dist/style.css';

const BehandlingLenke = ({ behandlingUuid, onClick, ...props }: BehandlingLenkeProps) => {
  return (
    <a
      {...props}
      href={`/fagsak/123/behandling/${behandlingUuid}/?punkt=default&fakta=default`}
      onClick={event => {
        action('gå-til-behandling')(behandlingUuid, props.target);
        onClick?.(event);
      }}
    />
  );
};

const meta = {
  title: 'sak/sak-behandling-velger',
  component: BehandlingVelgerSakIndex,
  args: {
    behandlingUuid: '1',
    skalViseAlleBehandlinger: false,
    toggleVisAlleBehandlinger: action('toggleVisAlleBehandlinger'),
    velgBehandling: action('velgBehandling'),
    behandlingLenke: BehandlingLenke,
    alleKodeverk: alleKodeverk,
    alleKodeverkTilbakekreving: alleKodeverkTilbakekreving,
  },
  render: function Render(storyArgs) {
    const [args, setArgs] = useState(storyArgs);

    const toggleVisAlleBehandlinger = () => {
      args.toggleVisAlleBehandlinger();
      setArgs(oldArgs => ({ ...oldArgs, skalViseAlleBehandlinger: !oldArgs.skalViseAlleBehandlinger }));
    };

    return (
      <Box width="100%" maxWidth="600px">
        <BehandlingVelgerSakIndex
          {...args}
          toggleVisAlleBehandlinger={toggleVisAlleBehandlinger}
          velgBehandling={uuid => {
            args.velgBehandling(uuid);
            setArgs(oldArgs => ({ ...oldArgs, behandlingUuid: uuid, skalViseAlleBehandlinger: false }));
          }}
        />
      </Box>
    );
  },
} satisfies Meta<typeof BehandlingVelgerSakIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const AlleBehandlinger: Story = {
  args: {
    behandlingUuid: '3',
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
        behandlingsresultat: {
          type: 'AVSLÅTT',
          id: 1,
          vedtaksbrevStatus: 'INGEN_VEDTAKSBREV',
        },
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
        behandlingsresultat: {
          type: 'INNVILGET',
          id: 2,
          vedtaksbrevStatus: 'INGEN_VEDTAKSBREV',
        },
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
        førsteÅrsak: {
          behandlingArsakType: 'RE-END-INNTEKTSMELD',
          erAutomatiskRevurdering: true,
          manueltOpprettet: false,
        },
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

export const IngenBehandlingErValgt: Story = {
  args: {
    ...AlleBehandlinger.args,
    behandlingUuid: undefined,
  },
};

export const EnBehandling: Story = {
  args: {
    behandlinger: [lagFagsakBehandling({ uuid: '1' })],
  },
};
