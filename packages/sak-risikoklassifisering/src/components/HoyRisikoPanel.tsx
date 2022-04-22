import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import Panel from 'nav-frontend-paneler';

import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Risikoklassifisering, Aksjonspunkt, KodeverkMedNavn } from '@fpsak-frontend/types';
import { VurderFaresignalerAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import Faresignaler from './Faresignaler';
import AvklarFaresignalerForm from './AvklarFaresignalerForm';

interface OwnProps {
  risikoklassifisering: Risikoklassifisering;
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
  submitCallback: (data: VurderFaresignalerAp) => Promise<void>;
  faresignalVurderinger: KodeverkMedNavn[];
}

/**
 * AvklarFaresignaler
 *
 * Presentasjonskomponent. Statisk visning av panel som tilsier ingen faresignaler funnet i behandlingen.
 */
const HoyRisikoPanel: FunctionComponent<OwnProps> = ({
  risikoklassifisering,
  aksjonspunkt,
  readOnly,
  submitCallback,
  faresignalVurderinger,
}) => (
  <Panel>
    {aksjonspunkt && aksjonspunkt.status === aksjonspunktStatus.OPPRETTET && (
      <>
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="Risikopanel.Panel.Tittel" />
        </AksjonspunktHelpTextHTML>
        <VerticalSpacer sixteenPx />
      </>
    )}
    <Faresignaler risikoklassifisering={risikoklassifisering} />
    {!!aksjonspunkt && (
      <AvklarFaresignalerForm
        aksjonspunkt={aksjonspunkt}
        readOnly={readOnly}
        submitCallback={submitCallback}
        risikoklassifisering={risikoklassifisering}
        faresignalVurderinger={faresignalVurderinger}
      />
    )}
  </Panel>
);

export default HoyRisikoPanel;
