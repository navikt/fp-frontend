import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { Dokument, Innsyn } from '@fpsak-frontend/types';
import { StandardProsessFormProps } from '@fpsak-frontend/prosess-felles';

import InnsynForm from './components/InnsynForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  innsyn?: Innsyn;
  alleDokumenter: Dokument[];
  saksnummer: string;
}

const InnsynProsessIndex: FunctionComponent<OwnProps & StandardProsessFormProps> = ({
  behandling,
  innsyn = {},
  alleDokumenter,
  saksnummer,
  aksjonspunkter,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
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
  </RawIntlProvider>
);

export default InnsynProsessIndex;
