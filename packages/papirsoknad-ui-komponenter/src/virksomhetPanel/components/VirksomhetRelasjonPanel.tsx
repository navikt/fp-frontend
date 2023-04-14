import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';

export type FormValues = {
  familieEllerVennerTilknyttetNaringen: boolean;
};

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
const VirksomhetRelasjonPanel: FunctionComponent<OwnProps> = ({ readOnly = true }) => (
  <RadioGroupPanel
    name="familieEllerVennerTilknyttetNaringen"
    label={<FormattedMessage id="Registrering.VirksomhetRelasjonPanel.Relation" />}
    isReadOnly={readOnly}
    isTrueOrFalseSelection
    radios={[
      {
        label: <FormattedMessage id="Registrering.VirksomhetRelasjonPanel.Yes" />,
        value: 'true',
      },
      {
        label: <FormattedMessage id="Registrering.VirksomhetRelasjonPanel.No" />,
        value: 'false',
      },
    ]}
  />
);

export default VirksomhetRelasjonPanel;
