import React, { FunctionComponent, useMemo, useCallback } from 'react';

import { Behandling, Aksjonspunkt, AlleKodeverk } from '@navikt/ft-types';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import VergeFaktaIndex from '@fpsak-frontend/fakta-verge';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import { restApiTilbakekrevingHooks, TilbakekrevingBehandlingApiKeys } from '../../data/tilbakekrevingBehandlingApi';
import getAlleMerknaderFraBeslutter from '../../felles/util/getAlleMerknaderFraBeslutter';

interface OwnProps {
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  erReadOnlyFn: (aksjonspunkter: Aksjonspunkt[]) => boolean;
  fpsakKodeverk: AlleKodeverk;
  submitCallback: (aksjonspunktData: any) => Promise<void>;
  formData: any,
  setFormData: (data: any) => void
}

const VergeFaktaInitPanel: FunctionComponent<OwnProps> = ({
  behandling,
  aksjonspunkter,
  erReadOnlyFn,
  fpsakKodeverk,
  submitCallback,
  formData,
  setFormData,
}) => {
  const aksjonspunkterForVergeFakta = useMemo(() => (
    aksjonspunkter.filter((ap) => AksjonspunktCode.AVKLAR_VERGE === ap.definisjon)),
  [aksjonspunkter]);

  const alleMerknaderFraBeslutter = useMemo(() => getAlleMerknaderFraBeslutter(behandling, aksjonspunkterForVergeFakta),
    [behandling, aksjonspunkterForVergeFakta]);
  const readOnly = useMemo(() => erReadOnlyFn(aksjonspunkterForVergeFakta), [aksjonspunkterForVergeFakta]);

  const setFormDataVerge = useCallback((data: any) => setFormData((oldData) => ({
    ...oldData,
    [FaktaPanelCode.VERGE]: data,
  })), [setFormData]);

  const { data: verge, state } = restApiTilbakekrevingHooks.useRestApi(TilbakekrevingBehandlingApiKeys.VERGE);

  if (state !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <VergeFaktaIndex
      behandling={behandling}
      verge={verge}
      aksjonspunkter={aksjonspunkter}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      alleKodeverk={fpsakKodeverk}
      submitCallback={submitCallback}
      readOnly={readOnly}
      harApneAksjonspunkter={aksjonspunkterForVergeFakta.some((ap) => isAksjonspunktOpen(ap.status) && ap.kanLoses)}
      submittable={!aksjonspunkterForVergeFakta.some((ap) => isAksjonspunktOpen(ap.status)) || aksjonspunkter.some((ap) => ap.kanLoses)}
      formData={formData[FaktaPanelCode.VERGE]}
      setFormData={setFormDataVerge}
    />
  );
};

export default VergeFaktaInitPanel;
