import React from 'react';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import klageVurdering from '@fpsak-frontend/kodeverk/src/klageVurdering';
import { KlageVurderingRadioOptionsKa } from './KlageVurderingRadioOptionsKa';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

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
    />, messages);
    const radios = wrapper.find('RadioOption');
    expect(radios).toHaveLength(4);
    // @ts-ignore
    expect(radios.at(0).prop('label').id).toBe('Klage.ResolveKlage.KeepVedtakNk');
    // @ts-ignore
    expect(radios.at(1).prop('label').id).toBe('Klage.ResolveKlage.ChangeVedtak');
    // @ts-ignore
    expect(radios.at(2).prop('label').id).toBe('Klage.Behandle.Hjemsendt');
    // @ts-ignore
    expect(radios.at(3).prop('label').id).toBe('Klage.ResolveKlage.NullifyVedtak');
  });

  it('skal vise syv options når aksjonspunkt er NK og klage medhold', () => {
    const wrapper = shallowWithIntl(<KlageVurderingRadioOptionsKa
      readOnly={false}
      medholdReasons={medholdReasons}
      klageVurdering={{ kode: klageVurdering.MEDHOLD_I_KLAGE, kodeverk: '' }}
      intl={intlMock}
    />, messages);
    const radios = wrapper.find('RadioOption');
    expect(radios).toHaveLength(7);
    // @ts-ignore
    expect(radios.at(0).prop('label').id).toBe('Klage.ResolveKlage.KeepVedtakNk');
    // @ts-ignore
    expect(radios.at(1).prop('label').id).toBe('Klage.ResolveKlage.ChangeVedtak');
    // @ts-ignore
    expect(radios.at(2).prop('label').id).toBe('Klage.Behandle.Hjemsendt');
    // @ts-ignore
    expect(radios.at(3).prop('label').id).toBe('Klage.ResolveKlage.NullifyVedtak');
    // @ts-ignore
    expect(radios.at(4).prop('label').id).toBe('Klage.Behandle.Omgjort');
    // @ts-ignore
    expect(radios.at(5).prop('label').id).toBe('Klage.Behandle.Ugunst');
    // @ts-ignore
    expect(radios.at(6).prop('label').id).toBe('Klage.Behandle.DelvisOmgjort');
  });

  it('skal vise selectfield når klagevurdering er omgjort vedtak', () => {
    const wrapper = shallowWithIntl(<KlageVurderingRadioOptionsKa
      readOnly={false}
      medholdReasons={medholdReasons}
      klageVurdering={{ kode: klageVurdering.MEDHOLD_I_KLAGE, kodeverk: '' }}
      intl={intlMock}
    />, messages);
    expect(wrapper.find('SelectField').props().name).toBe('klageMedholdArsak.kode');
    expect(wrapper.find('SelectField')).toHaveLength(1);
  });

  it('skal ikke vise selectfield når klagevurdering er opphev vedtak', () => {
    const wrapper = shallowWithIntl(<KlageVurderingRadioOptionsKa
      readOnly={false}
      medholdReasons={medholdReasons}
      klageVurdering={{ kode: klageVurdering.STADFESTE_YTELSESVEDTAK, kodeverk: '' }}
      intl={intlMock}
    />, messages);
    expect(wrapper.find('SelectField')).toHaveLength(0);
  });
});
