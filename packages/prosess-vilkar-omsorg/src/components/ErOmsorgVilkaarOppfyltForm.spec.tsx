import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { Aksjonspunkt, Behandling } from '@fpsak-frontend/types';
import { ProsessStegBegrunnelseTextField, VilkarResultPicker } from '@fpsak-frontend/prosess-felles';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';

import { buildInitialValues, ErOmsorgVilkaarOppfyltFormImpl as UnwrappedForm } from './ErOmsorgVilkaarOppfyltForm';

describe('<ErOmsorgVilkaarOppfyltForm>', () => {
  const aksjonspunkterList = [{
    id: 1,
    definisjon: {
      kode: aksjonspunktCodes.MANUELL_VURDERING_AV_OMSORGSVILKARET,
      kodeverk: '',
    },
    status: {
      kode: '',
      kodeverk: '',
    },
    vilkarType: {
      kode: vilkarType.OMSORGSVILKARET,
      kodeverk: '',
    },
    begrunnelse: 'begrunnelse',
    kanLoses: true,
    erAktivt: true,
  }];

  it('skal vise readonly-form med utgråete knapper når readonly og vilkåret ikke er vurdert', () => {
    const wrapper = shallow(<UnwrappedForm
      {...reduxFormPropsMock}
      avslagsarsaker={[{
        kode: 'TEST_KODE',
        navn: 'testnavn',
        kodeverk: '',
      }]}
      aksjonspunkter={aksjonspunkterList}
      readOnly
      readOnlySubmitButton
      erVilkarOk={false}
      behandlingId={1}
      behandlingVersjon={1}
      status=""
      submitCallback={() => undefined}
      alleKodeverk={{}}
      originalErVilkarOk
    />);

    const form = wrapper.find(ProsessStegBegrunnelseTextField);
    expect(form).to.have.length(1);
    expect(form.prop('readOnly')).is.true;
  });

  it('skal vise radioknapper og nedtrekksliste for å velge om vilkåret skal godkjennes eller avvises med avslagsgrunn når ikke readonly', () => {
    const wrapper = shallow(<UnwrappedForm
      {...reduxFormPropsMock}
      avslagsarsaker={[{
        kode: 'TEST_KODE',
        navn: 'testnavn',
        kodeverk: '',
      }]}
      aksjonspunkter={aksjonspunkterList}
      readOnly={false}
      readOnlySubmitButton
      erVilkarOk={undefined}
      behandlingId={1}
      behandlingVersjon={1}
      status=""
      submitCallback={() => undefined}
      alleKodeverk={{}}
      originalErVilkarOk
    />);

    const selector = wrapper.find(VilkarResultPicker);
    expect(selector).to.have.length(1);
    expect(selector.prop('avslagsarsaker')).to.eql([{
      kode: 'TEST_KODE',
      navn: 'testnavn',
      kodeverk: '',
    }]);
    expect(selector.prop('erVilkarOk')).is.undefined;

    expect(wrapper.find(ProsessStegBegrunnelseTextField)).to.have.length(1);
    expect(wrapper.find('ConfirmInformationVilkarFormReadOnly')).to.have.length(0);
  });

  it('skal vise readonly-form når status er readonly og status er ulik ikke vurdert', () => {
    const aksjonspunkter = [{
      id: 1,
      definisjon: {
        kode: 'test',
        kodeverk: '',
      },
      status: {
        kode: '',
        kodeverk: '',
      },
      vilkarType: {
        kode: vilkarType.ADOPSJONSVILKARET,
        kodeverk: '',
      },
      begrunnelse: 'begrunnelse',
      kanLoses: true,
      erAktivt: true,
    }];

    const wrapper = shallow(<UnwrappedForm
      {...reduxFormPropsMock}
      avslagsarsaker={[]}
      aksjonspunkter={aksjonspunkter}
      readOnly
      readOnlySubmitButton
      erVilkarOk
      behandlingId={1}
      behandlingVersjon={1}
      status=""
      submitCallback={() => undefined}
      alleKodeverk={{}}
      originalErVilkarOk
    />);

    const readonlyForm = wrapper.find(ProsessStegBegrunnelseTextField);
    expect(readonlyForm).to.have.length(1);
    expect(readonlyForm.prop('readOnly')).is.true;
  });

  it('skal sette opp initielle verdier for form gitt behandling og behandlingspunkt', () => {
    const behandlingsresultat = {
      avslagsarsak: {
        kode: 'TEST',
      },
    } as Behandling['behandlingsresultat'];

    const aksjonspunkter = [{
      definisjon: {
        kode: 'test',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
      },
      begrunnelse: 'Dette er en begrunnelse',
      vilkarType: {
        kode: vilkarType.OMSORGSVILKARET,
      },
    }] as Aksjonspunkt[];

    const initialValues = buildInitialValues.resultFunc(behandlingsresultat, aksjonspunkter, vilkarUtfallType.IKKE_OPPFYLT);

    expect(initialValues).to.eql({
      erVilkarOk: undefined,
      avslagCode: undefined,
      begrunnelse: aksjonspunkter[0].begrunnelse,
    });
  });

  it('skal sette vilkår til godkjent når aksjonspunkt er lukket og vilkår er oppfylt', () => {
    const behandlingsresultat = {
      avslagsarsak: {
        kode: 'TEST',
      },
    } as Behandling['behandlingsresultat'];

    const aksjonspunkter = [{
      definisjon: {
        kode: 'test',
      },
      status: {
        kode: aksjonspunktStatus.AVBRUTT,
      },
      begrunnelse: 'Dette er en begrunnelse',
      vilkarType: {
        kode: vilkarType.OMSORGSVILKARET,
      },
    }] as Aksjonspunkt[];

    const initialValues = buildInitialValues.resultFunc(behandlingsresultat, aksjonspunkter, vilkarUtfallType.IKKE_OPPFYLT);

    expect(initialValues).to.eql({
      erVilkarOk: false,
      avslagCode: 'TEST',
      begrunnelse: aksjonspunkter[0].begrunnelse,
    });
  });

  it('skal sette vilkår til avslått når aksjonspunkt er lukket og vilkår ikke er oppfylt', () => {
    const behandlingsresultat = {
      avslagsarsak: {
        kode: 'TEST',
      },
    } as Behandling['behandlingsresultat'];
    const aksjonspunkter = [{
      definisjon: {
        kode: 'test',
      },
      status: {
        kode: aksjonspunktStatus.AVBRUTT,
      },
      begrunnelse: 'Dette er en begrunnelse',
      vilkarType: {
        kode: vilkarType.OMSORGSVILKARET,
      },
    }] as Aksjonspunkt[];

    const initialValues = buildInitialValues.resultFunc(behandlingsresultat, aksjonspunkter, vilkarUtfallType.IKKE_OPPFYLT);

    expect(initialValues).to.eql({
      erVilkarOk: false,
      avslagCode: 'TEST',
      begrunnelse: aksjonspunkter[0].begrunnelse,
    });
  });
});
