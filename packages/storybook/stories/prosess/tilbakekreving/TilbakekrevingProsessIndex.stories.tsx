import React from 'react';
import { action } from '@storybook/addon-actions';

import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import tilbakekrevingKodeverkTyper from '@fpsak-frontend/kodeverk/src/tilbakekrevingKodeverkTyper';
import vilkarResultat from '@fpsak-frontend/prosess-tilbakekreving/src/kodeverk/vilkarResultat';
import sarligGrunn from '@fpsak-frontend/prosess-tilbakekreving/src/kodeverk/sarligGrunn';
import aktsomhet from '@fpsak-frontend/prosess-tilbakekreving/src/kodeverk/aktsomhet';
import NavBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import foreldelseVurderingType from '@fpsak-frontend/kodeverk/src/foreldelseVurderingType';
import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import TilbakekrevingProsessIndex from '@fpsak-frontend/prosess-tilbakekreving';
import {
  Behandling, FeilutbetalingPerioderWrapper, DetaljerteFeilutbetalingsperioder, AlleKodeverkTilbakekreving,
} from '@fpsak-frontend/types';

const perioderForeldelse = {
  perioder: [{
    fom: '2019-01-01',
    tom: '2019-02-02',
    belop: 1000,
    foreldelseVurderingType: {
      kode: foreldelseVurderingType.IKKE_FORELDET,
      kodeverk: 'FORELDELSE_VURDERING',
    },
  }, {
    fom: '2019-02-03',
    tom: '2019-04-02',
    belop: 3000,
    foreldelseVurderingType: {
      kode: foreldelseVurderingType.FORELDET,
      kodeverk: 'FORELDELSE_VURDERING',
    },
  }],
} as FeilutbetalingPerioderWrapper;

const vilkarvurderingsperioder = {
  perioder: [{
    fom: '2019-01-01',
    tom: '2019-04-01',
    foreldet: false,
    feilutbetaling: 10,
    årsak: {
      hendelseType: {
        kode: 'MEDLEM',
        kodeverk: '',
        navn: '§22 Medlemskap',
      },
    },
    redusertBeloper: [],
    ytelser: [{
      aktivitet: 'Arbeidstaker',
      belop: 1050,
    }],
  }],
  rettsgebyr: 1000,
} as DetaljerteFeilutbetalingsperioder;
const vilkarvurdering = {
  vilkarsVurdertePerioder: [],
};

const merknaderFraBeslutter = {
  notAccepted: false,
};

const alleKodeverk = {
  [tilbakekrevingKodeverkTyper.FORELDELSE_VURDERING]: [{
    kode: foreldelseVurderingType.FORELDET,
    navn: 'Foreldet',
    kodeverk: 'FORELDELSE_VURDERING',
  }, {
    kode: foreldelseVurderingType.IKKE_FORELDET,
    navn: 'Ikke foreldet',
    kodeverk: 'FORELDELSE_VURDERING',
  }, {
    kode: foreldelseVurderingType.TILLEGGSFRIST,
    navn: 'Tilleggsfrist',
    kodeverk: 'FORELDELSE_VURDERING',
  }],
  [tilbakekrevingKodeverkTyper.SARLIG_GRUNN]: [{
    kode: sarligGrunn.GRAD_AV_UAKTSOMHET,
    navn: 'Grad av uaktsomhet',
    kodeverk: '',
  }, {
    kode: sarligGrunn.HELT_ELLER_DELVIS_NAVS_FEIL,
    navn: 'Helt eller delvis NAVs feil',
    kodeverk: '',
  }, {
    kode: sarligGrunn.STOERRELSE_BELOEP,
    navn: 'Størrelse beløp',
    kodeverk: '',
  }, {
    kode: sarligGrunn.TID_FRA_UTBETALING,
    navn: 'Tid fra utbetaling',
    kodeverk: '',
  }, {
    kode: sarligGrunn.ANNET,
    navn: 'Annet',
    kodeverk: '',
  }],
  [tilbakekrevingKodeverkTyper.VILKAR_RESULTAT]: [{
    kode: vilkarResultat.FORSTO_BURDE_FORSTAATT,
    navn: 'Forsto eller burde forstått',
    kodeverk: '',
  }, {
    kode: vilkarResultat.FEIL_OPPLYSNINGER,
    navn: 'Feil opplysninger',
    kodeverk: '',
  }, {
    kode: vilkarResultat.MANGELFULL_OPPLYSNING,
    navn: 'Mangelfull opplysning',
    kodeverk: '',
  }, {
    kode: vilkarResultat.GOD_TRO,
    navn: 'God tro',
    kodeverk: '',
  }],
  [tilbakekrevingKodeverkTyper.AKTSOMHET]: [{
    kode: aktsomhet.FORSETT,
    navn: 'Forsett',
    kodeverk: '',
  }, {
    kode: aktsomhet.GROVT_UAKTSOM,
    navn: 'Grovt uaktsom',
    kodeverk: '',
  }, {
    kode: aktsomhet.SIMPEL_UAKTSOM,
    navn: 'Simpel uaktsom',
    kodeverk: '',
  }],
} as AlleKodeverkTilbakekreving;

const standardProsessProps = {
  behandling: {
    uuid: '1',
    versjon: 1,
  } as Behandling,
  alleKodeverk,
  aksjonspunkter: [],
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: false,
  isAksjonspunktOpen: true,
  readOnlySubmitButton: false,
  status: '',
  vilkar: [],
  setFormData: () => undefined,
};

export default {
  title: 'prosess/tilbakekreving/prosess-tilbakekreving',
  component: TilbakekrevingProsessIndex,
};

const beregnBelop = (params: { perioder: any[]}) => {
  const { perioder } = params;
  return Promise.resolve({
    perioder,
  });
};

export const visAksjonspunktForTilbakekreving = () => (
  <TilbakekrevingProsessIndex
    {...standardProsessProps}
    perioderForeldelse={perioderForeldelse}
    vilkarvurderingsperioder={vilkarvurderingsperioder}
    vilkarvurdering={vilkarvurdering}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodesTilbakekreving.VURDER_TILBAKEKREVING,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }]}
    navBrukerKjonn={NavBrukerKjonn.KVINNE}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodesTilbakekreving.VURDER_TILBAKEKREVING]: merknaderFraBeslutter,
    }}
    beregnBelop={(params) => beregnBelop(params)}
  />
);
