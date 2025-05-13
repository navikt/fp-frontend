import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import type { AlleKodeverk } from '@navikt/fp-types';

import { ForeldrepengerForm, type ForeldrepengerValues } from './components/ForeldrepengerForm';

// TODO (TOR) Fjern komponent

interface Props {
  onSubmitUfullstendigsoknad: () => Promise<void>;
  onSubmit: (values: ForeldrepengerValues) => Promise<void>;
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  fagsakPersonnummer: string;
  erEndringssøknad: boolean;
}

export const ForeldrepengerPapirsoknadIndex = ({
  onSubmitUfullstendigsoknad,
  onSubmit,
  readOnly,
  soknadData,
  alleKodeverk,
  fagsakPersonnummer,
  erEndringssøknad,
}: Props) => (
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
