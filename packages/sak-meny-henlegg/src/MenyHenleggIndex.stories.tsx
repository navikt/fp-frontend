import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import { BehandlingAppKontekst } from '@fpsak-frontend/types';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import MenyHenleggIndex from '@fpsak-frontend/sak-meny-henlegg';

export default {
  title: 'sak/sak-meny-henlegg',
  component: MenyHenleggIndex,
};

interface HenleggParams {
  årsakKode: string;
  begrunnelse: string;
  fritekst: string;
}

const Template: Story<{
  henleggBehandling: (params: HenleggParams) => Promise<any>,
  lukkModal: () => void;
  forhandsvisHenleggBehandling: () => void;
  behandling: BehandlingAppKontekst,
}> = ({
  henleggBehandling,
  lukkModal,
  forhandsvisHenleggBehandling,
  behandling,
}) => (
  <MenyHenleggIndex
    valgtBehandling={behandling}
    henleggBehandling={henleggBehandling}
    forhandsvisHenleggBehandling={forhandsvisHenleggBehandling}
    ytelseType={fagsakYtelseType.FORELDREPENGER}
    behandlingResultatTyper={[{
      kode: behandlingResultatType.HENLAGT_KLAGE_TRUKKET,
      kodeverk: 'BEHANDLING_RESULT_TYPE',
      navn: 'Henlagt klage',
    }, {
      kode: behandlingResultatType.HENLAGT_SOKNAD_TRUKKET,
      kodeverk: 'RESULTAT_TYPE',
      navn: 'Henlagt soknad trukket',
    }, {
      kode: behandlingResultatType.HENLAGT_FEILOPPRETTET_UTEN_BREV,
      kodeverk: 'BEHANDLING_RESULT_TYPE',
      navn: 'Henlagt feilopprettet uten brev',
    }, {
      kode: behandlingResultatType.HENLAGT_FEILOPPRETTET_MED_BREV,
      kodeverk: 'BEHANDLING_RESULT_TYPE',
      navn: 'Henlagt feilopprettet med brev',
    }, {
      kode: behandlingResultatType.HENLAGT_INNSYN_TRUKKET,
      kodeverk: 'BEHANDLING_RESULT_TYPE',
      navn: 'Henlagt innsyn',
    }, {
      kode: behandlingResultatType.HENLAGT_FEILOPPRETTET,
      kodeverk: 'RESULTAT_TYPE',
      navn: 'Henlagt feilopprettet',
    }, {
      kode: behandlingResultatType.HENLAGT_SOKNAD_MANGLER,
      kodeverk: 'RESULTAT_TYPE',
      navn: 'Henlagt soknad mangler',
    }]}
    gaaTilSokeside={action('button-click')}
    lukkModal={lukkModal}
  />
);

export const ForFørstegangssøknad = Template.bind({});
ForFørstegangssøknad.args = {
  behandling: {
    versjon: 2,
    uuid: '23r2323',
    type: behandlingType.FORSTEGANGSSOKNAD,
  } as BehandlingAppKontekst,
  henleggBehandling: action('button-click') as (params: HenleggParams) => Promise<any>,
  lukkModal: action('button-click'),
  forhandsvisHenleggBehandling: action('button-click'),
};

export const ForKlage = Template.bind({});
ForKlage.args = {
  behandling: {
    versjon: 2,
    uuid: '23r2323',
    type: behandlingType.KLAGE,
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
    type: behandlingType.DOKUMENTINNSYN,
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
    type: behandlingType.TILBAKEKREVING,
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
    type: behandlingType.TILBAKEKREVING_REVURDERING,
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
    type: behandlingType.REVURDERING,
  } as BehandlingAppKontekst,
  henleggBehandling: action('button-click') as (params: HenleggParams) => Promise<any>,
  lukkModal: action('button-click'),
  forhandsvisHenleggBehandling: action('button-click'),
};
