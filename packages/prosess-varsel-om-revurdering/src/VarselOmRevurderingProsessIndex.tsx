import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  FamilieHendelse, FamilieHendelseSamling, Soknad, StandardProsessPanelProps,
} from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import VarselOmRevurderingForm, { ForhandsvisData } from './components/VarselOmRevurderingForm';
import messages from '../i18n/nb_NO.json';

import '@navikt/fp-prosess-felles/dist/style.css';
import '@navikt/fp-modal-sett-pa-vent/dist/style.css';
import '@navikt/fp-prosess-fakta-fodsel-sammenligning/dist/style.css';

const intl = createIntl(messages);

interface OwnProps {
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
  soknadOriginalBehandling: Soknad;
  familiehendelseOriginalBehandling: FamilieHendelse;
  previewCallback: (data: ForhandsvisData) => Promise<any>;
}

const VarselOmRevurderingProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
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
}) => (
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

export default VarselOmRevurderingProsessIndex;
