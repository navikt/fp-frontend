import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';
import { TIDENES_ENDE } from '@navikt/ft-utils';
import { FaktaFordelBeregningAksjonspunktCode } from '@navikt/ft-fakta-fordel-beregningsgrunnlag';
import { Beregningsgrunnlag, Vilkar, Vilkarperiode } from '@navikt/ft-types';

import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { ArbeidsgiverOpplysningerPerId, Vilkar as FpVilkar } from '@fpsak-frontend/types';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import DynamicLoader from '../../../felles/DynamicLoader';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';

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

const AKSJONSPUNKT_KODER = [FaktaFordelBeregningAksjonspunktCode.FORDEL_BEREGNINGSGRUNNLAG, FaktaFordelBeregningAksjonspunktCode.VURDER_REFUSJON_BERGRUNN];

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.BEREGNINGSGRUNNLAG];
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
  <FaktaDefaultInitPanel<Record<string, never>, EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.FORDELING}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FordelBeregningsgrunnlag.Title' })}
    skalPanelVisesIMeny={() => !!props.behandling.aksjonspunkter
      && !!props.behandling.aksjonspunkter.some((ap) => AKSJONSPUNKT_KODER.some((kode) => kode === ap.definisjon))}
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
