import React from 'react';
import { action } from '@storybook/addon-actions';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';

import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import { familieHendelseType, foreldreType } from '@navikt/fp-kodeverk';
import { alleKodeverk, withRouter } from '@navikt/fp-storybook-utils';

import SvangerskapspengerPapirsoknadIndex from './SvangerskapspengerPapirsoknadIndex';

export default {
  title: 'papirsoknad/papirsoknad-svp',
  component: SvangerskapspengerPapirsoknadIndex,
  decorators: [withRouter],
};

export const visPapirsoknadForMorVedFødsel = () => (
  <SvangerskapspengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (values: any) => Promise<any>}
    readOnly={false}
    soknadData={new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, familieHendelseType.FODSEL, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visPapirsoknadForMorVedAdopsjon = () => (
  <SvangerskapspengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (values: any) => Promise<any>}
    readOnly={false}
    soknadData={new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, familieHendelseType.ADOPSJON, foreldreType.MOR)}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visPapirsoknadForFarVedFodsel = () => (
  <SvangerskapspengerPapirsoknadIndex
    onSubmitUfullstendigsoknad={action('button-click') as () => Promise<any>}
    onSubmit={action('button-click') as (values: any) => Promise<any>}
    readOnly={false}
    soknadData={new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, familieHendelseType.FODSEL, foreldreType.FAR)}
    alleKodeverk={alleKodeverk as any}
  />
);
