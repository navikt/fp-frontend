import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, getKodeverknavnFn, hasAksjonspunkt, KodeverkType } from '@navikt/fp-kodeverk';
import {
  Aksjonspunkt,
  AlleKodeverk,
  FamilieHendelse,
  Personoversikt,
  RelatertTilgrensedYtelse,
  Soknad,
  StandardFaktaPanelProps,
} from '@navikt/fp-types';
import {
  AvklarFaktaForForeldreansvarAksjonspunktAp,
  AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';

import OmsorgOgForeldreansvarFaktaForm, { FormValues as OmsorgFormValues } from './OmsorgOgForeldreansvarFaktaForm';

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
      getKodeverknavnFn(alleKodeverk),
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
  submitCallback: (
    data: AvklarFaktaForForeldreansvarAksjonspunktAp | AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp,
  ) => Promise<void>;
}

/**
 * OmsorgOgForeldreansvarInfoPanel
 *
 * Har ansvar for å sette opp form for faktapenelet til Omsorgsvilkåret.
 */
export const OmsorgOgForeldreansvarInfoPanel = ({
  harApneAksjonspunkter,
  submittable,
  readOnly,
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder,
  alleMerknaderFraBeslutter,
  soknad,
  gjeldendeFamiliehendelse,
  personoversikt,
  submitCallback,
  aksjonspunkter,
  alleKodeverk,
}: Props & StandardFaktaPanelProps) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: buildInitialValues(
      soknad,
      gjeldendeFamiliehendelse,
      innvilgetRelatertTilgrensendeYtelserForAnnenForelder,
      aksjonspunkter,
      alleKodeverk,
    ),
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  const erAksjonspunktForeldreansvar = hasAksjonspunkt(
    AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR,
    aksjonspunkter,
  );

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, aksjonspunkter[0]))}
    >
      <VStack gap="5">
        {!readOnly && harApneAksjonspunkter && (
          <AksjonspunktHelpTextHTML>{findAksjonspunktHelpTexts(erAksjonspunktForeldreansvar)}</AksjonspunktHelpTextHTML>
        )}
        <OmsorgOgForeldreansvarFaktaForm
          erAksjonspunktForeldreansvar={erAksjonspunktForeldreansvar}
          readOnly={readOnly}
          vilkarTypes={alleKodeverk[KodeverkType.OMSORGSOVERTAKELSE_VILKAR_TYPE]}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          soknad={soknad}
          gjeldendeFamiliehendelse={gjeldendeFamiliehendelse}
          personoversikt={personoversikt}
        />
        <FaktaBegrunnelseTextField
          isSubmittable={submittable}
          isReadOnly={readOnly}
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
          isReadOnly={readOnly}
        />
      </VStack>
    </Form>
  );
};
