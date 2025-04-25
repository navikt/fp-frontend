import { FormattedMessage } from 'react-intl';

import { HGrid, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import type { Fødsel } from '@navikt/fp-types';
import type { DokumentLinkReferanse } from '@navikt/fp-ui-komponenter';
import { usePanelDataContext } from '@navikt/fp-utils';

import { SjekkManglendeFødselForm } from './aksjonspunkt/SjekkManglendeFødselForm';
import { SjekkTerminbekreftelseForm } from './aksjonspunkt/SjekkTerminbekreftelseForm';
import { FaktaFraFReg } from './fakta/FaktaFraFReg';
import { FaktaFraSøknad } from './fakta/FaktaFraSøknad';
import { Situasjon } from './fakta/Situasjon';
import { OverstyringPanel } from './overstyring/OverstyringPanel';

const { SJEKK_TERMINBEKREFTELSE, SJEKK_MANGLENDE_FØDSEL } = AksjonspunktKode;

interface Props {
  fødsel: Fødsel;
  terminbekreftelseDokument: DokumentLinkReferanse | undefined;
}

/**
 * FodselInfoPanel
 *
 * Har ansvar for å sette opp formen for faktapenelet til Fødselsvilkåret.
 */
export const FodselInfoPanel = ({ fødsel, terminbekreftelseDokument }: Props) => {
  const { aksjonspunkterForPanel } = usePanelDataContext();

  const terminbekreftelseAp = aksjonspunkterForPanel.find(ap => ap.definisjon === SJEKK_TERMINBEKREFTELSE);
  const manglendeFødselAp = aksjonspunkterForPanel.find(ap => ap.definisjon === SJEKK_MANGLENDE_FØDSEL);

  return (
    <VStack gap="space-16">
      <OverstyringPanel gjeldende={fødsel.gjeldende} />

      <AksjonspunktHelpTextHTML>
        {terminbekreftelseAp?.status === AksjonspunktStatus.OPPRETTET && (
          <FormattedMessage id="FodselInfoPanel.SjekkTerminbekreftelse" />
        )}
        {manglendeFødselAp?.status === AksjonspunktStatus.OPPRETTET && (
          <FormattedMessage id="FodselInfoPanel.SjekkManglendeFødsel" />
        )}
      </AksjonspunktHelpTextHTML>

      <Situasjon gjeldende={fødsel.gjeldende} />

      <HGrid columns={2} gap="space-16">
        <FaktaFraSøknad søknad={fødsel.søknad} terminbekreftelseDokument={terminbekreftelseDokument} />
        <FaktaFraFReg register={fødsel.register} />
      </HGrid>

      {terminbekreftelseAp && <SjekkTerminbekreftelseForm fødsel={fødsel} aksjonspunkt={terminbekreftelseAp} />}

      {manglendeFødselAp && <SjekkManglendeFødselForm fødsel={fødsel} aksjonspunkt={manglendeFødselAp} />}
    </VStack>
  );
};
