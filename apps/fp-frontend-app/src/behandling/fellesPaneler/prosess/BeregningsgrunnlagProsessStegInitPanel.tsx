import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import { Beregningsgrunnlag, Vilkar, Vilkarperiode } from '@navikt/ft-types';
import { ArbeidsgiverOpplysningerPerId, Vilkar as FpVilkar } from '@navikt/fp-types';
import { TIDENES_ENDE } from '@navikt/ft-utils';

import { AksjonspunktCode, VilkarType } from '@navikt/fp-kodeverk';
import {
  BeregningsgrunnlagProsessIndex,
  ProsessBeregningsgrunnlagAvklaringsbehovCode,
} from '@navikt/ft-prosess-beregningsgrunnlag';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';

import '@navikt/ft-prosess-beregningsgrunnlag/dist/style.css';

const mapBGKodeTilFpsakKode = (bgKode: string): string => {
  switch (bgKode) {
    case ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:
      return AksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS;
    case ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:
      return AksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD;
    case ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:
      return AksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET;
    case ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:
      return AksjonspunktCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE;
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

const lagBGVilkar = (vilkar: FpVilkar[], beregningsgrunnlag?: Beregningsgrunnlag): Vilkar => {
  const bgVilkar = vilkar.find(v => v.vilkarType && v.vilkarType === VilkarType.BEREGNINGSGRUNNLAGVILKARET);
  if (!bgVilkar || !beregningsgrunnlag) {
    // @ts-ignore Fiks BeregningsgrunnlagProsessIndex så den kan håndtera null
    return null;
  }
  const nyVK = {
    ...bgVilkar,
    perioder: [lagStandardPeriode(beregningsgrunnlag, bgVilkar)],
  };
  return nyVK;
};

const lagFormatertBG = (beregningsgrunnlag?: Beregningsgrunnlag): Beregningsgrunnlag[] => {
  if (!beregningsgrunnlag) {
    return [];
  }
  const nyttBG = {
    ...beregningsgrunnlag,
    vilkårsperiodeFom: beregningsgrunnlag.skjaeringstidspunktBeregning,
  };
  return [nyttBG];
};

const AKSJONSPUNKT_KODER = [
  AksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  AksjonspunktCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  AksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  AksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
];

const VILKAR_KODER = [VilkarType.BEREGNINGSGRUNNLAGVILKARET];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.BEREGNINGSGRUNNLAG];
type EndepunktPanelData = {
  beregningsgrunnlag?: Beregningsgrunnlag;
};

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const BeregningsgrunnlagProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}) => (
  <ProsessDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    vilkarKoder={VILKAR_KODER}
    prosessPanelKode={ProsessStegCode.BEREGNINGSGRUNNLAG}
    prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.Beregning' })}
    skalPanelVisesIMeny={() => true}
    renderPanel={data => (
      <BeregningsgrunnlagProsessIndex
        {...data}
        kodeverkSamling={data.alleKodeverk}
        beregningsgrunnlagsvilkar={lagBGVilkar(data.vilkar, data.beregningsgrunnlag)}
        beregningsgrunnlagListe={lagFormatertBG(data.beregningsgrunnlag)}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        submitCallback={lagModifisertCallback(data.submitCallback)}
      />
    )}
  />
);

export default BeregningsgrunnlagProsessStegInitPanel;
