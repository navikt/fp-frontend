import { use } from 'react';

import { erAksjonspunktÅpent } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, AlleKodeverk, Behandling, Fagsak } from '@navikt/fp-types';
import type { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import { type AksjonspunktArgs, type OverstyrteAksjonspunktArgs } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../context/BehandlingDataContext';
import { getAlleMerknaderFraBeslutter } from '../utils/getAlleMerknaderFraBeslutter';
import { erReadOnly } from '../utils/readOnlyPanelUtils';

const DEFAULT_FAKTA_KODE = 'default';
const DEFAULT_PROSESS_STEG_KODE = 'default';

export type StandardFaktaPanelProps = Readonly<{
  behandling: Behandling;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  aksjonspunkterForPanel: Aksjonspunkt[];
  isReadOnly: boolean;
  isSubmittable: boolean;
  harÅpentAksjonspunkt: boolean;
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents -- [JOHANNES] krever fiks i ft-saksbehandling-frontend
  submitCallback: (aksjonspunkterSomSkalLagres: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
}>;

export const useStandardFaktaPanelProps = (
  aksjonspunktKoder: Aksjonspunkt['definisjon'][] = [],
  overstyringKoder: Aksjonspunkt['definisjon'][] = [],
): StandardFaktaPanelProps => {
  const {
    behandling,
    rettigheter,
    fagsak,
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
    oppdaterProsessStegOgFaktaPanelIUrl,
    alleKodeverk,
  } = use(BehandlingDataContext);

  const { aksjonspunkt } = behandling;

  const aksjonspunkterForPanel = aksjonspunkt.filter(ap => aksjonspunktKoder.includes(ap.definisjon));

  const isReadOnly = erReadOnly(behandling, [], rettigheter, false);
  const alleMerknaderFraBeslutter = getAlleMerknaderFraBeslutter(behandling.status, aksjonspunkterForPanel);

  const submitCallback = getBekreftAksjonspunktFaktaCallback(
    fagsak,
    behandling,
    oppdaterProsessStegOgFaktaPanelIUrl,
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
    overstyringKoder,
  );

  return {
    behandling,
    isSubmittable: !aksjonspunkterForPanel.some(erAksjonspunktÅpent) || aksjonspunkterForPanel.some(ap => ap.kanLoses),
    harÅpentAksjonspunkt: aksjonspunkterForPanel.some(ap => erAksjonspunktÅpent(ap) && ap.kanLoses),
    alleKodeverk,
    aksjonspunkterForPanel,
    isReadOnly,
    alleMerknaderFraBeslutter,
    submitCallback,
  };
};

const getBekreftAksjonspunktFaktaCallback =
  (
    fagsak: Fagsak,
    behandling: Behandling,
    oppdaterProsessStegOgFaktaPanelIUrl: (prosessPanel?: string, faktanavn?: string) => void,
    lagreAksjonspunkter: (params: AksjonspunktArgs) => Promise<Behandling>,
    lagreOverstyrteAksjonspunkter: (params: OverstyrteAksjonspunktArgs) => Promise<Behandling>,
    overstyringApCodes?: string[],
  ) =>
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents -- [JOHANNES] krever fiks i ft-saksbehandling-frontend
  (aksjonspunkter: FaktaAksjonspunkt | FaktaAksjonspunkt[]): Promise<void> => {
    const apListe = Array.isArray(aksjonspunkter) ? aksjonspunkter : [aksjonspunkter];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    const model = apListe.map(ap => ({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
      '@type': ap.kode,
      ...ap,
    }));

    const params = {
      saksnummer: fagsak.saksnummer,
      behandlingUuid: behandling.uuid,
      behandlingVersjon: behandling.versjon,
    };

    if (overstyringApCodes) {
      if (model.length === 0) {
        throw Error('Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.');
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
      if (overstyringApCodes.includes(model[0].kode)) {
        return lagreOverstyrteAksjonspunkter({
          ...params,
          overstyrteAksjonspunktDtoer: model,
        }).then(() => oppdaterProsessStegOgFaktaPanelIUrl(DEFAULT_PROSESS_STEG_KODE, DEFAULT_FAKTA_KODE));
      }
    }

    return lagreAksjonspunkter({
      ...params,
      bekreftedeAksjonspunktDtoer: model,
    }).then(() => oppdaterProsessStegOgFaktaPanelIUrl(DEFAULT_PROSESS_STEG_KODE, DEFAULT_FAKTA_KODE));
  };
