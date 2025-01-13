import { useIntl } from 'react-intl';

import {
  FaktaFordelBeregningAvklaringsbehovCode,
  FordelBeregningsgrunnlagFaktaIndex,
  FtBeregningsgrunnlag,
  FtVilkar,
} from '@navikt/ft-fakta-fordel-beregningsgrunnlag';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { TIDENES_ENDE } from '@navikt/ft-utils';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, hasAksjonspunkt, VilkarType } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, Vilkar, Vilkarperiode } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

import '@navikt/ft-fakta-fordel-beregningsgrunnlag/dist/style.css';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.FORDEL_BEREGNINGSGRUNNLAG, AksjonspunktKode.VURDER_REFUSJON_BERGRUNN];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const FordelingFaktaInitPanel = ({ arbeidsgiverOpplysningerPerId, ...props }: Props & FaktaPanelInitProps) => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(props.behandling);

  const { data: beregningsgrunnlag } = useQuery(api.beregningsgrunnlagOptions(props.behandling));

  return (
    <FaktaDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.FORDELING}
      faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FaktaInitPanel.Title.Fordeling' })}
      skalPanelVisesIMeny={AKSJONSPUNKT_KODER.some(kode => hasAksjonspunkt(kode, props.behandling.aksjonspunkt))}
    >
      {beregningsgrunnlag ? (
        <FordelBeregningsgrunnlagFaktaIndex
          {...standardPanelProps}
          kodeverkSamling={standardPanelProps.alleKodeverk}
          beregningsgrunnlagVilkår={lagBGVilkar(standardPanelProps.behandling.vilkår, beregningsgrunnlag)}
          beregningsgrunnlagListe={lagFormatertBG(beregningsgrunnlag)}
          submitCallback={lagModifisertCallback(standardPanelProps.submitCallback)}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};

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
  (submitCallback: (params: any, keepData?: boolean) => Promise<any>) => (aksjonspunkterSomSkalLagres: any) => {
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
    // @ts-expect-error FordelBeregningsgrunnlagFaktaIndex må kunna håndtera null
    return null;
  }
  const bgVilkar = vilkar.find(v => v.vilkarType && v.vilkarType === VilkarType.BEREGNINGSGRUNNLAGVILKARET);
  if (!bgVilkar || !beregningsgrunnlag) {
    // @ts-expect-error FordelBeregningsgrunnlagFaktaIndex må kunna håndtera null
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
  return [nyttBG];
};
