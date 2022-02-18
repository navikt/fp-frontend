import React, { Component, ReactNode } from 'react';
import { Select as NavSelect } from 'nav-frontend-skjema';
import Label, { LabelType } from './Label';

interface OwnProps {
  selectValues: React.ReactElement[];
  placeholder?: ReactNode;
  value?: ReactNode;
  hideValueOnDisable?: boolean;
  disabled?: boolean;
  bredde?: 'fullbredde' | 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs';
  className?: string;
  label?: LabelType;
  feil?: string;
  onChange?: (event: any) => void;
}

class CustomNavSelect extends Component<OwnProps> {
  static defaultProps = {
    hideValueOnDisable: false,
    disabled: false,
  };

  constructor(props: OwnProps) {
    super(props);
    this.getOptionValues = this.getOptionValues.bind(this);
    this.checkCorrespondingOptionForValue = this.checkCorrespondingOptionForValue.bind(this);
    this.selectedValue = this.selectedValue.bind(this);
  }

  componentDidMount(): void {
    this.checkCorrespondingOptionForValue();
  }

  componentDidUpdate(): void {
    this.checkCorrespondingOptionForValue();
  }

  getOptionValues(): any {
    const { props: { selectValues } } = this;
    return selectValues
      .map((option) => option.props)
      .map((props = {}) => props.value);
  }

  selectedValue(value: ReactNode): any {
    const selectedValue = this.getOptionValues().find((optionValue: ReactNode) => optionValue === value);

    return selectedValue || '';
  }

  checkCorrespondingOptionForValue(): void {
    const { getOptionValues, props: { value } } = this;
    const n = value || '';
    // (aa) added "&& value !== ''" as to not spam other browsers
    if (!getOptionValues().includes(n) && n !== '') {
      // eslint-disable-next-line no-console
      console.warn(`No corresponding option found for value '${n}'`); // NOSONAR Viser ikke sensitiv info
    }
  }

  render() {
    const {
      selectedValue,
      props: {
        placeholder, selectValues, value, hideValueOnDisable, disabled, label, ...otherProps
      },
    } = this;
    return (
      <NavSelect
        {...otherProps}
        value={hideValueOnDisable && disabled ? '' : selectedValue(value)}
        disabled={disabled}
        label={<Label input={label} readOnly={false} />}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {selectValues}
      </NavSelect>
    );
  }
}

export default CustomNavSelect;
