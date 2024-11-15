import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import { VilkarUtfallType, BehandlingStatus, AksjonspunktKode } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak } from '@navikt/fp-types';

import * as Felles from './useStandardProsessPanelProps';
import InngangsvilkarDefaultInitPanel from './InngangsvilkarDefaultInitPanel';

const behandling = {
  uuid: '1',
  versjon: 2,
  status: BehandlingStatus.OPPRETTET,
  behandlingPaaVent: false,
} as Behandling;

// @ts-ignore Fiks
const kodeverk = alleKodeverk as AlleKodeverk;

const defaultProps = {
  behandling,
  alleMerknaderFraBeslutter: {},
  submitCallback: vi.fn(),
  status: VilkarUtfallType.IKKE_VURDERT,
  alleKodeverk: kodeverk,
  isReadOnly: false,
  readOnlySubmitButton: false,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.BEHANDLE_KLAGE_NFP,
      kanLoses: true,
    },
  ] as Aksjonspunkt[],
  vilkar: [],
  isAksjonspunktOpen: true,
  setFormData: () => undefined,
  fagsak: {} as Fagsak,
};

describe('<InngangsvilkarDefaultInitPanel>', () => {
  it('skal ikke vise panel når en ikke har åpne aksjonspunkter', async () => {
    vi.spyOn(Felles, 'default').mockImplementation(() => ({
      ...defaultProps,
      aksjonspunkter: [] as Aksjonspunkt[],
    }));

    render(
      <InngangsvilkarDefaultInitPanel
        erPanelValgt
        behandlingVersjon={1}
        registrerInngangsvilkarPanel={() => {}}
        renderPanel={() => <div>Dette er komponenten</div>}
        inngangsvilkarPanelKode="test"
        hentInngangsvilkarPanelTekst={() => 'test'}
        harInngangsvilkarApentAksjonspunkt={false}
      />,
    );

    await waitFor(() => expect(screen.queryByText('Dette er komponenten')).not.toBeInTheDocument());
  });

  it('skal vise panel', async () => {
    vi.spyOn(Felles, 'default').mockImplementation(() => defaultProps);

    render(
      <InngangsvilkarDefaultInitPanel
        erPanelValgt
        behandlingVersjon={1}
        registrerInngangsvilkarPanel={() => {}}
        aksjonspunktKoder={[AksjonspunktKode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR]}
        renderPanel={() => <div>Dette er komponenten</div>}
        inngangsvilkarPanelKode="test"
        hentInngangsvilkarPanelTekst={() => 'test'}
        harInngangsvilkarApentAksjonspunkt={false}
      />,
    );

    expect(await screen.findByText('Dette er komponenten')).toBeInTheDocument();
  });
});
