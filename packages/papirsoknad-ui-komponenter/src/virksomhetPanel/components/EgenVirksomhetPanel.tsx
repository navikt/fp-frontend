import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { BorderBox } from '@navikt/ft-ui-komponenter';

import { AlleKodeverk } from '@navikt/fp-types';

import { EGEN_VIRKSOMHET_NAME_PREFIX } from '../constants';
import { VirksomhetFormValues } from '../types';
import { RegistrerVirksomhetPanel } from './RegistrerVirksomhetPanel';
import { VirksomhetRad } from './VirksomhetRad';

interface Props {
  alleKodeverk: AlleKodeverk;
  readOnly?: boolean;
}

/**
 * EgenVirksomhetPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 * Søker må oppgi om hen har arbdeidet i egen virksomhet.
 */
export const EgenVirksomhetPanel = ({ readOnly = true, alleKodeverk }: Props) => {
  const intl = useIntl();

  const { watch } = useFormContext<VirksomhetFormValues>();
  const harArbeidetIEgenVirksomhet = watch(`${EGEN_VIRKSOMHET_NAME_PREFIX}.harArbeidetIEgenVirksomhet`) || null;

  return (
    <BorderBox>
      <VStack gap="4">
        <Heading size="small">
          <FormattedMessage id="Registrering.EgenVirksomhet.Title" />
        </Heading>

        <RadioGroupPanel
          name={`${EGEN_VIRKSOMHET_NAME_PREFIX}.harArbeidetIEgenVirksomhet`}
          validate={[required]}
          isReadOnly={readOnly}
          hideLegend
          isTrueOrFalseSelection
          radios={[
            {
              label: intl.formatMessage({ id: 'Registrering.EgenVirksomhet.No' }),
              value: 'false',
            },
            {
              label: intl.formatMessage({ id: 'Registrering.EgenVirksomhet.Yes' }),
              value: 'true',
            },
          ]}
        />
        {harArbeidetIEgenVirksomhet && <RegistrerVirksomhetPanel readOnly={readOnly} alleKodeverk={alleKodeverk} />}
      </VStack>
    </BorderBox>
  );
};

EgenVirksomhetPanel.initialValues = (): VirksomhetFormValues => ({
  [EGEN_VIRKSOMHET_NAME_PREFIX]: {
    harArbeidetIEgenVirksomhet: undefined,
    virksomheter: [VirksomhetRad.initialValues()],
  },
});

EgenVirksomhetPanel.transformValues = RegistrerVirksomhetPanel.transformValues;
