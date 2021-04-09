import React from 'react';
import { Element } from 'nav-frontend-typografi';

import { Behandlingsresultat, BeregningsresultatEs } from '@fpsak-frontend/types';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import VedtakFritekstPanel from '../felles/VedtakFritekstPanel';
import VedtakInnvilgetPanel from './VedtakInnvilgetPanel';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

const behandlingsresultat: Partial<Behandlingsresultat> = {
  type: {
    kode: 'INNVILGET',
    kodeverk: '',
  },
};

describe('<VedtakInnvilgetPanel>', () => {
  it('skal rendre innvilget panel for engangsstønad', () => {
    const wrapper = shallowWithIntl(<VedtakInnvilgetPanel.WrappedComponent
      intl={intlMock}
      behandlingsresultat={behandlingsresultat as Behandlingsresultat}
      ytelseTypeKode={fagsakYtelseType.ENGANGSSTONAD}
      readOnly
      skalBrukeOverstyrendeFritekstBrev
      beregningErManueltFastsatt={false}
      resultatstruktur={{
        beregnetTilkjentYtelse: 100,
        antallBarn: 1,
      } as BeregningsresultatEs}
    />, messages);

    const elementFields = wrapper.find(Element);
    expect(elementFields).toHaveLength(2);
    expect(elementFields.first().childAt(0).text()).toEqual('100 kr');
    expect(elementFields.last().childAt(0).text()).toEqual('1');
  });

  it('skal rendre fritekstpanel for foreldrepenger', () => {
    const wrapper = shallowWithIntl(<VedtakInnvilgetPanel.WrappedComponent
      intl={intlMock}
      behandlingsresultat={behandlingsresultat as Behandlingsresultat}
      ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
      readOnly
      skalBrukeOverstyrendeFritekstBrev={false}
      beregningErManueltFastsatt
    />, messages);

    expect(wrapper.find(VedtakFritekstPanel)).toHaveLength(1);
  });
});
