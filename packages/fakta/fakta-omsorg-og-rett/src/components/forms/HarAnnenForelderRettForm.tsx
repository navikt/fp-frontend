import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, RelasjonsRolleType } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, OmsorgOgRett } from '@navikt/fp-types';
import type { AvklarAnnenforelderHarRettAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData, usePanelDataContext } from '@navikt/fp-utils';

import { HarAnnenForelderRettFelter } from './HarAnnenForelderRettFelter';

export type FormValues = {
  harAnnenForelderRett: boolean;
  mottarAnnenForelderUforetrygd?: boolean;
  harAnnenForelderRettEØS?: boolean;
  begrunnelse: string;
};

interface Props {
  omsorgOgRett: OmsorgOgRett;
  aksjonspunkt?: Aksjonspunkt;
  submittable: boolean;
}

export const HarAnnenForelderRettForm = ({ omsorgOgRett, aksjonspunkt, submittable }: Props) => {
  const { submitCallback, isReadOnly, alleMerknaderFraBeslutter } = usePanelDataContext<AvklarAnnenforelderHarRettAp>();

  const { harRettNorge, harRettEØS, harUføretrygd } = omsorgOgRett.manuellBehandlingResultat?.annenpartRettighet ?? {};

  const { formData, setFormData } = useFormData<FormValues>();
  const isReadOnlyOrApIsNull = isReadOnly || aksjonspunkt === undefined;

  const formMethods = useForm<FormValues>({
    defaultValues: formData || {
      harAnnenForelderRett: harRettNorge,
      mottarAnnenForelderUforetrygd: harUføretrygd,
      harAnnenForelderRettEØS: harRettEØS,
      ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
    },
  });

  const skalAvklareUforetrygd = !!(omsorgOgRett.relasjonsRolleType !== RelasjonsRolleType.MOR || harUføretrygd);

  const transformerFeltverdier = useCallback(
    (feltVerdier: FormValues) =>
      submitCallback({
        kode: AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT,
        annenforelderHarRett: feltVerdier.harAnnenForelderRett,
        annenforelderMottarUføretrygd: feltVerdier.mottarAnnenForelderUforetrygd,
        annenForelderHarRettEØS: feltVerdier.harAnnenForelderRettEØS,
        ...FaktaBegrunnelseTextField.transformValues(feltVerdier),
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
          <HarAnnenForelderRettFelter readOnly={isReadOnlyOrApIsNull} avklareUforetrygd={skalAvklareUforetrygd} />

          <FaktaBegrunnelseTextField
            isSubmittable={submittable}
            isReadOnly={isReadOnlyOrApIsNull}
            hasBegrunnelse={true}
            hasVurderingText
          />

          <div>
            <FaktaSubmitButton
              isSubmittable={submittable}
              isReadOnly={isReadOnlyOrApIsNull}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          </div>
        </VStack>
      </FaktaGruppe>
    </Form>
  );
};
