import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { BehandlingStatus, BehandlingType } from '@navikt/fp-kodeverk';
import { alleKodeverk, alleKodeverkTilbakekreving } from '@navikt/fp-storybook-utils';
import type { BehandlingAppKontekst, Behandlingsresultat } from '@navikt/fp-types';

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
      args.toggleVisAlleBehandlinger?.();
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
      {
        versjon: 2,
        uuid: '1',
        type: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
        status: BehandlingStatus.AVSLUTTET,
        språkkode: 'NB',
        erAktivPapirsoknad: false,
        opprettet: '2017-08-02T02:04:25.455',
        avsluttet: '2017-08-03T02:04:25.455',
        behandlendeEnhetId: '4812',
        behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser Bergen',
        gjeldendeVedtak: true,
        behandlingPåVent: false,
        behandlingHenlagt: false,
        behandlingKøet: false,
        toTrinnsBehandling: false,
        behandlingsresultat: {
          type: 'AVSLÅTT',
        } as Behandlingsresultat,
      },
      {
        versjon: 2,
        uuid: '2',
        type: BehandlingTypeEnum.DOKUMENTINNSYN,
        status: BehandlingStatus.OPPRETTET,
        språkkode: 'NB',
        erAktivPapirsoknad: false,
        opprettet: '2017-08-01T02:04:25.455',
        avsluttet: '2017-08-01T02:04:25.455',
        behandlendeEnhetId: '4812',
        behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser Bergen',
        gjeldendeVedtak: false,
        behandlingPåVent: false,
        behandlingHenlagt: false,
        behandlingKøet: false,
        toTrinnsBehandling: false,
        behandlingsresultat: {
          type: 'INNVILGET',
        } as Behandlingsresultat,
      },
      {
        versjon: 2,
        uuid: '3',
        type: BehandlingTypeEnum.REVURDERING,
        status: BehandlingStatus.OPPRETTET,
        språkkode: 'NB',
        erAktivPapirsoknad: false,
        opprettet: '2017-10-02T02:04:25.455',
        behandlendeEnhetId: '4812',
        behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser Bergen',
        gjeldendeVedtak: false,
        behandlingPåVent: false,
        behandlingHenlagt: false,
        behandlingKøet: false,
        toTrinnsBehandling: false,
      },
      {
        versjon: 2,
        uuid: '4',
        type: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
        status: BehandlingStatus.AVSLUTTET,
        språkkode: 'NB',
        erAktivPapirsoknad: false,
        opprettet: '2017-07-12T02:04:25.455',
        avsluttet: '2017-07-13T02:04:25.455',
        behandlendeEnhetId: '4812',
        behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser Bergen',
        gjeldendeVedtak: false,
        behandlingPåVent: false,
        behandlingHenlagt: false,
        behandlingKøet: false,
        toTrinnsBehandling: false,
        behandlingsresultat: {
          type: 'HENLAGT_SØKNAD_TRUKKET',
        } as Behandlingsresultat,
      },
    ] as BehandlingAppKontekst[],
  },
};

export const IngenBehandlinger: Story = {
  args: {
    behandlinger: [],
  },
};
