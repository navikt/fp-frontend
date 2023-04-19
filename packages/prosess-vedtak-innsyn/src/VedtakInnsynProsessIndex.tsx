import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { Dokument, Innsyn, StandardProsessPanelProps } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import InnsynVedtakForm, { ForhandsvisData } from './components/InnsynVedtakForm';
import messages from '../i18n/nb_NO.json';

import '@navikt/fp-prosess-felles/dist/style.css';

const intl = createIntl(messages);

interface OwnProps {
  innsyn: Innsyn;
  saksnummer: string;
  alleDokumenter?: Dokument[];
  previewCallback: (data: ForhandsvisData) => Promise<any>;
}

const VedtakInnsynProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  innsyn,
  saksnummer,
  aksjonspunkter,
  alleDokumenter = [],
  submitCallback,
  previewCallback,
  isReadOnly,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <InnsynVedtakForm
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
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default VedtakInnsynProsessIndex;
