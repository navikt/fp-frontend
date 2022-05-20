import React, { FunctionComponent } from 'react';

import { SoknadData } from '@fpsak-frontend/papirsoknad-ui-komponenter';
import { AlleKodeverk } from '@fpsak-frontend/types';

import ForeldrepengerForm from './components/ForeldrepengerForm';

interface OwnProps {
  onSubmitUfullstendigsoknad: () => Promise<any>;
  onSubmit: (values: any) => Promise<any>;
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  fagsakPersonnummer: string;
}

const ForeldrepengerPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  onSubmitUfullstendigsoknad,
  onSubmit,
  readOnly,
  soknadData,
  alleKodeverk,
  fagsakPersonnummer,
}) => (
  <ForeldrepengerForm
    onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
    onSubmit={onSubmit}
    readOnly={readOnly}
    soknadData={soknadData}
    alleKodeverk={alleKodeverk}
    fagsakPersonnummer={fagsakPersonnummer}
  />
);

export default ForeldrepengerPapirsoknadIndex;
