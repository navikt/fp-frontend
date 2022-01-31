import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import opplysningAdresseType from '@fpsak-frontend/kodeverk/src/opplysningAdresseType';
import {
  Aksjonspunkt, AlleKodeverk, PersonopplysningMedlem, Soknad,
} from '@fpsak-frontend/types';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import OppholdINorgeOgAdresserFaktaPanel, { PeriodeMedId } from './OppholdINorgeOgAdresserFaktaPanel';
import messages from '../../../i18n/nb_NO.json';

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const meldinger = jest.requireActual('../../../i18n/nb_NO.json');
  const intlTestHelper = jest.requireActual('@fpsak-frontend/utils-test/src/intl-enzyme-test-helper');
  return {
    ...reactIntl,
    useIntl: () => intlTestHelper.getIntlMock(meldinger),
  };
});

describe('<OppholdINorgeOgAdresserFaktaPanel>', () => {
  const opphold = {
    oppholdNorgeNa: true,
    oppholdSistePeriode: true,
    utlandsoppholdFor: [{
      landNavn: 'SVERIGE',
      fom: '2017-07-20',
      tom: '2017-07-31',
    }],
    utlandsoppholdEtter: [],
    oppholdNestePeriode: false,
  };

  const foreldre = [{
    isApplicant: true,
    personopplysning: {
      navn: 'Espen Utvikler',
      adresser: [],
      personstatus: 'UTVANDRET',
    } as PersonopplysningMedlem,
  }, {
    isApplicant: false,
    personopplysning: {
      navn: 'Petra Tester',
      adresser: [],
      personstatus: 'UTVANDRET',
    } as PersonopplysningMedlem,
  }];

  it('skal vise info om opphold', () => {
    const wrapper = shallowWithIntl(<OppholdINorgeOgAdresserFaktaPanel.WrappedComponent
      id="1"
      readOnly={false}
      hasBosattAksjonspunkt={false}
      isBosattAksjonspunktClosed={false}
      opphold={opphold}
      foreldre={foreldre}
      alleKodeverk={{} as AlleKodeverk}
      alleMerknaderFraBeslutter={{}}
    />, messages);
    const felter = wrapper.find(Normaltekst);
    expect(felter).toHaveLength(5);
    expect(felter.first().childAt(0).find(FormattedMessage).prop('id')).toEqual('OppholdINorgeOgAdresserFaktaPanel.Yes');
    expect(felter.at(1).childAt(0).find(FormattedMessage).prop('id')).toEqual('OppholdINorgeOgAdresserFaktaPanel.Yes');
    expect(felter.at(2).childAt(0).text()).toEqual('Sverige');
    expect(felter.at(4).childAt(0).find(FormattedMessage).prop('id')).toEqual('OppholdINorgeOgAdresserFaktaPanel.No');
  });

  it('skal rendre form som viser bosatt informasjon', () => {
    const wrapper = shallowWithIntl(<OppholdINorgeOgAdresserFaktaPanel.WrappedComponent
      id="1"
      readOnly={false}
      hasBosattAksjonspunkt={false}
      isBosattAksjonspunktClosed={false}
      opphold={opphold}
      foreldre={foreldre}
      alleKodeverk={{} as AlleKodeverk}
      alleMerknaderFraBeslutter={{}}
    />, messages);
    const foreldreDivs = wrapper.find('div');
    expect(foreldreDivs).toHaveLength(3);
  });

  it('skal rendre form som lar NAV-ansatt velge om barnet er ektefelles barn eller ei', () => {
    const toForeldre = [{
      isApplicant: true,
      personopplysning: {
        navn: 'Espen Utvikler',
        adresser: [],
        personstatus: 'UTVANDRET',
      } as PersonopplysningMedlem,
    }, {
      isApplicant: false,
      personopplysning: {
        navn: 'Petra Tester',
        adresser: [],
        personstatus: 'UTVANDRET',
      } as PersonopplysningMedlem,
    }];

    const wrapper = shallowWithIntl(<OppholdINorgeOgAdresserFaktaPanel.WrappedComponent
      id="1"
      readOnly={false}
      hasBosattAksjonspunkt
      isBosattAksjonspunktClosed={false}
      opphold={opphold}
      foreldre={toForeldre}
      alleKodeverk={{} as AlleKodeverk}
      alleMerknaderFraBeslutter={{}}
    />, messages);

    const radioFields = wrapper.find('RadioOption');
    expect(radioFields).toHaveLength(2);
    // @ts-ignore
    expect(radioFields.first().prop('label').id).toEqual('OppholdINorgeOgAdresserFaktaPanel.ResidingInNorway');
  });

  it('skal sette initielle verdier', () => {
    const personopplysningBruker = {
      fnr: '',
      navn: 'Espen Utvikler',
      aktoerId: '',
      diskresjonskode: '',
      navBrukerKjonn: '',
      region: '',
      fodselsdato: '1979-01-01',
      personstatus: 'UTVANDRET',
      avklartPersonstatus: {
        overstyrtPersonstatus: personstatusType.BOSATT,
        orginalPersonstatus: personstatusType.BOSATT,
      },
      adresser: [{
        adresselinje1: 'Vei 1',
        postNummer: '1000',
        poststed: 'Oslo',
        adresseType: opplysningAdresseType.POSTADRESSE,
      }],
      annenPart: {
        fnr: '',
        navn: 'Petra Tester',
        aktoerId: '',
        personstatus: 'UTVANDRET',
        adresser: [{
          adresselinje1: 'Vei 2',
          postNummer: '2000',
          poststed: 'Stockholm',
          adresseType: opplysningAdresseType.UTENLANDSK_POSTADRESSE,
        }],
      },
    } as PersonopplysningMedlem;
    const personopplysningAnnenPart = {
      navn: 'Petra Tester',
      personstatus: 'UTVANDRET',
      adresser: [{
        adresselinje1: 'Vei 2',
        postNummer: '2000',
        poststed: 'Stockholm',
        adresseType: opplysningAdresseType.UTENLANDSK_POSTADRESSE,
      }],
    } as PersonopplysningMedlem;

    const periode = {
      aksjonspunkter: [aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT],
      bosattVurdering: true,
      personopplysningBruker,
      personopplysningAnnenPart,
    } as PeriodeMedId;

    const aksjonspunkt = {
      definisjon: aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT,
      status: aksjonspunktStatus.OPPRETTET,
    } as Aksjonspunkt;
    const soknad = {
      oppgittTilknytning: opphold,
    } as Soknad;

    const initialValues = OppholdINorgeOgAdresserFaktaPanel.buildInitialValues(soknad, periode, [aksjonspunkt]);
    expect(initialValues).toEqual({
      foreldre: [{
        isApplicant: true,
        personopplysning: personopplysningBruker,
      }, {
        isApplicant: false,
        personopplysning: personopplysningAnnenPart,
      }],
      bosattVurdering: true,
      hasBosattAksjonspunkt: true,
      isBosattAksjonspunktClosed: false,
      opphold: {
        oppholdNorgeNa: true,
        oppholdSistePeriode: true,
        utlandsoppholdFor: [{
          landNavn: 'SVERIGE',
          fom: '2017-07-20',
          tom: '2017-07-31',
        }],
        utlandsoppholdEtter: [],
        oppholdNestePeriode: false,
      },
    });
  });
});
