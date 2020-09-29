import React from 'react';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { expect } from 'chai';

import klageVurdering from '@fpsak-frontend/kodeverk/src/klageVurdering';
import { KlageVurderingRadioOptionsNfp } from './KlageVurderingRadioOptionsNfp';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-prosess-klagevurdering';

describe('<KlageVurderingRadioOptionsNfp>', () => {
  const medholdReasons = [
    { kode: 'NYE_OPPLYSNINGER', navn: 'Nytt faktum', kodeverk: 'KLAGE_MEDHOLD_AARSAK' },
    { kode: 'ULIK_REGELVERKSTOLKNING', navn: 'Feil lovanvendelse', kodeverk: 'KLAGE_MEDHOLD_AARSAK' },
    { kode: 'ULIK_VURDERING', navn: 'Ulik skjønnsvurdering', kodeverk: 'KLAGE_MEDHOLD_AARSAK' },
    { kode: 'PROSESSUELL_FEIL', navn: 'Saksbehandlingsfeil', kodeverk: 'KLAGE_MEDHOLD_AARSAK' },
  ];

  it('skal vise to options når klage opprettholdt', () => {
    const wrapper = shallowWithIntl(<KlageVurderingRadioOptionsNfp
      readOnly={false}
      medholdReasons={medholdReasons}
      klageVurdering={klageVurdering.STADFESTE_YTELSESVEDTAK}
      intl={intlMock}
    />);
    const radios = wrapper.find('RadioOption');
    expect(radios).to.have.length(2);
    expect(radios.at(0).prop('label').id).to.equal('Klage.ResolveKlage.ChangeVedtak');
    expect(radios.at(1).prop('label').id).to.equal('Klage.ResolveKlage.KeepVedtakNfp');
  });

  it('skal vise fem options når klage medhold', () => {
    const wrapper = shallowWithIntl(<KlageVurderingRadioOptionsNfp
      readOnly={false}
      klageVurdering={klageVurdering.MEDHOLD_I_KLAGE}
      medholdReasons={medholdReasons}
      intl={intlMock}
    />);
    const radios = wrapper.find('RadioOption');
    expect(radios).to.have.length(5);
    expect(radios.at(0).prop('label').id).to.equal('Klage.ResolveKlage.ChangeVedtak');
    expect(radios.at(1).prop('label').id).to.equal('Klage.ResolveKlage.KeepVedtakNfp');
    expect(radios.at(2).prop('label').id).to.equal('Klage.Behandle.Omgjort');
    expect(radios.at(3).prop('label').id).to.equal('Klage.Behandle.Ugunst');
    expect(radios.at(4).prop('label').id).to.equal('Klage.Behandle.DelvisOmgjort');
  });
});
