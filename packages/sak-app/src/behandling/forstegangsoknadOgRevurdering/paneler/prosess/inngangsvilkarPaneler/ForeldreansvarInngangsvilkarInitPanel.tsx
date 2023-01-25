import React, {
  FunctionComponent,
} from 'react';
import { IntlShape, useIntl } from 'react-intl';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import vilkarType from '@navikt/fp-kodeverk/src/vilkarType';
import aksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import ForeldreansvarVilkarProsessIndex from '@navikt/fp-prosess-vilkar-foreldreansvar';
import { Aksjonspunkt } from '@navikt/fp-types';

import InngangsvilkarPanelInitProps from '../../../../felles/typer/inngangsvilkarPanelInitProps';
import InngangsvilkarDefaultInitPanel from '../../../../felles/prosess/InngangsvilkarDefaultInitPanel';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD,
  aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD,
  aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  aksjonspunktCodes.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const AKSJONSPUNKT_TEKST_PER_KODE = {
  [aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD]: 'ErForeldreansvarVilkaarOppfyltForm.2LeddParagrafEngangsStonad',
  [aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD]: 'ErForeldreansvarVilkaarOppfyltForm.4LeddParagraf',
  [aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]: 'ErForeldreansvarVilkaarOppfyltForm.Vurder',
  [aksjonspunktCodes.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]: 'ErForeldreansvarVilkaarOppfyltForm.Vurder',
} as Record<string, string>;

const hentAksjonspunktTekst = (intl: IntlShape, aksjonspunkter: Aksjonspunkt[] = []): string => (aksjonspunkter.length > 0
  ? intl.formatMessage({ id: AKSJONSPUNKT_TEKST_PER_KODE[aksjonspunkter[0].definisjon] })
  : '');

const VILKAR_KODER = [
  vilkarType.FORELDREANSVARSVILKARET_2_LEDD,
  vilkarType.FORELDREANSVARSVILKARET_4_LEDD,
];

interface OwnProps {
  behandlingVersjon: number;
}

const ForeldreansvarInngangsvilkarInitPanel: FunctionComponent<OwnProps & InngangsvilkarPanelInitProps> = ({
  behandlingVersjon,
  ...props
}) => {
  const intl = useIntl();
  return (
    <InngangsvilkarDefaultInitPanel
      {...props}
      behandlingVersjon={behandlingVersjon}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="FORELDREANSVARSVILKARET"
      hentInngangsvilkarPanelTekst={(data) => hentAksjonspunktTekst(intl, data?.aksjonspunkter)}
      renderPanel={(data) => (
        <>
          <ForeldreansvarVilkarProsessIndex
            isEngangsstonad
            isForeldreansvar2Ledd={data.vilkar.some((v) => v.vilkarType === vilkarType.FORELDREANSVARSVILKARET_2_LEDD)}
            // @ts-ignore Eg trur denne feilar grunna feil i typescript-pakka. Sjekk på eit seinare tidspunkt om denne er retta
            {...data}
          />
          <VerticalSpacer thirtyTwoPx />
        </>
      )}
    />
  );
};

export default ForeldreansvarInngangsvilkarInitPanel;
