import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';

import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { AlleKodeverk } from '@fpsak-frontend/types';
import { ReduxWrapper } from '@fpsak-frontend/form';

import EngangsstonadForm from './components/EngangsstonadForm';

interface OwnProps {
  onSubmitUfullstendigsoknad: () => Promise<any>;
  onSubmit: (_formValues: any, _dispatch: Dispatch, values: any) => Promise<any>;
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  fagsakPersonnummer: string;
}

const EngangsstonadPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  onSubmitUfullstendigsoknad,
  onSubmit,
  readOnly,
  soknadData,
  alleKodeverk,
  fagsakPersonnummer,
}) => (
  <ReduxWrapper formName="EngangsstonadPapirsoknadIndex">
    <EngangsstonadForm
      onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
      onSubmit={onSubmit}
      readOnly={readOnly}
      soknadData={soknadData}
      alleKodeverk={alleKodeverk}
      fagsakPersonnummer={fagsakPersonnummer}
    />
  </ReduxWrapper>
);

export default EngangsstonadPapirsoknadIndex;
