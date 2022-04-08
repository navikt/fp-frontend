import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';

import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

interface OwnProps {
  readOnly: boolean;
  sokerHarAleneomsorg?: boolean;
}

/**
 * AndreYtelserPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
export const PermisjonRettigheterPanel: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  readOnly,
  sokerHarAleneomsorg,
}) => (
  <>
    <Undertekst>
      {intl.formatMessage({ id: 'Registrering.Permisjon.SøkerHarAleneomsorg' })}
    </Undertekst>
    <VerticalSpacer eightPx />
    <RadioGroupField validate={[required]} readOnly={readOnly} name="sokerHarAleneomsorg">
      <RadioOption
        label={intl.formatMessage({ id: 'Registrering.Permisjon.SøkerHarAleneomsorg.Yes' })}
        value
      />
      <RadioOption
        label={intl.formatMessage({ id: 'Registrering.Permisjon.SøkerHarAleneomsorg.No' })}
        value={false}
      />
    </RadioGroupField>
    {sokerHarAleneomsorg === false && (
      <div>
        <Undertekst>
          {intl.formatMessage({ id: 'Registrering.Permisjon.HarRettPaForeldrepenger' })}
        </Undertekst>
        <VerticalSpacer eightPx />
        <RadioGroupField name="denAndreForelderenHarRettPaForeldrepenger" validate={[required]} readOnly={readOnly}>
          <RadioOption label={intl.formatMessage({ id: 'Registrering.Permisjon.HarRettPaForeldrepenger.Yes' })} value />
          <RadioOption label={intl.formatMessage({ id: 'Registrering.Permisjon.HarRettPaForeldrepenger.No' })} value={false} />
        </RadioGroupField>
      </div>
    )}
  </>
);

export default injectIntl(PermisjonRettigheterPanel);
