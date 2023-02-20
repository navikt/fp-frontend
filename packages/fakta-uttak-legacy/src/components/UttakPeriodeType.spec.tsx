import React from 'react';
import sinon from 'sinon';
import { FormattedMessage } from 'react-intl';
import { Image } from '@navikt/ft-ui-komponenter';

import { shallowWithIntl } from '@navikt/fp-utils-test';

import { UttakPeriodeType } from './UttakPeriodeType';
import messages from '../../i18n/nb_NO.json';

describe('<UttakPeriodeType>', () => {
  const tilDato = '2018-01-10';
  const fraDato = '2018-02-31';
  const id = '7845345-34324-324234-342';
  const arbeidstidprosent = 50;
  const uttakPeriodeType = '';
  const utsettelseArsak = '';
  const openSlettPeriodeModalCallback = sinon.spy();
  const editPeriode = sinon.spy();
  const isAnyFormOpen = sinon.spy();
  const flerbarnsdager = false;
  const samtidigUttak = false;
  const oppholdArsak = '-';
  const getKodeverknavn = () => undefined;

  it('skal vise redigere og slett periode hvis manuellOverstyring er true og readOnly er false', () => {
    const wrapper = shallowWithIntl(<UttakPeriodeType
      editPeriode={editPeriode}
      flerbarnsdager={flerbarnsdager}
      fraDato={fraDato}
      getKodeverknavn={getKodeverknavn}
      id={id}
      isAnyFormOpen={isAnyFormOpen}
      isFromSøknad
      isNyPeriodeFormOpen={false}
      openSlettPeriodeModalCallback={openSlettPeriodeModalCallback}
      oppholdArsak={oppholdArsak}
      overforingArsak=""
      readOnly={false}
      samtidigUttak={samtidigUttak}
      tilDato={tilDato}
      utsettelseArsak={utsettelseArsak}
      uttakPeriodeType={uttakPeriodeType}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);

    const image = wrapper.find(Image);
    expect(image).toHaveLength(2);
  });

  it('skal ikke vise redigere og slett periode hvis det er readonly', () => {
    const wrapper = shallowWithIntl(<UttakPeriodeType
      editPeriode={editPeriode}
      flerbarnsdager={flerbarnsdager}
      fraDato={fraDato}
      getKodeverknavn={getKodeverknavn}
      id={id}
      isAnyFormOpen={isAnyFormOpen}
      isFromSøknad
      isNyPeriodeFormOpen={false}
      openSlettPeriodeModalCallback={openSlettPeriodeModalCallback}
      oppholdArsak={oppholdArsak}
      overforingArsak=""
      readOnly
      samtidigUttak={samtidigUttak}
      tilDato={tilDato}
      utsettelseArsak={utsettelseArsak}
      uttakPeriodeType={uttakPeriodeType}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);

    const image = wrapper.find(Image);
    expect(image).toHaveLength(0);
  });

  it('skal vise frilans når erFrilans er true', () => {
    const wrapper = shallowWithIntl(<UttakPeriodeType
      arbeidstidprosent={arbeidstidprosent}
      editPeriode={editPeriode}
      erFrilanser
      erSelvstendig={false}
      flerbarnsdager={flerbarnsdager}
      fraDato={fraDato}
      getKodeverknavn={getKodeverknavn}
      id={id}
      isAnyFormOpen={isAnyFormOpen}
      isFromSøknad
      isNyPeriodeFormOpen={false}
      openSlettPeriodeModalCallback={openSlettPeriodeModalCallback}
      oppholdArsak={oppholdArsak}
      overforingArsak=""
      readOnly
      samtidigUttak={samtidigUttak}
      tilDato={tilDato}
      utsettelseArsak={utsettelseArsak}
      uttakPeriodeType={uttakPeriodeType}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);

    expect(wrapper.find(FormattedMessage).last().prop('id')).toEqual('UttakInfoPanel.Frilans');
  });
});
