import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { VilkarType, AksjonspunktCode } from '@navikt/fp-kodeverk';
import { OpptjeningVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-opptjening';
import { AksessRettigheter, Opptjening } from '@navikt/fp-types';

import InngangsvilkarPanelInitProps from '../../../felles/typer/inngangsvilkarPanelInitProps';
import InngangsvilkarDefaultInitPanel from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import OverstyringPanelDef from '../../../felles/prosess/OverstyringPanelDef';
import { BehandlingApiKeys } from '../../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.VURDER_OPPTJENINGSVILKARET];

const VILKAR_KODER = [VilkarType.OPPTJENINGSPERIODE, VilkarType.OPPTJENINGSVILKARET];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.OPPTJENING];
type EndepunktPanelData = {
  opptjening: Opptjening;
};

interface OwnProps {
  behandlingVersjon: number;
  rettigheter: AksessRettigheter;
}

const OpptjeningInngangsvilkarFpInitPanel: FunctionComponent<OwnProps & InngangsvilkarPanelInitProps> = ({
  behandlingVersjon,
  rettigheter,
  ...props
}) => {
  const intl = useIntl();
  return (
    <InngangsvilkarDefaultInitPanel<EndepunktPanelData>
      {...props}
      behandlingVersjon={behandlingVersjon}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="OPPTJENINGSVILKARET"
      hentInngangsvilkarPanelTekst={() => intl.formatMessage({ id: 'OpptjeningVilkarView.VurderOmSøkerHarRett' })}
      renderPanel={(data, erOverstyrt, toggleOverstyring) => (
        <>
          {data.aksjonspunkter.length === 0 && (
            <OverstyringPanelDef
              aksjonspunkter={data.aksjonspunkter}
              aksjonspunktKode={AksjonspunktCode.OVERSTYRING_AV_OPPTJENINGSVILKARET}
              vilkar={data.vilkar}
              vilkarKoder={VILKAR_KODER}
              panelTekstKode="Inngangsvilkar.Opptjeningsvilkaret"
              toggleOverstyring={toggleOverstyring}
              erOverstyrt={erOverstyrt}
              overrideReadOnly={
                data.isReadOnly ||
                (props.harInngangsvilkarApentAksjonspunkt && !(data.isAksjonspunktOpen || erOverstyrt))
              }
              kanOverstyreAccess={rettigheter.kanOverstyreAccess}
            />
          )}
          {data.aksjonspunkter.length > 0 && (
            <>
              <OpptjeningVilkarProsessIndex lovReferanse={data.vilkar[0].lovReferanse} {...data} />
              <VerticalSpacer thirtyTwoPx />
            </>
          )}
        </>
      )}
    />
  );
};

export default OpptjeningInngangsvilkarFpInitPanel;
