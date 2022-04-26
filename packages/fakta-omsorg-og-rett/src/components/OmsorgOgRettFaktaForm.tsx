import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertittel } from 'nav-frontend-typografi';
import { AlleKodeverk, Personoversikt } from '@fpsak-frontend/types';
import { Aksjonspunkt } from '@navikt/ft-types';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AlleBarnPanel from './personer/AlleBarnPanel';
import ForelderPanel from './personer/ForelderPanel';
import AleneomsorgForm from './forms/AleneomsorgForm';
import HarAnnenForelderRettForm from './forms/HarAnnenForelderRettForm';

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
  alleKodeverk: AlleKodeverk;
  aksjonspunkter: Aksjonspunkt[];
}

const OmsorgOgRettFaktaIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  personoversikt,
  alleKodeverk,
  aksjonspunkter,
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
        <AleneomsorgForm readOnly={readOnly} />
      )}
      {!harAleneomsorgAksjonspunkt && (
        <HarAnnenForelderRettForm readOnly={readOnly} />
      )}
    </>
  );
};

export default OmsorgOgRettFaktaIndex;
