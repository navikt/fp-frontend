import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import type {
  AdopsjonFamilieHendelse,
  Aksjonspunkt,
  Personoversikt,
  RelatertTilgrensedYtelse,
  Soknad,
} from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import type { AksjonpunktSubmitType } from '../types/AksjonpunktSubmitType';
import type { OmsorgOgForeldreansvarFormValues } from '../types/OmsorgOgForeldreansvarFormValues';
import { OmsorgOgForeldreansvarFaktaForm } from './OmsorgOgForeldreansvarFaktaForm';

type FormValues = OmsorgOgForeldreansvarFormValues & FaktaBegrunnelseFormValues;

interface Props {
  soknad: Soknad;
  personoversikt: Personoversikt;
  adopsjon: AdopsjonFamilieHendelse;
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[];
}

export const OmsorgOgForeldreansvarInfoPanel = ({
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder,
  soknad,
  adopsjon,
  personoversikt,
}: Props) => {
  const intl = useIntl();

  const { aksjonspunkterForPanel, harÅpentAksjonspunkt, submitCallback, isSubmittable, isReadOnly, alleKodeverk } =
    usePanelDataContext<AksjonpunktSubmitType>();

  const formMethods = useForm<FormValues>({
    defaultValues: buildInitialValues(adopsjon, aksjonspunkterForPanel),
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  const erAksjonspunktForeldreansvar = hasAksjonspunkt(
    AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR,
    aksjonspunkterForPanel,
  );

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, aksjonspunkterForPanel[0]))}
    >
      <VStack gap="space-20">
        {!isReadOnly && harÅpentAksjonspunkt && (
          <AksjonspunktHelpTextHTML>
            <FormattedMessage
              id={
                erAksjonspunktForeldreansvar
                  ? 'OmsorgOgForeldreansvarInfoPanel.CheckInformationForeldreansvar'
                  : 'OmsorgOgForeldreansvarInfoPanel.CheckInformationOmsorgsovertakelse'
              }
            />
          </AksjonspunktHelpTextHTML>
        )}
        <OmsorgOgForeldreansvarFaktaForm
          erAksjonspunktForeldreansvar={erAksjonspunktForeldreansvar}
          readOnly={isReadOnly}
          vilkarTypes={alleKodeverk['OmsorgsovertakelseVilkårType']}
          soknad={soknad}
          adopsjon={adopsjon}
          personoversikt={personoversikt}
          innvilgetRelatertTilgrensendeYtelserForAnnenForelder={innvilgetRelatertTilgrensendeYtelserForAnnenForelder}
        />
        <FaktaBegrunnelseTextField
          control={formMethods.control}
          isSubmittable={isSubmittable}
          isReadOnly={isReadOnly}
          hasBegrunnelse={!!begrunnelse}
          label={intl.formatMessage({
            id: erAksjonspunktForeldreansvar
              ? 'OmsorgOgForeldreansvarInfoPanel.BegrunnelseTitleFp'
              : 'OmsorgOgForeldreansvarInfoPanel.BegrunnelseTitleEs',
          })}
        />
        <FaktaSubmitButton
          isSubmittable={isSubmittable}
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={formMethods.formState.isDirty}
          isReadOnly={isReadOnly}
        />
      </VStack>
    </RhfForm>
  );
};

const transformValues = (values: FormValues, aksjonspunkt: Aksjonspunkt): AksjonpunktSubmitType => ({
  ...OmsorgOgForeldreansvarFaktaForm.transformValues(values, aksjonspunkt),
  ...FaktaBegrunnelseTextField.transformValues(values),
});

const buildInitialValues = (adopsjon: AdopsjonFamilieHendelse, aksjonspunkterForPanel: Aksjonspunkt[]): FormValues => ({
  ...OmsorgOgForeldreansvarFaktaForm.buildInitialValues(adopsjon),
  ...FaktaBegrunnelseTextField.initialValues(aksjonspunkterForPanel),
});
