import { use } from 'react';

import {
  AksjonspunktStatus,
  AksjonspunktType,
  isAksjonspunktOpen,
  VilkarType,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Behandling, Fagsak, Vilkar } from '@navikt/fp-types';
import type { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import type { AksjonspunktArgs, OverstyrteAksjonspunktArgs } from '../../../data/behandlingApi';
import type { StandardProsessPanelProps } from '../typer/standardProsessPanelPropsTsType';
import { BehandlingDataContext } from '../utils/behandlingDataContext';
import { getAlleMerknaderFraBeslutter } from '../utils/getAlleMerknaderFraBeslutter';
import { erReadOnly } from '../utils/readOnlyPanelUtils';

const DEFAULT_FAKTA_KODE = 'default';
const DEFAULT_PROSESS_STEG_KODE = 'default';

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

const finnStatus = (vilkar: Vilkar[], aksjonspunkter: Aksjonspunkt[]) => {
  if (vilkar.length > 0) {
    const vilkarStatusCodes = vilkar.map(v => v.vilkarStatus);
    if (vilkarStatusCodes.some(vsc => vsc === VilkarUtfallType.IKKE_VURDERT)) {
      return VilkarUtfallType.IKKE_VURDERT;
    }
    return vilkarStatusCodes.every(vsc => vsc === VilkarUtfallType.OPPFYLT)
      ? VilkarUtfallType.OPPFYLT
      : VilkarUtfallType.IKKE_OPPFYLT;
  }

  if (aksjonspunkter.length > 0) {
    return aksjonspunkter.some(ap => isAksjonspunktOpen(ap.status))
      ? VilkarUtfallType.IKKE_VURDERT
      : VilkarUtfallType.OPPFYLT;
  }
  return VilkarUtfallType.IKKE_VURDERT;
};

export const useStandardProsessPanelProps = (
  aksjonspunktKoder?: string[],
  vilkarKoder?: VilkarType[],
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

  const { aksjonspunkt: aksjonspunkter, vilkår } = behandling;

  const aksjonspunkterForSteg =
    aksjonspunkter && aksjonspunktKoder
      ? aksjonspunkter.filter(ap => aksjonspunktKoder.some(ak => ak === ap.definisjon))
      : [];

  const vilkarForSteg = vilkår && vilkarKoder ? vilkår.filter(v => vilkarKoder.some(vk => vk === v.vilkarType)) : [];

  const isReadOnly = erReadOnly(behandling, vilkarForSteg, rettigheter, false);

  const alleMerknaderFraBeslutter = getAlleMerknaderFraBeslutter(behandling.status, aksjonspunkterForSteg);

  const harApneAksjonspunkter = aksjonspunkterForSteg.some(
    ap => ap.status === AksjonspunktStatus.OPPRETTET && ap.kanLoses,
  );

  const status = finnStatus(vilkarForSteg, aksjonspunkterForSteg);

  const readOnlySubmitButton = !aksjonspunkterForSteg.some(ap => ap.kanLoses) || VilkarUtfallType.OPPFYLT === status;

  const standardlagringSideEffekter = () => () => {
    oppdaterProsessStegOgFaktaPanelIUrl(DEFAULT_PROSESS_STEG_KODE, DEFAULT_FAKTA_KODE);
  };

  const submitCallback = getBekreftAksjonspunktProsessCallback(
    lagringSideEffekter || standardlagringSideEffekter,
    fagsak,
    behandling,
    aksjonspunkterForSteg,
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
  );

  return {
    fagsak: fagsak,
    behandling: behandling,
    isAksjonspunktOpen: harApneAksjonspunkter,
    aksjonspunkter: aksjonspunkterForSteg,
    vilkar: vilkarForSteg,
    alleKodeverk: alleKodeverk,
    alleMerknaderFraBeslutter,
    isReadOnly,
    readOnlySubmitButton,
    submitCallback,
    status,
  };
};
