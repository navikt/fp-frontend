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
  brukerNavn,
  annenpartNavn,
  alleKodeverk,
  readOnly,
  ...rest
}) => {
  return (
    <VStack gap="6">
      {aksjonspunkter.some(ap => ap.status === AksjonspunktStatus.OPPRETTET) && (
        <AksjonspunktHelpText aksjonspunkter={aksjonspunkter} />
      )}
      {medlemskap.manuellBehandling && readOnly && (
        <VurderMedlemsskapAksjonspunktForm
          manuellBehandling={medlemskap.manuellBehandling}
          aksjonspunkter={aksjonspunkter}
          alleKodeverk={alleKodeverk}
          readOnly={readOnly}
          {...rest}
        />
      )}
      {medlemskap.legacyManuellBehandling && !medlemskap.manuellBehandling && (
        <VurderMedlemsskapLegacyAksjonspunktVisning
          legacyManuellBehandling={medlemskap.legacyManuellBehandling}
          alleKodeverk={alleKodeverk}
        />
      )}
      <SituasjonsOversikt medlemskap={medlemskap} soknad={soknad} alleKodeverk={alleKodeverk} />

      <VStack gap="2">
        <OpplysningerOmUtenlandsopphold
          soknad={soknad}
          avvik={medlemskap.manuellBehandling?.avvik}
          readOnly={readOnly}
        />
        <OpplysningerOmAdresser
          medlemskap={medlemskap}
          avvik={medlemskap.manuellBehandling?.avvik}
          brukerNavn={brukerNavn}
          annenpartNavn={annenpartNavn}
          alleKodeverk={alleKodeverk}
          readOnly={readOnly}
        />
        <OpplysningerOmPersonstatus
          medlemskap={medlemskap}
          avvik={medlemskap.manuellBehandling?.avvik}
          brukerNavn={brukerNavn}
          annenpartNavn={annenpartNavn}
          alleKodeverk={alleKodeverk}
          readOnly={readOnly}
        />
        <OpplysningerFraMedlemskapsregister
          medlemskapsperioder={medlemskap.medlemskapsperioder}
          avvik={medlemskap.manuellBehandling?.avvik}
          alleKodeverk={alleKodeverk}
          readOnly={readOnly}
        />
        <OpplysningerOmOppholdstillatelser
          oppholdstillatelser={medlemskap.oppholdstillatelser}
          avvik={medlemskap.manuellBehandling?.avvik}
          alleKodeverk={alleKodeverk}
          readOnly={readOnly}
        />
      </VStack>
      {medlemskap.manuellBehandling && !readOnly && (
        <VurderMedlemsskapAksjonspunktForm
          manuellBehandling={medlemskap.manuellBehandling}
          aksjonspunkter={aksjonspunkter}
          alleKodeverk={alleKodeverk}
          readOnly={readOnly}
          {...rest}
        />
      )}
    </VStack>
  );
};

export default MedlemskapInfoPanel;
