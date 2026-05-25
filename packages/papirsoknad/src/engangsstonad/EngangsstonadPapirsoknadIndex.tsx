import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import type { AlleKodeverk } from '@navikt/fp-types';

import { EngangsstonadForm, type EngangsstønadValues } from './components/EngangsstonadForm';

// TODO (TOR) Fjern komponent

interface Props {
  onSubmitUfullstendigsoknad: () => Promise<void>;
  onSubmit: (values: EngangsstønadValues) => Promise<void>;
  onMellomlagre?: (values: Record<string, unknown>) => void;
  mellomlagretData?: Record<string, unknown>;
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
}

export const EngangsstonadPapirsoknadIndex = (props: Props) => <EngangsstonadForm {...props} />;
