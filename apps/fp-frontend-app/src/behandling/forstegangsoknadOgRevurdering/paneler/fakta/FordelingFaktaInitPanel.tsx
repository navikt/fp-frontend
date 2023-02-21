import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';
import { TIDENES_ENDE } from '@navikt/ft-utils';
import { FaktaFordelBeregningAvklaringsbehovCode } from '@navikt/ft-fakta-fordel-beregningsgrunnlag';
import { Beregningsgrunnlag, Vilkar, Vilkarperiode } from '@navikt/ft-types';

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { ArbeidsgiverOpplysningerPerId, Vilkar as FpVilkar } from '@navikt/fp-types';
import { VilkarType, AksjonspunktCode } from '@navikt/fp-kodeverk';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import DynamicLoader from '../../../felles/DynamicLoader';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';

// TODO Denne burde ligga sånn til at den kun blir importert når denne pakka dynamisk blir importert
import '@navikt/ft-fakta-fordel-beregningsgrunnlag/dist/style.css';

const ProsessFordeling = React.lazy(() => import('@navikt/ft-fakta-fordel-beregningsgrunnlag'));

const mapBGKodeTilFpsakKode = (bgKode: string): string => {
  switch (bgKode) {
    case FaktaFordelBeregningAvklaringsbehovCode.FORDEL_BEREGNINGSGRUNNLAG:
      return AksjonspunktCode.FORDEL_BEREGNINGSGRUNNLAG;
    case FaktaFordelBeregningAvklaringsbehovCode.VURDER_REFUSJON_BERGRUNN:
      return AksjonspunktCode.VURDER_REFUSJON_BERGRUNN;
    default:
      throw new Error(`Ukjent avklaringspunkt ${bgKode}`);
  }
};

const lagModifisertCallback = (
  submitCallback: (params: any, keepData?: boolean) => Promise<any>,
) => (aksjonspunkterSomSkalLagres: any | any[]) => {
  const apListe = Array.isArray(aksjonspunkterSomSkalLagres) ? aksjonspunkterSomSkalLagres : [aksjonspunkterSomSkalLagres];
  const transformerteData = apListe.map((apData) => ({
    kode: mapBGKodeTilFpsakKode(apData.kode),
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
  const bgVilkar = vilkar.find((v) => v.vilkarType && v.vilkarType === VilkarType.BEREGNINGSGRUNNLAGVILKARET);
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
  // @ts-ignore
  : () => import('ft_fakta_fordel_beregningsgrunnlag/FaktaFordelBeregningsgrunnlag'); // eslint-disable-line import/no-unresolved

const AKSJONSPUNKT_KODER = [AksjonspunktCode.FORDEL_BEREGNINGSGRUNNLAG, AksjonspunktCode.VURDER_REFUSJON_BERGRUNN];

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
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.FORDELING}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FordelBeregningsgrunnlag.Title' })}
    skalPanelVisesIMeny={() => !!props.behandling.aksjonspunkt
      && !!props.behandling.aksjonspunkt.some((ap) => AKSJONSPUNKT_KODER.some((kode) => kode === ap.definisjon))}
    renderPanel={(data) => (
      // @ts-ignore TODO Ikkje send med ned heile kodeverket
      <DynamicLoader<React.ComponentProps<typeof ProsessFordeling>>
        packageCompFn={() => import('@navikt/ft-fakta-fordel-beregningsgrunnlag')}
        federatedCompFn={ProsessFordelingMF}
        {...data}
        beregningsgrunnlagVilkår={lagBGVilkar(data.behandling.vilkår, data.beregningsgrunnlag)}
        beregningsgrunnlagListe={lagFormatertBG(data.beregningsgrunnlag)}
        submitCallback={lagModifisertCallback(data.submitCallback)}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
    )}
  />
);

export default FordelingFaktaInitPanel;
