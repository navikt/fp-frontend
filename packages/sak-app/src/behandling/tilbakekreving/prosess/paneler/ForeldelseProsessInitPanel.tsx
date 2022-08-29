import React, { FunctionComponent, useCallback, useMemo } from 'react';

import {
  Aksjonspunkt, AlleKodeverkTilbakekreving, Behandling, FeilutbetalingPerioderWrapper,
} from '@navikt/ft-types';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { ForeldelseAksjonspunktCodes, VurderForeldelseAp } from '@navikt/ft-prosess-tilbakekreving-foreldelse';

import { restApiTilbakekrevingHooks, TilbakekrevingBehandlingApiKeys } from '../../data/tilbakekrevingBehandlingApi';
import getAlleMerknaderFraBeslutter from '../../felles/util/getAlleMerknaderFraBeslutter';
import DynamicLoader from '../../../felles/DynamicLoader';

// TODO Denne burde ligga sånn til at den kun blir importert når denne pakka dynamisk blir importert
import '@navikt/ft-prosess-tilbakekreving-foreldelse/dist/style.css';

const ProsessForeldelse = React.lazy(() => import('@navikt/ft-prosess-tilbakekreving-foreldelse'));
// eslint-disable-next-line import/no-unresolved
const ProsessForeldelseMF = process.env.NODE_ENV !== 'development' ? undefined
  // eslint-disable-next-line import/no-unresolved
  : () => import('ft_prosess_tilbakekreving_foreldelse/ForeldelseProsessIndex');

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
