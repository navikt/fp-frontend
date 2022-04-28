import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertittel } from 'nav-frontend-typografi';
import {
  AlleKodeverk, Personoversikt, Ytelsefordeling,
} from '@fpsak-frontend/types';
import { AvklarAnnenforelderHarRettAp, BekreftAleneomsorgVurderingAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import { Aksjonspunkt } from '@navikt/ft-types';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AlleBarnPanel from './personer/AlleBarnPanel';
import ForelderPanel from './personer/ForelderPanel';
import AleneomsorgForm, { FormValues as AleneOmsorgValues } from './forms/AleneomsorgForm';
import HarAnnenForelderRettForm, { FormValues as RettFormValues } from './forms/HarAnnenForelderRettForm';

const finnAksjonspunktTekst = (aksjonspunkter: Aksjonspunkt[]): string => {
  if (aksjonspunkter.some((ap) => ap.erAktivt && ap.definisjon === AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG)) {
    return 'OmsorgOgRettFaktaForm.VurderOmAleneomsorg';
  }
  if (aksjonspunkter.some((ap) => ap.erAktivt && ap.definisjon === AksjonspunktCode.AVKLAR_ANNEN_FORELDER_RETT)) {
    return 'OmsorgOgRettFaktaForm.VurderAndreForelderRett';
  }
  return '';
};

interface OwnProps {
  readOnly: boolean;
  personoversikt: Personoversikt;
  ytelsefordeling: Ytelsefordeling;
  alleKodeverk: AlleKodeverk;
  aksjonspunkter: Aksjonspunkt[];
  lagreCallback: (aksjonspunktData: BekreftAleneomsorgVurderingAp | AvklarAnnenforelderHarRettAp) => Promise<void>;
  formData?: RettFormValues | AleneOmsorgValues,
  setFormData: (data: RettFormValues | AleneOmsorgValues) => void,
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

const OmsorgOgRettFaktaIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  personoversikt,
  ytelsefordeling,
  alleKodeverk,
  aksjonspunkter,
  lagreCallback,
  formData,
  setFormData,
  alleMerknaderFraBeslutter,
}) => {
  const aksjonspunktTekst = finnAksjonspunktTekst(aksjonspunkter);
  const harAleneomsorgAksjonspunkt = aksjonspunkter.some((ap) => ap.definisjon === AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG);
  return (
    <>
      <Undertittel><FormattedMessage id="OmsorgOgRettFaktaForm.Overskrift" /></Undertittel>
      <VerticalSpacer thirtyTwoPx />
      {aksjonspunktTekst && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id={aksjonspunktTekst} />
        </AksjonspunktHelpTextHTML>
      )}
      <VerticalSpacer thirtyTwoPx />
      <AlleBarnPanel alleBarn={personoversikt.barn} />
      <ForelderPanel forelder={personoversikt.bruker} erSøker alleKodeverk={alleKodeverk} />
      <ForelderPanel forelder={personoversikt.annenPart} erSøker={false} alleKodeverk={alleKodeverk} />
      {harAleneomsorgAksjonspunkt && (
        <AleneomsorgForm
          ytelsefordeling={ytelsefordeling}
          readOnly={readOnly}
          formData={formData as AleneOmsorgValues}
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
    </>
  );
};

export default OmsorgOgRettFaktaIndex;
