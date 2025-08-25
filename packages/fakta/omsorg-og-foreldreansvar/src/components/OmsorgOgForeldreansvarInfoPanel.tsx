import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import type {
  Aksjonspunkt,
  AlleKodeverk,
  FamilieHendelse,
  Personoversikt,
  RelatertTilgrensedYtelse,
  Soknad,
} from '@navikt/fp-types';
import type {
  AvklarFaktaForForeldreansvarAksjonspunktAp,
  AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { usePanelDataContext } from '@navikt/fp-utils';

import type { OmsorgOgForeldreansvarFormValues } from '../types/OmsorgOgForeldreansvarFormValues';
import { OmsorgOgForeldreansvarFaktaForm } from './OmsorgOgForeldreansvarFaktaForm';

type FormValues = OmsorgOgForeldreansvarFormValues & FaktaBegrunnelseFormValues;

const transformValues = (
  values: FormValues,
  aksjonspunkt: Aksjonspunkt,
): AvklarFaktaForForeldreansvarAksjonspunktAp | AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp => ({
  ...OmsorgOgForeldreansvarFaktaForm.transformValues(values, aksjonspunkt),
  ...FaktaBegrunnelseTextField.transformValues(values),
});

const buildInitialValues = (
  soknad: Soknad,
  gjeldendeFamiliehendelse: FamilieHendelse,
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[],
  aksjonspunkter: Aksjonspunkt[],
  alleKodeverk: AlleKodeverk,
): FormValues => {
  const aksjonspunkt = aksjonspunkter.find(
    ap =>
      ap.definisjon === AksjonspunktKode.OMSORGSOVERTAKELSE ||
      ap.definisjon === AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR,
  );
  return {
    ...OmsorgOgForeldreansvarFaktaForm.buildInitialValues(
      soknad,
      gjeldendeFamiliehendelse,
      innvilgetRelatertTilgrensendeYtelserForAnnenForelder,
      alleKodeverk,
    ),
    ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
  };
};

interface Props {
  soknad: Soknad;
  personoversikt: Personoversikt;
  gjeldendeFamiliehendelse: FamilieHendelse;
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[];
  submittable: boolean;
}

/**
 * OmsorgOgForeldreansvarInfoPanel
 *
 * Har ansvar for å sette opp form for faktapenelet til Omsorgsvilkåret.
 */
export const OmsorgOgForeldreansvarInfoPanel = ({
  submittable,
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder,
  soknad,
  gjeldendeFamiliehendelse,
  personoversikt,
}: Props) => {
  const intl = useIntl();

  const {
    aksjonspunkterForPanel,
    alleMerknaderFraBeslutter,
    harÅpneAksjonspunkter,
    submitCallback,
    isReadOnly,
    alleKodeverk,
  } = usePanelDataContext<
    AvklarFaktaForForeldreansvarAksjonspunktAp | AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp
  >();

  const formMethods = useForm<FormValues>({
    defaultValues: buildInitialValues(
      soknad,
      gjeldendeFamiliehendelse,
      innvilgetRelatertTilgrensendeYtelserForAnnenForelder,
      aksjonspunkterForPanel,
      alleKodeverk,
    ),
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
        {!isReadOnly && harÅpneAksjonspunkter && (
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
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          soknad={soknad}
          gjeldendeFamiliehendelse={gjeldendeFamiliehendelse}
          personoversikt={personoversikt}
        />
        <FaktaBegrunnelseTextField
          control={formMethods.control}
          isSubmittable={submittable}
          isReadOnly={isReadOnly}
          hasBegrunnelse={!!begrunnelse}
          label={intl.formatMessage({
            id: erAksjonspunktForeldreansvar
              ? 'OmsorgOgForeldreansvarInfoPanel.BegrunnelseTitleFp'
              : 'OmsorgOgForeldreansvarInfoPanel.BegrunnelseTitleEs',
          })}
        />
        <FaktaSubmitButton
          isSubmittable={submittable}
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={formMethods.formState.isDirty}
          isReadOnly={isReadOnly}
        />
      </VStack>
    </RhfForm>
  );
};
