import React from 'react';
import { PersonCard, Gender, EmptyPersonCard } from '@navikt/nap-person-card';

import { FlexContainer } from '@fpsak-frontend/shared-components';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import relasjonsRolleType from '@fpsak-frontend/kodeverk/src/relasjonsRolleType';
import { KjønnkodeEnum } from '@fpsak-frontend/types';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-sak-visittkort';
import VisittkortBarnInfoPanel from './VisittkortBarnInfoPanel';
import VisittkortPanel from './VisittkortPanel';

describe('<VisittkortPanel>', () => {
  const fagsak = {
    saksnummerString: '123456',
    sakstype: {
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
    fodselsdato: '1979-01-01',
    personnummer: '1234567',
    personstatusType: {
      kode: personstatusType.BOSATT,
      kodeverk: 'PERSONSTATUS_TYPE',
    },
  };

  const fagsakPersonAnnenPart = {
    navn: 'Espen Utvikler',
    fodselsdato: '1979-01-01',
    personnummer: '1234567',
    kjønn: { kode: KjønnkodeEnum.MANN, kodeverk: '' },
    personstatusType: {
      kode: personstatusType.BOSATT,
      kodeverk: 'PERSONSTATUS_TYPE',
    },
  };

  const fagsakPersonerUtenAnnenPart = {
    bruker: fagsakPerson,
  };

  const fagsakPersonerMedAnnenPart = {
    bruker: fagsakPerson,
    annenPart: fagsakPersonAnnenPart,
  };

  const familieHendelse = {
    oppgitt: {
      skjaringstidspunkt: '2020-01-01',
      avklartBarn: [],
      termindato: '2020-01-21',
      soknadType: {
        kode: soknadType.FODSEL,
        kodeverk: 'SOKNAD_TYPE',
      },
    },
    gjeldende: {
      skjaringstidspunkt: '2020-01-01',
      soknadType: {
        kode: soknadType.FODSEL,
        kodeverk: 'SOKNAD_TYPE',
      },
    },
    register: {
      skjaringstidspunkt: '2020-01-01',
      soknadType: {
        kode: soknadType.FODSEL,
        kodeverk: 'SOKNAD_TYPE',
      },
    },
  };

  it('skal vise visittkort når en har harTilbakekrevingVerge', () => {
    const wrapper = shallowWithIntl(<VisittkortPanel.WrappedComponent
      intl={intlMock}
      fagsak={fagsak}
      fagsakPersoner={fagsakPersonerUtenAnnenPart}
      familieHendelse={familieHendelse}
      harVerge
      erTilbakekreving
    />);

    expect(wrapper.find(FlexContainer)).toHaveLength(0);
    const visittkort = wrapper.find(PersonCard);
    expect(visittkort).toHaveLength(1);
    expect(visittkort.prop('name')).toEqual(fagsakPerson.navn);
    expect(visittkort.prop('fodselsnummer')).toEqual(fagsakPerson.personnummer);
    expect(visittkort.prop('gender')).toEqual(Gender.female);
  });

  it('skal vise visittkort med brukerinformasjon', () => {
    const wrapper = shallowWithIntl(<VisittkortPanel.WrappedComponent
      intl={intlMock}
      fagsak={fagsak}
      fagsakPersoner={fagsakPersonerUtenAnnenPart}
      familieHendelse={familieHendelse}
      harVerge={false}
      erTilbakekreving={false}
    />);

    expect(wrapper.find(FlexContainer)).toHaveLength(1);
    expect(wrapper.find(VisittkortBarnInfoPanel)).toHaveLength(1);
    const visittkort = wrapper.find(PersonCard);
    expect(visittkort).toHaveLength(1);
    expect(visittkort.prop('name')).toEqual(fagsakPerson.navn);
    expect(visittkort.prop('fodselsnummer')).toEqual(fagsakPerson.personnummer);
    expect(visittkort.prop('gender')).toEqual(Gender.female);
  });

  it('skal vise visittkort for annen part', () => {
    const wrapper = shallowWithIntl(<VisittkortPanel.WrappedComponent
      intl={intlMock}
      fagsak={fagsak}
      fagsakPersoner={fagsakPersonerMedAnnenPart}
      familieHendelse={familieHendelse}
      lenkeTilAnnenPart="testlenke"
      harVerge={false}
      erTilbakekreving={false}
    />);

    expect(wrapper.find(FlexContainer)).toHaveLength(1);
    expect(wrapper.find(VisittkortBarnInfoPanel)).toHaveLength(1);
    const visittkort = wrapper.find(PersonCard);
    expect(visittkort).toHaveLength(2);
    expect(visittkort.first().prop('name')).toEqual(fagsakPerson.navn);
    expect(visittkort.first().prop('fodselsnummer')).toEqual(fagsakPerson.personnummer);
    expect(visittkort.first().prop('gender')).toEqual(Gender.female);

    expect(visittkort.last().prop('name')).toEqual(fagsakPersonAnnenPart.navn);
    expect(visittkort.last().prop('fodselsnummer')).toEqual(fagsakPersonAnnenPart.personnummer);
    expect(visittkort.last().prop('gender')).toEqual(Gender.male);
  });

  it('skal vise visittkort for ukjent søker når annen part mangler aktør-id', () => {
    const wrapper = shallowWithIntl(<VisittkortPanel.WrappedComponent
      intl={intlMock}
      fagsak={fagsak}
      fagsakPersoner={fagsakPersonerMedAnnenPart}
      familieHendelse={familieHendelse}
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
