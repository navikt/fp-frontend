import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { FamilieHendelseSamling, Soknad, StandardProsessPanelProps } from '@fpsak-frontend/types';

import ErSoknadsfristVilkaretOppfyltForm from './components/ErSoknadsfristVilkaretOppfyltForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  soknad: Soknad;
  familiehendelse: FamilieHendelseSamling;
}

const SoknadsfristVilkarProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  vilkar,
  soknad,
  familiehendelse,
  aksjonspunkter,
  status,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <ErSoknadsfristVilkaretOppfyltForm
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      behandlingsresultat={behandling.behandlingsresultat}
      vilkar={vilkar}
      soknad={soknad}
      gjeldendeFamiliehendelse={familiehendelse.gjeldende}
      aksjonspunkter={aksjonspunkter}
      status={status}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

export default SoknadsfristVilkarProsessIndex;
