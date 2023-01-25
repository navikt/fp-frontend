import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import aksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@navikt/fp-kodeverk/src/aksjonspunktStatus';
import VergeFaktaIndex from '@navikt/fp-fakta-verge';
import { Behandling } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

const aksjonspunkter = [{
  definisjon: aksjonspunktCodes.AVKLAR_VERGE,
  status: aksjonspunktStatus.OPPRETTET,
  begrunnelse: undefined,
  kanLoses: true,
  erAktivt: true,
}];

const verge = {};

const merknaderFraBeslutter = {
  notAccepted: false,
};

export default {
  title: 'fakta/fakta-verge',
  component: VergeFaktaIndex,
};

const Template: Story<{
  behandling: Behandling,
  submitCallback: (aksjonspunktData: any) => Promise<void>;
}> = ({
  behandling,
  submitCallback,
}) => (
  <VergeFaktaIndex
    submitCallback={submitCallback}
    readOnly={false}
    harApneAksjonspunkter
    submittable
    setFormData={() => undefined}
    behandling={behandling}
    verge={verge}
    aksjonspunkter={aksjonspunkter}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.AVKLAR_VERGE]: merknaderFraBeslutter,
    }}
  />
);

export const Default = Template.bind({});
Default.args = {
  behandling: {
    uuid: '1',
    versjon: 1,
  } as Behandling,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
