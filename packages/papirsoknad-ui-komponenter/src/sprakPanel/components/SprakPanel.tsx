import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { required } from '@navikt/ft-form-validators';
import { RadioGroupField, RadioOption } from '@navikt/ft-form-hooks';

const sprakvalg = {
  BOKMAL: 'NB',
  NYNORSK: 'NN',
  ENGELSK: 'EN',
};

interface OwnProps {
  readOnly: boolean;
}

/**
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
 */
export const SprakPanel: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  readOnly,
  intl,
}) => (
  <BorderBox>
    <SkjemaGruppe legend={intl.formatMessage({ id: 'Registrering.Sprak' })}>
      <RadioGroupField
        name="språkkode"
        direction="vertical"
        readOnly={readOnly}
        validate={[required]}
      >
        <RadioOption
          label={intl.formatMessage({ id: 'Registrering.Sprak.Bokmal' })}
          value={sprakvalg.BOKMAL}
        />
        <RadioOption
          label={intl.formatMessage({ id: 'Registrering.Sprak.Nynorsk' })}
          value={sprakvalg.NYNORSK}
        />
        <RadioOption
          label={intl.formatMessage({ id: 'Registrering.Sprak.Engelsk' })}
          value={sprakvalg.ENGELSK}
        />
      </RadioGroupField>
    </SkjemaGruppe>
  </BorderBox>
);

export default injectIntl(SprakPanel);
