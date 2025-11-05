import { useIntl } from 'react-intl';

import { useQuery } from '@tanstack/react-query';

import { SakenFaktaIndex } from '@navikt/fp-fakta-saken';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  AksjonspunktKode.OVERSTYRING_AV_AVKLART_STARTDATO,
  AksjonspunktKode.AVKLAR_DEKNINGSGRAD,
  AksjonspunktKode.OVERSTYRING_AV_DEKNINGSGRAD,
];

/**
 * SakenFaktaInitPanel
 *
 * Dette faktapanelet skal alltid vises
 */
export const SakenFaktaInitPanel = () => {
  const intl = useIntl();

  const { behandling, rettigheter } = useBehandlingDataContext();

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(behandling);

  const { data: ytelsefordeling } = useQuery(api.ytelsefordelingOptions(behandling));
  const { data: utlandDokStatus } = useQuery(api.utlandDokStatusOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.SAKEN}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Saken' })}
      skalPanelVisesIMeny
    >
      <SakenFaktaIndex
        ytelsefordeling={ytelsefordeling}
        utlandDokStatus={utlandDokStatus}
        kanOverstyreAccess={rettigheter.kanOverstyreAccess.isEnabled}
      />
    </FaktaDefaultInitPanel>
  );
};
