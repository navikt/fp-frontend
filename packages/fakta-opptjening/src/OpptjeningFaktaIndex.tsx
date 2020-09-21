import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  Aksjonspunkt, Behandling, KodeverkMedNavn, Opptjening,
} from '@fpsak-frontend/types';

import OpptjeningInfoPanel from './components/OpptjeningInfoPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  behandling: Behandling;
  opptjening?: Opptjening;
  aksjonspunkter: Aksjonspunkt[];
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  utlandDokStatus?: {
    dokStatus: string;
  };
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  submitCallback: (...args: any[]) => any;
  readOnly: boolean;
  harApneAksjonspunkter: boolean;
  submittable: boolean;
}

const OpptjeningFaktaIndex: FunctionComponent<OwnProps> = ({
  behandling,
  opptjening,
  aksjonspunkter,
  utlandDokStatus,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  harApneAksjonspunkter,
  submittable,
  submitCallback,
  readOnly,
}) => (
  <RawIntlProvider value={intl}>
    <OpptjeningInfoPanel
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      fastsattOpptjening={opptjening ? opptjening.fastsattOpptjening : undefined}
      opptjeningAktiviteter={opptjening ? opptjening.opptjeningAktivitetList : undefined}
      dokStatus={utlandDokStatus ? utlandDokStatus.dokStatus : undefined}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      readOnly={readOnly}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      alleKodeverk={alleKodeverk}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
      submittable={submittable}
    />
  </RawIntlProvider>
);

export default OpptjeningFaktaIndex;
