import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import ankeVurdering from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AnkeProsessIndex from '@fpsak-frontend/prosess-anke';
import { Aksjonspunkt, AnkeVurdering, Behandling } from '@fpsak-frontend/types';

import alleKodeverk from '../../mocks/alleKodeverk.json';
import withReduxProvider from '../../../decorators/withRedux';

const behandling = {
  id: 1,
  versjon: 1,
} as Behandling;

const aksjonspunkter = [{
  definisjon: {
    kode: aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE,
    kodeverk: '',
  },
  status: {
    kode: aksjonspunktStatus.OPPRETTET,
    kodeverk: '',
  },
  begrunnelse: undefined,
}] as Aksjonspunkt[];

const standardProsessProps = {
  behandling: object('behandling', behandling),
  alleKodeverk: alleKodeverk as any,
  aksjonspunkter,
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: boolean('readOnly', false),
  isAksjonspunktOpen: boolean('harApneAksjonspunkter', true),
  readOnlySubmitButton: boolean('readOnly', false),
  status: '',
  vilkar: [],
  alleMerknaderFraBeslutter: {},
};

export default {
  title: 'prosess/anke/prosess-anke',
  component: AnkeProsessIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visPanelForResultatVedStadfestYtelsesvedtak = () => (
  <AnkeProsessIndex
    {...standardProsessProps}
    ankeVurdering={object('ankeVurdering', {
      ankeVurderingResultat: {
        ankeVurdering: {
          kode: ankeVurdering.ANKE_STADFESTE_YTELSESVEDTAK,
          kodeverk: '',
        },
        begrunnelse: 'Dette er en begrunnelse',
      },
    } as AnkeVurdering)}
    saveAnke={action('button-click') as (data: any) => Promise<any>}
    previewCallback={action('button-click') as (data: any) => Promise<any>}
    behandlinger={[]}
  />
);
