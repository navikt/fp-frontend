import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, BehandlingType, VilkarType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { SokersOpplysningspliktVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-sokers-opplysningsplikt';
import { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { skalViseProsessPanel } from '../../felles/prosess/skalViseProsessPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.SOKERS_OPPLYSNINGSPLIKT_OVST,
  AksjonspunktKode.SOKERS_OPPLYSNINGSPLIKT_MANU,
];

const VILKAR_KODER = [VilkarType.SOKERSOPPLYSNINGSPLIKT];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const OpplysningspliktProsessStegInitPanel = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}: Props & ProsessPanelInitProps) => {
  const intl = useIntl();
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const api = useBehandlingApi(props.behandling);

  const { data: søknad } = useQuery(api.søknadOptions(props.behandling));

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.OPPLYSNINGSPLIKT}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Opplysningsplikt' })}
      skalPanelVisesIMeny={
        standardPanelProps.behandling.type !== BehandlingType.REVURDERING
          ? skalViseProsessPanel(standardPanelProps.aksjonspunkter, VILKAR_KODER, standardPanelProps.vilkar)
          : false
      }
    >
      {søknad ? (
        <SokersOpplysningspliktVilkarProsessIndex
          soknad={søknad}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          {...standardPanelProps}
        />
      ) : (
        <LoadingPanel />
      )}
    </ProsessDefaultInitPanel>
  );
};
