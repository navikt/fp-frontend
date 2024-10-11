import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Button, Label, VStack } from '@navikt/ds-react';
import { RadioGroupPanel, Form, TextAreaField } from '@navikt/ft-form-hooks';
import { decodeHtmlEntity } from '@navikt/ft-utils';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { BekreftAleneomsorgVurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Ytelsefordeling } from '@navikt/fp-types';

import { HarAnnenForelderRettFelter } from './HarAnnenForelderRettFelter';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

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
  lagreCallback: (aksjonspunktData: BekreftAleneomsorgVurderingAp) => Promise<void>;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

export const AleneomsorgForm = ({
  ytelsefordeling,
  aksjonspunkt,
  readOnly,
  lagreCallback,
  formData,
  setFormData,
  alleMerknaderFraBeslutter,
}: Props) => {
  const formMethods = useForm<FormValues>({
    defaultValues: formData || {
      harAleneomsorg: ytelsefordeling?.bekreftetAleneomsorg,
      harAnnenForelderRett: ytelsefordeling?.rettigheterAnnenforelder?.bekreftetAnnenforelderRett,
      mottarAnnenForelderUforetrygd: ytelsefordeling?.rettigheterAnnenforelder?.bekreftetAnnenforelderUføretrygd,
      harAnnenForelderRettEØS: ytelsefordeling?.rettigheterAnnenforelder?.bekreftetAnnenForelderRettEØS,
      begrunnelse: aksjonspunkt.begrunnelse ? decodeHtmlEntity(aksjonspunkt.begrunnelse) : undefined,
    },
  });

  const harAleneomsorg = formMethods.watch('harAleneomsorg');
  const skalAvklareUforetrygd = true;
  const skalAvklareRettEØS = true;

  const transformerFeltverdier = useCallback(
    (feltVerdier: FormValues) =>
      lagreCallback({
        kode: AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
        aleneomsorg: feltVerdier.harAleneomsorg,
        annenforelderHarRett: feltVerdier.harAnnenForelderRett,
        annenforelderMottarUføretrygd: feltVerdier.mottarAnnenForelderUforetrygd,
        annenForelderHarRettEØS: feltVerdier.harAnnenForelderRettEØS,
        begrunnelse: feltVerdier.begrunnelse,
      }),
    [],
  );

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

  return (
    <Form formMethods={formMethods} onSubmit={transformerFeltverdier} setDataOnUnmount={setFormData}>
      <FaktaGruppe
        withoutBorder
        merknaderFraBeslutter={
          alleMerknaderFraBeslutter[AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG]
        }
      >
        <VStack gap="6">
          <RadioGroupPanel
            name="harAleneomsorg"
            label={<FormattedMessage id="AleneomsorgForm.Aleneomsorg" />}
            validate={[required]}
            isReadOnly={readOnly}
            isTrueOrFalseSelection
            radios={[
              {
                label: <FormattedMessage id="AleneomsorgForm.HarAleneomsorg" />,
                value: 'true',
              },
              {
                label: <FormattedMessage id="AleneomsorgForm.HarIkkeAleneomsorg" values={{ b: bTag }} />,
                value: 'false',
              },
            ]}
          />
          {harAleneomsorg === false && (
            <HarAnnenForelderRettFelter
              readOnly={readOnly}
              avklareUforetrygd={skalAvklareUforetrygd}
              avklareRettEØS={skalAvklareRettEØS}
            />
          )}
          <TextAreaField
            label={
              <Label size="small">
                <FormattedMessage id="AleneomsorgForm.Begrunn" />
              </Label>
            }
            name="begrunnelse"
            validate={[required, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={readOnly}
          />
          {!readOnly && (
            <Button
              size="small"
              variant="primary"
              disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting}
              loading={formMethods.formState.isSubmitting}
            >
              <FormattedMessage id="AleneomsorgForm.Bekreft" />
            </Button>
          )}
        </VStack>
      </FaktaGruppe>
    </Form>
  );
};
