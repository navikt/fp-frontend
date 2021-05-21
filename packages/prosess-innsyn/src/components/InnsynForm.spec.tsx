import React from 'react';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import innsynResultatTyperKV from '@fpsak-frontend/kodeverk/src/innsynResultatType';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import { InnsynFormImpl } from './InnsynForm';
import messages from '../../i18n/nb_NO.json';
import { AlleKodeverk } from 'types';

const intlMock = getIntlMock(messages);

describe('<InnsynForm>', () => {
  it('skal vise radioknapper for valg av sett på vent når innvilget', () => {
    const wrapper = shallowWithIntl(<InnsynFormImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      readOnlySubmitButton={false}
      innsynResultatTyper={[{ kode: innsynResultatTyperKV.INNVILGET, kodeverk: '', navn: 'navnTest' }]}
      innsynResultatTypeKode={innsynResultatTyperKV.INNVILGET}
      behandlingTypes={[{ kode: 'kodeTest', kodeverk: '', navn: 'navnTest' }]}
      saksNr="123"
      documents={[]}
      vedtaksdokumenter={[]}
      isApOpen
      behandlingPaaVent={false}
      innsynMottattDato=""
      innsynDokumenter={[]}
      innsynResultatType={{
        kode: innsynResultatTyperKV.INNVILGET,
        kodeverk: '',
      }}
      vedtaksdokumentasjon={[]}
      alleDokumenter={[]}
      aksjonspunkter={[]}
      alleKodeverk={{} as AlleKodeverk}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      initialValues={{
        mottattDato: '',
        innsynResultatType: '',
      }}
    />, messages);

    const settPaVentRadio = wrapper.find('[name="sattPaVent"]');
    expect(settPaVentRadio).toHaveLength(1);
  });

  it('skal ikke vise radioknapper for valg av sett på vent når innvilget', () => {
    const wrapper = shallowWithIntl(<InnsynFormImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      readOnlySubmitButton={false}
      innsynResultatTyper={[{ kode: innsynResultatTyperKV.AVVIST, kodeverk: '', navn: 'navnTest' }]}
      innsynResultatTypeKode={innsynResultatTyperKV.AVVIST}
      behandlingTypes={[{ kode: 'kodeTest', kodeverk: '', navn: 'navnTest' }]}
      saksNr="123"
      documents={[]}
      vedtaksdokumenter={[]}
      isApOpen
      behandlingPaaVent={false}
      innsynMottattDato=""
      innsynDokumenter={[]}
      innsynResultatType={{
        kode: innsynResultatTyperKV.AVVIST,
        kodeverk: '',
      }}
      vedtaksdokumentasjon={[]}
      alleDokumenter={[]}
      aksjonspunkter={[]}
      alleKodeverk={{} as AlleKodeverk}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      initialValues={{
        mottattDato: '',
        innsynResultatType: '',
      }}
    />, messages);

    const settPaVentRadio = wrapper.find('[name="sattPaVent"]');
    expect(settPaVentRadio).toHaveLength(0);
  });
});
