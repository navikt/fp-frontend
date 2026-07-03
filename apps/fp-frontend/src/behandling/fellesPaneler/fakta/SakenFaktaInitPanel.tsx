import { useIntl } from 'react-intl';

import { useQuery } from '@tanstack/react-query';

import { SakenFaktaIndex } from '@navikt/fp-fakta-saken';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useErFaktaPanelAktiv } from '../../felles/fakta/useFaktaMenyRegistrerer';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { medPrioritet } from '../../felles/prioritet/medPrioritet';
import { useSkalHenteData } from '../../felles/prioritet/PanelDataPrioritetContext';

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

  const erAktiv = useErFaktaPanelAktiv(FaktaPanelCode.SAKEN, true, standardPanelProps.harÅpentAksjonspunkt);
  const skalHenteData = useSkalHenteData(FaktaPanelCode.SAKEN, erAktiv, 'fakta');

  const api = getBehandlingApi(behandling);

  const { data: ytelsefordeling } = useQuery(medPrioritet(api.ytelsefordelingOptions(behandling), skalHenteData));
  const { data: utlandDokStatus } = useQuery(medPrioritet(api.utlandDokStatusOptions(behandling), skalHenteData));

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
