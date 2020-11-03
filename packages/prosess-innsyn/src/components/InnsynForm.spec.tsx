import React from 'react';
import { expect } from 'chai';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import innsynResultatTyperKV from '@fpsak-frontend/kodeverk/src/innsynResultatType';

import { InnsynFormImpl } from './InnsynForm';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-prosess-innsyn';

describe('<InnsynForm>', () => {
  it('skal vise radioknapper for valg av sett på vent når innvilget', () => {
    const wrapper = shallowWithIntl(<InnsynFormImpl
      {...reduxFormPropsMock}
      readOnly={false}
      readOnlySubmitButton={false}
      innsynResultatTyper={[{ kode: innsynResultatTyperKV.INNVILGET, kodeverk: '', navn: 'navnTest' }]}
      innsynResultatTypeKode={innsynResultatTyperKV.INNVILGET}
      behandlingTypes={[{ kode: 'kodeTest', kodeverk: '', navn: 'navnTest' }]}
      saksNr={123}
      documents={[]}
      vedtaksdokumenter={[]}
      isApOpen
      behandlingId={1}
      behandlingVersjon={2}
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
      alleKodeverk={{}}
      submitCallback={() => undefined}
    />);

    const settPaVentRadio = wrapper.find('[name="sattPaVent"]');
    expect(settPaVentRadio).to.have.length(1);
  });

  it('skal ikke vise radioknapper for valg av sett på vent når innvilget', () => {
    const wrapper = shallowWithIntl(<InnsynFormImpl
      {...reduxFormPropsMock}
      readOnly={false}
      readOnlySubmitButton={false}
      innsynResultatTyper={[{ kode: innsynResultatTyperKV.AVVIST, kodeverk: '', navn: 'navnTest' }]}
      innsynResultatTypeKode={innsynResultatTyperKV.AVVIST}
      behandlingTypes={[{ kode: 'kodeTest', kodeverk: '', navn: 'navnTest' }]}
      saksNr={123}
      documents={[]}
      vedtaksdokumenter={[]}
      isApOpen
      behandlingId={1}
      behandlingVersjon={2}
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
      alleKodeverk={{}}
      submitCallback={() => undefined}
    />);

    const settPaVentRadio = wrapper.find('[name="sattPaVent"]');
    expect(settPaVentRadio).to.have.length(0);
  });
});
