import React, {
  FunctionComponent,
} from 'react';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AksessRettigheter, Medlemskap } from '@fpsak-frontend/types';

import InngangsvilkarPanelInitProps from '../../../../felles/typer/inngangsvilkarPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../../felles/data/behandlingFellesApi';
import InngangsvilkarDefaultInitPanel from '../../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import OverstyringPanelDef from '../../../../felles/prosess/OverstyringPanelDef';

const AKSJONSPUNKT_KODE = aksjonspunktCodes.OVERSTYR_MEDLEMSKAPSVILKAR;

const VILKAR_KODER = [vilkarType.MEDLEMSKAPSVILKARET];

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.MEDLEMSKAP];
type EndepunktPanelData = {
  medlemskap: Medlemskap;
}

interface OwnProps {
  behandlingVersjon: number;
  rettigheter: AksessRettigheter;
}

const MedlemskapInngangsvilkarInitPanel: FunctionComponent<OwnProps & InngangsvilkarPanelInitProps> = ({
  behandlingVersjon,
  rettigheter,
  ...props
}) => (
  <InngangsvilkarDefaultInitPanel<Record<string, never>, EndepunktPanelData>
    {...props}
    behandlingVersjon={behandlingVersjon}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={[AKSJONSPUNKT_KODE]}
    vilkarKoder={VILKAR_KODER}
    inngangsvilkarPanelKode="MEDLEMSKAP"
    hentInngangsvilkarPanelTekst={() => ''}
    renderPanel={(data, erOverstyrt, toggleOverstyring) => (
      <>
        <OverstyringPanelDef
          aksjonspunkter={data.aksjonspunkter}
          aksjonspunktKode={AKSJONSPUNKT_KODE}
          vilkar={data.vilkar}
          vilkarKoder={VILKAR_KODER}
          panelTekstKode="Inngangsvilkar.Medlemskapsvilkaret"
          erMedlemskapsPanel
          medlemskap={data.medlemskap}
          toggleOverstyring={toggleOverstyring}
          erOverstyrt={erOverstyrt}
          overrideReadOnly={data.isReadOnly || (props.harInngangsvilkarApentAksjonspunkt && !(data.isAksjonspunktOpen || erOverstyrt))}
          kanOverstyreAccess={rettigheter.kanOverstyreAccess}
        />
        <VerticalSpacer thirtyTwoPx />
      </>
    )}
  />
);

export default MedlemskapInngangsvilkarInitPanel;
