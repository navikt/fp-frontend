import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import { BehandlingAppKontekst } from '@fpsak-frontend/types';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import MenyHenleggIndex from '@fpsak-frontend/sak-meny-henlegg';

export default {
  title: 'sak/sak-meny-henlegg',
  component: MenyHenleggIndex,
  decorators: [withKnobs],
};

interface HenleggParams {
  årsakKode: string;
  begrunnelse: string;
  fritekst: string;
}

const valgtBehandling = {
  id: 1,
  versjon: 2,
  uuid: '23r2323',
  type: {
    kode: behandlingType.FORSTEGANGSSOKNAD,
    kodeverk: 'BEHANDLING_TYPE',
  },
} as BehandlingAppKontekst;

export const visMenyForÅHenleggeEnBehandling = () => (
  <MenyHenleggIndex
    valgtBehandling={valgtBehandling}
    henleggBehandling={action('button-click') as (params: HenleggParams) => Promise<any>}
    forhandsvisHenleggBehandling={action('button-click')}
    ytelseType={{
      kode: fagsakYtelseType.FORELDREPENGER,
      kodeverk: 'YTELSE_TYPE',
    }}
    behandlingResultatTyper={[{
      kode: behandlingResultatType.HENLAGT_SOKNAD_TRUKKET,
      kodeverk: 'RESULTAT_TYPE',
      navn: 'Henlagt soknad trukket',
    }, {
      kode: behandlingResultatType.HENLAGT_FEILOPPRETTET,
      kodeverk: 'RESULTAT_TYPE',
      navn: 'Henlagt feilopprettet',
    }, {
      kode: behandlingResultatType.HENLAGT_SOKNAD_MANGLER,
      kodeverk: 'RESULTAT_TYPE',
      navn: 'Henlagt soknad mangler',
    }, {
      kode: behandlingResultatType.MANGLER_BEREGNINGSREGLER,
      kodeverk: 'RESULTAT_TYPE',
      navn: 'Mangler beregningsregler',
    }]}
    gaaTilSokeside={action('button-click')}
    lukkModal={action('button-click')}
  />
);
