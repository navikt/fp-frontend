import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AdopsjonFaktaIndex } from '@navikt/fp-fakta-adopsjon';
import { adopsjonsvilkarene, AksjonspunktKode, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
  AksjonspunktKode.ADOPSJONSDOKUMENTAJON,
  AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
];

export const AdopsjonsvilkaretFaktaInitPanel = () => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling, fagsak } = use(BehandlingDataContext);

  const skalPanelVisesIMeny = behandling.vilkår.some(v => adopsjonsvilkarene.some(av => av === v.vilkarType));

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
      {familiehendelse && søknad ? (
        <AdopsjonFaktaIndex
          familiehendelse={familiehendelse}
          soknad={søknad}
          isForeldrepengerFagsak={fagsak.fagsakYtelseType === FagsakYtelseType.FORELDREPENGER}
          submittable={standardPanelProps.submittable}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
