import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextFieldNew, FaktaSubmitButtonNew } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Ytelsefordeling } from '@navikt/fp-types';
import { AvklarAnnenforelderHarRettAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import { HarAnnenForelderRettFelter } from './HarAnnenForelderRettFelter';

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
  submittable: boolean;
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
  submittable,
  submitCallback,
  alleMerknaderFraBeslutter,
}: Props) => {
  const {
    bekreftetAnnenforelderRett,
    bekreftetAnnenforelderUføretrygd,
    bekreftetAnnenForelderRettEØS,
    skalAvklareAnnenForelderRettEØS,
    skalAvklareAnnenforelderUføretrygd,
  } = ytelsefordeling.rettigheterAnnenforelder ?? {};

  const formMethods = useForm<FormValues>({
    defaultValues: formData || {
      harAnnenForelderRett: bekreftetAnnenforelderRett,
      mottarAnnenForelderUforetrygd: bekreftetAnnenforelderUføretrygd,
      harAnnenForelderRettEØS: bekreftetAnnenForelderRettEØS,
      ...FaktaBegrunnelseTextFieldNew.initialValues(aksjonspunkt),
    },
  });

  const skalAvklareUforetrygd = skalAvklareAnnenforelderUføretrygd || bekreftetAnnenforelderUføretrygd !== null;
  const skalAvklareRettEØS = skalAvklareAnnenForelderRettEØS || bekreftetAnnenForelderRettEØS !== null;

  const transformerFeltverdier = useCallback(
    (feltVerdier: FormValues) =>
      submitCallback({
        kode: AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT,
        annenforelderHarRett: feltVerdier.harAnnenForelderRett,
        annenforelderMottarUføretrygd: feltVerdier.mottarAnnenForelderUforetrygd,
        annenForelderHarRettEØS: feltVerdier.harAnnenForelderRettEØS,
        ...FaktaBegrunnelseTextFieldNew.transformValues(feltVerdier),
      }),
    [],
  );

  return (
    <Form formMethods={formMethods} onSubmit={transformerFeltverdier} setDataOnUnmount={setFormData}>
      <FaktaGruppe
        withoutBorder
        merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT]}
      >
        <VStack gap="6">
          <HarAnnenForelderRettFelter
            readOnly={readOnly}
            avklareUforetrygd={skalAvklareUforetrygd}
            avklareRettEØS={skalAvklareRettEØS}
          />

          <FaktaBegrunnelseTextFieldNew
            isSubmittable={submittable}
            isReadOnly={readOnly}
            hasBegrunnelse={true}
            hasVurderingText
          />

          <div>
            <FaktaSubmitButtonNew
              isSubmittable={submittable}
              isReadOnly={readOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          </div>
        </VStack>
      </FaktaGruppe>
    </Form>
  );
};
