import React from 'react';
import sinon from 'sinon';
import moment from 'moment';

import { DDMMYYYY_DATE_FORMAT } from '@fpsak-frontend/utils';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt, AlleKodeverk, BeregningsresultatFp, FamilieHendelseSamling, Personoversikt, Soknad,
} from '@fpsak-frontend/types';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import TilkjentYtelsePanel from './TilkjentYtelsePanel';
import Tilbaketrekkpanel from './tilbaketrekk/Tilbaketrekkpanel';
import TilkjentYtelse from './TilkjentYtelse';
import messages from '../../i18n/nb_NO.json';

const tilbaketrekkAP = {
  definisjon: {
    kode: aksjonspunktCodes.VURDER_TILBAKETREKK,
  },
  status: {
    kode: 'OPPR',
  },
  begrunnelse: undefined,
} as Aksjonspunkt;

const arbeidsgiverOpplysningerPerId = {
  1: {
    erPrivatPerson: false,
    identifikator: '973861778',
    navn: 'EQUINOR ASA AVD STATOIL SOKKELVIRKSOMHET',
  },
};

const beregningsresultat = {
  perioder: [],
} as BeregningsresultatFp;

describe('<TilkjentYtelsePanel>', () => {
  it('skal bruke fødselsdato når dette finnes og søknadstype er fødsel', () => {
    const familiehendelse = {
      gjeldende: {
        soknadType: {
          kode: soknadType.FODSEL,
          kodeverk: '',
        },
        avklartBarn: [{
          fodselsdato: '2021-01-05',
        }],
        termindato: '2021-01-01',
      },
    } as FamilieHendelseSamling;

    const wrapper = shallowWithIntl(<TilkjentYtelsePanel
      readOnly
      beregningresultat={beregningsresultat}
      submitCallback={sinon.spy()}
      readOnlySubmitButton
      alleKodeverk={{} as AlleKodeverk}
      familieHendelseSamling={familiehendelse}
      personoversikt={{} as Personoversikt}
      soknad={{} as Soknad}
      fagsakYtelseTypeKode={fagsakYtelseType.FORELDREPENGER}
      aksjonspunkter={[]}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);

    const ytelsePanel = wrapper.find(TilkjentYtelse);
    expect(ytelsePanel).toHaveLength(1);
    expect(moment(ytelsePanel.props().familiehendelseDate).format(DDMMYYYY_DATE_FORMAT)).toEqual('05.01.2021');
  });

  it('skal bruke termindato når ikke fødselsdato finnes og søknadstype er fødsel', () => {
    const familiehendelse = {
      gjeldende: {
        soknadType: {
          kode: soknadType.FODSEL,
          kodeverk: '',
        },
        termindato: '2021-01-01',
      },
    } as FamilieHendelseSamling;

    const wrapper = shallowWithIntl(<TilkjentYtelsePanel
      readOnly
      beregningresultat={beregningsresultat}
      submitCallback={sinon.spy()}
      readOnlySubmitButton
      alleKodeverk={{} as AlleKodeverk}
      familieHendelseSamling={familiehendelse}
      personoversikt={{} as Personoversikt}
      soknad={{} as Soknad}
      fagsakYtelseTypeKode={fagsakYtelseType.FORELDREPENGER}
      aksjonspunkter={[]}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);

    const ytelsePanel = wrapper.find(TilkjentYtelse);
    expect(ytelsePanel).toHaveLength(1);
    expect(moment(ytelsePanel.props().familiehendelseDate).format(DDMMYYYY_DATE_FORMAT)).toEqual('01.01.2021');
  });

  it('skal bruke omsorgsovertakelsedato når denne finnes og søknadstype er adopsjon', () => {
    const familiehendelse = {
      gjeldende: {
        soknadType: {
          kode: soknadType.ADOPSJON,
          kodeverk: '',
        },
        omsorgsovertakelseDato: '2021-01-01',
      },
    } as FamilieHendelseSamling;

    const wrapper = shallowWithIntl(<TilkjentYtelsePanel
      readOnly
      beregningresultat={beregningsresultat}
      submitCallback={sinon.spy()}
      readOnlySubmitButton
      alleKodeverk={{} as AlleKodeverk}
      familieHendelseSamling={familiehendelse}
      personoversikt={{} as Personoversikt}
      soknad={{} as Soknad}
      fagsakYtelseTypeKode={fagsakYtelseType.FORELDREPENGER}
      aksjonspunkter={[]}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);

    const ytelsePanel = wrapper.find(TilkjentYtelse);
    expect(ytelsePanel).toHaveLength(1);
    expect(moment(ytelsePanel.props().familiehendelseDate).format(DDMMYYYY_DATE_FORMAT)).toEqual('01.01.2021');
  });

  it('skal bruke adopsjonsdato når det ikke finnes omsorgsovertakelsedato og søknadstype er adopsjon', () => {
    const familiehendelse = {
      gjeldende: {
        soknadType: {
          kode: soknadType.ADOPSJON,
          kodeverk: '',
        },
        adopsjonFodelsedatoer: { 0: '2021-01-01' } as Record<string, string>,
      },
      oppgitt: {
        soknadType: {
          kode: soknadType.ADOPSJON,
          kodeverk: '',
        },
        adopsjonFodelsedatoer: { 0: '2021-02-01' } as Record<string, string>,
      },
    } as FamilieHendelseSamling;

    const wrapper = shallowWithIntl(<TilkjentYtelsePanel
      readOnly
      beregningresultat={beregningsresultat}
      submitCallback={sinon.spy()}
      readOnlySubmitButton
      alleKodeverk={{} as AlleKodeverk}
      familieHendelseSamling={familiehendelse}
      personoversikt={{} as Personoversikt}
      soknad={{} as Soknad}
      fagsakYtelseTypeKode={fagsakYtelseType.FORELDREPENGER}
      aksjonspunkter={[]}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);

    const ytelsePanel = wrapper.find(TilkjentYtelse);
    expect(ytelsePanel).toHaveLength(1);
    expect(moment(ytelsePanel.props().familiehendelseDate).format(DDMMYYYY_DATE_FORMAT)).toEqual('01.01.2021');
  });

  it('Skal vise tilbaketrekkpanel når en har tilbaketrekkaksjonspunkt', () => {
    const familiehendelse = {
      gjeldende: {
        soknadType: {
          kode: soknadType.FODSEL,
          kodeverk: '',
        },
        termindato: '2021-01-01',
      },
    } as FamilieHendelseSamling;

    const wrapper = shallowWithIntl(<TilkjentYtelsePanel
      readOnly
      beregningresultat={beregningsresultat}
      submitCallback={sinon.spy()}
      readOnlySubmitButton
      alleKodeverk={{} as AlleKodeverk}
      familieHendelseSamling={familiehendelse}
      personoversikt={{} as Personoversikt}
      soknad={{} as Soknad}
      fagsakYtelseTypeKode={fagsakYtelseType.FORELDREPENGER}
      aksjonspunkter={[tilbaketrekkAP]}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);
    expect(wrapper.find(Tilbaketrekkpanel)).toHaveLength(1);
  });

  it('Skal bruke oppgitt data når det ikke finnes gjeldende', () => {
    const familiehendelse = {
      oppgitt: {
        soknadType: {
          kode: soknadType.ADOPSJON,
          kodeverk: '',
        },
        adopsjonFodelsedatoer: { 0: '2021-02-01' } as Record<string, string>,
      },
    } as FamilieHendelseSamling;

    const wrapper = shallowWithIntl(<TilkjentYtelsePanel
      readOnly
      beregningresultat={beregningsresultat}
      submitCallback={sinon.spy()}
      readOnlySubmitButton
      alleKodeverk={{} as AlleKodeverk}
      familieHendelseSamling={familiehendelse}
      personoversikt={{} as Personoversikt}
      soknad={{} as Soknad}
      fagsakYtelseTypeKode={fagsakYtelseType.FORELDREPENGER}
      aksjonspunkter={[]}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);

    const ytelsePanel = wrapper.find(TilkjentYtelse);
    expect(ytelsePanel).toHaveLength(1);
    expect(moment(ytelsePanel.props().familiehendelseDate).format(DDMMYYYY_DATE_FORMAT)).toEqual('01.02.2021');
  });
});
