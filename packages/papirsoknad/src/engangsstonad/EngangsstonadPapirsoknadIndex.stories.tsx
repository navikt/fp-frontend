import React from 'react';
import { action } from '@storybook/addon-actions';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';

import { foreldreType, familieHendelseType } from '@navikt/fp-kodeverk';
import { alleKodeverk, withRouter } from '@navikt/fp-storybook-utils';

import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import EngangsstonadPapirsoknadIndex from './EngangsstonadPapirsoknadIndex';

export default {
  title: 'papirsoknad/papirsoknad-es',
  component: EngangsstonadPapirsoknadIndex,
  decorators: [withRouter],
};

export const visPapirsoknadForMorVedFødsel = () => (
  <EngangsstonadPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (values: any) => Promise<any>}
    readOnly={false}
    soknadData={new SoknadData(FagsakYtelseType.ENGANGSSTONAD, familieHendelseType.FODSEL, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visPapirsoknadForMorVedAdopsjon = () => (
  <EngangsstonadPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (values: any) => Promise<any>}
    readOnly={false}
    soknadData={new SoknadData(FagsakYtelseType.ENGANGSSTONAD, familieHendelseType.ADOPSJON, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visPapirsoknadForFarVedFødsel = () => (
  <EngangsstonadPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (values: any) => Promise<any>}
    readOnly={false}
    soknadData={new SoknadData(FagsakYtelseType.ENGANGSSTONAD, familieHendelseType.FODSEL, foreldreType.FAR)}
    alleKodeverk={alleKodeverk as any}
  />
);
