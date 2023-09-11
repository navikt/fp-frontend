import React, { FunctionComponent, useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Button, Detail } from '@navikt/ds-react';
import { CheckboxField, TextAreaField } from '@navikt/ft-form-hooks';
import { ariaCheck, hasValidText, maxLength } from '@navikt/ft-form-validators';
import { BorderBox, FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { useFormContext } from 'react-hook-form';
import LukkPapirsoknadModal from './LukkPapirsoknadModal';

import styles from './lagreSoknadPanel.module.css';

const maxLength1500 = maxLength(1500);

type FormValues = {
  kommentarEndring: string;
  registrerVerge: boolean;
  ufullstendigSoeknad: boolean;
};

interface OwnProps {
  onSubmitUfullstendigsoknad: () => void;
  readOnly?: boolean;
  submitting: boolean;
}

const LagreSoknadPanel: FunctionComponent<OwnProps> = ({ submitting, onSubmitUfullstendigsoknad, readOnly = true }) => {
  const intl = useIntl();

  const [showLukkSoknadModal, setShowLukkSoknadModal] = useState(false);

  const { watch } = useFormContext<FormValues>();
  const ufullstendigSoeknad = watch('ufullstendigSoeknad') || false;

  const toggleLukkPapirsoknadModal = useCallback(() => {
    setShowLukkSoknadModal(!showLukkSoknadModal);
  }, [setShowLukkSoknadModal, showLukkSoknadModal]);

  return (
    <BorderBox>
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.fullWidth}>
            <Detail>{intl.formatMessage({ id: 'Registrering.SaveApplication.Title' })}</Detail>
            <VerticalSpacer sixteenPx />
            <FlexRow>
              <FlexColumn className={styles.halfWidth}>
                <TextAreaField
                  name="kommentarEndring"
                  label={intl.formatMessage({ id: 'Registrering.SaveApplication.Description' })}
                  maxLength={1500}
                  validate={[maxLength1500, hasValidText]}
                  readOnly={readOnly}
                />
              </FlexColumn>
              <FlexColumn>
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
              </FlexColumn>
            </FlexRow>
            <VerticalSpacer sixteenPx />
            <FlexRow>
              <FlexColumn className="justifyItemsToFlexEnd">
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
              </FlexColumn>
            </FlexRow>
            <LukkPapirsoknadModal
              handleSubmit={onSubmitUfullstendigsoknad}
              showModal={showLukkSoknadModal}
              cancelEvent={toggleLukkPapirsoknadModal}
            />
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </BorderBox>
  );
};

export default LagreSoknadPanel;
