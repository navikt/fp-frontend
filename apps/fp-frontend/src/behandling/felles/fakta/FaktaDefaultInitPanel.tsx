import { type ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';

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
  faktaPanelMenyTekst: string;
  children: ReactElement;
}

export const FaktaDefaultInitPanel = <T extends Behandling = BehandlingFpSak>({
  standardPanelProps,
  skalPanelVisesIMeny,
  faktaPanelKode,
  faktaPanelMenyTekst,
  children,
}: Props<T>) => {
  const skalVisePanel = useFaktaMenyRegistrerer(
    faktaPanelKode,
    faktaPanelMenyTekst,
    skalPanelVisesIMeny,
    standardPanelProps.harÅpentAksjonspunkt,
  );

  return (
    <MellomlagretFormDataProvider behandling={standardPanelProps.behandling}>
      {skalVisePanel ? (
        <VStack gap="space-8">
          <Heading level="2" size="small">
            <FormattedMessage
              id="FaktaDefaultInitPanel.Tittel"
              values={{ tittel: faktaPanelMenyTekst.toLocaleLowerCase() }}
            />
          </Heading>
          <BehandlingPanelDataProvider panelData={standardPanelProps}>{children}</BehandlingPanelDataProvider>
        </VStack>
      ) : null}
    </MellomlagretFormDataProvider>
  );
};
