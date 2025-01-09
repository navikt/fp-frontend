import { useContext, useEffect, useState } from 'react';

import { AksjonspunktStatus, AksjonspunktType, isAksjonspunktOpen, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Behandling, Fagsak, StandardProsessPanelProps, Vilkar } from '@navikt/fp-types';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import { AksjonspunktArgs, OverstyrteAksjonspunktArgs } from '../../../data/behandlingApi';
import { getAlleMerknaderFraBeslutter } from '../utils/getAlleMerknaderFraBeslutter';
import { erReadOnly } from '../utils/readOnlyPanelUtils';
import { StandardPropsStateContext } from '../utils/standardPropsStateContext';

export const DEFAULT_FAKTA_KODE = 'default';
export const DEFAULT_PROSESS_STEG_KODE = 'default';

const getBekreftAksjonspunktProsessCallback =
  (
    lagringSideEffectsCallback: (aksjonspunktModeller: any) => () => void,
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
  vilkarKoder?: string[],
  lagringSideEffekter?: (aksjonspunktModeller: any) => () => void,
): StandardProsessPanelProps => {
  const [formData, setFormData] = useState();
  const value = useContext(StandardPropsStateContext);

  const { aksjonspunkt: aksjonspunkter, vilkår } = value.behandling;

  useEffect(() => {
    if (formData) {
      setFormData(undefined);
    }
  }, [value.behandling.versjon]);

  const aksjonspunkterForSteg =
    aksjonspunkter && aksjonspunktKoder ? aksjonspunkter.filter(ap => aksjonspunktKoder.includes(ap.definisjon)) : [];

  const vilkarForSteg = vilkår && vilkarKoder ? vilkår.filter(v => vilkarKoder.includes(v.vilkarType)) : [];

  const isReadOnly = erReadOnly(value.behandling, vilkarForSteg, value.rettigheter, value.hasFetchError);

  const alleMerknaderFraBeslutter = getAlleMerknaderFraBeslutter(value.behandling, aksjonspunkterForSteg);

  const harApneAksjonspunkter = aksjonspunkterForSteg.some(
    ap => ap.status === AksjonspunktStatus.OPPRETTET && ap.kanLoses,
  );

  const status = finnStatus(vilkarForSteg, aksjonspunkterForSteg);

  const readOnlySubmitButton = !aksjonspunkterForSteg.some(ap => ap.kanLoses) || VilkarUtfallType.OPPFYLT === status;

  const standardlagringSideEffekter = () => () => {
    value.oppdaterProsessStegOgFaktaPanelIUrl(DEFAULT_PROSESS_STEG_KODE, DEFAULT_FAKTA_KODE);
  };

  const submitCallback = getBekreftAksjonspunktProsessCallback(
    lagringSideEffekter || standardlagringSideEffekter,
    value.fagsak,
    value.behandling,
    aksjonspunkterForSteg,
    value.lagreAksjonspunkter,
    value.lagreOverstyrteAksjonspunkter,
  );

  return {
    fagsak: value.fagsak,
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
