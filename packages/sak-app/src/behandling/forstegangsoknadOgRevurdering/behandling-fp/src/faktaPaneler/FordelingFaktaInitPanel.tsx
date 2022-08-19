import React, {
  FunctionComponent,
} from 'react';
import { createIntl, TIDENES_ENDE } from '@navikt/ft-utils';

import { FaktaFordelBeregningAksjonspunktCode } from '@navikt/ft-fakta-fordel-beregningsgrunnlag';
import { Beregningsgrunnlag, Vilkar, Vilkarperiode } from '@navikt/ft-types';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Vilkar as FpVilkar } from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel, DynamicLoader } from '@fpsak-frontend/behandling-felles';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import messages from '../../i18n/nb_NO.json';
import { FpBehandlingApiKeys, requestFpApi } from '../data/fpBehandlingApi';

// TODO Denne burde ligga sånn til at den kun blir importert når denne pakka dynamisk blir importert
import '@navikt/ft-fakta-fordel-beregningsgrunnlag/dist/style.css';

const ProsessFordeling = React.lazy(() => import('@navikt/ft-fakta-fordel-beregningsgrunnlag'));

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

const ProsessFordelingMF = process.env.NODE_ENV !== 'development' ? undefined
  // eslint-disable-next-line import/no-unresolved
  : () => import('ft_fakta_fordel_beregningsgrunnlag/FaktaFordelBeregningsgrunnlag');

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [FaktaFordelBeregningAksjonspunktCode.FORDEL_BEREGNINGSGRUNNLAG, FaktaFordelBeregningAksjonspunktCode.VURDER_REFUSJON_BERGRUNN];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: FpVilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.BEREGNINGSGRUNNLAG];
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
    requestApi={requestFpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.FORDELING}
    faktaPanelMenyTekst={intl.formatMessage({ id: 'FordelBeregningsgrunnlag.Title' })}
    skalPanelVisesIMeny={(initData) => !!initData.aksjonspunkter
      && !!initData.aksjonspunkter.some((ap) => AKSJONSPUNKT_KODER.some((kode) => kode === ap.definisjon))}
    renderPanel={(data) => (
      <DynamicLoader<React.ComponentProps<typeof ProsessFordeling>>
        packageCompFn={() => import('@navikt/ft-fakta-fordel-beregningsgrunnlag')}
        federatedCompFn={ProsessFordelingMF}
        {...data}
        beregningsgrunnlagVilkår={lagBGVilkar(data.vilkar, data.beregningsgrunnlag)}
        beregningsgrunnlagListe={lagFormatertBG(data.beregningsgrunnlag)}
        submitCallback={lagModifisertCallback(data.submitCallback)}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        behandlingType={data.behandling ? data.behandling.type : ''}
      />
    )}
  />
);

export default FordelingFaktaInitPanel;
