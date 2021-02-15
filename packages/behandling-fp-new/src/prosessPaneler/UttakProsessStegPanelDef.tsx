import React, {
  FunctionComponent,
} from 'react';

import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import UttakProsessIndex from '@fpsak-frontend/prosess-uttak';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  AksessRettigheter,
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Fagsak, FamilieHendelseSamling,
  Personopplysninger, Soknad, UttakPeriodeGrense, UttaksresultatPeriode, UttakStonadskontoer, Vilkar, Ytelsefordeling,
} from '@fpsak-frontend/types';
import {
  useStandardProsessPanelProps, ProsessPanelWrapper, prosessPanelHooks, ProsessPanelMenyData,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../data/fpBehandlingApi';

// TODO Er dette mogleg å fjerna?
const faktaUttakAp = [
  aksjonspunktCodes.AVKLAR_UTTAK,
  aksjonspunktCodes.ANNEN_FORELDER_IKKE_RETT_OG_LØPENDE_VEDTAK,
  aksjonspunktCodes.AVKLAR_FØRSTE_UTTAKSDATO,
  aksjonspunktCodes.AVKLAR_ANNEN_FORELDER_RETT,
  aksjonspunktCodes.MANUELL_AVKLAR_FAKTA_UTTAK,
  aksjonspunktCodes.OVERSTYR_AVKLAR_FAKTA_UTTAK,
];

const getStatusFromUttakresultat = (uttaksresultat: UttaksresultatPeriode, aksjonspunkter: Aksjonspunkt[]): string => {
  if (!uttaksresultat || aksjonspunkter.some((ap) => faktaUttakAp.includes(ap.definisjon.kode) && ap.status.kode === 'OPPR')) {
    return vilkarUtfallType.IKKE_VURDERT;
  }
  if (uttaksresultat.perioderSøker && uttaksresultat.perioderSøker.length > 0) {
    const oppfylt = uttaksresultat.perioderSøker.some((p) => (
      p.periodeResultatType.kode !== periodeResultatType.AVSLATT
    ));
    if (oppfylt) {
      return vilkarUtfallType.OPPFYLT;
    }
  }
  return vilkarUtfallType.IKKE_OPPFYLT;
};

const aksjonspunktKoder = [
  aksjonspunktCodes.FASTSETT_UTTAKPERIODER,
  aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER,
  aksjonspunktCodes.TILKNYTTET_STORTINGET,
  aksjonspunktCodes.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE,
  aksjonspunktCodes.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN,
  aksjonspunktCodes.KONTROLLER_OPPLYSNINGER_OM_DØD,
  aksjonspunktCodes.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST,
  aksjonspunktCodes.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET,
  aksjonspunktCodes.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT,
];

const endepunkterInit = [
  FpBehandlingApiKeys.AKSJONSPUNKTER,
  FpBehandlingApiKeys.VILKAR,
  FpBehandlingApiKeys.UTTAKSRESULTAT_PERIODER,
];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
  uttaksresultatPerioder: UttaksresultatPeriode;
}

const endepunkterPanelData = [
  FpBehandlingApiKeys.FAMILIEHENDELSE,
  FpBehandlingApiKeys.UTTAK_PERIODE_GRENSE,
  FpBehandlingApiKeys.UTTAK_STONADSKONTOER,
  FpBehandlingApiKeys.SOKNAD,
  FpBehandlingApiKeys.PERSONOPPLYSNINGER,
  FpBehandlingApiKeys.YTELSEFORDELING,
];
type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  uttakPeriodeGrense: UttakPeriodeGrense;
  uttakStonadskontoer: UttakStonadskontoer;
  soknad: Soknad;
  personopplysninger: Personopplysninger;
  ytelsefordeling: Ytelsefordeling;
}

interface OwnProps {
  behandlingVersjon?: number;
  valgtProsessSteg: string;
  registrerProsessPanel: (data: ProsessPanelMenyData) => void;
  apentFaktaPanelInfo?: {urlCode: string, textCode: string };
  rettigheter: AksessRettigheter;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fagsak: Fagsak;
  tempUpdateStonadskontoer: (params?: any, keepData?: boolean) => Promise<unknown>;
}

const UttakProsessStegPanelDef: FunctionComponent<OwnProps> = ({
  behandlingVersjon,
  valgtProsessSteg,
  registrerProsessPanel,
  apentFaktaPanelInfo,
  rettigheter,
  arbeidsgiverOpplysningerPerId,
  fagsak,
  tempUpdateStonadskontoer,
}) => {
  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(endepunkterInit, behandlingVersjon);

  const standardPanelProps = useStandardProsessPanelProps(initData, aksjonspunktKoder);

  const skalVises = initState === RestApiState.SUCCESS;
  const erAktiv = !apentFaktaPanelInfo
    && (valgtProsessSteg === prosessStegCodes.UTTAK || (standardPanelProps.isAksjonspunktOpen && valgtProsessSteg === 'default'));
  const status = getStatusFromUttakresultat(initData?.uttaksresultatPerioder, initData?.aksjonspunkter);

  const erPanelValgt = prosessPanelHooks.useMenyRegistrerer(
    registrerProsessPanel,
    prosessStegCodes.UTTAK,
    getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Uttak' }),
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
      <UttakProsessIndex
        fagsak={fagsak}
        employeeHasAccess={rettigheter.kanOverstyreAccess.isEnabled}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        tempUpdateStonadskontoer={tempUpdateStonadskontoer}
        uttaksresultatPerioder={initData?.uttaksresultatPerioder}
        {...panelData}
        {...standardPanelProps}
      />
    </ProsessPanelWrapper>
  );
};

export default UttakProsessStegPanelDef;
