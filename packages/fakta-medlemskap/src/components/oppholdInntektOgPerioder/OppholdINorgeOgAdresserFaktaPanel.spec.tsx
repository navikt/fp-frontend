import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import opplysningAdresseType from '@fpsak-frontend/kodeverk/src/opplysningAdresseType';
import { Aksjonspunkt, PersonopplysningMedlem, Soknad } from '@fpsak-frontend/types';

import OppholdINorgeOgAdresserFaktaPanel, { PeriodeMedId } from './OppholdINorgeOgAdresserFaktaPanel';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-fakta-medlemskap';

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const mockIntl = jest.requireMock('../../../i18n/intl-enzyme-test-helper-fakta-medlemskap');
  return {
    ...reactIntl,
    useIntl: () => mockIntl.intlMock,
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
      personstatus: {
        kode: 'UTVANDRET',
        kodeverk: '',
      },
    } as PersonopplysningMedlem,
  }, {
    isApplicant: false,
    personopplysning: {
      navn: 'Petra Tester',
      adresser: [],
      personstatus: {
        kode: 'UTVANDRET',
        kodeverk: 'Utvandret',
      },
    } as PersonopplysningMedlem,
  }];

  it('skal vise info om opphold', () => {
    const wrapper = shallowWithIntl(<OppholdINorgeOgAdresserFaktaPanel.WrappedComponent
      id="1"
      behandlingId={2}
      behandlingVersjon={3}
      readOnly={false}
      hasBosattAksjonspunkt={false}
      isBosattAksjonspunktClosed={false}
      opphold={opphold}
      foreldre={foreldre}
      alleKodeverk={{}}
      alleMerknaderFraBeslutter={{}}
    />);
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
      behandlingId={2}
      behandlingVersjon={3}
      readOnly={false}
      hasBosattAksjonspunkt={false}
      isBosattAksjonspunktClosed={false}
      opphold={opphold}
      foreldre={foreldre}
      alleKodeverk={{}}
      alleMerknaderFraBeslutter={{}}
    />);
    const foreldreDivs = wrapper.find('div');
    expect(foreldreDivs).toHaveLength(3);
  });

  it('skal rendre form som lar NAV-ansatt velge om barnet er ektefelles barn eller ei', () => {
    const toForeldre = [{
      isApplicant: true,
      personopplysning: {
        navn: 'Espen Utvikler',
        adresser: [],
        personstatus: {
          kode: 'UTVANDRET',
          kodeverk: '',
        },
      } as PersonopplysningMedlem,
    }, {
      isApplicant: false,
      personopplysning: {
        navn: 'Petra Tester',
        adresser: [],
        personstatus: {
          kode: 'UTVANDRET',
          kodeverk: '',
        },
      } as PersonopplysningMedlem,
    }];

    const wrapper = shallowWithIntl(<OppholdINorgeOgAdresserFaktaPanel.WrappedComponent
      id="1"
      behandlingId={2}
      behandlingVersjon={3}
      readOnly={false}
      hasBosattAksjonspunkt
      isBosattAksjonspunktClosed={false}
      opphold={opphold}
      foreldre={toForeldre}
      alleKodeverk={{}}
      alleMerknaderFraBeslutter={{}}
    />);

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
      diskresjonskode: {
        kode: '',
        kodeverk: '',
      },
      navBrukerKjonn: {
        kode: '',
        kodeverk: '',
      },
      region: {
        kode: '',
        kodeverk: '',
      },
      fodselsdato: '1979-01-01',
      personstatus: {
        kode: 'UTVANDRET',
        kodeverk: '',
      },
      avklartPersonstatus: {
        overstyrtPersonstatus: {
          kode: personstatusType.BOSATT,
          kodeverk: '',
        },
        orginalPersonstatus: {
          kode: personstatusType.BOSATT,
          kodeverk: '',
        },
      },
      adresser: [{
        adresselinje1: 'Vei 1',
        postNummer: '1000',
        poststed: 'Oslo',
        adresseType: {
          kode: opplysningAdresseType.POSTADRESSE,
          kodeverk: '',
        },
      }],
      annenPart: {
        fnr: '',
        navn: 'Petra Tester',
        aktoerId: '',
        personstatus: {
          kode: 'UTVANDRET',
          kodeverk: '',
        },
        adresser: [{
          adresselinje1: 'Vei 2',
          postNummer: '2000',
          poststed: 'Stockholm',
          adresseType: {
            kode: opplysningAdresseType.UTENLANDSK_POSTADRESSE,
            kodeverk: '',
          },
        }],
      },
    } as PersonopplysningMedlem;
    const personopplysningAnnenPart = {
      navn: 'Petra Tester',
      personstatus: {
        kode: 'UTVANDRET',
        kodeverk: '',
      },
      adresser: [{
        adresselinje1: 'Vei 2',
        postNummer: '2000',
        poststed: 'Stockholm',
        adresseType: {
          kode: opplysningAdresseType.UTENLANDSK_POSTADRESSE,
          kodeverk: '',
        },
      }],
    } as PersonopplysningMedlem;

    const periode = {
      aksjonspunkter: [aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT],
      bosattVurdering: true,
      personopplysningBruker,
      personopplysningAnnenPart,
    } as PeriodeMedId;

    const aksjonspunkt = {
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
    } as Aksjonspunkt;
    const soknad = {
      oppgittTilknytning: opphold,
    } as Soknad;

    const initialValues = OppholdINorgeOgAdresserFaktaPanel.buildInitialValues(soknad, periode, [aksjonspunkt]);
    expect(initialValues).toEqual({
      foreldre: [{
        isApplicant: true,
        personopplysning: {
          navn: 'Espen Utvikler',
          personstatus: {
            kode: 'UTVANDRET',
            kodeverk: '',
          },
          avklartPersonstatus: {
            overstyrtPersonstatus: {
              kode: personstatusType.BOSATT,
              kodeverk: '',
            },
            orginalPersonstatus: {
              kode: personstatusType.BOSATT,
              kodeverk: '',
            },
          },
          adresser: [{
            adresselinje1: 'Vei 1',
            postNummer: '1000',
            poststed: 'Oslo',
            adresseType: {
              kode: opplysningAdresseType.POSTADRESSE,
              kodeverk: '',
            },
          }],
          annenPart: {
            navn: 'Petra Tester',
            personstatus: {
              kode: 'UTVANDRET',
              kodeverk: '',
            },
            adresser: [{
              adresselinje1: 'Vei 2',
              postNummer: '2000',
              poststed: 'Stockholm',
              adresseType: {
                kode: opplysningAdresseType.UTENLANDSK_POSTADRESSE,
                kodeverk: '',
              },
            }],
          },
        },
      }, {
        isApplicant: false,
        personopplysning: {
          navn: 'Petra Tester',
          personstatus: {
            kode: 'UTVANDRET',
            kodeverk: '',
          },
          adresser: [{
            adresselinje1: 'Vei 2',
            postNummer: '2000',
            poststed: 'Stockholm',
            adresseType: {
              kode: opplysningAdresseType.UTENLANDSK_POSTADRESSE,
              kodeverk: '',
            },
          }],
        },
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
