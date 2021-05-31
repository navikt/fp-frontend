import React, { FunctionComponent, useCallback, useMemo } from 'react';

import { AnkeVurdering, Behandling, Fagsak } from '@fpsak-frontend/types';
import { ReduxWrapper } from '@fpsak-frontend/form';
import { ProsessData } from '@fpsak-frontend/prosess-felles';
import { RestKey } from '@fpsak-frontend/rest-api';
import { RestApiHooks, RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@fpsak-frontend/shared-components';

import AnkeTrygderettsbehandlingProsessIndex from './AnkeTrygderettsbehandlingProsessIndex';
import { BrevData } from './components/PreviewAnkeLink';

export class ProsessDataAnkeTrygderettsbehandling extends ProsessData {
  ankeVurdering: RestKey<AnkeVurdering, void>

  forhåndsvisMelding: RestKey<any, any>

  medRestEndepunkter = (ankeVurdering: RestKey<AnkeVurdering, void>, forhåndsvisMelding: RestKey<any, any>) => {
    this.ankeVurdering = ankeVurdering;
    this.forhåndsvisMelding = forhåndsvisMelding;
    return this;
  }
}

const forhandsvis = (data) => {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(data);
  } else if (URL.createObjectURL) {
    window.open(URL.createObjectURL(data));
  }
};

const lagForhandsvisCallback = (
  forhandsvisMelding: (params?: any, keepData?: boolean) => Promise<any>,
  fagsak: Fagsak,
  behandling: Behandling,
) => (data: BrevData) => {
  const brevData = {
    ...data,
    behandlingUuid: behandling.uuid,
    ytelseType: fagsak.fagsakYtelseType,
  };
  return forhandsvisMelding(brevData).then((response) => forhandsvis(response));
};

interface OwnProps {
  prosessData: ProsessDataAnkeTrygderettsbehandling;
  isReadOnly: boolean;
  readOnlySubmitButton: boolean;
  formData?: any;
  setFormData: (data: any) => void;
}

const AnkeTrygderettsbehandlingProsessDataIndex: FunctionComponent<OwnProps> = ({
  prosessData,
  formData,
  setFormData,
  ...props
}) => {
  const restApiHooks = useMemo(() => RestApiHooks.initHooks(prosessData.api), [prosessData.api]);

  const { behandlingData: { fagsak, behandling, alleKodeverk }, aksjonspunkter, getSubmitHandler } = prosessData;

  const { startRequest: forhandsvisMelding } = restApiHooks.useRestApiRunner(prosessData.forhåndsvisMelding);
  const previewCallback = useCallback(lagForhandsvisCallback(forhandsvisMelding, fagsak, behandling),
    [behandling.versjon]);

  const { data: ankeVurdering, state } = restApiHooks.useRestApi(prosessData.ankeVurdering);
  if (state !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <ReduxWrapper formName="AnkeTrygderettsbehandlingProsessIndex" formData={formData} setFormData={setFormData}>
      <AnkeTrygderettsbehandlingProsessIndex
        ankeVurdering={ankeVurdering}
        aksjonspunkter={aksjonspunkter}
        submitCallback={getSubmitHandler()}
        behandling={behandling}
        previewCallback={previewCallback}
        alleKodeverk={alleKodeverk}
        {...props}
      />
    </ReduxWrapper>
  );
};

export default AnkeTrygderettsbehandlingProsessDataIndex;
