import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidInteger, hasValidText, required } from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

import { TrueFalseInput } from '../../felles/TrueFalseInput';
import { VIRKSOMHET_FORM_NAME_PREFIX } from '../constants';
import type { RegistrerVirksomhetFormValues, VirksomhetFormValues } from '../types';

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
  const { control } = useFormContext<VirksomhetFormValues>();
  return (
    <TrueFalseInput
      name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.harRegnskapsforer`}
      control={control}
      label={<FormattedMessage id="Registrering.VirksomhetRegnskapPanel.Accountant" />}
      readOnly={readOnly}
      trueContent={
        <ArrowBox marginTop={8}>
          <VStack gap="4">
            <RhfTextField
              name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.navnRegnskapsforer`}
              control={control}
              readOnly={readOnly}
              validate={[required, hasValidText]}
              label={<FormattedMessage id="Registrering.VirksomhetRegnskapPanel.AccountantName" />}
            />
            <RhfTextField
              name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.tlfRegnskapsforer`}
              control={control}
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
