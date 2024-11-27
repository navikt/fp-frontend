import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';

import { AksjonspunktStatus } from '@navikt/fp-kodeverk';

import { MedlemskapFaktaProps } from '../MedlemskapFaktaIndex';
import VurderMedlemskapAksjonspunktForm from './aksjonspunkt/VurderMedlemskapAksjonspunktForm';
import VurderMedlemskapLegacyAksjonspunktVisning from './aksjonspunkt/VurderMedlemskapLegacyAksjonspunktVisning';
import AksjonspunktHelpText from './AksjonspunktHelpText';
import OpplysningerFraMedlemskapsregister from './opplysningsKort/OpplysningerFraMedlemskapsregister';
import OpplysningerOmAdresser from './opplysningsKort/OpplysningerOmAdresser';
import OpplysningerOmOppholdstillatelser from './opplysningsKort/OpplysningerOmOppholdstillatelser';
import OpplysningerOmPersonstatus from './opplysningsKort/OpplysningerOmPersonstatus/OpplysningerOmPersonstatus';
import OpplysningerOmUtenlandsopphold from './opplysningsKort/OpplysningerOmUtenlandsopphold';
import SituasjonsOversikt from './situasjon/SituasjonOversikt';

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
  behandling,
  readOnly,
  ...rest
}) => {
  const aksjonspunkt = aksjonspunkter.find(
    ap => ap.status === AksjonspunktStatus.OPPRETTET || ap.status === AksjonspunktStatus.UTFORT,
  );
  const harAksjonspunkt = !!aksjonspunkt;

  if (medlemskap) {
    return (
      <VStack gap="6">
        <AksjonspunktHelpText aksjonspunkter={aksjonspunkter} medlemskap={medlemskap} />
        {medlemskap.manuellBehandlingResultat && readOnly && aksjonspunkt && (
          <VurderMedlemskapAksjonspunktForm
            manuellBehandlingResultat={medlemskap.manuellBehandlingResultat}
            aksjonspunkt={aksjonspunkt}
            behandling={behandling}
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
            behandling={behandling}
            alleKodeverk={alleKodeverk}
            readOnly={readOnly}
            ytelse={fagsak.fagsakYtelseType}
            {...rest}
          />
        )}
      </VStack>
    );
  } else {
    return <FormattedMessage id="MedlemskapInfoPanel.ManglerPersonopplysninger" />;
  }
};

export default MedlemskapInfoPanel;
