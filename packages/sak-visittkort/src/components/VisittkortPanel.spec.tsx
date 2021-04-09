import React from 'react';
import { shallow } from 'enzyme';
import { PersonCard, Gender, EmptyPersonCard } from '@navikt/nap-person-card';

import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import { FlexContainer } from '@fpsak-frontend/shared-components';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import relasjonsRolleType from '@fpsak-frontend/kodeverk/src/relasjonsRolleType';
import { KjønnkodeEnum } from '@fpsak-frontend/types';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import VisittkortBarnInfoPanel from './VisittkortBarnInfoPanel';
import VisittkortPanel from './VisittkortPanel';

import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<VisittkortPanel>', () => {
  const fagsak = {
    saksnummer: '123456',
    fagsakYtelseType: {
      kode: fagsakYtelseType.FORELDREPENGER,
      kodeverk: 'SAKSTYPE',
    },
    relasjonsRolleType: {
      kode: relasjonsRolleType.MOR,
      kodeverk: 'RELASJONS_ROLLE_TYPE',
    },
    status: {
      kode: fagsakStatus.LOPENDE,
      kodeverk: 'STATUS',
    },
    barnFodt: '20120-01-01',
    opprettet: '20120-01-01',
    endret: '20120-01-01',
    antallBarn: 1,
    kanRevurderingOpprettes: false,
    skalBehandlesAvInfotrygd: false,
    dekningsgrad: 100,
  };

  const fagsakPerson = {
    navn: 'Olga Utvikler',
    kjønn: { kode: KjønnkodeEnum.KVINNE, kodeverk: '' },
    fødselsdato: '1979-01-01',
    fødselsnummer: '1234567',
    aktørId: 'test1',
  };

  const fagsakPersonAnnenPart = {
    navn: 'Espen Utvikler',
    fødselsdato: '1979-01-01',
    fødselsnummer: '1234567',
    kjønn: { kode: KjønnkodeEnum.MANN, kodeverk: '' },
    aktørId: 'test',
  };

  const fagsakPersonAnnenPartUtenAktørId = {
    navn: 'Espen Utvikler',
    fødselsdato: '1979-01-01',
    fødselsnummer: '1234567',
    kjønn: { kode: KjønnkodeEnum.MANN, kodeverk: '' },
  };

  const fagsakPersonerUtenAnnenPart = {
    bruker: fagsakPerson,
  };

  const fagsakPersonerMedAnnenPart = {
    bruker: fagsakPerson,
    annenPart: fagsakPersonAnnenPart,
  };

  const fagsakPersonerMedAnnenPartUtenAktørId = {
    bruker: fagsakPerson,
    annenPart: fagsakPersonAnnenPartUtenAktørId,
  };

  it('skal vise visittkort når en har harTilbakekrevingVerge', () => {
    const wrapper = shallow(<VisittkortPanel.WrappedComponent
      intl={intlMock}
      fagsak={fagsak}
      fagsakPersoner={fagsakPersonerUtenAnnenPart}
      harVerge
      erTilbakekreving
    />);

    expect(wrapper.find(FlexContainer)).toHaveLength(0);
    const visittkort = wrapper.find(PersonCard);
    expect(visittkort).toHaveLength(1);
    expect(visittkort.prop('name')).toEqual(fagsakPerson.navn);
    expect(visittkort.prop('fodselsnummer')).toEqual(fagsakPerson.fødselsnummer);
    expect(visittkort.prop('gender')).toEqual(Gender.female);
  });

  it('skal vise visittkort med brukerinformasjon', () => {
    const wrapper = shallow(<VisittkortPanel.WrappedComponent
      intl={intlMock}
      fagsak={fagsak}
      fagsakPersoner={{
        ...fagsakPersonerUtenAnnenPart,
        familiehendelse: {
          hendelseType: {
            kode: familieHendelseType.FODSEL,
            kodeverk: '',
          },
          hendelseDato: '2021-01-01',
          antallBarn: 1,
          dødfødsel: false,
        },
      }}
      harVerge={false}
      erTilbakekreving={false}
    />);

    expect(wrapper.find(FlexContainer)).toHaveLength(1);
    expect(wrapper.find(VisittkortBarnInfoPanel)).toHaveLength(1);
    const visittkort = wrapper.find(PersonCard);
    expect(visittkort).toHaveLength(1);
    expect(visittkort.prop('name')).toEqual(fagsakPerson.navn);
    expect(visittkort.prop('fodselsnummer')).toEqual(fagsakPerson.fødselsnummer);
    expect(visittkort.prop('gender')).toEqual(Gender.female);
  });

  it('skal vise visittkort for annen part', () => {
    const wrapper = shallow(<VisittkortPanel.WrappedComponent
      intl={intlMock}
      fagsak={fagsak}
      fagsakPersoner={{
        ...fagsakPersonerMedAnnenPart,
        familiehendelse: {
          hendelseType: {
            kode: familieHendelseType.FODSEL,
            kodeverk: '',
          },
          hendelseDato: '2021-01-01',
          antallBarn: 1,
          dødfødsel: false,
        },
      }}
      lenkeTilAnnenPart="testlenke"
      harVerge={false}
      erTilbakekreving={false}
    />);

    expect(wrapper.find(FlexContainer)).toHaveLength(1);
    expect(wrapper.find(VisittkortBarnInfoPanel)).toHaveLength(1);
    const visittkort = wrapper.find(PersonCard);
    expect(visittkort).toHaveLength(2);
    expect(visittkort.first().prop('name')).toEqual(fagsakPerson.navn);
    expect(visittkort.first().prop('fodselsnummer')).toEqual(fagsakPerson.fødselsnummer);
    expect(visittkort.first().prop('gender')).toEqual(Gender.female);

    expect(visittkort.last().prop('name')).toEqual(fagsakPersonAnnenPart.navn);
    expect(visittkort.last().prop('fodselsnummer')).toEqual(fagsakPersonAnnenPart.fødselsnummer);
    expect(visittkort.last().prop('gender')).toEqual(Gender.male);
  });

  it('skal vise visittkort for ukjent søker når annen part mangler aktør-id', () => {
    const wrapper = shallow(<VisittkortPanel.WrappedComponent
      intl={intlMock}
      fagsak={fagsak}
      fagsakPersoner={{
        ...fagsakPersonerMedAnnenPartUtenAktørId,
        familiehendelse: {
          hendelseType: {
            kode: familieHendelseType.FODSEL,
            kodeverk: '',
          },
          hendelseDato: '2021-01-01',
          antallBarn: 1,
          dødfødsel: false,
        },
      }}
      lenkeTilAnnenPart="testlenke"
      harVerge={false}
      erTilbakekreving={false}
    />);

    expect(wrapper.find(FlexContainer)).toHaveLength(1);
    expect(wrapper.find(VisittkortBarnInfoPanel)).toHaveLength(1);
    expect(wrapper.find(PersonCard)).toHaveLength(1);
    const tomtVisittkort = wrapper.find(EmptyPersonCard);
    expect(tomtVisittkort).toHaveLength(1);
    expect(tomtVisittkort.prop('namePlaceholder')).toEqual('Ukjent navn, mangler norsk id-nr');
  });
});
