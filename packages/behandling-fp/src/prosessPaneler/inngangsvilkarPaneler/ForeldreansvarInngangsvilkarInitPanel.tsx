import React, {
  FunctionComponent,
} from 'react';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import ForeldreansvarVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-foreldreansvar';
import { Aksjonspunkt, Vilkar } from '@fpsak-frontend/types';
import { InngangsvilkarDefaultInitPanel, InngangsvilkarPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../../i18n/nb_NO.json';
import { FpBehandlingApiKeys, requestFpApi } from '../../data/fpBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD,
  aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD,
  aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  aksjonspunktCodes.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const AKSJONSPUNKT_TEKST_PER_KODE = {
  [aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD]: 'ErForeldreansvarVilkaarOppfyltForm.2LeddParagrafForeldrepenger',
  [aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD]: 'ErForeldreansvarVilkaarOppfyltForm.4LeddParagraf',
  [aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]: 'ErForeldreansvarVilkaarOppfyltForm.Vurder',
  [aksjonspunktCodes.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]: 'ErForeldreansvarVilkaarOppfyltForm.Vurder',
} as Record<string, string>;

const hentAksjonspunktTekst = (aksjonspunkter: Aksjonspunkt[] = []): string => (aksjonspunkter.length > 0
  ? intl.formatMessage({ id: AKSJONSPUNKT_TEKST_PER_KODE[aksjonspunkter[0].definisjon] })
  : '');

const VILKAR_KODER = [
  vilkarType.FORELDREANSVARSVILKARET_2_LEDD,
  vilkarType.FORELDREANSVARSVILKARET_4_LEDD,
];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

interface OwnProps {
  behandlingVersjon: number;
}

const ForeldreansvarInngangsvilkarInitPanel: FunctionComponent<OwnProps & InngangsvilkarPanelInitProps> = ({
  behandlingVersjon,
  ...props
}) => (
  <InngangsvilkarDefaultInitPanel<EndepunktInitData>
    {...props}
    behandlingVersjon={behandlingVersjon}
    requestApi={requestFpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    vilkarKoder={VILKAR_KODER}
    inngangsvilkarPanelKode="FORELDREANSVARSVILKARET"
    hentInngangsvilkarPanelTekst={(data) => hentAksjonspunktTekst(data?.aksjonspunkter)}
    renderPanel={(data) => (
      <>
        <ForeldreansvarVilkarProsessIndex
          isEngangsstonad={false}
          isForeldreansvar2Ledd={data.vilkar.some((v) => v.vilkarType === vilkarType.FORELDREANSVARSVILKARET_2_LEDD)}
          {...data}
        />
        <VerticalSpacer thirtyTwoPx />
      </>
    )}
  />
);

export default ForeldreansvarInngangsvilkarInitPanel;
