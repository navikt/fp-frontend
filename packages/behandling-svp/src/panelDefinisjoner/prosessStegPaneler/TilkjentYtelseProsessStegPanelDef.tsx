import React from 'react';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import TilkjentYtelseProsessIndex from '@fpsak-frontend/prosess-tilkjent-ytelse';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ProsessStegDef, ProsessStegPanelDef } from '@fpsak-frontend/behandling-felles';
import {
  ArbeidsgiverOpplysningerPerId, BeregningsresultatFp, Fagsak, Personopplysninger, Soknad,
} from '@fpsak-frontend/types';

import { SvpBehandlingApiKeys } from '../../data/svpBehandlingApi';

const harPeriodeMedUtbetaling = (perioder) => {
  const periode = perioder.find((p) => p.dagsats > 0);
  return !!periode;
};

const getStatusFromResultatstruktur = (resultatstruktur) => {
  if (resultatstruktur && resultatstruktur.perioder.length > 0) {
    if (!harPeriodeMedUtbetaling(resultatstruktur.perioder)) {
      return vilkarUtfallType.IKKE_VURDERT;
    }
    return vilkarUtfallType.OPPFYLT;
  }
  return vilkarUtfallType.IKKE_VURDERT;
};

type Data = {
  fagsak: Fagsak;
  beregningresultatForeldrepenger: BeregningsresultatFp;
  personopplysninger: Personopplysninger;
  soknad: Soknad;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

class PanelDef extends ProsessStegPanelDef {
  getKomponent = (props) => <TilkjentYtelseProsessIndex {...props} />

  getAksjonspunktKoder = () => [
    aksjonspunktCodes.VURDER_TILBAKETREKK,
  ]

  getEndepunkter = () => [
    SvpBehandlingApiKeys.FAMILIEHENDELSE,
  ]

  getOverstyrVisningAvKomponent = () => true

  getOverstyrtStatus = ({ beregningresultatForeldrepenger }) => getStatusFromResultatstruktur(
    beregningresultatForeldrepenger,
  )

  getData = ({
    fagsak, beregningresultatForeldrepenger, personopplysninger, soknad, arbeidsgiverOpplysningerPerId,
  }: Data) => ({
    fagsak,
    personopplysninger,
    soknad,
    arbeidsgiverOpplysningerPerId,
    beregningresultat: beregningresultatForeldrepenger,
  })
}

class TilkjentYtelseProsessStegPanelDef extends ProsessStegDef {
  getUrlKode = () => prosessStegCodes.TILKJENT_YTELSE

  getTekstKode = () => 'Behandlingspunkt.TilkjentYtelse'

  getPanelDefinisjoner = () => [new PanelDef()]
}

export default TilkjentYtelseProsessStegPanelDef;
