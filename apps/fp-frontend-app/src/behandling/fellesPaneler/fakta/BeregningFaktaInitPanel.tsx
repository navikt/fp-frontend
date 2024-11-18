import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import {
  Vilkar,
  Vilkarperiode,
  Beregningsgrunnlag,
  AksessRettigheter,
  ArbeidsgiverOpplysningerPerId,
} from '@navikt/fp-types';

import { TIDENES_ENDE } from '@navikt/ft-utils';
import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import {
  BeregningFaktaIndex,
  FaktaBeregningAvklaringsbehovCode,
  FtVilkar,
  FtBeregningsgrunnlag,
} from '@navikt/ft-fakta-beregning';
import FaktaPanelInitProps from '../../felles/typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../felles/fakta/FaktaDefaultInitPanel';
import { BehandlingApiKeys, requestBehandlingApi } from '../../../data/behandlingContextApi';

import '@navikt/ft-fakta-beregning/dist/style.css';

const mapBGKodeTilFpsakKode = (bgKode: string): string => {
  switch (bgKode) {
    case FaktaBeregningAvklaringsbehovCode.AVKLAR_AKTIVITETER:
      return AksjonspunktKode.AVKLAR_AKTIVITETER;
    case FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER:
      return AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER;
    case FaktaBeregningAvklaringsbehovCode.VURDER_FAKTA_FOR_ATFL_SN:
      return AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN;
    case FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG:
      return AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG;
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

const lagBGVilkar = (vilkar?: Vilkar[], beregningsgrunnlag?: Beregningsgrunnlag): FtVilkar => {
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

const lagFormatertBG = (beregningsgrunnlag: Beregningsgrunnlag): FtBeregningsgrunnlag[] => {
  if (!beregningsgrunnlag) {
    return [];
  }
  const nyttBG = {
    ...beregningsgrunnlag,
    vilkårsperiodeFom: beregningsgrunnlag.skjaeringstidspunktBeregning,
  };
  //@ts-ignore TODO Fiks denne
  return [nyttBG];
};

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN,
  AksjonspunktKode.AVKLAR_AKTIVITETER,
  AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
];

const OVERSTYRING_AP_CODES = [
  AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
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
        <BeregningFaktaIndex
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
