import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { Verdi } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { type OmsorgOgRettProps } from '../OmsorgOgRettFaktaIndex';
import { AnnenPartsYtelser } from '../opplysningskort/AnnenPartsYtelser.tsx';
import { OpplysningerFraSoknad } from '../opplysningskort/OpplysningerFraSoknad.tsx';
import { OpplysningerOmAdresser } from '../opplysningskort/OpplysningerOmAdresser.tsx';
import { AleneomsorgForm } from './forms/AleneomsorgForm';
import { HarAnnenForelderRettForm } from './forms/HarAnnenForelderRettForm';

export const OmsorgOgRettInfoPanel = ({ personoversikt, omsorgOgRett, submittable }: OmsorgOgRettProps) => {
  const { alleKodeverk, aksjonspunkterForPanel, isReadOnly, harÅpneAksjonspunkter } = usePanelDataContext();

  const harAPAleneomsorg = hasAksjonspunkt(
    AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
    aksjonspunkterForPanel,
  );
  const harAPAnnenForelderRett = hasAksjonspunkt(AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT, aksjonspunkterForPanel);

  const søkerHarAleneomsorgResultat =
    omsorgOgRett.manuellBehandlingResultat?.søkerHarAleneomsorg ?? Verdi.IKKE_RELEVANT;
  const manuellResultatUtenAksjonspunkt =
    !harAPAleneomsorg && !harAPAnnenForelderRett && omsorgOgRett.manuellBehandlingResultat;
  return (
    <VStack gap="8">
      {!isReadOnly && harÅpneAksjonspunkter && (
        <AksjonspunktHelpTextHTML>
          {harAPAleneomsorg && <FormattedMessage id="OmsorgOgRettInfoPanel.VurderOmAleneomsorg" />}
          {harAPAnnenForelderRett && <FormattedMessage id="OmsorgOgRettInfoPanel.VurderAndreForelderRett" />}
        </AksjonspunktHelpTextHTML>
      )}

      <OpplysningerFraSoknad omsorgOgRett={omsorgOgRett} alleKodeverk={alleKodeverk} />
      {personoversikt.bruker?.adresser && (
        <OpplysningerOmAdresser alleKodeverk={alleKodeverk} personoversikt={personoversikt} />
      )}
      {omsorgOgRett.registerdata && <AnnenPartsYtelser omsorgOgRett={omsorgOgRett} />}

      {harAPAleneomsorg && (
        <AleneomsorgForm
          omsorgOgRett={omsorgOgRett}
          submittable={submittable}
          aksjonspunkt={aksjonspunkterForPanel[0]}
        />
      )}
      {harAPAnnenForelderRett && (
        <HarAnnenForelderRettForm
          omsorgOgRett={omsorgOgRett}
          submittable={submittable}
          aksjonspunkt={aksjonspunkterForPanel[0]}
        />
      )}
      {manuellResultatUtenAksjonspunkt && søkerHarAleneomsorgResultat !== Verdi.IKKE_RELEVANT && (
        <AleneomsorgForm omsorgOgRett={omsorgOgRett} submittable={false} />
      )}
      {manuellResultatUtenAksjonspunkt && søkerHarAleneomsorgResultat === Verdi.IKKE_RELEVANT && (
        <HarAnnenForelderRettForm omsorgOgRett={omsorgOgRett} submittable={false} />
      )}
    </VStack>
  );
};
