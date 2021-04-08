import React from 'react';
import { shallow } from 'enzyme';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { ProsessStegBegrunnelseTextField, VilkarResultPicker } from '@fpsak-frontend/prosess-felles';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { Aksjonspunkt, Behandling } from '@fpsak-frontend/types';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import { buildInitialValues, ErForeldreansvarVilkaarOppfyltForm as UnwrappedForm } from './ErForeldreansvarVilkaarOppfyltForm';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<ErForeldreansvarVilkaarOppfyltForm>', () => {
  const aksjonspunkterList = [{
    definisjon: {
      kode: aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD,
      kodeverk: '',
    },
    status: {
      kode: '',
      kodeverk: '',
    },
    vilkarType: {
      kode: vilkarType.FORELDREANSVARSVILKARET_2_LEDD,
      kodeverk: '',
    },
    begrunnelse: 'begrunnelse',
    kanLoses: true,
    erAktivt: true,
  }];

  it('skal vise readonly-form med utgråete knapper når readonly og vilkåret ikke er vurdert', () => {
    const wrapper = shallow(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      isEngangsstonad
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
      isForeldreansvar2Ledd
      status=""
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
      isEngangsstonad
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
      isForeldreansvar2Ledd
      status=""
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
    const aksjonspunkter = [{
      id: 1,
      definisjon: {
        kode: aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD,
        kodeverk: '',
      },
      status: {
        kode: '',
        kodeverk: '',
      },
      vilkarType: {
        kode: vilkarType.FORELDREANSVARSVILKARET_2_LEDD,
        kodeverk: '',
      },
      begrunnelse: 'begrunnelse',
      kanLoses: true,
      erAktivt: true,
    }];

    const wrapper = shallow(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      isEngangsstonad
      avslagsarsaker={[]}
      aksjonspunkter={aksjonspunkter}
      readOnly
      readOnlySubmitButton
      erVilkarOk
      behandlingId={1}
      behandlingVersjon={1}
      isForeldreansvar2Ledd
      status=""
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

  it('skal sette opp initielle0  verdier for form gitt behandling og behandlingspunkt', () => {
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
        kode: vilkarType.FORELDREANSVARSVILKARET_2_LEDD,
      },
      erAktivt: true,
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
        kode: 'test',
      },
      status: {
        kode: aksjonspunktStatus.AVBRUTT,
      },
      begrunnelse: 'Dette er en begrunnelse',
      vilkarType: {
        kode: vilkarType.FORELDREANSVARSVILKARET_2_LEDD,
      },
      erAktivt: true,
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
        kode: 'test',
      },
      status: {
        kode: aksjonspunktStatus.AVBRUTT,
      },
      begrunnelse: 'Dette er en begrunnelse',
      vilkarType: {
        kode: vilkarType.FORELDREANSVARSVILKARET_2_LEDD,
      },
      erAktivt: true,
    }] as Aksjonspunkt[];

    const initialValues = buildInitialValues.resultFunc(behandlingsresultat, aksjonspunkter, vilkarUtfallType.IKKE_OPPFYLT);

    expect(initialValues).toEqual({
      erVilkarOk: false,
      avslagCode: behandlingsresultat.avslagsarsak.kode,
      begrunnelse: aksjonspunkter[0].begrunnelse,
    });
  });
});
