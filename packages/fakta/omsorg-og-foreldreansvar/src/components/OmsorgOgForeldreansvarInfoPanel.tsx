import { FormattedMessage } from 'react-intl';

import { HGrid, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import type { AdopsjonFamilieHendelse, Personoversikt, RelatertTilgrensedYtelse, Soknad } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { BarnPanel } from './fakta/BarnPanel';
import { ForeldrePanel } from './fakta/ForeldrePanel';
import { RettighetFaktaPanel } from './fakta/RettighetFaktaPanel';
import { OmsorgOgForeldreansvarForm } from './form/OmsorgOgForeldreansvarForm';

interface Props {
  søknad: Soknad;
  personoversikt: Personoversikt;
  adopsjon: AdopsjonFamilieHendelse;
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[];
}

export const OmsorgOgForeldreansvarInfoPanel = ({
  søknad,
  personoversikt,
  adopsjon,
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder,
}: Props) => {
  const { aksjonspunkterForPanel, harÅpentAksjonspunkt, isReadOnly } = usePanelDataContext();

  const harForeldreansvarAP = hasAksjonspunkt(
    AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR,
    aksjonspunkterForPanel,
  );

  return (
    <VStack gap="space-16">
      {!isReadOnly && harÅpentAksjonspunkt && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage
            id={
              harForeldreansvarAP
                ? 'OmsorgOgForeldreansvarInfoPanel.AksjonspunktText.Foreldreansvar'
                : 'OmsorgOgForeldreansvarInfoPanel.AksjonspunktText.Omsorgsovertakelse'
            }
          />
        </AksjonspunktHelpTextHTML>
      )}
      <HGrid gap="space-16" columns="repeat(auto-fit, minmax(16rem, 1fr))">
        <BarnPanel søknad={søknad} adopsjon={adopsjon} />
        <ForeldrePanel personoversikt={personoversikt} />
        {!harForeldreansvarAP && (
          <RettighetFaktaPanel
            farSøkerType={søknad.farSokerType}
            innvilgetRelatertTilgrensendeYtelserForAnnenForelder={innvilgetRelatertTilgrensendeYtelserForAnnenForelder}
          />
        )}
      </HGrid>
      <OmsorgOgForeldreansvarForm søknad={søknad} adopsjon={adopsjon} harForeldreansvarAP={harForeldreansvarAP} />
    </VStack>
  );
};
