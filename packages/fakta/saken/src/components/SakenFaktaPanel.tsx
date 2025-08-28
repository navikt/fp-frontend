import { FormattedMessage } from 'react-intl';

import { HStack, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Soknad } from '@navikt/fp-types';
import type {
  AvklarDekningsgradAp,
  MerkOpptjeningUtlandAp,
  OverstyringAvklarStartdatoForPeriodenAp,
  OverstyringDekningsgradAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
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
  submittable: boolean;
  kanOverstyreAccess: boolean;
}

const erMarkertUtenlandssak = (aksjonspunkter: Aksjonspunkt[]): boolean =>
  aksjonspunkter.some(ap => ap.definisjon === AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK);

export const SakenFaktaPanel = ({ soknad, utlandDokStatus, submittable, kanOverstyreAccess }: Props) => {
  const {
    aksjonspunkterForPanel,
    submitCallback,
    alleMerknaderFraBeslutter,
    harÅpneAksjonspunkter,
    fagsak,
    isReadOnly,
  } = usePanelDataContext<
    MerkOpptjeningUtlandAp | OverstyringAvklarStartdatoForPeriodenAp | OverstyringDekningsgradAp | AvklarDekningsgradAp
  >();

  const automatiskMarkeringAvUtenlandssakAp = aksjonspunkterForPanel.find(
    ap => ap.definisjon === AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  );
  const automatiskAp = aksjonspunkterForPanel.find(ap => ap.definisjon === AksjonspunktKode.AVKLAR_DEKNINGSGRAD);
  const overstyringsAp = aksjonspunkterForPanel.find(ap => ap.definisjon === AksjonspunktKode.OVERSTYR_DEKNINGSGRAD);

  return (
    <VStack gap="space-32">
      {harÅpneAksjonspunkter && erMarkertUtenlandssak(aksjonspunkterForPanel) && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="SakenFaktaPanel.OpptjeningUtland" />
        </AksjonspunktHelpTextHTML>
      )}
      {harÅpneAksjonspunkter &&
        aksjonspunkterForPanel.some(ap => ap.definisjon === AksjonspunktKode.AVKLAR_DEKNINGSGRAD) && (
          <AksjonspunktHelpTextHTML>
            <FormattedMessage id="SakenFaktaPanel.AvklarDekningsgrad" />
          </AksjonspunktHelpTextHTML>
        )}
      <VStack gap="space-40">
        {soknad && automatiskAp && (
          <DekningradApForm
            søknad={soknad}
            fagsak={fagsak}
            aksjonspunkt={automatiskAp}
            submitCallback={submitCallback}
            readOnly={isReadOnly}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          />
        )}
        <HStack gap="space-40">
          {automatiskMarkeringAvUtenlandssakAp && (
            <InnhentDokOpptjeningUtlandPanel
              dokStatus={utlandDokStatus?.dokStatus}
              readOnly={isReadOnly}
              harApneAksjonspunkter={harÅpneAksjonspunkter}
              aksjonspunkt={automatiskMarkeringAvUtenlandssakAp}
              submittable={submittable}
              submitCallback={submitCallback}
              alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
            />
          )}
          {fagsak.fagsakYtelseType !== 'SVP' && !!soknad && (
            <StartdatoForForeldrepengerperiodenForm
              aksjonspunkt={aksjonspunkterForPanel.find(
                ap => ap.definisjon === AksjonspunktKode.OVERSTYR_AVKLAR_STARTDATO,
              )}
              submitCallback={submitCallback}
              readOnly={isReadOnly}
              alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
              soknad={soknad}
            />
          )}
        </HStack>
        {soknad && !automatiskAp && fagsak.fagsakYtelseType === 'FP' && (
          <DekningradForm
            søknad={soknad}
            fagsak={fagsak}
            aksjonspunkt={overstyringsAp}
            submitCallback={submitCallback}
            readOnly={isReadOnly}
            kanOverstyreAccess={kanOverstyreAccess}
          />
        )}
      </VStack>
    </VStack>
  );
};
