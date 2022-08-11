import React, {
  FunctionComponent,
} from 'react';

import FordelBeregningsgrunnlagFaktaIndex, { FaktaFordelBeregningAksjonspunktCode } from '@navikt/ft-fakta-fordel-beregningsgrunnlag';
import { Beregningsgrunnlag, Vilkar, Vilkarperiode } from '@navikt/ft-types';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Vilkar as FpVilkar } from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel } from '@fpsak-frontend/behandling-felles';
import { createIntl, TIDENES_ENDE } from '@navikt/ft-utils';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import messages from '../../i18n/nb_NO.json';
import { requestSvpApi, SvpBehandlingApiKeys } from '../data/svpBehandlingApi';

const intl = createIntl(messages);

const lagModifisertCallback = (
  submitCallback: (params: any, keepData?: boolean) => Promise<any>,
) => (aksjonspunkterSomSkalLagres: any | any[]) => {
  const apListe = Array.isArray(aksjonspunkterSomSkalLagres) ? aksjonspunkterSomSkalLagres : [aksjonspunkterSomSkalLagres];
  const transformerteData = apListe.map((apData) => ({
    kode: apData.kode,
    ...apData.grunnlag[0],
  }));
  return submitCallback(transformerteData);
};

const lagStandardPeriode = (beregningsgrunnlag: Beregningsgrunnlag, bgVilkar: FpVilkar): Vilkarperiode => ({
  avslagKode: bgVilkar.avslagKode,
  vurderesIBehandlingen: true,
  merknadParametere: {},
  periode: {
    fom: beregningsgrunnlag ? beregningsgrunnlag.skjaeringstidspunktBeregning : '',
    tom: TIDENES_ENDE,
  },
  vilkarStatus: bgVilkar.vilkarStatus,
});

const lagBGVilkar = (vilkar: FpVilkar[], beregningsgrunnlag: Beregningsgrunnlag): Vilkar | null => {
  if (!vilkar) {
    return null;
  }
  const bgVilkar = vilkar.find((v) => v.vilkarType && v.vilkarType === vilkarType.BEREGNINGSGRUNNLAGVILKARET);
  if (!bgVilkar || !beregningsgrunnlag) {
    return null;
  }
  const nyVK = {
    ...bgVilkar,
    perioder: [lagStandardPeriode(beregningsgrunnlag, bgVilkar)],
  };
  return nyVK;
};

const lagFormatertBG = (beregningsgrunnlag: Beregningsgrunnlag): Beregningsgrunnlag[] => {
  if (!beregningsgrunnlag) {
    return [];
  }
  const nyttBG = {
    vilkårsperiodeFom: beregningsgrunnlag.skjaeringstidspunktBeregning,
    ...beregningsgrunnlag,
  };
  return [nyttBG];
};

const AKSJONSPUNKT_KODER = [FaktaFordelBeregningAksjonspunktCode.FORDEL_BEREGNINGSGRUNNLAG, FaktaFordelBeregningAksjonspunktCode.VURDER_REFUSJON_BERGRUNN];

const ENDEPUNKTER_INIT_DATA = [SvpBehandlingApiKeys.AKSJONSPUNKTER, SvpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [SvpBehandlingApiKeys.BEREGNINGSGRUNNLAG];
type EndepunktPanelData = {
  beregningsgrunnlag: Beregningsgrunnlag;
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * FordelingFaktaInitPanel
 */
const FordelingFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}) => (
  <FaktaDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestSvpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.FORDELING}
    faktaPanelMenyTekst={intl.formatMessage({ id: 'FordelBeregningsgrunnlag.Title' })}
    skalPanelVisesIMeny={(initData) => !!initData.aksjonspunkter
      && !!initData.aksjonspunkter.some((ap) => AKSJONSPUNKT_KODER.some((kode) => kode === ap.definisjon))}
    renderPanel={(data) => (
      <FordelBeregningsgrunnlagFaktaIndex
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...data}
        beregningsgrunnlagsvilkar={lagBGVilkar(data.vilkar, data.beregningsgrunnlag)}
        beregningsgrunnlagListe={lagFormatertBG(data.beregningsgrunnlag)}
        submitCallback={lagModifisertCallback(data.submitCallback)}
      />
    )}
  />
);

export default FordelingFaktaInitPanel;
