import { useContext } from 'react';

import { Aksjonspunkt, Vilkar } from '@fpsak-frontend/types';

import { erReadOnly } from './readOnlyUtils';
import getAlleMerknaderFraBeslutter from './getAlleMerknaderFraBeslutter';
import getBekreftAksjonspunktCallback from './getBekreftAksjonspunktCallback';
import { StandardPropsStateContext } from './standardPropsStateContext';

type Standard = {
  readOnly: boolean;
  submittable: boolean;
  harApneAksjonspunkter: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  submitCallback?: (aksjonspunktData: any) => Promise<any>;
}

const useStandardProsessPanelProps = (aksjonspunkter: Aksjonspunkt[], vilkar: Vilkar[] = []): Standard => {
  const value = useContext(StandardPropsStateContext);

  const readOnly = erReadOnly(value.behandling, aksjonspunkter, vilkar, value.rettigheter, value.hasFetchError);
  const alleMerknaderFraBeslutter = getAlleMerknaderFraBeslutter(value.behandling, aksjonspunkter);

  const submitCallback = getBekreftAksjonspunktCallback(
    () => undefined,
    value.fagsak,
    value.behandling,
    aksjonspunkter,
    value.lagreAksjonspunkter,
    value.lagreOverstyrteAksjonspunkter,
  );

  return {
    readOnly,
    submittable: true,
    harApneAksjonspunkter: true,
    alleMerknaderFraBeslutter,
    submitCallback,
    /*
    alleKodeverk,
  submitCallback,
  isReadOnly,
  status
  readOnlySubmitButton,
  isAksjonspunktOpen */
  };
};

export default useStandardProsessPanelProps;
