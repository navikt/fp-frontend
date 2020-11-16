import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { RadioGroupField } from '@fpsak-frontend/form';
import uttakPeriodeVurdering from '@fpsak-frontend/kodeverk/src/uttakPeriodeVurdering';
import { FamilieHendelse } from '@fpsak-frontend/types';

import { SykdomOgSkadePeriode } from './SykdomOgSkadePeriode';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-fakta-uttak';

const dokumentertePerioder = [];
const periode = {
  tom: '10-10-2017',
  fom: '01-10-2017',
};
const behandlingStatusKode = '';

describe('<SykdomOgSkadePeriode>', () => {
  it('skal vise sykdom og skade periode', () => {
    const wrapper = shallowWithIntl(<SykdomOgSkadePeriode
      fieldId="periode[0]"
      tilDato={periode.tom}
      fraDato={periode.fom}
      resultat={uttakPeriodeVurdering.PERIODE_IKKE_VURDERT}
      updatePeriode={sinon.spy()}
      cancelEditPeriode={sinon.spy()}
      id="2018-06-02|2018-06-25"
      updated
      bekreftet
      dokumentertePerioder={dokumentertePerioder}
      {...reduxFormPropsMock}
      readOnly={false}
      behandlingStatusKode={behandlingStatusKode}
      behandlingId={1}
      behandlingVersjon={2}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      vilkarForSykdomExists
    />);

    const undertekst = wrapper.find('Undertekst');
    const radioGroupField = wrapper.find('RadioGroupField');
    const radioGroupFieldComponent = wrapper.find(RadioGroupField).dive();
    expect(radioGroupFieldComponent.children()).to.have.length(2);
    expect(undertekst).to.have.length(1);
    expect(radioGroupField).to.have.length(1);
  });

  it('Skal vise tekstfelt hvis resultat er true', () => {
    const wrapper = shallowWithIntl(<SykdomOgSkadePeriode
      fieldId="periode[0]"
      tilDato={periode.tom}
      fraDato={periode.fom}
      resultat={uttakPeriodeVurdering.PERIODE_OK}
      updatePeriode={sinon.spy()}
      cancelEditPeriode={sinon.spy()}
      id="2018-06-02|2018-06-25"
      dokumentertePerioder={dokumentertePerioder}
      updated
      bekreftet
      behandlingStatusKode={behandlingStatusKode}
      {...reduxFormPropsMock}
      readOnly={false}
      behandlingId={1}
      behandlingVersjon={2}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      vilkarForSykdomExists
    />);
    const textAreaField = wrapper.find('TextAreaField');
    expect(textAreaField).to.have.length(1);
  });
});
