import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { FlexColumn } from '@fpsak-frontend/shared-components';

import TilbakekrevingEditerVedtaksbrevPanel from './brev/TilbakekrevingEditerVedtaksbrevPanel';
import { TilbakekrevingVedtakFormImpl as TilbakekrevingVedtakForm } from './TilbakekrevingVedtakForm';
import underavsnittType from '../kodeverk/avsnittType';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<TilbakekrevingVedtakForm>', () => {
  it('skal vise tekstfelt for begrunnelse og godkjenningsknapp', () => {
    const wrapper = shallow(<TilbakekrevingVedtakForm
      {...reduxFormPropsMock}
      intl={intlMock}
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      readOnly={false}
      fetchPreviewVedtaksbrev={sinon.spy()}
      formVerdier={{}}
      vedtaksbrevAvsnitt={[{
        avsnittstype: 'test',
        overskrift: 'Dette er en overskrift',
        underavsnittsliste: [{
          fritekstTillatt: false,
        }],
      }]}
      behandlingUuid="uuid"
      perioderSomIkkeHarUtfyltObligatoriskVerdi={[]}
      avsnittsliste={[]}
    />);

    expect(wrapper.find(TilbakekrevingEditerVedtaksbrevPanel)).toHaveLength(1);
    const knapp = wrapper.find(ProsessStegSubmitButton);
    expect(knapp).toHaveLength(1);
    expect(knapp.prop('isSubmittable')).toBe(true);
    expect(wrapper.find('a')).toHaveLength(1);
  });

  it('skal formatere data for forhåndsvisning av vedtaksbrevet', () => {
    const fetchPreview = sinon.spy();
    const wrapper = shallow(<TilbakekrevingVedtakForm
      {...reduxFormPropsMock}
      intl={intlMock}
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      readOnly={false}
      fetchPreviewVedtaksbrev={fetchPreview}
      formVerdier={{
        OPPSUMMERING: 'Dette er oppsummeringen',
        '2019-10-10_2019-11-10': {
          FAKTA: 'dette er faktateksten',
          FORELDELSE: 'dette er foreldelseteksten',
          VILKÅR: 'dette er vilkårteksten',
          SÆRLIGEGRUNNER: 'dette er særligegrunnerteksten',
          SÆRLIGEGRUNNER_ANNET: 'dette er særligegrunnerteksten for annet',
        },
      }}
      vedtaksbrevAvsnitt={[{
        avsnittstype: 'test',
        overskrift: 'Dette er en overskrift',
        underavsnittsliste: [{
          fritekstTillatt: false,
        }],
      }]}
      behandlingUuid="uuid"
      perioderSomIkkeHarUtfyltObligatoriskVerdi={[]}
      avsnittsliste={[]}
    />);

    // @ts-ignore
    wrapper.find('a').prop('onClick')({ preventDefault: sinon.spy() });

    expect(fetchPreview.calledOnce).toBe(true);
    expect(fetchPreview.getCalls()[0].args[0]).toEqual({
      uuid: 'uuid',
      oppsummeringstekst: 'Dette er oppsummeringen',
      perioderMedTekst: [{
        fom: '2019-10-10',
        tom: '2019-11-10',
        faktaAvsnitt: 'dette er faktateksten',
        foreldelseAvsnitt: 'dette er foreldelseteksten',
        vilkaarAvsnitt: 'dette er vilkårteksten',
        saerligeGrunnerAvsnitt: 'dette er særligegrunnerteksten',
        saerligeGrunnerAnnetAvsnitt: 'dette er særligegrunnerteksten for annet',
      }],
    });
  });

  it('skal ikke vise trykkbar godkjenningsknapp og forhåndsvisningslenke når obligatoriske verdier ikke er utfylt', () => {
    const wrapper = shallow(<TilbakekrevingVedtakForm
      {...reduxFormPropsMock}
      intl={intlMock}
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      readOnly={false}
      fetchPreviewVedtaksbrev={sinon.spy()}
      formVerdier={{}}
      vedtaksbrevAvsnitt={[{
        avsnittstype: 'test',
        overskrift: 'Dette er en overskrift',
        underavsnittsliste: [{
          fritekstTillatt: false,
        }],
      }]}
      behandlingUuid="uuid"
      perioderSomIkkeHarUtfyltObligatoriskVerdi={['2019-01-01_2019-02-02']}
      avsnittsliste={[]}
    />);

    const knapp = wrapper.find(ProsessStegSubmitButton);
    expect(knapp).toHaveLength(1);
    expect(knapp.prop('isSubmittable')).toBe(false);
    expect(wrapper.find('a')).toHaveLength(0);
  });

  it('skal ikke vise trykkbar godkjenningsknapp og forhåndsvisningslenke når obligatorisk oppsummering for revurdering tilbakekreving ikke er utfylt', () => {
    const wrapper = shallow(<TilbakekrevingVedtakForm
      {...reduxFormPropsMock}
      intl={intlMock}
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      readOnly={false}
      fetchPreviewVedtaksbrev={sinon.spy()}
      formVerdier={{}}
      vedtaksbrevAvsnitt={[{
        avsnittstype: 'test',
        overskrift: 'Dette er en overskrift',
        underavsnittsliste: [{
          fritekstTillatt: false,
        }],
      }, {
        avsnittstype: underavsnittType.OPPSUMMERING,
        overskrift: 'Dette er en overskrift',
        underavsnittsliste: [{
          fritekstTillatt: false,
        }],
      }]}
      behandlingUuid="uuid"
      perioderSomIkkeHarUtfyltObligatoriskVerdi={[]}
      erRevurderingTilbakekrevingKlage
      fritekstOppsummeringPakrevdMenIkkeUtfylt
      avsnittsliste={[]}
    />);

    const knapp = wrapper.find(ProsessStegSubmitButton);
    expect(knapp).toHaveLength(1);
    expect(knapp.prop('isSubmittable')).toBe(false);
    expect(wrapper.find('a')).toHaveLength(1);
    const flexColumns = wrapper.find(FlexColumn);
    expect(flexColumns).toHaveLength(5);
  });
});
