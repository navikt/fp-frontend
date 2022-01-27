import React, { useState } from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { BehandlingAppKontekst, Behandlingsresultat } from '@fpsak-frontend/types';
import { withRouter, alleKodeverk } from '@fpsak-frontend/storybook-utils';
import BehandlingVelgerSakIndex from './BehandlingVelgerSakIndex';

const locationMock = {
  key: '1',
  pathname: 'test',
  search: 'test',
  state: {},
  hash: 'test',
};

const getKodeverkFn = (kode: string, kodeverk: KodeverkType, behandlingType: string = BehandlingType.FORSTEGANGSSOKNAD) => {
  const kodeverkForType = behandlingType === BehandlingType.TILBAKEKREVING || behandlingType === BehandlingType.TILBAKEKREVING_REVURDERING
    ? alleKodeverk[kodeverk] : alleKodeverk[kodeverk];
  if (!kodeverkForType || kodeverkForType.length === 0) {
    throw Error(`Det finnes ingen kodeverk for type ${kodeverk} med kode ${kode}`);
  }
  return kodeverkForType.find((k) => k.kode === kode);
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
    type: BehandlingType.FORSTEGANGSSOKNAD,
    status: behandlingStatus.AVSLUTTET,
    sprakkode: 'NB',
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
      type: 'AVSLÅTT',
    } as Behandlingsresultat,
    behandlingÅrsaker: [],
  }, {
    versjon: 2,
    uuid: '2',
    type: BehandlingType.DOKUMENTINNSYN,
    status: behandlingStatus.OPPRETTET,
    sprakkode: 'NB',
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
      type: 'INNVILGET',
    } as Behandlingsresultat,
    behandlingÅrsaker: [],
  }, {
    versjon: 2,
    uuid: '3',
    type: BehandlingType.REVURDERING,
    status: behandlingStatus.OPPRETTET,
    sprakkode: 'NB',
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
    type: BehandlingType.FORSTEGANGSSOKNAD,
    status: behandlingStatus.AVSLUTTET,
    sprakkode: 'NB',
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
      type: 'HENLAGT_SØKNAD_TRUKKET',
    } as Behandlingsresultat,
  }],
  noExistingBehandlinger: false,
};

export const IngenBehandlinger = Template.bind({});
IngenBehandlinger.args = {
  behandlinger: [],
  noExistingBehandlinger: true,
};
