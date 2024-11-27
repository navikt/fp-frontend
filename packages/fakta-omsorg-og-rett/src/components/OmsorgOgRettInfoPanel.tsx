import React from 'react';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { PersonopplysningerForFamilie } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { StandardFaktaPanelProps } from '@navikt/fp-types';

import { OmsorgOgRettProps } from '../OmsorgOgRettFaktaIndex';
import { AleneomsorgForm, FormValues as AleneomsorgFormValues } from './forms/AleneomsorgForm';
import { FormValues as RettFormValues,HarAnnenForelderRettForm } from './forms/HarAnnenForelderRettForm';

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
  harApneAksjonspunkter,
}: OmsorgOgRettProps & StandardFaktaPanelProps) => {
  const harAPAleneomsorg = hasAksjonspunkt(
    AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
    aksjonspunkter,
  );
  const harAPAnnenForelderRett = hasAksjonspunkt(AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT, aksjonspunkter);

  return (
    <VStack gap="8">
      {!readOnly && harApneAksjonspunkter && (
        <AksjonspunktHelpTextHTML>
          {harAPAleneomsorg && <FormattedMessage id="OmsorgOgRettInfoPanel.VurderOmAleneomsorg" />}
          {harAPAnnenForelderRett && <FormattedMessage id="OmsorgOgRettInfoPanel.VurderAndreForelderRett" />}
        </AksjonspunktHelpTextHTML>
      )}
      <PersonopplysningerForFamilie alleKodeverk={alleKodeverk} personoversikt={personoversikt} />
      {harAPAleneomsorg && (
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
      {harAPAnnenForelderRett && (
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
