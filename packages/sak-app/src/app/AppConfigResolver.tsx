import React, { FunctionComponent, ReactElement } from 'react';

import { featureToggle } from '@fpsak-frontend/konstanter';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { isObjectEmpty } from '@fpsak-frontend/utils';

import { FpsakApiKeys, restApiHooks } from '../data/fpsakApi';

interface OwnProps {
  children: ReactElement,
}

const NO_PARAMS = {};

/**
 * Komponent som henter backend-data som skal kunne aksesseres globalt i applikasjonen. Denne dataen blir kun hentet en gang.
 */
const AppConfigResolver: FunctionComponent<OwnProps> = ({
  children,
}) => {
  const { state: navAnsattState } = restApiHooks.useGlobalStateRestApi(FpsakApiKeys.NAV_ANSATT);
  const { state: sprakFilState } = restApiHooks.useGlobalStateRestApi(FpsakApiKeys.LANGUAGE_FILE);
  const { state: behandlendeEnheterState } = restApiHooks.useGlobalStateRestApi(FpsakApiKeys.BEHANDLENDE_ENHETER);
  const { state: visDetaljerteFeilmeldingerState } = restApiHooks.useGlobalStateRestApi(FpsakApiKeys.SHOW_DETAILED_ERROR_MESSAGES);
  const featureToggleParams = { toggles: Object.values(featureToggle).map((ft) => ({ navn: ft })) };
  const { state: featureToggleState } = restApiHooks
    .useGlobalStateRestApi<{ featureToggles: {[key: string]: boolean} }>(FpsakApiKeys.FEATURE_TOGGLE, featureToggleParams, {
      suspendRequest: isObjectEmpty(featureToggle),
    });

  const { state: kodeverkFpSakStatus } = restApiHooks.useGlobalStateRestApi(FpsakApiKeys.KODEVERK, NO_PARAMS);
  const { state: kodeverkFpTilbakeStatus } = restApiHooks.useGlobalStateRestApi(FpsakApiKeys.KODEVERK_FPTILBAKE, NO_PARAMS);

  const erFerdig = navAnsattState === RestApiState.SUCCESS && sprakFilState === RestApiState.SUCCESS
    && behandlendeEnheterState === RestApiState.SUCCESS && visDetaljerteFeilmeldingerState === RestApiState.SUCCESS
    && kodeverkFpSakStatus === RestApiState.SUCCESS && kodeverkFpTilbakeStatus === RestApiState.SUCCESS
    && featureToggleState === RestApiState.SUCCESS;

  return erFerdig ? children : <LoadingPanel />;
};

export default AppConfigResolver;
