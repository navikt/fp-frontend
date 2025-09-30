import { VStack } from '@navikt/ds-react';

import type { Medlemskap, Soknad } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

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
  soknad: Soknad;
}

/**
 * MedlemskapInfoPanel
 *
 * Har ansvar for å vise faktapanelene for medlemskap.
 */
export const MedlemskapInfoPanel = ({ medlemskap, soknad }: Props) => {
  const { aksjonspunkterForPanel, alleKodeverk, fagsak, isReadOnly } = usePanelDataContext();

  const aksjonspunkt = aksjonspunkterForPanel.find(ap => ap.status === 'OPPR' || ap.status === 'UTFO');
  const harAksjonspunkt = !!aksjonspunkt;

  return (
    <VStack gap="space-24">
      <AksjonspunktHelpText aksjonspunkter={aksjonspunkterForPanel} medlemskap={medlemskap} />
      {medlemskap.manuellBehandlingResultat && isReadOnly && aksjonspunkt && (
        <VurderMedlemskapAksjonspunktForm
          manuellBehandlingResultat={medlemskap.manuellBehandlingResultat}
          aksjonspunkt={aksjonspunkt}
        />
      )}

      {medlemskap.legacyManuellBehandling && !medlemskap.manuellBehandlingResultat && (
        <VurderMedlemsskapLegacyAksjonspunktVisning
          legacyManuellBehandling={medlemskap.legacyManuellBehandling}
          alleKodeverk={alleKodeverk}
        />
      )}
      <SituasjonOversikt medlemskap={medlemskap} soknad={soknad} alleKodeverk={alleKodeverk} />

      <VStack gap="space-8">
        <OpplysningerOmUtenlandsopphold soknad={soknad} avvik={medlemskap.avvik} skalViseAvvik={harAksjonspunkt} />
        <OpplysningerOmAdresser
          medlemskap={medlemskap}
          avvik={medlemskap.avvik}
          brukerNavn={fagsak.bruker.navn}
          annenpartNavn={fagsak.annenPart?.navn}
          alleKodeverk={alleKodeverk}
          skalViseAvvik={harAksjonspunkt}
        />
        <OpplysningerOmPersonstatus
          medlemskap={medlemskap}
          avvik={medlemskap.avvik}
          brukerNavn={fagsak.bruker.navn}
          annenpartNavn={fagsak.annenPart?.navn}
          alleKodeverk={alleKodeverk}
          skalViseAvvik={harAksjonspunkt}
        />
        <OpplysningerFraMedlemskapsregister
          medlemskapsperioder={medlemskap.medlemskapsperioder}
          avvik={medlemskap.avvik}
          alleKodeverk={alleKodeverk}
          skalViseAvvik={harAksjonspunkt}
        />
        <OpplysningerOmOppholdstillatelser
          oppholdstillatelser={medlemskap.oppholdstillatelser}
          avvik={medlemskap.avvik}
          alleKodeverk={alleKodeverk}
          skalViseAvvik={harAksjonspunkt}
        />
      </VStack>
      {!isReadOnly && aksjonspunkt && (
        <VurderMedlemskapAksjonspunktForm
          manuellBehandlingResultat={medlemskap.manuellBehandlingResultat}
          aksjonspunkt={aksjonspunkt}
        />
      )}
    </VStack>
  );
};
