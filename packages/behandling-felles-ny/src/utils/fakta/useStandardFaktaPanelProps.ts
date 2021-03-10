import { useContext, useMemo } from 'react';

import {
  Aksjonspunkt, Behandling, Fagsak, StandardFaktaPanelProps, Vilkar,
} from '@fpsak-frontend/types';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';

import { erReadOnly } from '../readOnlyPanelUtils';
import getAlleMerknaderFraBeslutter from '../getAlleMerknaderFraBeslutter';
import { StandardPropsStateContext } from '../standardPropsStateContext';

export const DEFAULT_FAKTA_KODE = 'default';
export const DEFAULT_PROSESS_STEG_KODE = 'default';

type Data = {
  aksjonspunkter?: Aksjonspunkt[];
  vilkar?: Vilkar[];
}

const getBekreftAksjonspunktFaktaCallback = (
  fagsak: Fagsak,
  behandling: Behandling,
  oppdaterProsessStegOgFaktaPanelIUrl: (prosessPanel?: string, faktanavn?: string) => void,
  lagreAksjonspunkter: (params: any, keepData?: boolean) => Promise<any>,
  lagreOverstyrteAksjonspunkter?: (params: any, keepData?: boolean) => Promise<any>,
  overstyringApCodes?: string[],
) => (aksjonspunkter) => {
  const model = aksjonspunkter.map((ap) => ({
    '@type': ap.kode,
    ...ap,
  }));

  const params = {
    saksnummer: fagsak.saksnummerString,
    behandlingId: behandling.id,
    behandlingVersjon: behandling.versjon,
  };

  if (model && overstyringApCodes && overstyringApCodes.includes(model[0].kode)) {
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

const useStandardFaktaPanelProps = (
  data?: Data,
  aksjonspunktKoder?: string[],
  overstyringApCodes: string[] = [],
): StandardFaktaPanelProps => {
  const value = useContext(StandardPropsStateContext);

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
  };
};

export default useStandardFaktaPanelProps;
