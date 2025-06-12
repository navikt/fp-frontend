import { FormattedMessage } from 'react-intl';

import { HGrid, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Fødsel } from '@navikt/fp-types';
import type { DokumentLinkReferanse } from '@navikt/fp-ui-komponenter';
import { usePanelDataContext } from '@navikt/fp-utils';

import { SjekkManglendeFDselForm } from './aksjonspunkt/SjekkManglendeFødselForm';
import { SjekkTerminbekreftelseForm } from './aksjonspunkt/SjekkTerminbekreftelseForm';
import { FaktaFødselFraFReg } from './fakta/FaktaFødselFraFReg';
import { FaktaFødselFraSøknad } from './fakta/FaktaFødselFraSøknad';
import { Situasjon } from './fakta/Situasjon';

const { TERMINBEKREFTELSE, SJEKK_MANGLENDE_FODSEL } = AksjonspunktKode;

interface Props {
  fødsel: Fødsel;
  submittable: boolean;
  terminbekreftelseDokument: DokumentLinkReferanse | undefined;
}

/**
 * FodselInfoPanel
 *
 * Har ansvar for å sette opp formen for faktapenelet til Fødselsvilkåret.
 */
export const FodselInfoPanel = ({ submittable, fødsel, terminbekreftelseDokument }: Props) => {
  const { aksjonspunkterForPanel, harÅpneAksjonspunkter } = usePanelDataContext();

  const terminbekreftelseAp = aksjonspunkterForPanel.find(ap => ap.definisjon === TERMINBEKREFTELSE);
  const manglendeFødselAp = aksjonspunkterForPanel.find(ap => ap.definisjon === SJEKK_MANGLENDE_FODSEL);

  return (
    <VStack gap="4">
      {harÅpneAksjonspunkter && (
        <AksjonspunktHelpTextHTML>
          <>
            {terminbekreftelseAp && <FormattedMessage id="FodselInfoPanel.KontrollerMotTerminbekreftelsen" />}
            {manglendeFødselAp && <FormattedMessage id="FodselInfoPanel.KontrollerMotFodselsdokumentasjon" />}
          </>
        </AksjonspunktHelpTextHTML>
      )}

      <Situasjon gjeldende={fødsel.gjeldende} />

      <HGrid columns={2} gap="4">
        <FaktaFødselFraSøknad søknad={fødsel.søknad} terminbekreftelseDokument={terminbekreftelseDokument} />
        <FaktaFødselFraFReg register={fødsel.register} />
      </HGrid>

      {terminbekreftelseAp && (
        <SjekkTerminbekreftelseForm submittable={submittable} fødsel={fødsel} aksjonspunkt={terminbekreftelseAp} />
      )}

      {manglendeFødselAp && (
        <SjekkManglendeFDselForm submittable={submittable} fødsel={fødsel} aksjonspunkt={manglendeFødselAp} />
      )}
    </VStack>
  );
};
