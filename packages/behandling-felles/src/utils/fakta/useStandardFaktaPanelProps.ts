import {
  useContext, useEffect, useMemo, useState,
} from 'react';

import {
  Aksjonspunkt, Behandling, Fagsak, StandardFaktaPanelProps, Vilkar,
} from '@fpsak-frontend/types';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { FaktaAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import { erReadOnly } from '../readOnlyPanelUtils';
import getAlleMerknaderFraBeslutter from '../getAlleMerknaderFraBeslutter';
import { StandardPropsStateContext } from '../standardPropsStateContext';

export const DEFAULT_FAKTA_KODE = 'default';
export const DEFAULT_PROSESS_STEG_KODE = 'default';

const getBekreftAksjonspunktFaktaCallback = (
  fagsak: Fagsak,
  behandling: Behandling,
  oppdaterProsessStegOgFaktaPanelIUrl: (prosessPanel?: string, faktanavn?: string) => void,
  lagreAksjonspunkter: (params: any, keepData?: boolean) => Promise<Behandling | undefined>,
  lagreOverstyrteAksjonspunkter?: (params: any, keepData?: boolean) => Promise<Behandling>,
  overstyringApCodes?: string[],
) => (aksjonspunkter: FaktaAksjonspunkt | FaktaAksjonspunkt[]): Promise<void> => {
  const apListe = Array.isArray(aksjonspunkter) ? aksjonspunkter : [aksjonspunkter];
  const model = apListe.map((ap) => ({
    '@type': ap.kode,
    ...ap,
  }));

  const params = {
    saksnummer: fagsak.saksnummer,
    behandlingUuid: behandling.uuid,
    behandlingVersjon: behandling.versjon,
  };

  if (model && lagreOverstyrteAksjonspunkter && overstyringApCodes && overstyringApCodes.includes(model[0].kode)) {
    return lagreOverstyrteAksjonspunkter({
      ...params,
      overstyrteAksjonspunktDtoer: model,
    }, true).then(() => oppdaterProsessStegOgFaktaPanelIUrl(DEFAULT_PROSESS_STEG_KODE, DEFAULT_FAKTA_KODE));
  }

  return lagreAksjonspunkter({
    ...params,
    bekreftedeAksjonspunktDtoer: model,
  }, true).then(() => oppdaterProsessStegOgFaktaPanelIUrl(DEFAULT_PROSESS_STEG_KODE, DEFAULT_FAKTA_KODE));
};

type InputData = {
  aksjonspunkter?: Aksjonspunkt[];
  vilkar?: Vilkar[];
}

const useStandardFaktaPanelProps = (
  data?: InputData,
  aksjonspunktKoder?: string[],
  overstyringApCodes: string[] = [],
): StandardFaktaPanelProps => {
  const [formData, setFormData] = useState();
  const value = useContext(StandardPropsStateContext);

  useEffect(() => {
    if (formData) {
      setFormData(undefined);
    }
  }, [value.behandling.versjon]);

  const aksjonspunkterForSteg = useMemo(() => (data?.aksjonspunkter && aksjonspunktKoder
    ? data.aksjonspunkter.filter((ap) => aksjonspunktKoder.includes(ap.definisjon.kode)) : []),
  [data?.aksjonspunkter, aksjonspunktKoder]);

  const readOnly = erReadOnly(value.behandling, aksjonspunkterForSteg, [], value.rettigheter, value.hasFetchError);
  const alleMerknaderFraBeslutter = useMemo(() => getAlleMerknaderFraBeslutter(value.behandling, aksjonspunkterForSteg),
    [value.behandling.versjon, aksjonspunkterForSteg]);

  const submitCallback = useMemo(() => getBekreftAksjonspunktFaktaCallback(
    value.fagsak,
    value.behandling,
    value.oppdaterProsessStegOgFaktaPanelIUrl,
    value.lagreAksjonspunkter,
    value.lagreOverstyrteAksjonspunkter,
    overstyringApCodes,
  ), [value.behandling.versjon, overstyringApCodes]);

  return {
    behandling: value.behandling,
    submittable: !aksjonspunkterForSteg.some((ap) => isAksjonspunktOpen(ap.status.kode)) || aksjonspunkterForSteg.some((ap) => ap.kanLoses),
    harApneAksjonspunkter: aksjonspunkterForSteg.some((ap) => isAksjonspunktOpen(ap.status.kode) && ap.kanLoses),
    alleKodeverk: value.alleKodeverk,
    aksjonspunkter: aksjonspunkterForSteg,
    readOnly,
    alleMerknaderFraBeslutter,
    submitCallback,
    formData,
    setFormData,
  };
};

export default useStandardFaktaPanelProps;
