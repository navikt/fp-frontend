import { type ReactElement } from 'react';
import { useIntl } from 'react-intl';

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { Behandling, BehandlingFpSak } from '@navikt/fp-types';
import { MellomlagretFormDataProvider } from '@navikt/fp-utils';

import { BehandlingPanelDataProvider } from '../panelData/BehandlingPanelDataProvider';
import { useFaktaMenyRegistrerer } from './useFaktaMenyRegistrerer';
import type { StandardFaktaPanelProps } from './useStandardFaktaPanelProps';

interface Props<T extends Behandling> {
  standardPanelProps: StandardFaktaPanelProps<T>;
  skalPanelVisesIMeny: boolean;
  faktaPanelKode: FaktaPanelCode;
  children: ReactElement;
}

export const FaktaDefaultInitPanel = <T extends Behandling = BehandlingFpSak>({
  standardPanelProps,
  skalPanelVisesIMeny,
  faktaPanelKode,
  children,
}: Props<T>) => {
  const intl = useIntl();

  const skalVisePanel = useFaktaMenyRegistrerer(
    faktaPanelKode,
    standardPanelProps.faktaPanelMenyTekst,
    skalPanelVisesIMeny,
    standardPanelProps.harÅpentAksjonspunkt,
  );

  const panelTittel = intl.formatMessage(
    { id: 'FaktaDefaultInitPanel.Tittel' },
    { tittel: standardPanelProps.faktaPanelMenyTekst.toLocaleLowerCase() },
  );

  return (
    <MellomlagretFormDataProvider behandling={standardPanelProps.behandling}>
      {skalVisePanel ? (
        <BehandlingPanelDataProvider panelData={{ ...standardPanelProps, panelTittel }}>
          {children}
        </BehandlingPanelDataProvider>
      ) : null}
    </MellomlagretFormDataProvider>
  );
};
