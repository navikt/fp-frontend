import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from 'nav-frontend-modal';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { Behandling } from '@fpsak-frontend/types';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';

import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';
import BeslutterModalIndex from './BeslutterModalIndex';

describe('<BeslutterModalIndex>', () => {
  Modal.setAppElement('body');
  const behandling = {
    uuid: '1',
    versjon: 2,
    type: {
      kode: behandlingType.FORSTEGANGSSOKNAD,
      kodeverk: '',
    },
    status: {
      kode: behandlingStatus.FATTER_VEDTAK,
      kodeverk: '',
    },
    behandlingsresultat: {
      type: {
        kode: behandlingResultatType.OPPHOR,
        kodeverk: '',
      },
    },
  } as Behandling;

  it('skal vise modal når beslutter sender tilbake til ny vurdering', async () => {
    const data = [
      { key: FpsakApiKeys.HAR_REVURDERING_SAMME_RESULTAT.name, data: { harRevurderingSammeResultat: true } },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <BeslutterModalIndex
          behandling={behandling}
          pushLocation={jest.fn()}
          allAksjonspunktApproved
          erKlageWithKA={false}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Resultat: Ingen endring, behandlingen avsluttes')).toBeInTheDocument();
  });

  it('skal vise modal men ikke hente data når en ikke har url', async () => {
    render(
      <BeslutterModalIndex
        behandling={behandling}
        pushLocation={jest.fn()}
        allAksjonspunktApproved
        erKlageWithKA={false}
      />,
    );

    expect(await screen.findByText('Vedtaket er opphørt.')).toBeInTheDocument();
  });
});
