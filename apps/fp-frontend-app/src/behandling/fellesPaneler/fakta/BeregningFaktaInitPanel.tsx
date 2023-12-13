import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { AksessRettigheter, ArbeidsgiverOpplysningerPerId, Vilkar as FpVilkar } from '@navikt/fp-types';

import { Vilkar, Vilkarperiode, Beregningsgrunnlag } from '@navikt/ft-types';
import { TIDENES_ENDE } from '@navikt/ft-utils';
import { BeregningFaktaIndex as BeregningFaktaIndexRedesign } from '@navikt/ft-fakta-beregning-redesign';
import { AksjonspunktCode, VilkarType } from '@navikt/fp-kodeverk';
import { FaktaBeregningAvklaringsbehovCode } from '@navikt/ft-fakta-beregning';
import FaktaPanelInitProps from '../../felles/typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../felles/fakta/FaktaDefaultInitPanel';
import { BehandlingApiKeys, requestBehandlingApi } from '../../../data/behandlingContextApi';

import '@navikt/ft-fakta-beregning/dist/style.css';
import '@navikt/ft-fakta-beregning-redesign/dist/style.css';

const mapBGKodeTilFpsakKode = (bgKode: string): string => {
  switch (bgKode) {
    case FaktaBeregningAvklaringsbehovCode.AVKLAR_AKTIVITETER:
      return AksjonspunktCode.AVKLAR_AKTIVITETER;
    case FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER:
      return AksjonspunktCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER;
    case FaktaBeregningAvklaringsbehovCode.VURDER_FAKTA_FOR_ATFL_SN:
      return AksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN;
    case FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG:
      return AksjonspunktCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG;
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

const lagBGVilkar = (vilkar?: FpVilkar[], beregningsgrunnlag?: Beregningsgrunnlag): Vilkar => {
  if (!vilkar) {
    // @ts-ignore BeregningFaktaIndex må kunna ta i mot null
    return null;
  }
  const bgVilkar = vilkar.find(v => v.vilkarType && v.vilkarType === VilkarType.BEREGNINGSGRUNNLAGVILKARET);
  if (!bgVilkar || !beregningsgrunnlag) {
    // @ts-ignore BeregningFaktaIndex må kunna ta i mot null
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
    ...beregningsgrunnlag,
    vilkårsperiodeFom: beregningsgrunnlag.skjaeringstidspunktBeregning,
  };
  return [nyttBG];
};

const AKSJONSPUNKT_KODER = [
  AksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN,
  AksjonspunktCode.AVKLAR_AKTIVITETER,
  AksjonspunktCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  AksjonspunktCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
];

const OVERSTYRING_AP_CODES = [
  AksjonspunktCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  AksjonspunktCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.BEREGNINGSGRUNNLAG];
type EndepunktPanelData = {
  beregningsgrunnlag: Beregningsgrunnlag;
};

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  rettigheter: AksessRettigheter;
}

/**
 * BeregningFaktaInitPanel
 */
const BeregningFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  rettigheter,
  ...props
}) => {
  const intl = useIntl();
  return (
    <FaktaDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      overstyringApKoder={OVERSTYRING_AP_CODES}
      faktaPanelKode={FaktaPanelCode.BEREGNING}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'BeregningInfoPanel.Title' })}
      skalPanelVisesIMeny={() => requestBehandlingApi.hasPath(BehandlingApiKeys.BEREGNINGSGRUNNLAG.name)}
      renderPanel={data => (
        <BeregningFaktaIndexRedesign
          {...data}
          kodeverkSamling={data.alleKodeverk}
          vilkar={lagBGVilkar(props.behandling?.vilkår, data.beregningsgrunnlag)}
          beregningsgrunnlag={lagFormatertBG(data.beregningsgrunnlag)}
          submitCallback={lagModifisertCallback(data.submitCallback)}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          erOverstyrer={rettigheter.kanOverstyreAccess.isEnabled}
          skalKunneOverstyreAktiviteter
        />
      )}
    />
  );
};

export default BeregningFaktaInitPanel;
