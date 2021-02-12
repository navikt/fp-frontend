import { useContext } from 'react';

import {
  Aksjonspunkt, KodeverkMedNavn, Vilkar,
} from '@fpsak-frontend/types';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';

import { erReadOnly } from './readOnlyUtils';
import getAlleMerknaderFraBeslutter from './getAlleMerknaderFraBeslutter';
import { StandardPropsStateContext } from './standardPropsStateContext';
import { getBekreftAksjonspunktFaktaCallback } from './getBekreftAksjonspunktCallback';

type Standard = {
  readOnly: boolean;
  submittable: boolean;
  harApneAksjonspunkter: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  submitCallback: (aksjonspunktData: any) => Promise<any>;
  aksjonspunkter: Aksjonspunkt[];
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

const useStandardProps = (aksjonspunkter: Aksjonspunkt[] = [], vilkar: Vilkar[] = [], overstyringApCodes: string[] = []): Standard => {
  const value = useContext(StandardPropsStateContext);

  const readOnly = erReadOnly(value.behandling, aksjonspunkter, vilkar, value.rettigheter, value.hasFetchError);
  const alleMerknaderFraBeslutter = getAlleMerknaderFraBeslutter(value.behandling, aksjonspunkter);

  const submitCallback = getBekreftAksjonspunktFaktaCallback(
    value.fagsak,
    value.behandling,
    value.oppdaterProsessStegOgFaktaPanelIUrl,
    value.lagreAksjonspunkter,
    value.lagreOverstyrteAksjonspunkter,
    overstyringApCodes,
  );

  return {
    readOnly,
    submittable: !aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status.kode)) || aksjonspunkter.some((ap) => ap.kanLoses),
    harApneAksjonspunkter: aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status.kode) && ap.kanLoses),
    alleMerknaderFraBeslutter,
    submitCallback,
    aksjonspunkter,
    alleKodeverk: value.alleKodeverk,
  };
};

export default useStandardProps;
