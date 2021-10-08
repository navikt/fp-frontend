import React from 'react';
import { render, screen } from '@testing-library/react';

import vilkarResultat from '@fpsak-frontend/prosess-tilbakekreving/src/kodeverk/vilkarResultat';
import tilbakekrevingKodeverkTyper from '@fpsak-frontend/kodeverk/src/tilbakekrevingKodeverkTyper';
import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import {
  Aksjonspunkt, AlleKodeverkTilbakekreving, Behandling, DetaljerteFeilutbetalingsperioder, FeilutbetalingPerioderWrapper,
} from '@fpsak-frontend/types';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import * as Felles from '@fpsak-frontend/behandling-felles/src/utils/prosess/useStandardProsessPanelProps';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import foreldelseVurderingType from '@fpsak-frontend/kodeverk/src/foreldelseVurderingType';
import sarligGrunn from '@fpsak-frontend/prosess-tilbakekreving/src/kodeverk/sarligGrunn';
import aktsomhet from '@fpsak-frontend/prosess-tilbakekreving/src/kodeverk/aktsomhet';

import { requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys } from '../data/tilbakekrevingBehandlingApi';
import TilbakekrevingProsessStegInitPanel from './TilbakekrevingProsessStegInitPanel';

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
} as Behandling;

// @ts-ignore Fiks
const kodeverk = alleKodeverk as AlleKodeverk;

const tilbakeKodeverk = {
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

describe('<TilbakekrevingProsessStegInitPanel>', () => {
  const submitCallback = jest.fn();
  jest.spyOn(Felles, 'default').mockImplementation(() => ({
    behandling,
    alleMerknaderFraBeslutter: {},
    submitCallback,
    status: vilkarUtfallType.IKKE_VURDERT,
    alleKodeverk: kodeverk,
    isReadOnly: false,
    readOnlySubmitButton: false,
    aksjonspunkter: [{
      definisjon: {
        kode: aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE,
        kodeverk: '',
      },
      erAktivt: true,
      kanLoses: true,
    }] as Aksjonspunkt[],
    vilkar: [],
    isAksjonspunktOpen: true,
    setFormData: () => undefined,
  }));

  it('skal rendre komponent', async () => {
    const data = [
      { key: TilbakekrevingBehandlingApiKeys.AKSJONSPUNKTER.name, data: [] },
      { key: TilbakekrevingBehandlingApiKeys.VILKARVURDERINGSPERIODER.name, data: vilkarvurderingsperioder },
      { key: TilbakekrevingBehandlingApiKeys.VILKARVURDERING.name, data: vilkarvurdering },
      { key: TilbakekrevingBehandlingApiKeys.PERIODER_FORELDELSE.name, data: perioderForeldelse },
      { key: TilbakekrevingBehandlingApiKeys.BEREGNE_BELØP.name, data: undefined },
    ];
    render(
      <RestApiMock data={data} requestApi={requestTilbakekrevingApi}>
        <TilbakekrevingProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          fagsakKjønn={{
            kode: navBrukerKjonn.KVINNE,
            kodeverk: '',
          }}
          fptilbakeKodeverk={tilbakeKodeverk}
          behandling={behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Tilbakekreving')).toBeInTheDocument();
    expect(screen.getByText('Fastsett tilbakekreving etter §22-15. Del opp perioden ved behov for ulik vurdering')).toBeInTheDocument();
  });
});
