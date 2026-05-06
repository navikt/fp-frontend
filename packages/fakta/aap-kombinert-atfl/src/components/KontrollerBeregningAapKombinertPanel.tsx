import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktBoks, AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt } from '@navikt/fp-types';
import type { ManuellKontrollAapKombinertAtflAP } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

type FormValues = {
  begrunnelse: string | undefined;
  erBeregningenKorrekt: boolean;
};

interface Props {
  aksjonspunkt: Aksjonspunkt;
}

export const KontrollerBeregningAapKombinertPanel = ({ aksjonspunkt }: Props) => {
  const intl = useIntl();
  const { submitCallback, isSubmittable, isReadOnly } = usePanelDataContext<ManuellKontrollAapKombinertAtflAP>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(aksjonspunkt),
  });
  const begrunnelse = formMethods.watch('begrunnelse');

  return (
    <VStack gap="space-16">
      {aksjonspunkt.status === 'OPPR' && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="AapKombinertAtfl.Aksjonspunkt.HelpText" />
        </AksjonspunktHelpTextHTML>
      )}
      <AksjonspunktBoks
        tittel={intl.formatMessage({ id: 'AapKombinertAtfl.Aksjonspunkt.Tittel' })}
        aksjonspunkt={aksjonspunkt}
      >
        <RhfForm
          formMethods={formMethods}
          onSubmit={values => submitCallback(transformValues(values))}
          setDataOnUnmount={setMellomlagretFormData}
        >
          <VStack gap="space-16">
            <RhfCheckbox
              name="erBeregningenKorrekt"
              control={formMethods.control}
              label={<FormattedMessage id="AapKombinertAtfl.Aksjonspunkt.Bekreft" />}
              readOnly={isReadOnly}
              validate={[
                (value) =>
                  value ? null : intl.formatMessage({ id: 'AapKombinertAtfl.Aksjonspunkt.BekreftError' }),
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
  const erAPLøst = aksjonspunkt.status === 'UTFO';
  return {
    ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
    erBeregningenKorrekt: erAPLøst ? true : false,
  };
};

const transformValues = (values: FormValues): ManuellKontrollAapKombinertAtflAP => ({
  kode: AksjonspunktKode.MANUELL_KONTROLL_AAP_KOMBINERT_ATFL,
  begrunnelse: values.begrunnelse,
});
