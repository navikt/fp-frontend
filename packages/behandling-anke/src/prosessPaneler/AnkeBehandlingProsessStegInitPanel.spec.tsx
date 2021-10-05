import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';

import {
  Behandling, AlleKodeverk, Fagsak, Aksjonspunkt,
} from '@fpsak-frontend/types';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import * as Felles from '@fpsak-frontend/behandling-felles/src/utils/prosess/useStandardProsessPanelProps';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import { AnkeBehandlingApiKeys, requestAnkeApi } from '../data/ankeBehandlingApi';
import AnkeBehandlingProsessStegInitPanel from './AnkeBehandlingProsessStegInitPanel';

const fagsak = {
  fagsakYtelseType: {
    kode: fagsakYtelseType.FORELDREPENGER,
    kodeverk: '',
  },
} as Fagsak;

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
} as Behandling;

const alleBehandlinger = [] as Behandling[];

// @ts-ignore Fiks
const kodeverk = alleKodeverk as AlleKodeverk;

describe('<AnkeBehandlingProsessStegInitPanel>', () => {
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

  it('skal rendre komponent korrekt', async () => {
    const data = [
      { key: AnkeBehandlingApiKeys.AKSJONSPUNKTER.name, data: [] },
      { key: AnkeBehandlingApiKeys.SAVE_ANKE_VURDERING.name, data: undefined },
    ];
    render(
      <RestApiMock data={data} requestApi={requestAnkeApi}>
        <AnkeBehandlingProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          fagsak={fagsak}
          alleBehandlinger={alleBehandlinger}
          behandling={behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Ankebehandling')).toBeInTheDocument();
    expect(screen.getByText('Fastsett resultatet av ankebehandlingen')).toBeInTheDocument();
  });

  it('skal vise forhåndsvisning av melding', async () => {
    const data = [
      { key: AnkeBehandlingApiKeys.AKSJONSPUNKTER.name, data: [] },
      { key: AnkeBehandlingApiKeys.SAVE_ANKE_VURDERING.name, data: undefined },
      { key: AnkeBehandlingApiKeys.PREVIEW_MESSAGE.name, noRelLink: true, data: undefined },
    ];

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => { axiosMock = mockAdapter; };

    const utils = render(
      <RestApiMock data={data} requestApi={requestAnkeApi} setApiMock={setApiMock}>
        <AnkeBehandlingProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          fagsak={fagsak}
          alleBehandlinger={alleBehandlinger}
          behandling={behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Ankebehandling')).toBeInTheDocument();

    userEvent.click(screen.getByText('Omgjør'));

    const begrunnelseInput = utils.getByLabelText('Begrunnelse');
    userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    const fritekstInput = utils.getByLabelText('Fritekst til brev');
    userEvent.type(fritekstInput, 'Dette er en fritekst');

    userEvent.click(screen.getByText('Forhåndsvis brev'));

    await waitFor(() => expect(axiosMock.history.post.length).toBe(1));

    expect(axiosMock.history.post
      .find((a) => a.url === '/fpformidling/api/brev/forhaandsvis')?.data).toBe(JSON.stringify({
      fritekst: 'Dette er en fritekst',
      mottaker: '',
      dokumentMal: 'VEDOGA',
      behandlingUuid: 'test-uuid',
      ytelseType: {
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      },
    }));
  });

  it('skal lagre anke-vurdering', async () => {
    const utils = render(
      <AnkeBehandlingProsessStegInitPanel
        valgtProsessSteg="default"
        registrerProsessPanel={() => {}}
        fagsak={fagsak}
        alleBehandlinger={alleBehandlinger}
        behandling={behandling}
      />,
    );

    expect(await screen.findByText('Ankebehandling')).toBeInTheDocument();

    userEvent.selectOptions(utils.getByLabelText('Vedtaket som er anket'), '0');

    userEvent.click(utils.getByLabelText('Stadfest'));

    const begrunnelseInput = utils.getByLabelText('Begrunnelse');
    userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    const fritekstInput = utils.getByLabelText('Fritekst til brev');
    userEvent.type(fritekstInput, 'Dette er en fritekst');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(submitCallback).toHaveBeenCalledTimes(1));
    expect(submitCallback).toHaveBeenNthCalledWith(1, {
      ankeOmgjoerArsak: '-',
      ankeVurdering: {
        kode: 'ANKE_STADFESTE_YTELSESVEDTAK',
      },
      ankeVurderingOmgjoer: '-',
      begrunnelse: 'Dette er en begrunnelse',
      erAnkerIkkePart: false,
      erFristIkkeOverholdt: false,
      erGodkjentAvMedunderskriver: undefined,
      erIkkeKonkret: false,
      erIkkeSignert: false,
      erSubsidiartRealitetsbehandles: null,
      fritekstTilBrev: 'Dette er en fritekst',
      kode: '5093',
      påAnketKlageBehandlingUuid: null,

    });
  });
});
