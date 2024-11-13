import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
import { BehandlingAppKontekst, Behandlingsresultat, KodeverkMedNavn } from '@navikt/ft-types';
import { KodeverkType, BehandlingType, BehandlingStatus } from '@navikt/ft-kodeverk';
import { alleKodeverk } from '@navikt/ft-frontend-storybook-utils';

import '@navikt/ft-ui-komponenter/dist/style.css';

import BehandlingVelgerSakIndex from './BehandlingVelgerSakIndex';

const getKodeverkMedNavn = (
  kode: string,
  kodeverk: KodeverkType,
  behandlingType: string = BehandlingType.FORSTEGANGSSOKNAD,
) => {
  const kodeverkForType =
    behandlingType === BehandlingType.TILBAKEKREVING || behandlingType === BehandlingType.TILBAKEKREVING_REVURDERING
      ? // @ts-ignore Fiks
        (alleKodeverk[kodeverk] as KodeverkMedNavn[])
      : // @ts-ignore Fiks
        (alleKodeverk[kodeverk] as KodeverkMedNavn[]);
  if (!kodeverkForType || kodeverkForType.length === 0) {
    throw Error(`Det finnes ingen kodeverk for type ${kodeverk} med kode ${kode}`);
  }
  return kodeverkForType.find(k => k.kode === kode);
};

export default {
  title: 'sak/sak-behandling-velger',
  component: BehandlingVelgerSakIndex,
};

const Template: StoryFn<{
  behandlinger: BehandlingAppKontekst[];
}> = ({ behandlinger }) => {
  const [visAlle, toggleVisAlle] = useState(false);
  return (
    <div style={{ width: '600px' }}>
      <BehandlingVelgerSakIndex
        behandlinger={behandlinger}
        renderRadSomLenke={(className, behandlingInfoKomponent) => (
          <button type="button" className={className} onClick={() => toggleVisAlle(!visAlle)}>
            {behandlingInfoKomponent}
          </button>
        )}
        behandlingUuid="1"
        skalViseAlleBehandlinger={visAlle}
        toggleVisAlleBehandlinger={() => toggleVisAlle(!visAlle)}
        getKodeverkMedNavn={getKodeverkMedNavn}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  behandlinger: [
    {
      versjon: 2,
      uuid: '1',
      type: BehandlingType.FORSTEGANGSSOKNAD,
      status: BehandlingStatus.AVSLUTTET,
      sprakkode: 'NB',
      erAktivPapirsoknad: false,
      opprettet: '2017-08-02T02:04:25.455',
      avsluttet: '2017-08-03T02:04:25.455',
      behandlendeEnhetId: '4812',
      behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser Bergen',
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
    },
    {
      versjon: 2,
      uuid: '2',
      type: BehandlingType.DOKUMENTINNSYN,
      status: BehandlingStatus.OPPRETTET,
      sprakkode: 'NB',
      erAktivPapirsoknad: false,
      opprettet: '2017-08-01T02:04:25.455',
      avsluttet: '2017-08-01T02:04:25.455',
      behandlendeEnhetId: '4812',
      behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser Bergen',
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
    },
    {
      versjon: 2,
      uuid: '3',
      type: BehandlingType.REVURDERING,
      status: BehandlingStatus.OPPRETTET,
      sprakkode: 'NB',
      erAktivPapirsoknad: false,
      opprettet: '2017-10-02T02:04:25.455',
      behandlendeEnhetId: '4812',
      behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser Bergen',
      links: [],
      gjeldendeVedtak: false,
      behandlingPaaVent: false,
      behandlingHenlagt: false,
      behandlingKoet: false,
      toTrinnsBehandling: false,
      behandlingÅrsaker: [],
    },
    {
      versjon: 2,
      uuid: '4',
      type: BehandlingType.FORSTEGANGSSOKNAD,
      status: BehandlingStatus.AVSLUTTET,
      sprakkode: 'NB',
      erAktivPapirsoknad: false,
      opprettet: '2017-07-12T02:04:25.455',
      avsluttet: '2017-07-13T02:04:25.455',
      behandlendeEnhetId: '4812',
      behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser Bergen',
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
    },
  ],
};

export const IngenBehandlinger = Template.bind({});
IngenBehandlinger.args = {
  behandlinger: [],
};
