import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  FamilieHendelse, FamilieHendelseSamling, Soknad, StandardProsessPanelProps,
} from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import VarselOmRevurderingForm, { ForhandsvisData } from './components/VarselOmRevurderingForm';
import messages from '../i18n/nb_NO.json';

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
    <ReduxWrapper formName="VarselOmRevurderingProsessIndex" formData={formData} setFormData={setFormData}>
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
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default VarselOmRevurderingProsessIndex;
