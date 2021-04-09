import React from 'react';
import {
  EtikettInfo, EtikettAdvarsel, EtikettFokus,
} from 'nav-frontend-etiketter';

import diskresjonskodeType from '@fpsak-frontend/kodeverk/src/diskresjonskodeType';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { Tooltip } from '@fpsak-frontend/shared-components';
import { KjønnkodeEnum } from '@fpsak-frontend/types';

import VisittkortLabels from './VisittkortLabels';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<VisittkortLabels>', () => {
  const fagsakPerson = {
    navn: 'Olga Utvikler',
    kjønn: { kode: KjønnkodeEnum.KVINNE, kodeverk: '' },
    fødselsdato: '1979-01-01',
    fødselsnummer: '1234567',
  };

  it('skal ikke vise noen etiketter', () => {
    const wrapper = shallowWithIntl(<VisittkortLabels.WrappedComponent
      intl={intlMock}
      fagsakPerson={fagsakPerson}
      harVerge={false}
    />, messages);

    expect(wrapper.find(EtikettInfo)).toHaveLength(0);
  });

  it('skal vise etikett for dødsdato', () => {
    const wrapper = shallowWithIntl(<VisittkortLabels.WrappedComponent
      intl={intlMock}
      fagsakPerson={{
        ...fagsakPerson,
        dodsdato: '2019-01-01',
      }}
      harVerge={false}
    />, messages);

    expect(wrapper.find(EtikettInfo)).toHaveLength(1);
    const tooltip = wrapper.find(Tooltip);
    expect(tooltip).toHaveLength(1);
    expect(tooltip.prop('content')).toEqual('Personen er død');
  });

  it('skal vise etikett for kode 6', () => {
    const wrapper = shallowWithIntl(<VisittkortLabels.WrappedComponent
      intl={intlMock}
      fagsakPerson={{
        ...fagsakPerson,
        diskresjonskode: {
          kode: diskresjonskodeType.KODE6,
          kodeverk: '',
        },
      }}
      harVerge={false}
    />, messages);

    expect(wrapper.find(EtikettAdvarsel)).toHaveLength(1);
    const tooltip = wrapper.find(Tooltip);
    expect(tooltip).toHaveLength(1);
    expect(tooltip.prop('content')).toEqual('Personen har diskresjonsmerking kode 6');
  });

  it('skal vise etikett for kode 7', () => {
    const wrapper = shallowWithIntl(<VisittkortLabels.WrappedComponent
      intl={intlMock}
      fagsakPerson={{
        ...fagsakPerson,
        diskresjonskode: {
          kode: diskresjonskodeType.KODE7,
          kodeverk: '',
        },
      }}
      harVerge={false}
    />, messages);

    expect(wrapper.find(EtikettFokus)).toHaveLength(1);
    const tooltip = wrapper.find(Tooltip);
    expect(tooltip).toHaveLength(1);
    expect(tooltip.prop('content')).toEqual('Personen har diskresjonsmerking kode 7');
  });

  it('skal vise etikett for verge', () => {
    const wrapper = shallowWithIntl(<VisittkortLabels.WrappedComponent
      intl={intlMock}
      fagsakPerson={fagsakPerson}
      harVerge
    />, messages);

    expect(wrapper.find(EtikettInfo)).toHaveLength(1);
    const tooltip = wrapper.find(Tooltip);
    expect(tooltip).toHaveLength(1);
    expect(tooltip.prop('content')).toEqual('Personen har verge');
  });

  it('skal vise etikett for søker under 18', () => {
    const wrapper = shallowWithIntl(<VisittkortLabels.WrappedComponent
      intl={intlMock}
      fagsakPerson={{
        ...fagsakPerson,
        fødselsdato: '2019-01-01',
      }}
      harVerge={false}
    />, messages);

    expect(wrapper.find(EtikettInfo)).toHaveLength(1);
    const tooltip = wrapper.find(Tooltip);
    expect(tooltip).toHaveLength(1);
    expect(tooltip.prop('content')).toEqual('Personen er under 18 år');
  });
});
