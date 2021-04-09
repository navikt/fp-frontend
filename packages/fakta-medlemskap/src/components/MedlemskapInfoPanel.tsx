import React, { FunctionComponent, useMemo } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, InntektArbeidYtelse, Kodeverk, KodeverkMedNavn, Medlemskap, Soknad,
} from '@fpsak-frontend/types';

import StartdatoForForeldrepengerperiodenForm from './startdatoForPeriode/StartdatoForForeldrepengerperiodenForm';
import OppholdInntektOgPerioderForm from './oppholdInntektOgPerioder/OppholdInntektOgPerioderForm';

const {
  AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN, OVERSTYR_AVKLAR_STARTDATO,
} = aksjonspunktCodes;

const hasOpen = (aksjonspunkt: Aksjonspunkt): boolean => aksjonspunkt && isAksjonspunktOpen(aksjonspunkt.status.kode);

const skalKunneLoseUtenAksjonpunkter = (
  aksjonspunkterMinusAvklarStartDato: Aksjonspunkt[],
  hasOpenAksjonspunkter: boolean,
  isForeldrepenger?: boolean,
): boolean => (isForeldrepenger && (aksjonspunkterMinusAvklarStartDato.length === 0 || !hasOpenAksjonspunkter));

const harAksjonspunkterForAvklarStartdato = (aksjonspunkter: Aksjonspunkt[]): boolean => aksjonspunkter
  .some((ap) => ap.definisjon.kode === AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN || ap.definisjon.kode === OVERSTYR_AVKLAR_STARTDATO);

const skalViseAvklarStartdatoPanel = (
  aksjonspunkter: Aksjonspunkt[],
  aksjonspunkterMinusAvklarStartDato: Aksjonspunkt[],
  hasOpenAksjonspunkter: boolean,
  isForeldrepenger?: boolean,
): boolean => (harAksjonspunkterForAvklarStartdato(aksjonspunkter)
  || skalKunneLoseUtenAksjonpunkter(aksjonspunkterMinusAvklarStartDato, hasOpenAksjonspunkter, isForeldrepenger));

interface OwnProps {
  hasOpenAksjonspunkter: boolean;
  submittable: boolean;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submitCallback: (...args: any[]) => any;
  isForeldrepenger?: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  behandlingId: number;
  behandlingVersjon: number;
  behandlingType: Kodeverk;
  behandlingStatus: Kodeverk;
  soknad: Soknad;
  inntektArbeidYtelse: InntektArbeidYtelse;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  medlemskap: Medlemskap;
  behandlingPaaVent: boolean;
  readOnlyForStartdatoForForeldrepenger: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * MedlemskapInfoPanel
 *
 * Presentasjonskomponent. Har ansvar for å vise faktapanelene for medlemskap.
 */
const MedlemskapInfoPanel: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  hasOpenAksjonspunkter,
  submittable,
  aksjonspunkter,
  readOnly,
  submitCallback,
  isForeldrepenger,
  alleMerknaderFraBeslutter,
  behandlingId,
  behandlingVersjon,
  behandlingType,
  behandlingStatus,
  soknad,
  inntektArbeidYtelse,
  alleKodeverk,
  medlemskap,
  behandlingPaaVent,
  readOnlyForStartdatoForForeldrepenger,
  arbeidsgiverOpplysningerPerId,
}) => {
  const avklarStartdatoAksjonspunkt = aksjonspunkter.find((ap) => ap.definisjon.kode === AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN);
  const avklarStartdatoOverstyring = aksjonspunkter.find((ap) => ap.definisjon.kode === OVERSTYR_AVKLAR_STARTDATO);
  const aksjonspunkterMinusAvklarStartDato = useMemo(() => aksjonspunkter
    .filter((ap) => ap.definisjon.kode !== AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN
      && ap.definisjon.kode !== OVERSTYR_AVKLAR_STARTDATO), [aksjonspunkter]);

  return (
    <>
      {skalViseAvklarStartdatoPanel(aksjonspunkter, aksjonspunkterMinusAvklarStartDato, hasOpenAksjonspunkter, isForeldrepenger) && (
        <>
          <StartdatoForForeldrepengerperiodenForm
            intl={intl}
            readOnly={readOnly}
            aksjonspunkt={avklarStartdatoAksjonspunkt || avklarStartdatoOverstyring}
            submitCallback={submitCallback}
            submittable={submittable}
            hasOpenMedlemskapAksjonspunkter={hasOpenAksjonspunkter}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
            behandlingStatus={behandlingStatus}
            behandlingPaaVent={behandlingPaaVent}
            aksjonspunkter={aksjonspunkter}
            soknad={soknad}
            inntektArbeidYtelse={inntektArbeidYtelse}
            readOnlyForStartdatoForForeldrepenger={readOnlyForStartdatoForForeldrepenger}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
          <VerticalSpacer twentyPx />
        </>
      )}
      {(!hasOpen(avklarStartdatoAksjonspunkt) && !hasOpen(avklarStartdatoOverstyring)) && (
        <OppholdInntektOgPerioderForm
          soknad={soknad}
          readOnly={readOnly}
          submitCallback={submitCallback}
          submittable={submittable}
          aksjonspunkter={aksjonspunkterMinusAvklarStartDato}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          behandlingType={behandlingType}
          alleKodeverk={alleKodeverk}
          medlemskap={medlemskap}
        />
      )}
    </>
  );
};

MedlemskapInfoPanel.defaultProps = {
  isForeldrepenger: true,
};

export default injectIntl(MedlemskapInfoPanel);
