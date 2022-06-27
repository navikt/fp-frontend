import React, { FunctionComponent, useMemo } from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt, AlleKodeverk, Medlemskap, Soknad,
} from '@fpsak-frontend/types';
import {
  AvklarFortsattMedlemskapAp, BekreftBosattVurderingAp, BekreftErMedlemVurderingAp, BekreftLovligOppholdVurderingAp,
  BekreftOppholdsrettVurderingAp, OverstyringAvklarStartdatoForPeriodenAp,
} from '@fpsak-frontend/types-avklar-aksjonspunkter';

import OppholdInntektOgPerioderForm from './oppholdInntektOgPerioder/OppholdInntektOgPerioderForm';

const {
  OVERSTYR_AVKLAR_STARTDATO,
} = aksjonspunktCodes;

type AksjonspunktData = Array<BekreftBosattVurderingAp
  | BekreftErMedlemVurderingAp
  | BekreftOppholdsrettVurderingAp
  | BekreftLovligOppholdVurderingAp
  | AvklarFortsattMedlemskapAp>;

interface OwnProps {
  submittable: boolean;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submitCallback: (data: OverstyringAvklarStartdatoForPeriodenAp
    | AksjonspunktData) => Promise<void>;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  behandlingType: string;
  soknad: Soknad;
  alleKodeverk: AlleKodeverk;
  medlemskap: Medlemskap;
}

/**
 * MedlemskapInfoPanel
 *
 * Presentasjonskomponent. Har ansvar for å vise faktapanelene for medlemskap.
 */
const MedlemskapInfoPanel: FunctionComponent<OwnProps> = ({
  submittable,
  aksjonspunkter,
  readOnly,
  submitCallback,
  alleMerknaderFraBeslutter,
  behandlingType,
  soknad,
  alleKodeverk,
  medlemskap,
}) => {
  const aksjonspunkterMinusAvklarStartDato = useMemo(() => aksjonspunkter
    .filter((ap) => ap.definisjon !== OVERSTYR_AVKLAR_STARTDATO), [aksjonspunkter]);

  return (
    /* @ts-ignore Fiks cannot be used as a JSX component */
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
  );
};

export default MedlemskapInfoPanel;
