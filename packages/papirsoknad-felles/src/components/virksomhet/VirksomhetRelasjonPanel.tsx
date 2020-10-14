import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';

type OwnProps = {
    readOnly?: boolean;
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof VirksomhetRelasjonPanel.defaultProps;

/**
 * VirksomhetRelasjonPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
 * søker.
 */
// @ts-expect-error ts-migrate(7022) FIXME: 'VirksomhetRelasjonPanel' implicitly has type 'any... Remove this comment to see the full error message
export const VirksomhetRelasjonPanel = ({ readOnly }: Props) => (
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
