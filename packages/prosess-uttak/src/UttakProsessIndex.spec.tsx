import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt, AlleKodeverk, Behandling, FamilieHendelseSamling, Personoversikt,
  Soknad, UttakPeriodeGrense, UttaksresultatPeriode, UttakStonadskontoer, Ytelsefordeling,
} from '@fpsak-frontend/types';

import UttakPanel from './components/UttakPanel';
import UttakProsessIndex from './UttakProsessIndex';

describe('<UttakProsessIndex>', () => {
  const uttaksresultatPerioder = {
    perioderSøker: [
      {
        fom: '2019-10-05',
        tom: '2019-10-25',
        aktiviteter: [
          {
            stønadskontoType: 'FORELDREPENGER_FØR_FØDSEL',
            prosentArbeid: 0,
            arbeidsforholdId: null,
            eksternArbeidsforholdId: null,
            arbeidsgiverReferanse: '910909088',
            utbetalingsgrad: 100,
            uttakArbeidType: 'ORDINÆRT_ARBEID',
            gradering: false,
            trekkdagerDesimaler: 15,
          },
        ],
        periodeResultatType: 'INNVILGET',
        begrunnelse: null,
        periodeResultatÅrsak: {
          kode: '2006',
          navn: '§14-10: Innvilget foreldrepenger før fødsel',
          kodeverk: 'INNVILGET_AARSAK',
          gyldigFom: '2000-01-01',
          gyldigTom: '9999-12-31',
        },
        manuellBehandlingÅrsak: '-',
        graderingAvslagÅrsak: {
          kode: '-',
          navn: 'Ikke definert',
          kodeverk: 'GRADERING_AVSLAG_AARSAK',
          gyldigFom: '2000-01-01',
          gyldigTom: '9999-12-31',
        },
        flerbarnsdager: false,
        samtidigUttak: false,
        samtidigUttaksprosent: null,
        graderingInnvilget: false,
        periodeType: 'FORELDREPENGER_FØR_FØDSEL',
        utsettelseType: '-',
        oppholdÅrsak: '-',
        gradertAktivitet: null,
        graderingsAvslagÅrsakLovhjemmel: null,
      },
    ],
    perioderAnnenpart: [],
    annenForelderHarRett: true,
    aleneomsorg: false,
  } as UttaksresultatPeriode;

  const behandling = {
    uuid: '1',
    versjon: 1,
    sprakkode: 'NO',
    type: '1',
    behandlingsresultat: {
    } as Behandling['behandlingsresultat'],
    status: '1',
  } as Behandling;

  const aksjonspunkter = [{
    definisjon: aksjonspunktCodes.VURDER_FEILUTBETALING,
    status: '1',
  }] as Aksjonspunkt[];

  const arbeidsgiverOpplysningerPerId = {
    910909088: {
      erPrivatPerson: false,
      identifikator: '910909088',
      navn: 'BEDRIFT AS',
    },
  };

  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<UttakProsessIndex
      behandling={behandling}
      aksjonspunkter={aksjonspunkter}
      submitCallback={sinon.spy()}
      isReadOnly={false}
      readOnlySubmitButton={false}
      isAksjonspunktOpen
      uttakStonadskontoer={{} as UttakStonadskontoer}
      soknad={{} as Soknad}
      familiehendelse={{} as FamilieHendelseSamling}
      uttaksresultatPerioder={uttaksresultatPerioder}
      personoversikt={{} as Personoversikt}
      alleKodeverk={{} as AlleKodeverk}
      employeeHasAccess
      tempUpdateStonadskontoer={sinon.spy()}
      uttakPeriodeGrense={{} as UttakPeriodeGrense}
      ytelsefordeling={{} as Ytelsefordeling}
      status=""
      vilkar={[]}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
      kreverSammenhengendeUttak={{ kreverSammenhengendeUttak: true }}
    />);
    expect(wrapper.find(UttakPanel)).toHaveLength(1);
  });
});
