import React, { FunctionComponent, useMemo } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import moment from 'moment';

import { Behandling, KodeverkMedNavn, UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';
import { StandardFaktaProps } from '@fpsak-frontend/fakta-felles';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import AktivitetskravFaktaForm from './components/AktivitetskravFaktaForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  behandling: Behandling;
  harApneAksjonspunkter: boolean;
  uttakKontrollerAktivitetskrav: UttakKontrollerAktivitetskrav[];
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

const AktivitetskravFaktaIndex: FunctionComponent<OwnProps & StandardFaktaProps> = ({
  behandling,
  harApneAksjonspunkter,
  uttakKontrollerAktivitetskrav,
  submitCallback,
  alleKodeverk,
  alleMerknaderFraBeslutter,
  readOnly,
  submittable,
}) => {
  const sorterteAktivitetskrav = useMemo(() => uttakKontrollerAktivitetskrav
    .sort((krav1, krav2) => moment(krav1.fom).diff(moment(krav2.fom))), [uttakKontrollerAktivitetskrav]);
  return (
    <RawIntlProvider value={intl}>
      <AktivitetskravFaktaForm
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
        harApneAksjonspunkter={harApneAksjonspunkter}
        sorterteAktivitetskrav={sorterteAktivitetskrav}
        submitCallback={submitCallback}
        aktivitetskravAvklaringer={alleKodeverk[kodeverkTyper.AKTIVITETSKRAV_AVKLARING]}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        readOnly={readOnly}
        submittable={submittable}
      />
    </RawIntlProvider>
  );
};

export default AktivitetskravFaktaIndex;
