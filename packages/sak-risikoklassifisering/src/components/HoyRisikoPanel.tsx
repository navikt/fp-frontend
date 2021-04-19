import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import Panel from 'nav-frontend-paneler';

import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { Risikoklassifisering, Aksjonspunkt, KodeverkMedNavn } from '@fpsak-frontend/types';
import { VurderFaresignalerAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import { ReduxWrapper } from '@fpsak-frontend/form';

import Faresignaler from './Faresignaler';
import AvklarFaresignalerForm from './AvklarFaresignalerForm';

interface OwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  risikoklassifisering?: Risikoklassifisering;
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
  behandlingId,
  behandlingVersjon,
  risikoklassifisering,
  aksjonspunkt,
  readOnly,
  submitCallback,
  faresignalVurderinger,
}) => (
  <Panel>
    {aksjonspunkt && aksjonspunkt.status.kode === aksjonspunktStatus.OPPRETTET && (
      <>
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="Risikopanel.Panel.Tittel" />
        </AksjonspunktHelpTextHTML>
        <VerticalSpacer sixteenPx />
      </>
    )}
    <Faresignaler risikoklassifisering={risikoklassifisering} />
    {!!aksjonspunkt
      && (
        <ReduxWrapper formName="HoyRisikoPanel">
          <AvklarFaresignalerForm
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
            aksjonspunkt={aksjonspunkt}
            readOnly={readOnly}
            submitCallback={submitCallback}
            risikoklassifisering={risikoklassifisering}
            faresignalVurderinger={faresignalVurderinger}
          />
        </ReduxWrapper>
      )}
  </Panel>
);

export default HoyRisikoPanel;
