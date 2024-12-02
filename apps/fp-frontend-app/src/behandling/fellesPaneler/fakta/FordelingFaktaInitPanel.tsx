import React from 'react';
import { useIntl } from 'react-intl';

import {
  FaktaFordelBeregningAvklaringsbehovCode,
  FordelBeregningsgrunnlagFaktaIndex,
  FtBeregningsgrunnlag,
  FtVilkar,
} from '@navikt/ft-fakta-fordel-beregningsgrunnlag';
import { TIDENES_ENDE } from '@navikt/ft-utils';

import { AksjonspunktKode, hasAksjonspunkt, VilkarType } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, Vilkar, Vilkarperiode } from '@navikt/fp-types';

import { BehandlingApiKeys } from '../../../data/behandlingContextApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

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

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const FordelingFaktaInitPanel = ({ arbeidsgiverOpplysningerPerId, ...props }: Props & FaktaPanelInitProps) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.FORDELING}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FordelBeregningsgrunnlag.Title' })}
    skalPanelVisesIMeny={() => AKSJONSPUNKT_KODER.some(kode => hasAksjonspunkt(kode, props.behandling.aksjonspunkt))}
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
