import React from 'react';
import {
  EtikettInfo, EtikettAdvarsel, EtikettFokus,
} from 'nav-frontend-etiketter';

import diskresjonskodeType from '@fpsak-frontend/kodeverk/src/diskresjonskodeType';
import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { Tooltip } from '@fpsak-frontend/shared-components';
import { KjønnkodeEnum } from '@fpsak-frontend/types';

import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-sak-visittkort';
import VisittkortLabels from './VisittkortLabels';

describe('<VisittkortLabels>', () => {
  const fagsakPerson = {
    navn: 'Olga Utvikler',
    kjønn: { kode: KjønnkodeEnum.KVINNE, kodeverk: '' },
    fodselsdato: '1979-01-01',
    personnummer: '1234567',
    personstatusType: {
      kode: personstatusType.BOSATT,
      kodeverk: 'PERSONSTATUS_TYPE',
    },
  };

  it('skal ikke vise noen etiketter', () => {
    const wrapper = shallowWithIntl(<VisittkortLabels.WrappedComponent
      intl={intlMock}
      fagsakPerson={fagsakPerson}
      harVerge={false}
    />);

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
    />);

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
    />);

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
    />);

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
    />);

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
        fodselsdato: '2019-01-01',
      }}
      harVerge={false}
    />);

    expect(wrapper.find(EtikettInfo)).toHaveLength(1);
    const tooltip = wrapper.find(Tooltip);
    expect(tooltip).toHaveLength(1);
    expect(tooltip.prop('content')).toEqual('Personen er under 18 år');
  });
});
