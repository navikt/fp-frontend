import React, {
  FunctionComponent, useCallback, useMemo, useState,
} from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { Element } from 'nav-frontend-typografi';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { Aksjonspunkt, AlleKodeverk } from '@navikt/ft-types';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextFieldNew } from '@fpsak-frontend/fakta-felles';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { MedlemPeriode, Medlemskap, Soknad } from '@fpsak-frontend/types';

import OppholdstillatelseTabell from './OppholdstillatelseTabell';
import OppholdINorgeOgAdresserFaktaPanel, { FormValues as OppholdFormValues } from './OppholdINorgeOgAdresserFaktaPanel';
import PerioderMedMedlemskapFaktaPanel, { FormValues as PerioderFormValues } from './PerioderMedMedlemskapFaktaPanel';
import StatusForBorgerFaktaPanel, { FormValues as StatusFormValues } from './StatusForBorgerFaktaPanel';

import styles from './oppholdInntektOgPeriodeForm.less';

const {
  AVKLAR_OPPHOLDSRETT, AVKLAR_LOVLIG_OPPHOLD,
} = aksjonspunktCodes;

const hasAksjonspunkt = (
  aksjonspunktCode: string,
  aksjonspunkter: string[],
): boolean => aksjonspunkter.some((ap: string) => ap === aksjonspunktCode);

export type FormValues = OppholdFormValues & StatusFormValues & PerioderFormValues & {
  begrunnelse?: string;
}

const buildInitialValues = (
  valgtPeriode: MedlemPeriode,
  alleAksjonspunkter: Aksjonspunkt[],
  medlemskapPerioder: Medlemskap['medlemskapPerioder'],
): FormValues => {
  const aksjonspunkter = alleAksjonspunkter
    .filter((ap) => valgtPeriode.aksjonspunkter
      .includes(ap.definisjon) || ap.definisjon === aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP);

  let statusForBorgerInitialValues = {};
  if (hasAksjonspunkt(AVKLAR_OPPHOLDSRETT, valgtPeriode.aksjonspunkter) || hasAksjonspunkt(AVKLAR_LOVLIG_OPPHOLD, valgtPeriode.aksjonspunkter)) {
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
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
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

  const initialValues = useMemo(() => buildInitialValues(valgtPeriode, aksjonspunkter, medlemskap.medlemskapPerioder),
    [valgtPeriode, aksjonspunkter, soknad, medlemskap.medlemskapPerioder]);

  const formMethods = useForm<FormValues>({
    defaultValues: initialValues,
  });

  const avbryt = useCallback(() => {
    formMethods.reset(initialValues);
    setValgtPeriode();
  }, []);

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
          <Element>
            <FormattedMessage id="OppholdInntektOgPeriodeForm.Periode" values={{ dato: moment(valgtPeriode.vurderingsdato).format(DDMMYYYY_DATE_FORMAT) }} />
          </Element>
        )}
        <OppholdINorgeOgAdresserFaktaPanel
          valgtPeriode={valgtPeriode}
          aksjonspunkter={aksjonspunkter}
          soknad={soknad}
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
        {(hasAksjonspunkt(AVKLAR_OPPHOLDSRETT, valgtPeriode.aksjonspunkter) || hasAksjonspunkt(AVKLAR_LOVLIG_OPPHOLD, valgtPeriode.aksjonspunkter)) && (
        <StatusForBorgerFaktaPanel
          valgtPeriode={valgtPeriode}
          aksjonspunkter={aksjonspunkter}
          readOnly={readOnly}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        />
        )}
        <VerticalSpacer twentyPx />
        {valgtPeriode.aksjonspunkter && valgtPeriode.aksjonspunkter.length > 0 && (
        <FaktaBegrunnelseTextFieldNew
          isReadOnly={readOnly}
          isSubmittable={submittable}
          hasBegrunnelse={!!initialValues.begrunnelse}
        />
        )}
        <VerticalSpacer twentyPx />
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Hovedknapp
                mini
                htmlType="submit"
                disabled={!formMethods.formState.isDirty || isSubmitting}
                spinner={isSubmitting}
              >
                <FormattedMessage id={lagreEnkeltPeriode ? 'OppholdInntektOgPerioder.Bekreft' : 'OppholdInntektOgPeriode.Oppdater'} />
              </Hovedknapp>
            </FlexColumn>
            {!lagreEnkeltPeriode && (
            <FlexColumn>
              <Knapp
                htmlType="button"
                mini
                onClick={avbryt}
              >
                <FormattedMessage id="OppholdInntektOgPeriode.Avbryt" />
              </Knapp>
            </FlexColumn>
            )}
          </FlexRow>
        </FlexContainer>
      </div>
    </Form>
  );
};

export default OppholdInntektOgPeriodeForm;
