import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__utils-test... Remove this comment to see the full error message
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { expect } from 'chai';

import ReasonsField from './ReasonsField';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-sak-totrinnskontroll';

describe('<ReasonsField>', () => {
  it('skal vise korrekt antall element', () => {
    const wrapper = shallowWithIntl(<ReasonsField.WrappedComponent
      // @ts-expect-error ts-migrate(2322) FIXME: Property 'fieldName' does not exist on type 'Intri... Remove this comment to see the full error message
      fieldName="test"
      showOnlyBegrunnelse={false}
      godkjentHosKA={false}
      intl={intlMock}
    />);

    const navFieldGroup = wrapper.find('NavFieldGroup');
    expect(navFieldGroup).to.have.length(1);

    const radioGroup = wrapper.find('CheckboxField');
    expect(radioGroup).to.have.length(4);
  });
});
