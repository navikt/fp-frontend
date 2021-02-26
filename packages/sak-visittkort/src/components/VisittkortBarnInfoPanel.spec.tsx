import React from 'react';
import { shallow } from 'enzyme';

import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';

import VisittkortBarnInfoFodselPanel from './VisittkortBarnInfoFodselPanel';
import VisittkortBarnInfoOmsorgPanel from './VisittkortBarnInfoOmsorgPanel';
import VisittkortBarnInfoPanel from './VisittkortBarnInfoPanel';

describe('<VisittkortBarnInfoPanel>', () => {
  const familiehendelse = {
    hendelseType: {
      kode: familieHendelseType.FODSEL,
      kodeverk: '',
    },
    hendelseDato: '2020-01-01',
    antallBarn: 1,
    dødfødsel: false,
  };

  it('skal vise panel for fødsel', () => {
    const wrapper = shallow(<VisittkortBarnInfoPanel
      familiehendelse={familiehendelse}
    />);

    expect(wrapper.find(VisittkortBarnInfoFodselPanel)).toHaveLength(1);
  });

  it('skal vise panel for omsorg', () => {
    const wrapper = shallow(<VisittkortBarnInfoPanel
      familiehendelse={{
        ...familiehendelse,
        hendelseType: {
          kode: familieHendelseType.OMSORG,
          kodeverk: '',
        },
      }}
    />);

    expect(wrapper.find(VisittkortBarnInfoOmsorgPanel)).toHaveLength(1);
  });
});
