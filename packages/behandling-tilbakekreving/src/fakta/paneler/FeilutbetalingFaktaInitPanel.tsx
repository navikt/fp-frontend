import React, { FunctionComponent, useMemo, useCallback } from 'react';

import { FeilutbetalingAksjonspunktCode } from '@navikt/ft-fakta-tilbakekreving-feilutbetaling';
import {
  FeilutbetalingFakta, AlleKodeverk, Behandling, Aksjonspunkt, AlleKodeverkTilbakekreving,
} from '@navikt/ft-types';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { DynamicLoader } from '@fpsak-frontend/behandling-felles';
import { AksjonspunktStatus } from '@navikt/ft-kodeverk';

import { restApiTilbakekrevingHooks, TilbakekrevingBehandlingApiKeys } from '../../data/tilbakekrevingBehandlingApi';
import getAlleMerknaderFraBeslutter from '../../felles/util/getAlleMerknaderFraBeslutter';

interface OwnProps {
  behandling: Behandling;
  feilutbetalingFakta: FeilutbetalingFakta;
  fagsakYtelseTypeKode: string;
  aksjonspunkter: Aksjonspunkt[];
  erReadOnlyFn: (aksjonspunkter: Aksjonspunkt[]) => boolean;
  alleKodeverk: AlleKodeverkTilbakekreving;
  fpsakKodeverk: AlleKodeverk;
  submitCallback: (aksjonspunktData: any) => Promise<void>;
  formData: any,
  setFormData: (data: any) => void
}

const FeilutbetalingFaktaInitPanel: FunctionComponent<OwnProps> = ({
  behandling,
  feilutbetalingFakta,
  fagsakYtelseTypeKode,
  aksjonspunkter,
  erReadOnlyFn,
  alleKodeverk,
  fpsakKodeverk,
  submitCallback,
  formData,
  setFormData,
}) => {
  const aksjonspunkterForFeilutbetalingFakta = useMemo(() => (
    aksjonspunkter.filter((ap) => FeilutbetalingAksjonspunktCode.AVKLAR_FAKTA_FOR_FEILUTBETALING === ap.definisjon)),
  [aksjonspunkter]);

  const alleMerknaderFraBeslutter = useMemo(() => getAlleMerknaderFraBeslutter(behandling, aksjonspunkterForFeilutbetalingFakta),
    [behandling, aksjonspunkterForFeilutbetalingFakta]);
  const readOnly = useMemo(() => erReadOnlyFn(aksjonspunkterForFeilutbetalingFakta), [aksjonspunkterForFeilutbetalingFakta]);

  const setFormDataFeilutbetaling = useCallback((data: any) => setFormData((oldData) => ({
    ...oldData,
    [FaktaPanelCode.FEILUTBETALING]: data,
  })), [setFormData]);

  const { data: feilutbetalingAarsak, state } = restApiTilbakekrevingHooks.useRestApi(TilbakekrevingBehandlingApiKeys.FEILUTBETALING_AARSAK);

  if (state !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <DynamicLoader
      // @ts-ignore
      importModuleFederationComp={() => {
        if (process.env.NODE_ENV === 'development') {
          // @ts-ignore
          return import('ft_fakta_tilbakekreving_feilutbetaling/FeilutbetalingFaktaIndex');// eslint-disable-line import/no-unresolved
        }
        return undefined;
      }}
      importPackageComp={() => import('@navikt/ft-fakta-tilbakekreving-feilutbetaling')}
      feilutbetalingFakta={feilutbetalingFakta}
      feilutbetalingAarsak={feilutbetalingAarsak}
      aksjonspunkter={aksjonspunkter}
      fagsakYtelseTypeKode={fagsakYtelseTypeKode}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      alleKodeverk={fpsakKodeverk}
      tilbakekrevingKodeverk={alleKodeverk}
      submitCallback={submitCallback}
      isReadOnly={readOnly}
      formData={formData[FaktaPanelCode.FEILUTBETALING]}
      setFormData={setFormDataFeilutbetaling}
      isAksjonspunktOpen={aksjonspunkterForFeilutbetalingFakta.some((a) => a.status === AksjonspunktStatus.OPPRETTET)}
    />
  );
};

export default FeilutbetalingFaktaInitPanel;
