import { useIntl } from 'react-intl';

import { AapFaktaIndex } from '@navikt/fp-fakta-aap';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.MANUELL_KONTROLL_AAP_KOMBINERT_ATFL_KODE];

export const AapFaktaInitPanel = () => {
  const intl = useIntl();
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);
  const { behandling } = useBehandlingDataContext();

  const aksjonspunkt = behandling.aksjonspunkt.find(
    ap => ap.definisjon === AksjonspunktKode.MANUELL_KONTROLL_AAP_KOMBINERT_ATFL_KODE,
  );

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.ARBEIDSAVKLARINGSPENGER}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Arbeidsavklaringspenger' })}
      skalPanelVisesIMeny={!!aksjonspunkt}
    >
      {aksjonspunkt ? <AapFaktaIndex aksjonspunkt={aksjonspunkt} /> : <></>}
    </FaktaDefaultInitPanel>
  );
};
