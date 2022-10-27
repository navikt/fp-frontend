import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import getIntlDecorator from '@fpsak-frontend/storybook-utils/decorators/withIntl';
import { FaktaAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import OppdaterePeriodeModal from './OppdaterePeriodeModal';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'fakta/fakta-aktivitetskrav-oppdater-modal',
  component: OppdaterePeriodeModal,
  decorators: [withIntl],
};

const Template: Story<{
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
}> = ({
  submitCallback,
}) => (
  <OppdaterePeriodeModal
    submit={submitCallback}
    cancel={submitCallback}
  />
);

export const VisModalForÅOppdaterePeriode = Template.bind({});
VisModalForÅOppdaterePeriode.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
