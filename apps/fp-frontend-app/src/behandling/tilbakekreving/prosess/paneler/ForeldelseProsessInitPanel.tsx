import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { Aksjonspunkt } from '@navikt/ft-types';
import ProsessForeldelse, { ForeldelseAksjonspunktCodes, VurderForeldelseAp } from '@navikt/ft-prosess-tilbakekreving-foreldelse';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import { Behandling, AlleKodeverkTilbakekreving } from '@navikt/fp-types';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import { restApiTilbakekrevingHooks, TilbakekrevingBehandlingApiKeys } from '../../data/tilbakekrevingBehandlingApi';
import getAlleMerknaderFraBeslutter from '../../felles/util/getAlleMerknaderFraBeslutter';

interface OwnProps {
  behandling: Behandling;
  navBrukerKjonn: string;
  erReadOnlyFn: (aksjonspunkter: Aksjonspunkt[]) => boolean;
  alleKodeverk: AlleKodeverkTilbakekreving;
  bekreftAksjonspunkter: (aksjonspunktData: VurderForeldelseAp) => Promise<void>;
  formData?: any;
  setFormData: (data: any) => void;
}

const ForeldelseProsessInitPanel: FunctionComponent<OwnProps> = ({
  behandling,
  navBrukerKjonn,
  erReadOnlyFn,
  alleKodeverk,
  bekreftAksjonspunkter,
  formData,
  setFormData,
}) => {
  const { startRequest: beregnBelop } = restApiTilbakekrevingHooks.useRestApiRunner(TilbakekrevingBehandlingApiKeys.BEREGNE_BELØP);

  const { data: perioderForeldelse, state } = restApiTilbakekrevingHooks.useRestApi(TilbakekrevingBehandlingApiKeys.PERIODER_FORELDELSE);

  const aksjonspunkter = behandling.aksjonspunkt || [];

  const aksjonspunkterForForeldelse = useMemo(() => (
    aksjonspunkter.filter((ap) => ForeldelseAksjonspunktCodes.VURDER_FORELDELSE === ap.definisjon)),
  [aksjonspunkter]);

  const alleMerknaderFraBeslutter = useMemo(() => getAlleMerknaderFraBeslutter(behandling, aksjonspunkterForForeldelse),
    [behandling, aksjonspunkterForForeldelse]);
  const isReadOnly = useMemo(() => erReadOnlyFn(aksjonspunkterForForeldelse), [aksjonspunkterForForeldelse]);

  const setFormDataForeldelse = useCallback((data: any) => setFormData((oldData) => ({
    ...oldData,
    [ProsessStegCode.FORELDELSE]: data,
  })), [setFormData]);

  if (state !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <ProsessForeldelse
      behandling={behandling}
      perioderForeldelse={perioderForeldelse}
      submitCallback={bekreftAksjonspunkter}
      isReadOnly={isReadOnly}
      aksjonspunkter={aksjonspunkterForForeldelse}
      navBrukerKjonn={navBrukerKjonn}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      tilbakekrevingKodeverk={alleKodeverk}
      beregnBelop={beregnBelop}
      formData={formData[ProsessStegCode.FORELDELSE]}
      setFormData={setFormDataForeldelse}
    />
  );
};

export default ForeldelseProsessInitPanel;
