import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { Dokument, Innsyn, StandardProsessPanelProps } from '@fpsak-frontend/types';

import InnsynVedtakForm, { ForhandsvisData } from './components/InnsynVedtakForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

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
}) => (
  <RawIntlProvider value={intl}>
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
  </RawIntlProvider>
);

export default VedtakInnsynProsessIndex;
