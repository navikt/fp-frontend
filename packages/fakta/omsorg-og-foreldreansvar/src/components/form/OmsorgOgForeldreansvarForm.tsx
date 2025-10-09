import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfForm } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';

import {
  type FaktaBegrunnelseFormValues,
  FaktaBegrunnelseTextField,
  FaktaSubmitButton,
  isNotEqual,
} from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { type AdopsjonFamilieHendelse, type Aksjonspunkt, type Soknad, søknadErAdopsjon } from '@navikt/fp-types';
import type {
  AvklarFaktaForForeldreansvarAksjonspunktAp,
  AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { FaktaKort } from '@navikt/fp-ui-komponenter';
import { notEmpty, usePanelDataContext } from '@navikt/fp-utils';

import { OmsorgsovertakelseVilkårForm, type OmsorgsovertakelseVilkårFormValues } from './OmsorgsovertakelseVilkårForm';

type FormValues = {
  omsorgsovertakelseDato?: string;
  foreldreansvarDato?: string;
} & OmsorgsovertakelseVilkårFormValues &
  FaktaBegrunnelseFormValues;

type AksjonpunktSubmitType =
  | AvklarFaktaForForeldreansvarAksjonspunktAp
  | AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp;

interface Props {
  søknad: Soknad;
  adopsjon: AdopsjonFamilieHendelse;
  harForeldreansvarAP: boolean;
}

export const OmsorgOgForeldreansvarForm = ({ søknad, adopsjon, harForeldreansvarAP }: Props) => {
  const intl = useIntl();

  const { aksjonspunkterForPanel, alleMerknaderFraBeslutter, submitCallback, isReadOnly, isSubmittable } =
    usePanelDataContext<AksjonpunktSubmitType>();

  const formMethods = useForm<FormValues>({
    defaultValues: buildInitialValues(adopsjon, aksjonspunkterForPanel),
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  return (
    <FaktaKort
      label={intl.formatMessage({
        id: harForeldreansvarAP
          ? 'AksjonspunktForm.Tittel.Foreldreansvar'
          : 'AksjonspunktForm.Tittel.Omsorgsovertakelse',
      })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.AVKLAR_VILKÅR_FOR_OMSORGSOVERTAKELSE]}
    >
      <RhfForm
        formMethods={formMethods}
        onSubmit={(values: FormValues) => submitCallback(transformValues(values, aksjonspunkterForPanel[0]!))}
      >
        <VStack gap="space-16">
          <RhfDatepicker
            name="omsorgsovertakelseDato"
            size="medium"
            control={formMethods.control}
            label={<FormattedMessage id="AksjonspunktForm.Omsorgsovertakelsesdato" />}
            validate={[required, hasValidDate]}
            isReadOnly={isReadOnly}
            isEdited={isNotEqual(finnOmsorgsovertakelseDato(søknad), adopsjon.omsorgsovertakelseDato)}
          />

          {harForeldreansvarAP ? (
            <RhfDatepicker
              name="foreldreansvarDato"
              size="medium"
              control={formMethods.control}
              label={<FormattedMessage id="AksjonspunktForm.Foreldreansvarsdato" />}
              validate={[required, hasValidDate]}
              isReadOnly={isReadOnly}
            />
          ) : (
            <OmsorgsovertakelseVilkårForm adopsjon={adopsjon} />
          )}

          <FaktaBegrunnelseTextField
            control={formMethods.control}
            isSubmittable={isSubmittable}
            size="medium"
            isReadOnly={isReadOnly}
            hasBegrunnelse={!!begrunnelse}
          />

          <FaktaSubmitButton
            isSubmittable={isSubmittable}
            isSubmitting={formMethods.formState.isSubmitting}
            isDirty={formMethods.formState.isDirty}
            isReadOnly={isReadOnly}
          />
        </VStack>
      </RhfForm>
    </FaktaKort>
  );
};

const buildInitialValues = (adopsjon: AdopsjonFamilieHendelse, aksjonspunkterForPanel: Aksjonspunkt[]): FormValues => ({
  vilkarType: adopsjon.omsorgsovertakelseVilkårType,
  omsorgsovertakelseDato: adopsjon.omsorgsovertakelseDato,
  foreldreansvarDato: adopsjon.foreldreansvarDato,
  ...FaktaBegrunnelseTextField.initialValues(aksjonspunkterForPanel),
});

const transformValues = (values: FormValues, aksjonspunkt: Aksjonspunkt): AksjonpunktSubmitType =>
  aksjonspunkt.definisjon === AksjonspunktKode.AVKLAR_VILKÅR_FOR_FORELDREANSVAR
    ? {
        omsorgsovertakelseDato: notEmpty(values.omsorgsovertakelseDato),
        foreldreansvarDato: notEmpty(values.foreldreansvarDato),
        kode: AksjonspunktKode.AVKLAR_VILKÅR_FOR_FORELDREANSVAR,
        ...FaktaBegrunnelseTextField.transformValues(values),
      }
    : {
        omsorgsovertakelseDato: notEmpty(values.omsorgsovertakelseDato),
        vilkarType: notEmpty(values.vilkarType),
        kode: AksjonspunktKode.AVKLAR_VILKÅR_FOR_OMSORGSOVERTAKELSE,
        ...FaktaBegrunnelseTextField.transformValues(values),
      };

const finnOmsorgsovertakelseDato = (søknad: Soknad) => {
  if (søknadErAdopsjon(søknad)) {
    return søknad.omsorgsovertakelseDato ?? undefined;
  }

  return undefined;
};
