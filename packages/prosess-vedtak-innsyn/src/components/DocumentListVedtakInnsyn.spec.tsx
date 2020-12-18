import React from 'react';
import { shallow } from 'enzyme';

import kommunikasjonsretning from '@fpsak-frontend/kodeverk/src/kommunikasjonsretning';

import DocumentListVedtakInnsyn from './DocumentListVedtakInnsyn';

describe('<DocumentListVedtakInnsyn>', () => {
  it('skal vise tekst ved tom dokumentliste', () => {
    const wrapper = shallow(<DocumentListVedtakInnsyn
      documents={[]}
      saksNr={123}
    />);
    expect(wrapper.find('FormattedMessage').prop('id')).toBe('DocumentListVedtakInnsyn.NoDocuments');
  });

  it('skal inneholde ett document, med tittel Dok1', () => {
    const documents = [{
      journalpostId: '1',
      dokumentId: '1',
      tittel: 'Dok1',
      tidspunkt: '22.12.2017',
      kommunikasjonsretning: kommunikasjonsretning.INN,
      fikkInnsyn: false,
    }];
    const wrapper = shallow(<DocumentListVedtakInnsyn
      saksNr={123}
      documents={documents}
    />);
    expect(wrapper.find('FormattedMessage').prop('id')).toBe('DocumentListVedtakInnsyn.InnsynsDok');
    expect(wrapper.find('a').text()).toBe('Dok1');
    expect(wrapper.find('Table')).toHaveLength(1);
  });
});
