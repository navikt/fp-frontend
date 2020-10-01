import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  Aksjonspunkt, Behandling, Dokument, Innsyn, KodeverkMedNavn,
} from '@fpsak-frontend/types';

import InnsynForm from './components/InnsynForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  behandling: Behandling;
  innsyn?: Innsyn;
  alleDokumenter: Dokument[];
  saksnummer: number;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: any) => Promise<any>;
  isReadOnly: boolean;
  readOnlySubmitButton: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

const InnsynProsessIndex: FunctionComponent<OwnProps> = ({
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
