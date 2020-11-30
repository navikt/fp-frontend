import React from 'react';
import { expect } from 'chai';

import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-papirsoknad-svp';
import { BehovForTilretteleggingPanelImpl } from './BehovForTilretteleggingPanel';

describe('<BehovForTilretteleggingPanel>', () => {
  it('skal vise felt for kun selvstendig næringsdrivende når dette er valgt i radioknapp', () => {
    const wrapper = shallowWithIntl(<BehovForTilretteleggingPanelImpl
      sokForSelvstendigNaringsdrivende
      sokForFrilans={false}
      sokForArbeidsgiver={false}
      readOnly={false}
      formName="test"
      namePrefix=""
    />);

    expect(wrapper.find('[name="behovsdatoSN"]')).has.length(1);
    expect(wrapper.find('[name="behovsdatoFrilans"]')).has.length(0);
    expect(wrapper.find('[name="tilretteleggingForArbeidsgiver"]')).has.length(0);
  });

  it('skal vise felt for kun frilans når dette er valgt i radioknapp', () => {
    const wrapper = shallowWithIntl(<BehovForTilretteleggingPanelImpl
      sokForSelvstendigNaringsdrivende={false}
      sokForFrilans
      sokForArbeidsgiver={false}
      readOnly={false}
      formName="test"
      namePrefix=""
    />);

    expect(wrapper.find('[name="behovsdatoSN"]')).has.length(0);
    expect(wrapper.find('[name="behovsdatoFrilans"]')).has.length(1);
    expect(wrapper.find('[name="tilretteleggingForArbeidsgiver"]')).has.length(0);
  });

  it('skal vise felt for kun arbeidsgiver når dette er valgt i radioknapp', () => {
    const wrapper = shallowWithIntl(<BehovForTilretteleggingPanelImpl
      sokForSelvstendigNaringsdrivende={false}
      sokForFrilans={false}
      sokForArbeidsgiver
      readOnly={false}
      formName="test"
      namePrefix=""
    />);

    expect(wrapper.find('[name="behovsdatoSN"]')).has.length(0);
    expect(wrapper.find('[name="behovsdatoFrilans"]')).has.length(0);
    expect(wrapper.find('[name="tilretteleggingForArbeidsgiver"]')).has.length(1);
  });
});
