import { FormattedMessage } from 'react-intl';

import { HGrid, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Fødsel } from '@navikt/fp-types';
import type { DokumentLinkReferanse } from '@navikt/fp-ui-komponenter';
import { usePanelDataContext } from '@navikt/fp-utils';

import { SjekkManglendeFødselForm } from './aksjonspunkt/SjekkManglendeFødselForm';
import { SjekkTerminbekreftelseForm } from './aksjonspunkt/SjekkTerminbekreftelseForm';
import { FaktaFraFReg } from './fakta/FaktaFraFReg';
import { FaktaFraSøknad } from './fakta/FaktaFraSøknad';
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
            {terminbekreftelseAp && <FormattedMessage id="FodselInfoPanel.SjekkTerminbekreftelsen" />}
            {manglendeFødselAp && <FormattedMessage id="FodselInfoPanel.SjekkManglendeFødsel" />}
          </>
        </AksjonspunktHelpTextHTML>
      )}

      <Situasjon gjeldende={fødsel.gjeldende} />

      <HGrid columns={2} gap="4">
        <FaktaFraSøknad søknad={fødsel.søknad} terminbekreftelseDokument={terminbekreftelseDokument} />
        <FaktaFraFReg register={fødsel.register} />
      </HGrid>

      {terminbekreftelseAp && (
        <SjekkTerminbekreftelseForm submittable={submittable} fødsel={fødsel} aksjonspunkt={terminbekreftelseAp} />
      )}

      {manglendeFødselAp && (
        <SjekkManglendeFødselForm submittable={submittable} fødsel={fødsel} aksjonspunkt={manglendeFødselAp} />
      )}
    </VStack>
  );
};
