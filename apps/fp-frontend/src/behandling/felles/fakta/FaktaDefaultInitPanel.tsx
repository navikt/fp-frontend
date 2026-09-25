import { type ReactElement } from 'react';
import { useIntl } from 'react-intl';

import type { Behandling, BehandlingFpSak } from '@navikt/fp-types';
import { MellomlagretFormDataProvider } from '@navikt/fp-utils';

import { BehandlingPanelDataProvider } from '../panelData/BehandlingPanelDataProvider';
import { hentFaktaPanelMenyTekst } from './faktaPanelNavn';
import { useFaktaMenyRegistrerer } from './useFaktaMenyRegistrerer';
import type { StandardFaktaPanelProps } from './useStandardFaktaPanelProps';

interface Props<T extends Behandling> {
  standardPanelProps: StandardFaktaPanelProps<T>;
  skalPanelVisesIMeny: boolean;
  children: ReactElement;
}

export const FaktaDefaultInitPanel = <T extends Behandling = BehandlingFpSak>({
  standardPanelProps,
  skalPanelVisesIMeny,
  children,
}: Props<T>) => {
  const intl = useIntl();

  const faktaPanelMenyTekst = hentFaktaPanelMenyTekst(standardPanelProps.faktaPanelKode, intl);

  const skalVisePanel = useFaktaMenyRegistrerer(
    standardPanelProps.faktaPanelKode,
    faktaPanelMenyTekst,
    skalPanelVisesIMeny,
    standardPanelProps.harÅpentAksjonspunkt,
  );

  return (
    <MellomlagretFormDataProvider behandling={standardPanelProps.behandling}>
      {skalVisePanel ? (
        <BehandlingPanelDataProvider panelData={standardPanelProps}>{children}</BehandlingPanelDataProvider>
      ) : null}
    </MellomlagretFormDataProvider>
  );
};
