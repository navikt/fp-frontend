import React, { FunctionComponent, useCallback, useMemo } from 'react';

import {
  Aksjonspunkt, AlleKodeverkTilbakekreving, Behandling, FeilutbetalingPerioderWrapper,
} from '@navikt/ft-types';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import ForeldelseForm, { ForeldelseAksjonspunktCodes, VurderForeldelseAp } from '@navikt/ft-prosess-tilbakekreving-foreldelse';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';

import { restApiTilbakekrevingHooks, TilbakekrevingBehandlingApiKeys } from '../../data/tilbakekrevingBehandlingApi';
import getAlleMerknaderFraBeslutter from '../../felles/util/getAlleMerknaderFraBeslutter';

interface OwnProps {
  behandling: Behandling;
  aksjonspunkter?: Aksjonspunkt[];
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  navBrukerKjonn: string;
  erReadOnlyFn: (aksjonspunkter: Aksjonspunkt[]) => boolean;
  alleKodeverk: AlleKodeverkTilbakekreving;
  bekreftAksjonspunkter: (aksjonspunktData: VurderForeldelseAp) => Promise<void>;
  formData?: any;
  setFormData: (data: any) => void;
}

const ForeldelseProsessInitPanel: FunctionComponent<OwnProps> = ({
  behandling,
  aksjonspunkter = [],
  perioderForeldelse,
  navBrukerKjonn,
  erReadOnlyFn,
  alleKodeverk,
  bekreftAksjonspunkter,
  formData,
  setFormData,
}) => {
  const { startRequest: beregnBelop } = restApiTilbakekrevingHooks.useRestApiRunner(TilbakekrevingBehandlingApiKeys.BEREGNE_BELØP);

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

  return (
    <ForeldelseForm
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
      isAksjonspunktOpen={aksjonspunkterForForeldelse.some((ap) => isAksjonspunktOpen(ap.status) && ap.kanLoses)}
      alleKodeverk={{} as any}
      status=""
      readOnlySubmitButton={false}
      vilkar={[]}
    />
  );
};

export default ForeldelseProsessInitPanel;
