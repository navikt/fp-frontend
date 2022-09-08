import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { required } from '@navikt/ft-form-validators';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { Undertittel } from 'nav-frontend-typografi';

const sprakvalg = {
  BOKMAL: 'NB',
  NYNORSK: 'NN',
  ENGELSK: 'EN',
};

interface OwnProps {
  readOnly: boolean;
}

/**
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
 */
const SprakPanel: FunctionComponent<OwnProps> = ({
  readOnly,
}) => {
  const intl = useIntl();
  return (
    <BorderBox>
      <Undertittel>
        {intl.formatMessage({ id: 'Registrering.Sprak' })}
      </Undertittel>
      <VerticalSpacer sixteenPx />
      <RadioGroupPanel
        name="språkkode"
        validate={[required]}
        isReadOnly={readOnly}
        radios={[{
          label: intl.formatMessage({ id: 'Registrering.Sprak.Bokmal' }),
          value: sprakvalg.BOKMAL,
        }, {
          label: intl.formatMessage({ id: 'Registrering.Sprak.Nynorsk' }),
          value: sprakvalg.NYNORSK,
        }, {
          label: intl.formatMessage({ id: 'Registrering.Sprak.Engelsk' }),
          value: sprakvalg.ENGELSK,
        }]}
      />
    </BorderBox>
  );
};

export default SprakPanel;
