import React, { FunctionComponent, useCallback, useMemo } from 'react';

import { RestApiHooks, RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { AnkeVurdering, Behandling, Kodeverk } from '@fpsak-frontend/types';
import { ReduxWrapper } from '@fpsak-frontend/form';
import { ProsessData } from '@fpsak-frontend/prosess-felles';
import { RestKey } from '@fpsak-frontend/rest-api';
import { LoadingPanel } from '@fpsak-frontend/shared-components';

import AnkeProsessIndex from './AnkeProsessIndex';
import { AnkeData } from './components/TempsaveAnkeButton';
import { BrevData } from './components/PreviewAnkeLink';
import { BehandlingInfo } from './components/BehandleAnkeForm';

export class ProsessDataAnke extends ProsessData {
  ankeVurdering: RestKey<AnkeVurdering, void>

  forhåndsvisMelding: RestKey<any, any>

  lagreAnke: RestKey<AnkeVurdering, void>

  medRestEndepunkter = (ankeVurdering: RestKey<AnkeVurdering, void>,
    forhåndsvisMelding: RestKey<any, any>, lagreAnke: RestKey<AnkeVurdering, void>) => {
    this.ankeVurdering = ankeVurdering;
    this.forhåndsvisMelding = forhåndsvisMelding;
    this.lagreAnke = lagreAnke;
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
  fagsakYtelseType: Kodeverk,
  behandling: Behandling,
) => (data: BrevData) => {
  const brevData = {
    ...data,
    behandlingUuid: behandling.uuid,
    ytelseType: fagsakYtelseType,
  };
  return forhandsvisMelding(brevData).then((response) => forhandsvis(response));
};

const saveAnkeText = (
  lagreAnkeVurdering: (params?: any, keepData?: boolean) => Promise<any>,
  behandling: Behandling,
) => (aksjonspunktModel: AnkeData) => {
  const data = {
    behandlingId: behandling.id,
    ...aksjonspunktModel,
  };

  return lagreAnkeVurdering(data);
};

interface OwnProps {
  behandlinger: BehandlingInfo[];
  prosessData: ProsessDataAnke;
  isReadOnly: boolean;
  readOnlySubmitButton: boolean;
  formData?: any;
  setFormData: (data: any) => void;
}

const AnkeProsessDataIndex: FunctionComponent<OwnProps> = ({
  behandlinger,
  formData,
  setFormData,
  prosessData,
  ...props
}) => {
  const restApiHooks = useMemo(() => RestApiHooks.initHooks(prosessData.api), [prosessData.api]);

  const {
    behandlingData: { fagsak, behandling, alleKodeverk }, aksjonspunkter, getSubmitHandler,
  } = prosessData;

  const { startRequest: forhandsvisMelding } = restApiHooks.useRestApiRunner(prosessData.forhåndsvisMelding);
  const previewCallback = useCallback(lagForhandsvisCallback(forhandsvisMelding, fagsak.fagsakYtelseType, behandling),
    [behandling.versjon]);

  const { startRequest: lagreAnkeVurdering } = restApiHooks.useRestApiRunner(prosessData.lagreAnke);
  const saveAnke = useCallback(saveAnkeText(lagreAnkeVurdering, behandling),
    [behandling.versjon]);

  const { data: ankeVurdering, state } = restApiHooks.useRestApi(prosessData.ankeVurdering);
  if (state !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <ReduxWrapper formName="AnkeProsessIndex" formData={formData} setFormData={setFormData}>
      <AnkeProsessIndex
        behandling={behandling}
        ankeVurdering={ankeVurdering}
        behandlinger={behandlinger}
        aksjonspunkter={aksjonspunkter}
        submitCallback={getSubmitHandler()}
        saveAnke={saveAnke}
        previewCallback={previewCallback}
        alleKodeverk={alleKodeverk}
        {...props}
      />
    </ReduxWrapper>
  );
};

export default AnkeProsessDataIndex;
