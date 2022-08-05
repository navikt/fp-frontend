import React, { FunctionComponent } from 'react';
import moment from 'moment';

import { isVilkarForSykdomOppfylt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import behandlingTyper from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingStatuser from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Behandling, FaktaArbeidsforhold, FamilieHendelseSamling, AlleKodeverk,
  Personoversikt,
  UttakKontrollerFaktaPerioder, Ytelsefordeling,
} from '@fpsak-frontend/types';
import { FaktaUttakAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import UttakFaktaForm from './UttakFaktaForm';

const getBehandlingArsakTyper = (behandlingArsaker: Behandling['behandlingÅrsaker']): string[] | undefined => {
  if (behandlingArsaker) {
    return behandlingArsaker.map(({
      behandlingArsakType,
    }) => behandlingArsakType);
  }

  return undefined;
};

const getErManueltOpprettet = (behandlingArsaker: Behandling['behandlingÅrsaker'] = []): boolean => behandlingArsaker
  .some((ba) => ba.manueltOpprettet === true);

const getErArsakTypeHendelseFodsel = (behandlingArsakTyper: string[] = []): boolean => behandlingArsakTyper.some((bt) => bt === 'RE-HENDELSE-FØDSEL');

const sortUttaksperioder = (p1: UttakKontrollerFaktaPerioder, p2: UttakKontrollerFaktaPerioder): number => moment(p1.tom).diff(moment(p2.tom));

interface OwnProps {
  submitCallback: (data: FaktaUttakAp[]) => Promise<void>;
  readOnly: boolean;
  aksjonspunkter: Aksjonspunkt[];
  behandlingType: string;
  behandlingArsaker: Behandling['behandlingÅrsaker'];
  behandlingStatus: string;
  ytelsefordeling: Ytelsefordeling;
  uttakPerioder: UttakKontrollerFaktaPerioder[];
  alleKodeverk: AlleKodeverk;
  kanOverstyre: boolean;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  personoversikt: Personoversikt;
  familiehendelse: FamilieHendelseSamling;
  behandlingPaaVent?: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  submittable: boolean;
}

const UttakInfoPanel: FunctionComponent<OwnProps> = ({
  readOnly,
  aksjonspunkter,
  behandlingPaaVent,
  behandlingType,
  behandlingArsaker,
  behandlingStatus,
  ytelsefordeling,
  uttakPerioder,
  alleKodeverk,
  faktaArbeidsforhold,
  personoversikt,
  familiehendelse,
  kanOverstyre,
  submitCallback,
  arbeidsgiverOpplysningerPerId,
  submittable,
}) => {
  const vilkarForSykdomExists = aksjonspunkter.filter((ap) => isVilkarForSykdomOppfylt(ap.definisjon)).length > 0;
  const uttakApOpen = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status));
  const overrideReadOnly = readOnly || (!aksjonspunkter.length && !aksjonspunkter.some((ap: Aksjonspunkt) => ap.kanLoses));
  const behandlingArsakTyper = getBehandlingArsakTyper(behandlingArsaker);
  const behandlingIsRevurdering = behandlingType === behandlingTyper.REVURDERING;
  const erManueltOpprettet = getErManueltOpprettet(behandlingArsaker);
  const erArsakTypeHendelseFodsel = getErArsakTypeHendelseFodsel(behandlingArsakTyper);
  const isRevurdering = behandlingIsRevurdering && (erManueltOpprettet || erArsakTypeHendelseFodsel);
  const behandlingUtredes = behandlingStatus === behandlingStatuser.BEHANDLING_UTREDES;
  const sortedUttakPerioder = [...uttakPerioder].sort(sortUttaksperioder);

  return (
    <UttakFaktaForm
      // @ts-ignore
      hasOpenAksjonspunkter={uttakApOpen}
      // @ts-ignore
      readOnly={(overrideReadOnly && (!isRevurdering || !behandlingUtredes || behandlingPaaVent)) || !ytelsefordeling.endringsdato}
      // @ts-ignore
      aksjonspunkter={aksjonspunkter}
      // @ts-ignore
      submitCallback={submitCallback}
      // @ts-ignore
      behandlingStatus={behandlingStatus}
      // @ts-ignore
      ytelsefordeling={ytelsefordeling}
      // @ts-ignore
      uttakPerioder={sortedUttakPerioder}
      // @ts-ignore
      alleKodeverk={alleKodeverk}
      // @ts-ignore
      kanOverstyre={kanOverstyre && ytelsefordeling.endringsdato !== null}
      // @ts-ignore
      faktaArbeidsforhold={faktaArbeidsforhold}
      // @ts-ignore
      personoversikt={personoversikt}
      // @ts-ignore
      familiehendelse={familiehendelse}
      // @ts-ignore
      vilkarForSykdomExists={vilkarForSykdomExists}
      // @ts-ignore
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      // @ts-ignore
      submittable={submittable}
    />
  );
};

UttakInfoPanel.defaultProps = {
  behandlingPaaVent: false,
};

export default UttakInfoPanel;
