import React, { FunctionComponent, useMemo } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt, Kodeverk, AlleKodeverk, Medlemskap, Soknad,
} from '@fpsak-frontend/types';
import {
  AvklarFortsattMedlemskapAp, BekreftBosattVurderingAp, BekreftErMedlemVurderingAp, BekreftLovligOppholdVurderingAp,
  BekreftOppholdsrettVurderingAp, OverstyringAvklarStartdatoForPeriodenAp,
} from '@fpsak-frontend/types-avklar-aksjonspunkter';

import StartdatoForForeldrepengerperiodenForm from './startdatoForPeriode/StartdatoForForeldrepengerperiodenForm';
import OppholdInntektOgPerioderForm from './oppholdInntektOgPerioder/OppholdInntektOgPerioderForm';

const {
  OVERSTYR_AVKLAR_STARTDATO,
} = aksjonspunktCodes;

const hasOpen = (aksjonspunkt: Aksjonspunkt): boolean => aksjonspunkt && isAksjonspunktOpen(aksjonspunkt.status.kode);

const skalKunneLoseUtenAksjonpunkter = (
  aksjonspunkterMinusAvklarStartDato: Aksjonspunkt[],
  hasOpenAksjonspunkter: boolean,
  isForeldrepenger?: boolean,
): boolean => (isForeldrepenger && (aksjonspunkterMinusAvklarStartDato.length === 0 || !hasOpenAksjonspunkter));

const harAksjonspunkterForAvklarStartdato = (aksjonspunkter: Aksjonspunkt[]): boolean => aksjonspunkter
  .some((ap) => ap.definisjon.kode === OVERSTYR_AVKLAR_STARTDATO);

const skalViseAvklarStartdatoPanel = (
  aksjonspunkter: Aksjonspunkt[],
  aksjonspunkterMinusAvklarStartDato: Aksjonspunkt[],
  hasOpenAksjonspunkter: boolean,
  isForeldrepenger?: boolean,
): boolean => (harAksjonspunkterForAvklarStartdato(aksjonspunkter)
  || skalKunneLoseUtenAksjonpunkter(aksjonspunkterMinusAvklarStartDato, hasOpenAksjonspunkter, isForeldrepenger));

type AksjonspunktData = Array<BekreftBosattVurderingAp
  | BekreftErMedlemVurderingAp
  | BekreftOppholdsrettVurderingAp
  | BekreftLovligOppholdVurderingAp
  | AvklarFortsattMedlemskapAp>;

interface OwnProps {
  hasOpenAksjonspunkter: boolean;
  submittable: boolean;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submitCallback: (data: OverstyringAvklarStartdatoForPeriodenAp
    | AksjonspunktData) => Promise<void>;
  isForeldrepenger?: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  behandlingType: Kodeverk;
  behandlingStatus: Kodeverk;
  soknad: Soknad;
  alleKodeverk: AlleKodeverk;
  medlemskap: Medlemskap;
  readOnlyForStartdatoForForeldrepenger: boolean;
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
  behandlingType,
  behandlingStatus,
  soknad,
  alleKodeverk,
  medlemskap,
  readOnlyForStartdatoForForeldrepenger,
}) => {
  const avklarStartdatoOverstyring = aksjonspunkter.find((ap) => ap.definisjon.kode === OVERSTYR_AVKLAR_STARTDATO);
  const aksjonspunkterMinusAvklarStartDato = useMemo(() => aksjonspunkter
    .filter((ap) => ap.definisjon.kode !== OVERSTYR_AVKLAR_STARTDATO), [aksjonspunkter]);

  return (
    <>
      {skalViseAvklarStartdatoPanel(aksjonspunkter, aksjonspunkterMinusAvklarStartDato, hasOpenAksjonspunkter, isForeldrepenger) && (
        <>
          <StartdatoForForeldrepengerperiodenForm
            intl={intl}
            aksjonspunkt={avklarStartdatoOverstyring}
            submitCallback={submitCallback}
            submittable={submittable}
            hasOpenMedlemskapAksjonspunkter={hasOpenAksjonspunkter}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
            behandlingStatus={behandlingStatus}
            aksjonspunkter={aksjonspunkter}
            soknad={soknad}
            readOnlyForStartdatoForForeldrepenger={readOnlyForStartdatoForForeldrepenger}
          />
          <VerticalSpacer twentyPx />
        </>
      )}
      {(!hasOpen(avklarStartdatoOverstyring)) && (
        <OppholdInntektOgPerioderForm
          soknad={soknad}
          readOnly={readOnly}
          submitCallback={submitCallback}
          submittable={submittable}
          aksjonspunkter={aksjonspunkterMinusAvklarStartDato}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
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
