import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FodselVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-fodsel';
import {
  AksessRettigheter, Aksjonspunkt, Vilkar,
} from '@fpsak-frontend/types';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import InngangsvilkarPanelInitProps from '../../../../felles/typer/inngangsvilkarPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../../felles/data/behandlingFellesApi';
import InngangsvilkarDefaultInitPanel from '../../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import OverstyringPanelDef from '../../../../felles/prosess/OverstyringPanelDef';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  aksjonspunktCodes.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const VILKAR_KODER = [
  vilkarType.FODSELSVILKARET_MOR,
];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER, BehandlingFellesApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

interface OwnProps {
  behandlingVersjon: number;
  rettigheter: AksessRettigheter;
}

const FodselInngangsvilkarInitPanel: FunctionComponent<OwnProps & InngangsvilkarPanelInitProps> = ({
  behandlingVersjon,
  rettigheter,
  ...props
}) => (
  <InngangsvilkarDefaultInitPanel<EndepunktInitData>
    {...props}
    behandlingVersjon={behandlingVersjon}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    vilkarKoder={VILKAR_KODER}
    inngangsvilkarPanelKode="FODSEL"
    hentInngangsvilkarPanelTekst={() => useIntl().formatMessage({ id: 'FodselVilkarForm.VurderGjelderSammeBarn' })}
    renderPanel={(data, erOverstyrt, toggleOverstyring) => (
      <>
        {data.aksjonspunkter.length === 0 && (
          <OverstyringPanelDef
            aksjonspunkter={data.aksjonspunkter}
            aksjonspunktKode={aksjonspunktCodes.OVERSTYR_FODSELSVILKAR}
            vilkar={data.vilkar}
            vilkarKoder={VILKAR_KODER}
            panelTekstKode="Inngangsvilkar.Fodselsvilkaret"
            erMedlemskapsPanel={false}
            toggleOverstyring={toggleOverstyring}
            erOverstyrt={erOverstyrt}
            overrideReadOnly={data.isReadOnly || (props.harInngangsvilkarApentAksjonspunkt && !(data.isAksjonspunktOpen || erOverstyrt))}
            kanOverstyreAccess={rettigheter.kanOverstyreAccess}
          />
        )}
        {data.aksjonspunkter.length > 0 && (
          <>
            <FodselVilkarProsessIndex
              ytelseTypeKode={fagsakYtelseType.ENGANGSSTONAD}
              // @ts-ignore Eg trur denne feilar grunna feil i typescript-pakka. Sjekk på eit seinare tidspunkt om denne er retta
              {...data}
            />
            <VerticalSpacer thirtyTwoPx />
          </>
        )}
      </>
    )}
  />
);

export default FodselInngangsvilkarInitPanel;
