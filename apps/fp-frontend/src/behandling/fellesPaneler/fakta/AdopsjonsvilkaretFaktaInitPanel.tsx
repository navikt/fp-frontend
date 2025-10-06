import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AdopsjonFaktaIndex } from '@navikt/fp-fakta-adopsjon';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { adopsjonsvilkårene, type AksjonspunktKode } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5006', '5004', '5005'];

export const AdopsjonsvilkaretFaktaInitPanel = () => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling, fagsak } = use(BehandlingDataContext);

  const skalPanelVisesIMeny = behandling.vilkår.some(v => adopsjonsvilkårene.has(v.vilkarType));

  const api = useBehandlingApi(behandling);

  const { data: familiehendelse } = useQuery(api.familiehendelseOptions(behandling, skalPanelVisesIMeny));
  const { data: søknad } = useQuery(api.søknadOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.ADOPSJONSVILKARET}
      faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FaktaInitPanel.Title.Adopsjon' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {familiehendelse?.adopsjon && søknad && søknad.soknadType === 'ST-002' ? (
        <AdopsjonFaktaIndex
          adopsjon={familiehendelse.adopsjon}
          soknad={søknad}
          isForeldrepengerFagsak={fagsak.fagsakYtelseType === 'FP'}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
