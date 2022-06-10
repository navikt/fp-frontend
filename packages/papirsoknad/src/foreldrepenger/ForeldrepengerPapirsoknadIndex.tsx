import React, { FunctionComponent } from 'react';
import { AlleKodeverk } from '@navikt/ft-types';

import { SoknadData } from '@fpsak-frontend/papirsoknad-ui-komponenter';

import ForeldrepengerForm from './components/ForeldrepengerForm';

interface OwnProps {
  onSubmitUfullstendigsoknad: () => Promise<any>;
  onSubmit: (values: any) => Promise<any>;
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  fagsakPersonnummer: string;
  erEndringssøknad: boolean;
}

const ForeldrepengerPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  onSubmitUfullstendigsoknad,
  onSubmit,
  readOnly,
  soknadData,
  alleKodeverk,
  fagsakPersonnummer,
  erEndringssøknad,
}) => (
  <ForeldrepengerForm
    onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
    onSubmit={onSubmit}
    readOnly={readOnly}
    soknadData={soknadData}
    alleKodeverk={alleKodeverk}
    fagsakPersonnummer={fagsakPersonnummer}
    erEndringssøknad={erEndringssøknad}
  />
);

export default ForeldrepengerPapirsoknadIndex;
