import React from 'react';
import sinon from 'sinon';
import uttakPeriodeVurdering from '@fpsak-frontend/kodeverk/src/uttakPeriodeVurdering';
import { PerioderKnapper } from './PerioderKnapper';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-fakta-uttak';

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
    />);

    const hovedknapp = wrapper.find('Hovedknapp');
    const knapp = wrapper.find('Knapp');
    expect(hovedknapp).toHaveLength(0);
    expect(knapp).toHaveLength(0);
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
    />);

    const hovedknapp = wrapper.find('Hovedknapp');
    const knapp = wrapper.find('Knapp');
    expect(hovedknapp).toHaveLength(1);
    expect(knapp).toHaveLength(1);
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
    />);

    const knapp = wrapper.find('Knapp');
    expect(knapp).toHaveLength(1);
    expect(knapp.find('FormattedMessage').prop('id')).toBe('UttakInfoPanel.Nullstill');
  });

  it('skal vise avbryt knappen når bekreftet er true', () => {
    const wrapper = shallowWithIntl(<PerioderKnapper
      resultat={uttakPeriodeVurdering.PERIODE_OK}
      updatePeriode={sinon.spy()}
      resetPeriode={sinon.spy()}
      cancelEditPeriode={sinon.spy()}
      id="2018-06-02|2018-06-25"
      updated={false}
      bekreftet
      readOnly={false}
    />);

    const knapp = wrapper.find('Knapp');
    expect(knapp).toHaveLength(1);
    expect(knapp.find('FormattedMessage').prop('id')).toBe('UttakInfoPanel.Avbryt');
  });

  it('skal vise avbryt knappen når bekreftet er false og updated er true', () => {
    const wrapper = shallowWithIntl(<PerioderKnapper
      resultat={uttakPeriodeVurdering.PERIODE_OK}
      updatePeriode={sinon.spy()}
      resetPeriode={sinon.spy()}
      cancelEditPeriode={sinon.spy()}
      id="2018-06-02|2018-06-25"
      updated
      bekreftet={false}
      readOnly={false}
    />);

    const knapp = wrapper.find('Knapp');
    expect(knapp).toHaveLength(1);
    expect(knapp.find('FormattedMessage').prop('id')).toBe('UttakInfoPanel.Avbryt');
  });
});
