import { useForm, useWatch } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktBoks, AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt } from '@navikt/fp-types';
import type { AksjonspunktTilBekreftelse } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

type FormValues = {
  erBeregningenKorrekt: boolean;
} & FaktaBegrunnelseFormValues;

interface Props {
  aksjonspunkt: Aksjonspunkt;
}

export const KontrollerBeregningAapKombinertAtflPanel = ({ aksjonspunkt }: Props) => {
  const intl = useIntl();
  const { submitCallback, isSubmittable, isReadOnly } =
    usePanelDataContext<AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AAP_KOMBINERT_ATFL_KODE>>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(aksjonspunkt),
  });
  const begrunnelse = useWatch({ control: formMethods.control, name: 'begrunnelse' });

  return (
    <VStack gap="space-16">
      {aksjonspunkt.status === 'OPPR' && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="Arbeidsavklaringspenger.Aksjonspunkt.HelpText" />
        </AksjonspunktHelpTextHTML>
      )}
      <AksjonspunktBoks
        tittel={intl.formatMessage({ id: 'Arbeidsavklaringspenger.Aksjonspunkt.Tittel' })}
        aksjonspunkt={aksjonspunkt}
      >
        <RhfForm
          formMethods={formMethods}
          onSubmit={values => submitCallback(transformValues(values))}
          setDataOnUnmount={setMellomlagretFormData}
        >
          <VStack gap="space-16">
            <VStack gap="space-8">
              <BodyShort size="small">
                <FormattedMessage id="Arbeidsavklaringspenger.Aksjonspunkt.Beskrivelse1" />
              </BodyShort>
              <BodyShort size="small">
                <FormattedMessage id="Arbeidsavklaringspenger.Aksjonspunkt.Beskrivelse2" />
              </BodyShort>
            </VStack>
            <RhfCheckbox
              name="erBeregningenKorrekt"
              control={formMethods.control}
              label={<FormattedMessage id="Arbeidsavklaringspenger.Aksjonspunkt.Bekreft" />}
              readOnly={isReadOnly}
              validate={[
                value =>
                  value ? null : intl.formatMessage({ id: 'Arbeidsavklaringspenger.Aksjonspunkt.BekreftError' }),
              ]}
            />
            <FaktaBegrunnelseTextField
              control={formMethods.control}
              isSubmittable={isSubmittable}
              isReadOnly={isReadOnly}
              hasBegrunnelse={!!begrunnelse}
              hasVurderingText
            />
            <FaktaSubmitButton
              isSubmittable={isSubmittable}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
              isReadOnly={isReadOnly}
            />
          </VStack>
        </RhfForm>
      </AksjonspunktBoks>
    </VStack>
  );
};

const buildInitialValues = (aksjonspunkt: Aksjonspunkt): FormValues => {
  const erApLøst = aksjonspunkt.status === 'UTFO';
  return {
    ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
    erBeregningenKorrekt: erApLøst,
  };
};

const transformValues = (
  values: FormValues,
): AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AAP_KOMBINERT_ATFL_KODE> => ({
  kode: AksjonspunktKode.MANUELL_KONTROLL_AAP_KOMBINERT_ATFL_KODE,
  ...FaktaBegrunnelseTextField.transformValues(values),
});
