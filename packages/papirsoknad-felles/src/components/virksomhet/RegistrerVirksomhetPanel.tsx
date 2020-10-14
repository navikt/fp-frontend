import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  arrayPush as dispatchArrayPush, arraySplice as dispatchArraySplice, Field, formValueSelector,
} from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';

import { Image, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { NavFieldGroup } from '@fpsak-frontend/form';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@fpsak-frontend/assets/images/... Remove this comment to see the full error message
import addCircleIcon from '@fpsak-frontend/assets/images/add-circle.svg';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@fpsak-frontend/assets/images/... Remove this comment to see the full error message
import removeIcon from '@fpsak-frontend/assets/images/remove.svg';

import RegistrerVirksomhetModalForm from './RegistrerVirksomhetModalForm';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './registrerVirksomhetPanel.les... Remove this comment to see the full error message
import styles from './registrerVirksomhetPanel.less';

type renderVirksomhetsnavnProps = {
    showRegistrerVirksomhetModal: (...args: any[]) => any;
    index: number;
};

const renderVirksomhetsnavn = ({ showRegistrerVirksomhetModal, index, ...fieldProps }: renderVirksomhetsnavnProps) => (
  <>
    {// eslint-disable-next-line jsx-a11y/click-events-have-key-events
    }
    <a
      onClick={() => showRegistrerVirksomhetModal(index)}
      onKeyDown={() => showRegistrerVirksomhetModal(index)}
      className={styles.customLink}
      role="link"
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'number | ... Remove this comment to see the full error message
      tabIndex="0"
    >
      <Normaltekst>
        {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'input' does not exist on type '{}'. */}
        {` ${fieldProps.input.value} `}
      </Normaltekst>
    </a>
  </>
);

type OwnRegistrerVirksomhetPanelProps = {
    fields: {};
    meta: {};
    namePrefix: string;
    formatMessage: (...args: any[]) => any;
    dispatchArrayPush: (...args: any[]) => any;
    virksomheter?: {}[];
    dispatchArraySplice: (...args: any[]) => any;
    form: string;
    name?: string;
    readOnly?: boolean;
    alleKodeverk: {};
};

type RegistrerVirksomhetPanelState = any;

type RegistrerVirksomhetPanelProps = OwnRegistrerVirksomhetPanelProps & typeof RegistrerVirksomhetPanel.defaultProps;

/**
 * RegistrererVirksomhetPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og søker har arbeidet i egen virksomhet.
 * Viser registrerte virksomheter samt knapp for å legge til nye virksomheter.
 */
export class RegistrerVirksomhetPanel extends Component<RegistrerVirksomhetPanelProps, RegistrerVirksomhetPanelState> {
static defaultProps = {
  readOnly: false,
  name: 'virksomheter',
  virksomheter: [],
};

constructor(props: RegistrerVirksomhetPanelProps) {
  super(props);
  this.showRegistrerVirksomhetModal = this.showRegistrerVirksomhetModal.bind(this);
  this.hideRegistrerVirksomhetModal = this.hideRegistrerVirksomhetModal.bind(this);
  this.addVirksomhet = this.addVirksomhet.bind(this);
  this.removeVirksomhet = this.removeVirksomhet.bind(this);

  this.state = {
    editVirksomhet: null,
    editIndex: -1,
  };
}

showRegistrerVirksomhetModal(index: any) {
  if (index !== null && index !== undefined && index > -1) {
    const { virksomheter } = this.props;
    this.setState({
      editVirksomhet: virksomheter[index],
      editIndex: index,
    });
  } else {
    this.setState({
      editVirksomhet: {},
      editIndex: index,
    });
  }
}

hideRegistrerVirksomhetModal() {
  this.setState({
    editVirksomhet: null,
    editIndex: -1,
  });
}

addVirksomhet(values: any, dispatch: any, {
  valuesForRegisteredFieldsOnly,
}: any) {
  const { editIndex: index } = this.state;
  const {
    form, namePrefix, name, dispatchArraySplice: splice, dispatchArrayPush: push,
  } = this.props;
  const transformedValues = {
    ...valuesForRegisteredFieldsOnly,
    landJobberFra: valuesForRegisteredFieldsOnly.virksomhetRegistrertINorge ? 'NOR' : valuesForRegisteredFieldsOnly.landJobberFra,
    varigEndringGjeldendeFom: valuesForRegisteredFieldsOnly.nyIArbeidslivetFom || valuesForRegisteredFieldsOnly.varigEndringGjeldendeFom,
    stillingsprosent: parseFloat(valuesForRegisteredFieldsOnly.stillingsprosent),
  };

  if (index !== null && index !== undefined && index > -1) {
    splice(form, `${namePrefix}.${name}`, index, 1, transformedValues);
  } else {
    push(form, `${namePrefix}.${name}`, transformedValues);
  }
  this.hideRegistrerVirksomhetModal();
}

removeVirksomhet(index: any) {
  const {
    form, namePrefix, name, dispatchArraySplice: splice,
  } = this.props;
  splice(form, `${namePrefix}.${name}`, index, 1);
}

render() {
  const {
    fields,
    readOnly,
    meta,
    formatMessage,
    alleKodeverk,
  } = this.props;
  const { editVirksomhet, editIndex } = this.state;
  return (
    <div className={styles.fieldsList}>
      <NavFieldGroup
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'error' does not exist on type '{}'.
        errorMessage={meta.error && (meta.dirty || meta.submitFailed) ? formatMessage(...meta.error) : null}
      >
        {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'length' does not exist on type '{}'. */}
        {fields.length > 0
          && (
          <React.Fragment key={1}>
            <Row key="VirksomhetHeader">
              <Column xs="8">
                <Element><FormattedMessage id="Registrering.EgenVirksomhet.Name" /></Element>
              </Column>
            </Row>
            <hr className={styles.divider} />

            {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'map' does not exist on type '{}'. */}
            {fields.map((virksomhet: any, index: any) => (
              <React.Fragment key={2}>
                <Row key={`${virksomhet}.navn`}>
                  <Column xs="8">
                    <Field
                      name={`${virksomhet}.navn`}
                      component={renderVirksomhetsnavn}
                      showRegistrerVirksomhetModal={() => this.showRegistrerVirksomhetModal(index)}
                      index={index}
                    />
                  </Column>
                  <Column xs="4">
                    {// eslint-disable-next-line jsx-a11y/click-events-have-key-events
                    }
                    <div
                      className={styles.removeButton}
                      onClick={() => this.removeVirksomhet(index)}
                      onKeyDown={() => this.removeVirksomhet(index)}
                      id="removebutton"
                      role="button"
                      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'number | ... Remove this comment to see the full error message
                      tabIndex="0"
                    >
                      <Image src={removeIcon} />
                    </div>
                  </Column>
                </Row>
                <hr className={styles.divider} />
                <VerticalSpacer eightPx />
              </React.Fragment>
            ))}
          </React.Fragment>
          )}
        {// eslint-disable-next-line jsx-a11y/click-events-have-key-events
          }
        <div
          id="addbutton"
          className={styles.addVirksomhet}
          // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
          onClick={() => this.showRegistrerVirksomhetModal()}
          // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
          onKeyDown={(e) => (e.nativeEvent.code === 'Space' ? this.showRegistrerVirksomhetModal() : false)}
          role="button"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'number | ... Remove this comment to see the full error message
          tabIndex="0"
        >
          <Image
            className={styles.addCircleIcon}
            src={addCircleIcon}
          />
          <Undertekst className={styles.imageText}><FormattedMessage id="Registrering.EgenVirksomhet.Add" /></Undertekst>
        </div>
      </NavFieldGroup>
      <RegistrerVirksomhetModalForm
        // @ts-expect-error ts-migrate(2322) FIXME: Property 'showModal' does not exist on type 'Intri... Remove this comment to see the full error message
        showModal={!!editVirksomhet}
        onSubmit={this.addVirksomhet}
        closeEvent={this.hideRegistrerVirksomhetModal}
        readOnly={readOnly}
        initialValues={editVirksomhet}
        index={editIndex}
        alleKodeverk={alleKodeverk}
      />
    </div>
  );
}
}

const mapStateToProps = (state: any, initialProps: any) => ({
  virksomheter: formValueSelector(initialProps.form)(state, initialProps.namePrefix)
    ? formValueSelector(initialProps.form)(state, initialProps.namePrefix).virksomheter : null,
});

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators({
    dispatchArrayPush,
    dispatchArraySplice,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrerVirksomhetPanel);
