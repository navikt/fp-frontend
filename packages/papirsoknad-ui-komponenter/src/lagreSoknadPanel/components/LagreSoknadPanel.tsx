import React, { useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useFormContext } from 'react-hook-form';
import { Button, Heading, VStack } from '@navikt/ds-react';
import { CheckboxField, TextAreaField } from '@navikt/ft-form-hooks';
import { ariaCheck, hasValidText, maxLength } from '@navikt/ft-form-validators';
import { BorderBox } from '@navikt/ft-ui-komponenter';

import { LukkPapirsoknadModal } from './LukkPapirsoknadModal';

const maxLength1500 = maxLength(1500);

export type LagreSoknadFormValues = {
  kommentarEndring?: string;
  registrerVerge?: boolean;
  ufullstendigSoeknad?: boolean;
};

interface Props {
  onSubmitUfullstendigsoknad: () => void;
  readOnly?: boolean;
  submitting: boolean;
}

export const LagreSoknadPanel = ({ submitting, onSubmitUfullstendigsoknad, readOnly = true }: Props) => {
  const intl = useIntl();

  const [showLukkSoknadModal, setShowLukkSoknadModal] = useState(false);

  const { watch } = useFormContext<LagreSoknadFormValues>();
  const ufullstendigSoeknad = watch('ufullstendigSoeknad') || false;

  const toggleLukkPapirsoknadModal = useCallback(() => {
    setShowLukkSoknadModal(!showLukkSoknadModal);
  }, [setShowLukkSoknadModal, showLukkSoknadModal]);

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
              onClick={toggleLukkPapirsoknadModal}
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
        <LukkPapirsoknadModal
          handleSubmit={onSubmitUfullstendigsoknad}
          showModal={showLukkSoknadModal}
          cancelEvent={toggleLukkPapirsoknadModal}
        />
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
