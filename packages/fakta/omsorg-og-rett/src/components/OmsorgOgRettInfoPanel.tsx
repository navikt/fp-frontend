import { FormattedMessage } from 'react-intl';

import { Box, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { Verdi } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { type OmsorgOgRettProps } from '../OmsorgOgRettFaktaIndex';
import { AnnenPartsYtelser } from '../opplysningskort/AnnenPartsYtelser.tsx';
import { OpplysningerFraSoknad } from '../opplysningskort/OpplysningerFraSoknad.tsx';
import { OpplysningerOmAdresser } from '../opplysningskort/OpplysningerOmAdresser.tsx';
import { AleneomsorgForm } from './forms/AleneomsorgForm';
import { HarAnnenForelderRettForm } from './forms/HarAnnenForelderRettForm';
import { RettighetstypeForm } from './forms/RettighetstypeForm.tsx';

export const OmsorgOgRettInfoPanel = ({
  personoversikt,
  omsorgOgRett,
  submittable,
  kanOverstyre,
}: OmsorgOgRettProps) => {
  const { alleKodeverk, aksjonspunkterForPanel, isReadOnly, harÅpentAksjonspunkt } = usePanelDataContext();

  const aksjonspunkter = aksjonspunkterForPanel.filter(
    a => a.definisjon !== AksjonspunktKode.OVERSTYRING_AV_RETT_OG_OMSORG,
  );

  const opprettetAleneomsorgAPUtenResultat = aksjonspunkter.some(
    a =>
      a.definisjon === AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG &&
      a.status === AksjonspunktStatus.OPPRETTET &&
      !omsorgOgRett.manuellBehandlingResultat,
  );
  const opprettetRettAPUtenResultat = aksjonspunkter.some(
    a =>
      a.definisjon === AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT &&
      a.status === AksjonspunktStatus.OPPRETTET &&
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

  const søkerHarAleneomsorgResultat =
    omsorgOgRett.manuellBehandlingResultat?.søkerHarAleneomsorg ?? Verdi.IKKE_RELEVANT;

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
            submittable={submittable}
            aksjonspunkt={overstyringAksjonspunkter[0]}
            kanOverstyre={kanOverstyre}
          />
        </Box.New>
      )}

      <OpplysningerFraSoknad omsorgOgRett={omsorgOgRett} alleKodeverk={alleKodeverk} />
      {personoversikt.bruker?.adresser && (
        <OpplysningerOmAdresser alleKodeverk={alleKodeverk} personoversikt={personoversikt} />
      )}
      {omsorgOgRett.registerdata && <AnnenPartsYtelser omsorgOgRett={omsorgOgRett} />}

      {(opprettetAleneomsorgAPUtenResultat || aleneomsorgAPMedResultat) && (
        <AleneomsorgForm omsorgOgRett={omsorgOgRett} submittable={submittable} aksjonspunkt={aksjonspunkter[0]} />
      )}
      {(opprettetRettAPUtenResultat || rettAPMedResultat) && (
        <HarAnnenForelderRettForm
          omsorgOgRett={omsorgOgRett}
          submittable={submittable}
          aksjonspunkt={aksjonspunkter[0]}
        />
      )}
      {resultatUtenAp && søkerHarAleneomsorgResultat !== Verdi.IKKE_RELEVANT && (
        <AleneomsorgForm omsorgOgRett={omsorgOgRett} submittable={false} />
      )}
      {resultatUtenAp && søkerHarAleneomsorgResultat === Verdi.IKKE_RELEVANT && (
        <HarAnnenForelderRettForm omsorgOgRett={omsorgOgRett} submittable={false} />
      )}
    </VStack>
  );
};
