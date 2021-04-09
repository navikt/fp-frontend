import React from 'react';
import { FormattedMessage } from 'react-intl';

import TableColumn from '@fpsak-frontend/shared-components/src/table/TableColumn';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import IngenArbeidsforholdRegistrert from './IngenArbeidsforholdRegistrert';
import messages from '../../../i18n/nb_NO.json';

describe('<IngenArbeidsforholdRegistrert>', () => {
  const headerColumnContent = [
    <span>PersonArbeidsforholdTable.Arbeidsforhold</span>,
    <span>PersonArbeidsforholdTable.Periode</span>,
    <span>PersonArbeidsforholdTable.Kilde</span>,
    <span>PersonArbeidsforholdTable.Stillingsprosent</span>,
    <span>PersonArbeidsforholdTable.MottattDato</span>,
    <></>,
  ];
  it('Skal sjekke at IngenArbeidsforholdRegistrert rendrer korrekt', () => {
    const wrapper = shallowWithIntl(
      <IngenArbeidsforholdRegistrert
        headerColumnContent={headerColumnContent}
      />, messages,
    );
    expect(wrapper.find(TableColumn)).toHaveLength(6);
    // @ts-ignore
    expect(wrapper.find(FormattedMessage).props().id).toEqual('PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert');
  });
});
