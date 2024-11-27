import React from 'react';

import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import { AlleKodeverk } from '@navikt/fp-types';

import { SvangerskapspengerForm } from './components/SvangerskapspengerForm';

interface Props {
  onSubmitUfullstendigsoknad: () => Promise<any>;
  onSubmit: (values: any) => Promise<any>;
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
}

export const SvangerskapspengerPapirsoknadIndex = ({
  onSubmitUfullstendigsoknad,
  onSubmit,
  readOnly,
  soknadData,
  alleKodeverk,
}: Props) => (
  <SvangerskapspengerForm
    onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
    onSubmit={onSubmit}
    readOnly={readOnly}
    soknadData={soknadData}
    alleKodeverk={alleKodeverk}
  />
);
