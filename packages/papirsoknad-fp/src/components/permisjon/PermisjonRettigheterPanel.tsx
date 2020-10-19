import React from 'react';
import { injectIntl } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';

import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';

type OwnProps = {
    intl: {};
    readOnly: boolean;
    sokerHarAleneomsorg?: boolean;
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof PermisjonRettigheterPanel.defaultProps;

/**
 * AndreYtelserPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
// @ts-expect-error ts-migrate(7022) FIXME: 'PermisjonRettigheterPanel' implicitly has type 'a... Remove this comment to see the full error message
export const PermisjonRettigheterPanel = ({ intl, readOnly, sokerHarAleneomsorg }: Props) => (
  <>
    <Undertekst>
      {intl.formatMessage({ id: 'Registrering.Permisjon.SøkerHarAleneomsorg' })}
    </Undertekst>
    <VerticalSpacer eightPx />
    {/* @ts-expect-error ts-migrate(2322) FIXME: Type '{ id: string; }[]' is not assignable to type... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(2322) FIXME: Type '(value: any) => { id: string; }[] | undefine... Remove this comment to see the full error message */}
        <RadioGroupField name="denAndreForelderenHarRettPaForeldrepenger" validate={[required]} readOnly={readOnly}>
          <RadioOption label={intl.formatMessage({ id: 'Registrering.Permisjon.HarRettPaForeldrepenger.Yes' })} value />
          <RadioOption label={intl.formatMessage({ id: 'Registrering.Permisjon.HarRettPaForeldrepenger.No' })} value={false} />
        </RadioGroupField>
      </div>
    )}
  </>
);

PermisjonRettigheterPanel.defaultProps = {
  sokerHarAleneomsorg: undefined,
};

export default injectIntl(PermisjonRettigheterPanel);
