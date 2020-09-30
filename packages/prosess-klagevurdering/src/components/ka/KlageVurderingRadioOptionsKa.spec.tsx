import React from 'react';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { expect } from 'chai';

import klageVurdering from '@fpsak-frontend/kodeverk/src/klageVurdering';
import { KlageVurderingRadioOptionsKa } from './KlageVurderingRadioOptionsKa';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-prosess-klagevurdering';

describe('<KlageVurderingRadioOptionsKaImpl>', () => {
  const medholdReasons = [
    { kode: 'NYE_OPPLYSNINGER', navn: 'Nytt faktum', kodeverk: 'KLAGE_MEDHOLD_AARSAK' },
    { kode: 'ULIK_REGELVERKSTOLKNING', navn: 'Feil lovanvendelse', kodeverk: 'KLAGE_MEDHOLD_AARSAK' },
    { kode: 'ULIK_VURDERING', navn: 'Ulik skjønnsvurdering', kodeverk: 'KLAGE_MEDHOLD_AARSAK' },
    { kode: 'PROSESSUELL_FEIL', navn: 'Saksbehandlingsfeil', kodeverk: 'KLAGE_MEDHOLD_AARSAK' },
  ];

  it('skal vise fire options når klage stadfestet', () => {
    const wrapper = shallowWithIntl(<KlageVurderingRadioOptionsKa
      readOnly={false}
      medholdReasons={medholdReasons}
      klageVurdering={{ kode: klageVurdering.STADFESTE_YTELSESVEDTAK, kodeverk: '' }}
      intl={intlMock}
    />);
    const radios = wrapper.find('RadioOption');
    expect(radios).to.have.length(4);
    expect(radios.at(0).prop('label').id).to.equal('Klage.ResolveKlage.KeepVedtakNk');
    expect(radios.at(1).prop('label').id).to.equal('Klage.ResolveKlage.ChangeVedtak');
    expect(radios.at(2).prop('label').id).to.equal('Klage.Behandle.Hjemsendt');
    expect(radios.at(3).prop('label').id).to.equal('Klage.ResolveKlage.NullifyVedtak');
  });

  it('skal vise syv options når aksjonspunkt er NK og klage medhold', () => {
    const wrapper = shallowWithIntl(<KlageVurderingRadioOptionsKa
      readOnly={false}
      medholdReasons={medholdReasons}
      klageVurdering={{ kode: klageVurdering.MEDHOLD_I_KLAGE, kodeverk: '' }}
      intl={intlMock}
    />);
    const radios = wrapper.find('RadioOption');
    expect(radios).to.have.length(7);
    expect(radios.at(0).prop('label').id).to.equal('Klage.ResolveKlage.KeepVedtakNk');
    expect(radios.at(1).prop('label').id).to.equal('Klage.ResolveKlage.ChangeVedtak');
    expect(radios.at(2).prop('label').id).to.equal('Klage.Behandle.Hjemsendt');
    expect(radios.at(3).prop('label').id).to.equal('Klage.ResolveKlage.NullifyVedtak');
    expect(radios.at(4).prop('label').id).to.equal('Klage.Behandle.Omgjort');
    expect(radios.at(5).prop('label').id).to.equal('Klage.Behandle.Ugunst');
    expect(radios.at(6).prop('label').id).to.equal('Klage.Behandle.DelvisOmgjort');
  });

  it('skal vise selectfield når klagevurdering er omgjort vedtak', () => {
    const wrapper = shallowWithIntl(<KlageVurderingRadioOptionsKa
      readOnly={false}
      medholdReasons={medholdReasons}
      klageVurdering={{ kode: klageVurdering.MEDHOLD_I_KLAGE, kodeverk: '' }}
      intl={intlMock}
    />);
    expect(wrapper.find('SelectField').props().name).to.equal('klageMedholdArsak.kode');
    expect(wrapper.find('SelectField')).to.have.length(1);
  });

  it('skal ikke vise selectfield når klagevurdering er opphev vedtak', () => {
    const wrapper = shallowWithIntl(<KlageVurderingRadioOptionsKa
      readOnly={false}
      medholdReasons={medholdReasons}
      klageVurdering={{ kode: klageVurdering.STADFESTE_YTELSESVEDTAK, kodeverk: '' }}
      intl={intlMock}
    />);
    expect(wrapper.find('SelectField')).to.have.length(0);
  });
});
