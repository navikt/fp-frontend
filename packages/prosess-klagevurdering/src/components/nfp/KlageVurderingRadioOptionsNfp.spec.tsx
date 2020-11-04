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
      klageVurdering={{ kode: klageVurdering.STADFESTE_YTELSESVEDTAK, kodeverk: '' }}
      intl={intlMock}
    />);
    const radios = wrapper.find('RadioOption');
    expect(radios).to.have.length(2);
    // @ts-ignore
    expect(radios.at(0).prop('label').id).to.equal('Klage.ResolveKlage.ChangeVedtak');
    // @ts-ignore
    expect(radios.at(1).prop('label').id).to.equal('Klage.ResolveKlage.KeepVedtakNfp');
  });

  it('skal vise fem options når klage medhold', () => {
    const wrapper = shallowWithIntl(<KlageVurderingRadioOptionsNfp
      readOnly={false}
      klageVurdering={{ kode: klageVurdering.MEDHOLD_I_KLAGE, kodeverk: '' }}
      medholdReasons={medholdReasons}
      intl={intlMock}
    />);
    const radios = wrapper.find('RadioOption');
    expect(radios).to.have.length(5);
    // @ts-ignore
    expect(radios.at(0).prop('label').id).to.equal('Klage.ResolveKlage.ChangeVedtak');
    // @ts-ignore
    expect(radios.at(1).prop('label').id).to.equal('Klage.ResolveKlage.KeepVedtakNfp');
    // @ts-ignore
    expect(radios.at(2).prop('label').id).to.equal('Klage.Behandle.Omgjort');
    // @ts-ignore
    expect(radios.at(3).prop('label').id).to.equal('Klage.Behandle.Ugunst');
    // @ts-ignore
    expect(radios.at(4).prop('label').id).to.equal('Klage.Behandle.DelvisOmgjort');
  });
});
