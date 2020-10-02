import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { FamilieHendelseSamling, Kodeverk } from '@fpsak-frontend/types';

import { UttakPeriodeInnhold } from './UttakPeriodeInnhold';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-fakta-uttak';

const behandlingStatusKode = behandlingStatus.BEHANDLING_UTREDES;

const periode = {
  tom: '10-10-2017',
  fom: '01-10-2017',
};

describe('<UttakPeriodeInnhold>', () => {
  const utsettelseArsak = {};
  const fieldId = '';
  const id = '';
  const updatePeriode = sinon.spy();
  const cancelEditPeriode = sinon.spy();

  it('skal vise UttakPeriodeInnhold', () => {
    const wrapper = shallowWithIntl(<UttakPeriodeInnhold
      fieldId={fieldId}
      utsettelseArsak={utsettelseArsak as Kodeverk}
      overforingArsak={{} as Kodeverk}
      updatePeriode={updatePeriode}
      id={id}
      cancelEditPeriode={cancelEditPeriode}
      readOnly
      fraDato={periode.fom}
      tilDato={periode.tom}
      bekreftet
      openForm
      uttakPeriodeType={{} as Kodeverk}
      behandlingStatusKode={behandlingStatusKode}
      farSøkerFør6Uker={false}
      familiehendelse={{} as FamilieHendelseSamling}
      vilkarForSykdomExists={false}
      behandlingId={1}
      behandlingVersjon={1}
      getKodeverknavn={sinon.spy()}
      sisteUttakdatoFørsteSeksUker={{} as moment.Moment}
    />);

    const verticalSpacer = wrapper.find(VerticalSpacer);
    expect(verticalSpacer).to.have.length(1);
  });
});
