import { useIntl } from 'react-intl';

import { useQuery } from '@tanstack/react-query';

import { SakenFaktaIndex } from '@navikt/fp-fakta-saken';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { AksessRettigheter, Fagsak } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  AksjonspunktKode.OVERSTYR_AVKLAR_STARTDATO,
  AksjonspunktKode.AVKLAR_DEKNINGSGRAD,
  AksjonspunktKode.OVERSTYR_DEKNINGSGRAD,
];

const OVERSTYRING_AP_CODES = [AksjonspunktKode.OVERSTYR_AVKLAR_STARTDATO, AksjonspunktKode.OVERSTYR_DEKNINGSGRAD];

interface Props {
  fagsak: Fagsak;
  rettigheter: AksessRettigheter;
}

/**
 * SakenFaktaInitPanel
 *
 * Dette faktapanelet skal alltid vises
 */
export const SakenFaktaInitPanel = ({ fagsak, rettigheter, ...props }: Props & FaktaPanelInitProps) => {
  const intl = useIntl();

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER, OVERSTYRING_AP_CODES);

  const api = useBehandlingApi(props.behandling);

  const { data: søknad } = useQuery(api.søknadOptions(props.behandling));
  const { data: utlandDokStatus } = useQuery(api.utlandDokStatusOptions(props.behandling));

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
        {...standardPanelProps}
        fagsak={fagsak}
        kanOverstyreAccess={rettigheter.kanOverstyreAccess.isEnabled}
      />
    </FaktaDefaultInitPanel>
  );
};
