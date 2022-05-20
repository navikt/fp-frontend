import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { RadioGroupField, RadioOption } from '@navikt/ft-form-hooks';

export type FormValues = {
  familieEllerVennerTilknyttetNaringen: boolean;
}

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
const VirksomhetRelasjonPanel: FunctionComponent<OwnProps> = ({
  readOnly = true,
}) => (
  <>
    <Undertekst><FormattedMessage id="Registrering.VirksomhetRelasjonPanel.Relation" /></Undertekst>
    <VerticalSpacer fourPx />
    <RadioGroupField
      name="familieEllerVennerTilknyttetNaringen"
      direction="vertical"
      readOnly={readOnly}
      parse={(value: string) => value === 'true'}
    >
      <RadioOption key="Ja" label={<FormattedMessage id="Registrering.VirksomhetRelasjonPanel.Yes" />} value="true" />
      <RadioOption key="Nei" label={<FormattedMessage id="Registrering.VirksomhetRelasjonPanel.No" />} value="false" />
    </RadioGroupField>
  </>
);

export default VirksomhetRelasjonPanel;
