import React from 'react';
import sinon from 'sinon';
import { FormattedMessage } from 'react-intl';

import { getIntlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AksjonspunktHelpTextTemp } from '@fpsak-frontend/shared-components';
import {
  Aksjonspunkt, Fagsak, FamilieHendelseSamling, Kodeverk, Personoversikt,
  Soknad, Stonadskonto, UttakPeriodeGrense, UttaksresultatPeriode, UttakStonadskontoer, Ytelsefordeling,
} from '@fpsak-frontend/types';

import { buildInitialValues, transformValues, UttakPanelImpl as UttakPanel } from './UttakPanel';
import Uttak, { UttaksresultatActivity } from './Uttak';
import messages from '../../i18n/nb_NO.json';
import { AktivitetFieldArray } from './RenderUttakTable';

const intlMock = getIntlMock(messages);

describe('<UttakPanel>', () => {
  const soknad = {
    soknadType: {
      kode: 'ST-001',
    },
    mottattDato: '2019-10-28',
    soknadDato: '2019-10-28',
    tilleggsopplysninger: null,
    begrunnelseForSenInnsending: null,
    annenPartNavn: null,
    antallBarn: 1,
    dekningsgrad: 100,
    oppgittTilknytning: {
      oppholdNorgeNa: true,
      oppholdSistePeriode: true,
      oppholdNestePeriode: true,
      utlandsoppholdFor: [],
      utlandsoppholdEtter: [],
    },
    manglendeVedlegg: [],
    oppgittRettighet: {
      omsorgForBarnet: true,
      aleneomsorgForBarnet: false,
    },
    oppgittFordeling: {
      startDatoForPermisjon: '2019-10-05',
    },
    spraakkode: {
      kode: '-',
      kodeverk: 'SPRAAK_KODE',
    },
    utstedtdato: null,
    termindato: null,
    farSokerType: null,
    fodselsdatoer: {
      1: '2019-10-26',
    } as {[key: number]: string},
  } as Soknad;

  const uttaksresultat = {
    perioderSøker: [{
      fom: '',
      tom: '',
      periodeResultatType: {
        kode: 'MANUELL_BEHANDLING',
        kodeverk: '',
      },
      manuellBehandlingÅrsak: {
        kode: 'test',
        kodeverk: 'test',
      },
      aktiviteter: [{
      }],
    }, {
      fom: '',
      tom: '',
      periodeResultatType: {
        kode: 'MANUELL_BEHANDLING',
        kodeverk: '',
      },
      manuellBehandlingÅrsak: {
        kode: 'test',
        kodeverk: 'test',
      },
      aktiviteter: [{
      }],
    }],
  } as UttaksresultatPeriode;

  const stonadskonto = {
    stonadskontoer: {
      MØDREKVOTE: {
        aktivitetSaldoDtoList: [{
          aktivitetIdentifikator: {
            arbeidsgiverReferanse: '123',
          },
          saldo: 0,
        },
        {
          aktivitetIdentifikator: {
            arbeidsgiverReferanse: '445',
          },
          saldo: 4,
        }],
      } as Stonadskonto,
    } as { [key: string]: Stonadskonto },
  } as UttakStonadskontoer;

  const kodeverk = {
    BehandlingStatus: [
      {
        kode: 'AVSLU',
        navn: 'Avsluttet',
        kodeverk: 'BEHANDLING_STATUS',
      },
    ],
  };

  const sprakkode = {
    kode: 'NO',
    kodeverk: '',
  };

  const arbeidsgiverOpplysningerPerId = {
    123: {
      erPrivatPerson: false,
      identifikator: '123',
      navn: 'UNIVERSITETET I OSLO',
    },
    445: {
      erPrivatPerson: false,
      identifikator: '445',
      navn: 'STATOIL',
    },
  };

  it('skal rendre uttakpanel uten aksjonspunkt', () => {
    const wrapper = shallowWithIntl(<UttakPanel
      {...reduxFormPropsMock}
      intl={intlMock}
      aksjonspunkter={[]}
      readOnly={false}
      uttaksresultat={uttaksresultat}
      manuellOverstyring={false}
      isApOpen={false}
      submitCallback={sinon.spy()}
      stonadskonto={{} as UttakStonadskontoer}
      soknad={soknad}
      familiehendelse={{} as FamilieHendelseSamling}
      person={{} as Personoversikt}
      uttakPeriodeGrense={{} as UttakPeriodeGrense}
      ytelsefordeling={{} as Ytelsefordeling}
      behandlingType={{} as Kodeverk}
      alleKodeverk={kodeverk}
      behandlingId={1}
      behandlingStatus={{} as Kodeverk}
      employeeHasAccess
      fagsak={{} as Fagsak}
      tempUpdateStonadskontoer={sinon.spy()}
      validate={sinon.spy()}
      onSubmit={sinon.spy()}
      sprakkode={sprakkode}
      readOnlySubmitButton={false}
      apCodes={[]}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);
    const uttak = wrapper.find(Uttak);
    expect(uttak).toHaveLength(1);
    const formattedMessage = wrapper.find(FormattedMessage);
    expect(formattedMessage).toHaveLength(1);
    const aksjonspunktHelpText = wrapper.find(AksjonspunktHelpTextTemp);
    expect(aksjonspunktHelpText).toHaveLength(0);
  });

  it('skal rendre uttakpanel med aksjonspunkt', () => {
    const aksjonspunkter = [{
      definisjon: {
        kode: '',
        kodeverk: '',
      },
      status: {
        kode: 's1',
        kodeverk: '',
      },
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
      kanLoses: true,
      erAktivt: true,
    }] as Aksjonspunkt[];

    const wrapper = shallowWithIntl(<UttakPanel
      {...reduxFormPropsMock}
      intl={intlMock}
      aksjonspunkter={aksjonspunkter}
      readOnly={false}
      uttaksresultat={uttaksresultat}
      manuellOverstyring={false}
      isApOpen
      submitCallback={sinon.spy()}
      stonadskonto={{} as UttakStonadskontoer}
      soknad={soknad}
      familiehendelse={{} as FamilieHendelseSamling}
      person={{} as Personoversikt}
      uttakPeriodeGrense={{} as UttakPeriodeGrense}
      ytelsefordeling={{} as Ytelsefordeling}
      behandlingType={{} as Kodeverk}
      alleKodeverk={kodeverk}
      behandlingId={1}
      behandlingStatus={{} as Kodeverk}
      employeeHasAccess
      fagsak={{} as Fagsak}
      tempUpdateStonadskontoer={sinon.spy()}
      validate={sinon.spy()}
      onSubmit={sinon.spy()}
      sprakkode={sprakkode}
      readOnlySubmitButton={false}
      apCodes={[]}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);
    const uttak = wrapper.find(Uttak);
    expect(uttak).toHaveLength(1);
    const formattedMessage = wrapper.find(FormattedMessage);
    expect(formattedMessage).toHaveLength(2);
    const aksjonspunktHelpText = wrapper.find(AksjonspunktHelpTextTemp);
    expect(aksjonspunktHelpText).toHaveLength(1);

    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault() { return undefined; } });
    expect(reduxFormPropsMock.handleSubmit.called).toBe(true);
  });

  it('transformValues gir korrekt trekkdager og aksjonspunkt 5071', () => {
    const aksjonspunkter = [{
      definisjon: {
        kode: '',
        kodeverk: '',
      },
      status: {
        kode: 's1',
        kodeverk: '',
      },
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
      kanLoses: true,
      erAktivt: true,
    }] as Aksjonspunkt[];

    const ownProps = {
      apCodes: [
        aksjonspunktCodes.FASTSETT_UTTAKPERIODER,
      ],
    };

    const values = {
      manuellOverstyring: false,
      uttaksresultatActivity: [{
        oppholdÅrsak: {
          kode: '-',
        },
        aktiviteter: [{
          days: 4,
          weeks: 5,
        }] as AktivitetFieldArray[],
      }] as UttaksresultatActivity[],
      stonadskonto: {} as UttakStonadskontoer,
    };

    const transformedValues = transformValues(values, ownProps.apCodes, aksjonspunkter);
    expect(transformedValues.filter((ap) => ap.kode === aksjonspunktCodes.FASTSETT_UTTAKPERIODER)).toHaveLength(1);
    expect(transformedValues.filter((ap) => ap.perioder[0].aktiviteter[0].trekkdagerDesimaler === 29.0)).toHaveLength(1);
  });

  it('transformValues gir korrekt trekkdager og manuell overstyring', () => {
    const aksjonspunkter = [{
      definisjon: {
        kode: '',
        kodeverk: '',
      },
      status: {
        kode: 's1',
        kodeverk: '',
      },
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
      kanLoses: true,
      erAktivt: true,
    }] as Aksjonspunkt[];

    const ownProps = {
      apCodes: [
        aksjonspunktCodes.FASTSETT_UTTAKPERIODER,
      ],
    };

    const values = {
      manuellOverstyring: true,
      uttaksresultatActivity: [{
        oppholdÅrsak: {
          kode: '-',
        },
        aktiviteter: [{
          days: 4,
          weeks: 6,
        }] as AktivitetFieldArray[],
      }] as UttaksresultatActivity[],
      stonadskonto: {} as UttakStonadskontoer,
    };

    const transformedValues = transformValues(values, ownProps.apCodes, aksjonspunkter);
    expect(transformedValues.filter((ap) => ap.kode === aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER)).toHaveLength(1);
    expect(transformedValues.filter((ap) => ap.kode === aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER
      && ap.perioder[0].aktiviteter[0].trekkdagerDesimaler === 34.0)).toHaveLength(1);
  });

  it('skal sette initielle verdier for uttaksperioder', () => {
    const initialValues = buildInitialValues.resultFunc(uttaksresultat, stonadskonto);
    expect(initialValues).toEqual({
      uttaksresultatActivity: [{
        fom: '',
        tom: '',
        id: 1,
        periodeResultatType: {
          kode: 'MANUELL_BEHANDLING',
          kodeverk: '',
        },
        manuellBehandlingÅrsak: {
          kode: 'test',
          kodeverk: 'test',
        },
        aktiviteter: [{
        }],
      }, {
        fom: '',
        tom: '',
        id: 2,
        periodeResultatType: {
          kode: 'MANUELL_BEHANDLING',
          kodeverk: '',
        },
        manuellBehandlingÅrsak: {
          kode: 'test',
          kodeverk: 'test',
        },
        aktiviteter: [{
        }],
      }],
      stonadskonto: {
        stonadskontoer: {
          MØDREKVOTE: {
            aktivitetSaldoDtoList: [{
              aktivitetIdentifikator: {
                arbeidsgiverReferanse: '123',
              },
              saldo: 0,
            },
            {
              aktivitetIdentifikator: {
                arbeidsgiverReferanse: '445',
              },
              saldo: 4,
            }],
          },
        },
      },
    });
  });
});
