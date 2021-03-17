import React, {
  FunctionComponent,
} from 'react';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AdopsjonVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-adopsjon';
import {
  AksessRettigheter, Aksjonspunkt, Vilkar,
} from '@fpsak-frontend/types';
import {
  InngangsvilkarDefaultInitPanel, OverstyringPanelDef, InngangsvilkarPanelInitProps,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../../i18n/getPackageIntl';
import { EsBehandlingApiKeys, requestEsApi } from '../../data/esBehandlingApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  aksjonspunktCodes.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const VILKAR_KODER = [
  vilkarType.ADOPSJONSVILKARET,
];

const ENDEPUNKTER_INIT_DATA = [EsBehandlingApiKeys.AKSJONSPUNKTER, EsBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

interface OwnProps {
  behandlingVersjon?: number;
  rettigheter: AksessRettigheter;
}

const AdopsjonInngangsvilkarInitPanel: FunctionComponent<OwnProps & InngangsvilkarPanelInitProps> = ({
  behandlingVersjon,
  rettigheter,
  ...props
}) => (
  <InngangsvilkarDefaultInitPanel<EndepunktInitData>
    {...props}
    behandlingVersjon={behandlingVersjon}
    requestApi={requestEsApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    vilkarKoder={VILKAR_KODER}
    inngangsvilkarPanelKode="ADOPSJON"
    hentInngangsvilkarPanelTekst={() => getPackageIntl().formatMessage({ id: 'AdopsjonVilkarForm.VurderGjelderSammeBarn' })}
    renderPanel={(data, erOverstyrt, toggleOverstyring) => (
      <>
        {data.aksjonspunkter.length === 0 && (
          <OverstyringPanelDef
            behandling={data.behandling}
            aksjonspunkter={data.aksjonspunkter}
            aksjonspunktKoder={[aksjonspunktCodes.OVERSTYR_ADOPSJONSVILKAR]}
            vilkar={data.vilkar}
            vilkarKoder={VILKAR_KODER}
            panelTekstKode="Inngangsvilkar.Adopsjonsvilkaret"
            erMedlemskapsPanel={false}
            toggleOverstyring={toggleOverstyring}
            erOverstyrt={erOverstyrt}
            overrideReadOnly={data.isReadOnly || (props.harInngangsvilkarApentAksjonspunkt && !(data.isAksjonspunktOpen || erOverstyrt))}
            kanOverstyreAccess={rettigheter.kanOverstyreAccess}
          />
        )}
        {data.aksjonspunkter.length > 0 && (
          <>
            <AdopsjonVilkarProsessIndex
              {...data}
            />
            <VerticalSpacer thirtyTwoPx />
          </>
        )}
      </>
    )}
  />
);

export default AdopsjonInngangsvilkarInitPanel;
