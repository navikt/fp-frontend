import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import { VerticalSpacer, AksjonspunktHelpTextHTML } from '@fpsak-frontend/shared-components';
import { OverstyringUtenlandssakMarkeringAp, MerkOpptjeningUtlandAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import UtlandPanel from './utland/UtlandPanel';
import InnhentDokOpptjeningUtlandPanel from './innhentDok/InnhentDokOpptjeningUtlandPanel';

interface OwnProps {
  aksjonspunkter: Aksjonspunkt[];
  dokStatus?: string;
  harApneAksjonspunkter: boolean;
  submitCallback: (data: OverstyringUtenlandssakMarkeringAp | MerkOpptjeningUtlandAp) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

const personAksjonspunkter = [aksjonspunktCodes.AUTOMATISK_MARKERING_AV_UTENLANDSSAK];
const erMarkertUtenlandssak = (aksjonspunkter: Aksjonspunkt[]): boolean => aksjonspunkter.some((ap) => ap.definisjon.kode === personAksjonspunkter[0]);

const SakenFaktaPanel: FunctionComponent<OwnProps> = ({
  aksjonspunkter,
  dokStatus,
  harApneAksjonspunkter,
  alleMerknaderFraBeslutter,
  submitCallback,
  readOnly,
  submittable,
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
      </Column>
      {erMarkertUtenlandssak(aksjonspunkter) && (
        <Column xs="6">
          <InnhentDokOpptjeningUtlandPanel
            dokStatus={dokStatus}
            readOnly={readOnly}
            harApneAksjonspunkter={harApneAksjonspunkter}
            aksjonspunkt={aksjonspunkter.find((ap) => ap.definisjon.kode === personAksjonspunkter[0])}
            submittable={submittable}
            submitCallback={submitCallback}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          />
        </Column>
      )}
    </Row>
  </>
);

export default SakenFaktaPanel;
