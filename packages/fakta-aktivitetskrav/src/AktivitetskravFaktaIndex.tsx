import React, { FunctionComponent, useMemo } from 'react';
import { RawIntlProvider } from 'react-intl';
import dayjs from 'dayjs';

import { StandardFaktaPanelProps, Aktivitetskrav } from '@fpsak-frontend/types';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { createIntl } from '@navikt/ft-utils';

import AktivitetskravFaktaForm from './components/AktivitetskravFaktaForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  harApneAksjonspunkter: boolean;
  uttakKontrollerAktivitetskrav: Aktivitetskrav[];
}

const AktivitetskravFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  harApneAksjonspunkter,
  uttakKontrollerAktivitetskrav,
  submitCallback,
  alleKodeverk,
  alleMerknaderFraBeslutter,
  readOnly,
  submittable,
  aksjonspunkter,
  formData,
  setFormData,
}) => {
  const sorterteAktivitetskrav = useMemo(() => [...uttakKontrollerAktivitetskrav]
    .sort((krav1, krav2) => dayjs(krav1.fom).diff(dayjs(krav2.fom))), [uttakKontrollerAktivitetskrav]);
  return (
    <RawIntlProvider value={intl}>
      <AktivitetskravFaktaForm
        harApneAksjonspunkter={harApneAksjonspunkter}
        sorterteAktivitetskrav={sorterteAktivitetskrav}
        submitCallback={submitCallback}
        aktivitetskravAvklaringer={[{
          kode: 'MANGLER',
          kodeverk: 'VURDERING',
          navn: 'Mangler dokumentasjon',
        }, {
          kode: 'GODKJENT',
          kodeverk: 'VURDERING',
          navn: 'Godkjent',
        }, {
          kode: 'IKKE_GODKJENT',
          kodeverk: 'VURDERING',
          navn: 'Ikke godkjent',
        }]}
        morsAktiviteter={alleKodeverk[kodeverkTyper.MORS_AKTIVITET]}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        readOnly={readOnly || aksjonspunkter.length === 0}
        submittable={submittable}
        formData={formData}
        setFormData={setFormData}
      />
    </RawIntlProvider>
  );
};

export default AktivitetskravFaktaIndex;
