import React from 'react';
import { FormattedMessage } from 'react-intl';
import { VStack } from '@navikt/ds-react';
import { ArrowBox } from '@navikt/ft-ui-komponenter';
import { InputField } from '@navikt/ft-form-hooks';
import { required, hasValidInteger, hasValidText } from '@navikt/ft-form-validators';

import { VIRKSOMHET_FORM_NAME_PREFIX } from '../constants';
import { TrueFalseInput } from '../../felles/TrueFalseInput';
import { RegistrerVirksomhetFormValues } from '../types';

interface Props {
  readOnly: boolean;
  index: number;
}

/**
 * VirksomhetRegnskapPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom
 * søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.
 */
export const VirksomhetRegnskapPanel = ({ index, readOnly }: Props) => {
  return (
    <TrueFalseInput
      name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.harRegnskapsforer`}
      label={<FormattedMessage id="Registrering.VirksomhetRegnskapPanel.Accountant" />}
      readOnly={readOnly}
      trueContent={
        <ArrowBox marginTop={8}>
          <VStack gap="4">
            <InputField
              name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.navnRegnskapsforer`}
              readOnly={readOnly}
              validate={[required, hasValidText]}
              label={<FormattedMessage id="Registrering.VirksomhetRegnskapPanel.AccountantName" />}
            />
            <InputField
              name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.tlfRegnskapsforer`}
              readOnly={readOnly}
              validate={[required, hasValidInteger]}
              label={<FormattedMessage id="Registrering.VirksomhetRegnskapPanel.AccountantPhone" />}
            />
          </VStack>
        </ArrowBox>
      }
    />
  );
};

VirksomhetRegnskapPanel.transformValues = ({
  harRegnskapsforer,
  navnRegnskapsforer,
  tlfRegnskapsforer,
}: RegistrerVirksomhetFormValues) => ({
  harRegnskapsforer,
  ...(harRegnskapsforer ? { navnRegnskapsforer } : {}),
  ...(harRegnskapsforer ? { tlfRegnskapsforer } : {}),
});
