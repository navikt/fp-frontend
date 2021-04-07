import React from 'react';
import { FormattedMessage } from 'react-intl';

import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import HistorikkDokumentLenke from './HistorikkDokumentLenke';
import messages from '../../../../i18n/nb_NO.json';

const saksnummer = '123';
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
    />, messages);

    expect(wrapper.find(FormattedMessage).at(0).prop('id')).toEqual('Historikk.Utgått');
  });
});
