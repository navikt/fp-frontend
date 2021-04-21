import React from 'react';

import { getIntlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { Image } from '@fpsak-frontend/shared-components';
import { TextAreaField } from '@fpsak-frontend/form';

import { TilbakekrevingVedtakUtdypendeTekstPanel } from './TilbakekrevingVedtakUtdypendeTekstPanel';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<TilbakekrevingVedtakUtdypendeTekstPanel>', () => {
  it('skal vise lenke for å skrive inn tekst når felt ikke har verdi og en ikke er i readonly-modus', () => {
    const wrapper = shallowWithIntl(<TilbakekrevingVedtakUtdypendeTekstPanel
      intl={intlMock}
      isEmpty
      type="OPPSUMMERING"
      readOnly={false}
      fritekstPakrevet={false}
      formName="test"
    />, messages);

    expect(wrapper.find(Image)).toHaveLength(1);
    expect(wrapper.find(TextAreaField)).toHaveLength(0);
  });

  it('skal vise textarea når en har trykket på lenke', () => {
    const wrapper = shallowWithIntl(<TilbakekrevingVedtakUtdypendeTekstPanel
      intl={intlMock}
      isEmpty={false}
      type="OPPSUMMERING"
      readOnly={false}
      fritekstPakrevet={false}
      formName="test"
    />, messages);

    expect(wrapper.find(Image)).toHaveLength(0);
    expect(wrapper.find(TextAreaField)).toHaveLength(1);
  });

  it('skal vise textarea når fritekst er påkrevet', () => {
    const wrapper = shallowWithIntl(<TilbakekrevingVedtakUtdypendeTekstPanel
      intl={intlMock}
      isEmpty
      type="OPPSUMMERING"
      readOnly={false}
      fritekstPakrevet
      formName="test"
    />, messages);

    expect(wrapper.find(Image)).toHaveLength(0);
    expect(wrapper.find(TextAreaField)).toHaveLength(1);
  });

  it('skal ikke vise lenke eller textarea når verdi ikke finnes og en er i readonly-modus', () => {
    const wrapper = shallowWithIntl(<TilbakekrevingVedtakUtdypendeTekstPanel
      intl={intlMock}
      isEmpty
      type="OPPSUMMERING"
      readOnly
      fritekstPakrevet={false}
      formName="test"
    />, messages);

    expect(wrapper.find(Image)).toHaveLength(0);
    expect(wrapper.find(TextAreaField)).toHaveLength(0);
  });
});
