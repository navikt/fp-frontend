import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { BehandlingAppKontekst } from '@navikt/fp-types';
import { FagsakYtelseType, BehandlingType, BehandlingResultatType } from '@navikt/fp-kodeverk';
import MenyHenleggIndex from './MenyHenleggIndex';

export default {
  title: 'sak/sak-meny-henlegg',
  component: MenyHenleggIndex,
};

interface HenleggParams {
  årsakKode: string;
  begrunnelse: string;
  fritekst?: string;
}

const Template: StoryFn<{
  henleggBehandling: (params: HenleggParams) => Promise<any>;
  lukkModal: () => void;
  forhandsvisHenleggBehandling: () => void;
  behandling: BehandlingAppKontekst;
}> = ({ henleggBehandling, lukkModal, forhandsvisHenleggBehandling, behandling }) => (
  <MenyHenleggIndex
    valgtBehandling={behandling}
    henleggBehandling={henleggBehandling}
    forhandsvisHenleggBehandling={forhandsvisHenleggBehandling}
    ytelseType={FagsakYtelseType.FORELDREPENGER}
    behandlingResultatTyper={[
      {
        kode: BehandlingResultatType.HENLAGT_KLAGE_TRUKKET,
        kodeverk: 'BEHANDLING_RESULT_TYPE',
        navn: 'Henlagt klage',
      },
      {
        kode: BehandlingResultatType.HENLAGT_SOKNAD_TRUKKET,
        kodeverk: 'RESULTAT_TYPE',
        navn: 'Henlagt soknad trukket',
      },
      {
        kode: BehandlingResultatType.HENLAGT_FEILOPPRETTET_UTEN_BREV,
        kodeverk: 'BEHANDLING_RESULT_TYPE',
        navn: 'Henlagt feilopprettet uten brev',
      },
      {
        kode: BehandlingResultatType.HENLAGT_FEILOPPRETTET_MED_BREV,
        kodeverk: 'BEHANDLING_RESULT_TYPE',
        navn: 'Henlagt feilopprettet med brev',
      },
      {
        kode: BehandlingResultatType.HENLAGT_INNSYN_TRUKKET,
        kodeverk: 'BEHANDLING_RESULT_TYPE',
        navn: 'Henlagt innsyn',
      },
      {
        kode: BehandlingResultatType.HENLAGT_FEILOPPRETTET,
        kodeverk: 'RESULTAT_TYPE',
        navn: 'Henlagt feilopprettet',
      },
      {
        kode: BehandlingResultatType.HENLAGT_SOKNAD_MANGLER,
        kodeverk: 'RESULTAT_TYPE',
        navn: 'Henlagt soknad mangler',
      },
    ]}
    gaaTilSokeside={action('button-click')}
    lukkModal={lukkModal}
  />
);

export const ForFørstegangssøknad = Template.bind({});
ForFørstegangssøknad.args = {
  behandling: {
    versjon: 2,
    uuid: '23r2323',
    type: BehandlingType.FORSTEGANGSSOKNAD,
  } as BehandlingAppKontekst,
  henleggBehandling: () => Promise.resolve(),
  lukkModal: action('button-click'),
  forhandsvisHenleggBehandling: action('button-click'),
};

export const ForKlage = Template.bind({});
ForKlage.args = {
  behandling: {
    versjon: 2,
    uuid: '23r2323',
    type: BehandlingType.KLAGE,
  } as BehandlingAppKontekst,
  henleggBehandling: action('button-click') as (params: HenleggParams) => Promise<any>,
  lukkModal: action('button-click'),
  forhandsvisHenleggBehandling: action('button-click'),
};

export const ForInnsyn = Template.bind({});
ForInnsyn.args = {
  behandling: {
    versjon: 2,
    uuid: '23r2323',
    type: BehandlingType.DOKUMENTINNSYN,
  } as BehandlingAppKontekst,
  henleggBehandling: action('button-click') as (params: HenleggParams) => Promise<any>,
  lukkModal: action('button-click'),
  forhandsvisHenleggBehandling: action('button-click'),
};

export const ForTilbakekreving = Template.bind({});
ForTilbakekreving.args = {
  behandling: {
    versjon: 2,
    uuid: '23r2323',
    type: BehandlingType.TILBAKEKREVING,
  } as BehandlingAppKontekst,
  henleggBehandling: action('button-click') as (params: HenleggParams) => Promise<any>,
  lukkModal: action('button-click'),
  forhandsvisHenleggBehandling: action('button-click'),
};

export const ForTilbakekrevingRevurdering = Template.bind({});
ForTilbakekrevingRevurdering.args = {
  behandling: {
    versjon: 2,
    uuid: '23r2323',
    type: BehandlingType.TILBAKEKREVING_REVURDERING,
  } as BehandlingAppKontekst,
  henleggBehandling: action('button-click') as (params: HenleggParams) => Promise<any>,
  lukkModal: action('button-click'),
  forhandsvisHenleggBehandling: action('button-click'),
};

export const ForRevurdering = Template.bind({});
ForRevurdering.args = {
  behandling: {
    versjon: 2,
    uuid: '23r2323',
    type: BehandlingType.REVURDERING,
  } as BehandlingAppKontekst,
  henleggBehandling: action('button-click') as (params: HenleggParams) => Promise<any>,
  lukkModal: action('button-click'),
  forhandsvisHenleggBehandling: action('button-click'),
};
