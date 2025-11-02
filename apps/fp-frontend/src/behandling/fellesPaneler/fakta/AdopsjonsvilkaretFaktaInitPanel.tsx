import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AdopsjonFaktaIndex } from '@navikt/fp-fakta-adopsjon';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { adopsjonsvilkårene } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.AVKLAR_OM_SØKER_ER_MANN_SOM_ADOPTERER_ALENE,
  AksjonspunktKode.AVKLAR_ADOPSJONSDOKUMENTAJON,
  AksjonspunktKode.AVKLAR_OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
];

export const AdopsjonsvilkaretFaktaInitPanel = () => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling, fagsak } = useBehandlingDataContext();

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
      {familiehendelse?.adopsjon && søknad?.soknadType === 'ST-002' ? (
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
