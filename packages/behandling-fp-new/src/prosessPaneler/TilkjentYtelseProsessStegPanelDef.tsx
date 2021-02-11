import React, {
  FunctionComponent, useEffect,
} from 'react';

import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';
import { FadingPanel, LoadingPanel } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import TilkjentYtelseProsessIndex from '@fpsak-frontend/prosess-tilkjent-ytelse';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Behandling, BeregningsresultatFp, BeregningsresultatPeriode,
  Fagsak, FamilieHendelseSamling, Feriepengegrunnlag, Personopplysninger, Soknad, UttaksresultatPeriode,
} from '@fpsak-frontend/types';
import { useStandardProsessPanelProps, MargMarkering, ProsessStegIkkeBehandletPanel } from '@fpsak-frontend/behandling-felles-ny';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';

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

const aksjonspunktKoder = [
  aksjonspunktCodes.VURDER_TILBAKETREKK,
];

const endepunkter = [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER },
];

const endepunkterVedVisning = [
  { key: FpBehandlingApiKeys.FAMILIEHENDELSE },
  { key: FpBehandlingApiKeys.FERIEPENGEGRUNNLAG },
];

type EndepunktData = {
  aksjonspunkter: Aksjonspunkt[];
  beregningresultatForeldrepenger: BeregningsresultatFp;
  uttaksresultatPerioder: UttaksresultatPeriode;
}

type EndepunktDataVedVisning = {
  familiehendelse: FamilieHendelseSamling;
  personopplysninger: Personopplysninger;
  soknad: Soknad;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  feriepengegrunnlag: Feriepengegrunnlag;
}

interface OwnProps {
  behandling: Behandling;
  valgtProsessSteg: string;
  registrerFaktaPanel: (data: {
    id: string;
    tekst?: string;
    erAktiv?: boolean;
    harApentAksjonspunkt?: boolean;
    status?: string;
  }) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fagsak: Fagsak;
}

const TilkjentYtelseProsessStegPanelDef: FunctionComponent<OwnProps> = ({
  behandling,
  valgtProsessSteg,
  registrerFaktaPanel,
  arbeidsgiverOpplysningerPerId,
  fagsak,
}) => {
  useEffect(() => {
    registrerFaktaPanel({
      id: prosessStegCodes.TILKJENT_YTELSE,
    });
  }, []);

  const erPanelValgt = valgtProsessSteg === prosessStegCodes.TILKJENT_YTELSE;

  const { data, state } = restApiFpHooks.useMultipleRestApi<EndepunktData>(endepunkter, {
    keepData: true,
    updateTriggers: [behandling?.versjon],
    isCachingOn: true,
  });

  const { data: dataEtterVisning, state: stateEtterVisning } = restApiFpHooks.useMultipleRestApi<EndepunktDataVedVisning>(endepunkterVedVisning, {
    keepData: true,
    updateTriggers: [erPanelValgt, behandling?.versjon],
    suspendRequest: !erPanelValgt,
    isCachingOn: true,
  });

  const filtrerteAksjonspunkter = data ? data.aksjonspunkter.filter((ap) => aksjonspunktKoder.includes(ap.definisjon.kode)) : [];

  const standardProps = useStandardProsessPanelProps(filtrerteAksjonspunkter);

  const skalVises = state === RestApiState.SUCCESS;

  useEffect(() => {
    if (skalVises) {
      registrerFaktaPanel({
        id: prosessStegCodes.TILKJENT_YTELSE,
        tekst: getPackageIntl().formatMessage({ id: 'Behandlingspunkt.TilkjentYtelse' }),
        erAktiv: valgtProsessSteg === prosessStegCodes.TILKJENT_YTELSE,
        harApentAksjonspunkt: standardProps.isAksjonspunktOpen,
        status: getStatusFromResultatstruktur(data.beregningresultatForeldrepenger, data.uttaksresultatPerioder),
      });
    }
  }, [valgtProsessSteg, standardProps.isAksjonspunktOpen, state]);

  if (!erPanelValgt) {
    return null;
  }

  if (standardProps.status === vilkarUtfallType.IKKE_VURDERT) {
    // FIXME Lag ein wrapper med style rundt denne. Samme som MargMarkering?
    return <ProsessStegIkkeBehandletPanel />;
  }

  if (stateEtterVisning !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <MargMarkering
      behandlingStatus={behandling.status}
      aksjonspunkter={filtrerteAksjonspunkter}
      isReadOnly={standardProps.isReadOnly}
      visAksjonspunktMarkering
    >
      <FadingPanel>
        <TilkjentYtelseProsessIndex
          behandling={behandling}
          fagsak={fagsak}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          beregningresultat={data.beregningresultatForeldrepenger}
          {...dataEtterVisning}
          {...standardProps}
        />
      </FadingPanel>
    </MargMarkering>
  );
};

export default TilkjentYtelseProsessStegPanelDef;
