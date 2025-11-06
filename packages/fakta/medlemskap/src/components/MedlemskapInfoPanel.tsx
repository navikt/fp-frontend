import { VStack } from '@navikt/ds-react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Medlemskap } from '@navikt/fp-types';
import { harAksjonspunkt, usePanelDataContext } from '@navikt/fp-utils';

import { VurderMedlemskapAksjonspunktForm } from './aksjonspunkt/VurderMedlemskapAksjonspunktForm';
import { VurderMedlemsskapLegacyAksjonspunktVisning } from './aksjonspunkt/VurderMedlemskapLegacyAksjonspunktVisning';
import { AksjonspunktHelpText } from './AksjonspunktHelpText';
import { OpplysningerFraMedlemskapsregister } from './opplysningsKort/OpplysningerFraMedlemskapsregister';
import { OpplysningerOmAdresser } from './opplysningsKort/OpplysningerOmAdresser';
import { OpplysningerOmOppholdstillatelser } from './opplysningsKort/OpplysningerOmOppholdstillatelser';
import { OpplysningerOmPersonstatus } from './opplysningsKort/OpplysningerOmPersonstatus/OpplysningerOmPersonstatus';
import { OpplysningerOmUtenlandsopphold } from './opplysningsKort/OpplysningerOmUtenlandsopphold';
import { SituasjonOversikt } from './situasjon/SituasjonOversikt';

interface Props {
  medlemskap: Medlemskap;
}

/**
 * MedlemskapInfoPanel
 *
 * Har ansvar for å vise faktapanelene for medlemskap.
 */
export const MedlemskapInfoPanel = ({ medlemskap }: Props) => {
  const { aksjonspunkterForPanel, alleKodeverk, fagsak, harÅpentAksjonspunkt } = usePanelDataContext();

  const harVilkårAP =
    harAksjonspunkt(AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET, aksjonspunkterForPanel) ||
    harAksjonspunkt(AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR, aksjonspunkterForPanel);

  return (
    <VStack gap="space-24">
      {harÅpentAksjonspunkt && <AksjonspunktHelpText aksjonspunkter={aksjonspunkterForPanel} medlemskap={medlemskap} />}

      {medlemskap.legacyManuellBehandling && !medlemskap.manuellBehandlingResultat && (
        <VurderMedlemsskapLegacyAksjonspunktVisning
          legacyManuellBehandling={medlemskap.legacyManuellBehandling}
          alleKodeverk={alleKodeverk}
        />
      )}
      <SituasjonOversikt medlemskap={medlemskap} alleKodeverk={alleKodeverk} />

      <VStack gap="space-8">
        <OpplysningerOmUtenlandsopphold medlemskap={medlemskap} skalViseAvvik={harVilkårAP} />
        <OpplysningerOmAdresser
          medlemskap={medlemskap}
          avvik={medlemskap.avvik}
          brukerNavn={fagsak.bruker.navn}
          annenpartNavn={fagsak.annenPart?.navn}
          alleKodeverk={alleKodeverk}
          skalViseAvvik={harVilkårAP}
        />
        <OpplysningerOmPersonstatus
          medlemskap={medlemskap}
          avvik={medlemskap.avvik}
          brukerNavn={fagsak.bruker.navn}
          annenpartNavn={fagsak.annenPart?.navn}
          alleKodeverk={alleKodeverk}
          skalViseAvvik={harVilkårAP}
        />
        <OpplysningerFraMedlemskapsregister
          medlemskapsperioder={medlemskap.medlemskapsperioder}
          avvik={medlemskap.avvik}
          alleKodeverk={alleKodeverk}
          skalViseAvvik={harVilkårAP}
        />
        <OpplysningerOmOppholdstillatelser
          oppholdstillatelser={medlemskap.oppholdstillatelser}
          avvik={medlemskap.avvik}
          alleKodeverk={alleKodeverk}
          skalViseAvvik={harVilkårAP}
        />
      </VStack>

      {harVilkårAP && (
        <VurderMedlemskapAksjonspunktForm manuellBehandlingResultat={medlemskap.manuellBehandlingResultat} />
      )}
    </VStack>
  );
};
