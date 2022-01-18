import React from 'react';
import { action } from '@storybook/addon-actions';
import { Dispatch } from 'redux';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import ForeldrepengerPapirsoknadIndex from './ForeldrepengerPapirsoknadIndex';

export default {
  title: 'papirsoknad/papirsoknad-fp',
  component: ForeldrepengerPapirsoknadIndex,
};

export const visPapirsoknadForMorVedFødsel = () => (
  <ForeldrepengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (_formValues: any, _dispatch: Dispatch, values: any) => Promise<any>}
    readOnly={false}
    soknadData={new SoknadData(fagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
    fagsakPersonnummer="1234567"
  />
);

export const visPapirsoknadForMorVedAdopsjon = () => (
  <ForeldrepengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (_formValues: any, _dispatch: Dispatch, values: any) => Promise<any>}
    readOnly={false}
    soknadData={new SoknadData(fagsakYtelseType.FORELDREPENGER, familieHendelseType.ADOPSJON, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
    fagsakPersonnummer="1234567"
  />
);

export const visPapirsoknadForMorVedOmsorg = () => (
  <ForeldrepengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (_formValues: any, _dispatch: Dispatch, values: any) => Promise<any>}
    readOnly={false}
    soknadData={new SoknadData(fagsakYtelseType.FORELDREPENGER, familieHendelseType.OMSORG, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
    fagsakPersonnummer="1234567"
  />
);

export const visPapirsoknadForFarVedFødsel = () => (
  <ForeldrepengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (_formValues: any, _dispatch: Dispatch, values: any) => Promise<any>}
    readOnly={false}
    soknadData={new SoknadData(fagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.FAR)}
    alleKodeverk={alleKodeverk as any}
    fagsakPersonnummer="1234567"
  />
);
