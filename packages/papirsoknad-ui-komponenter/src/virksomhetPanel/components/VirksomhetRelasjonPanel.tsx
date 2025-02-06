import { FormattedMessage } from 'react-intl';

import { TrueFalseInput } from '../../felles/TrueFalseInput';
import { VIRKSOMHET_FORM_NAME_PREFIX } from '../constants';

interface Props {
  readOnly: boolean;
  index: number;
}

/**
 * VirksomhetRelasjonPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
 * søker.
 */
export const VirksomhetRelasjonPanel = ({ readOnly, index }: Props) => (
  <TrueFalseInput
    name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.familieEllerVennerTilknyttetNaringen`}
    label={<FormattedMessage id="Registrering.VirksomhetRelasjonPanel.Relation" />}
    readOnly={readOnly}
    isHorizontal={false}
    trueLabel={<FormattedMessage id="Registrering.VirksomhetRelasjonPanel.Yes" />}
    falseLabel={<FormattedMessage id="Registrering.VirksomhetRelasjonPanel.No" />}
  />
);
