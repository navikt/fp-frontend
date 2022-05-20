import React from 'react';
import { action } from '@storybook/addon-actions';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import EngangsstonadPapirsoknadIndex from './EngangsstonadPapirsoknadIndex';
import SoknadData from '../felles/SoknadData';

export default {
  title: 'papirsoknad/papirsoknad-es',
  component: EngangsstonadPapirsoknadIndex,
};

export const visPapirsoknadForMorVedFødsel = () => (
  <EngangsstonadPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (values: any) => Promise<any>}
    readOnly={false}
    soknadData={new SoknadData(fagsakYtelseType.ENGANGSSTONAD, familieHendelseType.FODSEL, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
    fagsakPersonnummer="1234567"
  />
);

export const visPapirsoknadForMorVedAdopsjon = () => (
  <EngangsstonadPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (values: any) => Promise<any>}
    readOnly={false}
    soknadData={new SoknadData(fagsakYtelseType.ENGANGSSTONAD, familieHendelseType.ADOPSJON, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
    fagsakPersonnummer="1234567"
  />
);

export const visPapirsoknadForFarVedFødsel = () => (
  <EngangsstonadPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (values: any) => Promise<any>}
    readOnly={false}
    soknadData={new SoknadData(fagsakYtelseType.ENGANGSSTONAD, familieHendelseType.FODSEL, foreldreType.FAR)}
    alleKodeverk={alleKodeverk as any}
    fagsakPersonnummer="1234567"
  />
);
