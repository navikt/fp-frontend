import React, { FC } from 'react';
import { VStack } from '@navikt/ds-react';
import { aksjonspunktStatus } from '@navikt/fp-kodeverk';

import { MedlemskapFaktaProps } from '../MedlemskapFaktaIndex';

import AksjonspunktHelpText from './AksjonspunktHelpText';
import SituasjonsOversikt from './situasjon/SituasjonOversikt';
import OpplysningerOmUtenlandsopphold from './opplysningsKort/OpplysningerOmUtenlandsopphold';
import VurderMedlemsskapAksjonspunktForm from './aksjonspunkt/VurderMedlemsskapAksjonspunktForm';
import VurderMedlemsskapLegacyAksjonspunktVisning from './aksjonspunkt/VurderMedlemsskapLegacyAksjonspunktVisning';
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
  return (
    <VStack gap="6">
      <AksjonspunktHelpText aksjonspunkter={aksjonspunkter} medlemskap={medlemskap} />
      {medlemskap.manuellBehandlingResultat && readOnly && (
        <VurderMedlemsskapAksjonspunktForm
          manuellBehandlingResultat={medlemskap.manuellBehandlingResultat}
          aksjonspunkter={aksjonspunkter}
          alleKodeverk={alleKodeverk}
          readOnly={readOnly}
          ytelse={fagsak.fagsakYtelseType}
          {...rest}
        />
      )}
      {medlemskap.legacyManuellBehandling && !medlemskap.manuellBehandlingResultat && (
        <VurderMedlemsskapLegacyAksjonspunktVisning
          legacyManuellBehandling={medlemskap.legacyManuellBehandling}
          alleKodeverk={alleKodeverk}
        />
      )}
      <SituasjonsOversikt medlemskap={medlemskap} soknad={soknad} alleKodeverk={alleKodeverk} />

      <VStack gap="2">
        <OpplysningerOmUtenlandsopphold soknad={soknad} avvik={medlemskap.avvik} readOnly={readOnly} />
        <OpplysningerOmAdresser
          medlemskap={medlemskap}
          avvik={medlemskap.avvik}
          brukerNavn={fagsak.bruker.navn}
          annenpartNavn={fagsak.annenPart?.navn}
          alleKodeverk={alleKodeverk}
          readOnly={readOnly}
        />
        <OpplysningerOmPersonstatus
          medlemskap={medlemskap}
          avvik={medlemskap.avvik}
          brukerNavn={fagsak.bruker.navn}
          annenpartNavn={fagsak.annenPart?.navn}
          alleKodeverk={alleKodeverk}
          readOnly={readOnly}
        />
        <OpplysningerFraMedlemskapsregister
          medlemskapsperioder={medlemskap.medlemskapsperioder}
          avvik={medlemskap.avvik}
          alleKodeverk={alleKodeverk}
          readOnly={readOnly}
        />
        <OpplysningerOmOppholdstillatelser
          oppholdstillatelser={medlemskap.oppholdstillatelser}
          avvik={medlemskap.avvik}
          alleKodeverk={alleKodeverk}
          readOnly={readOnly}
        />
      </VStack>
      {aksjonspunkter.some(
        ap => ap.status === aksjonspunktStatus.OPPRETTET || ap.status === aksjonspunktStatus.UTFORT,
      ) &&
        !readOnly && (
          <VurderMedlemsskapAksjonspunktForm
            manuellBehandlingResultat={medlemskap.manuellBehandlingResultat}
            aksjonspunkter={aksjonspunkter}
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
