import { use } from 'react';
import { useIntl } from 'react-intl';

import { useQuery } from '@tanstack/react-query';

import { SakenFaktaIndex } from '@navikt/fp-fakta-saken';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { AksjonspunktKode } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5068', '6045', '5002', '6016'];

const OVERSTYRING_AP_CODES: AksjonspunktKode[] = ['6045', '6016'];

/**
 * SakenFaktaInitPanel
 *
 * Dette faktapanelet skal alltid vises
 */
export const SakenFaktaInitPanel = () => {
  const intl = useIntl();

  const { behandling, rettigheter } = use(BehandlingDataContext);

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER, OVERSTYRING_AP_CODES);

  const api = useBehandlingApi(behandling);

  const { data: søknad } = useQuery(api.søknadOptions(behandling));
  const { data: utlandDokStatus } = useQuery(api.utlandDokStatusOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.SAKEN}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Saken' })}
      skalPanelVisesIMeny
    >
      <SakenFaktaIndex
        soknad={søknad}
        utlandDokStatus={utlandDokStatus}
        kanOverstyreAccess={rettigheter.kanOverstyreAccess.isEnabled}
      />
    </FaktaDefaultInitPanel>
  );
};
