import React, { FunctionComponent, useMemo } from 'react';
import { RawIntlProvider } from 'react-intl';
import moment from 'moment';

import { StandardFaktaPanelProps, UttakKontrollerAktivitetskrav } from '@navikt/fp-types';
import { KodeverkType } from '@navikt/fp-kodeverk';
import { createIntl } from '@navikt/ft-utils';

import AktivitetskravFaktaForm from './components/AktivitetskravFaktaForm';
import messages from '../i18n/nb_NO.json';

import '@navikt/fp-fakta-felles/dist/style.css';

const intl = createIntl(messages);

interface OwnProps {
  harApneAksjonspunkter: boolean;
  uttakKontrollerAktivitetskrav: UttakKontrollerAktivitetskrav[];
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
    .sort((krav1, krav2) => moment(krav1.fom).diff(moment(krav2.fom))), [uttakKontrollerAktivitetskrav]);
  return (
    <RawIntlProvider value={intl}>
      <AktivitetskravFaktaForm
        harApneAksjonspunkter={harApneAksjonspunkter}
        sorterteAktivitetskrav={sorterteAktivitetskrav}
        submitCallback={submitCallback}
        aktivitetskravAvklaringer={alleKodeverk[KodeverkType.AKTIVITETSKRAV_AVKLARING]}
        morsAktiviteter={alleKodeverk[KodeverkType.MORS_AKTIVITET]}
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
