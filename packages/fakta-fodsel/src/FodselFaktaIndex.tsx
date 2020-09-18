import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  Aksjonspunkt, Behandling, FamilieHendelseSamling, Personopplysninger, Soknad,
} from '@fpsak-frontend/types';

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
  personopplysninger: Personopplysninger;
  soknadOriginalBehandling?: Soknad;
  familiehendelseOriginalBehandling?: FamilieHendelseSamling;
  aksjonspunkter: Aksjonspunkt[];
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  submitCallback: (...args: any[]) => any;
  readOnly: boolean;
  harApneAksjonspunkter: boolean;
  submittable: boolean;
}

const FodselFaktaIndex: FunctionComponent<OwnProps> = ({
  behandling,
  soknad,
  familiehendelse,
  personopplysninger,
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
      personopplysninger={personopplysninger}
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
