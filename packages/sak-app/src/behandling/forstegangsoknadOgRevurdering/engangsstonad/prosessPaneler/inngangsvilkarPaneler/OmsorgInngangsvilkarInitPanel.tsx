import React, {
  FunctionComponent,
} from 'react';
import { IntlShape, useIntl } from 'react-intl';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OmsorgVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-omsorg';
import { Aksjonspunkt, Vilkar } from '@fpsak-frontend/types';
import InngangsvilkarPanelInitProps from '../../../../felles/typer/inngangsvilkarPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../../felles/data/behandlingFellesApi';
import InngangsvilkarDefaultInitPanel from '../../../../felles/prosess/InngangsvilkarDefaultInitPanel';

const AKSJONSPUNKT_TEKST_PER_KODE = {
  [aksjonspunktCodes.MANUELL_VURDERING_AV_OMSORGSVILKARET]: 'ErOmsorgVilkaarOppfyltForm.Paragraf',
  [aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]: 'ErOmsorgVilkaarOppfyltForm.Vurder',
  [aksjonspunktCodes.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]: 'ErOmsorgVilkaarOppfyltForm.Vurder',
} as Record<string, string>;

const hentAksjonspunktTekst = (intl: IntlShape, aksjonspunkter: Aksjonspunkt[] = []): string => (aksjonspunkter.length > 0
  ? intl.formatMessage({ id: AKSJONSPUNKT_TEKST_PER_KODE[aksjonspunkter[0].definisjon] })
  : '');

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.MANUELL_VURDERING_AV_OMSORGSVILKARET,
  aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  aksjonspunktCodes.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const VILKAR_KODER = [
  vilkarType.OMSORGSVILKARET,
];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER, BehandlingFellesApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

interface OwnProps {
  behandlingVersjon: number;
}

const OmsorgInngangsvilkarInitPanel: FunctionComponent<OwnProps & InngangsvilkarPanelInitProps> = ({
  behandlingVersjon,
  ...props
}) => {
  const intl = useIntl();
  return (
    <InngangsvilkarDefaultInitPanel<EndepunktInitData>
      {...props}
      behandlingVersjon={behandlingVersjon}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="OMSORG"
      hentInngangsvilkarPanelTekst={(data) => hentAksjonspunktTekst(intl, data.aksjonspunkter)}
      renderPanel={(data) => (
        <>
          <OmsorgVilkarProsessIndex
            // @ts-ignore Eg trur denne feilar grunna feil i typescript-pakka. Sjekk på eit seinare tidspunkt om denne er retta
            {...data}
          />
          <VerticalSpacer thirtyTwoPx />
        </>
      )}
    />
  );
};

export default OmsorgInngangsvilkarInitPanel;
