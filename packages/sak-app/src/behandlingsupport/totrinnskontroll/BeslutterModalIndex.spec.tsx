import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { FatterVedtakTotrinnskontrollModalSakIndex } from '@fpsak-frontend/sak-totrinnskontroll';
import { Behandling } from '@fpsak-frontend/types';

import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';
import BeslutterModalIndex from './BeslutterModalIndex';

describe('<BeslutterModalIndex>', () => {
  const behandling = {
    id: 1,
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

  it('skal vise modal når beslutter godkjenner', () => {
    requestApi.mock(FpsakApiKeys.HAR_REVURDERING_SAMME_RESULTAT, {
      harRevurderingSammeResultat: true,
    });

    const wrapper = shallow(<BeslutterModalIndex
      behandling={behandling}
      pushLocation={sinon.spy()}
      allAksjonspunktApproved={false}
      erKlageWithKA={false}
    />);

    const modal = wrapper.find(FatterVedtakTotrinnskontrollModalSakIndex);
    expect(modal).toHaveLength(1);
    expect(modal.prop('harSammeResultatSomOriginalBehandling')).toBe(true);
  });

  it('skal vise modal men ikke hente data når en ikke har url', () => {
    requestApi.mock(FpsakApiKeys.HAR_REVURDERING_SAMME_RESULTAT, {
      harRevurderingSammeResultat: true,
    });
    requestApi.setMissingPath(FpsakApiKeys.HAR_REVURDERING_SAMME_RESULTAT);

    const wrapper = shallow(<BeslutterModalIndex
      behandling={behandling}
      pushLocation={sinon.spy()}
      allAksjonspunktApproved={false}
      erKlageWithKA={false}
    />);

    const modal = wrapper.find(FatterVedtakTotrinnskontrollModalSakIndex);
    expect(modal).toHaveLength(1);
    expect(modal.prop('harSammeResultatSomOriginalBehandling')).toBeUndefined();
  });
});
