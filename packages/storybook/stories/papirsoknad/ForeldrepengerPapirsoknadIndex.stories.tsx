import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import ForeldrepengerPapirsoknadIndex from '@fpsak-frontend/papirsoknad-fp';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { FagsakPerson } from '@fpsak-frontend/types';

import withReduxProvider from '../../decorators/withRedux';

import alleKodeverk from '../mocks/alleKodeverk.json';

export default {
  title: 'papirsoknad/papirsoknad-fp',
  component: ForeldrepengerPapirsoknadIndex,
  decorators: [withKnobs, withReduxProvider],
};

const fagsakPerson = {
  alder: 30,
  erDod: false,
  erKvinne: true,
  navn: 'Petra',
  personnummer: '1234567',
  personstatusType: {
    kode: personstatusType.BOSATT,
  },
} as FagsakPerson;

export const visPapirsoknadForMorVedFødsel = () => (
  <ForeldrepengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (_formValues, _dispatch, values: any) => Promise<any>}
    readOnly={boolean('readOnly', false)}
    soknadData={new SoknadData(fagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
    fagsakPerson={fagsakPerson}
  />
);

export const visPapirsoknadForMorVedAdopsjon = () => (
  <ForeldrepengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (_formValues, _dispatch, values: any) => Promise<any>}
    readOnly={boolean('readOnly', false)}
    soknadData={new SoknadData(fagsakYtelseType.FORELDREPENGER, familieHendelseType.ADOPSJON, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
    fagsakPerson={fagsakPerson}
  />
);

export const visPapirsoknadForMorVedOmsorg = () => (
  <ForeldrepengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (_formValues, _dispatch, values: any) => Promise<any>}
    readOnly={boolean('readOnly', false)}
    soknadData={new SoknadData(fagsakYtelseType.FORELDREPENGER, familieHendelseType.OMSORG, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
    fagsakPerson={fagsakPerson}
  />
);

export const visPapirsoknadForFarVedFødsel = () => (
  <ForeldrepengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (_formValues, _dispatch, values: any) => Promise<any>}
    readOnly={boolean('readOnly', false)}
    soknadData={new SoknadData(fagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.FAR)}
    alleKodeverk={alleKodeverk as any}
    fagsakPerson={{
      ...fagsakPerson,
      erKvinne: false,
    }}
  />
);
