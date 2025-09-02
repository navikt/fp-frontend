import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, BehandlingTypeEnum, VilkarType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { SokersOpplysningspliktVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-sokers-opplysningsplikt';
import type { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { skalViseProsessPanel } from '../../felles/prosess/skalViseProsessPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.SOKERS_OPPLYSNINGSPLIKT_OVST,
  AksjonspunktKode.SOKERS_OPPLYSNINGSPLIKT_MANU,
];

const VILKAR_KODER = [VilkarType.SOKERSOPPLYSNINGSPLIKT];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const OpplysningspliktProsessStegInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const { behandling } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);

  const { data: søknad } = useQuery(api.søknadOptions(behandling));

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.OPPLYSNINGSPLIKT}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Opplysningsplikt' })}
      skalPanelVisesIMeny={
        standardPanelProps.behandling.type !== BehandlingTypeEnum.REVURDERING
          ? skalViseProsessPanel(
              standardPanelProps.aksjonspunkterForPanel,
              VILKAR_KODER,
              standardPanelProps.vilkårForPanel,
            )
          : false
      }
    >
      {søknad ? (
        <SokersOpplysningspliktVilkarProsessIndex
          soknad={søknad}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          readOnlySubmitButton={standardPanelProps.readOnlySubmitButton}
          status={standardPanelProps.status}
        />
      ) : (
        <LoadingPanel />
      )}
    </ProsessDefaultInitPanel>
  );
};
