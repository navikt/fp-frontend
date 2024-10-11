import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Button, Label, VStack } from '@navikt/ds-react';
import { Form, TextAreaField } from '@navikt/ft-form-hooks';
import { decodeHtmlEntity } from '@navikt/ft-utils';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { Aksjonspunkt } from '@navikt/ft-types';
import { Ytelsefordeling } from '@navikt/fp-types';
import { AvklarAnnenforelderHarRettAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import { HarAnnenForelderRettFelter } from './HarAnnenForelderRettFelter';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

export type FormValues = {
  harAnnenForelderRett: boolean;
  mottarAnnenForelderUforetrygd?: boolean;
  harAnnenForelderRettEØS?: boolean;
  begrunnelse: string;
};

interface Props {
  ytelsefordeling: Ytelsefordeling;
  aksjonspunkt: Aksjonspunkt;
  readOnly: boolean;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
  submitCallback: (aksjonspunktData: AvklarAnnenforelderHarRettAp) => Promise<void>;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

export const HarAnnenForelderRettForm = ({
  ytelsefordeling,
  readOnly,
  aksjonspunkt,
  formData,
  setFormData,
  submitCallback,
  alleMerknaderFraBeslutter,
}: Props) => {
  const formMethods = useForm<FormValues>({
    defaultValues: formData || {
      harAnnenForelderRett: ytelsefordeling?.rettigheterAnnenforelder?.bekreftetAnnenforelderRett,
      mottarAnnenForelderUforetrygd: ytelsefordeling?.rettigheterAnnenforelder?.bekreftetAnnenforelderUføretrygd,
      harAnnenForelderRettEØS: ytelsefordeling?.rettigheterAnnenforelder?.bekreftetAnnenForelderRettEØS,
      begrunnelse: aksjonspunkt.begrunnelse ? decodeHtmlEntity(aksjonspunkt.begrunnelse) : undefined,
    },
  });

  const skalAvklareUforetrygd =
    ytelsefordeling?.rettigheterAnnenforelder?.skalAvklareAnnenforelderUføretrygd ||
    ytelsefordeling?.rettigheterAnnenforelder?.bekreftetAnnenforelderUføretrygd !== null;
  const skalAvklareRettEØS =
    ytelsefordeling?.rettigheterAnnenforelder?.skalAvklareAnnenForelderRettEØS ||
    ytelsefordeling?.rettigheterAnnenforelder?.bekreftetAnnenForelderRettEØS !== null;

  const transformerFeltverdier = useCallback(
    (feltVerdier: FormValues) =>
      submitCallback({
        kode: AksjonspunktCode.AVKLAR_ANNEN_FORELDER_RETT,
        annenforelderHarRett: feltVerdier.harAnnenForelderRett,
        annenforelderMottarUføretrygd: feltVerdier.mottarAnnenForelderUforetrygd,
        annenForelderHarRettEØS: feltVerdier.harAnnenForelderRettEØS,
        begrunnelse: feltVerdier.begrunnelse,
      }),
    [],
  );

  return (
    <Form formMethods={formMethods} onSubmit={transformerFeltverdier} setDataOnUnmount={setFormData}>
      <FaktaGruppe
        withoutBorder
        merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktCode.AVKLAR_ANNEN_FORELDER_RETT]}
      >
        <VStack gap="6">
          <HarAnnenForelderRettFelter
            readOnly={readOnly}
            avklareUforetrygd={skalAvklareUforetrygd}
            avklareRettEØS={skalAvklareRettEØS}
          />
          <TextAreaField
            label={
              <Label size="small">
                <FormattedMessage id="HarAnnenForelderRettForm.Begrunn" />
              </Label>
            }
            name="begrunnelse"
            validate={[required, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={readOnly}
          />
          {!readOnly && (
            <div>
              <Button
                size="small"
                variant="primary"
                disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting}
                loading={formMethods.formState.isSubmitting}
              >
                <FormattedMessage id="HarAnnenForelderRettForm.Bekreft" />
              </Button>
            </div>
          )}
        </VStack>
      </FaktaGruppe>
    </Form>
  );
};
