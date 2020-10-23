import React, { Component } from 'react';
import { formValueSelector } from 'redux-form';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { connect } from 'react-redux';
import { Hovedknapp } from 'nav-frontend-knapper';
import { SkjemaGruppe } from 'nav-frontend-skjema';

import { ariaCheck, hasValidText, maxLength } from '@fpsak-frontend/utils';
import {
  BorderBox, FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import { CheckboxField, TextAreaField } from '@fpsak-frontend/form';

import LukkPapirsoknadModal from './LukkPapirsoknadModal';

import styles from './lagreSoknadPanel.less';

const maxLength1500 = maxLength(1500);

interface OwnProps {
  onSubmitUfullstendigsoknad: (form: string) => void;
  readOnly?: boolean;
  ufullstendigSoeknad?: boolean;
  submitting: boolean;
  form: string;
}

interface OwnState {
  showLukkSoknadModal: boolean;
  verge: boolean;
}

export class LagreSoknadPanel extends Component<OwnProps & WrappedComponentProps, OwnState> {
  static defaultProps = {
    readOnly: true,
    ufullstendigSoeknad: false,
  };

  constructor(props: OwnProps & WrappedComponentProps) {
    super(props);
    this.toggleLukkPapirsoknadModal = this.toggleLukkPapirsoknadModal.bind(this);
    this.toggleVerge = this.toggleVerge.bind(this);
    this.state = {
      showLukkSoknadModal: false,
      verge: false,
    };
  }

  toggleLukkPapirsoknadModal() {
    const { showLukkSoknadModal } = this.state;
    this.setState({ showLukkSoknadModal: !showLukkSoknadModal });
  }

  toggleVerge() {
    const { verge } = this.state;
    this.setState({ verge: !verge });
  }

  render() {
    const {
      readOnly, form, submitting, onSubmitUfullstendigsoknad, ufullstendigSoeknad, intl,
    } = this.props;
    const { showLukkSoknadModal } = this.state;

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
                      onChange={this.toggleVerge}
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
                      onClick={this.toggleLukkPapirsoknadModal}
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
                cancelEvent={this.toggleLukkPapirsoknadModal}
                form={form}
              />

            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </BorderBox>
    );
  }
}

const mapStateToProps = (state: any, ownProps: OwnProps) => ({
  ufullstendigSoeknad: formValueSelector(ownProps.form)(state, 'ufullstendigSoeknad'),
});

export default connect(mapStateToProps)(injectIntl(LagreSoknadPanel));
