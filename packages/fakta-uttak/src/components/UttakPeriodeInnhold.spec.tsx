import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { FamilieHendelseSamling, Kodeverk } from '@fpsak-frontend/types';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import { UttakPeriodeInnhold } from './UttakPeriodeInnhold';

import messages from '../../i18n/nb_NO.json';

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
    const wrapper = shallow(<UttakPeriodeInnhold
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
      getKodeverknavn={sinon.spy()}
      sisteUttakdatoFørsteSeksUker={{} as moment.Moment}
      intl={getIntlMock(messages)}
    />);

    const verticalSpacer = wrapper.find(VerticalSpacer);
    expect(verticalSpacer).toHaveLength(1);
  });
});
