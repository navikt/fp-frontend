import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { AksjonspunktHelpTextHTML } from '@fpsak-frontend/shared-components';

import { AktivitetskravFaktaForm } from './AktivitetskravFaktaForm';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-fakta-aktivitetskrav';
import AktivitetskravFaktaTabell from './AktivitetskravFaktaTabell';
import AktivitetskravFaktaDetailForm from './AktivitetskravFaktaDetailForm';

describe('<AktivitetskravFaktaForm>', () => {
  const aktivitetskravAvklaringer = [{
    kode: 'avklaring 1',
    navn: 'Dette er testavklaring 1',
    kodeverk: 'AVKLARING',
  }, {
    kode: 'avklaring 2',
    navn: 'Dette er testavklaring 2',
    kodeverk: 'AVKLARING',
  }];

  it('skal vise tabell med aktivitetskrav', () => {
    const sorterteAktivitetskrav = [{
      fom: '2021-01-01',
      tom: '2021-01-07',
      avklaring: {
        kode: 'avklaring 1',
        kodeverk: 'AVKLARING',
      },
      begrunnelse: 'Dette er en beskrivelse',
    }, {
      fom: '2021-01-08',
      tom: '2021-01-14',
    }];

    const wrapper = shallowWithIntl(<AktivitetskravFaktaForm
      {...reduxFormPropsMock}
      intl={intlMock}
      behandlingId={1}
      behandlingVersjon={2}
      sorterteAktivitetskrav={sorterteAktivitetskrav}
      aktivitetskrav={sorterteAktivitetskrav}
      readOnly={false}
      aktivitetskravAvklaringer={aktivitetskravAvklaringer}
      initialValues={{ aktivitetskrav: sorterteAktivitetskrav }}
      onSubmit={() => undefined}
      harApneAksjonspunkter
      alleMerknaderFraBeslutter={{}}
      submittable
      behandlingFormPrefix="test"
      formChange={() => undefined}
    />);

    const hjelpetekst = wrapper.find(AksjonspunktHelpTextHTML);
    expect(hjelpetekst).to.have.length(1);
    expect(hjelpetekst.childAt(0).text()).to.eql('Kontroller kravet til mors aktivitet');

    expect(wrapper.find(AktivitetskravFaktaTabell)).to.have.length(1);
  });

  it('skal vise detaljvindu når en velger periode i tabell og så lagre periode', () => {
    const sorterteAktivitetskrav = [{
      fom: '2021-01-01',
      tom: '2021-01-07',
      avklaring: {
        kode: 'avklaring 1',
        kodeverk: 'AVKLARING',
      },
      begrunnelse: 'Dette er en beskrivelse',
    }, {
      fom: '2021-01-08',
      tom: '2021-01-14',
    }];

    const formChange = sinon.spy();

    const wrapper = shallowWithIntl(<AktivitetskravFaktaForm
      {...reduxFormPropsMock}
      intl={intlMock}
      behandlingId={1}
      behandlingVersjon={2}
      sorterteAktivitetskrav={sorterteAktivitetskrav}
      aktivitetskrav={sorterteAktivitetskrav}
      readOnly={false}
      aktivitetskravAvklaringer={aktivitetskravAvklaringer}
      initialValues={{ aktivitetskrav: sorterteAktivitetskrav }}
      onSubmit={() => undefined}
      harApneAksjonspunkter
      alleMerknaderFraBeslutter={{}}
      submittable
      behandlingFormPrefix="test"
      formChange={formChange}
    />);

    expect(wrapper.find(AktivitetskravFaktaDetailForm)).to.have.length(0);

    const velgAktivitetskrav = wrapper.find(AktivitetskravFaktaTabell).prop('velgAktivitetskrav');
    velgAktivitetskrav(undefined, undefined, sorterteAktivitetskrav[1]);

    const detaljeform = wrapper.find(AktivitetskravFaktaDetailForm);
    expect(detaljeform).to.have.length(1);

    const endretPeriode = {
      fom: '2021-01-08',
      tom: '2021-01-14',
      avklaring: {
        kode: 'avklaring 2',
        kodeverk: 'AVKLARING',
      },
      begrunnelse: 'Dette er en ny beskrivelse',
    };

    detaljeform.prop('oppdaterAktivitetskrav')(endretPeriode);

    expect(formChange.called).is.true;
    const { args } = formChange.getCalls()[0];
    expect(args).has.length(3);
    expect(args[2]).is.eql([sorterteAktivitetskrav[0], endretPeriode]);
  });
});
