import { FormattedMessage } from 'react-intl';

import { Box, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { usePanelDataContext } from '@navikt/fp-utils';

import { type OmsorgOgRettProps } from '../OmsorgOgRettFaktaIndex';
import { AnnenPartsYtelser } from '../opplysningskort/AnnenPartsYtelser.tsx';
import { OpplysningerFraSoknad } from '../opplysningskort/OpplysningerFraSoknad.tsx';
import { OpplysningerOmAdresser } from '../opplysningskort/OpplysningerOmAdresser.tsx';
import { AleneomsorgForm } from './forms/AleneomsorgForm';
import { HarAnnenForelderRettForm } from './forms/HarAnnenForelderRettForm';
import { RettighetstypeForm } from './forms/RettighetstypeForm.tsx';

export const OmsorgOgRettInfoPanel = ({ personoversikt, omsorgOgRett, kanOverstyre }: OmsorgOgRettProps) => {
  const { alleKodeverk, isSubmittable, aksjonspunkterForPanel, isReadOnly, harÅpentAksjonspunkt } =
    usePanelDataContext();

  const aksjonspunkter = aksjonspunkterForPanel.filter(
    a => a.definisjon !== AksjonspunktKode.OVERSTYRING_AV_RETT_OG_OMSORG,
  );

  const opprettetAleneomsorgAPUtenResultat = aksjonspunkter.some(
    a =>
      a.definisjon === AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG &&
      a.status === 'OPPR' &&
      !omsorgOgRett.manuellBehandlingResultat,
  );
  const opprettetRettAPUtenResultat = aksjonspunkter.some(
    a =>
      a.definisjon === AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT &&
      a.status === 'OPPR' &&
      !omsorgOgRett.manuellBehandlingResultat,
  );
  const rettAPMedResultat = aksjonspunkter.some(
    a => a.definisjon === AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT && omsorgOgRett.manuellBehandlingResultat,
  );
  const aleneomsorgAPMedResultat = aksjonspunkter.some(
    a =>
      a.definisjon === AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG &&
      omsorgOgRett.manuellBehandlingResultat,
  );
  const harRettAp = aksjonspunkter.some(a => a.definisjon === AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT);
  const harAleneomsorgAp = aksjonspunkter.some(
    a => a.definisjon === AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
  );
  const resultatUtenAp = omsorgOgRett.manuellBehandlingResultat && !harRettAp && !harAleneomsorgAp;

  const søkerHarAleneomsorgResultat = omsorgOgRett.manuellBehandlingResultat?.søkerHarAleneomsorg ?? 'IKKE_RELEVANT';

  const overstyringAksjonspunkter = aksjonspunkterForPanel.filter(
    a => a.definisjon === AksjonspunktKode.OVERSTYRING_AV_RETT_OG_OMSORG,
  );
  const harUløsteAksjonspunkter = opprettetRettAPUtenResultat || opprettetAleneomsorgAPUtenResultat;
  return (
    <VStack gap="space-24">
      {!isReadOnly && harÅpentAksjonspunkt && (
        <AksjonspunktHelpTextHTML>
          {harAleneomsorgAp && <FormattedMessage id="OmsorgOgRettInfoPanel.VurderOmAleneomsorg" />}
          {harRettAp && <FormattedMessage id="OmsorgOgRettInfoPanel.VurderAndreForelderRett" />}
          {overstyringAksjonspunkter.length > 0 && <FormattedMessage id="OmsorgOgRettInfoPanel.Overstyring" />}
        </AksjonspunktHelpTextHTML>
      )}
      {!harUløsteAksjonspunkter && omsorgOgRett.rettighetstype && (
        <Box.New background="neutral-moderate" padding="5">
          <RettighetstypeForm
            omsorgOgRett={omsorgOgRett}
            aksjonspunkt={overstyringAksjonspunkter[0]}
            kanOverstyre={kanOverstyre}
          />
        </Box.New>
      )}

      <OpplysningerFraSoknad omsorgOgRett={omsorgOgRett} alleKodeverk={alleKodeverk} />
      <OpplysningerOmAdresser alleKodeverk={alleKodeverk} personoversikt={personoversikt} />
      {omsorgOgRett.registerdata && <AnnenPartsYtelser omsorgOgRett={omsorgOgRett} />}

      {(opprettetAleneomsorgAPUtenResultat || aleneomsorgAPMedResultat) && (
        <AleneomsorgForm omsorgOgRett={omsorgOgRett} aksjonspunkt={aksjonspunkter[0]} isSubmittable={isSubmittable} />
      )}
      {(opprettetRettAPUtenResultat || rettAPMedResultat) && (
        <HarAnnenForelderRettForm
          omsorgOgRett={omsorgOgRett}
          isSubmittable={isSubmittable}
          aksjonspunkt={aksjonspunkter[0]}
        />
      )}
      {resultatUtenAp && søkerHarAleneomsorgResultat !== 'IKKE_RELEVANT' && (
        <AleneomsorgForm omsorgOgRett={omsorgOgRett} isSubmittable={false} />
      )}
      {resultatUtenAp && søkerHarAleneomsorgResultat === 'IKKE_RELEVANT' && (
        <HarAnnenForelderRettForm omsorgOgRett={omsorgOgRett} isSubmittable={false} />
      )}
    </VStack>
  );
};
