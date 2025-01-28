import { useIntl } from 'react-intl';

import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import { OpptjeningVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-opptjening';
import { AksessRettigheter } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../../data/behandlingApi';
import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';
import { InngangsvilkarPanelInitProps } from '../../../felles/typer/inngangsvilkarPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_OPPTJENINGSVILKARET];

const VILKAR_KODER = [VilkarType.OPPTJENINGSPERIODE, VilkarType.OPPTJENINGSVILKARET];

interface Props {
  behandlingVersjon: number;
  rettigheter: AksessRettigheter;
}

export const OpptjeningInngangsvilkarInitPanel = ({
  behandlingVersjon,
  rettigheter,
  ...props
}: Props & InngangsvilkarPanelInitProps) => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const api = useBehandlingApi(standardPanelProps.behandling);

  const { data: opptjening } = useQuery(api.opptjeningOptions(standardPanelProps.behandling));

  return (
    <InngangsvilkarDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      behandlingVersjon={behandlingVersjon}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="OPPTJENINGSVILKARET"
      hentInngangsvilkarPanelTekst={intl.formatMessage({ id: 'OpptjeningVilkarView.VurderOmSøkerHarRett' })}
      renderPanel={({ erOverstyrt, toggleOverstyring }) => (
        <>
          {standardPanelProps.aksjonspunkter.length === 0 && (
            <OverstyringPanelDef
              aksjonspunkter={standardPanelProps.aksjonspunkter}
              aksjonspunktKode={AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKARET}
              vilkar={standardPanelProps.vilkar}
              vilkarKoder={VILKAR_KODER}
              panelTekstKode="Inngangsvilkar.Opptjeningsvilkaret"
              toggleOverstyring={toggleOverstyring}
              erOverstyrt={erOverstyrt}
              overrideReadOnly={
                standardPanelProps.isReadOnly ||
                (props.harInngangsvilkarApentAksjonspunkt && !(standardPanelProps.isAksjonspunktOpen || erOverstyrt))
              }
              kanOverstyreAccess={rettigheter.kanOverstyreAccess}
            />
          )}
          {standardPanelProps.aksjonspunkter.length > 0 && opptjening && (
            <OpptjeningVilkarProsessIndex
              erSvpFagsak
              lovReferanse={standardPanelProps.vilkar[0].lovReferanse}
              opptjening={opptjening}
              {...standardPanelProps}
            />
          )}
        </>
      )}
    />
  );
};
