import React from 'react';
import { render, screen } from '@testing-library/react';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { Behandling } from '@fpsak-frontend/types';

import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';
import BeslutterModalIndex from './BeslutterModalIndex';

describe('<BeslutterModalIndex>', () => {
  const behandling = {
    uuid: '1',
    versjon: 2,
    behandlingsresultat: {},
    type: {
      kode: behandlingType.FORSTEGANGSSOKNAD,
      kodeverk: '',
    },
    status: {
      kode: behandlingStatus.OPPRETTET,
      kodeverk: '',
    },
  } as Behandling;

  it('skal vise modal når beslutter godkjenner', async () => {
    const data = [
      { key: FpsakApiKeys.HAR_REVURDERING_SAMME_RESULTAT.name, data: { harRevurderingSammeResultat: true } },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <BeslutterModalIndex
          behandling={behandling}
          pushLocation={jest.fn()}
          allAksjonspunktApproved={false}
          erKlageWithKA={false}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();

    // const modal = wrapper.find(FatterVedtakTotrinnskontrollModalSakIndex);
    // expect(modal).toHaveLength(1);
    // expect(modal.prop('harSammeResultatSomOriginalBehandling')).toBe(true);
  });

  it('skal vise modal men ikke hente data når en ikke har url', async () => {
    const data = [
      { key: FpsakApiKeys.HAR_REVURDERING_SAMME_RESULTAT.name, data: { harRevurderingSammeResultat: true } },
    ];
    // requestApi.setMissingPath(FpsakApiKeys.HAR_REVURDERING_SAMME_RESULTAT.name);

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <BeslutterModalIndex
          behandling={behandling}
          pushLocation={jest.fn()}
          allAksjonspunktApproved={false}
          erKlageWithKA={false}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();

    // const modal = wrapper.find(FatterVedtakTotrinnskontrollModalSakIndex);
    // expect(modal).toHaveLength(1);
    // expect(modal.prop('harSammeResultatSomOriginalBehandling')).toBeUndefined();
  });
});
