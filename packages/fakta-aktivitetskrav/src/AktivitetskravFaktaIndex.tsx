import React, { FunctionComponent, useMemo } from 'react';
import { RawIntlProvider } from 'react-intl';
import moment from 'moment';

import { StandardFaktaPanelProps, UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { createIntl } from '@fpsak-frontend/utils';

import AktivitetskravFaktaForm from './components/AktivitetskravFaktaForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  harApneAksjonspunkter: boolean;
  uttakKontrollerAktivitetskrav: UttakKontrollerAktivitetskrav[];
}

const AktivitetskravFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  harApneAksjonspunkter,
  uttakKontrollerAktivitetskrav,
  submitCallback,
  alleKodeverk,
  alleMerknaderFraBeslutter,
  readOnly,
  submittable,
  aksjonspunkter,
}) => {
  const sorterteAktivitetskrav = useMemo(() => [...uttakKontrollerAktivitetskrav]
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
        morsAktiviteter={alleKodeverk[kodeverkTyper.MORS_AKTIVITET]}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        readOnly={readOnly || aksjonspunkter.length === 0}
        submittable={submittable}
      />
    </RawIntlProvider>
  );
};

export default AktivitetskravFaktaIndex;
