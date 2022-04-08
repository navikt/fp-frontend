import React, { FunctionComponent } from 'react';
import moment from 'moment';

import aksjonspunktCodes, { isVilkarForSykdomOppfylt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import behandlingTyper from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingStatuser from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Behandling, FaktaArbeidsforhold, FamilieHendelseSamling, AlleKodeverk,
  Personoversikt,
  UttakKontrollerFaktaPerioder, Ytelsefordeling,
} from '@fpsak-frontend/types';
import { AvklarAnnenforelderHarRettAp, FaktaUttakAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import AnnenForelderHarRettForm from './AnnenForelderHarRettForm';
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
  submitCallback: (data: AvklarAnnenforelderHarRettAp | FaktaUttakAp[]) => Promise<void>;
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
  const avklarAnnenForelderRettAp = aksjonspunkter.find((ap) => ap.definisjon === aksjonspunktCodes.AVKLAR_ANNEN_FORELDER_RETT);
  const uttakAp = aksjonspunkter.filter((ap) => ap.definisjon !== aksjonspunktCodes.AVKLAR_ANNEN_FORELDER_RETT);
  const vilkarForSykdomExists = aksjonspunkter.filter((ap) => isVilkarForSykdomOppfylt(ap.definisjon)).length > 0;
  const uttakApOpen = uttakAp.some((ap) => isAksjonspunktOpen(ap.status));
  const overrideReadOnly = readOnly || (!uttakAp.length && !uttakAp.some((ap: Aksjonspunkt) => ap.kanLoses));
  const behandlingArsakTyper = getBehandlingArsakTyper(behandlingArsaker);
  const behandlingIsRevurdering = behandlingType === behandlingTyper.REVURDERING;
  const erManueltOpprettet = getErManueltOpprettet(behandlingArsaker);
  const erArsakTypeHendelseFodsel = getErArsakTypeHendelseFodsel(behandlingArsakTyper);
  const isRevurdering = behandlingIsRevurdering && (erManueltOpprettet || erArsakTypeHendelseFodsel);
  const behandlingUtredes = behandlingStatus === behandlingStatuser.BEHANDLING_UTREDES;
  const sortedUttakPerioder = [...uttakPerioder].sort(sortUttaksperioder);

  return (
    <>
      {avklarAnnenForelderRettAp && (
        <>
          <AnnenForelderHarRettForm
            hasOpenAksjonspunkter={isAksjonspunktOpen(avklarAnnenForelderRettAp.status)}
            hasOpenUttakAksjonspunkter={uttakApOpen}
            readOnly={readOnly}
            aksjonspunkt={avklarAnnenForelderRettAp}
            submitCallback={submitCallback}
            ytelsefordeling={ytelsefordeling}
          />
          <VerticalSpacer twentyPx />
        </>
      )}

      {(!avklarAnnenForelderRettAp || !isAksjonspunktOpen(avklarAnnenForelderRettAp.status)) && (
        <UttakFaktaForm
          hasOpenAksjonspunkter={uttakApOpen}
          readOnly={(overrideReadOnly && (!isRevurdering || !behandlingUtredes || behandlingPaaVent)) || !ytelsefordeling.endringsdato}
          aksjonspunkter={uttakAp}
          submitCallback={submitCallback}
          behandlingStatus={behandlingStatus}
          ytelsefordeling={ytelsefordeling}
          uttakPerioder={sortedUttakPerioder}
          alleKodeverk={alleKodeverk}
          kanOverstyre={kanOverstyre && ytelsefordeling.endringsdato !== null}
          faktaArbeidsforhold={faktaArbeidsforhold}
          personoversikt={personoversikt}
          familiehendelse={familiehendelse}
          vilkarForSykdomExists={vilkarForSykdomExists}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          submittable={submittable}
        />
      )}

    </>
  );
};

UttakInfoPanel.defaultProps = {
  behandlingPaaVent: false,
};

export default UttakInfoPanel;
