import React, { FunctionComponent } from 'react';
import { Aksjonspunkt } from '@navikt/ft-types';

import {
  AlleKodeverk, Medlemskap, Soknad,
} from '@fpsak-frontend/types';
import {
  AvklarFortsattMedlemskapAp, BekreftBosattVurderingAp, BekreftErMedlemVurderingAp, BekreftLovligOppholdVurderingAp,
  BekreftOppholdsrettVurderingAp, OverstyringAvklarStartdatoForPeriodenAp,
} from '@fpsak-frontend/types-avklar-aksjonspunkter';

import OppholdInntektOgPerioderForm from './oppholdInntektOgPerioder/OppholdInntektOgPerioderForm';

type AksjonspunktData = Array<BekreftBosattVurderingAp
  | BekreftErMedlemVurderingAp
  | BekreftOppholdsrettVurderingAp
  | BekreftLovligOppholdVurderingAp
  | AvklarFortsattMedlemskapAp>;

interface OwnProps {
  submittable: boolean;
  readOnly: boolean;
  aksjonspunkter: Aksjonspunkt[];
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
  readOnly,
  submitCallback,
  alleMerknaderFraBeslutter,
  aksjonspunkter,
  behandlingType,
  soknad,
  alleKodeverk,
  medlemskap,
}) => (
  /* @ts-ignore Fiks cannot be used as a JSX component */
  <OppholdInntektOgPerioderForm
    soknad={soknad}
    readOnly={readOnly}
    aksjonspunkter={aksjonspunkter}
    submitCallback={submitCallback}
    submittable={submittable}
    alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
    behandlingType={behandlingType}
    alleKodeverk={alleKodeverk}
    medlemskap={medlemskap}
  />
);

export default MedlemskapInfoPanel;
