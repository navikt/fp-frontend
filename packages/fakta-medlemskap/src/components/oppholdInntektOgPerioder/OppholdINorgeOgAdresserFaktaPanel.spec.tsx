import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import opplysningAdresseType from '@fpsak-frontend/kodeverk/src/opplysningAdresseType';
import { Aksjonspunkt, Personopplysninger, Soknad } from '@fpsak-frontend/types';

import OppholdINorgeOgAdresserFaktaPanel, { PeriodeMedId } from './OppholdINorgeOgAdresserFaktaPanel';
import * as useIntl from '../../useIntl';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-fakta-medlemskap';

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
    } as Personopplysninger,
  }, {
    isApplicant: false,
    personopplysning: {
      navn: 'Petra Tester',
      adresser: [],
      personstatus: {
        kode: 'UTVANDRET',
        kodeverk: 'Utvandret',
      },
    } as Personopplysninger,
  }];

  let contextStub;
  beforeEach(() => {
    contextStub = sinon.stub(useIntl, 'default').callsFake(() => intlMock);
  });

  afterEach(() => {
    contextStub.restore();
  });

  it('skal vise info om opphold', () => {
    const wrapper = shallowWithIntl(<OppholdINorgeOgAdresserFaktaPanel.WrappedComponent
      readOnly={false}
      hasBosattAksjonspunkt={false}
      isBosattAksjonspunktClosed={false}
      opphold={opphold}
      foreldre={foreldre}
      alleKodeverk={{}}
      alleMerknaderFraBeslutter={{}}
    />);
    const felter = wrapper.find(Normaltekst);
    expect(felter).to.have.length(5);
    expect(felter.first().childAt(0).find(FormattedMessage).prop('id')).to.eql('OppholdINorgeOgAdresserFaktaPanel.Yes');
    expect(felter.at(1).childAt(0).find(FormattedMessage).prop('id')).to.eql('OppholdINorgeOgAdresserFaktaPanel.Yes');
    expect(felter.at(2).childAt(0).text()).to.eql('Sverige');
    expect(felter.at(4).childAt(0).find(FormattedMessage).prop('id')).to.eql('OppholdINorgeOgAdresserFaktaPanel.No');
  });

  it('skal rendre form som viser bosatt informasjon', () => {
    const wrapper = shallowWithIntl(<OppholdINorgeOgAdresserFaktaPanel.WrappedComponent
      readOnly={false}
      hasBosattAksjonspunkt={false}
      isBosattAksjonspunktClosed={false}
      opphold={opphold}
      foreldre={foreldre}
      alleKodeverk={{}}
      alleMerknaderFraBeslutter={{}}
    />);
    const foreldreDivs = wrapper.find('div');
    expect(foreldreDivs).to.have.length(3);
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
      } as Personopplysninger,
    }, {
      isApplicant: false,
      personopplysning: {
        navn: 'Petra Tester',
        adresser: [],
        personstatus: {
          kode: 'UTVANDRET',
          kodeverk: '',
        },
      } as Personopplysninger,
    }];

    const wrapper = shallowWithIntl(<OppholdINorgeOgAdresserFaktaPanel.WrappedComponent
      readOnly={false}
      hasBosattAksjonspunkt
      isBosattAksjonspunktClosed={false}
      opphold={opphold}
      foreldre={toForeldre}
      alleKodeverk={{}}
      alleMerknaderFraBeslutter={{}}
    />);

    const radioFields = wrapper.find('RadioOption');
    expect(radioFields).to.have.length(2);
    expect(radioFields.first().prop('label').id).to.eql('OppholdINorgeOgAdresserFaktaPanel.ResidingInNorway');
  });

  it('skal sette initielle verdier', () => {
    const personopplysninger = {
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
    } as Personopplysninger;

    const periode = {
      aksjonspunkter: [aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT],
      bosattVurdering: true,
      personopplysninger,
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
    expect(initialValues).to.eql({
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
