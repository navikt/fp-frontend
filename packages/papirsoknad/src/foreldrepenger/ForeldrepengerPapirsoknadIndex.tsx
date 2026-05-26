import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import type { AlleKodeverk } from '@navikt/fp-types';

import {
  ForeldrepengerEndringssøknadForm,
  type ForeldrepengerEndringssøknadValues,
} from './components/ForeldrepengerEndringssøknadForm';
import { ForeldrepengerForm, type ForeldrepengerValues } from './components/ForeldrepengerForm';

interface Props {
  onSubmitUfullstendigsoknad: () => Promise<void>;
  onSubmit: (values: ForeldrepengerValues | ForeldrepengerEndringssøknadValues) => Promise<void>;
  onMellomlagre?: (values: Record<string, unknown>) => void;
  mellomlagretData?: Record<string, unknown>;
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  fagsakPersonnummer: string;
  erEndringssøknad: boolean;
}

export const ForeldrepengerPapirsoknadIndex = ({
  onSubmitUfullstendigsoknad,
  onSubmit,
  onMellomlagre,
  mellomlagretData,
  readOnly,
  soknadData,
  alleKodeverk,
  fagsakPersonnummer,
  erEndringssøknad,
}: Props) => {
  return erEndringssøknad ? (
    <ForeldrepengerEndringssøknadForm
      onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
      onSubmit={onSubmit}
      onMellomlagre={onMellomlagre}
      mellomlagretData={mellomlagretData}
      readOnly={readOnly}
      soknadData={soknadData}
      alleKodeverk={alleKodeverk}
    />
  ) : (
    <ForeldrepengerForm
      onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
      onSubmit={onSubmit}
      onMellomlagre={onMellomlagre}
      mellomlagretData={mellomlagretData}
      readOnly={readOnly}
      soknadData={soknadData}
      alleKodeverk={alleKodeverk}
      fagsakPersonnummer={fagsakPersonnummer}
    />
  );
};
