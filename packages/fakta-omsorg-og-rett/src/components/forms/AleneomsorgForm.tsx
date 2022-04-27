import React, { FunctionComponent, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Hovedknapp } from 'nav-frontend-knapper';
import {
  RadioGroupField, RadioOption, Form, TextAreaField,
} from '@navikt/ft-form-hooks';
import {
  decodeHtmlEntity,
  hasValidText, maxLength, minLength, required,
} from '@navikt/ft-utils';
import { Element } from 'nav-frontend-typografi';
import { FaktaGruppe, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { BekreftAleneomsorgVurderingAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt, Soknad, Ytelsefordeling } from '@fpsak-frontend/types';

import Boks from '../Boks';
import HarAnnenForelderRettFelter from './HarAnnenForelderRettFelter';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

export type FormValues = {
  harAleneomsorg: boolean;
  harAnnenForelderRett?: boolean;
  mottarAnnenForelderUforetrygd?: boolean;
  begrunnelse: string;
}

interface OwnProps {
  ytelsefordeling: Ytelsefordeling;
  soknad: Soknad;
  aksjonspunkt: Aksjonspunkt;
  readOnly: boolean;
  lagreCallback: (aksjonspunktData: BekreftAleneomsorgVurderingAp) => Promise<void>;
  formData?: FormValues,
  setFormData: (data: FormValues) => void,
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

const AleneomsorgForm: FunctionComponent<OwnProps> = ({
  ytelsefordeling,
  soknad,
  aksjonspunkt,
  readOnly,
  lagreCallback,
  formData,
  setFormData,
  alleMerknaderFraBeslutter,
}) => {
  const formMethods = useForm<FormValues>({
    defaultValues: formData || {
      harAleneomsorg: ytelsefordeling.aleneOmsorgPerioder && ytelsefordeling.aleneOmsorgPerioder.length > 0,
      harAnnenForelderRett: ytelsefordeling?.annenforelderHarRettDto?.annenforelderHarRett,
      mottarAnnenForelderUforetrygd: ytelsefordeling?.annenforelderHarRettDto?.annenforelderMottarUføretrygd,
      begrunnelse: aksjonspunkt.begrunnelse ? decodeHtmlEntity(aksjonspunkt.begrunnelse) : undefined,
    },
  });

  const harAleneomsorg = formMethods.watch('harAleneomsorg');

  const transformerFeltverdier = useCallback((feltVerdier: FormValues) => lagreCallback({
    kode: AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
    aleneomsorg: feltVerdier.harAleneomsorg,
    annenforelderHarRett: feltVerdier.harAnnenForelderRett,
    annenforelderMottarUføretrygd: feltVerdier.mottarAnnenForelderUforetrygd,
    begrunnelse: feltVerdier.begrunnelse,
  }), []);

  return (
    <Form formMethods={formMethods} onSubmit={transformerFeltverdier} setDataOnUnmount={setFormData}>
      <Boks harBorderTop={false}>
        <VerticalSpacer thirtyTwoPx />
        <FaktaGruppe
          withoutBorder
          merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG]}
        >
          <RadioGroupField
            name="harAleneomsorg"
            label={(
              <Element>
                <FormattedMessage
                  id={soknad.oppgittRettighet.aleneomsorgForBarnet ? 'AleneomsorgForm.Aleneomsorg' : 'AleneomsorgForm.OppgittIkkeAleneomsorg'}
                />
              </Element>
            )}
            validate={[required]}
            bredde="XL"
            readOnly={readOnly}
            parse={(value: string) => value === 'true'}
            direction="vertical"
          >
            <RadioOption value="true" label={<FormattedMessage id="AleneomsorgForm.HarAleneomsorg" />} />
            <RadioOption
              value="false"
              label={(
                <FormattedMessage
                  id="AleneomsorgForm.HarIkkeAleneomsorg"
                  values={{
                    b: (chunks: any) => <b>{chunks}</b>,
                  }}
                />
              )}
            />
          </RadioGroupField>
          {harAleneomsorg === false && (
            <>
              <VerticalSpacer thirtyTwoPx />
              <HarAnnenForelderRettFelter readOnly={readOnly} />
            </>
          )}
          <VerticalSpacer thirtyTwoPx />
          <TextAreaField
            label={<Element><FormattedMessage id="AleneomsorgForm.Begrunn" /></Element>}
            name="begrunnelse"
            validate={[required, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={readOnly}
          />
          <VerticalSpacer sixteenPx />
          {!readOnly && (
            <Hovedknapp
              mini
              disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting}
              spinner={formMethods.formState.isSubmitting}
            >
              <FormattedMessage id="AleneomsorgForm.Bekreft" />
            </Hovedknapp>
          )}
        </FaktaGruppe>
      </Boks>
    </Form>
  );
};

export default AleneomsorgForm;
