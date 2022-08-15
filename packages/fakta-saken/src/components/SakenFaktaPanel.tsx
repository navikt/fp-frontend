import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt, Soknad } from '@fpsak-frontend/types';
import { VerticalSpacer, AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import {
  OverstyringUtenlandssakMarkeringAp, MerkOpptjeningUtlandAp, OverstyringAvklarStartdatoForPeriodenAp,
} from '@fpsak-frontend/types-avklar-aksjonspunkter';

import UtlandPanel from './utland/UtlandPanel';
import InnhentDokOpptjeningUtlandPanel from './innhentDok/InnhentDokOpptjeningUtlandPanel';
import StartdatoForForeldrepengerperiodenForm from './startdatoForForeldrepenger/StartdatoForForeldrepengerperiodenForm';

interface OwnProps {
  soknad: Soknad;
  aksjonspunkter: Aksjonspunkt[];
  dokStatus?: string;
  harApneAksjonspunkter: boolean;
  submitCallback: (data: OverstyringUtenlandssakMarkeringAp | MerkOpptjeningUtlandAp | OverstyringAvklarStartdatoForPeriodenAp) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  formData?: any,
  setFormData: (data: any) => void,
}

const erMarkertUtenlandssak = (
  aksjonspunkter: Aksjonspunkt[],
): boolean => aksjonspunkter.some((ap) => ap.definisjon === aksjonspunktCodes.AUTOMATISK_MARKERING_AV_UTENLANDSSAK);

const SakenFaktaPanel: FunctionComponent<OwnProps> = ({
  soknad,
  aksjonspunkter,
  dokStatus,
  harApneAksjonspunkter,
  alleMerknaderFraBeslutter,
  submitCallback,
  readOnly,
  submittable,
  formData,
  setFormData,
}) => (
  <>
    {harApneAksjonspunkter && erMarkertUtenlandssak(aksjonspunkter) && (
      <>
        <AksjonspunktHelpTextHTML>
          {[<FormattedMessage key="OpptjeningUtland" id="SakenFaktaPanel.OpptjeningUtland" />]}
        </AksjonspunktHelpTextHTML>
        <VerticalSpacer thirtyTwoPx />
      </>
    )}
    <Row className="">
      <Column xs="6">
        <UtlandPanel
          aksjonspunkter={aksjonspunkter}
          submitCallback={submitCallback}
          readOnly={readOnly}
        />
        {erMarkertUtenlandssak(aksjonspunkter) && (
          <>
            <VerticalSpacer fourtyPx />
            <InnhentDokOpptjeningUtlandPanel
              dokStatus={dokStatus}
              readOnly={readOnly}
              harApneAksjonspunkter={harApneAksjonspunkter}
              aksjonspunkt={aksjonspunkter.find((ap) => ap.definisjon === aksjonspunktCodes.AUTOMATISK_MARKERING_AV_UTENLANDSSAK)}
              submittable={submittable}
              submitCallback={submitCallback}
              alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
              formData={formData}
              setFormData={setFormData}
            />
          </>
        )}
      </Column>
      <Column xs="6">
        <StartdatoForForeldrepengerperiodenForm
          aksjonspunkt={aksjonspunkter.find((ap) => ap.definisjon === aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO)}
          submitCallback={submitCallback}
          readOnly={readOnly}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          soknad={soknad}
          formData={formData}
          setFormData={setFormData}
        />
      </Column>
    </Row>
  </>
);

export default SakenFaktaPanel;
