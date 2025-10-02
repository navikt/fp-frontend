import { useForm } from 'react-hook-form';

import { VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { type Aksjonspunkt, type OmsorgOgRett } from '@navikt/fp-types';
import type { AvklarAnnenforelderHarRettAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { HarAnnenForelderRettFelter } from './HarAnnenForelderRettFelter';

type FormValues = {
  harAnnenForelderRett: boolean;
  mottarAnnenForelderUforetrygd?: boolean;
  harAnnenForelderRettEØS?: boolean;
  begrunnelse: string;
};

interface Props {
  omsorgOgRett: OmsorgOgRett;
  aksjonspunkt?: Aksjonspunkt;
  isSubmittable: boolean;
}

export const HarAnnenForelderRettForm = ({ omsorgOgRett, aksjonspunkt, isSubmittable }: Props) => {
  const { submitCallback, isReadOnly, alleMerknaderFraBeslutter } = usePanelDataContext<AvklarAnnenforelderHarRettAp>();

  const harRettNorge = omsorgOgRett.manuellBehandlingResultat?.annenpartRettighet?.harRettNorge ?? undefined;
  const harRettEØS = omsorgOgRett.manuellBehandlingResultat?.annenpartRettighet?.harRettEØS ?? undefined;
  const harUføretrygd = omsorgOgRett.manuellBehandlingResultat?.annenpartRettighet?.harUføretrygd ?? undefined;

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();
  const readOnly = isReadOnly || aksjonspunkt === undefined;

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? {
      harAnnenForelderRett: harRettNorge === undefined ? undefined : harRettNorge === 'JA',
      mottarAnnenForelderUforetrygd: harUføretrygd === undefined ? undefined : harUføretrygd === 'JA',
      harAnnenForelderRettEØS: harRettEØS === undefined ? undefined : harRettEØS === 'JA',
      ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
    },
  });

  const skalAvklareUforetrygd = omsorgOgRett.relasjonsRolleType !== 'MORA' || harUføretrygd === 'JA';

  const transformerFeltverdier = (feltVerdier: FormValues) =>
    submitCallback({
      kode: AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT,
      annenforelderHarRett: feltVerdier.harAnnenForelderRett,
      annenforelderMottarUføretrygd: feltVerdier.mottarAnnenForelderUforetrygd,
      annenForelderHarRettEØS: feltVerdier.harAnnenForelderRettEØS,
      ...FaktaBegrunnelseTextField.transformValues(feltVerdier),
    });

  return (
    <RhfForm formMethods={formMethods} onSubmit={transformerFeltverdier} setDataOnUnmount={setMellomlagretFormData}>
      <FaktaGruppe
        withoutBorder
        merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT]}
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
