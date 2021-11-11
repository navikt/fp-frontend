import React, { useState } from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { BehandlingAppKontekst, Behandlingsresultat, Kodeverk } from '@fpsak-frontend/types';
import { withRouter, alleKodeverk } from '@fpsak-frontend/storybook-utils';
import BehandlingVelgerSakIndex from './BehandlingVelgerSakIndex';

const BEHANDLING_TYPE_KODEVERK = 'BEHANDLING_TYPE';
const BEHANDLING_STATUS_KODEVERK = 'BEHANDLING_STATUS';

const locationMock = {
  key: '1',
  pathname: 'test',
  search: 'test',
  state: {},
  hash: 'test',
};

const getKodeverkFn = (kodeverk: Kodeverk) => {
  const kodeverkType = KodeverkType[kodeverk.kodeverk as keyof typeof KodeverkType];
  // @ts-ignore
  const kodeverkForType = alleKodeverk[kodeverkType];
  return kodeverkForType.find((k: Kodeverk) => k.kode === kodeverk.kode);
};

export default {
  title: 'sak/sak-behandling-velger',
  component: BehandlingVelgerSakIndex,
  decorators: [withRouter],
};

const Template: Story<{
  behandlinger: BehandlingAppKontekst[];
  noExistingBehandlinger: boolean;
}> = ({
  behandlinger,
  noExistingBehandlinger,
}) => {
  const [visAlle, toggleVisAlle] = useState(false);
  return (
    <div style={{ width: '600px' }}>
      <BehandlingVelgerSakIndex
        behandlinger={behandlinger}
        getBehandlingLocation={() => locationMock}
        noExistingBehandlinger={noExistingBehandlinger}
        behandlingUuid="1"
        showAll={visAlle}
        toggleShowAll={() => toggleVisAlle(!visAlle)}
        getKodeverkFn={getKodeverkFn}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  behandlinger: [{
    versjon: 2,
    uuid: '1',
    type: {
      kode: behandlingType.FORSTEGANGSSOKNAD,
      kodeverk: BEHANDLING_TYPE_KODEVERK,
    },
    status: {
      kode: behandlingStatus.AVSLUTTET,
      kodeverk: BEHANDLING_STATUS_KODEVERK,
    },
    sprakkode: {
      kode: 'NB',
      kodeverk: '',
    },
    erAktivPapirsoknad: false,
    opprettet: '2017-08-02T02:04:25.455',
    avsluttet: '2017-08-03T02:04:25.455',
    behandlendeEnhetId: '4812',
    behandlendeEnhetNavn: 'NAV Familie- og pensjonsytelser Bergen',
    links: [],
    gjeldendeVedtak: true,
    behandlingPaaVent: false,
    behandlingHenlagt: false,
    behandlingKoet: false,
    toTrinnsBehandling: false,
    behandlingsresultat: {
      type: {
        kode: 'AVSLÅTT',
        kodeverk: 'BEHANDLING_RESULTAT_TYPE',
      },
    } as Behandlingsresultat,
    behandlingÅrsaker: [],
  }, {
    versjon: 2,
    uuid: '2',
    type: {
      kode: behandlingType.DOKUMENTINNSYN,
      kodeverk: BEHANDLING_TYPE_KODEVERK,
    },
    status: {
      kode: behandlingStatus.OPPRETTET,
      kodeverk: BEHANDLING_STATUS_KODEVERK,
    },
    sprakkode: {
      kode: 'NB',
      kodeverk: '',
    },
    erAktivPapirsoknad: false,
    opprettet: '2017-08-01T02:04:25.455',
    avsluttet: '2017-08-01T02:04:25.455',
    behandlendeEnhetId: '4812',
    behandlendeEnhetNavn: 'NAV Familie- og pensjonsytelser Bergen',
    links: [],
    gjeldendeVedtak: false,
    behandlingPaaVent: false,
    behandlingHenlagt: false,
    behandlingKoet: false,
    toTrinnsBehandling: false,
    behandlingsresultat: {
      type: {
        kode: 'INNVILGET',
        kodeverk: 'BEHANDLING_RESULTAT_TYPE',
      },
    } as Behandlingsresultat,
    behandlingÅrsaker: [],
  }, {
    versjon: 2,
    uuid: '3',
    type: {
      kode: behandlingType.REVURDERING,
      kodeverk: BEHANDLING_TYPE_KODEVERK,
    },
    status: {
      kode: behandlingStatus.OPPRETTET,
      kodeverk: BEHANDLING_STATUS_KODEVERK,
    },
    sprakkode: {
      kode: 'NB',
      kodeverk: '',
    },
    erAktivPapirsoknad: false,
    opprettet: '2017-10-02T02:04:25.455',
    behandlendeEnhetId: '4812',
    behandlendeEnhetNavn: 'NAV Familie- og pensjonsytelser Bergen',
    links: [],
    gjeldendeVedtak: false,
    behandlingPaaVent: false,
    behandlingHenlagt: false,
    behandlingKoet: false,
    toTrinnsBehandling: false,
    behandlingÅrsaker: [],
  }, {
    versjon: 2,
    uuid: '4',
    type: {
      kode: behandlingType.FORSTEGANGSSOKNAD,
      kodeverk: BEHANDLING_TYPE_KODEVERK,
    },
    status: {
      kode: behandlingStatus.AVSLUTTET,
      kodeverk: BEHANDLING_STATUS_KODEVERK,
    },
    sprakkode: {
      kode: 'NB',
      kodeverk: '',
    },
    erAktivPapirsoknad: false,
    opprettet: '2017-07-12T02:04:25.455',
    avsluttet: '2017-07-13T02:04:25.455',
    behandlendeEnhetId: '4812',
    behandlendeEnhetNavn: 'NAV Familie- og pensjonsytelser Bergen',
    links: [],
    gjeldendeVedtak: false,
    behandlingPaaVent: false,
    behandlingHenlagt: false,
    behandlingKoet: false,
    toTrinnsBehandling: false,
    behandlingÅrsaker: [],
    behandlingsresultat: {
      type: {
        kode: 'HENLAGT_SØKNAD_TRUKKET',
        kodeverk: 'BEHANDLING_RESULTAT_TYPE',
      },
    } as Behandlingsresultat,
  }],
  noExistingBehandlinger: false,
};

export const IngenBehandlinger = Template.bind({});
IngenBehandlinger.args = {
  behandlinger: [],
  noExistingBehandlinger: true,
};
