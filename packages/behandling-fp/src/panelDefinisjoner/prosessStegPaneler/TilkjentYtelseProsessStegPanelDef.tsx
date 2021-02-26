import React from 'react';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';
import TilkjentYtelseProsessIndex from '@fpsak-frontend/prosess-tilkjent-ytelse';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ProsessStegDef, ProsessStegPanelDef } from '@fpsak-frontend/behandling-felles';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatFp,
  Fagsak,
  Soknad,
  UttaksresultatPeriode,
  BeregningsresultatPeriode,
  Feriepengegrunnlag,
  Personoversikt,
} from '@fpsak-frontend/types';

import { FpBehandlingApiKeys } from '../../data/fpBehandlingApi';

const harPeriodeMedUtbetaling = (perioder: BeregningsresultatPeriode[]): boolean => {
  const periode = perioder.find((p) => p.dagsats > 0);
  return !!periode;
};

const getStatusFromResultatstruktur = (resultatstruktur: BeregningsresultatFp, uttaksresultat: UttaksresultatPeriode): string => {
  if (resultatstruktur && resultatstruktur.perioder.length > 0) {
    if (!harPeriodeMedUtbetaling(resultatstruktur.perioder)) {
      return vilkarUtfallType.IKKE_VURDERT;
    }
    if (uttaksresultat && uttaksresultat.perioderSøker.length > 0) {
      const oppfylt = uttaksresultat.perioderSøker.some((p) => (
        p.periodeResultatType.kode !== periodeResultatType.AVSLATT
      ));
      if (oppfylt) {
        return vilkarUtfallType.OPPFYLT;
      }
    }
  }
  return vilkarUtfallType.IKKE_VURDERT;
};

type Data = {
  fagsak: Fagsak;
  beregningresultatForeldrepenger: BeregningsresultatFp;
  personoversikt: Personoversikt;
  soknad: Soknad;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  uttaksresultatPerioder: UttaksresultatPeriode;
  feriepengegrunnlag: Feriepengegrunnlag;
}

class PanelDef extends ProsessStegPanelDef {
  getKomponent = (props) => <TilkjentYtelseProsessIndex {...props} />

  getAksjonspunktKoder = () => [
    aksjonspunktCodes.VURDER_TILBAKETREKK,
  ]

  getEndepunkter = () => [
    FpBehandlingApiKeys.FAMILIEHENDELSE,
    FpBehandlingApiKeys.FERIEPENGEGRUNNLAG,
  ]

  getOverstyrVisningAvKomponent = () => true

  getOverstyrtStatus = ({ beregningresultatForeldrepenger, uttaksresultatPerioder }: Data) => getStatusFromResultatstruktur(
    beregningresultatForeldrepenger, uttaksresultatPerioder,
  )

  getData = ({
    fagsak, beregningresultatForeldrepenger, personoversikt, soknad, arbeidsgiverOpplysningerPerId,
  }: Data) => ({
    fagsak,
    personoversikt,
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
