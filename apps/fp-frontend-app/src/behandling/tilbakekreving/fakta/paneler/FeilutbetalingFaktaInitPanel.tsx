import React, { FunctionComponent, useMemo, useCallback } from 'react';
import { AksjonspunktStatus } from '@navikt/ft-kodeverk';

import {
  FeilutbetalingFaktaIndex,
  FeilutbetalingAksjonspunktCode,
} from '@navikt/ft-fakta-tilbakekreving-feilutbetaling';
import { FeilutbetalingFakta, Aksjonspunkt, FeilutbetalingAarsak } from '@navikt/ft-types';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Behandling, AlleKodeverk, AlleKodeverkTilbakekreving } from '@navikt/fp-types';

import { restApiTilbakekrevingHooks, TilbakekrevingBehandlingApiKeys } from '../../data/tilbakekrevingBehandlingApi';
import getAlleMerknaderFraBeslutter from '../../felles/util/getAlleMerknaderFraBeslutter';

import '@navikt/ft-fakta-tilbakekreving-feilutbetaling/dist/style.css';

const ENDEPUNKTER_INIT_DATA = [
  TilbakekrevingBehandlingApiKeys.FEILUTBETALING_FAKTA,
  TilbakekrevingBehandlingApiKeys.FEILUTBETALING_AARSAK,
];
type EndepunktInitData = {
  feilutbetalingFakta: FeilutbetalingFakta;
  feilutbetalingAarsak: FeilutbetalingAarsak[];
};

interface OwnProps {
  behandling: Behandling;
  fagsakYtelseTypeKode: string;
  erReadOnlyFn: (aksjonspunkter: Aksjonspunkt[]) => boolean;
  alleKodeverk: AlleKodeverkTilbakekreving;
  fpsakKodeverk: AlleKodeverk;
  submitCallback: (aksjonspunktData: any) => Promise<void>;
  formData: any;
  setFormData: (data: any) => void;
}

const FeilutbetalingFaktaInitPanel: FunctionComponent<OwnProps> = ({
  behandling,
  fagsakYtelseTypeKode,
  erReadOnlyFn,
  alleKodeverk,
  fpsakKodeverk,
  submitCallback,
  formData,
  setFormData,
}) => {
  const aksjonspunkter = behandling.aksjonspunkt || [];

  const aksjonspunkterForFeilutbetalingFakta = useMemo(
    () => aksjonspunkter.filter(ap => FeilutbetalingAksjonspunktCode.AVKLAR_FAKTA_FOR_FEILUTBETALING === ap.definisjon),
    [aksjonspunkter],
  );

  const alleMerknaderFraBeslutter = useMemo(
    () => getAlleMerknaderFraBeslutter(behandling, aksjonspunkterForFeilutbetalingFakta),
    [behandling, aksjonspunkterForFeilutbetalingFakta],
  );
  const readOnly = useMemo(
    () => erReadOnlyFn(aksjonspunkterForFeilutbetalingFakta),
    [aksjonspunkterForFeilutbetalingFakta],
  );

  const setFormDataFeilutbetaling = useCallback(
    (data: any) =>
      setFormData(oldData => ({
        ...oldData,
        [FaktaPanelCode.FEILUTBETALING]: data,
      })),
    [setFormData],
  );

  const formaterteEndepunkter = ENDEPUNKTER_INIT_DATA.map(e => ({ key: e }));
  const { data: initData, state } = restApiTilbakekrevingHooks.useMultipleRestApi<EndepunktInitData, any>(
    formaterteEndepunkter,
    {
      updateTriggers: [behandling.versjon],
      isCachingOn: true,
    },
  );

  if (state !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <FeilutbetalingFaktaIndex
      feilutbetalingFakta={initData.feilutbetalingFakta}
      feilutbetalingAarsak={initData.feilutbetalingAarsak}
      fagsakYtelseTypeKode={fagsakYtelseTypeKode}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      // @ts-ignore TODO Ikkje send med ned heile kodeverket
      alleKodeverk={fpsakKodeverk}
      tilbakekrevingKodeverk={alleKodeverk}
      submitCallback={submitCallback}
      isReadOnly={readOnly}
      formData={formData[FaktaPanelCode.FEILUTBETALING]}
      setFormData={setFormDataFeilutbetaling}
      isAksjonspunktOpen={aksjonspunkterForFeilutbetalingFakta.some(a => a.status === AksjonspunktStatus.OPPRETTET)}
    />
  );
};

export default FeilutbetalingFaktaInitPanel;
