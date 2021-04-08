import React from 'react';

import { getIntlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { RadioGroupField, TextAreaField } from '@fpsak-frontend/form';

import sarligGrunn from '../../../kodeverk/sarligGrunn';
import aktsomhet from '../../../kodeverk/aktsomhet';
import AktsomhetSarligeGrunnerFormPanel from './AktsomhetSarligeGrunnerFormPanel';
import AktsomhetGradUaktsomhetFormPanel from './AktsomhetGradUaktsomhetFormPanel';
import messages from '../../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<AktsomhetGradUaktsomhetFormPanel>', () => {
  const sarligGrunnTyper = [{
    kode: sarligGrunn.GRAD_AV_UAKTSOMHET,
    navn: 'grad av uaktsomhet',
    kodeverk: '',
  }, {
    kode: sarligGrunn.HELT_ELLER_DELVIS_NAVS_FEIL,
    navn: 'navs feil',
    kodeverk: '',
  }];

  it('skal måtte velge om en skal tilbakekreve beløp når totalbeløpet er under 4 rettsgebyr når grad er simpel uaktsom', () => {
    const wrapper = shallowWithIntl(<AktsomhetGradUaktsomhetFormPanel.WrappedComponent
      harGrunnerTilReduksjon
      readOnly={false}
      handletUaktsomhetGrad={aktsomhet.SIMPEL_UAKTSOM}
      erSerligGrunnAnnetValgt={false}
      sarligGrunnTyper={sarligGrunnTyper}
      harMerEnnEnYtelse
      feilutbetalingBelop={100}
      erTotalBelopUnder4Rettsgebyr
      intl={intlMock}
    />, messages);

    expect(wrapper.find(RadioGroupField)).toHaveLength(1);
    expect(wrapper.find(AktsomhetSarligeGrunnerFormPanel)).toHaveLength(1);
  });

  it('skal ikke måtte velge om en skal tilbakekreve beløp når totalbeløpet er under 4 rettsgebyr med grad er ulik simpel uaktsom', () => {
    const wrapper = shallowWithIntl(<AktsomhetGradUaktsomhetFormPanel.WrappedComponent
      harGrunnerTilReduksjon
      readOnly={false}
      handletUaktsomhetGrad={aktsomhet.GROVT_UAKTSOM}
      erSerligGrunnAnnetValgt={false}
      sarligGrunnTyper={sarligGrunnTyper}
      harMerEnnEnYtelse
      feilutbetalingBelop={100}
      erTotalBelopUnder4Rettsgebyr
      intl={intlMock}
    />, messages);

    expect(wrapper.find(RadioGroupField)).toHaveLength(0);
    expect(wrapper.find(TextAreaField)).toHaveLength(1);
    expect(wrapper.find(AktsomhetSarligeGrunnerFormPanel)).toHaveLength(1);
  });

  it('skal ikke måtte velge om en skal tilbakekreve beløp når totalbeløpet er over 4 rettsgebyr med grad er lik simpel uaktsom', () => {
    const wrapper = shallowWithIntl(<AktsomhetGradUaktsomhetFormPanel.WrappedComponent
      harGrunnerTilReduksjon
      readOnly={false}
      handletUaktsomhetGrad={aktsomhet.SIMPEL_UAKTSOM}
      erSerligGrunnAnnetValgt={false}
      sarligGrunnTyper={sarligGrunnTyper}
      harMerEnnEnYtelse
      feilutbetalingBelop={100}
      erTotalBelopUnder4Rettsgebyr={false}
      intl={intlMock}
    />, messages);

    expect(wrapper.find(RadioGroupField)).toHaveLength(0);
    expect(wrapper.find(TextAreaField)).toHaveLength(1);
    expect(wrapper.find(AktsomhetSarligeGrunnerFormPanel)).toHaveLength(1);
  });
});
