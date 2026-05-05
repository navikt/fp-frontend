import { useIntl } from 'react-intl';

import { AapKombinertAtflFaktaIndex } from '@navikt/fp-fakta-aap-kombinert-atfl';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.MANUELL_KONTROLL_AAP_KOMBINERT_ATFL];

export const AapKombinertAtflFaktaInitPanel = () => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);
  const { behandling } = useBehandlingDataContext();

  const aksjonspunkt = behandling.aksjonspunkt.find(
    ap => ap.definisjon === AksjonspunktKode.MANUELL_KONTROLL_AAP_KOMBINERT_ATFL,
  );

  const skalPanelVisesIMeny = !!aksjonspunkt;

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.AAP_KOMBINERT_ATFL}
      faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FaktaInitPanel.Title.AapKombinertBeregning' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {aksjonspunkt ? <AapKombinertAtflFaktaIndex aksjonspunkt={aksjonspunkt} /> : <></>}
    </FaktaDefaultInitPanel>
  );
};
