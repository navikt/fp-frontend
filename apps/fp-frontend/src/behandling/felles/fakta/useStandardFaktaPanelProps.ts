import type { Aksjonspunkt, Behandling, BehandlingFpSak, Fagsak } from '@navikt/fp-types';
import type { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { erAksjonspunktÅpent } from '@navikt/fp-utils';

import { type AksjonspunktArgs, type OverstyrteAksjonspunktArgs } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../context/BehandlingDataContext';
import type { FellesPanelData } from '../panelData/BehandlingPanelDataProvider';
import { getAlleMerknaderFraBeslutter } from '../utils/getAlleMerknaderFraBeslutter';
import { erReadOnly } from '../utils/readOnlyPanelUtils';

const DEFAULT_FAKTA_KODE = 'default';
const DEFAULT_PROSESS_STEG_KODE = 'default';

export type StandardFaktaPanelProps<T extends Behandling = BehandlingFpSak> = Readonly<
  FellesPanelData<FaktaAksjonspunkt | FaktaAksjonspunkt[], T>
>;

export const useStandardFaktaPanelProps = <T extends Behandling = BehandlingFpSak>(
  aksjonspunktKoder: Aksjonspunkt['definisjon'][] = [],
): StandardFaktaPanelProps<T> => {
  const {
    behandling,
    rettigheter,
    fagsak,
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
    oppdaterProsessStegOgFaktaPanelIUrl,
    alleKodeverk,
  } = useBehandlingDataContext<T>();

  const aksjonspunkterForPanel = behandling.aksjonspunkt.filter(ap => aksjonspunktKoder.includes(ap.definisjon));
  const overstyringKoder = aksjonspunktKoder.filter(kode => kode.startsWith('6'));

  const vilkårTypeFraAP = new Set(
    aksjonspunkterForPanel.flatMap(ap => ('vilkarType' in ap && ap.vilkarType ? [ap.vilkarType] : [])),
  );
  const vilkårForPanel = 'vilkår' in behandling ? behandling.vilkår.filter(v => vilkårTypeFraAP.has(v.vilkarType)) : [];

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
    fagsak,
    isSubmittable: !aksjonspunkterForPanel.some(erAksjonspunktÅpent) || aksjonspunkterForPanel.some(ap => ap.kanLoses),
    harÅpentAksjonspunkt: aksjonspunkterForPanel.some(ap => erAksjonspunktÅpent(ap) && ap.kanLoses),
    alleKodeverk,
    aksjonspunkterForPanel,
    vilkårForPanel,
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
    overstyringApCodes: string[],
  ) =>
  (aksjonspunkterSomSkalLagres: FaktaAksjonspunkt | FaktaAksjonspunkt[]): Promise<void> => {
    const apListe = Array.isArray(aksjonspunkterSomSkalLagres)
      ? aksjonspunkterSomSkalLagres
      : [aksjonspunkterSomSkalLagres];

    const params = {
      saksnummer: fagsak.saksnummer,
      behandlingUuid: behandling.uuid,
      behandlingVersjon: behandling.versjon,
    };

    const etterLagringCallback = () => {
      oppdaterProsessStegOgFaktaPanelIUrl(DEFAULT_PROSESS_STEG_KODE, DEFAULT_FAKTA_KODE);
      globalThis.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    if (apListe.length === 0) {
      throw new Error('Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.');
    }

    if (overstyringApCodes.length > 0) {
      if (apListe.every(ap => overstyringApCodes.includes(ap['@type']))) {
        return lagreOverstyrteAksjonspunkter({
          ...params,
          overstyrteAksjonspunktDtoer: apListe,
        }).then(etterLagringCallback);
      }
    }

    return lagreAksjonspunkter({
      ...params,
      bekreftedeAksjonspunktDtoer: apListe,
    }).then(etterLagringCallback);
  };
