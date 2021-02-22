import { useContext } from 'react';

import {
  Aksjonspunkt, Behandling, KodeverkMedNavn, Vilkar,
} from '@fpsak-frontend/types';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';

import { erReadOnly } from './readOnlyUtils';
import getAlleMerknaderFraBeslutter from './getAlleMerknaderFraBeslutter';
import { StandardPropsStateContext } from './standardPropsStateContext';
import { getBekreftAksjonspunktFaktaCallback } from './getBekreftAksjonspunktCallback';

type Standard = {
  behandling: Behandling;
  readOnly: boolean;
  submittable: boolean;
  harApneAksjonspunkter: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  submitCallback: (aksjonspunktData: any) => Promise<any>;
  aksjonspunkter: Aksjonspunkt[];
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

type Data = {
  aksjonspunkter?: Aksjonspunkt[];
  vilkar?: Vilkar[];
}

const useStandardFaktaProps = (
  data?: Data,
  aksjonspunktKoder?: string[],
  vilkarKoder?: string[],
  overstyringApCodes: string[] = [],
): Standard => {
  const value = useContext(StandardPropsStateContext);

  const aksjonspunkterForSteg = data?.aksjonspunkter && aksjonspunktKoder
    ? data.aksjonspunkter.filter((ap) => aksjonspunktKoder.includes(ap.definisjon.kode)) : [];
  const vilkarForSteg = data?.vilkar && vilkarKoder ? data.vilkar.filter((v) => vilkarKoder.includes(v.vilkarType.kode)) : [];

  const readOnly = erReadOnly(value.behandling, aksjonspunkterForSteg, vilkarForSteg, value.rettigheter, value.hasFetchError);
  const alleMerknaderFraBeslutter = getAlleMerknaderFraBeslutter(value.behandling, aksjonspunkterForSteg);

  const submitCallback = getBekreftAksjonspunktFaktaCallback(
    value.fagsak,
    value.behandling,
    value.oppdaterProsessStegOgFaktaPanelIUrl,
    value.lagreAksjonspunkter,
    value.lagreOverstyrteAksjonspunkter,
    overstyringApCodes,
  );

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

export default useStandardFaktaProps;
