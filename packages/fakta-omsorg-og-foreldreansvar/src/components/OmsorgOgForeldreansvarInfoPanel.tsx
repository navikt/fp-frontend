import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';

import { FaktaBegrunnelseTextFieldNew, FaktaSubmitButtonNew } from '@navikt/fp-fakta-felles';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AksjonspunktCode, getKodeverknavnFn, KodeverkType } from '@navikt/fp-kodeverk';
import {
  Aksjonspunkt,
  FamilieHendelse,
  Personoversikt,
  RelatertTilgrensedYtelse,
  Soknad,
  AlleKodeverk,
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
  ...{ begrunnelse: values.begrunnelse },
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
      ap.definisjon === AksjonspunktCode.OMSORGSOVERTAKELSE ||
      ap.definisjon === AksjonspunktCode.AVKLAR_VILKAR_FOR_FORELDREANSVAR,
  );
  return {
    ...OmsorgOgForeldreansvarFaktaForm.buildInitialValues(
      soknad,
      gjeldendeFamiliehendelse,
      innvilgetRelatertTilgrensendeYtelserForAnnenForelder,
      getKodeverknavnFn(alleKodeverk),
    ),
    ...FaktaBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkt),
  };
};

interface PureOwnProps {
  soknad: Soknad;
  personoversikt: Personoversikt;
  gjeldendeFamiliehendelse: FamilieHendelse;
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[];
  aksjonspunkter: Aksjonspunkt[];
  alleKodeverk: AlleKodeverk;
  submitCallback: (
    data: AvklarFaktaForForeldreansvarAksjonspunktAp | AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp,
  ) => Promise<void>;
  hasOpenAksjonspunkter: boolean;
  submittable: boolean;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  formData: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * OmsorgOgForeldreansvarInfoPanel
 *
 * Har ansvar for å sette opp form for faktapenelet til Omsorgsvilkåret.
 */
export const OmsorgOgForeldreansvarInfoPanel: FunctionComponent<PureOwnProps> = ({
  hasOpenAksjonspunkter,
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
}) => {
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

  const erAksjonspunktForeldreansvar =
    aksjonspunkter[0].definisjon === AksjonspunktCode.AVKLAR_VILKAR_FOR_FORELDREANSVAR;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, aksjonspunkter[0]))}
    >
      <OmsorgOgForeldreansvarFaktaForm
        erAksjonspunktForeldreansvar={erAksjonspunktForeldreansvar}
        readOnly={readOnly}
        vilkarTypes={alleKodeverk[KodeverkType.OMSORGSOVERTAKELSE_VILKAR_TYPE]}
        hasOpenAksjonspunkter={hasOpenAksjonspunkter}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        soknad={soknad}
        gjeldendeFamiliehendelse={gjeldendeFamiliehendelse}
        personoversikt={personoversikt}
      />
      <VerticalSpacer twentyPx />
      <FaktaBegrunnelseTextFieldNew
        isSubmittable={submittable}
        isReadOnly={readOnly}
        hasBegrunnelse={!!begrunnelse}
        label={intl.formatMessage({
          id: erAksjonspunktForeldreansvar
            ? 'OmsorgOgForeldreansvarInfoPanel.BegrunnelseTitleFp'
            : 'OmsorgOgForeldreansvarInfoPanel.BegrunnelseTitleEs',
        })}
      />
      <VerticalSpacer twentyPx />
      <FaktaSubmitButtonNew
        isSubmittable={submittable}
        isSubmitting={formMethods.formState.isSubmitting}
        isDirty={formMethods.formState.isDirty}
        isReadOnly={readOnly}
      />
    </Form>
  );
};

export default OmsorgOgForeldreansvarInfoPanel;
