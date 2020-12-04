import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import AktivitetskravFaktaIndex from '@fpsak-frontend/fakta-aktivitetskrav';

import withReduxProvider from '../../decorators/withRedux';

const uttakKontrollerAktivitetskrav = [{
  avklaring: null,
  begrunnelse: null,
  fom: '2021-01-01',
  tom: '2021-01-07',
}, {
  avklaring: null,
  begrunnelse: null,
  fom: '2021-01-08',
  tom: '2021-01-13',
}];

const standardFaktaProps = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: boolean('readOnly', false),
  harApneAksjonspunkter: boolean('harApneAksjonspunkter', true),
  submittable: boolean('submittable', true),
  alleMerknaderFraBeslutter: {},
};

export default {
  title: 'fakta/fakta-aktivitetskrav',
  component: AktivitetskravFaktaIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visAksjonspunktForAdopsjonsvilkåret = () => (
  <AktivitetskravFaktaIndex
    {...standardFaktaProps}
    uttakKontrollerAktivitetskrav={uttakKontrollerAktivitetskrav}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.ADOPSJONSDOKUMENTAJON,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }]}
  />
);
