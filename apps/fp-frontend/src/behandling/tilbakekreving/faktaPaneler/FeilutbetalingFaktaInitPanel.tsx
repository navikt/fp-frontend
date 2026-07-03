import { type ComponentProps } from 'react';
import { useIntl } from 'react-intl';

import {
  FeilutbetalingAksjonspunktCode,
  FeilutbetalingFaktaIndex,
} from '@navikt/ft-fakta-tilbakekreving-feilutbetaling';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { AlleKodeverkTilbakekreving, BehandlingFpTilbake } from '@navikt/fp-types';
import { useMellomlagretFormData } from '@navikt/fp-utils';

import { getBehandlingApi, harLenke } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useErFaktaPanelAktiv } from '../../felles/fakta/useFaktaMenyRegistrerer';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { medPrioritet } from '../../felles/prioritet/medPrioritet';
import { useSkalHenteData } from '../../felles/prioritet/PanelDataPrioritetContext';

import '@navikt/ft-fakta-tilbakekreving-feilutbetaling/dist/style.css';

const AKSJONSPUNKT_KODER = [FeilutbetalingAksjonspunktCode.AVKLAR_FAKTA_FOR_FEILUTBETALING];

interface Props {
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
}

export const FeilutbetalingFaktaInitPanel = ({ tilbakekrevingKodeverk }: Props) => {
  const intl = useIntl();
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling, fagsak } = useBehandlingDataContext<BehandlingFpTilbake>();

  const skalPanelVisesIMeny = harLenke(behandling, 'FEILUTBETALING_FAKTA');
  const erAktiv = useErFaktaPanelAktiv(
    FaktaPanelCode.FEILUTBETALING,
    skalPanelVisesIMeny,
    standardPanelProps.harÅpentAksjonspunkt,
  );
  const skalHenteData = useSkalHenteData(FaktaPanelCode.FEILUTBETALING, erAktiv, 'fakta', skalPanelVisesIMeny);

  const api = getBehandlingApi(behandling);

  const { data: feilutbetalingFakta } = useQuery(
    medPrioritet(api.tilbakekreving.feilutbetalingFaktaOptions(behandling), skalHenteData),
  );
  const { data: feilutbetalingÅrsak } = useQuery(
    medPrioritet(api.tilbakekreving.feilutbetalingÅrsakOptions(behandling), skalHenteData),
  );

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.FEILUTBETALING}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'TilbakekrevingFakta.FaktaFeilutbetaling' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
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
    </FaktaDefaultInitPanel>
  );
};

const Wrapper = (props: Omit<ComponentProps<typeof FeilutbetalingFaktaIndex>, 'formData' | 'setFormData'>) => {
  const { mellomlagretFormData, setMellomlagretFormData } =
    useMellomlagretFormData<React.ComponentProps<typeof FeilutbetalingFaktaIndex>['formData']>();
  return <FeilutbetalingFaktaIndex {...props} formData={mellomlagretFormData} setFormData={setMellomlagretFormData} />;
};
