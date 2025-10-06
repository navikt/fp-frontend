import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { UttakFaktaEøsIndex } from '@navikt/fp-fakta-uttak-eos';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { AksjonspunktKode } from '@navikt/fp-types';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5103', '6103'];

const OVERSTYRING_AP_CODES: AksjonspunktKode[] = ['6103'];

export const UttakEøsFaktaInitPanel = () => {
  const intl = useIntl();

  const { behandling, rettigheter } = use(BehandlingDataContext);

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER, OVERSTYRING_AP_CODES);

  const api = useBehandlingApi(behandling);
  const { data: annenForelderUttakEøs } = useQuery(api.uttakAnnenpartEøsOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.UTTAK_EØS}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Uttak.Eos' })}
      skalPanelVisesIMeny={harLenke(behandling, 'UTTAK_ANNEN_FORELDER_EOS')}
    >
      {annenForelderUttakEøs ? (
        <UttakFaktaEøsIndex
          kanOverstyre={rettigheter.kanOverstyreAccess.isEnabled && behandling.harSattEndringsdato}
          annenForelderUttakEøs={annenForelderUttakEøs}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
