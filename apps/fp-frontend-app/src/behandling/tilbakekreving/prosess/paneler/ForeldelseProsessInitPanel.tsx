import React, { FunctionComponent, useCallback, useMemo } from 'react';
import {
  Aksjonspunkt, AlleKodeverkTilbakekreving,
} from '@navikt/ft-types';
import { ForeldelseAksjonspunktCodes, VurderForeldelseAp } from '@navikt/ft-prosess-tilbakekreving-foreldelse';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import { Behandling } from '@navikt/fp-types';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import { restApiTilbakekrevingHooks, TilbakekrevingBehandlingApiKeys } from '../../data/tilbakekrevingBehandlingApi';
import getAlleMerknaderFraBeslutter from '../../felles/util/getAlleMerknaderFraBeslutter';
import DynamicLoader from '../../../felles/DynamicLoader';

// TODO Denne burde ligga sånn til at den kun blir importert når denne pakka dynamisk blir importert
import '@navikt/ft-prosess-tilbakekreving-foreldelse/dist/style.css';

const ProsessForeldelse = React.lazy(() => import('@navikt/ft-prosess-tilbakekreving-foreldelse'));
// eslint-disable-next-line import/no-unresolved
const ProsessForeldelseMF = process.env.NODE_ENV !== 'development' ? undefined
  // @ts-ignore
  : () => import('ft_prosess_tilbakekreving_foreldelse/ForeldelseProsessIndex'); // eslint-disable-line import/no-unresolved

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
    <DynamicLoader<React.ComponentProps<typeof ProsessForeldelse>>
      packageCompFn={() => import('@navikt/ft-prosess-tilbakekreving-foreldelse')}
      federatedCompFn={ProsessForeldelseMF}
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
