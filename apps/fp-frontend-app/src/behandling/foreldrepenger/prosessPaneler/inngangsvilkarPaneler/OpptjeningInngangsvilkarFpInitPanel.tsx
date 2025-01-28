import { use } from 'react';
import { useIntl } from 'react-intl';

import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import { OpptjeningVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-opptjening';

import { useBehandlingApi } from '../../../../data/behandlingApi';
import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';
import { InngangsvilkarPanelInitProps } from '../../../felles/typer/inngangsvilkarPanelInitProps';
import { BehandlingDataContext } from '../../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_OPPTJENINGSVILKARET];

const VILKAR_KODER = [VilkarType.OPPTJENINGSPERIODE, VilkarType.OPPTJENINGSVILKARET];

export const OpptjeningInngangsvilkarFpInitPanel = (props: InngangsvilkarPanelInitProps) => {
  const intl = useIntl();

  const { behandling, rettigheter } = use(BehandlingDataContext);

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const api = useBehandlingApi(standardPanelProps.behandling);

  const { data: opptjening } = useQuery(api.opptjeningOptions(standardPanelProps.behandling));

  return (
    <InngangsvilkarDefaultInitPanel
      {...props}
      behandlingVersjon={behandling.versjon}
      standardPanelProps={standardPanelProps}
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
              lovReferanse={standardPanelProps.vilkar[0].lovReferanse}
              {...standardPanelProps}
              opptjening={opptjening}
            />
          )}
        </>
      )}
    />
  );
};
