import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, RelasjonsRolleType } from '@navikt/fp-kodeverk';
import { type Aksjonspunkt, type OmsorgOgRett, Verdi } from '@navikt/fp-types';
import type { AvklarAnnenforelderHarRettAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

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

  const harRettNorge = omsorgOgRett.manuellBehandlingResultat?.annenpartRettighet?.harRettNorge ?? undefined;
  const harRettEØS = omsorgOgRett.manuellBehandlingResultat?.annenpartRettighet?.harRettEØS ?? undefined;
  const harUføretrygd = omsorgOgRett.manuellBehandlingResultat?.annenpartRettighet?.harUføretrygd ?? undefined;

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();
  const readOnly = isReadOnly || aksjonspunkt === undefined;

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData || {
      harAnnenForelderRett: harRettNorge === undefined ? undefined : harRettNorge === Verdi.JA,
      mottarAnnenForelderUforetrygd: harUføretrygd === undefined ? undefined : harUføretrygd === Verdi.JA,
      harAnnenForelderRettEØS: harRettEØS === undefined ? undefined : harRettEØS === Verdi.JA,
      ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
    },
  });

  const skalAvklareUforetrygd =
    omsorgOgRett.relasjonsRolleType !== RelasjonsRolleType.MOR || harUføretrygd === Verdi.JA;

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
    <Form formMethods={formMethods} onSubmit={transformerFeltverdier} setDataOnUnmount={setMellomlagretFormData}>
      <FaktaGruppe
        withoutBorder
        merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT]}
      >
        <VStack gap="6">
          <HarAnnenForelderRettFelter readOnly={readOnly} avklareUforetrygd={skalAvklareUforetrygd} />

          <FaktaBegrunnelseTextField
            isSubmittable={submittable}
            isReadOnly={readOnly}
            hasBegrunnelse={true}
            hasVurderingText
          />
          <FaktaSubmitButton
            isSubmittable={submittable}
            isReadOnly={readOnly}
            isSubmitting={formMethods.formState.isSubmitting}
            isDirty={formMethods.formState.isDirty}
          />
        </VStack>
      </FaktaGruppe>
    </Form>
  );
};
