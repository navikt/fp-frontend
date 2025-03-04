import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { usePanelDataContext } from '@navikt/fp-utils';

import { type OmsorgOgRettProps } from '../OmsorgOgRettFaktaIndex';
import { InformasjonOmAnnenPart } from '../opplysningskort/InformasjonOmAnnenPart.tsx';
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

  return (
    <VStack gap="8">
      {!isReadOnly && harÅpneAksjonspunkter && (
        <AksjonspunktHelpTextHTML>
          {harAPAleneomsorg && <FormattedMessage id="OmsorgOgRettInfoPanel.VurderOmAleneomsorg" />}
          {harAPAnnenForelderRett && <FormattedMessage id="OmsorgOgRettInfoPanel.VurderAndreForelderRett" />}
        </AksjonspunktHelpTextHTML>
      )}

      <OpplysningerFraSoknad omsorgOgRett={omsorgOgRett} alleKodeverk={alleKodeverk} />
      {omsorgOgRett.registerdata && <InformasjonOmAnnenPart omsorgOgRett={omsorgOgRett} />}
      {personoversikt.bruker?.adresser && <OpplysningerOmAdresser alleKodeverk={alleKodeverk} personoversikt={personoversikt} />}

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
    </VStack>
  );
};
