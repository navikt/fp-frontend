import React, {
  FunctionComponent,
} from 'react';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import { ProsessBeregningsgrunnlagAksjonspunktCode } from '@navikt/ft-prosess-beregningsgrunnlag';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { Beregningsgrunnlag, Vilkar, Vilkarperiode } from '@navikt/ft-types';
import { Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Vilkar as FpVilkar } from '@fpsak-frontend/types';
import { ProsessDefaultInitPanel, ProsessPanelInitProps, DynamicLoader } from '@fpsak-frontend/behandling-felles';
import { createIntl, TIDENES_ENDE } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';
import { requestSvpApi, SvpBehandlingApiKeys } from '../data/svpBehandlingApi';

// TODO Denne burde ligga sånn til at den kun blir importert når denne pakka dynamisk blir importert
import '@navikt/ft-prosess-beregningsgrunnlag/dist/style.css';

const ProsessBeregningsgrunnlag = React.lazy(() => import('@navikt/ft-prosess-beregningsgrunnlag'));
// eslint-disable-next-line import/no-unresolved
const ProsessBeregningsgrunnlagMF = process.env.NODE_ENV !== 'development' ? undefined
  // eslint-disable-next-line import/no-unresolved
  : () => import('ft_prosess_beregningsgrunnlag/ProsessBeregningsgrunnlag');

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
  merknadParametere: bgVilkar.merknadParametere,
  periode: {
    fom: beregningsgrunnlag ? beregningsgrunnlag.skjaeringstidspunktBeregning : '',
    tom: TIDENES_ENDE,
  },
  vilkarStatus: bgVilkar.vilkarStatus,
});

const lagBGVilkar = (vilkar: FpVilkar[], beregningsgrunnlag: Beregningsgrunnlag): Vilkar | null => {
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
const AKSJONSPUNKT_KODER = [
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG,
  ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_DEKNINGSGRAD,
];

const VILKAR_KODER = [vilkarType.BEREGNINGSGRUNNLAGVILKARET];

const ENDEPUNKTER_INIT_DATA = [SvpBehandlingApiKeys.AKSJONSPUNKTER, SvpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [SvpBehandlingApiKeys.BEREGNINGSGRUNNLAG];
type EndepunktPanelData = {
  beregningsgrunnlag?: Beregningsgrunnlag;
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const BeregningsgrunnlagProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}) => (
  <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestSvpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    vilkarKoder={VILKAR_KODER}
    prosessPanelKode={ProsessStegCode.BEREGNINGSGRUNNLAG}
    prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Beregning' })}
    skalPanelVisesIMeny={(_initData, initState) => initState === RestApiState.SUCCESS}
    renderPanel={(data) => (
      <DynamicLoader<React.ComponentProps<typeof ProsessBeregningsgrunnlag>>
        packageCompFn={() => import('@navikt/ft-prosess-beregningsgrunnlag')}
        federatedCompFn={ProsessBeregningsgrunnlagMF}
        {...data}
        beregningsgrunnlagsvilkar={lagBGVilkar(data.vilkar, data.beregningsgrunnlag)}
        beregningsgrunnlagListe={data.beregningsgrunnlag ? [data.beregningsgrunnlag] : []}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        submitCallback={lagModifisertCallback(data.submitCallback)}

      />
    )}
  />
);

export default BeregningsgrunnlagProsessStegInitPanel;
