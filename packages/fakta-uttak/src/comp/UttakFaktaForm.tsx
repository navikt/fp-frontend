import React, {
  useCallback, FunctionComponent, useState, useEffect, useMemo,
} from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';
import { Form } from '@navikt/ft-form-hooks';
import { Button, Heading, Panel } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { AksjonspunktStatus, isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { AlleKodeverk } from '@navikt/ft-types';
import { AddCircle } from '@navikt/ds-icons';

import { FaktaSubmitButtonNew, FaktaBegrunnelseTextFieldNew } from '@fpsak-frontend/fakta-felles';
import {
  Aksjonspunkt, UttakKontrollerFaktaPerioder, UttakKontrollerFaktaPerioderWrapper, Ytelsefordeling,
} from '@fpsak-frontend/types';

import UttakFaktaTable from './UttakFaktaTable';
import UttakFaktaDetailForm from './UttakFaktaDetailForm';

const finnAksjonspunktTekster = (
  aksjonspunkter: Aksjonspunkt[],
  ytelsefordeling: Ytelsefordeling,
) => aksjonspunkter
  .filter((ap) => ap.status === AksjonspunktStatus.OPPRETTET)
  .map((ap) => {
    const førsteUttaksdato = ytelsefordeling && ytelsefordeling.førsteUttaksdato ? ytelsefordeling.førsteUttaksdato : undefined;
    const førsteUttak = {
      value: dayjs(førsteUttaksdato).format(DDMMYYYY_DATE_FORMAT),
    };

    return (
      <FormattedMessage
        key={`UttakInfoPanel.Aksjonspunkt.${ap.definisjon}`}
        id={`UttakInfoPanel.Aksjonspunkt.${ap.definisjon}`}
        values={førsteUttak}
      />
    );
  });

interface OwnProps {
  ytelsefordeling: Ytelsefordeling;
  uttakKontrollerFaktaPerioder: UttakKontrollerFaktaPerioderWrapper;
  alleKodeverk: AlleKodeverk;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  formData: { uttakPerioder: UttakKontrollerFaktaPerioder[], begrunnelse: string },
  setFormData: (data: { uttakPerioder: UttakKontrollerFaktaPerioder[], begrunnelse: string }) => void,
  submitCallback: (aksjonspunkter: {}) => Promise<void>;
  submittable: boolean;
  kanOverstyre: boolean;
}

const UttakFaktaForm: FunctionComponent<OwnProps> = ({
  uttakKontrollerFaktaPerioder,
  ytelsefordeling,
  alleKodeverk,
  aksjonspunkter,
  readOnly,
  formData,
  setFormData,
  submitCallback,
  submittable,
  kanOverstyre,
}) => {
  const sortertePerioder = useMemo(() => [...uttakKontrollerFaktaPerioder.perioder]
    .sort((krav1, krav2) => dayjs(krav1.fom).diff(dayjs(krav2.fom))), [uttakKontrollerFaktaPerioder]);

  const [uttakPerioder, oppdaterUttakPerioder] = useState<UttakKontrollerFaktaPerioder[]>(formData?.uttakPerioder || sortertePerioder);

  const formMethods = useForm<{ begrunnelse: string }>({
    defaultValues: {
      begrunnelse: formData?.begrunnelse,
    },
  });

  useEffect(() => () => {
    setFormData({ uttakPerioder, begrunnelse: formMethods.getValues('begrunnelse') });
  }, []);

  const bekreft = useCallback((begrunnelse: string) => {
    submitCallback({
      kode: '',
      avklartePerioder: uttakPerioder,
      begrunnelse,
    });
  }, [uttakPerioder]);

  const begrunnelse = formMethods.watch('begrunnelse');

  const isSubmittable = useMemo(() => submittable && uttakPerioder?.every((a) => a.bekreftet) && !!begrunnelse,
    [uttakPerioder, begrunnelse]);

  const [isDirty, setDirty] = useState<boolean>(false);

  const harApneAksjonspunkter = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status));
  const aksjonspunktTekster = useMemo(() => finnAksjonspunktTekster(aksjonspunkter, ytelsefordeling), [aksjonspunkter, ytelsefordeling]);

  const erRedigerbart = aksjonspunkter.length > 0 || kanOverstyre;

  const [visNyPeriode, settVisNyPeriode] = useState(false);

  return (
    <>
      <Heading size="small"><FormattedMessage id="UttakFaktaForm.FaktaUttak" /></Heading>
      <VerticalSpacer thirtyTwoPx />
      {harApneAksjonspunkter && (
        <>
          <AksjonspunktHelpTextHTML>
            {aksjonspunktTekster}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer sixteenPx />
        </>
      )}
      <UttakFaktaTable
        uttakKontrollerFaktaPerioder={uttakPerioder}
        oppdaterUttakPerioder={oppdaterUttakPerioder}
        alleKodeverk={alleKodeverk}
        readOnly={readOnly}
        setDirty={setDirty}
        erRedigerbart={erRedigerbart}
      />
      <VerticalSpacer sixteenPx />
      {erRedigerbart && (
        <>
          {!visNyPeriode && (
            <Button
              size="small"
              variant="tertiary"
              type="button"
              icon={<AddCircle />}
              onClick={() => settVisNyPeriode(true)}
              disabled={readOnly}
            >
              <FormattedMessage id="UttakFaktaForm.LeggTilPeriode" />
            </Button>
          )}
          {visNyPeriode && (
            <Panel border>
              <UttakFaktaDetailForm
                avbrytEditering={() => settVisNyPeriode(false)}
                readOnly={false}
                oppdaterPerioder={(uttaksperioder: { perioder: UttakKontrollerFaktaPerioder[] }) => {
                  oppdaterUttakPerioder(uttakPerioder.concat(uttaksperioder.perioder));
                  settVisNyPeriode(false);
                }}
              />
            </Panel>
          )}
          <VerticalSpacer sixteenPx />
          <Form formMethods={formMethods} onSubmit={(values: { begrunnelse: string }) => bekreft(values.begrunnelse)}>
            <FaktaBegrunnelseTextFieldNew
              name="begrunnelse"
              isSubmittable
              isReadOnly={readOnly}
              hasBegrunnelse
            />
            <VerticalSpacer twentyPx />
            <FaktaSubmitButtonNew
              isSubmittable={isSubmittable}
              isReadOnly={readOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={isDirty || formMethods.formState.isDirty}
            />
          </Form>
        </>
      )}
    </>
  );
};

export default UttakFaktaForm;
