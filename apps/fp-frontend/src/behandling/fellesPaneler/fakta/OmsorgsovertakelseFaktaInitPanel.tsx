import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { OmsorgsovertakelseFaktaIndex } from '@navikt/fp-fakta-omsorgsovertakelse';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET, // Aktivt aksjonspunkt
  // Legacy-aksjonspunkt
  AksjonspunktKode.AVKLAR_VILKÅR_FOR_OMSORGSOVERTAKELSE,
  AksjonspunktKode.AVKLAR_VILKÅR_FOR_FORELDREANSVAR,
  AksjonspunktKode.AVKLAR_OM_SØKER_ER_MANN_SOM_ADOPTERER_ALENE,
  AksjonspunktKode.AVKLAR_ADOPSJONSDOKUMENTAJON,
  AksjonspunktKode.AVKLAR_OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
  AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_2_LEDD,
  AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_4_LEDD,
  AksjonspunktKode.MANUELL_VURDERING_AV_OMSORGSVILKÅRET,
  AksjonspunktKode.OVERSTYRING_AV_ADOPSJONSVILKÅRET,
  AksjonspunktKode.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP,
];

export const OmsorgsovertakelseFaktaInitPanel = () => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = useBehandlingDataContext();

  const skalPanelVisesIMeny = harLenke(behandling, 'FAKTA_OMSORGSOVERTAKELSE');

  const api = useBehandlingApi(behandling);

  const { data: omsorgsovertakelse } = useQuery(api.faktaOmsorgsovertakelseOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.OMSORGSOVERTAKELSE}
      faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FaktaInitPanel.Title.Omsorgsovertakelse' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {omsorgsovertakelse ? <OmsorgsovertakelseFaktaIndex omsorgsovertakelse={omsorgsovertakelse} /> : <LoadingPanel />}
    </FaktaDefaultInitPanel>
  );
};
