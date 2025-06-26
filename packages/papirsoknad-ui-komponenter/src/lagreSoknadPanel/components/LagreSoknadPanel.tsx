import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Heading, VStack } from '@navikt/ds-react';
import { CheckboxField, TextAreaField } from '@navikt/ft-form-hooks';
import { ariaCheck, hasValidText, maxLength } from '@navikt/ft-form-validators';
import { BorderBox } from '@navikt/ft-ui-komponenter';

const maxLength1500 = maxLength(1500);

export type LagreSoknadFormValues = {
  kommentarEndring?: string;
  registrerVerge?: boolean;
  ufullstendigSoeknad?: boolean;
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

  const { watch } = useFormContext<LagreSoknadFormValues>();
  const ufullstendigSoeknad = watch('ufullstendigSoeknad') || false;

  return (
    <BorderBox>
      <VStack gap="4">
        <Heading size="small">{intl.formatMessage({ id: 'Registrering.SaveApplication.Title' })}</Heading>
        <TextAreaField
          name="kommentarEndring"
          label={intl.formatMessage({ id: 'Registrering.SaveApplication.Label' })}
          description={intl.formatMessage({ id: 'Registrering.SaveApplication.Description' })}
          maxLength={1500}
          validate={[maxLength1500, hasValidText]}
          readOnly={readOnly}
        />
        {!erEndringssøknad && (
          <div>
            <CheckboxField
              name="registrerVerge"
              label={intl.formatMessage({ id: 'Registrering.Verge' })}
              readOnly={readOnly}
            />
            <CheckboxField
              name="ufullstendigSoeknad"
              label={intl.formatMessage({ id: 'Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt' })}
              readOnly={readOnly}
            />
          </div>
        )}
        <div>
          {!ufullstendigSoeknad && (
            <Button
              id="saveButton"
              size="small"
              variant="primary"
              loading={submitting}
              disabled={readOnly || submitting}
              onClick={ariaCheck}
            >
              <FormattedMessage id="Registrering.SaveApplication.SaveButton" />
            </Button>
          )}
          {ufullstendigSoeknad && (
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
  ufullstendigSoeknad: false,
});

LagreSoknadPanel.transformValues = ({
  kommentarEndring,
  registrerVerge,
  ufullstendigSoeknad,
}: LagreSoknadFormValues): LagreSoknadFormValues => ({
  kommentarEndring,
  registrerVerge,
  ufullstendigSoeknad,
});
