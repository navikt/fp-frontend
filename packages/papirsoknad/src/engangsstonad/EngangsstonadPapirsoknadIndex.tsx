import React, { FunctionComponent } from 'react';

import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { AlleKodeverk } from '@fpsak-frontend/types';

import EngangsstonadForm from './components/EngangsstonadForm';

interface OwnProps {
  onSubmitUfullstendigsoknad: () => Promise<any>;
  onSubmit: (_formValues: any, _dispatch: any, values: any) => Promise<any>;
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
  <EngangsstonadForm
    onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
    onSubmit={onSubmit}
    readOnly={readOnly}
    soknadData={soknadData}
    alleKodeverk={alleKodeverk}
    fagsakPersonnummer={fagsakPersonnummer}
  />
);

export default EngangsstonadPapirsoknadIndex;
