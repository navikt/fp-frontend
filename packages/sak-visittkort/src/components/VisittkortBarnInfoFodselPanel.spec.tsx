import React from 'react';
import { FormattedMessage } from 'react-intl';

import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-sak-visittkort';
import VisittkortBarnInfoFodselPanel from './VisittkortBarnInfoFodselPanel';

describe('<VisittkortBarnInfoFodselPanel>', () => {
  const familiehendelse = {
    hendelseType: {
      kode: familieHendelseType.TERMIN,
      kodeverk: '',
    },
    hendelseDato: '2020-01-21',
    antallBarn: 1,
    dødfødsel: false,
  };

  it('skal vise termindato', () => {
    const wrapper = shallowWithIntl(<VisittkortBarnInfoFodselPanel.WrappedComponent
      intl={intlMock}
      familiehendelse={familiehendelse}
    />);

    const message = wrapper.find(FormattedMessage);
    expect(message).toHaveLength(1);
    expect(message.prop('id')).toEqual('VisittkortBarnInfoFodselPanel.Termin');
    expect(message.prop('values')).toEqual({
      dato: '21.01.2020',
    });
  });

  it('skal vise fødselsdato', () => {
    const wrapper = shallowWithIntl(<VisittkortBarnInfoFodselPanel.WrappedComponent
      intl={intlMock}
      familiehendelse={{
        ...familiehendelse,
        hendelseType: {
          kode: familieHendelseType.FODSEL,
          kodeverk: '',
        },
      }}
    />);

    const messages = wrapper.find(FormattedMessage);
    expect(messages).toHaveLength(2);
    expect(messages.first().prop('id')).toEqual('VisittkortBarnInfoFodselPanel.Fodt');
    expect(messages.first().prop('values')).toEqual({
      dato: '02.02.2020',
    });
  });

  it('skal etikett for dødfødt barn', () => {
    const wrapper = shallowWithIntl(<VisittkortBarnInfoFodselPanel.WrappedComponent
      intl={intlMock}
      familiehendelse={{
        ...familiehendelse,
        hendelseType: {
          kode: familieHendelseType.FODSEL,
          kodeverk: '',
        },
        dødfødsel: true,
      }}
    />);

    const message = wrapper.find(FormattedMessage);
    expect(message).toHaveLength(3);
    expect(message.last().prop('id')).toEqual('VisittkortBarnInfoFodselPanel.Dod');
  });
});
