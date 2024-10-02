import React, { FC } from 'react';
import { VStack } from '@navikt/ds-react';
import { aksjonspunktStatus } from '@navikt/fp-kodeverk';

import { MedlemskapFaktaProps } from '../MedlemskapFaktaIndex';

import AksjonspunktHelpText from './AksjonspunktHelpText';
import SituasjonsOversikt from './situasjon/SituasjonOversikt';
import OpplysningerOmUtenlandsopphold from './opplysningsKort/OpplysningerOmUtenlandsopphold';
import VurderMedlemskapAksjonspunktForm from './aksjonspunkt/VurderMedlemskapAksjonspunktForm';
import VurderMedlemskapLegacyAksjonspunktVisning from './aksjonspunkt/VurderMedlemskapLegacyAksjonspunktVisning';
import OpplysningerOmAdresser from './opplysningsKort/OpplysningerOmAdresser';
import OpplysningerOmPersonstatus from './opplysningsKort/OpplysningerOmPersonstatus/OpplysningerOmPersonstatus';
import OpplysningerFraMedlemskapsregister from './opplysningsKort/OpplysningerFraMedlemskapsregister';
import OpplysningerOmOppholdstillatelser from './opplysningsKort/OpplysningerOmOppholdstillatelser';

/**
 * MedlemskapInfoPanel
 *
 * Har ansvar for å vise faktapanelene for medlemskap.
 */
const MedlemskapInfoPanel: FC<MedlemskapFaktaProps> = ({
  aksjonspunkter,
  medlemskap,
  soknad,
  fagsak,
  alleKodeverk,
  readOnly,
  ...rest
}) => {
  const aksjonspunkt = aksjonspunkter.find(
    ap => ap.status === aksjonspunktStatus.OPPRETTET || ap.status === aksjonspunktStatus.UTFORT,
  );
  const harAksjonspunkt = !!aksjonspunkt;

  return (
    <VStack gap="6">
      <AksjonspunktHelpText aksjonspunkter={aksjonspunkter} medlemskap={medlemskap} />
      {medlemskap.manuellBehandlingResultat && readOnly && aksjonspunkt && (
        <VurderMedlemskapAksjonspunktForm
          manuellBehandlingResultat={medlemskap.manuellBehandlingResultat}
          aksjonspunkt={aksjonspunkt}
          alleKodeverk={alleKodeverk}
          readOnly={readOnly}
          ytelse={fagsak.fagsakYtelseType}
          {...rest}
        />
      )}

      {medlemskap.legacyManuellBehandling && !medlemskap.manuellBehandlingResultat && (
        <VurderMedlemskapLegacyAksjonspunktVisning
          legacyManuellBehandling={medlemskap.legacyManuellBehandling}
          alleKodeverk={alleKodeverk}
        />
      )}
      <SituasjonsOversikt medlemskap={medlemskap} soknad={soknad} alleKodeverk={alleKodeverk} />

      <VStack gap="2">
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
      {!readOnly && aksjonspunkt && (
        <VurderMedlemskapAksjonspunktForm
          manuellBehandlingResultat={medlemskap.manuellBehandlingResultat}
          aksjonspunkt={aksjonspunkt}
          alleKodeverk={alleKodeverk}
          readOnly={readOnly}
          ytelse={fagsak.fagsakYtelseType}
          {...rest}
        />
      )}
    </VStack>
  );
};

export default MedlemskapInfoPanel;
