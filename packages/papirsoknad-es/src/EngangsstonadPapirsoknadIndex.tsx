import React, { FunctionComponent } from 'react';

import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { FagsakPerson, KodeverkMedNavn } from '@fpsak-frontend/types';

import EngangsstonadForm from './components/EngangsstonadForm';

interface OwnProps {
  onSubmitUfullstendigsoknad: () => Promise<any>;
  onSubmit: (_formValues, _dispatch, values: any) => Promise<any>;
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  fagsakPerson: FagsakPerson;
}

const EngangsstonadPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  onSubmitUfullstendigsoknad,
  onSubmit,
  readOnly,
  soknadData,
  alleKodeverk,
  fagsakPerson,
}) => (
  <EngangsstonadForm
    onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
    onSubmit={onSubmit}
    readOnly={readOnly}
    soknadData={soknadData}
    alleKodeverk={alleKodeverk}
    fagsakPerson={fagsakPerson}
  />
);

export default EngangsstonadPapirsoknadIndex;
