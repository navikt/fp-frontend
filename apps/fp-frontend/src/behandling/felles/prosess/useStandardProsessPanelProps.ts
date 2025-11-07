import type { Aksjonspunkt, AlleKodeverk, Behandling, BehandlingFpSak, Fagsak, Vilkar } from '@navikt/fp-types';
import type { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import type { AksjonspunktArgs, OverstyrteAksjonspunktArgs } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../context/BehandlingDataContext';
import { getAlleMerknaderFraBeslutter } from '../utils/getAlleMerknaderFraBeslutter';
import { erReadOnly } from '../utils/readOnlyPanelUtils';

const DEFAULT_FAKTA_KODE = 'default';
const DEFAULT_PROSESS_STEG_KODE = 'default';

export type StandardProsessPanelProps<T extends Behandling> = {
  behandling: T;
  fagsak: Fagsak;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  aksjonspunkterForPanel: Aksjonspunkt[];
  vilkårForPanel: Vilkar[];
  isReadOnly: boolean;
  isSubmittable: boolean;
  harÅpentAksjonspunkt: boolean;
  submitCallback: (aksjonspunkterSomSkalLagres: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
};

export const useStandardProsessPanelProps = <T extends Behandling = BehandlingFpSak>(
  aksjonspunktKoder: Aksjonspunkt['definisjon'][] = [],
  vilkårKoder: Aksjonspunkt['vilkarType'][] = [],
  lagringSideEffekter?: (aksjonspunkter: ProsessAksjonspunkt[]) => () => void,
): StandardProsessPanelProps<T> => {
  const {
    behandling,
    rettigheter,
    fagsak,
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
    alleKodeverk,
    oppdaterProsessStegOgFaktaPanelIUrl,
  } = useBehandlingDataContext<T>();

  const aksjonspunkterForPanel = behandling.aksjonspunkt.filter(ap => aksjonspunktKoder.includes(ap.definisjon));

  const vilkår = 'vilkår' in behandling ? behandling.vilkår : [];
  const vilkårForPanel = vilkår.filter(v => vilkårKoder.includes(v.vilkarType));

  const isReadOnly = erReadOnly(behandling, vilkårForPanel, rettigheter, false);

  const alleMerknaderFraBeslutter = getAlleMerknaderFraBeslutter(behandling.status, aksjonspunkterForPanel);

  const harÅpentAksjonspunkt = aksjonspunkterForPanel.some(ap => ap.status === 'OPPR' && ap.kanLoses);

  const isSubmittable = aksjonspunkterForPanel.some(ap => ap.kanLoses) && status !== 'OPPFYLT';

  const standardlagringSideEffekter = () => () => {
    oppdaterProsessStegOgFaktaPanelIUrl(DEFAULT_PROSESS_STEG_KODE, DEFAULT_FAKTA_KODE);
    globalThis.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const submitCallback = getBekreftAksjonspunktProsessCallback(
    lagringSideEffekter || standardlagringSideEffekter,
    fagsak,
    behandling,
    aksjonspunkterForPanel,
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
  );

  return {
    fagsak,
    behandling,
    alleKodeverk,
    alleMerknaderFraBeslutter,
    aksjonspunkterForPanel,
    vilkårForPanel,
    isReadOnly,
    isSubmittable,
    harÅpentAksjonspunkt,
    submitCallback,
  };
};

const getBekreftAksjonspunktProsessCallback =
  (
    lagringSideEffectsCallback: (aksjonspunkter: ProsessAksjonspunkt[]) => () => void,
    fagsak: Fagsak,
    behandling: Behandling,
    aksjonspunkter: Aksjonspunkt[],
    lagreAksjonspunkter: (params: AksjonspunktArgs) => Promise<Behandling>,
    lagreOverstyrteAksjonspunkter: (params: OverstyrteAksjonspunktArgs) => Promise<Behandling>,
  ) =>
  (aksjonspunkterSomSkalLagres: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => {
    const apListe = Array.isArray(aksjonspunkterSomSkalLagres)
      ? aksjonspunkterSomSkalLagres
      : [aksjonspunkterSomSkalLagres];
    const models = apListe.map(ap => ({
      '@type': ap.kode,
      ...ap,
    }));

    const params = {
      saksnummer: fagsak.saksnummer,
      behandlingUuid: behandling.uuid,
      behandlingVersjon: behandling.versjon,
    };

    const etterLagringCallback = lagringSideEffectsCallback(apListe);

    const aksjonspunkterTilLagring = aksjonspunkter.filter(ap =>
      apListe.some(apModel => apModel.kode === ap.definisjon),
    );
    const erOverstyringsaksjonspunkter = aksjonspunkterTilLagring.some(
      ap => ap.aksjonspunktType === 'OVST' || ap.aksjonspunktType === 'SAOV',
    );

    if (apListe.length === 0) {
      throw new Error('Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.');
    }

    if (aksjonspunkterTilLagring.length === 0 || erOverstyringsaksjonspunkter) {
      return lagreOverstyrteAksjonspunkter({
        ...params,
        overstyrteAksjonspunktDtoer: models,
      }).then(etterLagringCallback);
    }

    return lagreAksjonspunkter({
      ...params,
      bekreftedeAksjonspunktDtoer: models,
    }).then(etterLagringCallback);
  };
