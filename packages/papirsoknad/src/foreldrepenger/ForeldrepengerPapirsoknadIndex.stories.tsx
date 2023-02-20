import React from 'react';
import { action } from '@storybook/addon-actions';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';

import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import { foreldreType, familieHendelseType } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

import ForeldrepengerPapirsoknadIndex from './ForeldrepengerPapirsoknadIndex';

export default {
  title: 'papirsoknad/papirsoknad-fp',
  component: ForeldrepengerPapirsoknadIndex,
};

export const visPapirsoknadForMorVedFødsel = () => (
  <ForeldrepengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (values: any) => Promise<any>}
    readOnly={false}
    soknadData={new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
    fagsakPersonnummer="1234567"
    erEndringssøknad={false}
  />
);

export const visPapirsoknadForMorVedAdopsjon = () => (
  <ForeldrepengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (values: any) => Promise<any>}
    readOnly={false}
    soknadData={new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.ADOPSJON, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
    fagsakPersonnummer="1234567"
    erEndringssøknad={false}
  />
);

export const visPapirsoknadForMorVedOmsorg = () => (
  <ForeldrepengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (values: any) => Promise<any>}
    readOnly={false}
    soknadData={new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.OMSORG, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
    fagsakPersonnummer="1234567"
    erEndringssøknad={false}
  />
);

export const visPapirsoknadForFarVedFødsel = () => (
  <ForeldrepengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (values: any) => Promise<any>}
    readOnly={false}
    soknadData={new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.FAR)}
    alleKodeverk={alleKodeverk as any}
    fagsakPersonnummer="1234567"
    erEndringssøknad={false}
  />
);
