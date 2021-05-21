import React from 'react';
import sinon from 'sinon';

import { getIntlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import klageVurdering from '@fpsak-frontend/kodeverk/src/klageVurdering';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { AlleKodeverk, KlageVurdering } from '@fpsak-frontend/types';

import { BehandleKlageFormKaImpl } from './BehandleKlageFormKa';
import PreviewKlageLink from '../felles/PreviewKlageLink';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<BehandleKlageFormKaImpl>', () => {
  const sprakkode = {
    kode: 'NO',
    kodeverk: '',
  };
  const formValues1 = {
    fritekstTilBrev: '123',
    klageVurdering: {
      kode: klageVurdering.STADFESTE_YTELSESVEDTAK,
      kodeverk: '',
    },
  };

  it('skal vise lenke til forhåndsvis brev når fritekst er fylt, og klagevurdering valgt', () => {
    const wrapper = shallowWithIntl(<BehandleKlageFormKaImpl
      readOnly={false}
      readOnlySubmitButton
      formValues={formValues1}
      previewCallback={sinon.spy()}
      saveKlage={sinon.spy()}
      intl={intlMock}
      sprakkode={sprakkode}
      alleKodeverk={{} as AlleKodeverk}
      submitCallback={sinon.spy()}
      klageVurdering={{} as KlageVurdering}
      {...reduxFormPropsMock}
    />, messages);
    expect(wrapper.find('PreviewKlageLink')).toHaveLength(1);
  });
  const formValues2 = {
    fritekstTilBrev: '123',
  };

  it('skal ikke vise lenke til forhåndsvis brev når fritekst fylt, og klagevurdering ikke valgt', () => {
    const wrapper = shallowWithIntl(<BehandleKlageFormKaImpl
      readOnly={false}
      readOnlySubmitButton
      formValues={formValues2}
      previewCallback={sinon.spy()}
      saveKlage={sinon.spy()}
      intl={intlMock}
      sprakkode={sprakkode}
      alleKodeverk={{} as AlleKodeverk}
      submitCallback={sinon.spy()}
      klageVurdering={{} as KlageVurdering}
      {...reduxFormPropsMock}
    />, messages);
    expect(wrapper.find(PreviewKlageLink)).toHaveLength(0);
  });

  it('skal ikke vise lenke til forhåndsvis brev når fritekst ikke fylt, og klagevurdering valgt', () => {
    const formValues3 = {
      klageVurdering: {
        kode: klageVurdering.STADFESTE_YTELSESVEDTAK,
        kodeverk: '',
      },
    };

    const wrapper = shallowWithIntl(<BehandleKlageFormKaImpl
      readOnly={false}
      readOnlySubmitButton
      formValues={formValues3}
      previewCallback={sinon.spy()}
      saveKlage={sinon.spy()}
      intl={intlMock}
      sprakkode={sprakkode}
      alleKodeverk={{} as AlleKodeverk}
      submitCallback={sinon.spy()}
      klageVurdering={{} as KlageVurdering}
      {...reduxFormPropsMock}
    />, messages);
    expect(wrapper.find(PreviewKlageLink)).toHaveLength(0);
  });
});
