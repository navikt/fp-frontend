import { ComponentProps, use } from 'react';
import { useIntl } from 'react-intl';

import {
  FeilutbetalingAksjonspunktCode,
  FeilutbetalingFaktaIndex,
} from '@navikt/ft-fakta-tilbakekreving-feilutbetaling';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { AlleKodeverkTilbakekreving } from '@navikt/fp-types';
import { useFormData } from '@navikt/fp-utils';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

import '@navikt/ft-fakta-tilbakekreving-feilutbetaling/dist/style.css';

const AKSJONSPUNKT_KODER = [FeilutbetalingAksjonspunktCode.AVKLAR_FAKTA_FOR_FEILUTBETALING];

interface Props {
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
}

export const FeilutbetalingFaktaInitPanel = ({
  valgtFaktaSteg,
  registrerFaktaPanel,
  tilbakekrevingKodeverk,
}: FaktaPanelInitProps & Props) => {
  const intl = useIntl();
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling, fagsak } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);

  const { data: feilutbetalingFakta } = useQuery(api.tilbakekreving.feilutbetalingFaktaOptions(behandling));
  const { data: feilutbetalingÅrsak } = useQuery(api.tilbakekreving.feilutbetalingÅrsakOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      valgtFaktaSteg={valgtFaktaSteg}
      registrerFaktaPanel={registrerFaktaPanel}
      faktaPanelKode={FaktaPanelCode.FEILUTBETALING}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'TilbakekrevingFakta.FaktaFeilutbetaling' })}
      skalPanelVisesIMeny={harLenke(behandling, 'FEILUTBETALING_FAKTA')}
    >
      {feilutbetalingFakta && feilutbetalingÅrsak ? (
        <Wrapper
          feilutbetalingFakta={feilutbetalingFakta}
          feilutbetalingAarsak={feilutbetalingÅrsak}
          fagsakYtelseTypeKode={fagsak.fagsakYtelseType}
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

const Wrapper = (props: ComponentProps<typeof FeilutbetalingFaktaIndex>) => {
  const { formData, setFormData } = useFormData();
  return <FeilutbetalingFaktaIndex {...props} formData={formData} setFormData={setFormData} />;
};
