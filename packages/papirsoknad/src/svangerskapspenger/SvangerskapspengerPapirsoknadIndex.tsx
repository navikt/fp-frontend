import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import type { AlleKodeverk } from '@navikt/fp-types';

import { SvangerskapspengerForm, type SvangerskapsValues } from './components/SvangerskapspengerForm';

// TODO (TOR) Fjern komponent

interface Props {
  onSubmitUfullstendigsoknad: () => Promise<void>;
  onSubmit: (values: SvangerskapsValues) => Promise<void>;
  onMellomlagre?: (values: SvangerskapsValues) => void;
  mellomlagretData?: Record<string, unknown>;
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
}

export const SvangerskapspengerPapirsoknadIndex = ({
  onSubmitUfullstendigsoknad,
  onSubmit,
  onMellomlagre,
  mellomlagretData,
  readOnly,
  soknadData,
  alleKodeverk,
}: Props) => (
  <SvangerskapspengerForm
    onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
    onSubmit={onSubmit}
    onMellomlagre={onMellomlagre}
    mellomlagretData={mellomlagretData}
    readOnly={readOnly}
    soknadData={soknadData}
    alleKodeverk={alleKodeverk}
  />
);
