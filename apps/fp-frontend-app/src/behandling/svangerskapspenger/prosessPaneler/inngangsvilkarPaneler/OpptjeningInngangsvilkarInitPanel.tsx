import React, { FunctionComponent } from 'react';

import { VilkarType, AksjonspunktCode } from '@navikt/fp-kodeverk';
import { AksessRettigheter } from '@navikt/fp-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import InngangsvilkarPanelInitProps from '../../../felles/typer/inngangsvilkarPanelInitProps';
import InngangsvilkarDefaultInitPanel from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import OverstyringPanelDef from '../../../felles/prosess/OverstyringPanelDef';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.OVERSTYRING_AV_OPPTJENINGSVILKARET];

const VILKAR_KODER = [VilkarType.OPPTJENINGSPERIODE, VilkarType.OPPTJENINGSVILKARET];

interface OwnProps {
  behandlingVersjon: number;
  rettigheter: AksessRettigheter;
}

const OpptjeningInngangsvilkarInitPanel: FunctionComponent<OwnProps & InngangsvilkarPanelInitProps> = ({
  behandlingVersjon,
  rettigheter,
  ...props
}) => (
  <InngangsvilkarDefaultInitPanel
    {...props}
    behandlingVersjon={behandlingVersjon}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    vilkarKoder={VILKAR_KODER}
    inngangsvilkarPanelKode="OPPTJENINGSVILKARET"
    hentInngangsvilkarPanelTekst={() => ''}
    renderPanel={(data, erOverstyrt, toggleOverstyring) => (
      <>
        <OverstyringPanelDef
          aksjonspunkter={data.aksjonspunkter}
          aksjonspunktKode={AksjonspunktCode.OVERSTYRING_AV_OPPTJENINGSVILKARET}
          vilkar={data.vilkar}
          vilkarKoder={VILKAR_KODER}
          panelTekstKode="Inngangsvilkar.Opptjeningsvilkaret"
          erMedlemskapsPanel={false}
          toggleOverstyring={toggleOverstyring}
          erOverstyrt={erOverstyrt}
          overrideReadOnly={
            data.isReadOnly || (props.harInngangsvilkarApentAksjonspunkt && !(data.isAksjonspunktOpen || erOverstyrt))
          }
          kanOverstyreAccess={rettigheter.kanOverstyreAccess}
        />
        <VerticalSpacer thirtyTwoPx />
      </>
    )}
  />
);

export default OpptjeningInngangsvilkarInitPanel;
