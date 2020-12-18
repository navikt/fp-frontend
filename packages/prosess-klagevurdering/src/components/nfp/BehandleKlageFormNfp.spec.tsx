import React from 'react';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import sinon from 'sinon';

import klageVurdering from '@fpsak-frontend/kodeverk/src/klageVurdering';
import { KlageVurdering } from '@fpsak-frontend/types';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';

import { BehandleKlageFormNfpImpl } from './BehandleKlageFormNfp';
import PreviewKlageLink from '../felles/PreviewKlageLink';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-prosess-klagevurdering';

describe('<BehandleKlageFormNfpImpl>', () => {
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
    const wrapper = shallowWithIntl(<BehandleKlageFormNfpImpl
      readOnly={false}
      readOnlySubmitButton
      formValues={formValues1}
      previewCallback={sinon.spy()}
      saveKlage={sinon.spy()}
      intl={intlMock}
      sprakkode={sprakkode}
      alleKodeverk={{}}
      behandlingId={1}
      behandlingVersjon={2}
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      klageVurdering={{} as KlageVurdering}
      {...reduxFormPropsMock}
    />);
    expect(wrapper.find('PreviewKlageLink')).toHaveLength(1);
  });
  const formValues2 = {
    fritekstTilBrev: '123',
  };

  it('skal ikke vise lenke til forhåndsvis brev når fritekst fylt, og klagevurdering ikke valgt', () => {
    const wrapper = shallowWithIntl(<BehandleKlageFormNfpImpl
      readOnly={false}
      readOnlySubmitButton
      formValues={formValues2}
      previewCallback={sinon.spy()}
      saveKlage={sinon.spy()}
      intl={intlMock}
      sprakkode={sprakkode}
      alleKodeverk={{}}
      behandlingId={1}
      behandlingVersjon={2}
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      klageVurdering={{} as KlageVurdering}
      {...reduxFormPropsMock}
    />);
    expect(wrapper.find(PreviewKlageLink)).toHaveLength(0);
  });

  it('skal ikke vise lenke til forhåndsvis brev når fritekst ikke fylt, og klagevurdering valgt', () => {
    const formValues3 = {
      klageVurdering: {
        kode: klageVurdering.STADFESTE_YTELSESVEDTAK,
        kodeverk: '',
      },
    };

    const wrapper = shallowWithIntl(<BehandleKlageFormNfpImpl
      readOnly={false}
      readOnlySubmitButton
      formValues={formValues3}
      previewCallback={sinon.spy()}
      saveKlage={sinon.spy()}
      intl={intlMock}
      sprakkode={sprakkode}
      alleKodeverk={{}}
      behandlingId={1}
      behandlingVersjon={2}
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      klageVurdering={{} as KlageVurdering}
      {...reduxFormPropsMock}
    />);
    expect(wrapper.find(PreviewKlageLink)).toHaveLength(0);
  });
});
