import React from 'react';
import { expect } from 'chai';

import HistorikkDokumentLenke from './HistorikkDokumentLenke';
import shallowWithIntl from '../../../../i18n/intl-enzyme-test-helper-sak-historikk';

const saksnummer = 123;
const dokumentLenke = {
  tag: 'Inntektsmelding',
  journalpostId: '123456',
  dokumentId: '123445',
  utgått: true,
};

describe('HistorikkDokumentLenke', () => {
  it('skal vise at dokument er utgått', () => {
    const wrapper = shallowWithIntl(<HistorikkDokumentLenke
      dokumentLenke={dokumentLenke}
      saksnummer={saksnummer}
    />);

    expect(wrapper.find('FormattedMessage').at(0).prop('id')).to.eql('Historikk.Utgått');
  });
});
