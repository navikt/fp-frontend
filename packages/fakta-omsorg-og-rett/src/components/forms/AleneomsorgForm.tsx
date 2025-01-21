import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextFieldNew, FaktaSubmitButtonNew, TrueFalseInput } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Ytelsefordeling } from '@navikt/fp-types';
import { BekreftAleneomsorgVurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import { HarAnnenForelderRettFelter } from './HarAnnenForelderRettFelter';

export type FormValues = {
  harAleneomsorg: boolean;
  harAnnenForelderRett?: boolean;
  mottarAnnenForelderUforetrygd?: boolean;
  harAnnenForelderRettEØS?: boolean;
  begrunnelse: string;
};

interface Props {
  ytelsefordeling: Ytelsefordeling;
  aksjonspunkt: Aksjonspunkt;
  readOnly: boolean;
  submittable: boolean;
  submitCallback: (aksjonspunktData: BekreftAleneomsorgVurderingAp) => Promise<void>;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

export const AleneomsorgForm = ({
  ytelsefordeling,
  aksjonspunkt,
  readOnly,
  submitCallback,
  submittable,
  formData,
  setFormData,
  alleMerknaderFraBeslutter,
}: Props) => {
  const { bekreftetAnnenforelderRett, bekreftetAnnenforelderUføretrygd, bekreftetAnnenForelderRettEØS } =
    ytelsefordeling.rettigheterAnnenforelder ?? {};

  const formMethods = useForm<FormValues>({
    defaultValues: formData || {
      harAleneomsorg: ytelsefordeling.bekreftetAleneomsorg,
      harAnnenForelderRett: bekreftetAnnenforelderRett,
      mottarAnnenForelderUforetrygd: bekreftetAnnenforelderUføretrygd,
      harAnnenForelderRettEØS: bekreftetAnnenForelderRettEØS,
      ...FaktaBegrunnelseTextFieldNew.initialValues(aksjonspunkt),
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
        ...FaktaBegrunnelseTextFieldNew.transformValues(feltVerdier),
      }),
    [],
  );

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

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
            readOnly={readOnly}
            trueLabel={<FormattedMessage id="AleneomsorgForm.HarAleneomsorg" />}
            falseLabel={<FormattedMessage id="AleneomsorgForm.HarIkkeAleneomsorg" values={{ b: bTag }} />}
            falseContent={
              <HarAnnenForelderRettFelter readOnly={readOnly} avklareUforetrygd={true} avklareRettEØS={true} />
            }
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
