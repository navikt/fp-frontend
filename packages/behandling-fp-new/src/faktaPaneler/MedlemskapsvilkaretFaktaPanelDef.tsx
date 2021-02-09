import React, {
  FunctionComponent, useEffect,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import MedlemskapFaktaIndex from '@fpsak-frontend/fakta-medlemskap';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import {
  AksessRettigheter,
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Behandling, FagsakPerson, InntektArbeidYtelse, Medlemskap, Soknad,
} from '@fpsak-frontend/types';
import { useStandardFaktaProps, harBehandlingReadOnlyStatus } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN,
  aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT,
  aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
  aksjonspunktCodes.AVKLAR_OPPHOLDSRETT,
  aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD,
  aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP,
  aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO,
];

const endepunkter = [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER },
  { key: FpBehandlingApiKeys.SOKNAD },
];

const endepunkterVedVisning = [
  { key: FpBehandlingApiKeys.INNTEKT_ARBEID_YTELSE },
  { key: FpBehandlingApiKeys.MEDLEMSKAP },
];

type EndepunktData = {
  aksjonspunkter: Aksjonspunkt[];
  soknad: Soknad;
}

type EndepunktDataVedVisning = {
  inntektArbeidYtelse: InntektArbeidYtelse;
  medlemskap: Medlemskap;
}

interface OwnProps {
  valgtFaktaSteg: string;
  behandling: Behandling;
  registrerFaktaPanel: (data: {
    id: string;
    tekst?: string;
    erAktiv?: boolean;
    harAksjonspunkt?: boolean;
  }) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fagsakPerson: FagsakPerson;
  rettigheter: AksessRettigheter;
  hasFetchError: boolean;
}

/**
 * MedlemskapsvilkaretFaktaPanelDef
 */
const MedlemskapsvilkaretFaktaPanelDef: FunctionComponent<OwnProps> = ({
  valgtFaktaSteg,
  behandling,
  arbeidsgiverOpplysningerPerId,
  fagsakPerson,
  rettigheter,
  hasFetchError,
  registrerFaktaPanel,
}) => {
  useEffect(() => {
    registrerFaktaPanel({
      id: faktaPanelCodes.MEDLEMSKAPSVILKARET,
    });
  }, []);
  const erPanelValgt = valgtFaktaSteg === faktaPanelCodes.MEDLEMSKAPSVILKARET;

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

  const standardProps = useStandardFaktaProps(filtrerteAksjonspunkter);

  useEffect(() => {
    if (data && data.soknad) {
      registrerFaktaPanel({
        id: faktaPanelCodes.MEDLEMSKAPSVILKARET,
        tekst: getPackageIntl().formatMessage({ id: 'MedlemskapInfoPanel.Medlemskap' }),
        erAktiv: valgtFaktaSteg === faktaPanelCodes.MEDLEMSKAPSVILKARET,
        harAksjonspunkt: standardProps.harApneAksjonspunkter,
      });
    }
  }, [valgtFaktaSteg, standardProps.harApneAksjonspunkter, state]);

  if (!erPanelValgt) {
    return null;
  }

  if (stateEtterVisning !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <MedlemskapFaktaIndex
      behandling={behandling}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      isForeldrepengerFagsak
      fagsakPerson={fagsakPerson}
      readOnlyForStartdatoForForeldrepenger={!rettigheter.writeAccess.isEnabled
        || hasFetchError
        || behandling.behandlingPaaVent
        || harBehandlingReadOnlyStatus(behandling)}
      {...data}
      {...dataEtterVisning}
      {...standardProps}
    />
  );
};

export default MedlemskapsvilkaretFaktaPanelDef;
