import React from 'react';
import { expect } from 'chai';
import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';
import sinon from 'sinon';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { FamilieHendelseSamling } from '@fpsak-frontend/types';

import UttakPeriode from './UttakPeriode';
import UttakPeriodeType from './UttakPeriodeType';
import UttakPeriodeInnhold from './UttakPeriodeInnhold';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-fakta-uttak';
import CustomUttakKontrollerFaktaPerioder from '../CustomUttakKontrollerFaktaPerioderTsType';

const getMockedFields = (fieldNames: any, perioder: any): FieldArrayFieldsProps<any> => {
  const field = {
    get: (idx: any) => perioder[idx],
  };
  return {
    map: (callback: any) => fieldNames.map((fieldname: any, idx: any) => callback(fieldname, idx, field)),
  } as FieldArrayFieldsProps<any>;
};

const fieldNames = ['periode[0]', 'periode[1]'];
const perioder = [{
  id: '345435345-34235-344',
  tom: '2017-10-10',
  fom: '2017-01-01',
  uttakPeriodeType: {},
  bekreftet: true,
  utsettelseÅrsak: {},
  overføringÅrsak: {},
  oppholdÅrsak: {
    kode: '-',
  },
  openForm: false,
  isFromSøknad: true,
  erArbeidstaker: false,
  samtidigUttak: false,
  flerbarnsdager: false,
  arbeidsgiver: {},
}, {
  id: '32434-334534-222',
  tom: '2018-10-10',
  fom: '2018-10-01',
  uttakPeriodeType: {},
  bekreftet: false,
  utsettelseÅrsak: {},
  overføringÅrsak: {},
  oppholdÅrsak: {
    kode: '-',
  },
  openForm: true,
  isFromSøknad: true,
  erArbeidstaker: true,
  samtidigUttak: false,
  flerbarnsdager: false,
  arbeidsgiverReferanse: '',
}] as CustomUttakKontrollerFaktaPerioder[];

const openSlettPeriodeModalCallback = sinon.spy();
const updatePeriode = sinon.spy();
const editPeriode = sinon.spy();
const cancelEditPeriode = sinon.spy();
const isAnyFormOpen = sinon.spy();
const meta = {
  error: undefined,
} as FieldArrayMetaProps;
const endringsdato = '2018-08-01';

describe('<UttakPeriode>', () => {
  it('skal vise UttakPeriode', () => {
    const wrapper = shallowWithIntl(<UttakPeriode.WrappedComponent
      intl={intlMock}
      fields={getMockedFields(fieldNames, perioder)}
      meta={meta}
      openSlettPeriodeModalCallback={openSlettPeriodeModalCallback}
      updatePeriode={updatePeriode}
      editPeriode={editPeriode}
      cancelEditPeriode={cancelEditPeriode}
      isAnyFormOpen={isAnyFormOpen}
      readOnly
      perioder={perioder}
      isNyPeriodeFormOpen
      vilkarForSykdomExists={false}
      endringsdato={endringsdato}
      getKodeverknavn={sinon.spy()}
      behandlingVersjon={1}
      behandlingId={1}
      behandlingStatus={{
        kode: '1',
        kodeverk: '1',
      }}
      familiehendelse={{} as FamilieHendelseSamling}
      sisteUttakdatoFørsteSeksUker={{} as moment.Moment}
      arbeidsgiverOpplysningerPerId={{}}
    />);
    const uttakPeriodeType = wrapper.find(UttakPeriodeType);
    expect(uttakPeriodeType).to.have.length(2);
    const uttakPeriodeInnhold = wrapper.find(UttakPeriodeInnhold);
    expect(uttakPeriodeInnhold).to.have.length(2);
  });

  it('skal ikke gi class active til perioder som er bekreftet,', () => {
    const wrapper = shallowWithIntl(<UttakPeriode.WrappedComponent
      intl={intlMock}
      fields={getMockedFields(fieldNames, perioder)}
      meta={meta}
      openSlettPeriodeModalCallback={openSlettPeriodeModalCallback}
      updatePeriode={updatePeriode}
      editPeriode={editPeriode}
      cancelEditPeriode={cancelEditPeriode}
      isAnyFormOpen={isAnyFormOpen}
      readOnly
      perioder={perioder}
      isNyPeriodeFormOpen
      vilkarForSykdomExists={false}
      endringsdato={endringsdato}
      getKodeverknavn={sinon.spy()}
      behandlingVersjon={1}
      behandlingId={1}
      behandlingStatus={{
        kode: '1',
        kodeverk: '1',
      }}
      familiehendelse={{} as FamilieHendelseSamling}
      sisteUttakdatoFørsteSeksUker={{} as moment.Moment}
      arbeidsgiverOpplysningerPerId={{}}
    />);

    const periodeContainer = wrapper.find('div.periodeContainer');
    expect(periodeContainer.at(0).hasClass('active')).to.equal(false);
  });

  it('skal gi class active til perioder som er ikke bekreftet og ikke readOnly,', () => {
    const wrapper = shallowWithIntl(<UttakPeriode.WrappedComponent
      intl={intlMock}
      fields={getMockedFields(fieldNames, perioder)}
      meta={meta}
      openSlettPeriodeModalCallback={openSlettPeriodeModalCallback}
      updatePeriode={updatePeriode}
      editPeriode={editPeriode}
      cancelEditPeriode={cancelEditPeriode}
      isAnyFormOpen={isAnyFormOpen}
      readOnly={false}
      perioder={perioder}
      isNyPeriodeFormOpen
      vilkarForSykdomExists={false}
      endringsdato={endringsdato}
      getKodeverknavn={sinon.spy()}
      behandlingVersjon={1}
      behandlingId={1}
      behandlingStatus={{
        kode: '1',
        kodeverk: '1',
      }}
      familiehendelse={{} as FamilieHendelseSamling}
      sisteUttakdatoFørsteSeksUker={{} as moment.Moment}
      arbeidsgiverOpplysningerPerId={{}}
    />);

    const periodeContainer = wrapper.find('div.periodeContainer');
    expect(periodeContainer.at(1).hasClass('active')).to.equal(true);
  });

  it('skal vise alert hvis det er noe error', () => {
    const otherProps = {
      meta: {
        error: 'Perioder overlapper',
      } as FieldArrayMetaProps,
    };
    const wrapper = shallowWithIntl(<UttakPeriode.WrappedComponent
      intl={intlMock}
      fields={getMockedFields(fieldNames, perioder)}
      openSlettPeriodeModalCallback={openSlettPeriodeModalCallback}
      updatePeriode={updatePeriode}
      editPeriode={editPeriode}
      cancelEditPeriode={cancelEditPeriode}
      isAnyFormOpen={isAnyFormOpen}
      readOnly={false}
      perioder={perioder}
      isNyPeriodeFormOpen
      vilkarForSykdomExists={false}
      endringsdato={endringsdato}
      getKodeverknavn={sinon.spy()}
      behandlingVersjon={1}
      behandlingId={1}
      behandlingStatus={{
        kode: '1',
        kodeverk: '1',
      }}
      familiehendelse={{} as FamilieHendelseSamling}
      sisteUttakdatoFørsteSeksUker={{} as moment.Moment}
      arbeidsgiverOpplysningerPerId={{}}
      {...otherProps}
    />);

    const periodeContainer = wrapper.find('div.periodeContainer');
    const alertStripe = wrapper.find('AlertStripe');
    expect(periodeContainer.at(1).hasClass('active')).to.equal(true);
    expect(alertStripe).to.have.length(1);
  });
});
