import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  Aksjonspunkt, FamilieHendelse, FamilieHendelseSamling, Soknad,
} from '@fpsak-frontend/types';
import { StandardProsessFormProps } from '@fpsak-frontend/prosess-felles';

import VarselOmRevurderingForm from './components/VarselOmRevurderingForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
  soknadOriginalBehandling: Soknad;
  familiehendelseOriginalBehandling: FamilieHendelse;
  aksjonspunkter: Aksjonspunkt[];
  previewCallback: (...args: any[]) => any;
}

const VarselOmRevurderingProsessIndex: FunctionComponent<OwnProps & StandardProsessFormProps> = ({
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
}) => (
  <RawIntlProvider value={intl}>
    <VarselOmRevurderingForm
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      behandlingArsaker={behandling.behandlingArsaker}
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
  </RawIntlProvider>
);

export default VarselOmRevurderingProsessIndex;
