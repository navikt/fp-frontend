import React from 'react';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-prosess-beregningsgrunnlag';
import LinkTilEksterntSystem from './LinkTilEksterntSystem';

describe('<LinkTilEksterntSystem>', () => {
  it('skal teste at linkhandler ikke rendrer uten en  userIdent', () => {
    const wrapper = shallowWithIntl(<LinkTilEksterntSystem
      linkText="IM"
      userIdent={null}
      type="IM"
    />);
    const elements = wrapper.find('Element');
    expect(elements).toHaveLength(0);
  });
  it('skal teste at linkhandler rendrer riktig men en userIdent', () => {
    const wrapper = shallowWithIntl(<LinkTilEksterntSystem
      linkText="AI"
      userIdent="userident"
      type="AI"
    />);
    const link = wrapper.find('a');
    expect(link).toHaveLength(1);
    expect(link.prop('href')).toBe(
      'https://modapp.adeo.no/a-inntekt/person/userident?1&soekekontekst=PERSON&modia.global.hent.person.begrunnet=false#!PersonInntektLamell',
    );
  });
});
