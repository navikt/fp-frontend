import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  Behandling, FamilieHendelse, FamilieHendelseSamling, Soknad,
} from '@fpsak-frontend/types';
import { StandardFaktaProps } from '@fpsak-frontend/fakta-felles';

import FodselInfoPanel from './components/FodselInfoPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  behandling: Behandling;
  soknad: Soknad;
  familiehendelse: FamilieHendelseSamling;
  soknadOriginalBehandling?: Soknad;
  familiehendelseOriginalBehandling?: FamilieHendelse;
}

const FodselFaktaIndex: FunctionComponent<OwnProps & StandardFaktaProps> = ({
  behandling,
  soknad,
  familiehendelse,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
  aksjonspunkter,
  harApneAksjonspunkter,
  submittable,
  alleMerknaderFraBeslutter,
  submitCallback,
  readOnly,
}) => (
  <RawIntlProvider value={intl}>
    <FodselInfoPanel
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      behandlingType={behandling.type}
      soknad={soknad}
      familiehendelse={familiehendelse}
      soknadOriginalBehandling={soknadOriginalBehandling}
      familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      aksjonspunkter={aksjonspunkter}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
      submittable={submittable}
      submitCallback={submitCallback}
      readOnly={readOnly}
    />
  </RawIntlProvider>
);

export default FodselFaktaIndex;
