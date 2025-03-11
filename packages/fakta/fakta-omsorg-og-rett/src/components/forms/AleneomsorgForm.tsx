import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextField, FaktaSubmitButton, TrueFalseInput } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, RelasjonsRolleType } from '@navikt/fp-kodeverk';
import { type Aksjonspunkt, type OmsorgOgRett, Verdi } from '@navikt/fp-types';
import type { BekreftAleneomsorgVurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData, usePanelDataContext } from '@navikt/fp-utils';

import { HarAnnenForelderRettFelter } from './HarAnnenForelderRettFelter';

export type FormValues = {
  harAleneomsorg: boolean;
  harAnnenForelderRett?: boolean;
  mottarAnnenForelderUforetrygd?: boolean;
  harAnnenForelderRettEØS?: boolean;
  begrunnelse: string;
};

interface Props {
  omsorgOgRett: OmsorgOgRett;
  aksjonspunkt?: Aksjonspunkt;
  submittable: boolean;
}

export const AleneomsorgForm = ({ omsorgOgRett, aksjonspunkt, submittable }: Props) => {
  const { submitCallback, isReadOnly, alleMerknaderFraBeslutter } =
    usePanelDataContext<BekreftAleneomsorgVurderingAp>();
  const harAleneomsorg = omsorgOgRett.manuellBehandlingResultat?.søkerHarAleneomsorg ?? undefined;
  const harRettNorge = omsorgOgRett.manuellBehandlingResultat?.annenpartRettighet?.harRettNorge ?? undefined;
  const harRettEØS = omsorgOgRett.manuellBehandlingResultat?.annenpartRettighet?.harRettEØS ?? undefined;
  const harUføretrygd = omsorgOgRett.manuellBehandlingResultat?.annenpartRettighet?.harUføretrygd ?? undefined;

  const { formData, setFormData } = useFormData<FormValues>();
  const isReadOnlyOrApIsNull = isReadOnly || aksjonspunkt === undefined;

  const formMethods = useForm<FormValues>({
    defaultValues: formData || {
      harAleneomsorg: harAleneomsorg === undefined ? undefined : harAleneomsorg === Verdi.JA,
      harAnnenForelderRett: harRettNorge === undefined ? undefined : harRettNorge === Verdi.JA,
      harAnnenForelderRettEØS: harRettEØS === undefined ? undefined : harRettEØS === Verdi.JA,
      mottarAnnenForelderUforetrygd: harUføretrygd === undefined ? undefined : harUføretrygd === Verdi.JA,
      ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
    },
  });

  const transformerFeltverdier = useCallback(
    (feltVerdier: FormValues) =>
      submitCallback({
        kode: AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
        aleneomsorg: feltVerdier.harAleneomsorg,
        annenforelderHarRett: feltVerdier.harAnnenForelderRett,
        annenforelderMottarUføretrygd: feltVerdier.mottarAnnenForelderUforetrygd,
        annenForelderHarRettEØS: feltVerdier.harAnnenForelderRettEØS,
        ...FaktaBegrunnelseTextField.transformValues(feltVerdier),
      }),
    [],
  );

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

  const skalAvklareUforetrygd =
    omsorgOgRett.relasjonsRolleType !== RelasjonsRolleType.MOR || harUføretrygd === Verdi.JA;

  return (
    <Form formMethods={formMethods} onSubmit={transformerFeltverdier} setDataOnUnmount={setFormData}>
      <FaktaGruppe
        withoutBorder
        merknaderFraBeslutter={
          alleMerknaderFraBeslutter[AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG]
        }
      >
        <VStack gap="6">
          <TrueFalseInput
            name="harAleneomsorg"
            label={<FormattedMessage id="AleneomsorgForm.Aleneomsorg" />}
            readOnly={isReadOnlyOrApIsNull}
            trueLabel={<FormattedMessage id="AleneomsorgForm.HarAleneomsorg" />}
            falseLabel={<FormattedMessage id="AleneomsorgForm.HarIkkeAleneomsorg" values={{ b: bTag }} />}
            falseContent={
              <HarAnnenForelderRettFelter readOnly={isReadOnlyOrApIsNull} avklareUforetrygd={skalAvklareUforetrygd} />
            }
          />

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
