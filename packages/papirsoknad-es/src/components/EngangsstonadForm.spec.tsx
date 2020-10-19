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
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';

import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-papirsoknad-es';
import RegistreringFodselGrid from './RegistreringFodselGrid';
import RegistreringAdopsjonOgOmsorgGrid from './RegistreringAdopsjonOgOmsorgGrid';
import { EngangsstonadForm } from './EngangsstonadForm';

describe('<EngangsstonadForm>', () => {
  it('skal vise fødselpaneler når familieHendelseType er lik fødsel', () => {
    const wrapper = shallowWithIntl(<EngangsstonadForm
      {...reduxFormPropsMock}
      intl={intlMock}
      onSubmitUfullstendigsoknad={sinon.spy()}
      countryCodes={[]}
      readOnly={false}
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 4.
      soknadData={new SoknadData(fagsakYtelseType.ENGANGSSTONAD, familieHendelseType.FODSEL, foreldreType.MOR, [])}
      alleKodeverk={{}}
    />);
    const form = wrapper.find(RegistreringFodselGrid);
    expect(form).to.have.length(1);
  });

  it('skal vise adopsjonspaneler når familieHendelseType er lik adopsjon', () => {
    const wrapper = shallowWithIntl(<EngangsstonadForm
      {...reduxFormPropsMock}
      intl={intlMock}
      onSubmitUfullstendigsoknad={sinon.spy()}
      countryCodes={[]}
      readOnly={false}
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 4.
      soknadData={new SoknadData(fagsakYtelseType.ENGANGSSTONAD, familieHendelseType.ADOPSJON, foreldreType.MOR, [])}
      alleKodeverk={{}}
    />);
    const form = wrapper.find(RegistreringAdopsjonOgOmsorgGrid);
    expect(form).to.have.length(1);
  });
});
