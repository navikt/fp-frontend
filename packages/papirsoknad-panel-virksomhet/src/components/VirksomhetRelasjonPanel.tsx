import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';

interface OwnProps {
  readOnly?: boolean;
}

/**
 * VirksomhetRelasjonPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
 * søker.
 */
export const VirksomhetRelasjonPanel: FunctionComponent<OwnProps> = ({
  readOnly,
}) => (
  <>
    <Undertekst><FormattedMessage id="Registrering.VirksomhetRelasjonPanel.Relation" /></Undertekst>
    <VerticalSpacer fourPx />
    <RadioGroupField name="familieEllerVennerTilknyttetNaringen" direction="vertical" readOnly={readOnly}>
      <RadioOption key="Ja" label={<FormattedMessage id="Registrering.VirksomhetRelasjonPanel.Yes" />} value />
      <RadioOption key="Nei" label={<FormattedMessage id="Registrering.VirksomhetRelasjonPanel.No" />} value={false} />
    </RadioGroupField>
  </>
);

VirksomhetRelasjonPanel.defaultProps = {
  readOnly: true,
};

export default VirksomhetRelasjonPanel;
