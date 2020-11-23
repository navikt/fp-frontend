import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { Hovedknapp } from 'nav-frontend-knapper';
import { FaktaBegrunnelseTextField } from '@fpsak-frontend/fakta-felles';
import { OppholdInntektOgPeriodeForm, PeriodeMedId } from './OppholdInntektOgPeriodeForm';
import OppholdINorgeOgAdresserFaktaPanel, { FormValues } from './OppholdINorgeOgAdresserFaktaPanel';
import InntektOgYtelserFaktaPanel from './InntektOgYtelserFaktaPanel';
import PerioderMedMedlemskapFaktaPanel from './PerioderMedMedlemskapFaktaPanel';
import StatusForBorgerFaktaPanel from './StatusForBorgerFaktaPanel';

const arbeidsgiverOpplysningerPerId = {
  973861778: {
    erPrivatPerson: false,
    identifikator: '973861778',
    navn: 'MYGG ROBUST',
  },
};

const valgtPeriode = {
  aksjonspunkter: [],
  id: '123',
} as PeriodeMedId;

describe('<OppholdInntektOgPeriodeForm>', () => {
  it('skal vise informasjon uten editeringsmuligheter når det ikke finnes aksjonspunkter', () => {
    const wrapper = shallow(<OppholdInntektOgPeriodeForm
      {...reduxFormPropsMock}
      initialValues={{} as FormValues}
      aksjonspunkter={[]}
      updateOppholdInntektPeriode={sinon.spy()}
      periodeResetCallback={sinon.spy()}
      valgtPeriode={valgtPeriode}
      submittable
      readOnly
      alleKodeverk={{}}
      alleMerknaderFraBeslutter={{}}
      behandlingId={1}
      behandlingVersjon={1}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      onSubmit={sinon.spy()}
    />);

    expect(wrapper.find(OppholdINorgeOgAdresserFaktaPanel)).has.length(1);
    expect(wrapper.find(InntektOgYtelserFaktaPanel)).has.length(1);
    expect(wrapper.find(PerioderMedMedlemskapFaktaPanel)).has.length(1);
    expect(wrapper.find(FaktaBegrunnelseTextField)).has.length(0);
    expect(wrapper.find(Hovedknapp).prop('disabled')).is.false;
  });

  it('skal avklare bosatt data når en har dette aksjonspunktet', () => {
    const bosattAksjonspunkt = {
      id: 1,
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT,
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
    };

    const valgtPeriodeMedBosattAksjonspunkt = {
      aksjonspunkter: [aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT],
      id: '123',
    } as PeriodeMedId;

    const wrapper = shallow(<OppholdInntektOgPeriodeForm
      {...reduxFormPropsMock}
      initialValues={{} as FormValues}
      aksjonspunkter={[bosattAksjonspunkt]}
      updateOppholdInntektPeriode={sinon.spy()}
      periodeResetCallback={sinon.spy()}
      submittable
      readOnly={false}
      valgtPeriode={valgtPeriodeMedBosattAksjonspunkt}
      alleKodeverk={{}}
      alleMerknaderFraBeslutter={{}}
      behandlingId={1}
      behandlingVersjon={1}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      onSubmit={sinon.spy()}
    />);

    expect(wrapper.find(FaktaBegrunnelseTextField)).has.length(1);
    expect(wrapper.find(Hovedknapp).prop('disabled')).is.false;
  });

  it('skal avklare perioder når en har dette aksjonspunktet', () => {
    const periodeAksjonspunkt = {
      id: 1,
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
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
    };

    const valgtPeriodeMedAksjonspunkt = {
      aksjonspunkter: [aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE],
      id: '123',
    } as PeriodeMedId;

    const wrapper = shallow(<OppholdInntektOgPeriodeForm
      {...reduxFormPropsMock}
      initialValues={{} as FormValues}
      aksjonspunkter={[periodeAksjonspunkt]}
      updateOppholdInntektPeriode={sinon.spy()}
      periodeResetCallback={sinon.spy()}
      submittable
      readOnly={false}
      valgtPeriode={valgtPeriodeMedAksjonspunkt}
      alleKodeverk={{}}
      alleMerknaderFraBeslutter={{}}
      behandlingId={1}
      behandlingVersjon={1}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      onSubmit={sinon.spy()}
    />);

    expect(wrapper.find(PerioderMedMedlemskapFaktaPanel)).has.length(1);
    expect(wrapper.find(FaktaBegrunnelseTextField)).has.length(1);
    expect(wrapper.find(Hovedknapp).prop('disabled')).is.false;
  });

  it('skal avklare oppholdsrett når en har dette aksjonspunktet', () => {
    const oppholdsrettAksjonspunkt = {
      id: 1,
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_OPPHOLDSRETT,
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
    };

    const valgtPeriodeMedOppholdsrettAksjonspunkt = {
      aksjonspunkter: [aksjonspunktCodes.AVKLAR_OPPHOLDSRETT],
      id: '123',
    } as PeriodeMedId;

    const wrapper = shallow(<OppholdInntektOgPeriodeForm
      {...reduxFormPropsMock}
      initialValues={{} as FormValues}
      aksjonspunkter={[oppholdsrettAksjonspunkt]}
      updateOppholdInntektPeriode={sinon.spy()}
      periodeResetCallback={sinon.spy()}
      submittable
      readOnly={false}
      valgtPeriode={valgtPeriodeMedOppholdsrettAksjonspunkt}
      alleKodeverk={{}}
      alleMerknaderFraBeslutter={{}}
      behandlingId={1}
      behandlingVersjon={1}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      onSubmit={sinon.spy()}
    />);

    expect(wrapper.find(StatusForBorgerFaktaPanel)).has.length(1);
    expect(wrapper.find(FaktaBegrunnelseTextField)).has.length(1);
    expect(wrapper.find(Hovedknapp).prop('disabled')).is.false;
  });

  it('skal avklare lovlig opphold når en har dette aksjonspunktet', () => {
    const lovligOppholdAksjonspunkt = {
      id: 1,
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD,
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
    };

    const valgtPeriodeMedLovligoppholdAksjonspunkt = {
      aksjonspunkter: [aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD],
      id: '123',
    } as PeriodeMedId;

    const wrapper = shallow(<OppholdInntektOgPeriodeForm
      {...reduxFormPropsMock}
      initialValues={{} as FormValues}
      aksjonspunkter={[lovligOppholdAksjonspunkt]}
      updateOppholdInntektPeriode={sinon.spy()}
      periodeResetCallback={sinon.spy()}
      submittable
      readOnly={false}
      valgtPeriode={valgtPeriodeMedLovligoppholdAksjonspunkt}
      alleKodeverk={{}}
      alleMerknaderFraBeslutter={{}}
      behandlingId={1}
      behandlingVersjon={1}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      onSubmit={sinon.spy()}
    />);

    expect(wrapper.find(StatusForBorgerFaktaPanel)).has.length(1);
    expect(wrapper.find(FaktaBegrunnelseTextField)).has.length(1);
    expect(wrapper.find(Hovedknapp).prop('disabled')).is.false;
  });
});
