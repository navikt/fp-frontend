import React from 'react';
import sinon from 'sinon';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { ProsessStegBegrunnelseTextField } from '@fpsak-frontend/prosess-felles';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { Aksjonspunkt, FamilieHendelse, Soknad } from '@fpsak-frontend/types';

import { buildInitialValues, ErSoknadsfristVilkaretOppfyltFormImpl as UnwrappedForm } from './ErSoknadsfristVilkaretOppfyltForm';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-prosess-vilkar-soknadsfrist';

describe('<ErSoknadsfristVilkaretOppfyltForm>', () => {
  const getKodeverknavn = () => undefined;

  it('skal rendre form og vise søknadsfristdato som er lik mottatt dato minus antallDagerSoknadLevertForSent', () => {
    const wrapper = shallowWithIntl(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      readOnlySubmitButton={false}
      soknad={{
        mottattDato: '2017-10-15',
        begrunnelseForSenInnsending: 'testbegrunnelse',
      } as Soknad}
      antallDagerSoknadLevertForSent="9"
      textCode="ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato"
      dato="2017-10-10"
      getKodeverknavn={getKodeverknavn}
      behandlingId={1}
      behandlingVersjon={2}
      vilkar={[]}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      aksjonspunkter={[]}
      status=""
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      alleKodeverk={{}}
      hasAksjonspunkt
      initialValues={{
        erVilkarOk: true,
      }}
    />);

    const dateLabel = wrapper.find('DateLabel');
    expect(dateLabel).toHaveLength(3);
    expect(dateLabel.first().prop('dateString')).toEqual('2017-10-06');
  });

  it('skal rendre form og vise mottatt dato og fødselsdato', () => {
    const wrapper = shallowWithIntl(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      readOnlySubmitButton={false}
      soknad={{
        mottattDato: '2017-10-15',
        begrunnelseForSenInnsending: 'testbegrunnelse',
      } as Soknad}
      antallDagerSoknadLevertForSent="9"
      textCode="ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato"
      dato="2017-10-10"
      getKodeverknavn={getKodeverknavn}
      behandlingId={1}
      behandlingVersjon={2}
      vilkar={[]}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      aksjonspunkter={[]}
      status=""
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      alleKodeverk={{}}
      hasAksjonspunkt
      initialValues={{
        erVilkarOk: true,
      }}
    />);

    const dateLabel = wrapper.find('DateLabel');
    expect(dateLabel).toHaveLength(3);
    expect(dateLabel.at(1).prop('dateString')).toEqual('2017-10-15');
    expect(dateLabel.last().prop('dateString')).toEqual('2017-10-10');
  });

  it('skal rendre form og vise begrunnelse for sen innsending', () => {
    const wrapper = shallowWithIntl(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      readOnlySubmitButton={false}
      soknad={{
        mottattDato: '2017-10-15',
        begrunnelseForSenInnsending: 'testbegrunnelse',
      } as Soknad}
      antallDagerSoknadLevertForSent="9"
      textCode="ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato"
      dato="2017-10-10"
      getKodeverknavn={getKodeverknavn}
      behandlingId={1}
      behandlingVersjon={2}
      vilkar={[]}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      aksjonspunkter={[]}
      status=""
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      alleKodeverk={{}}
      hasAksjonspunkt
      initialValues={{
        erVilkarOk: true,
      }}
    />);

    const dateLabel = wrapper.find('span');
    expect(dateLabel).toHaveLength(5);
    expect(dateLabel.last().text()).toEqual('testbegrunnelse');
  });

  it('skal rendre form og vise en bindestrek når en ikke har begrunnelse for sen innsending', () => {
    const wrapper = shallowWithIntl(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      readOnlySubmitButton={false}
      soknad={{
        mottattDato: '2017-10-15',
      } as Soknad}
      antallDagerSoknadLevertForSent="9"
      textCode="ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato"
      dato="2017-10-10"
      getKodeverknavn={getKodeverknavn}
      behandlingId={1}
      behandlingVersjon={2}
      vilkar={[]}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      aksjonspunkter={[]}
      status=""
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      alleKodeverk={{}}
      hasAksjonspunkt
      initialValues={{
        erVilkarOk: true,
      }}
    />);

    const dateLabel = wrapper.find('span');
    expect(dateLabel).toHaveLength(5);
    expect(dateLabel.last().text()).toEqual('-');
  });

  it('skal vise radioknapper og innsendingskomponent', () => {
    const wrapper = shallowWithIntl(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      readOnlySubmitButton={false}
      soknad={{
        mottattDato: '2017-10-15',
      } as Soknad}
      antallDagerSoknadLevertForSent="9"
      textCode="ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato"
      dato="2017-10-10"
      getKodeverknavn={getKodeverknavn}
      behandlingId={1}
      behandlingVersjon={2}
      vilkar={[]}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      aksjonspunkter={[]}
      status=""
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      alleKodeverk={{}}
      hasAksjonspunkt
      initialValues={{
        erVilkarOk: true,
      }}
    />);

    const radioButtons = wrapper.find('RadioOption');
    expect(radioButtons).toHaveLength(2);
    expect(wrapper.find(ProsessStegBegrunnelseTextField)).toHaveLength(1);
    expect(wrapper.find('injectIntl(ConfirmInformationVilkarFormReadOnly)')).toHaveLength(0);
  });

  it('skal ved readonly kun vise en radioknapp med valgt verdi', () => {
    const wrapper = shallowWithIntl(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly
      readOnlySubmitButton={false}
      soknad={{
        mottattDato: '2017-10-15',
        begrunnelseForSenInnsending: 'testbegrunnelse',
      } as Soknad}
      antallDagerSoknadLevertForSent="9"
      textCode="ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato"
      dato="2017-10-10"
      getKodeverknavn={getKodeverknavn}
      behandlingId={1}
      behandlingVersjon={2}
      vilkar={[]}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      aksjonspunkter={[]}
      status=""
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      alleKodeverk={{}}
      hasAksjonspunkt
      initialValues={{
        erVilkarOk: true,
      }}
    />);

    const confirm = wrapper.find(ProsessStegBegrunnelseTextField);
    expect(confirm).toHaveLength(1);
    expect(confirm.prop('readOnly')).toBe(true);
    expect(wrapper.find('RadioOption')).toHaveLength(1);
  });

  it('skal bruke info fra søknad når avklart data ikke finnes og søknadstype er FODSEL', () => {
    const aksjonspunkter = [{
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
      },
      definisjon: {
        kode: aksjonspunktCodes.SOKNADSFRISTVILKARET,
      },
    }] as Aksjonspunkt[];

    const initialValues = buildInitialValues.resultFunc(aksjonspunkter, vilkarUtfallType.OPPFYLT);

    expect(initialValues).toEqual({
      erVilkarOk: undefined,
      begrunnelse: '',
    });
  });

  it('skal bruke info fra avklart data når dette finnes og søknadstype er FODSEL', () => {
    const aksjonspunkter = [{
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
      },
      definisjon: {
        kode: aksjonspunktCodes.SOKNADSFRISTVILKARET,
      },
    }] as Aksjonspunkt[];

    const initialValues = buildInitialValues.resultFunc(aksjonspunkter, vilkarUtfallType.OPPFYLT);

    expect(initialValues).toEqual({
      erVilkarOk: undefined,
      begrunnelse: '',
    });
  });

  it('skal håndtere søknadstype ADOPSJON', () => {
    const aksjonspunkter = [{
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
      },
      definisjon: {
        kode: aksjonspunktCodes.SOKNADSFRISTVILKARET,
      },
    }] as Aksjonspunkt[];

    const initialValues = buildInitialValues.resultFunc(aksjonspunkter, vilkarUtfallType.OPPFYLT);

    expect(initialValues).toEqual({
      erVilkarOk: undefined,
      begrunnelse: '',
    });
  });

  it('skal sette vilkår til godkjent når aksjonspunkt er lukket og vilkårsstatus er oppfylt', () => {
    const aksjonspunkter = [{
      status: {
        kode: aksjonspunktStatus.AVBRUTT,
      },
      definisjon: {
        kode: aksjonspunktCodes.SOKNADSFRISTVILKARET,
      },
      begrunnelse: 'har lagret',
    }] as Aksjonspunkt[];

    const initialValues = buildInitialValues.resultFunc(aksjonspunkter, vilkarUtfallType.OPPFYLT);

    expect(initialValues).toEqual({
      erVilkarOk: true,
      begrunnelse: 'har lagret',
    });
  });

  it('skal sette vilkår til feilet når aksjonspunkt er lukket og vilkårsstatus ikke er oppfylt', () => {
    const aksjonspunkter = [{
      status: {
        kode: aksjonspunktStatus.AVBRUTT,
      },
      definisjon: {
        kode: aksjonspunktCodes.SOKNADSFRISTVILKARET,
      },
      begrunnelse: 'har lagret',
    }] as Aksjonspunkt[];

    const initialValues = buildInitialValues.resultFunc(aksjonspunkter, vilkarUtfallType.IKKE_OPPFYLT);

    expect(initialValues).toEqual({
      erVilkarOk: false,
      begrunnelse: 'har lagret',
    });
  });
});
