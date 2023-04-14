import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { Button, Label } from '@navikt/ds-react';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { Aksjonspunkt } from '@navikt/ft-types';
import { VerticalSpacer, FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextFieldNew } from '@navikt/fp-fakta-felles';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { AlleKodeverk, MedlemPeriode, Medlemskap, Soknad } from '@navikt/fp-types';

import OppholdstillatelseTabell from './OppholdstillatelseTabell';
import OppholdINorgeOgAdresserFaktaPanel, {
  FormValues as OppholdFormValues,
} from './OppholdINorgeOgAdresserFaktaPanel';
import PerioderMedMedlemskapFaktaPanel, { FormValues as PerioderFormValues } from './PerioderMedMedlemskapFaktaPanel';
import StatusForBorgerFaktaPanel, { FormValues as StatusFormValues } from './StatusForBorgerFaktaPanel';

import styles from './oppholdInntektOgPeriodeForm.module.css';

const { AVKLAR_OPPHOLDSRETT, AVKLAR_LOVLIG_OPPHOLD } = AksjonspunktCode;

const hasAksjonspunkt = (aksjonspunktCode: string, aksjonspunkter: string[]): boolean =>
  aksjonspunkter.some((ap: string) => ap === aksjonspunktCode);

export type FormValues = OppholdFormValues &
  StatusFormValues &
  PerioderFormValues & {
    begrunnelse?: string;
  };

const buildInitialValues = (
  valgtPeriode: MedlemPeriode,
  alleAksjonspunkter: Aksjonspunkt[],
  medlemskapPerioder: Medlemskap['medlemskapPerioder'],
): FormValues => {
  const aksjonspunkter = alleAksjonspunkter.filter(
    ap =>
      valgtPeriode.aksjonspunkter.includes(ap.definisjon) ||
      ap.definisjon === AksjonspunktCode.AVKLAR_FORTSATT_MEDLEMSKAP,
  );

  let statusForBorgerInitialValues = {};
  if (
    hasAksjonspunkt(AVKLAR_OPPHOLDSRETT, valgtPeriode.aksjonspunkter) ||
    hasAksjonspunkt(AVKLAR_LOVLIG_OPPHOLD, valgtPeriode.aksjonspunkter)
  ) {
    statusForBorgerInitialValues = StatusForBorgerFaktaPanel.buildInitialValues(valgtPeriode, aksjonspunkter);
  }

  return {
    ...OppholdINorgeOgAdresserFaktaPanel.buildInitialValues(valgtPeriode),
    ...PerioderMedMedlemskapFaktaPanel.buildInitialValues(valgtPeriode, medlemskapPerioder),
    ...statusForBorgerInitialValues,
    begrunnelse: valgtPeriode.begrunnelse,
  };
};

interface OwnProps {
  valgtPeriode: MedlemPeriode;
  aksjonspunkter: Aksjonspunkt[];
  medlemskap: Medlemskap;
  alleKodeverk: AlleKodeverk;
  updateOppholdInntektPeriode: (vurderingsdato: string, values: FormValues) => void;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  submittable: boolean;
  soknad: Soknad;
  lagreEnkeltPeriode: (periode: MedlemPeriode) => void;
  setValgtPeriode: (periode?: MedlemPeriode) => void;
}

const OppholdInntektOgPeriodeForm: FunctionComponent<OwnProps> = ({
  valgtPeriode,
  readOnly,
  submittable,
  soknad,
  alleKodeverk,
  aksjonspunkter,
  alleMerknaderFraBeslutter,
  updateOppholdInntektPeriode,
  medlemskap,
  lagreEnkeltPeriode,
  setValgtPeriode,
}) => {
  const [isSubmitting, setSubmitting] = useState(false);

  const initialValues = useMemo(
    () => buildInitialValues(valgtPeriode, aksjonspunkter, medlemskap.medlemskapPerioder),
    [valgtPeriode, aksjonspunkter, soknad, medlemskap.medlemskapPerioder],
  );

  const formMethods = useForm<FormValues>({
    defaultValues: initialValues,
  });

  const avbryt = useCallback(() => {
    formMethods.reset(initialValues);
    setValgtPeriode();
  }, []);

  const harAksjonspunkt = aksjonspunkter.length > 0;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => {
        setSubmitting(true);
        updateOppholdInntektPeriode(valgtPeriode.vurderingsdato, values);
        if (lagreEnkeltPeriode) {
          lagreEnkeltPeriode({ ...valgtPeriode, ...values });
        }
      }}
    >
      <div className={lagreEnkeltPeriode ? undefined : styles.showBorder}>
        {!lagreEnkeltPeriode && (
          <Label size="small">
            <FormattedMessage
              id="OppholdInntektOgPeriodeForm.Periode"
              values={{ dato: moment(valgtPeriode.vurderingsdato).format(DDMMYYYY_DATE_FORMAT) }}
            />
          </Label>
        )}
        <OppholdINorgeOgAdresserFaktaPanel
          valgtPeriode={valgtPeriode}
          soknad={soknad}
          aksjonspunkter={aksjonspunkter}
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        />
        <VerticalSpacer twentyPx />
        {medlemskap.opphold.length > 0 && (
          <>
            <OppholdstillatelseTabell oppholdstillatelse={medlemskap.opphold} alleKodeverk={alleKodeverk} />
            <VerticalSpacer twentyPx />
          </>
        )}
        <PerioderMedMedlemskapFaktaPanel
          valgtPeriode={valgtPeriode}
          medlemskap={medlemskap}
          soknad={soknad}
          aksjonspunkter={aksjonspunkter}
          readOnly={readOnly}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          alleKodeverk={alleKodeverk}
        />
        {(hasAksjonspunkt(AVKLAR_OPPHOLDSRETT, valgtPeriode.aksjonspunkter) ||
          hasAksjonspunkt(AVKLAR_LOVLIG_OPPHOLD, valgtPeriode.aksjonspunkter)) && (
          <StatusForBorgerFaktaPanel
            valgtPeriode={valgtPeriode}
            aksjonspunkter={aksjonspunkter}
            readOnly={readOnly}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          />
        )}
        <VerticalSpacer twentyPx />
        {harAksjonspunkt && valgtPeriode.aksjonspunkter && valgtPeriode.aksjonspunkter.length > 0 && (
          <FaktaBegrunnelseTextFieldNew
            isReadOnly={readOnly}
            isSubmittable={submittable}
            hasBegrunnelse={!!initialValues.begrunnelse}
          />
        )}
        <VerticalSpacer twentyPx />
        {!readOnly && harAksjonspunkt && (
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Button
                  size="small"
                  variant="primary"
                  disabled={!formMethods.formState.isDirty || isSubmitting}
                  loading={isSubmitting}
                >
                  <FormattedMessage
                    id={lagreEnkeltPeriode ? 'OppholdInntektOgPerioder.Bekreft' : 'OppholdInntektOgPeriode.Oppdater'}
                  />
                </Button>
              </FlexColumn>
              {!lagreEnkeltPeriode && (
                <FlexColumn>
                  <Button size="small" variant="secondary" onClick={avbryt} type="button">
                    <FormattedMessage id="OppholdInntektOgPeriode.Avbryt" />
                  </Button>
                </FlexColumn>
              )}
            </FlexRow>
          </FlexContainer>
        )}
      </div>
    </Form>
  );
};

export default OppholdInntektOgPeriodeForm;
