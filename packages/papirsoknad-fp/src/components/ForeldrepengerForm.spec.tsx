import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';

// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__utils-test... Remove this comment to see the full error message
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__utils-test... Remove this comment to see the full error message
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import {
  // @ts-expect-error ts-migrate(2305) FIXME: Module '"../../../../node_modules/@fpsak-frontend/... Remove this comment to see the full error message
  SoknadData, OmsorgOgAdopsjonPanel, TerminFodselDatoPanel,
} from '@fpsak-frontend/papirsoknad-felles';

import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-papirsoknad-fp';
import { ForeldrepengerForm } from './ForeldrepengerForm';

describe('<ForeldrepengerForm>', () => {
  it('skal vise fødselpaneler når familieHendelseType er lik fødsel', () => {
    const wrapper = shallowWithIntl(<ForeldrepengerForm
      {...reduxFormPropsMock}
      intl={intlMock}
      onSubmitUfullstendigsoknad={sinon.spy()}
      countryCodes={[]}
      readOnly={false}
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 4.
      soknadData={new SoknadData(fagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.MOR, [])}
      alleKodeverk={{}}
    />);
    expect(wrapper.find(TerminFodselDatoPanel)).has.length(1);
  });

  it('skal vise adopsjonspaneler når familieHendelseType er lik adopsjon', () => {
    const wrapper = shallowWithIntl(<ForeldrepengerForm
      {...reduxFormPropsMock}
      intl={intlMock}
      onSubmitUfullstendigsoknad={sinon.spy()}
      countryCodes={[]}
      readOnly={false}
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 4.
      soknadData={new SoknadData(fagsakYtelseType.FORELDREPENGER, familieHendelseType.ADOPSJON, foreldreType.MOR, [])}
      alleKodeverk={{}}
    />);
    expect(wrapper.find(OmsorgOgAdopsjonPanel)).has.length(1);
  });
});
