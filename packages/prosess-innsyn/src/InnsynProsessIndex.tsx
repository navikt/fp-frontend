import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { Dokument, Innsyn, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import InnsynForm from './components/InnsynForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  innsyn?: Innsyn;
  alleDokumenter: Dokument[];
  saksnummer: string;
}

const InnsynProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  innsyn = {},
  alleDokumenter,
  saksnummer,
  aksjonspunkter,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  alleKodeverk,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="InnsynProsessIndex" formData={formData} setFormData={setFormData}>
      <InnsynForm
        saksNr={saksnummer}
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
        behandlingPaaVent={behandling.behandlingPaaVent}
        innsynMottattDato={innsyn?.innsynMottattDato}
        innsynDokumenter={innsyn?.dokumenter}
        innsynResultatType={innsyn?.innsynResultatType}
        vedtaksdokumentasjon={innsyn?.vedtaksdokumentasjon}
        alleDokumenter={alleDokumenter}
        aksjonspunkter={aksjonspunkter}
        alleKodeverk={alleKodeverk}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        readOnlySubmitButton={readOnlySubmitButton}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default InnsynProsessIndex;
