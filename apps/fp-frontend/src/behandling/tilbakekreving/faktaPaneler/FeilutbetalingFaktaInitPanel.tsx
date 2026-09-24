import { type ComponentProps } from 'react';

import {
  FeilutbetalingAksjonspunktCode,
  FeilutbetalingFaktaIndex,
} from '@navikt/ft-fakta-tilbakekreving-feilutbetaling';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { FaktaPanelTittel } from '@navikt/fp-fakta-felles';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { AlleKodeverkTilbakekreving, BehandlingFpTilbake } from '@navikt/fp-types';
import { useMellomlagretFormData } from '@navikt/fp-utils';

import { getBehandlingApi, harLenke } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

import '@navikt/ft-fakta-tilbakekreving-feilutbetaling/dist/style.css';

const AKSJONSPUNKT_KODER = [FeilutbetalingAksjonspunktCode.AVKLAR_FAKTA_FOR_FEILUTBETALING];

interface Props {
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
}

export const FeilutbetalingFaktaInitPanel = ({ tilbakekrevingKodeverk }: Props) => {
  const standardPanelProps = useStandardFaktaPanelProps(FaktaPanelCode.FEILUTBETALING, AKSJONSPUNKT_KODER);

  const { behandling, fagsak } = useBehandlingDataContext<BehandlingFpTilbake>();

  const api = getBehandlingApi(behandling);

  const { data: feilutbetalingFakta } = useQuery(api.tilbakekreving.feilutbetalingFaktaOptions(behandling));
  const { data: feilutbetalingÅrsak } = useQuery(api.tilbakekreving.feilutbetalingÅrsakOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.FEILUTBETALING}
      skalPanelVisesIMeny={harLenke(behandling, 'FEILUTBETALING_FAKTA')}
    >
      <>
        <FaktaPanelTittel visuallyHidden />
        {feilutbetalingFakta && feilutbetalingÅrsak ? (
          <Wrapper
            feilutbetalingFakta={feilutbetalingFakta}
            feilutbetalingAarsak={feilutbetalingÅrsak}
            fagsakYtelseTypeKode={fagsak.fagsakYtelseType}
            // @ts-expect-error -- venter på at "-" skal fjernes fra API type
            kodeverkSamlingFpTilbake={tilbakekrevingKodeverk}
            kodeverkSamlingFpsak={standardPanelProps.alleKodeverk}
            isAksjonspunktOpen={standardPanelProps.harÅpentAksjonspunkt}
            {...standardPanelProps}
            submitCallback={standardPanelProps.submitCallback}
          />
        ) : (
          <LoadingPanel />
        )}
      </>
    </FaktaDefaultInitPanel>
  );
};

const Wrapper = (props: Omit<ComponentProps<typeof FeilutbetalingFaktaIndex>, 'formData' | 'setFormData'>) => {
  const { mellomlagretFormData, setMellomlagretFormData } =
    useMellomlagretFormData<React.ComponentProps<typeof FeilutbetalingFaktaIndex>['formData']>();
  return <FeilutbetalingFaktaIndex {...props} formData={mellomlagretFormData} setFormData={setMellomlagretFormData} />;
};
