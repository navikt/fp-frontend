import React from 'react';
import sinon from 'sinon';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { AksjonspunktHelpTextHTML } from '@fpsak-frontend/shared-components';

import { AktivitetskravFaktaForm } from './AktivitetskravFaktaForm';
import messages from '../../i18n/nb_NO.json';
import AktivitetskravFaktaTabell from './AktivitetskravFaktaTabell';
import AktivitetskravFaktaDetailForm from './AktivitetskravFaktaDetailForm';

const intlMock = getIntlMock(messages);

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

  const morsAktiviteter = [{
    kode: 'mors aktivitet 1',
    navn: 'Dette er mors aktivitet 1',
    kodeverk: 'MORS_AKTIVITET',
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
      morsAktivitet: {
        kode: 'mors aktivitet 1',
        kodeverk: 'MORS_AKTIVITET',
      },
      endret: false,
    }, {
      fom: '2021-01-08',
      tom: '2021-01-14',
      morsAktivitet: {
        kode: 'mors aktivitet 1',
        kodeverk: 'MORS_AKTIVITET',
      },
      endret: false,
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
      morsAktiviteter={morsAktiviteter}
      initialValues={{ aktivitetskrav: sorterteAktivitetskrav }}
      onSubmit={() => undefined}
      harApneAksjonspunkter
      alleMerknaderFraBeslutter={{}}
      submittable
      behandlingFormPrefix="test"
      formChange={() => undefined}
      submitCallback={() => undefined}
    />, messages);

    const hjelpetekst = wrapper.find(AksjonspunktHelpTextHTML);
    expect(hjelpetekst).toHaveLength(1);
    expect(hjelpetekst.childAt(0).text()).toEqual('Kontroller kravet til mors aktivitet');

    expect(wrapper.find(AktivitetskravFaktaTabell)).toHaveLength(1);
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
      morsAktivitet: {
        kode: 'mors aktivitet 1',
        kodeverk: 'MORS_AKTIVITET',
      },
      endret: false,
    }, {
      fom: '2021-01-08',
      tom: '2021-01-14',
      morsAktivitet: {
        kode: 'mors aktivitet 1',
        kodeverk: 'MORS_AKTIVITET',
      },
      endret: false,
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
      morsAktiviteter={morsAktiviteter}
      initialValues={{ aktivitetskrav: sorterteAktivitetskrav }}
      onSubmit={() => undefined}
      harApneAksjonspunkter
      alleMerknaderFraBeslutter={{}}
      submittable
      behandlingFormPrefix="test"
      formChange={formChange}
      submitCallback={() => undefined}
    />, messages);

    expect(wrapper.find(AktivitetskravFaktaDetailForm)).toHaveLength(0);

    const velgAktivitetskrav = wrapper.find(AktivitetskravFaktaTabell).prop('velgAktivitetskrav');
    velgAktivitetskrav(undefined, undefined, sorterteAktivitetskrav[1]);

    const detaljeform = wrapper.find(AktivitetskravFaktaDetailForm);
    expect(detaljeform).toHaveLength(1);

    const endretPeriode = {
      fom: '2021-01-08',
      tom: '2021-01-14',
      avklaring: {
        kode: 'avklaring 2',
        kodeverk: 'AVKLARING',
      },
      begrunnelse: 'Dette er en ny beskrivelse',
      morsAktivitet: {
        kode: 'mors aktivitet 1',
        kodeverk: 'MORS_AKTIVITET',
      },
      endret: false,
    };

    detaljeform.prop('oppdaterAktivitetskrav')(endretPeriode);

    expect(formChange.called).toBe(true);
    const { args } = formChange.getCalls()[0];
    expect(args).toHaveLength(3);
    expect(args[2]).toEqual([sorterteAktivitetskrav[0], endretPeriode]);
  });
});
