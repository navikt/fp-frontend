import { type ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, hasAksjonspunkt, KodeverkType } from '@navikt/fp-kodeverk';
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

import {
  type FormValues as OmsorgFormValues,
  OmsorgOgForeldreansvarFaktaForm,
} from './OmsorgOgForeldreansvarFaktaForm';

type FormValues = OmsorgFormValues & {
  begrunnelse?: string;
};

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

const findAksjonspunktHelpTexts = (erAksjonspunktForeldreansvar: boolean): ReactElement[] =>
  erAksjonspunktForeldreansvar
    ? [<FormattedMessage key="CheckInformation" id="OmsorgOgForeldreansvarInfoPanel.CheckInformationForeldreansvar" />]
    : [
        <FormattedMessage
          key="CheckInformation"
          id="OmsorgOgForeldreansvarInfoPanel.CheckInformationOmsorgsovertakelse"
        />,
      ];

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
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, aksjonspunkterForPanel[0]))}
    >
      <VStack gap="5">
        {!isReadOnly && harÅpneAksjonspunkter && (
          <AksjonspunktHelpTextHTML>{findAksjonspunktHelpTexts(erAksjonspunktForeldreansvar)}</AksjonspunktHelpTextHTML>
        )}
        <OmsorgOgForeldreansvarFaktaForm
          erAksjonspunktForeldreansvar={erAksjonspunktForeldreansvar}
          readOnly={isReadOnly}
          vilkarTypes={alleKodeverk[KodeverkType.OMSORGSOVERTAKELSE_VILKAR_TYPE]}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          soknad={soknad}
          gjeldendeFamiliehendelse={gjeldendeFamiliehendelse}
          personoversikt={personoversikt}
        />
        <FaktaBegrunnelseTextField
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
    </Form>
  );
};
