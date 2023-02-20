import React from 'react';
import { reduxFormPropsMock, shallowWithIntl } from '@navikt/fp-utils-test';
import sinon from 'sinon';
import { Detail } from '@navikt/ds-react';
import { uttakPeriodeVurdering } from '@navikt/fp-kodeverk';
import { InnleggelsePeriode } from './InnleggelsePeriode';
import RadioGroupField from '../../form/RadioGroupField';
import messages from '../../../i18n/nb_NO.json';

const periode = {
  tom: '10-10-2017',
  fom: '01-10-2017',
};
const behandlingStatusKode = '';

describe('<InnleggelsePeriode>', () => {
  it('skal vise innleggelseperiode', () => {
    const wrapper = shallowWithIntl(<InnleggelsePeriode
      fieldId="periode[0]"
      tilDato={periode.tom}
      fraDato={periode.fom}
      resultat={undefined}
      updatePeriode={sinon.spy()}
      cancelEditPeriode={sinon.spy()}
      behandlingStatusKode={behandlingStatusKode}
      id="2018-06-02|2018-06-25"
      updated
      bekreftet
      {...reduxFormPropsMock}
      readOnly={false}
      onSubmit={sinon.spy()}
    />, messages);

    const undertekst = wrapper.find(Detail);
    const radioGroupField = wrapper.find('RadioGroupField');
    const radioGroupFieldComponent = wrapper.find(RadioGroupField).dive();
    expect(radioGroupFieldComponent.children()).toHaveLength(2);
    expect(undertekst).toHaveLength(1);
    expect(radioGroupField).toHaveLength(1);
  });

  it('Skal vise tekstfelt hvis resultat er true', () => {
    const wrapper = shallowWithIntl(<InnleggelsePeriode
      fieldId="periode[0]"
      tilDato={periode.tom}
      fraDato={periode.fom}
      resultat={uttakPeriodeVurdering.PERIODE_OK}
      updatePeriode={sinon.spy()}
      cancelEditPeriode={sinon.spy()}
      behandlingStatusKode={behandlingStatusKode}
      id="2018-06-02|2018-06-25"
      updated
      bekreftet
      {...reduxFormPropsMock}
      readOnly={false}
      onSubmit={sinon.spy()}
    />, messages);

    const textAreaField = wrapper.find('TextAreaField');
    expect(textAreaField).toHaveLength(1);
  });
});
