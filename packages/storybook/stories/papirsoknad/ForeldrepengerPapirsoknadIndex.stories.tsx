import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import ForeldrepengerPapirsoknadIndex from '@fpsak-frontend/papirsoknad-fp';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';

import withReduxProvider from '../../decorators/withRedux';

import alleKodeverk from '../mocks/alleKodeverk.json';

export default {
  title: 'papirsoknad/papirsoknad-fp',
  component: ForeldrepengerPapirsoknadIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visPapirsoknadForMorVedFødsel = () => (
  <ForeldrepengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (_formValues, _dispatch, values: any) => Promise<any>}
    readOnly={boolean('readOnly', false)}
    soknadData={new SoknadData(fagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
    fagsakPersonnummer="1234567"
  />
);

export const visPapirsoknadForMorVedAdopsjon = () => (
  <ForeldrepengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (_formValues, _dispatch, values: any) => Promise<any>}
    readOnly={boolean('readOnly', false)}
    soknadData={new SoknadData(fagsakYtelseType.FORELDREPENGER, familieHendelseType.ADOPSJON, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
    fagsakPersonnummer="1234567"
  />
);

export const visPapirsoknadForMorVedOmsorg = () => (
  <ForeldrepengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (_formValues, _dispatch, values: any) => Promise<any>}
    readOnly={boolean('readOnly', false)}
    soknadData={new SoknadData(fagsakYtelseType.FORELDREPENGER, familieHendelseType.OMSORG, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
    fagsakPersonnummer="1234567"
  />
);

export const visPapirsoknadForFarVedFødsel = () => (
  <ForeldrepengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (_formValues, _dispatch, values: any) => Promise<any>}
    readOnly={boolean('readOnly', false)}
    soknadData={new SoknadData(fagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.FAR)}
    alleKodeverk={alleKodeverk as any}
    fagsakPersonnummer="1234567"
  />
);
