import { useContext } from 'react';

import { Aksjonspunkt, KodeverkMedNavn, Vilkar } from '@fpsak-frontend/types';

import aksjonspunktStatus, { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { erReadOnly } from './readOnlyUtils';
import getAlleMerknaderFraBeslutter from './getAlleMerknaderFraBeslutter';
import { getBekreftAksjonspunktProsessCallback } from './getBekreftAksjonspunktCallback';
import { StandardPropsStateContext } from './standardPropsStateContext';

type Standard = {
  isReadOnly: boolean;
  submittable: boolean;
  isAksjonspunktOpen: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  submitCallback: (aksjonspunktData: any) => Promise<any>;
  status: string;
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  readOnlySubmitButton: boolean;
}

const finnStatus = (vilkar: Vilkar[], aksjonspunkter: Aksjonspunkt[]) => {
  if (vilkar.length > 0) {
    const vilkarStatusCodes = vilkar.map((v) => v.vilkarStatus.kode);
    if (vilkarStatusCodes.some((vsc) => vsc === vilkarUtfallType.IKKE_VURDERT)) {
      return vilkarUtfallType.IKKE_VURDERT;
    }
    return vilkarStatusCodes.every((vsc) => vsc === vilkarUtfallType.OPPFYLT) ? vilkarUtfallType.OPPFYLT : vilkarUtfallType.IKKE_OPPFYLT;
  }

  if (aksjonspunkter.length > 0) {
    return aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status.kode)) ? vilkarUtfallType.IKKE_VURDERT : vilkarUtfallType.OPPFYLT;
  }
  return vilkarUtfallType.IKKE_VURDERT;
};

const useStandardProsessPanelProps = (
  aksjonspunkter: Aksjonspunkt[],
  vilkar: Vilkar[] = [],
  lagringSideEffekter?: (aksjonspunktModeller: any) => () => void,
): Standard => {
  const value = useContext(StandardPropsStateContext);

  const isReadOnly = erReadOnly(value.behandling, aksjonspunkter, vilkar, value.rettigheter, value.hasFetchError);
  const alleMerknaderFraBeslutter = getAlleMerknaderFraBeslutter(value.behandling, aksjonspunkter);

  const harApneAksjonspunkter = aksjonspunkter.some((ap) => ap.status.kode === aksjonspunktStatus.OPPRETTET && ap.kanLoses);

  const status = finnStatus(vilkar, aksjonspunkter);
  const readOnlySubmitButton = (!(aksjonspunkter.some((ap) => ap.kanLoses)) || vilkarUtfallType.OPPFYLT === status);

  const standardlagringSideEffekter = () => () => {
    value.oppdaterProsessStegOgFaktaPanelIUrl('default', 'default');
  };

  const submitCallback = getBekreftAksjonspunktProsessCallback(
    lagringSideEffekter || standardlagringSideEffekter,
    value.fagsak,
    value.behandling,
    aksjonspunkter,
    value.lagreAksjonspunkter,
    value.lagreOverstyrteAksjonspunkter,
  );

  return {
    isReadOnly,
    readOnlySubmitButton,
    submittable: true,
    isAksjonspunktOpen: harApneAksjonspunkter,
    alleMerknaderFraBeslutter,
    submitCallback,
    status,
    aksjonspunkter,
    vilkar,
    alleKodeverk: value.alleKodeverk,
  };
};

export default useStandardProsessPanelProps;
