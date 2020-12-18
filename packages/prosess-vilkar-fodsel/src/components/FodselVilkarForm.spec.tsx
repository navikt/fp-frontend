import React from 'react';
import { shallow } from 'enzyme';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { ProsessStegBegrunnelseTextField, VilkarResultPicker } from '@fpsak-frontend/prosess-felles';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { Aksjonspunkt, Behandling } from '@fpsak-frontend/types';

import { intlMock } from '../../i18n/intl-enzyme-test-helper-prosess-vilkar-fodsel';
import { buildInitialValues, FodselVilkarFormImpl as UnwrappedForm } from './FodselVilkarForm';

describe('<FodselVilkarForm>', () => {
  it('skal vise readonly-form med utgråete knapper når readonly og vilkåret ikke er vurdert', () => {
    const wrapper = shallow(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      avslagsarsaker={[{
        kode: 'TEST_KODE',
        navn: 'testnavn',
        kodeverk: '',
      }]}
      lovReferanse="test"
      readOnly
      readOnlySubmitButton
      erVilkarOk={false}
      status={vilkarUtfallType.OPPFYLT}
      isApOpen
      behandlingId={1}
      behandlingVersjon={1}
      aksjonspunkter={[]}
      vilkar={[]}
      ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      initialValues={{
        erVilkarOk: true,
      }}
      alleKodeverk={{}}
      originalErVilkarOk
    />);

    const readonlyForm = wrapper.find(ProsessStegBegrunnelseTextField);
    expect(readonlyForm).toHaveLength(1);
    expect(readonlyForm.prop('readOnly')).toBe(true);
  });

  it('skal vise radioknapper og nedtrekksliste for å velge om vilkåret skal godkjennes eller avvises med avslagsgrunn når ikke readonly', () => {
    const wrapper = shallow(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      avslagsarsaker={[{
        kode: 'TEST_KODE',
        navn: 'testnavn',
        kodeverk: '',
      }]}
      lovReferanse="test"
      readOnly={false}
      readOnlySubmitButton
      erVilkarOk={undefined}
      status={vilkarUtfallType.OPPFYLT}
      isApOpen
      behandlingId={1}
      behandlingVersjon={1}
      aksjonspunkter={[]}
      vilkar={[]}
      ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      initialValues={{
        erVilkarOk: true,
      }}
      alleKodeverk={{}}
      originalErVilkarOk
    />);

    const selector = wrapper.find(VilkarResultPicker);
    expect(selector).toHaveLength(1);
    expect(selector.prop('avslagsarsaker')).toEqual([{
      kode: 'TEST_KODE',
      navn: 'testnavn',
      kodeverk: '',
    }]);
    expect(selector.prop('erVilkarOk')).toBeUndefined();

    expect(wrapper.find(ProsessStegBegrunnelseTextField)).toHaveLength(1);
    expect(wrapper.find('ConfirmInformationVilkarFormReadOnly')).toHaveLength(0);
  });

  it('skal vise readonly-form når status er readonly og status er ulik ikke vurdert', () => {
    const wrapper = shallow(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      avslagsarsaker={[]}
      lovReferanse="test"
      readOnly
      readOnlySubmitButton
      erVilkarOk
      status={vilkarUtfallType.OPPFYLT}
      isApOpen
      behandlingId={1}
      behandlingVersjon={1}
      aksjonspunkter={[]}
      vilkar={[]}
      ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      initialValues={{
        erVilkarOk: true,
      }}
      alleKodeverk={{}}
      originalErVilkarOk
    />);

    const readonlyForm = wrapper.find(ProsessStegBegrunnelseTextField);
    expect(readonlyForm).toHaveLength(1);
    expect(readonlyForm.prop('readOnly')).toBe(true);
  });

  it('skal sette opp initielle verdier for form gitt behandling og behandlingspunkt', () => {
    const behandlingsresultat = {
      avslagsarsak: {
        kode: 'TEST',
      },
    } as Behandling['behandlingsresultat'];
    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
      },
      begrunnelse: 'Dette er en begrunnelse',
      vilkarType: {
        kode: vilkarType.FODSELSVILKARET_MOR,
      },
    }] as Aksjonspunkt[];

    const initialValues = buildInitialValues.resultFunc(behandlingsresultat, aksjonspunkter, vilkarUtfallType.OPPFYLT);

    expect(initialValues).toEqual({
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
        kode: aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
      },
      status: {
        kode: aksjonspunktStatus.AVBRUTT,
      },
      begrunnelse: 'Dette er en begrunnelse',
      vilkarType: {
        kode: vilkarType.FODSELSVILKARET_MOR,
      },
    }] as Aksjonspunkt[];

    const initialValues = buildInitialValues.resultFunc(behandlingsresultat, aksjonspunkter, vilkarUtfallType.OPPFYLT);

    expect(initialValues).toEqual({
      erVilkarOk: true,
      avslagCode: undefined,
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
        kode: aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
      },
      status: {
        kode: aksjonspunktStatus.AVBRUTT,
      },
      begrunnelse: 'Dette er en begrunnelse',
      vilkarType: {
        kode: vilkarType.FODSELSVILKARET_MOR,
      },
    }] as Aksjonspunkt[];

    const initialValues = buildInitialValues.resultFunc(behandlingsresultat, aksjonspunkter, vilkarUtfallType.IKKE_OPPFYLT);

    expect(initialValues).toEqual({
      erVilkarOk: false,
      avslagCode: behandlingsresultat.avslagsarsak.kode,
      begrunnelse: aksjonspunkter[0].begrunnelse,
    });
  });
});
