import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import Panel from 'nav-frontend-paneler';

import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { Risikoklassifisering, Aksjonspunkt } from '@fpsak-frontend/types';

import Faresignaler from './Faresignaler';
import AvklarFaresignalerForm from './AvklarFaresignalerForm';

interface OwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  risikoklassifisering: Risikoklassifisering;
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
  submitCallback: (aksjonspunkt: Aksjonspunkt) => Promise<any>;
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
      <AvklarFaresignalerForm
        behandlingId={behandlingId}
        behandlingVersjon={behandlingVersjon}
        aksjonspunkt={aksjonspunkt}
        readOnly={readOnly}
        submitCallback={submitCallback}
        risikoklassifisering={risikoklassifisering}
      />
      )}
  </Panel>
);

export default HoyRisikoPanel;
