import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';

import VisittkortBarnInfoOmsorgPanel from './VisittkortBarnInfoOmsorgPanel';

describe('<VisittkortBarnInfoOmsorgPanel>', () => {
  const familiehendelse = {
    hendelseType: {
      kode: familieHendelseType.ADOPSJON,
      kodeverk: '',
    },
    hendelseDato: '2020-01-21',
    antallBarn: 1,
    dødfødsel: false,
  };

  it('skal vise adopsjonsinformasjon', () => {
    const wrapper = shallow(<VisittkortBarnInfoOmsorgPanel
      familiehendelse={familiehendelse}
    />);

    const message = wrapper.find(FormattedMessage);
    expect(message).toHaveLength(1);
    expect(message.prop('id')).toEqual('VisittkortBarnInfoOmsorgPanel.Adopsjon');
    expect(message.prop('values')).toEqual({
      antall: 1,
      dato: '21.01.2020',
    });
  });

  it('skal vise foreldreansvarsinformasjon', () => {
    const wrapper = shallow(<VisittkortBarnInfoOmsorgPanel
      familiehendelse={{
        ...familiehendelse,
        hendelseType: {
          kode: familieHendelseType.OMSORG,
          kodeverk: '',
        },
      }}
    />);

    const message = wrapper.find(FormattedMessage);
    expect(message).toHaveLength(1);
    expect(message.prop('id')).toEqual('VisittkortBarnInfoOmsorgPanel.Foreldreansvar');
    expect(message.prop('values')).toEqual({
      antall: 1,
      dato: '21.01.2020',
    });
  });
});
