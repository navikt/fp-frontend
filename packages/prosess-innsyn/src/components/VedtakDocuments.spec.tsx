import React from 'react';
import { shallow } from 'enzyme';
import Lenke from 'nav-frontend-lenker';

import VedtakDocuments from './VedtakDocuments';

describe('<VedtakDocuments>', () => {
  it('skal kun vise lenke for å vise dokumentliste', () => {
    const vedtaksdokumenter = [{
      dokumentId: '1',
      tittel: 'test',
      opprettetDato: '2017-08-31',
    }];

    const wrapper = shallow(<VedtakDocuments
      behandlingTypes={[{ kode: 'test', kodeverk: '', navn: 'navnTest' }]}
      vedtaksdokumenter={vedtaksdokumenter}
    />);

    expect(wrapper.find(Lenke)).toHaveLength(1);
  });

  it('skal vise dokumentlisten etter at lenke er trykket', () => {
    const vedtaksdokumenter = [{
      dokumentId: '1',
      tittel: 'test',
      opprettetDato: '2017-08-31',
    }];

    const wrapper = shallow(<VedtakDocuments
      behandlingTypes={[{ kode: 'test', kodeverk: '', navn: 'navnTest' }]}
      vedtaksdokumenter={vedtaksdokumenter}
    />);

    wrapper.find(Lenke).simulate('click', { preventDefault: () => undefined });
    expect(wrapper.find(Lenke)).toHaveLength(2);
  });
});
