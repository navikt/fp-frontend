import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { OmsorgsovertakelseFaktaIndex } from '@navikt/fp-fakta-omsorgsovertakelse';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { adopsjonsvilkårene } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

// TODO: finn ut hvilke AP som skal inkluderes
const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
  AksjonspunktKode.ADOPSJONSDOKUMENTAJON,
  AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
  AksjonspunktKode.OMSORGSOVERTAKELSE,
  AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR,
  AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET, // Ta i bruk nytt navn for AP for omsorgsovertakelse
];

export const OmsorgsovertakelseFaktaInitPanel = () => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = use(BehandlingDataContext);

  const skalPanelVisesIMeny = behandling.vilkår.some(v => adopsjonsvilkårene.has(v.vilkarType));

  const api = useBehandlingApi(behandling);

  const { data: omsorgsovertakelse } = useQuery(api.faktaOmsorgsovertakelseOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.ADOPSJONSVILKARET}
      faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FaktaInitPanel.Title.Adopsjon' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {omsorgsovertakelse ? <OmsorgsovertakelseFaktaIndex omsorgsovertakelse={omsorgsovertakelse} /> : <LoadingPanel />}
    </FaktaDefaultInitPanel>
  );
};
