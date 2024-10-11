import React from 'react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import { VStack } from '@navikt/ds-react';
import { StandardFaktaPanelProps } from '@navikt/fp-types';
import { Aksjonspunkt } from '@navikt/ft-types';
import { AksjonspunktCode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { PersonopplysningerForFamilie } from '@navikt/fp-fakta-felles';
import { AleneomsorgForm, FormValues as AleneomsorgFormValues } from './forms/AleneomsorgForm';
import { HarAnnenForelderRettForm, FormValues as RettFormValues } from './forms/HarAnnenForelderRettForm';
import { OmsorgOgRettProps } from '../OmsorgOgRettFaktaIndex';

const finnAksjonspunktTekst = (aksjonspunkter: Aksjonspunkt[]): string => {
  if (hasAksjonspunkt(AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG, aksjonspunkter)) {
    return 'OmsorgOgRettInfoPanel.VurderOmAleneomsorg';
  }
  if (hasAksjonspunkt(AksjonspunktCode.AVKLAR_ANNEN_FORELDER_RETT, aksjonspunkter)) {
    return 'OmsorgOgRettInfoPanel.VurderAndreForelderRett';
  }
  return '';
};

export const OmsorgOgRettInfoPanel = ({
  readOnly,
  personoversikt,
  ytelsefordeling,
  alleKodeverk,
  aksjonspunkter,
  submitCallback,
  formData,
  setFormData,
  alleMerknaderFraBeslutter,
}: OmsorgOgRettProps & StandardFaktaPanelProps) => {
  const aksjonspunktTekst = finnAksjonspunktTekst(aksjonspunkter);
  const harAleneomsorgAksjonspunkt = hasAksjonspunkt(
    AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
    aksjonspunkter,
  );
  return (
    <VStack gap="8">
      {aksjonspunktTekst && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id={aksjonspunktTekst} />
        </AksjonspunktHelpTextHTML>
      )}
      <PersonopplysningerForFamilie alleKodeverk={alleKodeverk} personoversikt={personoversikt} />
      {harAleneomsorgAksjonspunkt && (
        <AleneomsorgForm
          ytelsefordeling={ytelsefordeling}
          readOnly={readOnly}
          formData={formData as AleneomsorgFormValues}
          setFormData={setFormData}
          submitCallback={submitCallback}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          aksjonspunkt={aksjonspunkter[0]}
        />
      )}
      {!harAleneomsorgAksjonspunkt && (
        <HarAnnenForelderRettForm
          ytelsefordeling={ytelsefordeling}
          readOnly={readOnly}
          formData={formData as RettFormValues}
          setFormData={setFormData}
          submitCallback={submitCallback}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          aksjonspunkt={aksjonspunkter[0]}
        />
      )}
    </VStack>
  );
};
