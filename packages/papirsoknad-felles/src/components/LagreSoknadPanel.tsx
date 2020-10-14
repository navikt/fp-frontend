import React, { Component } from 'react';
import { formValueSelector } from 'redux-form';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Hovedknapp } from 'nav-frontend-knapper';
import { SkjemaGruppe } from 'nav-frontend-skjema';

import { ariaCheck, hasValidText, maxLength } from '@fpsak-frontend/utils';
import {
  BorderBox, FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import { CheckboxField, TextAreaField } from '@fpsak-frontend/form';

import LukkPapirsoknadModal from './LukkPapirsoknadModal';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './lagreSoknadPanel.less' or it... Remove this comment to see the full error message
import styles from './lagreSoknadPanel.less';

const maxLength1500 = maxLength(1500);

type OwnLagreSoknadPanelProps = {
    intl: {};
    onSubmitUfullstendigsoknad: (...args: any[]) => any;
    readOnly?: boolean;
    ufullstendigSoeknad?: boolean;
    submitting: boolean;
    form: string;
};

type LagreSoknadPanelState = any;

type LagreSoknadPanelProps = OwnLagreSoknadPanelProps & typeof LagreSoknadPanel.defaultProps;

export class LagreSoknadPanel extends Component<LagreSoknadPanelProps, LagreSoknadPanelState> {
static defaultProps = {
  readOnly: true,
  ufullstendigSoeknad: false,
};

constructor() {
  // @ts-expect-error ts-migrate(2554) FIXME: Expected 1-2 arguments, but got 0.
  super();
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
      {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'fluid' does not exist on type 'Intrinsic... Remove this comment to see the full error message */}
      <FlexContainer fluid>
        <FlexRow>
          <FlexColumn className={styles.fullWidth}>
            {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message */}
            <SkjemaGruppe legend={intl.formatMessage({ id: 'Registrering.SaveApplication.Title' })}>
              <FlexRow>
                <FlexColumn className={styles.halfWidth}>
                  <TextAreaField
                    name="kommentarEndring"
                    // @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message
                    label={intl.formatMessage({ id: 'Registrering.SaveApplication.Description' })}
                    textareaClass={styles.textAreaSettings}
                    maxLength={1500}
                    // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type '({ id: stri... Remove this comment to see the full error message
                    validate={[maxLength1500, hasValidText]}
                    readOnly={readOnly}
                  />
                </FlexColumn>
                <FlexColumn>
                  <CheckboxField
                    name="registrerVerge"
                    // @ts-expect-error ts-migrate(2322) FIXME: Property 'onChange' does not exist on type 'Intrin... Remove this comment to see the full error message
                    onChange={this.toggleVerge}
                    // @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message
                    label={intl.formatMessage({ id: 'Registrering.Verge' })}
                    readOnly={readOnly}
                  />
                  <CheckboxField
                    name="ufullstendigSoeknad"
                    // @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message
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
                    {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message */}
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
                    {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message */}
                    {intl.formatMessage({ id: 'Registrering.SaveApplication.EndButton' })}
                  </Hovedknapp>
                </FlexColumn>
              </FlexRow>
            </SkjemaGruppe>
            <LukkPapirsoknadModal
              // @ts-expect-error ts-migrate(2322) FIXME: Property 'handleSubmit' does not exist on type 'In... Remove this comment to see the full error message
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

const mapStateToProps = (state: any, ownProps: any) => ({
  ufullstendigSoeknad: formValueSelector(ownProps.form)(state, 'ufullstendigSoeknad'),
});

// @ts-expect-error ts-migrate(2769) FIXME: Type 'typeof LagreSoknadPanel' is not assignable t... Remove this comment to see the full error message
export default connect(mapStateToProps)(injectIntl(LagreSoknadPanel));
