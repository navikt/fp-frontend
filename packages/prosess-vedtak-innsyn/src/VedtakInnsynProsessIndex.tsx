import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { Dokument, Innsyn, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import InnsynVedtakForm, { ForhandsvisData } from './components/InnsynVedtakForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  innsyn: Innsyn;
  saksnummer: string;
  alleDokumenter: Dokument[];
  previewCallback: (data: ForhandsvisData) => Promise<any>;
}

const VedtakInnsynProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  innsyn,
  saksnummer,
  aksjonspunkter,
  alleDokumenter,
  submitCallback,
  previewCallback,
  isReadOnly,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="VedtakInnsynProsessIndex" formData={formData} setFormData={setFormData}>
      <InnsynVedtakForm
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
        sprakkode={behandling.sprakkode}
        innsynDokumenter={innsyn.dokumenter}
        innsynMottattDato={innsyn.innsynMottattDato}
        innsynResultatType={innsyn.innsynResultatType}
        alleDokumenter={alleDokumenter}
        saksNr={saksnummer}
        aksjonspunkter={aksjonspunkter}
        submitCallback={submitCallback}
        previewCallback={previewCallback}
        readOnly={isReadOnly}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default VedtakInnsynProsessIndex;
