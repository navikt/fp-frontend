import React, { FC } from 'react';
import { VStack } from '@navikt/ds-react';
import { AksjonspunktStatus } from '@navikt/ft-kodeverk';

import { MedlemskapFaktaProps } from '../MedlemskapFaktaIndex';

import AksjonspunktHelpText from './AksjonspunktHelpText';
import SituasjonsOversikt from './situasjon/SituasjonOversikt';
import OpplysningerOmUtenlandsopphold from './opplysningsKort/OpplysningerOmUtenlandsopphold';
import VurderMedlemsskapAksjonspunktForm from './aksjonspunkt/VurderMedlemsskapAksjonspunktForm';
import VurderMedlemsskapLegacyAksjonspunktVisning from './aksjonspunkt/VurderMedlemsskapLegacyAksjonspunktVisning';
import OpplysningerOmAdresser from './opplysningsKort/OpplysningerOmAdresser';
import OpplysningerOmPersonstatus from './opplysningsKort/OpplysningerOmPersonstatus/OpplysningerOmPersonstatus';
import OpplysningerFraMedlemskapsregister from './opplysningsKort/OpplysningerFraMedlemskapsregister';

/**
 * MedlemskapInfoPanel
 *
 * Har ansvar for å vise faktapanelene for medlemskap.
 */
const MedlemskapInfoPanel: FC<MedlemskapFaktaProps> = ({
  aksjonspunkter,
  medlemskap,
  soknad,
  brukerNavn,
  annenpartNavn,
  alleKodeverk,
  ...rest
}) => {
  return (
    <VStack gap="6">
      {aksjonspunkter.some(ap => ap.status === AksjonspunktStatus.OPPRETTET) && (
        <AksjonspunktHelpText aksjonspunkter={aksjonspunkter} />
      )}

      <SituasjonsOversikt medlemskap={medlemskap} soknad={soknad} alleKodeverk={alleKodeverk} />
      <OpplysningerOmUtenlandsopphold soknad={soknad} avvik={medlemskap.manuellBehandling?.avvik} />
      <OpplysningerOmAdresser
        medlemskap={medlemskap}
        avvik={medlemskap.manuellBehandling?.avvik}
        brukerNavn={brukerNavn}
        annenpartNavn={annenpartNavn}
        alleKodeverk={alleKodeverk}
      />
      <OpplysningerOmPersonstatus
        medlemskap={medlemskap}
        avvik={medlemskap.manuellBehandling?.avvik}
        brukerNavn={brukerNavn}
        annenpartNavn={annenpartNavn}
        alleKodeverk={alleKodeverk}
      />
      <OpplysningerFraMedlemskapsregister
        medlemskapsperiode={medlemskap.medlemskapsperiode}
        avvik={medlemskap.manuellBehandling?.avvik}
        alleKodeverk={alleKodeverk}
      />

      {medlemskap.manuellBehandling && (
        <VurderMedlemsskapAksjonspunktForm
          manuellBehandling={medlemskap.manuellBehandling}
          aksjonspunkter={aksjonspunkter}
          alleKodeverk={alleKodeverk}
          {...rest}
        />
      )}
      {medlemskap.legacyManuellBehandling && !medlemskap.manuellBehandling && (
        <VurderMedlemsskapLegacyAksjonspunktVisning
          legacyManuellBehandling={medlemskap.legacyManuellBehandling}
          alleKodeverk={alleKodeverk}
        />
      )}
    </VStack>
  );
};

export default MedlemskapInfoPanel;
