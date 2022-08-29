import {
  useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import { Aksjonspunkt, Behandling, Fagsak } from '@navikt/ft-types';
import { AksjonspunktStatus, VilkarUtfallType, isAksjonspunktOpen } from '@navikt/ft-kodeverk';

import { StandardProsessPanelProps, Vilkar } from '@fpsak-frontend/types';

import aksjonspunktType from '@fpsak-frontend/kodeverk/src/aksjonspunktType';
import { ProsessAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import { erReadOnly } from '../readOnlyPanelUtils';
import getAlleMerknaderFraBeslutter from '../getAlleMerknaderFraBeslutter';
import { StandardPropsStateContext } from '../standardPropsStateContext';

export const DEFAULT_FAKTA_KODE = 'default';
export const DEFAULT_PROSESS_STEG_KODE = 'default';

const getBekreftAksjonspunktProsessCallback = (
  lagringSideEffectsCallback: (aksjonspunktModeller: any) => () => void,
  fagsak: Fagsak,
  behandling: Behandling,
  aksjonspunkter: Aksjonspunkt[],
  lagreAksjonspunkter: (params: any, keepData?: boolean) => Promise<any>,
  lagreOverstyrteAksjonspunkter?: (params: any, keepData?: boolean) => Promise<any>,
) => (aksjonspunkterSomSkalLagres: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => {
  const apListe = Array.isArray(aksjonspunkterSomSkalLagres) ? aksjonspunkterSomSkalLagres : [aksjonspunkterSomSkalLagres];
  const models = apListe.map((ap) => ({
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
    const aksjonspunkterTilLagring = aksjonspunkter.filter((ap) => apListe.some((apModel) => apModel.kode === ap.definisjon));
    const erOverstyringsaksjonspunkter = aksjonspunkterTilLagring
      .some((ap) => ap.aksjonspunktType === aksjonspunktType.OVERSTYRING || ap.aksjonspunktType === aksjonspunktType.SAKSBEHANDLEROVERSTYRING);

    if (aksjonspunkterTilLagring.length === 0 || erOverstyringsaksjonspunkter) {
      return lagreOverstyrteAksjonspunkter({
        ...params,
        overstyrteAksjonspunktDtoer: models,
      }, true).then(etterLagringCallback);
    }
  }

  return lagreAksjonspunkter({
    ...params,
    bekreftedeAksjonspunktDtoer: models,
  }, true).then(etterLagringCallback);
};

const finnStatus = (vilkar: Vilkar[], aksjonspunkter: Aksjonspunkt[]) => {
  if (vilkar.length > 0) {
    const vilkarStatusCodes = vilkar.map((v) => v.vilkarStatus);
    if (vilkarStatusCodes.some((vsc) => vsc === VilkarUtfallType.IKKE_VURDERT)) {
      return VilkarUtfallType.IKKE_VURDERT;
    }
    return vilkarStatusCodes.every((vsc) => vsc === VilkarUtfallType.OPPFYLT) ? VilkarUtfallType.OPPFYLT : VilkarUtfallType.IKKE_OPPFYLT;
  }

  if (aksjonspunkter.length > 0) {
    return aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status)) ? VilkarUtfallType.IKKE_VURDERT : VilkarUtfallType.OPPFYLT;
  }
  return VilkarUtfallType.IKKE_VURDERT;
};

type Data = {
  aksjonspunkter?: Aksjonspunkt[];
  vilkar?: Vilkar[];
}

const useStandardProsessPanelProps = (
  data?: Data,
  aksjonspunktKoder?: string[],
  vilkarKoder?: string[],
  lagringSideEffekter?: (aksjonspunktModeller: any) => () => void,
): StandardProsessPanelProps => {
  const [formData, setFormData] = useState();
  const value = useContext(StandardPropsStateContext);

  useEffect(() => {
    if (formData) {
      setFormData(undefined);
    }
  }, [value.behandling.versjon]);

  const aksjonspunkterForSteg = useMemo(() => (data?.aksjonspunkter && aksjonspunktKoder
    ? data.aksjonspunkter.filter((ap) => aksjonspunktKoder.includes(ap.definisjon)) : []),
  [data?.aksjonspunkter, aksjonspunktKoder]);

  const vilkarForSteg = useMemo(() => (data?.vilkar && vilkarKoder
    ? data.vilkar.filter((v) => vilkarKoder.includes(v.vilkarType)) : []),
  [data?.vilkar, vilkarKoder]);

  const isReadOnly = erReadOnly(value.behandling, aksjonspunkterForSteg, vilkarForSteg, value.rettigheter, value.hasFetchError);

  const alleMerknaderFraBeslutter = useMemo(() => getAlleMerknaderFraBeslutter(value.behandling, aksjonspunkterForSteg),
    [value.behandling.versjon, aksjonspunkterForSteg]);

  const harApneAksjonspunkter = aksjonspunkterForSteg.some((ap) => ap.status === AksjonspunktStatus.OPPRETTET && ap.kanLoses);

  const status = useMemo(() => finnStatus(vilkarForSteg, aksjonspunkterForSteg), [vilkarForSteg, aksjonspunkterForSteg]);

  const readOnlySubmitButton = (!(aksjonspunkterForSteg.some((ap) => ap.kanLoses)) || VilkarUtfallType.OPPFYLT === status);

  const standardlagringSideEffekter = useCallback(() => () => {
    value.oppdaterProsessStegOgFaktaPanelIUrl(DEFAULT_PROSESS_STEG_KODE, DEFAULT_FAKTA_KODE);
  }, []);

  const submitCallback = useMemo(() => getBekreftAksjonspunktProsessCallback(
    lagringSideEffekter || standardlagringSideEffekter,
    value.fagsak,
    value.behandling,
    aksjonspunkterForSteg,
    value.lagreAksjonspunkter,
    value.lagreOverstyrteAksjonspunkter,
  ), [value.behandling.versjon, aksjonspunkterForSteg]);

  return {
    behandling: value.behandling,
    isAksjonspunktOpen: harApneAksjonspunkter,
    aksjonspunkter: aksjonspunkterForSteg,
    vilkar: vilkarForSteg,
    alleKodeverk: value.alleKodeverk,
    alleMerknaderFraBeslutter,
    isReadOnly,
    readOnlySubmitButton,
    submitCallback,
    status,
    formData,
    setFormData,
  };
};

export default useStandardProsessPanelProps;
