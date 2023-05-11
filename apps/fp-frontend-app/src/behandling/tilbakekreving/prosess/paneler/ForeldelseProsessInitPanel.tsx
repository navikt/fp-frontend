import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { Aksjonspunkt } from '@navikt/ft-types';
import {
  ForeldelseProsessIndex,
  ForeldelseAksjonspunktCodes,
  VurderForeldelseAp,
} from '@navikt/ft-prosess-tilbakekreving-foreldelse';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import { Behandling, AlleKodeverkTilbakekreving, AlleKodeverk } from '@navikt/fp-types';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import { KodeverkType } from '@navikt/fp-kodeverk';
import { restApiTilbakekrevingHooks, TilbakekrevingBehandlingApiKeys } from '../../data/tilbakekrevingBehandlingApi';
import getAlleMerknaderFraBeslutter from '../../felles/util/getAlleMerknaderFraBeslutter';

import '@navikt/ft-prosess-tilbakekreving-foreldelse/dist/style.css';

interface OwnProps {
  behandling: Behandling;
  relasjonsRolleType: string;
  erReadOnlyFn: (aksjonspunkter: Aksjonspunkt[]) => boolean;
  fptilbakeAlleKodeverk: AlleKodeverkTilbakekreving;
  fpsakKodeverk: AlleKodeverk;
  bekreftAksjonspunkter: (aksjonspunktData: VurderForeldelseAp) => Promise<void>;
  formData?: any;
  setFormData: (data: any) => void;
}

const ForeldelseProsessInitPanel: FunctionComponent<OwnProps> = ({
  behandling,
  relasjonsRolleType,
  erReadOnlyFn,
  fptilbakeAlleKodeverk,
  fpsakKodeverk,
  bekreftAksjonspunkter,
  formData,
  setFormData,
}) => {
  const { startRequest: beregnBelop } = restApiTilbakekrevingHooks.useRestApiRunner(
    TilbakekrevingBehandlingApiKeys.BEREGNE_BELØP,
  );

  const { data: perioderForeldelse, state } = restApiTilbakekrevingHooks.useRestApi(
    TilbakekrevingBehandlingApiKeys.PERIODER_FORELDELSE,
  );

  const aksjonspunkter = behandling.aksjonspunkt || [];

  const aksjonspunkterForForeldelse = useMemo(
    () => aksjonspunkter.filter(ap => ForeldelseAksjonspunktCodes.VURDER_FORELDELSE === ap.definisjon),
    [aksjonspunkter],
  );

  const alleMerknaderFraBeslutter = useMemo(
    () => getAlleMerknaderFraBeslutter(behandling, aksjonspunkterForForeldelse),
    [behandling, aksjonspunkterForForeldelse],
  );
  const isReadOnly = useMemo(() => erReadOnlyFn(aksjonspunkterForForeldelse), [aksjonspunkterForForeldelse]);

  const setFormDataForeldelse = useCallback(
    (data: any) =>
      setFormData((oldData: any) => ({
        ...oldData,
        [ProsessStegCode.FORELDELSE]: data,
      })),
    [setFormData],
  );

  if (state !== RestApiState.SUCCESS || perioderForeldelse === undefined) {
    return <LoadingPanel />;
  }

  return (
    <ForeldelseProsessIndex
      behandling={behandling}
      perioderForeldelse={perioderForeldelse}
      submitCallback={bekreftAksjonspunkter}
      isReadOnly={isReadOnly}
      aksjonspunkter={aksjonspunkterForForeldelse}
      relasjonsRolleType={relasjonsRolleType}
      relasjonsRolleTypeKodeverk={fpsakKodeverk[KodeverkType.RELASJONSROLLE_TYPE]}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      kodeverkSamlingFpTilbake={fptilbakeAlleKodeverk}
      beregnBelop={beregnBelop}
      formData={formData[ProsessStegCode.FORELDELSE]}
      setFormData={setFormDataForeldelse}
    />
  );
};

export default ForeldelseProsessInitPanel;
