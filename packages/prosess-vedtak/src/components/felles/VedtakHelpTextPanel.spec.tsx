import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';

import { getIntlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt } from '@fpsak-frontend/types';

import VedtakHelpTextPanel from './VedtakHelpTextPanel';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<VedtakHelpTextPanel>', () => {
  it('skal vise hjelpetekst for vurdering av dokument når en har dette aksjonspunktet', () => {
    const wrapper = shallowWithIntl(<VedtakHelpTextPanel.WrappedComponent
      intl={intlMock}
      aksjonspunkter={[{
        definisjon: {
          kode: aksjonspunktCodes.VURDERE_DOKUMENT,
          kodeverk: '',
        },
      }] as Aksjonspunkt[]}
      readOnly={false}
    />, messages);

    const helpTexts = wrapper.find('li');
    expect(helpTexts).toHaveLength(1);
    expect(helpTexts.find(Normaltekst).childAt(0).text()).toEqual('Påvirker den åpne Gosys-oppgaven «Vurder dokument» behandlingen?');
  });

  it('skal vise hjelpetekst for vurdering av dokument og vurdering av annen ytelse når en har disse aksjonspunktetene', () => {
    const wrapper = shallowWithIntl(<VedtakHelpTextPanel.WrappedComponent
      intl={intlMock}
      aksjonspunkter={[{
        definisjon: {
          kode: aksjonspunktCodes.VURDERE_ANNEN_YTELSE,
          kodeverk: '',
        },
      }, {
        definisjon: {
          kode: aksjonspunktCodes.VURDERE_DOKUMENT,
          kodeverk: '',
        },
      }] as Aksjonspunkt[]}
      readOnly={false}
    />, messages);

    const helpTexts = wrapper.find('li');
    expect(helpTexts).toHaveLength(2);
    expect(helpTexts.at(0).find(Normaltekst).childAt(0).text()).toEqual(
      'Påvirker den åpne Gosys-oppgaven «Vurder konsekvens for ytelse» behandlingen?',
    );
    expect(helpTexts.at(1).find(Normaltekst).childAt(0).text()).toEqual('Påvirker den åpne Gosys-oppgaven «Vurder dokument» behandlingen?');
  });

  it('skal ikke vise hjelpetekst når en ikke har gitte aksjonspunkter', () => {
    const wrapper = shallowWithIntl(<VedtakHelpTextPanel.WrappedComponent
      intl={intlMock}
      aksjonspunkter={[{
        definisjon: {
          kode: aksjonspunktCodes.FORESLA_VEDTAK,
          kodeverk: '',
        },
      }] as Aksjonspunkt[]}
      readOnly={false}
    />, messages);

    expect(wrapper.find('HelpText')).toHaveLength(0);
  });
});
