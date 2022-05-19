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

// TODO Denne burde ligga sånn til at den kun blir importert når denne pakka dynamisk blir importert
import '@navikt/ft-fakta-tilbakekreving-feilutbetaling/dist/style.css';

const ProsessFeilutbetaling = React.lazy(() => import('@navikt/ft-fakta-tilbakekreving-feilutbetaling'));
// eslint-disable-next-line import/no-unresolved
const ProsessFeilutbetalingMF = process.env.NODE_ENV !== 'development' ? undefined
  // eslint-disable-next-line import/no-unresolved
  : React.lazy(() => import('ft_fakta_tilbakekreving_feilutbetaling/FeilutbetalingFaktaIndex')) as typeof ProsessFeilutbetaling;

class FeilutbetalingPanel extends DynamicLoader<React.ComponentProps<typeof ProsessFeilutbetaling>> {
  render() {
    return super.doRender(ProsessFeilutbetaling, ProsessFeilutbetalingMF);
  }
}

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
    <FeilutbetalingPanel
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
      behandling={behandling}
      status=""
      readOnlySubmitButton={false}
      vilkar={[]}
    />
  );
};

export default FeilutbetalingFaktaInitPanel;
