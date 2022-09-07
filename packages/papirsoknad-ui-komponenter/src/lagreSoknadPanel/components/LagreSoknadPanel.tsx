import React, { FunctionComponent, useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Hovedknapp } from 'nav-frontend-knapper';
import { CheckboxField, formHooks, TextAreaField } from '@navikt/ft-form-hooks';
import { ariaCheck, hasValidText, maxLength } from '@navikt/ft-form-validators';
import {
  BorderBox, FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import { Undertittel } from 'nav-frontend-typografi';
import LukkPapirsoknadModal from './LukkPapirsoknadModal';

import styles from './lagreSoknadPanel.less';

const maxLength1500 = maxLength(1500);

type FormValues = {
  kommentarEndring: string;
  registrerVerge: boolean;
  ufullstendigSoeknad: boolean;
}

interface OwnProps {
  onSubmitUfullstendigsoknad: () => void;
  readOnly?: boolean;
  submitting: boolean;
}

const LagreSoknadPanel: FunctionComponent<OwnProps> = ({
  submitting,
  onSubmitUfullstendigsoknad,
  readOnly = true,
}) => {
  const intl = useIntl();

  const [showLukkSoknadModal, setShowLukkSoknadModal] = useState(false);

  const { watch } = formHooks.useFormContext<FormValues>();
  const ufullstendigSoeknad = watch('ufullstendigSoeknad') || false;

  const toggleLukkPapirsoknadModal = useCallback(() => {
    setShowLukkSoknadModal(!showLukkSoknadModal);
  }, [setShowLukkSoknadModal, showLukkSoknadModal]);

  return (
    <BorderBox>
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.fullWidth}>
            <Undertittel>
              {intl.formatMessage({ id: 'Registrering.SaveApplication.Title' })}
            </Undertittel>
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
                  <Hovedknapp
                    id="saveButton"
                    mini
                    spinner={submitting}
                    disabled={readOnly || submitting}
                    onClick={ariaCheck}
                  >
                    <FormattedMessage id="Registrering.SaveApplication.SaveButton" />
                  </Hovedknapp>
                )}
                {ufullstendigSoeknad && (
                  <Hovedknapp
                    id="endButton"
                    htmlType="button"
                    onClick={toggleLukkPapirsoknadModal}
                    mini
                    spinner={submitting}
                    disabled={readOnly || submitting}
                  >
                    <FormattedMessage id="Registrering.SaveApplication.EndButton" />
                  </Hovedknapp>
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
