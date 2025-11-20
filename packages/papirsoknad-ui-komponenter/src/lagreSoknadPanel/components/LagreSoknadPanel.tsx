import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Heading, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength } from '@navikt/ft-form-validators';
import { BorderBox } from '@navikt/ft-ui-komponenter';

const maxLength1500 = maxLength(1500);

type LagreSoknadFormValues = {
  kommentarEndring?: string;
  registrerVerge?: boolean;
  ufullstendigSøknad?: boolean;
};

interface Props {
  onSubmitUfullstendigsoknad: () => Promise<void>;
  readOnly?: boolean;
  submitting: boolean;
  erEndringssøknad: boolean;
}

export const LagreSoknadPanel = ({
  submitting,
  onSubmitUfullstendigsoknad,
  readOnly = true,
  erEndringssøknad,
}: Props) => {
  const intl = useIntl();

  const { watch, control } = useFormContext<LagreSoknadFormValues>();
  const ufullstendigSøknad = watch('ufullstendigSøknad') || false;

  return (
    <BorderBox>
      <VStack gap="space-16">
        <Heading size="small" level="3">
          {intl.formatMessage({ id: 'Registrering.SaveApplication.Title' })}
        </Heading>
        <RhfTextarea
          name="kommentarEndring"
          control={control}
          label={intl.formatMessage({ id: 'Registrering.SaveApplication.Label' })}
          description={intl.formatMessage({ id: 'Registrering.SaveApplication.Description' })}
          maxLength={1500}
          validate={[maxLength1500, hasValidText]}
          readOnly={readOnly}
        />
        {!erEndringssøknad && (
          <div>
            <RhfCheckbox
              name="registrerVerge"
              control={control}
              label={intl.formatMessage({ id: 'Registrering.Verge' })}
              readOnly={readOnly}
            />
            <RhfCheckbox
              name="ufullstendigSøknad"
              control={control}
              label={intl.formatMessage({ id: 'Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt' })}
              readOnly={readOnly}
            />
          </div>
        )}
        <div>
          {!ufullstendigSøknad && (
            <Button
              id="saveButton"
              size="small"
              variant="primary"
              loading={submitting}
              disabled={readOnly || submitting}
            >
              <FormattedMessage id="Registrering.SaveApplication.SaveButton" />
            </Button>
          )}
          {ufullstendigSøknad && (
            <Button
              id="endButton"
              onClick={onSubmitUfullstendigsoknad}
              size="small"
              variant="primary"
              loading={submitting}
              disabled={readOnly || submitting}
              type="button"
            >
              <FormattedMessage id="Registrering.SaveApplication.EndButton" />
            </Button>
          )}
        </div>
      </VStack>
    </BorderBox>
  );
};

LagreSoknadPanel.initialValues = (): LagreSoknadFormValues => ({
  kommentarEndring: undefined,
  registrerVerge: false,
  ufullstendigSøknad: false,
});

LagreSoknadPanel.transformValues = ({
  kommentarEndring,
  registrerVerge,
  ufullstendigSøknad,
}: LagreSoknadFormValues): LagreSoknadFormValues => ({
  kommentarEndring,
  registrerVerge,
  ufullstendigSøknad,
});
