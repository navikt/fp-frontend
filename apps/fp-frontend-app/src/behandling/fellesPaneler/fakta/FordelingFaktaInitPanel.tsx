import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { TIDENES_ENDE } from '@navikt/ft-utils';
import {
  FordelBeregningsgrunnlagFaktaIndex,
  FaktaFordelBeregningAvklaringsbehovCode,
  FtVilkar,
  FtBeregningsgrunnlag,
} from '@navikt/ft-fakta-fordel-beregningsgrunnlag';

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Beregningsgrunnlag, Vilkar, Vilkarperiode, ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';
import { VilkarType, AksjonspunktKode } from '@navikt/fp-kodeverk';

import FaktaPanelInitProps from '../../felles/typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../felles/fakta/FaktaDefaultInitPanel';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';

import '@navikt/ft-fakta-fordel-beregningsgrunnlag/dist/style.css';

const mapBGKodeTilFpsakKode = (bgKode: string): string => {
  switch (bgKode) {
    case FaktaFordelBeregningAvklaringsbehovCode.FORDEL_BEREGNINGSGRUNNLAG:
      return AksjonspunktKode.FORDEL_BEREGNINGSGRUNNLAG;
    case FaktaFordelBeregningAvklaringsbehovCode.VURDER_REFUSJON_BERGRUNN:
      return AksjonspunktKode.VURDER_REFUSJON_BERGRUNN;
    default:
      throw new Error(`Ukjent avklaringspunkt ${bgKode}`);
  }
};

const lagModifisertCallback =
  (submitCallback: (params: any, keepData?: boolean) => Promise<any>) => (aksjonspunkterSomSkalLagres: any | any[]) => {
    const apListe = Array.isArray(aksjonspunkterSomSkalLagres)
      ? aksjonspunkterSomSkalLagres
      : [aksjonspunkterSomSkalLagres];
    const transformerteData = apListe.map(apData => ({
      kode: mapBGKodeTilFpsakKode(apData.kode),
      ...apData.grunnlag[0],
    }));
    return submitCallback(transformerteData);
  };

const lagStandardPeriode = (beregningsgrunnlag: Beregningsgrunnlag, bgVilkar: Vilkar): Vilkarperiode => ({
  avslagKode: bgVilkar.avslagKode,
  vurderesIBehandlingen: true,
  merknadParametere: {},
  periode: {
    fom: beregningsgrunnlag ? beregningsgrunnlag.skjaeringstidspunktBeregning : '',
    tom: TIDENES_ENDE,
  },
  vilkarStatus: bgVilkar.vilkarStatus,
});

const lagBGVilkar = (vilkar: Vilkar[], beregningsgrunnlag?: Beregningsgrunnlag): FtVilkar => {
  if (!vilkar) {
    // @ts-ignore FordelBeregningsgrunnlagFaktaIndex må kunna håndtera null
    return null;
  }
  const bgVilkar = vilkar.find(v => v.vilkarType && v.vilkarType === VilkarType.BEREGNINGSGRUNNLAGVILKARET);
  if (!bgVilkar || !beregningsgrunnlag) {
    // @ts-ignore FordelBeregningsgrunnlagFaktaIndex må kunna håndtera null
    return null;
  }
  const nyVK = {
    ...bgVilkar,
    perioder: [lagStandardPeriode(beregningsgrunnlag, bgVilkar)],
  };
  return nyVK;
};

const lagFormatertBG = (beregningsgrunnlag: Beregningsgrunnlag): FtBeregningsgrunnlag[] => {
  if (!beregningsgrunnlag) {
    return [];
  }
  const nyttBG = {
    ...beregningsgrunnlag,
    beregningsgrunnlagId: '1',
    vilkårsperiodeFom: beregningsgrunnlag.skjaeringstidspunktBeregning,
  };
  //@ts-ignore TODO Fiks denne
  return [nyttBG];
};

const AKSJONSPUNKT_KODER = [AksjonspunktKode.FORDEL_BEREGNINGSGRUNNLAG, AksjonspunktKode.VURDER_REFUSJON_BERGRUNN];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.BEREGNINGSGRUNNLAG];
type EndepunktPanelData = {
  beregningsgrunnlag: Beregningsgrunnlag;
};

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
    skalPanelVisesIMeny={() =>
      !!props.behandling &&
      !!props.behandling.aksjonspunkt &&
      !!props.behandling.aksjonspunkt.some(ap => AKSJONSPUNKT_KODER.some(kode => kode === ap.definisjon))
    }
    renderPanel={data => (
      <FordelBeregningsgrunnlagFaktaIndex
        {...data}
        kodeverkSamling={data.alleKodeverk}
        beregningsgrunnlagVilkår={lagBGVilkar(data.behandling.vilkår, data.beregningsgrunnlag)}
        beregningsgrunnlagListe={lagFormatertBG(data.beregningsgrunnlag)}
        submitCallback={lagModifisertCallback(data.submitCallback)}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
    )}
  />
);

export default FordelingFaktaInitPanel;
