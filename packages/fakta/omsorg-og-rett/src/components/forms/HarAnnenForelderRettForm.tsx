import { type DefaultValues, useForm } from 'react-hook-form';

import { VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, OmsorgOgRett } from '@navikt/fp-types';
import type { AvklarAnnenforelderHarRettAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { HarAnnenForelderRettFelter } from './HarAnnenForelderRettFelter';

type FormValues = {
  harAnnenForelderRett: boolean;
  mottarAnnenForelderUforetrygd?: boolean;
  harAnnenForelderRettEØS?: boolean;
} & FaktaBegrunnelseFormValues;

interface Props {
  omsorgOgRett: OmsorgOgRett;
  aksjonspunkt?: Aksjonspunkt;
  isSubmittable: boolean;
}

export const HarAnnenForelderRettForm = ({ omsorgOgRett, aksjonspunkt, isSubmittable }: Props) => {
  const { submitCallback, isReadOnly, alleMerknaderFraBeslutter } = usePanelDataContext<AvklarAnnenforelderHarRettAp>();

  const harUføretrygd = omsorgOgRett.manuellBehandlingResultat?.annenpartRettighet?.harUføretrygd ?? undefined;

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();
  const readOnly = isReadOnly || aksjonspunkt === undefined;

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(omsorgOgRett, aksjonspunkt),
  });

  const skalAvklareUforetrygd = omsorgOgRett.relasjonsRolleType !== 'MORA' || harUføretrygd === 'JA';

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={values => submitCallback(transformValues(values))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <FaktaGruppe
        withoutBorder
        merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.AVKLAR_FAKTA_ANNEN_FORELDER_HAR_RETT]}
      >
        <VStack gap="space-24">
          <HarAnnenForelderRettFelter readOnly={readOnly} avklareUforetrygd={skalAvklareUforetrygd} />

          <FaktaBegrunnelseTextField
            control={formMethods.control}
            isSubmittable={isSubmittable}
            isReadOnly={readOnly}
            hasBegrunnelse={true}
            hasVurderingText
          />
          <FaktaSubmitButton
            isSubmittable={isSubmittable}
            isReadOnly={readOnly}
            isSubmitting={formMethods.formState.isSubmitting}
            isDirty={formMethods.formState.isDirty}
          />
        </VStack>
      </FaktaGruppe>
    </RhfForm>
  );
};

const buildInitialValues = (omsorgOgRett: OmsorgOgRett, aksjonspunkt?: Aksjonspunkt): DefaultValues<FormValues> => {
  const harRettNorge = omsorgOgRett.manuellBehandlingResultat?.annenpartRettighet?.harRettNorge ?? undefined;
  const harRettEØS = omsorgOgRett.manuellBehandlingResultat?.annenpartRettighet?.harRettEØS ?? undefined;
  const harUføretrygd = omsorgOgRett.manuellBehandlingResultat?.annenpartRettighet?.harUføretrygd ?? undefined;
  return {
    harAnnenForelderRett: harRettNorge === undefined ? undefined : harRettNorge === 'JA',
    mottarAnnenForelderUforetrygd: harUføretrygd === undefined ? undefined : harUføretrygd === 'JA',
    harAnnenForelderRettEØS: harRettEØS === undefined ? undefined : harRettEØS === 'JA',
    ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
  };
};

const transformValues = (values: FormValues): AvklarAnnenforelderHarRettAp => ({
  kode: AksjonspunktKode.AVKLAR_FAKTA_ANNEN_FORELDER_HAR_RETT,
  annenforelderHarRett: values.harAnnenForelderRett,
  annenforelderMottarUføretrygd: values.mottarAnnenForelderUforetrygd,
  annenForelderHarRettEØS: values.harAnnenForelderRettEØS,
  ...FaktaBegrunnelseTextField.transformValues(values),
});
