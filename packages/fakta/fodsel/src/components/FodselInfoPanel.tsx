import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FodselSammenligningIndex } from '@navikt/fp-prosess-fakta-fodsel-sammenligning';
import type { FamilieHendelse, FamilieHendelseSamling, Soknad } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { SjekkFodselDokForm } from './SjekkFodselDokForm';
import { TermindatoFaktaForm } from './TermindatoFaktaForm';

const { TERMINBEKREFTELSE, SJEKK_MANGLENDE_FODSEL } = AksjonspunktKode;

interface Props {
  familiehendelse: FamilieHendelseSamling;
  submittable: boolean;
  soknad: Soknad;
  soknadOriginalBehandling?: Soknad;
  familiehendelseOriginalBehandling?: FamilieHendelse;
}

/**
 * FodselInfoPanel
 *
 * Har ansvar for å sette opp formen for faktapenelet til Fødselsvilkåret.
 */
export const FodselInfoPanel = ({
  submittable,
  soknad,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
  familiehendelse,
}: Props) => {
  const { behandling, aksjonspunkterForPanel, harÅpneAksjonspunkter } = usePanelDataContext();

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

      <FodselSammenligningIndex
        behandlingsTypeKode={behandling.type}
        soknad={soknad}
        soknadOriginalBehandling={soknadOriginalBehandling}
        familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
        registerFamiliehendelse={familiehendelse.register ?? undefined}
        gjeldendeFamilieHendelse={familiehendelse.gjeldende}
      />

      {terminbekreftelseAp && (
        <TermindatoFaktaForm
          submittable={submittable}
          soknad={soknad}
          gjeldendeFamiliehendelse={familiehendelse.gjeldende}
          aksjonspunkt={terminbekreftelseAp}
        />
      )}

      {manglendeFødselAp && (
        <SjekkFodselDokForm
          submittable={submittable}
          soknad={soknad}
          gjeldendeFamiliehendelse={familiehendelse.gjeldende}
          registerFamiliehendelse={familiehendelse.register}
          aksjonspunkt={manglendeFødselAp}
        />
      )}
    </VStack>
  );
};
