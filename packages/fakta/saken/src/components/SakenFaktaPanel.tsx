import { FormattedMessage } from 'react-intl';

import { HStack, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import type { Aksjonspunkt, Soknad } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { DekningradApForm } from './dekningsgrad/DekningradApForm';
import { DekningradForm } from './dekningsgrad/DekningradForm';
import { InnhentDokOpptjeningUtlandPanel } from './innhentDok/InnhentDokOpptjeningUtlandPanel';
import { StartdatoForForeldrepengerperiodenForm } from './startdatoForForeldrepenger/StartdatoForForeldrepengerperiodenForm';

interface Props {
  soknad?: Soknad;
  utlandDokStatus?: {
    dokStatus?: string;
  };
  kanOverstyreAccess: boolean;
}

const erMarkertUtenlandssak = (aksjonspunkter: Aksjonspunkt[]): boolean =>
  aksjonspunkter.some(ap => ap.definisjon === '5068');

export const SakenFaktaPanel = ({ soknad, utlandDokStatus, kanOverstyreAccess }: Props) => {
  const { aksjonspunkterForPanel, harÅpentAksjonspunkt, fagsak } = usePanelDataContext();

  const automatiskMarkeringAvUtenlandssakAp = aksjonspunkterForPanel.find(ap => ap.definisjon === '5068');
  const automatiskAp = aksjonspunkterForPanel.find(ap => ap.definisjon === '5002');
  const overstyringsAp = aksjonspunkterForPanel.find(ap => ap.definisjon === '6016');

  return (
    <VStack gap="space-32">
      {harÅpentAksjonspunkt && erMarkertUtenlandssak(aksjonspunkterForPanel) && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="SakenFaktaPanel.OpptjeningUtland" />
        </AksjonspunktHelpTextHTML>
      )}
      {harÅpentAksjonspunkt && aksjonspunkterForPanel.some(ap => ap.definisjon === '5002') && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="SakenFaktaPanel.AvklarDekningsgrad" />
        </AksjonspunktHelpTextHTML>
      )}
      <VStack gap="space-40">
        {soknad && automatiskAp && <DekningradApForm søknad={soknad} aksjonspunkt={automatiskAp} />}
        <HStack gap="space-40">
          {automatiskMarkeringAvUtenlandssakAp && (
            <InnhentDokOpptjeningUtlandPanel
              dokStatus={utlandDokStatus?.dokStatus}
              aksjonspunkt={automatiskMarkeringAvUtenlandssakAp}
            />
          )}
          {fagsak.fagsakYtelseType !== 'SVP' && !!soknad && (
            <StartdatoForForeldrepengerperiodenForm
              aksjonspunkt={aksjonspunkterForPanel.find(ap => ap.definisjon === '6045')}
              soknad={soknad}
            />
          )}
        </HStack>
        {soknad && !automatiskAp && fagsak.fagsakYtelseType === 'FP' && (
          <DekningradForm søknad={soknad} aksjonspunkt={overstyringsAp} kanOverstyreAccess={kanOverstyreAccess} />
        )}
      </VStack>
    </VStack>
  );
};
