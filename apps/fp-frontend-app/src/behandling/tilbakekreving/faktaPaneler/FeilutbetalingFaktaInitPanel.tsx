import { useIntl } from 'react-intl';

import {
  FeilutbetalingAksjonspunktCode,
  FeilutbetalingFaktaIndex,
} from '@navikt/ft-fakta-tilbakekreving-feilutbetaling';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { AlleKodeverkTilbakekreving } from '@navikt/fp-types';

import { BehandlingRel, useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

import '@navikt/ft-fakta-tilbakekreving-feilutbetaling/dist/style.css';

const AKSJONSPUNKT_KODER = [FeilutbetalingAksjonspunktCode.AVKLAR_FAKTA_FOR_FEILUTBETALING];

interface Props {
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
  fagsakYtelseTypeKode: string;
}

export const FeilutbetalingFaktaInitPanel = ({
  behandling,
  valgtFaktaSteg,
  registrerFaktaPanel,
  tilbakekrevingKodeverk,
  fagsakYtelseTypeKode,
}: FaktaPanelInitProps & Props) => {
  const intl = useIntl();
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(behandling);

  const { data: feilutbetalingFakta } = useQuery(api.tilbakekreving.feilutbetalingFaktaOptions(behandling));
  const { data: feilutbetalingÅrsak } = useQuery(api.tilbakekreving.feilutbetalingÅrsakOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      behandling={behandling}
      valgtFaktaSteg={valgtFaktaSteg}
      registrerFaktaPanel={registrerFaktaPanel}
      faktaPanelKode={FaktaPanelCode.FEILUTBETALING}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'TilbakekrevingFakta.FaktaFeilutbetaling' })}
      skalPanelVisesIMeny={behandling.links.some(link => link.rel === BehandlingRel.FEILUTBETALING_FAKTA)}
    >
      {feilutbetalingFakta && feilutbetalingÅrsak ? (
        <FeilutbetalingFaktaIndex
          feilutbetalingFakta={feilutbetalingFakta}
          feilutbetalingAarsak={feilutbetalingÅrsak}
          fagsakYtelseTypeKode={fagsakYtelseTypeKode}
          kodeverkSamlingFpTilbake={tilbakekrevingKodeverk}
          kodeverkSamlingFpsak={standardPanelProps.alleKodeverk}
          isAksjonspunktOpen={standardPanelProps.harApneAksjonspunkter}
          isReadOnly={standardPanelProps.readOnly}
          {...standardPanelProps}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
