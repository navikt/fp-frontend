import React, {
  FunctionComponent, useCallback, useEffect, useMemo, useState,
} from 'react';
import { useIntl } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AksjonspunktHelpTextHTML, VerticalSpacer, FaktaGruppe } from '@fpsak-frontend/shared-components';
import { KodeverkMedNavn, UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';
import { FaktaSubmitButtonNew } from '@fpsak-frontend/fakta-felles';
import { KontrollerAktivitetskravAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import AktivitetskravFaktaDetailForm from './AktivitetskravFaktaDetailForm';
import AktivitetskravFaktaTabell from './AktivitetskravFaktaTabell';

interface PureOwnProps {
  harApneAksjonspunkter: boolean;
  sorterteAktivitetskrav: UttakKontrollerAktivitetskrav[];
  submitCallback: (aksjonspunkter: KontrollerAktivitetskravAp) => Promise<void>;
  aktivitetskravAvklaringer: KodeverkMedNavn[];
  morsAktiviteter: KodeverkMedNavn[];
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  readOnly: boolean;
  submittable: boolean;
  formData: UttakKontrollerAktivitetskrav[],
  setFormData: (data: UttakKontrollerAktivitetskrav[]) => void,
}

export const AktivitetskravFaktaForm: FunctionComponent<PureOwnProps> = ({
  harApneAksjonspunkter,
  sorterteAktivitetskrav,
  aktivitetskravAvklaringer,
  morsAktiviteter,
  alleMerknaderFraBeslutter,
  readOnly,
  submittable,
  submitCallback,
  formData,
  setFormData,
}) => {
  const intl = useIntl();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [aktivitetskrav, updateAktivitetskrav] = useState<UttakKontrollerAktivitetskrav[]>(formData || sorterteAktivitetskrav);

  const [valgtAktivitetskrav, setAktivitetskrav] = useState<UttakKontrollerAktivitetskrav>();
  useEffect(() => setAktivitetskrav(aktivitetskrav?.find((oa) => !oa.avklaring)), [aktivitetskrav]);

  const velgAktivitetskrav = useCallback((
    _event: React.MouseEvent | React.KeyboardEvent,
    _id: void,
    model: UttakKontrollerAktivitetskrav,
  ) => setAktivitetskrav(model), []);

  const oppdaterAktivitetskrav = useCallback((oppdatertKrav) => {
    const oppdaterteAktivitetskrav = aktivitetskrav
      .filter((aKrav) => aKrav.fom !== oppdatertKrav.fom)
      .concat([oppdatertKrav])
      .sort((a1, a2) => a1.fom.localeCompare(a2.fom));

    updateAktivitetskrav(oppdaterteAktivitetskrav);
    setAktivitetskrav(oppdaterteAktivitetskrav.find((oa) => !oa.avklaring));
  }, [aktivitetskrav]);

  const avbrytEditeringAvAktivitetskrav = useCallback(() => {
    setAktivitetskrav(undefined);
  }, []);

  const bekreft = useCallback(() => {
    setIsSubmitting(true);
    submitCallback({
      kode: aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV,
      avklartePerioder: aktivitetskrav as Required<UttakKontrollerAktivitetskrav>[],
    }).then(() => setIsSubmitting(false));
  }, [aktivitetskrav]);

  const isSubmittable = useMemo(() => submittable && !valgtAktivitetskrav && aktivitetskrav?.every((a) => a.avklaring), [aktivitetskrav, valgtAktivitetskrav]);

  useEffect(() => () => {
    setFormData(aktivitetskrav);
  }, [aktivitetskrav]);

  return (
    <>
      {harApneAksjonspunkter && (
        <>
          <AksjonspunktHelpTextHTML>
            {[intl.formatMessage({ id: 'AktivitetskravFaktaForm.AksjonspunktHjelpetekst' })]}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer sixteenPx />
        </>
      )}
      <FaktaGruppe
        title={intl.formatMessage({ id: 'AktivitetskravFaktaForm.Aktivitetskravperioder' })}
        merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV]}
      >
        {aktivitetskrav && (
          <AktivitetskravFaktaTabell
            aktivitetskrav={aktivitetskrav}
            valgtAktivitetskravFom={valgtAktivitetskrav?.fom}
            velgAktivitetskrav={velgAktivitetskrav}
            aktivitetskravAvklaringer={aktivitetskravAvklaringer}
            morsAktiviteter={morsAktiviteter}
          />
        )}
        {valgtAktivitetskrav && (
          <AktivitetskravFaktaDetailForm
            key={valgtAktivitetskrav.fom}
            valgtAktivitetskrav={valgtAktivitetskrav}
            readOnly={readOnly}
            aktivitetskravAvklaringer={aktivitetskravAvklaringer}
            oppdaterAktivitetskrav={oppdaterAktivitetskrav}
            avbrytEditeringAvAktivitetskrav={avbrytEditeringAvAktivitetskrav}
            morsAktiviteter={morsAktiviteter}
          />
        )}
      </FaktaGruppe>
      <VerticalSpacer twentyPx />
      <FaktaSubmitButtonNew
        isSubmittable={isSubmittable}
        isReadOnly={readOnly}
        hasOpenAksjonspunkter={harApneAksjonspunkter}
        onClick={bekreft}
        isSubmitting={isSubmitting}
        isDirty
      />
    </>
  );
};

export default AktivitetskravFaktaForm;
