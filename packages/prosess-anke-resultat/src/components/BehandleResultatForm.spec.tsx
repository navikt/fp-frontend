import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Undertekst } from 'nav-frontend-typografi';

import ankeVurdering from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AnkeVurdering } from '@fpsak-frontend/types';
import ankeVurderingOmgjoer from '@fpsak-frontend/kodeverk/src/ankeVurderingOmgjoer';
import ankeOmgjorArsak from '@fpsak-frontend/kodeverk/src/ankeOmgjorArsak';

import {
  AnkeResultatForm, AnkeResultat, ResultatEnkel, ResultatOpphev,
  ResultatHjemsend, ResultatOmgjores, ResultatAvvise,
} from './BehandleResultatForm';
import PreviewAnkeLink from './PreviewAnkeLink';

import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<BehandleResultatForm>', () => {
  it('skal kunne sende til medunderskriver når aksjonspunkt er FORESLA_VEDTAK', () => {
    const wrapper = shallow(<AnkeResultatForm
      {...reduxFormPropsMock}
      intl={intlMock}
      previewCallback={sinon.spy()}
      aksjonspunktCode={AksjonspunktCode.FORESLA_VEDTAK}
      readOnly={false}
      alleKodeverk={{}}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
    />);

    expect(wrapper.find(PreviewAnkeLink)).toHaveLength(0);
    const button = wrapper.find(ProsessStegSubmitButton);
    expect(button).toHaveLength(2);
    expect(button.at(0).props().isSubmittable).toBe(true);
    expect(button.at(1).props().isSubmittable).toBe(false);
  });

  it('skal kunne ferdigstille når aksjonspunkt er VEDTAK_UTEN_TOTRINNSKONTROLL', () => {
    const wrapper = shallow(<AnkeResultatForm
      {...reduxFormPropsMock}
      intl={intlMock}
      previewCallback={sinon.spy()}
      aksjonspunktCode={AksjonspunktCode.VEDTAK_UTEN_TOTRINNSKONTROLL}
      readOnly={false}
      alleKodeverk={{}}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
    />);

    expect(wrapper.find(PreviewAnkeLink)).toHaveLength(0);
    const button = wrapper.find(ProsessStegSubmitButton);
    expect(button).toHaveLength(2);
    expect(button.at(0).props().isSubmittable).toBe(false);
    expect(button.at(1).props().isSubmittable).toBe(true);
    expect(button.at(1).props().text).toBe('Vent på merknader');
  });

  it('skal kunne forhåndsvise når ankevurderingsverdi er ANKE_OPPHEVE_OG_HJEMSENDE', () => {
    const wrapper = shallow(<AnkeResultatForm
      {...reduxFormPropsMock}
      intl={intlMock}
      previewCallback={sinon.spy()}
      aksjonspunktCode={AksjonspunktCode.VEDTAK_UTEN_TOTRINNSKONTROLL}
      readOnly={false}
      alleKodeverk={{}}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      ankeVurderingVerdi={{
        kode: ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE,
        kodeverk: '',
      }}
    />);

    expect(wrapper.find(PreviewAnkeLink)).toHaveLength(1);
  });

  it('skal bruke ResultatEnkel når en stadfester ytelsesvedtak', () => {
    const wrapper = shallow(<AnkeResultat
      ankeVurderingResultat={{
        ankeVurdering: {
          kode: ankeVurdering.ANKE_STADFESTE_YTELSESVEDTAK,
          kodeverk: '',
        },
      } as AnkeVurdering['ankeVurderingResultat']}
      alleKodeverk={{}}
    />);

    expect(wrapper.find(ResultatEnkel)).toHaveLength(1);
  });

  it('skal bruke ResultatOpphev når en opphever ytelsesvedtak', () => {
    const wrapper = shallow(<AnkeResultat
      ankeVurderingResultat={{
        ankeVurdering: {
          kode: ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE,
          kodeverk: '',
        },
      } as AnkeVurdering['ankeVurderingResultat']}
      alleKodeverk={{}}
    />);

    expect(wrapper.find(ResultatOpphev)).toHaveLength(1);
  });

  it('skal bruke ResultatHjemsend når hjemsendt uten opphav', () => {
    const wrapper = shallow(<AnkeResultat
      ankeVurderingResultat={{
        ankeVurdering: {
          kode: ankeVurdering.ANKE_HJEMSENDE_UTEN_OPPHEV,
          kodeverk: '',
        },
      } as AnkeVurdering['ankeVurderingResultat']}
      alleKodeverk={{}}
    />);

    expect(wrapper.find(ResultatHjemsend)).toHaveLength(1);
  });

  it('skal bruke ResultatOmgjores når en omgjør ytelsesvedtak', () => {
    const wrapper = shallow(<AnkeResultat
      ankeVurderingResultat={{
        ankeVurdering: {
          kode: ankeVurdering.ANKE_OMGJOER,
          kodeverk: '',
        },
      } as AnkeVurdering['ankeVurderingResultat']}
      alleKodeverk={{}}
    />);

    expect(wrapper.find(ResultatOmgjores)).toHaveLength(1);
  });

  it('skal bruke ResultatAvvise når en avviser ytelsesvedtak', () => {
    const wrapper = shallow(<AnkeResultat
      ankeVurderingResultat={{
        ankeVurdering: {
          kode: ankeVurdering.ANKE_AVVIS,
          kodeverk: '',
        },
      } as AnkeVurdering['ankeVurderingResultat']}
      alleKodeverk={{}}
    />);

    expect(wrapper.find(ResultatAvvise)).toHaveLength(1);
  });

  it('skal rendre ResultatEnkel-komponent korrekt', () => {
    const wrapper = shallow(<ResultatEnkel
      ankeVurderingResultat={{
        begrunnelse: 'test',
      } as AnkeVurdering['ankeVurderingResultat']}
    />);

    const tekst = wrapper.find(Undertekst);
    expect(tekst).toHaveLength(3);
    expect(tekst.at(2).childAt(0).text()).toBe('test');
  });

  it('skal rendre ResultatOpphev-komponent korrekt', () => {
    const wrapper = shallow(<ResultatOpphev
      ankeVurderingResultat={{
        begrunnelse: 'test',
      } as AnkeVurdering['ankeVurderingResultat']}
    />);

    const tekst = wrapper.find(Undertekst);
    expect(tekst).toHaveLength(3);
    expect(tekst.at(2).childAt(0).text()).toBe('test');
  });

  it('skal rendre ResultatHjemsend-komponent korrekt', () => {
    const wrapper = shallow(<ResultatHjemsend
      ankeVurderingResultat={{
        begrunnelse: 'test',
      } as AnkeVurdering['ankeVurderingResultat']}
    />);

    const tekst = wrapper.find(Undertekst);
    expect(tekst).toHaveLength(3);
    expect(tekst.at(2).childAt(0).text()).toBe('test');
  });

  it('skal rendre ResultatAvvise-komponent korrekt', () => {
    const wrapper = shallow(<ResultatAvvise
      ankeVurderingResultat={{
        begrunnelse: 'test',
      } as AnkeVurdering['ankeVurderingResultat']}
    />);

    const tekst = wrapper.find(Undertekst);
    expect(tekst).toHaveLength(5);
    expect(tekst.at(4).childAt(0).text()).toBe('test');
  });

  it('skal rendre ResultatOmgjores-komponent korrekt', () => {
    const wrapper = shallow(<ResultatOmgjores
      ankeVurderingResultat={{
        begrunnelse: 'test',
        ankeVurderingOmgjoer: {
          kode: ankeVurderingOmgjoer.ANKE_TIL_UGUNST,
          kodeverk: '',
        },
      } as AnkeVurdering['ankeVurderingResultat']}
      alleKodeverk={{}}
    />);

    const tekst = wrapper.find(Undertekst);
    expect(tekst).toHaveLength(3);
    expect(tekst.at(2).childAt(0).text()).toBe('test');
  });

  it('skal vise årsak når en har omgjøringsårsak', () => {
    const wrapper = shallow(<ResultatOmgjores
      ankeVurderingResultat={{
        begrunnelse: 'test',
        ankeVurderingOmgjoer: {
          kode: ankeVurderingOmgjoer.ANKE_TIL_UGUNST,
          kodeverk: '',
        },
        ankeOmgjoerArsak: {
          kode: ankeOmgjorArsak.NYE_OPPLYSNINGER,
          kodeverk: 'ANKE_OMGJOER_AARSAK',
        },
      } as AnkeVurdering['ankeVurderingResultat']}
      alleKodeverk={{
        AnkeOmgjørÅrsak: [{
          kode: ankeOmgjorArsak.NYE_OPPLYSNINGER,
          kodeverk: 'ANKE_OMGJOER_AARSAK',
          navn: 'Nye opplysninger',
        }],
      }}
    />);

    const tekst = wrapper.find(Undertekst);
    expect(tekst).toHaveLength(5);
    expect(tekst.at(2).childAt(0).text()).toBe('Nye opplysninger');
  });
});
