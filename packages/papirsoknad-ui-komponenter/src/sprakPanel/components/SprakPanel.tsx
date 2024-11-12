import React from 'react';
import { useIntl } from 'react-intl';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { required } from '@navikt/ft-form-validators';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { Heading } from '@navikt/ds-react';

const sprakvalg = {
  BOKMAL: 'NB',
  NYNORSK: 'NN',
  ENGELSK: 'EN',
};

interface Props {
  readOnly: boolean;
}

/**
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
 */
export const SprakPanel = ({ readOnly }: Props) => {
  const intl = useIntl();
  return (
    <BorderBox>
      <Heading size="small">{intl.formatMessage({ id: 'Registrering.Sprak' })}</Heading>
      <VerticalSpacer sixteenPx />
      <RadioGroupPanel
        name="språkkode"
        validate={[required]}
        isReadOnly={readOnly}
        radios={[
          {
            label: intl.formatMessage({ id: 'Registrering.Sprak.Bokmal' }),
            value: sprakvalg.BOKMAL,
          },
          {
            label: intl.formatMessage({ id: 'Registrering.Sprak.Nynorsk' }),
            value: sprakvalg.NYNORSK,
          },
          {
            label: intl.formatMessage({ id: 'Registrering.Sprak.Engelsk' }),
            value: sprakvalg.ENGELSK,
          },
        ]}
      />
    </BorderBox>
  );
};
