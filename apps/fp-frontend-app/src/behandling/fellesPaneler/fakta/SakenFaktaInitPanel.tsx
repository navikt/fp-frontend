import { use } from 'react';
import { useIntl } from 'react-intl';

import { useQuery } from '@tanstack/react-query';

import { SakenFaktaIndex } from '@navikt/fp-fakta-saken';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import type { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  AksjonspunktKode.OVERSTYR_AVKLAR_STARTDATO,
  AksjonspunktKode.AVKLAR_DEKNINGSGRAD,
  AksjonspunktKode.OVERSTYR_DEKNINGSGRAD,
];

const OVERSTYRING_AP_CODES = [AksjonspunktKode.OVERSTYR_AVKLAR_STARTDATO, AksjonspunktKode.OVERSTYR_DEKNINGSGRAD];

/**
 * SakenFaktaInitPanel
 *
 * Dette faktapanelet skal alltid vises
 */
export const SakenFaktaInitPanel = (props: FaktaPanelInitProps) => {
  const intl = useIntl();

  const { behandling, rettigheter } = use(BehandlingDataContext);

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER, OVERSTYRING_AP_CODES);

  const api = useBehandlingApi(behandling);

  const { data: søknad } = useQuery(api.søknadOptions(behandling));
  const { data: utlandDokStatus } = useQuery(api.utlandDokStatusOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.SAKEN}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Saken' })}
      skalPanelVisesIMeny
    >
      <SakenFaktaIndex
        soknad={søknad}
        utlandDokStatus={utlandDokStatus}
        submittable={standardPanelProps.submittable}
        kanOverstyreAccess={rettigheter.kanOverstyreAccess.isEnabled}
      />
    </FaktaDefaultInitPanel>
  );
};
