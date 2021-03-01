import React, {
  FunctionComponent, useMemo,
} from 'react';

import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import TilkjentYtelseProsessIndex from '@fpsak-frontend/prosess-tilkjent-ytelse';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, BeregningsresultatFp, BeregningsresultatPeriode,
  Fagsak, FamilieHendelseSamling, Feriepengegrunnlag, Personoversikt, Soknad, UttaksresultatPeriode,
} from '@fpsak-frontend/types';
import {
  useStandardProsessPanelProps, ProsessPanelWrapper, prosessPanelHooks, ProsessPanelMenyData,
} from '@fpsak-frontend/behandling-felles-ny';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../data/fpBehandlingApi';

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

const aksjonspunktKoder = [aksjonspunktCodes.VURDER_TILBAKETREKK];

const endepunkterInit = [
  FpBehandlingApiKeys.AKSJONSPUNKTER,
  FpBehandlingApiKeys.BEREGNINGRESULTAT_FORELDREPENGER,
  FpBehandlingApiKeys.UTTAKSRESULTAT_PERIODER,
];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  beregningresultatForeldrepenger: BeregningsresultatFp;
  uttaksresultatPerioder: UttaksresultatPeriode;
}

const endepunkterPanelData = [
  FpBehandlingApiKeys.FAMILIEHENDELSE,
  FpBehandlingApiKeys.SOKNAD,
  FpBehandlingApiKeys.FERIEPENGEGRUNNLAG,
];
type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
  feriepengegrunnlag: Feriepengegrunnlag;
}

interface OwnProps {
  behandlingVersjon?: number;
  valgtProsessSteg: string;
  registrerProsessPanel: (data: ProsessPanelMenyData) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fagsak: Fagsak;
  personoversikt: Personoversikt;
}

const TilkjentYtelseProsessStegPanelDef: FunctionComponent<OwnProps> = ({
  behandlingVersjon,
  valgtProsessSteg,
  registrerProsessPanel,
  arbeidsgiverOpplysningerPerId,
  fagsak,
  personoversikt,
}) => {
  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(endepunkterInit, behandlingVersjon);

  const standardPanelProps = useStandardProsessPanelProps(initData, aksjonspunktKoder);

  const skalVises = initState === RestApiState.SUCCESS;
  const erAktiv = valgtProsessSteg === prosessStegCodes.TILKJENT_YTELSE || (standardPanelProps.isAksjonspunktOpen && valgtProsessSteg === 'default');
  const status = useMemo(() => getStatusFromResultatstruktur(initData?.beregningresultatForeldrepenger, initData?.uttaksresultatPerioder), [
    initData?.beregningresultatForeldrepenger, initData?.uttaksresultatPerioder]);

  const erPanelValgt = prosessPanelHooks.useMenyRegistrerer(
    registrerProsessPanel,
    prosessStegCodes.TILKJENT_YTELSE,
    getPackageIntl().formatMessage({ id: 'Behandlingspunkt.TilkjentYtelse' }),
    skalVises,
    erAktiv,
    standardPanelProps.isAksjonspunktOpen,
    status,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(endepunkterPanelData, erPanelValgt, behandlingVersjon);

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={standardPanelProps.isAksjonspunktOpen}
      status={status}
      loadingState={panelDataState}
    >
      <TilkjentYtelseProsessIndex
        fagsak={fagsak}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        personoversikt={personoversikt}
        beregningresultat={initData?.beregningresultatForeldrepenger}
        {...panelData}
        {...standardPanelProps}
      />
    </ProsessPanelWrapper>
  );
};

export default TilkjentYtelseProsessStegPanelDef;
