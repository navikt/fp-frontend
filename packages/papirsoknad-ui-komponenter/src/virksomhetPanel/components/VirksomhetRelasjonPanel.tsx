import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { TrueFalseInput } from '../../felles/TrueFalseInput';
import { VIRKSOMHET_FORM_NAME_PREFIX } from '../constants';
import type { VirksomhetFormValues } from '../types';

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
export const VirksomhetRelasjonPanel = ({ readOnly, index }: Props) => {
  const { control } = useFormContext<VirksomhetFormValues>();
  return (
    <TrueFalseInput
      name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.familieEllerVennerTilknyttetNaringen`}
      control={control}
      label={<FormattedMessage id="Registrering.VirksomhetRelasjonPanel.Relation" />}
      readOnly={readOnly}
      isHorizontal={false}
      trueLabel={<FormattedMessage id="Registrering.VirksomhetRelasjonPanel.Yes" />}
      falseLabel={<FormattedMessage id="Registrering.VirksomhetRelasjonPanel.No" />}
    />
  );
};
