import React, { Component, ReactNode } from 'react';

/*
 * requireProps
 *
 *  Komponent som sikkerstiller att requiredprops virkligen er lastade.
 */
const lagPropsMedNullVerdier = (propNames: string[]) => propNames
  .map((propName) => ({ [propName]: null }))
  .reduce((a, b) => ({ ...a, ...b }));

const requireProps = (requiredPropNames: string[], alternative?: ReactNode) => (WrappedComponent) => {
  class ComponentWithRequiredProps extends Component {
    static defaultProps = lagPropsMedNullVerdier(requiredPropNames)

    displayName = `ComponentWithRequiredProps(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    WrappedComponent = WrappedComponent;

    constructor(props) {
      super(props);
      this.missingRequirements = this.missingRequirements.bind(this);
    }

    missingRequirements() {
      const { props } = this;
      return requiredPropNames
        .map((key) => props[key])
        .some((prop) => prop === null || prop === undefined);
    }

    render() {
      if (this.missingRequirements()) {
        return alternative || null;
      }
      return <WrappedComponent {...this.props} />;
    }
  }
  return ComponentWithRequiredProps;
};

export default requireProps;
