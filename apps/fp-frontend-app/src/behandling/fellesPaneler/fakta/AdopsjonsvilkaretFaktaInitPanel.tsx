import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AdopsjonFaktaIndex } from '@navikt/fp-fakta-adopsjon';
import { adopsjonsvilkarene, AksjonspunktKode, SoknadType } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
  AksjonspunktKode.ADOPSJONSDOKUMENTAJON,
  AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
];

export const AdopsjonsvilkaretFaktaInitPanel = () => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling, fagsak } = use(BehandlingDataContext);

  const skalPanelVisesIMeny = (behandling.vilkår ?? []).some(v => adopsjonsvilkarene.some(av => av === v.vilkarType));

  const api = useBehandlingApi(behandling);

  const { data: familiehendelse } = useQuery(api.familiehendelseOptions(behandling, skalPanelVisesIMeny));
  const { data: søknad } = useQuery(api.søknadOptions(behandling));

  const gjeldendeFamiliehendelse = familiehendelse?.gjeldende;

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.ADOPSJONSVILKARET}
      faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FaktaInitPanel.Title.Adopsjon' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {søknad?.soknadType === SoknadType.ADOPSJON &&
      gjeldendeFamiliehendelse?.['@type'] === 'foreldrepenger.familiehendelse.rest.AvklartDataAdopsjonDto' ? (
        <AdopsjonFaktaIndex
          gjeldendeFamiliehendelse={gjeldendeFamiliehendelse}
          soknad={søknad}
          isForeldrepengerFagsak={fagsak.fagsakYtelseType === 'FP'}
          submittable={standardPanelProps.submittable}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
