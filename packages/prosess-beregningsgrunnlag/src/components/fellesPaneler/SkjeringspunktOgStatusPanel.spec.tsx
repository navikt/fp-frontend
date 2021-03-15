import React from 'react';
import { shallow } from 'enzyme';

import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { DateLabel } from '@fpsak-frontend/shared-components';
import SkjeringspunktOgStatusPanel, { RADIO_GROUP_FIELD_DEKNINGSGRAD_NAVN, SkjeringspunktOgStatusPanelImpl } from './SkjeringspunktOgStatusPanel';

const skjeringstidspunktDato = '2017-12-12';
const aktivitetstatusList = [{
  kode: aktivitetStatus.ARBEIDSTAKER,
  kodeverk: 'test',
}, {
  kode: aktivitetStatus.FRILANSER,
  kodeverk: 'test',
},
];

const getKodeverknavn = (kodeverk) => {
  if (kodeverk.kode === aktivitetStatus.ARBEIDSTAKER) {
    return 'Arbeidstaker';
  }
  if (kodeverk.kode === aktivitetStatus.FRILANSER) {
    return 'Frilanser';
  }

  return '';
};

describe('<SkjeringspunktOgStatusPanel>', () => {
  it('Skal teste at komponenten renderer riktig skjeringstidspunkt', () => {
    const wrapper = shallow(<SkjeringspunktOgStatusPanelImpl
      aktivitetStatusList={aktivitetstatusList}
      skjeringstidspunktDato={skjeringstidspunktDato}
      getKodeverknavn={getKodeverknavn}
      alleKodeverk={{}}
    />);

    const messages = wrapper.find('FormattedMessage');
    expect(messages).toHaveLength(1);
    expect(messages.first().props().id).toBe('Beregningsgrunnlag.Skjeringstidspunkt.SkjeringForBeregning');
    const dato = wrapper.find(DateLabel);
    expect(dato.first().props().dateString).toBe(skjeringstidspunktDato);
  });

  it('Skal teste buildInitialValues når ingen aksjonspunkt', () => {
    const dekningsgradFraSoknad = 100;
    const gjeldendeAksjonspunkter = [];
    const initialValues = SkjeringspunktOgStatusPanel.buildInitialValues(dekningsgradFraSoknad, gjeldendeAksjonspunkter);
    expect(initialValues[RADIO_GROUP_FIELD_DEKNINGSGRAD_NAVN]).toBeUndefined();
  });
});
