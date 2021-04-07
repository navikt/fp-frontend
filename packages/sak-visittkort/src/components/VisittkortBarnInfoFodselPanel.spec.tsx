import React from 'react';
import { FormattedMessage } from 'react-intl';

import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import VisittkortBarnInfoFodselPanel from './VisittkortBarnInfoFodselPanel';

import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

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
    />, messages);

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
    />, messages);

    const message = wrapper.find(FormattedMessage);
    expect(message).toHaveLength(2);
    expect(message.first().prop('id')).toEqual('VisittkortBarnInfoFodselPanel.Fodt');
    expect(message.first().prop('values')).toEqual({
      dato: '21.01.2020',
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
    />, messages);

    const message = wrapper.find(FormattedMessage);
    expect(message).toHaveLength(3);
    expect(message.last().prop('id')).toEqual('VisittkortBarnInfoFodselPanel.Dod');
  });

  it('skal vise manglende fødselsopplysninger når antall barn er 0 og det mangler fødselsdato', () => {
    const wrapper = shallowWithIntl(<VisittkortBarnInfoFodselPanel.WrappedComponent
      intl={intlMock}
      familiehendelse={{
        hendelseType: {
          kode: familieHendelseType.FODSEL,
          kodeverk: '',
        },
        antallBarn: 0,
        dødfødsel: false,
      }}
    />, messages);

    const message = wrapper.find(FormattedMessage);
    expect(message).toHaveLength(1);
    expect(message.last().prop('id')).toEqual('VisittkortBarnInfoFodselPanel.ManglerFodselOpplysninger');
  });
});
