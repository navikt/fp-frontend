import React, { Component, ReactElement, ReactNode } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { change as reduxChange } from 'redux-form';

const findAllNames = (children: any): any[] => (children ? React.Children
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

interface PureOwnProps {
  formName: string;
  fieldNames: string[];
  children: ReactNode | ReactElement;
}

interface MappedOwnProps {
  behandlingFormName: string;
}

interface DispatchProps {
  reduxChange: (behandlingFormName: string, fieldName: string, value: any) => void;
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
export class BehandlingFormFieldCleaner extends Component<PureOwnProps & MappedOwnProps & DispatchProps> {
  static defaultProps = {
    children: [],
  };

  shouldComponentUpdate(nextProps: PureOwnProps & MappedOwnProps & DispatchProps): boolean {
    const { children } = this.props;
    const oldNames = findAllNames(children);
    const newNames = findAllNames(nextProps.children);

    const diff1 = oldNames.every((k) => newNames.includes(k));
    const diff2 = newNames.every((k) => oldNames.includes(k));
    return !diff1 || !diff2;
  }

  componentDidUpdate(): void {
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
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        {children}
      </>
    );
  }
}

const mapStateToProps = (_state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  behandlingFormName: ownProps.formName,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  ...bindActionCreators({
    reduxChange,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BehandlingFormFieldCleaner);
