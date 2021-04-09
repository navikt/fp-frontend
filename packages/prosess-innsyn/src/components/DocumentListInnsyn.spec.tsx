import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import {
  DateTimeLabel, Image, Table, TableRow,
} from '@fpsak-frontend/shared-components';
import kommunikasjonsretning from '@fpsak-frontend/kodeverk/src/kommunikasjonsretning';
import DocumentListInnsyn from './DocumentListInnsyn';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<DocumentListInnsyn>', () => {
  it('skal vise tekst ved tom dokumentliste', () => {
    const wrapper = shallowWithIntl(<DocumentListInnsyn.WrappedComponent
      intl={intlMock}
      documents={[]}
      saksNr="123"
      readOnly={false}
    />, messages);
    expect(wrapper.find(FormattedMessage).prop('id')).toBe('DocumentListInnsyn.NoDocuments');
  });

  it('skal inneholde ett document, med tittel Dok1', () => {
    const documents = [{
      journalpostId: '1',
      dokumentId: '1',
      tittel: 'Dok1',
      tidspunkt: '22.12.2017',
      kommunikasjonsretning: kommunikasjonsretning.INN,
    }];
    const wrapper = shallowWithIntl(<DocumentListInnsyn.WrappedComponent
      intl={intlMock}
      documents={documents}
      saksNr="123"
      readOnly={false}
    />, messages);
    expect(wrapper.find(FormattedMessage).prop('id')).toBe('DocumentListInnsyn.VelgInnsynsDok');
    expect(wrapper.find('a').text()).toBe('Dok1');
    expect(wrapper.find(Table)).toHaveLength(1);
  });

  it('skal inneholde to documenter', () => {
    const documents = [{
      journalpostId: '1',
      dokumentId: '1',
      tittel: 'Dok1',
      tidspunkt: '22.12.2017-09:00',
      kommunikasjonsretning: kommunikasjonsretning.INN,
    }, {
      journalpostId: '2',
      dokumentId: '2',
      tittel: 'Dok2',
      tidspunkt: '22.12.2017-09:00',
      kommunikasjonsretning: kommunikasjonsretning.UT,
    }];
    const wrapper = shallowWithIntl(<DocumentListInnsyn.WrappedComponent
      intl={intlMock}
      documents={documents}
      saksNr="123"
      readOnly={false}
    />, messages);
    expect(wrapper.find(TableRow)).toHaveLength(2);
  });

  it('skal inneholde document med riktig kommunikasjonsretining: Send -> Ut', () => {
    const documents = [{
      journalpostId: '1',
      dokumentId: '1',
      tittel: 'Dok1',
      tidspunkt: '22.12.2017-09:00',
      kommunikasjonsretning: kommunikasjonsretning.UT,
    }];
    const wrapper = shallowWithIntl(<DocumentListInnsyn.WrappedComponent
      intl={intlMock}
      documents={documents}
      saksNr="123"
      readOnly={false}
    />, messages);

    expect(wrapper.find(Image).prop('tooltip')).toEqual('Ut');
  });

  it('skal inneholde document med riktig kommunikasjonsretining: Motta -> INN', () => {
    const documents = [{
      journalpostId: '1',
      dokumentId: '1',
      tittel: 'Dok1',
      tidspunkt: '22.12.2017-09:00',
      kommunikasjonsretning: kommunikasjonsretning.INN,
    }];
    const wrapper = shallowWithIntl(<DocumentListInnsyn.WrappedComponent
      intl={intlMock}
      documents={documents}
      saksNr="123"
      readOnly={false}
    />, messages);
    expect(wrapper.find(Image).prop('tooltip')).toEqual('Inn');
  });

  it('skal ikke inneholde dato', () => {
    const documents = [{
      journalpostId: '1',
      dokumentId: '1',
      tittel: 'Dok1',

      kommunikasjonsretning: kommunikasjonsretning.INN,
    }];
    const wrapper = shallowWithIntl(<DocumentListInnsyn.WrappedComponent
      intl={intlMock}
      documents={documents}
      saksNr="123"
      readOnly={false}
    />, messages);
    expect(wrapper.find(FormattedMessage).last().prop('id')).toBe('DocumentListInnsyn.IProduksjon');
  });

  it('skal inneholde dato', () => {
    const documents = [{
      journalpostId: '1',
      dokumentId: '1',
      tittel: 'Dok1',
      tidspunkt: '22.12.2017 - 09:00',
      kommunikasjonsretning: kommunikasjonsretning.INN,
    }];
    const wrapper = shallowWithIntl(<DocumentListInnsyn.WrappedComponent
      intl={intlMock}
      documents={documents}
      saksNr="123"
      readOnly={false}
    />, messages);
    expect(wrapper.find(DateTimeLabel).prop('dateTimeString')).toBe('22.12.2017 - 09:00');
  });
});
