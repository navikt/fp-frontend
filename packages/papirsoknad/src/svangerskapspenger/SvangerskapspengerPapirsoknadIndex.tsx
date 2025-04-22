import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import type { AlleKodeverk } from '@navikt/fp-types';

import { SvangerskapspengerForm } from './components/SvangerskapspengerForm';

// TODO (TOR) Fjern komponent

interface Props {
  onSubmitUfullstendigsoknad: () => Promise<void>;
  onSubmit: (values: any) => Promise<void>;
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
