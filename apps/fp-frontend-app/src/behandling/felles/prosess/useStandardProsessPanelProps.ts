import { use } from 'react';

import { AksjonspunktStatus, AksjonspunktType, erAksjonspunktÅpent, VilkarUtfallType } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, AlleKodeverk, Behandling, Fagsak, Vilkar } from '@navikt/fp-types';
import type { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import type { AksjonspunktArgs, OverstyrteAksjonspunktArgs } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../context/BehandlingDataContext';
import { getAlleMerknaderFraBeslutter } from '../utils/getAlleMerknaderFraBeslutter';
import { erReadOnly } from '../utils/readOnlyPanelUtils';

const DEFAULT_FAKTA_KODE = 'default';
const DEFAULT_PROSESS_STEG_KODE = 'default';

export interface StandardProsessPanelProps {
  behandling: Behandling;
  fagsak: Fagsak;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  aksjonspunkterForPanel: Aksjonspunkt[];
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunkterSomSkalLagres: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  status: string;
  isReadOnly: boolean;
  readOnlySubmitButton: boolean;
  vilkårForPanel: Vilkar[];
  harÅpentAksjonspunkt: boolean;
  isAksjonspunktOpen: boolean;
}

export const useStandardProsessPanelProps = (
  aksjonspunktKoder: Aksjonspunkt['definisjon'][] = [],
  vilkårKoder: Aksjonspunkt['vilkarType'][] = [],
  lagringSideEffekter?: (aksjonspunkter: ProsessAksjonspunkt[]) => () => void,
): StandardProsessPanelProps => {
  const {
    behandling,
    rettigheter,
    fagsak,
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
    alleKodeverk,
    oppdaterProsessStegOgFaktaPanelIUrl,
  } = use(BehandlingDataContext);

  const { aksjonspunkt, vilkår } = behandling;

  const aksjonspunkterForPanel = aksjonspunkt.filter(ap => aksjonspunktKoder.includes(ap.definisjon));

  const vilkårForPanel = vilkår.filter(v => vilkårKoder.includes(v.vilkarType));

  const isReadOnly = erReadOnly(behandling, vilkårForPanel, rettigheter, false);

  const alleMerknaderFraBeslutter = getAlleMerknaderFraBeslutter(behandling.status, aksjonspunkterForPanel);

  const harÅpentAksjonspunkt = aksjonspunkterForPanel.some(
    ap => ap.status === AksjonspunktStatus.OPPRETTET && ap.kanLoses,
  );

  const status = finnStatus(vilkårForPanel, aksjonspunkterForPanel);

  const readOnlySubmitButton = !aksjonspunkterForPanel.some(ap => ap.kanLoses) || VilkarUtfallType.OPPFYLT === status;

  const standardlagringSideEffekter = () => () => {
    oppdaterProsessStegOgFaktaPanelIUrl(DEFAULT_PROSESS_STEG_KODE, DEFAULT_FAKTA_KODE);
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
    harÅpentAksjonspunkt,
    isAksjonspunktOpen: harÅpentAksjonspunkt,
    aksjonspunkter: aksjonspunkterForPanel,
    aksjonspunkterForPanel,
    vilkårForPanel,
    alleKodeverk,
    alleMerknaderFraBeslutter,
    isReadOnly,
    readOnlySubmitButton,
    submitCallback,
    status,
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

    if (lagreOverstyrteAksjonspunkter) {
      const aksjonspunkterTilLagring = aksjonspunkter.filter(ap =>
        apListe.some(apModel => apModel.kode === ap.definisjon),
      );
      const erOverstyringsaksjonspunkter = aksjonspunkterTilLagring.some(
        ap =>
          ap.aksjonspunktType === AksjonspunktType.OVERSTYRING ||
          ap.aksjonspunktType === AksjonspunktType.SAKSBEHANDLEROVERSTYRING,
      );

      if (apListe.length === 0) {
        throw Error('Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.');
      }

      if (aksjonspunkterTilLagring.length === 0 || erOverstyringsaksjonspunkter) {
        return lagreOverstyrteAksjonspunkter({
          ...params,
          overstyrteAksjonspunktDtoer: models,
        }).then(etterLagringCallback);
      }
    }

    return lagreAksjonspunkter({
      ...params,
      bekreftedeAksjonspunktDtoer: models,
    }).then(etterLagringCallback);
  };

const finnStatus = (vilkår: Vilkar[], aksjonspunkter: Aksjonspunkt[]) => {
  if (vilkår.length > 0) {
    const vilkårStatusCodes = vilkår.map(v => v.vilkarStatus);
    if (vilkårStatusCodes.some(vsc => vsc === VilkarUtfallType.IKKE_VURDERT)) {
      return VilkarUtfallType.IKKE_VURDERT;
    }
    return vilkårStatusCodes.every(vsc => vsc === VilkarUtfallType.OPPFYLT)
      ? VilkarUtfallType.OPPFYLT
      : VilkarUtfallType.IKKE_OPPFYLT;
  }

  if (aksjonspunkter.length > 0) {
    return aksjonspunkter.some(erAksjonspunktÅpent) ? VilkarUtfallType.IKKE_VURDERT : VilkarUtfallType.OPPFYLT;
  }
  return VilkarUtfallType.IKKE_VURDERT;
};
