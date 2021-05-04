import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Dispatch } from 'redux';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import SvangerskapspengerPapirsoknadIndex from '@fpsak-frontend/papirsoknad-svp';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';

import alleKodeverk from '../mocks/alleKodeverk.json';

export default {
  title: 'papirsoknad/papirsoknad-svp',
  component: SvangerskapspengerPapirsoknadIndex,
  decorators: [withKnobs],
};

export const visPapirsoknadForMorVedFødsel = () => (
  <SvangerskapspengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (_formValues: any, _dispatch: Dispatch, values: any) => Promise<any>}
    readOnly={boolean('readOnly', false)}
    soknadData={new SoknadData(fagsakYtelseType.SVANGERSKAPSPENGER, familieHendelseType.FODSEL, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visPapirsoknadForMorVedAdopsjon = () => (
  <SvangerskapspengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (_formValues: any, _dispatch: Dispatch, values: any) => Promise<any>}
    readOnly={boolean('readOnly', false)}
    soknadData={new SoknadData(fagsakYtelseType.SVANGERSKAPSPENGER, familieHendelseType.ADOPSJON, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visPapirsoknadForFarVedFodsel = () => (
  <SvangerskapspengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (_formValues: any, _dispatch: Dispatch, values: any) => Promise<any>}
    readOnly={boolean('readOnly', false)}
    soknadData={new SoknadData(fagsakYtelseType.SVANGERSKAPSPENGER, familieHendelseType.FODSEL, foreldreType.FAR)}
    alleKodeverk={alleKodeverk as any}
  />
);
