import React, { Component, RefObject } from 'react';
import { Select as NavSelect } from 'nav-frontend-skjema';
import { WrappedFieldProps } from 'redux-form';

interface CustomNavSelectProps {
  selectValues: React.ReactElement[];
  placeholder?: React.ReactNode;
  value?: string;
  hideValueOnDisable?: boolean;
  disabled?: boolean;
  label: string;
}

class CustomNavSelect extends Component<WrappedFieldProps & CustomNavSelectProps> {
  static defaultProps = {
    hideValueOnDisable: false,
    disabled: false,
  };

  constructor(props: WrappedFieldProps & CustomNavSelectProps) {
    super(props);
    this.getOptionValues = this.getOptionValues.bind(this);
    this.checkCorrespondingOptionForValue = this.checkCorrespondingOptionForValue.bind(this);
    this.handleSelectRef = this.handleSelectRef.bind(this);
    this.selectedValue = this.selectedValue.bind(this);
  }

  componentDidMount(): void {
    this.checkCorrespondingOptionForValue();
  }

  componentDidUpdate(): void {
    this.checkCorrespondingOptionForValue();
  }

  handleSelectRef(selectRef?: RefObject<any>): void {
    if (selectRef) {
      this.selectElement = selectRef;
    }
  }

  getOptionValues(): string[] {
    const { props: { selectValues } } = this;
    return selectValues
      .map((option) => option.props)
      .map((props = {}) => props.value);
  }

  selectElement: RefObject<any>;

  selectedValue(value: string): string {
    const selectedValue = this.getOptionValues().find((optionValue) => optionValue === value);

    return selectedValue || '';
  }

  checkCorrespondingOptionForValue(): void {
    const { getOptionValues, props: { value } } = this;
    // (aa) added "&& value !== ''" as to not spam other browsers
    if (!getOptionValues().includes(value) && value !== '') {
      // eslint-disable-next-line no-console
      console.warn(`No corresponding option found for value '${value}'`); // NOSONAR Viser ikke sensitiv info
    }
  }

  render() {
    const {
      handleSelectRef,
      selectedValue,
      props: {
        placeholder, selectValues, value, hideValueOnDisable, disabled, ...otherProps
      },
    } = this;
    return (
      <NavSelect
        {...otherProps}
        selectRef={handleSelectRef}
        value={hideValueOnDisable && disabled ? '' : selectedValue(value)}
        disabled={disabled}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {selectValues}
      </NavSelect>
    );
  }
}

export default CustomNavSelect;
