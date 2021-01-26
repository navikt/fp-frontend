import React, { FunctionComponent } from 'react';
import moment from 'moment';

import aksjonspunktCodes, { isVilkarForSykdomOppfylt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import behandlingTyper from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingStatuser from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Behandling, FaktaArbeidsforhold, FamilieHendelseSamling, Kodeverk, KodeverkMedNavn, Personopplysninger,
  UttakKontrollerFaktaPerioder, Ytelsefordeling,
} from '@fpsak-frontend/types';

import AnnenForelderHarRettForm from './AnnenForelderHarRettForm';
import UttakFaktaForm from './UttakFaktaForm';

const getBehandlingArsakTyper = (behandlingArsaker: Behandling['behandlingÅrsaker']): Kodeverk[] | undefined => {
  if (behandlingArsaker) {
    return behandlingArsaker.map(({
      behandlingArsakType,
    }) => behandlingArsakType);
  }

  return undefined;
};

const getErManueltOpprettet = (behandlingArsaker: Behandling['behandlingÅrsaker'] = []): boolean => behandlingArsaker
  .some((ba) => ba.manueltOpprettet === true);

const getErArsakTypeHendelseFodsel = (behandlingArsakTyper: Kodeverk[] = []): boolean => behandlingArsakTyper.some((bt) => bt.kode === 'RE-HENDELSE-FØDSEL');

const sortUttaksperioder = (p1: UttakKontrollerFaktaPerioder, p2: UttakKontrollerFaktaPerioder): number => moment(p1.tom).diff(moment(p2.tom));

interface OwnProps {
  submitCallback: (...args: any[]) => any;
  readOnly: boolean;
  aksjonspunkter: Aksjonspunkt[];
  behandlingType: Kodeverk;
  behandlingArsaker: Behandling['behandlingÅrsaker'];
  behandlingStatus: Kodeverk;
  behandlingId: number;
  behandlingVersjon: number;
  ytelsefordeling: Ytelsefordeling;
  uttakPerioder: UttakKontrollerFaktaPerioder[];
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  kanOverstyre: boolean;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  personopplysninger: Personopplysninger;
  familiehendelse: FamilieHendelseSamling;
  behandlingPaaVent?: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const UttakInfoPanel: FunctionComponent<OwnProps> = ({
  readOnly,
  aksjonspunkter,
  behandlingPaaVent,
  behandlingType,
  behandlingArsaker,
  behandlingStatus,
  behandlingId,
  behandlingVersjon,
  ytelsefordeling,
  uttakPerioder,
  alleKodeverk,
  faktaArbeidsforhold,
  personopplysninger,
  familiehendelse,
  kanOverstyre,
  submitCallback,
  arbeidsgiverOpplysningerPerId,
}) => {
  const avklarAnnenForelderRettAp = aksjonspunkter.find((ap) => ap.definisjon.kode === aksjonspunktCodes.AVKLAR_ANNEN_FORELDER_RETT);
  const uttakAp = aksjonspunkter.filter((ap) => ap.definisjon.kode !== aksjonspunktCodes.AVKLAR_ANNEN_FORELDER_RETT);
  const vilkarForSykdomExists = aksjonspunkter.filter((ap) => isVilkarForSykdomOppfylt(ap.definisjon.kode)).length > 0;
  const uttakApOpen = uttakAp.some((ap) => isAksjonspunktOpen(ap.status.kode));
  const overrideReadOnly = readOnly || (!uttakAp.length && !uttakAp.some((ap: Aksjonspunkt) => ap.kanLoses));
  const behandlingArsakTyper = getBehandlingArsakTyper(behandlingArsaker);
  const behandlingIsRevurdering = behandlingType.kode === behandlingTyper.REVURDERING;
  const erManueltOpprettet = getErManueltOpprettet(behandlingArsaker);
  const erArsakTypeHendelseFodsel = getErArsakTypeHendelseFodsel(behandlingArsakTyper);
  const isRevurdering = behandlingIsRevurdering && (erManueltOpprettet || erArsakTypeHendelseFodsel);
  const behandlingUtredes = behandlingStatus.kode === behandlingStatuser.BEHANDLING_UTREDES;
  const sortedUttakPerioder = [...uttakPerioder.sort(sortUttaksperioder)];

  return (
    <>
      {avklarAnnenForelderRettAp && (
        <>
          <AnnenForelderHarRettForm
            hasOpenAksjonspunkter={isAksjonspunktOpen(avklarAnnenForelderRettAp.status.kode)}
            hasOpenUttakAksjonspunkter={uttakApOpen}
            readOnly={readOnly}
            aksjonspunkter={[avklarAnnenForelderRettAp]}
            submitCallback={submitCallback}
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
            ytelsefordeling={ytelsefordeling}
          />
          <VerticalSpacer twentyPx />
        </>
      )}

      {(!avklarAnnenForelderRettAp || !isAksjonspunktOpen(avklarAnnenForelderRettAp.status.kode)) && (
        <UttakFaktaForm
          hasOpenAksjonspunkter={uttakApOpen}
          readOnly={(overrideReadOnly && (!isRevurdering || !behandlingUtredes || behandlingPaaVent)) || !ytelsefordeling.endringsdato}
          aksjonspunkter={uttakAp}
          submitCallback={submitCallback}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          behandlingStatus={behandlingStatus}
          ytelsefordeling={ytelsefordeling}
          uttakPerioder={sortedUttakPerioder}
          alleKodeverk={alleKodeverk}
          kanOverstyre={kanOverstyre && ytelsefordeling.endringsdato !== null}
          faktaArbeidsforhold={faktaArbeidsforhold}
          personopplysninger={personopplysninger}
          familiehendelse={familiehendelse}
          vilkarForSykdomExists={vilkarForSykdomExists}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      )}

    </>
  );
};

UttakInfoPanel.defaultProps = {
  behandlingPaaVent: false,
};

export default UttakInfoPanel;
