import React, {
  FunctionComponent,
} from 'react';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import SvangerskapVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-svangerskap';
import {
  Aksjonspunkt, FodselOgTilrettelegging, Vilkar,
} from '@fpsak-frontend/types';
import { InngangsvilkarDefaultInitPanel, InngangsvilkarPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@navikt/ft-utils';

import { requestSvpApi, SvpBehandlingApiKeys } from '../../data/svpBehandlingApi';
import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.SVANGERSKAPSVILKARET];

const VILKAR_KODER = [vilkarType.SVANGERSKAPVILKARET];

const ENDEPUNKTER_INIT_DATA = [SvpBehandlingApiKeys.AKSJONSPUNKTER, SvpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [SvpBehandlingApiKeys.SVANGERSKAPSPENGER_TILRETTELEGGING];

type EndepunktPanelData = {
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
}

interface OwnProps {
  behandlingVersjon?: number;
}

const SvangerskapInngangsvilkarInitPanel: FunctionComponent<OwnProps & InngangsvilkarPanelInitProps> = ({
  behandlingVersjon,
  ...props
}) => (
  <InngangsvilkarDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    behandlingVersjon={behandlingVersjon}
    requestApi={requestSvpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    vilkarKoder={VILKAR_KODER}
    inngangsvilkarPanelKode="SVANGERSKAP"
    hentInngangsvilkarPanelTekst={() => intl.formatMessage({ id: 'SvangerskapVilkarForm.FyllerVilkår' })}
    renderPanel={(data) => (
      <>
        <SvangerskapVilkarProsessIndex {...data} />
        <VerticalSpacer thirtyTwoPx />
      </>
    )}
  />
);

export default SvangerskapInngangsvilkarInitPanel;
