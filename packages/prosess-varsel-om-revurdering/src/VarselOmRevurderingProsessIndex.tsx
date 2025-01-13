import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { FamilieHendelse, FamilieHendelseSamling, Soknad, StandardProsessPanelProps } from '@navikt/fp-types';

import VarselOmRevurderingForm, { ForhandsvisData } from './components/VarselOmRevurderingForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
  soknadOriginalBehandling: Soknad;
  familiehendelseOriginalBehandling: FamilieHendelse;
  previewCallback: (data: ForhandsvisData) => void;
}

export const VarselOmRevurderingProsessIndex = ({
  behandling,
  familiehendelse,
  soknad,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
  aksjonspunkter,
  submitCallback,
  previewCallback,
  isReadOnly,
  alleKodeverk,
  formData,
  setFormData,
}: Props & StandardProsessPanelProps) => (
  <RawIntlProvider value={intl}>
    <VarselOmRevurderingForm
      behandlingArsaker={behandling.behandlingÅrsaker}
      sprakkode={behandling.sprakkode}
      behandlingType={behandling.type}
      familiehendelse={familiehendelse}
      soknad={soknad}
      soknadOriginalBehandling={soknadOriginalBehandling}
      familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      previewCallback={previewCallback}
      readOnly={isReadOnly}
      alleKodeverk={alleKodeverk}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);
