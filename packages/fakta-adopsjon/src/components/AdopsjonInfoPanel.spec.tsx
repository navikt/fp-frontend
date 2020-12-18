import React from 'react';
import { shallow } from 'enzyme';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { AksjonspunktHelpTextTemp } from '@fpsak-frontend/shared-components';
import { FamilieHendelse, Personopplysninger, Soknad } from '@fpsak-frontend/types';

import { AdopsjonInfoPanelImpl } from './AdopsjonInfoPanel';
import DokumentasjonFaktaForm from './DokumentasjonFaktaForm';
import EktefelleFaktaForm from './EktefelleFaktaForm';
import MannAdoptererAleneFaktaForm from './MannAdoptererAleneFaktaForm';

describe('<AdopsjonInfoPanel>', () => {
  const adopsjonAksjonspunkt = {
    id: 1,
    definisjon: {
      kode: aksjonspunktCodes.ADOPSJONSDOKUMENTAJON,
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
  const ektefellesBarnAksjonspunkt = {
    id: 2,
    definisjon: {
      kode: aksjonspunktCodes.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
      kodeverk: 'ap1',
    },
    status: {
      kode: 's1',
      kodeverk: 's1',
    },
    toTrinnsBehandling: true,
    toTrinnsBehandlingGodkjent: false,
    kanLoses: true,
    erAktivt: true,
  };

  const editedStatus = {
    mannAdoptererAlene: false,
    ektefellesBarn: false,
    adopsjonFodelsedatoer: {},
    omsorgsovertakelseDato: false,
    barnetsAnkomstTilNorgeDato: false,
  };

  it('skal vise de to aksjonspunktene som alltid skal vises', () => {
    const wrapper = shallow(<AdopsjonInfoPanelImpl
      {...reduxFormPropsMock}
      initialValues={{ begrunnelse: 'test' }}
      aksjonspunkter={[adopsjonAksjonspunkt, ektefellesBarnAksjonspunkt]}
      hasOpenAksjonspunkter
      submittable
      readOnly={false}
      editedStatus={editedStatus}
      alleMerknaderFraBeslutter={{}}
      alleKodeverk={{}}
      isForeldrepengerFagsak
      behandlingId={1}
      behandlingVersjon={1}
      soknad={{} as Soknad}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      personopplysninger={{} as Personopplysninger}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
    />);

    const helpText = wrapper.find(AksjonspunktHelpTextTemp);
    expect(helpText).toHaveLength(1);
    expect(helpText.children()).toHaveLength(2);
    expect(helpText.childAt(0).prop('id')).toEqual('AdopsjonInfoPanel.KontrollerMotDok');
    expect(helpText.childAt(1).prop('id')).toEqual('AdopsjonInfoPanel.VurderOmEktefellesBarn');

    expect(wrapper.find(DokumentasjonFaktaForm)).toHaveLength(1);
    expect(wrapper.find(EktefelleFaktaForm)).toHaveLength(1);
    expect(wrapper.find(FaktaBegrunnelseTextField)).toHaveLength(1);
    expect(wrapper.find(FaktaSubmitButton)).toHaveLength(1);
  });

  it('skal vise alle tre adopsjonsaksjonspunktene', () => {
    const mannSokerAleneAksjonspunkt = {
      id: 3,
      definisjon: {
        kode: aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
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

    const wrapper = shallow(<AdopsjonInfoPanelImpl
      {...reduxFormPropsMock}
      initialValues={{ [`punkt${aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE}`]: 'test' }}
      aksjonspunkter={[adopsjonAksjonspunkt, ektefellesBarnAksjonspunkt, mannSokerAleneAksjonspunkt]}
      hasOpenAksjonspunkter
      submittable
      readOnly={false}
      editedStatus={editedStatus}
      alleMerknaderFraBeslutter={{}}
      alleKodeverk={{}}
      isForeldrepengerFagsak
      behandlingId={1}
      behandlingVersjon={1}
      soknad={{} as Soknad}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      personopplysninger={{} as Personopplysninger}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
    />);

    const helpText = wrapper.find(AksjonspunktHelpTextTemp);
    expect(helpText).toHaveLength(1);
    expect(helpText.children()).toHaveLength(3);
    expect(helpText.childAt(0).prop('id')).toEqual('AdopsjonInfoPanel.KontrollerMotDok');
    expect(helpText.childAt(1).prop('id')).toEqual('AdopsjonInfoPanel.VurderOmEktefellesBarn');
    expect(helpText.childAt(2).prop('id')).toEqual('AdopsjonInfoPanel.VurderOmMannAdoptererAlene');

    expect(wrapper.find(DokumentasjonFaktaForm)).toHaveLength(1);
    expect(wrapper.find(EktefelleFaktaForm)).toHaveLength(1);
    expect(wrapper.find(MannAdoptererAleneFaktaForm)).toHaveLength(1);
    expect(wrapper.find(FaktaBegrunnelseTextField)).toHaveLength(1);
    expect(wrapper.find(FaktaSubmitButton)).toHaveLength(1);
  });

  it('skal ikke vise hjelpetekster når saken er lukket', () => {
    const wrapper = shallow(<AdopsjonInfoPanelImpl
      {...reduxFormPropsMock}
      initialValues={{ begrunnelse: 'test' }}
      aksjonspunkter={[adopsjonAksjonspunkt, ektefellesBarnAksjonspunkt]}
      hasOpenAksjonspunkter={false}
      submittable
      readOnly
      editedStatus={editedStatus}
      alleMerknaderFraBeslutter={{}}
      alleKodeverk={{}}
      isForeldrepengerFagsak
      behandlingId={1}
      behandlingVersjon={1}
      soknad={{} as Soknad}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      personopplysninger={{} as Personopplysninger}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
    />);

    expect(wrapper.find('HelpText')).toHaveLength(0);
  });
});
