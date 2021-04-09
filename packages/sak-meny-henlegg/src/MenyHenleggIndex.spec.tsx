import React from 'react';
import sinon from 'sinon';

import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import HenleggBehandlingModal from './components/HenleggBehandlingModal';
import HenlagtBehandlingModal from './components/HenlagtBehandlingModal';
import MenyHenleggIndex from './MenyHenleggIndex';
import messages from '../i18n/nb_NO.json';

describe('<MenyHenleggIndex>', () => {
  it('skal vise modal og så henlegge behandling', () => {
    const henleggBehandlingCallback = sinon.stub().resolves();
    const lukkModalCallback = sinon.spy();

    const wrapper = shallowWithIntl(<MenyHenleggIndex
      behandlingId={3}
      behandlingVersjon={1}
      henleggBehandling={henleggBehandlingCallback}
      forhandsvisHenleggBehandling={sinon.spy()}
      ytelseType={{
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: 'FAGSAK_YTELSE_TYPE',
      }}
      behandlingType={{
        kode: behandlingType.FORSTEGANGSSOKNAD,
        kodeverk: 'BEHANDLING_TYPE',
      }}
      behandlingUuid="2323"
      behandlingResultatTyper={[]}
      gaaTilSokeside={sinon.spy()}
      lukkModal={lukkModalCallback}
    />, messages);

    const modal = wrapper.find(HenleggBehandlingModal);
    expect(modal).toHaveLength(1);
    expect(wrapper.find(HenlagtBehandlingModal)).toHaveLength(0);
    // @ts-ignore fiks denne
    modal.prop('onSubmit')({
      årsakKode: 'test',
      begrunnelse: 'Dette er en begrunnelse',
      fritekst: 'Dette er en fritekst',
    });

    const kall = henleggBehandlingCallback.getCalls();
    expect(kall).toHaveLength(1);
    expect(kall[0].args).toHaveLength(1);
    expect(kall[0].args[0]).toEqual({
      behandlingId: 3,
      behandlingVersjon: 1,
      årsakKode: 'test',
      begrunnelse: 'Dette er en begrunnelse',
      fritekst: 'Dette er en fritekst',
    });
  });
});
