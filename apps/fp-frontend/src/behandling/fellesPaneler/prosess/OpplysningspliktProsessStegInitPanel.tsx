import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { SokersOpplysningspliktVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-sokers-opplysningsplikt';
import type { ArbeidsgiverOpplysningerPerId, VilkårType } from '@navikt/fp-types';

import { getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { useProsessPanelPrioritet } from '../../felles/prioritet/usePanelPrioritet';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { skalViseProsessPanel } from '../../felles/prosess/skalViseProsessPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.SØKERS_OPPLYSNINGSPLIKT_OVST, AksjonspunktKode.UTGÅTT_5017];

const VILKAR_KODER = ['FP_VK_34'] satisfies VilkårType[];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const OpplysningspliktProsessStegInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const { behandling } = useBehandlingDataContext();

  const skalPanelVisesIMeny =
    standardPanelProps.behandling.type === 'BT-004'
      ? false
      : skalViseProsessPanel(
          standardPanelProps.aksjonspunkterForPanel,
          VILKAR_KODER,
          standardPanelProps.vilkårForPanel,
        );
  const prioriter = useProsessPanelPrioritet({
    panelKode: ProsessStegCode.OPPLYSNINGSPLIKT,
    skalVisesIMeny: skalPanelVisesIMeny,
    skalMarkeresSomAktiv: standardPanelProps.harÅpentAksjonspunkt,
  });

  const api = getBehandlingApi(behandling);

  const { data: søknad } = useQuery(prioriter(api.søknadOptions(behandling)));

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.OPPLYSNINGSPLIKT}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Opplysningsplikt' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {søknad ? (
        <SokersOpplysningspliktVilkarProsessIndex
          søknad={søknad}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          status={standardPanelProps.status}
        />
      ) : (
        <LoadingPanel />
      )}
    </ProsessDefaultInitPanel>
  );
};
