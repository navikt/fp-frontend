import React from 'react';
import { render, screen } from '@testing-library/react';

import tilbakekrevingKodeverkTyper from '@fpsak-frontend/kodeverk/src/tilbakekrevingKodeverkTyper';
import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import {
  AlleKodeverkTilbakekreving, Behandling, Aksjonspunkt, FeilutbetalingPerioderWrapper,
} from '@fpsak-frontend/types';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import * as Felles from '@fpsak-frontend/behandling-felles/src/utils/prosess/useStandardProsessPanelProps';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import foreldelseVurderingType from '@fpsak-frontend/kodeverk/src/foreldelseVurderingType';

import { requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys } from '../data/tilbakekrevingBehandlingApi';
import ForeldelseProsessStegInitPanel from './ForeldelseProsessStegInitPanel';

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
  behandlingÅrsaker: [],
  type: {
    kode: behandlingType.FORSTEGANGSSOKNAD,
    kodeverk: '',
  },
} as Behandling;

// @ts-ignore Fiks
const kodeverk = alleKodeverk as AlleKodeverk;

const alleKodeverkTilbakekreving = {
  [tilbakekrevingKodeverkTyper.FORELDELSE_VURDERING]: [
    {
      kode: foreldelseVurderingType.FORELDET,
      navn: 'Foreldet',
      kodeverk: 'FORELDELSE_VURDERING',
    },
    {
      kode: foreldelseVurderingType.TILLEGGSFRIST,
      navn: 'Ikke foreldet, med tilleggsfrist',
      kodeverk: 'FORELDELSE_VURDERING',
    },
    {
      kode: foreldelseVurderingType.IKKE_FORELDET,
      navn: 'Ikke foreldet',
      kodeverk: 'FORELDELSE_VURDERING',
    },
  ],
} as AlleKodeverkTilbakekreving;

const perioderForeldelse = {
  perioder: [{
    fom: '2019-01-01',
    tom: '2019-01-31',
    belop: 1000,
    begrunnelse: 'Foreldet',
    foreldelseVurderingType: {
      kode: foreldelseVurderingType.FORELDET,
      kodeverk: 'FORELDELSE_VURDERING',
    },
    foreldelsesfrist: '2020-04-01',
  }, {
    fom: '2019-02-01',
    tom: '2019-02-28',
    belop: 3000,
    begrunnelse: 'Over foreldelsesfrist, med tillegsfrist brukes',
    foreldelseVurderingType: {
      kode: foreldelseVurderingType.TILLEGGSFRIST,
      kodeverk: 'FORELDELSE_VURDERING',
    },
    foreldelsesfrist: '2020-04-01',
    oppdagelsesDato: '2019-11-01',
  }, {
    fom: '2019-03-01',
    tom: '2019-03-31',
    belop: 3000,
    begrunnelse: 'Ikke foreldet',
    foreldelseVurderingType: {
      kode: foreldelseVurderingType.IKKE_FORELDET,
      kodeverk: 'FORELDELSE_VURDERING',
    },
  },
  {
    fom: '2019-04-01',
    tom: '2019-04-30',
    belop: 4000,
    foreldelseVurderingType: {
      kode: foreldelseVurderingType.UDEFINERT,
      kodeverk: 'FORELDELSE_VURDERING',
    },
  }],
} as FeilutbetalingPerioderWrapper;

describe('<ForeldelseProsessStegInitPanel>', () => {
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
        kode: aksjonspunktCodesTilbakekreving.VURDER_FORELDELSE,
        kodeverk: '',
      },
      erAktivt: true,
      kanLoses: true,
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
    }] as Aksjonspunkt[],
    vilkar: [],
    isAksjonspunktOpen: true,
    setFormData: () => undefined,
  }));

  it('skal rendre komponent', async () => {
    const data = [
      { key: TilbakekrevingBehandlingApiKeys.AKSJONSPUNKTER.name, data: [] },
      { key: TilbakekrevingBehandlingApiKeys.PERIODER_FORELDELSE.name, data: perioderForeldelse },
      { key: TilbakekrevingBehandlingApiKeys.BEREGNE_BELØP.name, data: undefined },
    ];

    render(
      <RestApiMock data={data} requestApi={requestTilbakekrevingApi}>
        <ForeldelseProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          fagsakKjønn={{
            kode: navBrukerKjonn.KVINNE,
            kodeverk: '',
          }}
          fptilbakeKodeverk={alleKodeverkTilbakekreving}
          behandling={{ versjon: 1 } as Behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Foreldelse')).toBeInTheDocument();
    expect(screen.getByText(/kan være foreldet. Del opp perioden ved behov og fastsett foreldelse/)).toBeInTheDocument();
  });
});
