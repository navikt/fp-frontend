import React, { Component, ReactNode } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { change as reduxChange } from 'redux-form';

import { getBehandlingFormName } from '@fpsak-frontend/form';

const findAllNames = (children: any) => (children ? React.Children
  .map(children, (child) => {
    let all = [];
    if (child && child.props && child.props.children) {
      all = findAllNames(child.props.children);
    }
    if (child && child.props && child.props.name) {
      all.push(child.props.name);
    }
    return all;
  }) : []);

interface OwnProps {
  behandlingFormName: string;
  fieldNames: string[];
  reduxChange: (...args: any[]) => any;
  children: ReactNode;
}

/**
 * BehandlingFormFieldCleaner
 *
 * Denne komponenten sørger for å fjerne redux-form feltverdier fra state når felt-komponenten blir fjernet fra DOM.
 * Strengene i fieldNames-prop må matche name-attributten i feltet som skal fjernes fra state.
 *
 * * Eksempel:
 * ```html
 * <BehandlingFormFieldCleaner formName={TEST_FORM} fieldNames={['fomDato']}>{children}</BehandlingFormFieldCleaner>
 * ```
 */
export class BehandlingFormFieldCleaner extends Component<OwnProps> {
  static defaultProps = {
    children: [],
  };

  shouldComponentUpdate(nextProps: OwnProps) {
    const { children } = this.props;
    const oldNames = findAllNames(children);
    const newNames = findAllNames(nextProps.children);

    const diff1 = oldNames.every((k: any) => newNames.includes(k));
    const diff2 = newNames.every((k: any) => oldNames.includes(k));
    return !diff1 || !diff2;
  }

  componentDidUpdate() {
    const {
      behandlingFormName, children, fieldNames, reduxChange: reduxFieldChange,
    } = this.props;
    const doNotRemoveFieldNames = findAllNames(children);

    fieldNames
      .filter((fieldName) => !doNotRemoveFieldNames.includes(fieldName))
      .forEach((fieldName) => {
        reduxFieldChange(behandlingFormName, fieldName, null);
      });
  }

  render() {
    const { children } = this.props;
    return (
      <>
        {children}
      </>
    );
  }
}

interface PureOwnProps {
  formName: string;
  behandlingId: number;
  behandlingVersjon: number;
}

const getCompleteFormName = createSelector(
  [(ownProps: PureOwnProps) => ownProps.formName,
    (ownProps: PureOwnProps) => ownProps.behandlingId,
    (ownProps: PureOwnProps) => ownProps.behandlingVersjon],
  (formName, behandlingId, versjon) => getBehandlingFormName(behandlingId, versjon, formName),
);

const mapStateToProps = (_state: any, ownProps: PureOwnProps) => ({
  behandlingFormName: getCompleteFormName(ownProps),
});

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators({
    reduxChange,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BehandlingFormFieldCleaner);
