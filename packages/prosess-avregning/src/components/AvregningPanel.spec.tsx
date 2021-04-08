import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import sinon from 'sinon';
import { Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import tilbakekrevingVidereBehandling from '@fpsak-frontend/kodeverk/src/tilbakekrevingVidereBehandling';
import { Fagsak, SimuleringResultat } from '@fpsak-frontend/types';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import AvregningSummary from './AvregningSummary';
import AvregningTable from './AvregningTable';
import { AvregningPanelImpl, transformValues } from './AvregningPanel';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

const simuleringResultat = {
  simuleringResultat: {
    periodeFom: '2018-09-01',
    periodeTom: '2018-12-31',
    sumFeilutbetaling: 0,
    sumEtterbetaling: 0,
    sumInntrekk: 0,
    ingenPerioderMedAvvik: false,
  },
  simuleringResultatUtenInntrekk: null,
} as SimuleringResultat;

const mockProps = {
  ...reduxFormPropsMock,
  simuleringResultat,
  isApOpen: false,
  intl: intlMock,
  apCodes: [],
  readOnly: false,
  erTilbakekrevingVilkårOppfylt: false,
  grunnerTilReduksjon: false,
  previewCallback: sinon.spy(),
  hasOpenTilbakekrevingsbehandling: false,
  fagsak: {} as Fagsak,
  behandlingId: 1,
  behandlingVersjon: 2,
  sprakkode: {
    kode: 'NB',
    kodeverk: '',
  },
  saksnummer: '123',
  aksjonspunkter: [],
  submitCallback: sinon.spy(),
  onSubmit: sinon.spy(),
  readOnlySubmitButton: false,
  isForeldrepenger: true,
  behandlingFormPrefix: '',
};

describe('<AvregningPanelImpl>', () => {
  it('skal rendre AvregningPanel', () => {
    const wrapper = shallowWithIntl(<AvregningPanelImpl
      {...mockProps}
    />, messages);

    const formattedMessage = wrapper.find(FormattedMessage);
    expect(formattedMessage).toHaveLength(2);
    expect(formattedMessage.first().prop('id')).toEqual('Avregning.Title');
    const undertittel = wrapper.find(Undertittel);
    expect(undertittel).toHaveLength(1);
    const avregningSummary = wrapper.find(AvregningSummary);
    expect(avregningSummary).toHaveLength(1);
    const avregningTable = wrapper.find(AvregningTable);
    expect(avregningTable).toHaveLength(1);
    const row = wrapper.find(Row);
    expect(row).toHaveLength(1);
    const column = wrapper.find(Column);
    expect(column).toHaveLength(1);
    const form = wrapper.find('form');
    expect(form).toHaveLength(0);
  });

  it('skal rendre form med RadioGroup med to valg når aksjonspunkt 5084 er aktivt', () => {
    const props = {
      ...mockProps,
      apCodes: ['5084'],
    };
    const wrapper = shallow(<AvregningPanelImpl
      {...props}
    />);

    const form = wrapper.find('form');
    expect(form).toHaveLength(1);
    const radioGroupField = wrapper.find(RadioGroupField);
    expect(radioGroupField).toHaveLength(1);
    expect(radioGroupField.at(0).prop('name')).toEqual('videreBehandling');
    const radioOption = wrapper.find(RadioOption);
    expect(radioOption).toHaveLength(3);
    const radioOptionGjennomfør = radioOption.at(0);
    expect(radioOptionGjennomfør.prop('label')).toEqual(<FormattedMessage id="Avregning.gjennomfør" />);
    const radioOptionOpprett = radioOption.at(1);
    expect(radioOptionOpprett.prop('label')).toEqual(<FormattedMessage id="Avregning.OpprettMenIkkeSendVarsel" />);
    const radioOptionAvvent = radioOption.at(2);
    expect(radioOptionAvvent.prop('label')).toEqual(<FormattedMessage id="Avregning.avvent" />);
  });

  it('method toggleDetails skal oppdatere og toggle tabeler med showDetails state', () => {
    const id = 7;
    const wrapper = shallow(<AvregningPanelImpl
      {...mockProps}
    />);

    expect(wrapper.state('showDetails')).toEqual([]);
    // @ts-ignore
    wrapper.instance().toggleDetails(id);
    expect(wrapper.state('showDetails')).toEqual([{ id, show: true }]);
    // @ts-ignore
    wrapper.instance().toggleDetails(id);
    expect(wrapper.state('showDetails')).toEqual([{ id, show: false }]);
  });

  it('feilutbetaling oppdateres ikke når aksjonspunkt er ikke 5085', () => {
    const props = {
      ...mockProps,
      apCodes: ['5084'],
      erTilbakekrevingVilkårOppfylt: undefined,
    };
    const wrapper = shallow(<AvregningPanelImpl
      {...props}
    />);

    expect(wrapper.state('feilutbetaling')).toEqual(undefined);
    wrapper.setProps({ erTilbakekrevingVilkårOppfylt: true });
    expect(wrapper.state('feilutbetaling')).toEqual(undefined);
  });

  it('skal vise tekst for åpen tilbakekrevingsbehandling', () => {
    const props = {
      ...mockProps,
      apCodes: ['5084'],
      erTilbakekrevingVilkårOppfylt: undefined,
      hasOpenTilbakekrevingsbehandling: true,
    };
    const wrapper = shallow(<AvregningPanelImpl
      {...props}
    />);

    expect(wrapper.find('[id="Avregning.ApenTilbakekrevingsbehandling"]')).toHaveLength(1);
  });

  it('skal ikke vise tekst for åpen tilbakekrevingsbehandling', () => {
    const props = {
      ...mockProps,
      apCodes: ['5084'],
      erTilbakekrevingVilkårOppfylt: undefined,
      hasOpenTilbakekrevingsbehandling: false,
    };
    const wrapper = shallow(<AvregningPanelImpl
      {...props}
    />);

    expect(wrapper.find('[id="Avregning.ApenTilbakekrevingsbehandling"]')).toHaveLength(0);
  });

  it('transform values skal returnere inntrekk som videre behandling gitt at vilkår er oppfylt og grunnerTilReduksjon er false', () => {
    const values = {
      erTilbakekrevingVilkårOppfylt: true,
      grunnerTilReduksjon: false,
      videreBehandling: tilbakekrevingVidereBehandling.TILBAKEKR_INFOTRYGD,
    };
    const apCode = '5084';

    const transformedValues = transformValues(values, apCode);
    expect(transformedValues.kode).toEqual(apCode);
    expect(transformedValues.videreBehandling).toEqual(tilbakekrevingVidereBehandling.TILBAKEKR_INFOTRYGD);
  });

  it('transform values skal returnere verdi av videre behandling gitt at vilkår er oppfylt og grunnerTilReduksjon er true', () => {
    const values = {
      erTilbakekrevingVilkårOppfylt: true,
      grunnerTilReduksjon: true,
    };
    const apCode = '5084';

    const transformedValuesInfotrygd = transformValues({ ...values, videreBehandling: tilbakekrevingVidereBehandling.TILBAKEKR_INFOTRYGD }, apCode);
    expect(transformedValuesInfotrygd.kode).toEqual(apCode);
    expect(transformedValuesInfotrygd.videreBehandling).toEqual(tilbakekrevingVidereBehandling.TILBAKEKR_INFOTRYGD);
    const transformedValuesIgnorer = transformValues({ ...values, videreBehandling: tilbakekrevingVidereBehandling.TILBAKEKR_IGNORER }, apCode);
    expect(transformedValuesIgnorer.videreBehandling).toEqual(tilbakekrevingVidereBehandling.TILBAKEKR_IGNORER);
  });
});
