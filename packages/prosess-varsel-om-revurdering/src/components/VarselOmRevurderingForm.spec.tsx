import React from 'react';
import sinon from 'sinon';

import FodselSammenligningIndex from '@fpsak-frontend/prosess-fakta-fodsel-sammenligning';
import { getIntlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { FamilieHendelse, Soknad, FamilieHendelseSamling } from '@fpsak-frontend/types';

import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { VarselOmRevurderingFormImpl as UnwrappedForm } from './VarselOmRevurderingForm';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

const soknad = {
  fodselsdatoer: { 1: '2019-01-10' } as {[key: number]: string},
  termindato: '2019-01-01',
  utstedtdato: '2019-01-02',
  antallBarn: 1,
} as Soknad;

const originalBehandling = {
  soknad,
  familiehendelse: {
    termindato: '2019-01-01',
    avklartBarn: [{
      fodselsdato: '2019-01-10',
    }],
    antallBarnTermin: 1,
  } as FamilieHendelse,
};

const sprakkode = {
  kode: 'NO',
  kodeverk: '',
};

describe('<VarselOmRevurderingFormImpl>', () => {
  it('skal vise fodselsammenligningpanel når automatisk revurdering', () => {
    const wrapper = shallowWithIntl(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      previewCallback={sinon.spy()}
      dispatchSubmitFailed={sinon.spy()}
      erAutomatiskRevurdering
      language="Nynorsk"
      readOnly={false}
      sendVarsel
      aksjonspunktStatus="OPPR"
      begrunnelse="Begrunnelse"
      avklartBarn={[]}
      soknad={soknad}
      termindato="2019-01-01"
      soknadOriginalBehandling={originalBehandling.soknad}
      familiehendelseOriginalBehandling={originalBehandling.familiehendelse}
      vedtaksDatoSomSvangerskapsuke={43}
      behandlingId={1}
      behandlingVersjon={2}
      behandlingArsaker={[]}
      sprakkode={sprakkode}
      behandlingType={{
        kode: behandlingType.FORSTEGANGSSOKNAD,
        kodeverk: '',
      }}
      familiehendelse={{} as FamilieHendelseSamling}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      alleKodeverk={{}}
      kode=""
      ventearsaker={[]}
    />, messages);
    const fodselPanel = wrapper.find(FodselSammenligningIndex);
    expect(fodselPanel).toHaveLength(1);
  });

  it('skal vise fritekst og forhåndsvis av brev når varsel skal sendes', () => {
    const wrapper = shallowWithIntl(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      previewCallback={sinon.spy()}
      dispatchSubmitFailed={sinon.spy()}
      erAutomatiskRevurdering={false}
      language="Nynorsk"
      readOnly={false}
      sendVarsel
      aksjonspunktStatus="OPPR"
      begrunnelse="Begrunnelse"
      avklartBarn={[]}
      soknad={soknad}
      termindato="2019-01-01"
      soknadOriginalBehandling={originalBehandling.soknad}
      familiehendelseOriginalBehandling={originalBehandling.familiehendelse}
      vedtaksDatoSomSvangerskapsuke={43}
      behandlingId={1}
      behandlingVersjon={2}
      behandlingArsaker={[]}
      sprakkode={sprakkode}
      behandlingType={{
        kode: behandlingType.FORSTEGANGSSOKNAD,
        kodeverk: '',
      }}
      familiehendelse={{} as FamilieHendelseSamling}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      alleKodeverk={{}}
      kode=""
      ventearsaker={[]}
    />, messages);
    const fodselPanel = wrapper.find(FodselSammenligningIndex);
    expect(fodselPanel).toHaveLength(0);

    const textarea = wrapper.find('TextAreaField');
    const forhandsvis = wrapper.find('a');
    expect(textarea).toHaveLength(2);
    expect(forhandsvis).toHaveLength(1);
  });

  it('skal ikke vise fritekst og forhåndsvis av brev når varsel ikke skal sendes', () => {
    const wrapper = shallowWithIntl(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      previewCallback={sinon.spy()}
      dispatchSubmitFailed={sinon.spy()}
      erAutomatiskRevurdering={false}
      language="Nynorsk"
      readOnly={false}
      sendVarsel={false}
      aksjonspunktStatus="OPPR"
      begrunnelse="Begrunnelse"
      avklartBarn={[]}
      soknad={soknad}
      termindato="2019-01-01"
      soknadOriginalBehandling={originalBehandling.soknad}
      familiehendelseOriginalBehandling={originalBehandling.familiehendelse}
      vedtaksDatoSomSvangerskapsuke={43}
      behandlingId={1}
      behandlingVersjon={2}
      behandlingArsaker={[]}
      sprakkode={sprakkode}
      behandlingType={{
        kode: behandlingType.FORSTEGANGSSOKNAD,
        kodeverk: '',
      }}
      familiehendelse={{} as FamilieHendelseSamling}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      alleKodeverk={{}}
      kode=""
      ventearsaker={[]}
    />, messages);

    const textarea = wrapper.find('TextAreaField');
    const forhandsvis = wrapper.find('a');
    expect(textarea).toHaveLength(1);
    expect(forhandsvis).toHaveLength(0);
  });

  it('skal vises i readonly visning', () => {
    const begrunnelse = 'Begrunnelse';
    const wrapper = shallowWithIntl(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      previewCallback={sinon.spy()}
      dispatchSubmitFailed={sinon.spy()}
      erAutomatiskRevurdering={false}
      language="Nynorsk"
      readOnly={false}
      sendVarsel={false}
      aksjonspunktStatus="UTFRT"
      begrunnelse={begrunnelse}
      avklartBarn={[]}
      soknad={soknad}
      termindato="2019-01-01"
      soknadOriginalBehandling={originalBehandling.soknad}
      familiehendelseOriginalBehandling={originalBehandling.familiehendelse}
      vedtaksDatoSomSvangerskapsuke={43}
      behandlingId={1}
      behandlingVersjon={2}
      behandlingArsaker={[]}
      sprakkode={sprakkode}
      behandlingType={{
        kode: behandlingType.FORSTEGANGSSOKNAD,
        kodeverk: '',
      }}
      familiehendelse={{} as FamilieHendelseSamling}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      alleKodeverk={{}}
      kode=""
      ventearsaker={[]}
    />, messages);

    expect(wrapper.find('Undertekst')).toHaveLength(1);
    expect(wrapper.find('Normaltekst')).toHaveLength(1);
    expect(wrapper.find('Normaltekst').children().text()).toBe(begrunnelse);
  });
});
