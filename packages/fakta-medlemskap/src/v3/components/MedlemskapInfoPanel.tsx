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
      {medlemskap.manuellBehandlingResultat && readOnly && (
        <VurderMedlemsskapAksjonspunktForm
          manuellBehandlingResultat={medlemskap.manuellBehandlingResultat}
          aksjonspunkter={aksjonspunkter}
          alleKodeverk={alleKodeverk}
          readOnly={readOnly}
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
        <OpplysningerOmUtenlandsopphold
          soknad={soknad}
          avvik={medlemskap.avvik}
          readOnly={readOnly}
        />
        <OpplysningerOmAdresser
          medlemskap={medlemskap}
          avvik={medlemskap.avvik}
          brukerNavn={brukerNavn}
          annenpartNavn={annenpartNavn}
          alleKodeverk={alleKodeverk}
          readOnly={readOnly}
        />
        <OpplysningerOmPersonstatus
          medlemskap={medlemskap}
          avvik={medlemskap.avvik}
          brukerNavn={brukerNavn}
          annenpartNavn={annenpartNavn}
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
      {aksjonspunkter.some(ap => ap.status === AksjonspunktStatus.OPPRETTET || ap.status === AksjonspunktStatus.UTFORT) && !readOnly && (
        <VurderMedlemsskapAksjonspunktForm
          manuellBehandlingResultat={medlemskap.manuellBehandlingResultat}
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
