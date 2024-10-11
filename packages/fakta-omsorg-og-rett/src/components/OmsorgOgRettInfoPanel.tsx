import React from 'react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import { VStack } from '@navikt/ds-react';
import { AlleKodeverk, Personoversikt, Ytelsefordeling } from '@navikt/fp-types';
import { AvklarAnnenforelderHarRettAp, BekreftAleneomsorgVurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { Aksjonspunkt } from '@navikt/ft-types';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { PersonopplysningerForFamilie } from '@navikt/fp-fakta-felles';
import { AleneomsorgForm, FormValues as AleneomsorgFormValues } from './forms/AleneomsorgForm';
import { HarAnnenForelderRettForm, FormValues as RettFormValues } from './forms/HarAnnenForelderRettForm';

const finnAksjonspunktTekst = (aksjonspunkter: Aksjonspunkt[]): string => {
  if (aksjonspunkter.some(ap => ap.definisjon === AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG)) {
    return 'OmsorgOgRettFaktaForm.VurderOmAleneomsorg';
  }
  if (aksjonspunkter.some(ap => ap.definisjon === AksjonspunktCode.AVKLAR_ANNEN_FORELDER_RETT)) {
    return 'OmsorgOgRettFaktaForm.VurderAndreForelderRett';
  }
  return '';
};

interface Props {
  readOnly: boolean;
  personoversikt: Personoversikt;
  ytelsefordeling: Ytelsefordeling;
  alleKodeverk: AlleKodeverk;
  aksjonspunkter: Aksjonspunkt[];
  lagreCallback: (aksjonspunktData: BekreftAleneomsorgVurderingAp | AvklarAnnenforelderHarRettAp) => Promise<void>;
  formData?: RettFormValues | AleneomsorgFormValues;
  setFormData: (data: RettFormValues | AleneomsorgFormValues) => void;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

export const OmsorgOgRettInfoPanel = ({
  readOnly,
  personoversikt,
  ytelsefordeling,
  alleKodeverk,
  aksjonspunkter,
  lagreCallback,
  formData,
  setFormData,
  alleMerknaderFraBeslutter,
}: Props) => {
  const aksjonspunktTekst = finnAksjonspunktTekst(aksjonspunkter);
  const harAleneomsorgAksjonspunkt = aksjonspunkter.some(
    ap => ap.definisjon === AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
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
          lagreCallback={lagreCallback}
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
          lagreCallback={lagreCallback}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          aksjonspunkt={aksjonspunkter[0]}
        />
      )}
    </VStack>
  );
};
