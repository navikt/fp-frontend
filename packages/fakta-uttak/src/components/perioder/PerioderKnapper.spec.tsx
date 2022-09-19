import React from 'react';
import sinon from 'sinon';
import { FormattedMessage } from 'react-intl';
import { Button } from '@navikt/ds-react';

import uttakPeriodeVurdering from '@fpsak-frontend/kodeverk/src/uttakPeriodeVurdering';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import { PerioderKnapper } from './PerioderKnapper';
import messages from '../../../i18n/nb_NO.json';

describe('<PerioderKnapper>', () => {
  it('skal vise ingenting gitt read only modus', () => {
    const wrapper = shallowWithIntl(<PerioderKnapper
      resultat={undefined}
      updatePeriode={sinon.spy()}
      resetPeriode={sinon.spy()}
      cancelEditPeriode={sinon.spy()}
      id="2018-06-02|2018-06-25"
      updated
      bekreftet
      readOnly
    />, messages);

    const knapper = wrapper.find(Button);
    expect(knapper).toHaveLength(0);
  });

  it('skal vise perioder knapper', () => {
    const wrapper = shallowWithIntl(<PerioderKnapper
      resultat={undefined}
      updatePeriode={sinon.spy()}
      resetPeriode={sinon.spy()}
      cancelEditPeriode={sinon.spy()}
      id="2018-06-02|2018-06-25"
      updated
      bekreftet
      readOnly={false}
    />, messages);

    const knapper = wrapper.find(Button);
    expect(knapper).toHaveLength(2);
  });

  it('skal vise nullstil knappen når bekreftet og updated er false', () => {
    const wrapper = shallowWithIntl(<PerioderKnapper
      resultat={uttakPeriodeVurdering.PERIODE_OK}
      updatePeriode={sinon.spy()}
      resetPeriode={sinon.spy()}
      cancelEditPeriode={sinon.spy()}
      id="2018-06-02|2018-06-25"
      updated={false}
      bekreftet={false}
      readOnly={false}
    />, messages);

    const knapper = wrapper.find(Button);
    expect(knapper.last().find(FormattedMessage).prop('id')).toBe('UttakInfoPanel.Nullstill');
  });
});
