import React, { FunctionComponent, useState } from 'react';
import { useIntl } from 'react-intl';
import { Hovedknapp } from 'nav-frontend-knapper';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { CheckboxField, formHooks, TextAreaField } from '@navikt/ft-form-hooks';
import { ariaCheck, hasValidText, maxLength } from '@navikt/ft-form-validators';
import {
  BorderBox, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';

import LukkPapirsoknadModal from './LukkPapirsoknadModal';

import styles from './lagreSoknadPanel.less';

const maxLength1500 = maxLength(1500);

type FormValues = {
  kommentarEndring: string;
  registrerVerge: boolean;
  ufullstendigSoeknad: boolean;
}

interface OwnProps {
  onSubmitUfullstendigsoknad: (form: string) => void;
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
  const [verge, setVerge] = useState(false);

  const { watch } = formHooks.useFormContext<FormValues>();
  const ufullstendigSoeknad = watch('ufullstendigSoeknad') || false;

  const toggleLukkPapirsoknadModal = () => {
    setShowLukkSoknadModal(!showLukkSoknadModal);
  };

  const toggleVerge = () => {
    setVerge(!verge);
  };

  return (
    <BorderBox>
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.fullWidth}>
            <SkjemaGruppe legend={intl.formatMessage({ id: 'Registrering.SaveApplication.Title' })}>
              <FlexRow>
                <FlexColumn className={styles.halfWidth}>
                  <TextAreaField
                    name="kommentarEndring"
                    label={intl.formatMessage({ id: 'Registrering.SaveApplication.Description' })}
                    textareaClass={styles.textAreaSettings}
                    maxLength={1500}
                    validate={[maxLength1500, hasValidText]}
                    readOnly={readOnly}
                  />
                </FlexColumn>
                <FlexColumn>
                  <CheckboxField
                    name="registrerVerge"
                    onChange={toggleVerge}
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
              <FlexRow>
                <FlexColumn className="justifyItemsToFlexEnd">
                  <Hovedknapp
                    id="saveButton"
                    mini
                    className={ufullstendigSoeknad ? 'hidden' : ''}
                    spinner={submitting}
                    disabled={readOnly || submitting}
                    onClick={ariaCheck}
                  >
                    {intl.formatMessage({ id: 'Registrering.SaveApplication.SaveButton' })}
                  </Hovedknapp>
                  <Hovedknapp
                    id="endButton"
                    htmlType="button"
                    onClick={toggleLukkPapirsoknadModal}
                    mini
                    className={ufullstendigSoeknad ? '' : 'hidden'}
                    spinner={submitting}
                    disabled={readOnly || submitting}
                  >
                    {intl.formatMessage({ id: 'Registrering.SaveApplication.EndButton' })}
                  </Hovedknapp>
                </FlexColumn>
              </FlexRow>
            </SkjemaGruppe>
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
