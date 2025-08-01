import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { BTag } from '@navikt/ft-utils';

import { FaktaBegrunnelseTextField, FaktaSubmitButton, TrueFalseInput } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, RelasjonsRolleType } from '@navikt/fp-kodeverk';
import { type Aksjonspunkt, type OmsorgOgRett, Verdi } from '@navikt/fp-types';
import type { BekreftAleneomsorgVurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { HarAnnenForelderRettFelter } from './HarAnnenForelderRettFelter';

type FormValues = {
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

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();
  const isReadOnlyOrApIsNull = isReadOnly || aksjonspunkt === undefined;

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? {
      harAleneomsorg: harAleneomsorg === undefined ? undefined : harAleneomsorg === Verdi.JA,
      harAnnenForelderRett: harRettNorge === undefined ? undefined : harRettNorge === Verdi.JA,
      harAnnenForelderRettEØS: harRettEØS === undefined ? undefined : harRettEØS === Verdi.JA,
      mottarAnnenForelderUforetrygd: harUføretrygd === undefined ? undefined : harUføretrygd === Verdi.JA,
      ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
    },
  });

  const transformerFeltverdier = (feltVerdier: FormValues) =>
    submitCallback({
      kode: AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
      aleneomsorg: feltVerdier.harAleneomsorg,
      annenforelderHarRett: feltVerdier.harAnnenForelderRett,
      annenforelderMottarUføretrygd: feltVerdier.mottarAnnenForelderUforetrygd,
      annenForelderHarRettEØS: feltVerdier.harAnnenForelderRettEØS,
      ...FaktaBegrunnelseTextField.transformValues(feltVerdier),
    });

  const skalAvklareUforetrygd =
    omsorgOgRett.relasjonsRolleType !== RelasjonsRolleType.MOR || harUføretrygd === Verdi.JA;

  return (
    <RhfForm formMethods={formMethods} onSubmit={transformerFeltverdier} setDataOnUnmount={setMellomlagretFormData}>
      <FaktaGruppe
        withoutBorder
        merknaderFraBeslutter={
          alleMerknaderFraBeslutter[AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG]
        }
      >
        <VStack gap="6">
          <TrueFalseInput
            name="harAleneomsorg"
            control={formMethods.control}
            label={<FormattedMessage id="AleneomsorgForm.Aleneomsorg" />}
            readOnly={isReadOnlyOrApIsNull}
            trueLabel={<FormattedMessage id="AleneomsorgForm.HarAleneomsorg" />}
            falseLabel={<FormattedMessage id="AleneomsorgForm.HarIkkeAleneomsorg" values={{ b: BTag }} />}
            falseContent={
              <HarAnnenForelderRettFelter readOnly={isReadOnlyOrApIsNull} avklareUforetrygd={skalAvklareUforetrygd} />
            }
          />

          <FaktaBegrunnelseTextField
            control={formMethods.control}
            isSubmittable={submittable}
            isReadOnly={isReadOnlyOrApIsNull}
            hasBegrunnelse={true}
            hasVurderingText
          />
          <FaktaSubmitButton
            isSubmittable={submittable}
            isReadOnly={isReadOnlyOrApIsNull}
            isSubmitting={formMethods.formState.isSubmitting}
            isDirty={formMethods.formState.isDirty}
          />
        </VStack>
      </FaktaGruppe>
    </RhfForm>
  );
};
