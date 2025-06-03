import { FormattedMessage } from 'react-intl';

import { HGrid, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Fødsel } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { FaktaFødselFraFReg } from './fakta/FaktaFødselFraFReg';
import { FaktaFødselFraSøknad } from './fakta/FaktaFødselFraSøknad';
import { Situasjon } from './fakta/Situasjon.tsx';
import { SjekkFodselDokForm } from './SjekkFodselDokForm';
import { TermindatoFaktaForm } from './TermindatoFaktaForm';

const { TERMINBEKREFTELSE, SJEKK_MANGLENDE_FODSEL } = AksjonspunktKode;

interface Props {
  fødsel: Fødsel;
  submittable: boolean;
}

/**
 * FodselInfoPanel
 *
 * Har ansvar for å sette opp formen for faktapenelet til Fødselsvilkåret.
 */
export const FodselInfoPanel = ({ submittable, fødsel }: Props) => {
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
        <FaktaFødselFraSøknad søknad={fødsel.søknad} />
        <FaktaFødselFraFReg register={fødsel.register} />
      </HGrid>

      {terminbekreftelseAp && (
        <TermindatoFaktaForm submittable={submittable} fødsel={fødsel} aksjonspunkt={terminbekreftelseAp} />
      )}

      {manglendeFødselAp && (
        <SjekkFodselDokForm submittable={submittable} fødsel={fødsel} aksjonspunkt={manglendeFødselAp} />
      )}
    </VStack>
  );
};
