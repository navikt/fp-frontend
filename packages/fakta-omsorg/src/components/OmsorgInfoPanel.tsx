import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';

import { Form } from '@navikt/ft-form-hooks';
import { Heading } from '@navikt/ds-react';

import aksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FaktaBegrunnelseTextFieldNew, FaktaSubmitButtonNew } from '@navikt/fp-fakta-felles';
import {
  Aksjonspunkt, AlleKodeverk, KjønnkodeEnum, Personoversikt, Ytelsefordeling,
} from '@navikt/fp-types';
import { BekreftOmsorgVurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import OmsorgFaktaForm, { FormValues as OmsorgFormValues } from './OmsorgFaktaForm';
import AlleBarnPanel from './personer/AlleBarnPanel';
import ForelderPanel from './personer/ForelderPanel';
import Boks from './Boks';

const { MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG } = aksjonspunktCodes;

const getHelpTexts = (aksjonspunkter: Aksjonspunkt[]): ReactElement[] => {
  const helpTexts = [];
  const harOmsorgAp = aksjonspunkter.filter((ap) => ap.definisjon === MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG);
  if (harOmsorgAp.length > 0) {
    helpTexts.push(<FormattedMessage key="VurderOmsorg" id="OmsorgInfoPanel.VurderOmsorg" />);
  }
  return helpTexts;
};

const buildInitialValues = (
  ytelsefordeling: Ytelsefordeling,
  aksjonspunkter: Aksjonspunkt[],
): FormValues => {
  const omsorgAp = aksjonspunkter.filter((ap) => ap.definisjon === aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG);
  return {
    ...OmsorgFaktaForm.buildInitialValues(ytelsefordeling, omsorgAp),
    ...FaktaBegrunnelseTextFieldNew.buildInitialValues(omsorgAp),
  };
};

const finnMotsattKjønn = (kjønn: string) => (kjønn === KjønnkodeEnum.KVINNE ? KjønnkodeEnum.MANN : KjønnkodeEnum.KVINNE);

const transformValues = (
  values: FormValues,
): BekreftOmsorgVurderingAp => ({
  ...OmsorgFaktaForm.transformOmsorgValues(values),
  begrunnelse: values.begrunnelse,
});

type FormValues = OmsorgFormValues & {
  begrunnelse?: string;
}

interface OwnProps {
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  hasOpenAksjonspunkter: boolean;
  submittable: boolean;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  personoversikt: Personoversikt;
  ytelsefordeling: Ytelsefordeling;
  submitCallback: (data: BekreftOmsorgVurderingAp) => Promise<void>;
  formData?: any,
  setFormData: (data: any) => void,
}

const OmsorgInfoPanel: FunctionComponent<OwnProps> = ({
  personoversikt,
  readOnly,
  hasOpenAksjonspunkter,
  submittable,
  aksjonspunkter,
  alleKodeverk,
  ytelsefordeling,
  submitCallback,
  alleMerknaderFraBeslutter,
  formData,
  setFormData,
}) => {
  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(ytelsefordeling, aksjonspunkter),
  });

  return (
    <>
      <Heading size="small"><FormattedMessage id="OmsorgInfoPanel.Overskrift" /></Heading>
      <VerticalSpacer thirtyTwoPx />
      {!readOnly && hasOpenAksjonspunkter && (
        <AksjonspunktHelpTextHTML>
          {getHelpTexts(aksjonspunkter)}
        </AksjonspunktHelpTextHTML>
      )}
      <VerticalSpacer thirtyTwoPx />
      <AlleBarnPanel alleBarn={personoversikt.barn} />
      <ForelderPanel forelder={personoversikt.bruker} kjønn={personoversikt.bruker.kjønn} erSøker alleKodeverk={alleKodeverk} />
      {personoversikt.annenPart && (
        <ForelderPanel
          forelder={personoversikt.annenPart}
          kjønn={personoversikt.annenPart.kjønn || finnMotsattKjønn(personoversikt.bruker.kjønn)}
          erSøker={false}
          alleKodeverk={alleKodeverk}
        />
      )}
      <Form
        formMethods={formMethods}
        onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
        setDataOnUnmount={setFormData}
      >
        <Boks harBorderTop={false}>
          <VerticalSpacer sixteenPx />
          <OmsorgFaktaForm
            readOnly={readOnly}
            aksjonspunkter={aksjonspunkter}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          />
          <VerticalSpacer thirtyTwoPx />
          <FaktaBegrunnelseTextFieldNew isSubmittable={submittable} isReadOnly={readOnly} hasBegrunnelse hasVurderingText />
          <VerticalSpacer sixteenPx />
          <FaktaSubmitButtonNew
            isSubmittable={submittable}
            isReadOnly={readOnly}
            isSubmitting={formMethods.formState.isSubmitting}
            isDirty={formMethods.formState.isDirty}
          />
        </Boks>
      </Form>
    </>
  );
};

export default OmsorgInfoPanel;
