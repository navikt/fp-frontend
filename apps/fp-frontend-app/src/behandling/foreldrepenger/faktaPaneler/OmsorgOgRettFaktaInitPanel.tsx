import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { OmsorgOgRettFaktaIndex } from '@navikt/fp-fakta-omsorg-og-rett';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Personoversikt } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
  AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT,
];

interface Props {
  personoversikt: Personoversikt;
}

export const OmsorgOgRettFaktaInitPanel = ({ personoversikt, ...props }: Props & FaktaPanelInitProps) => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(props.behandling);

  const { data: ytelsefordeling } = useQuery(api.ytelsefordelingOptions(props.behandling));

  return (
    <FaktaDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.OMSORG_OG_RETT}
      faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FaktaInitPanel.Title.OmsorgOgRett' })}
      skalPanelVisesIMeny={AKSJONSPUNKT_KODER.some(kode => hasAksjonspunkt(kode, props.behandling.aksjonspunkt))}
    >
      {ytelsefordeling ? (
        <OmsorgOgRettFaktaIndex
          ytelsefordeling={ytelsefordeling}
          personoversikt={personoversikt}
          {...standardPanelProps}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
