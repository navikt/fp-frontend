import React, { Component } from 'react';

const generateStyleObject = (inputTop: number, inputWidth: number, buttonWidth = 0) => ({
  top: inputTop,
  left: inputWidth - buttonWidth,
});

interface OwnProps {
  toggleShowCalendar: () => void;
  inputOffsetTop?: number;
  inputOffsetWidth?: number;
  className?: string;
  disabled?: boolean;
  buttonRef?: (ref: HTMLButtonElement) => void;
}

interface StateProps {
  buttonWidth?: number;
}

class CalendarToggleButton extends Component<OwnProps, StateProps> {
  constructor(props: OwnProps) {
    super(props);
    this.state = {};
    this.handleButtonRef = this.handleButtonRef.bind(this);
  }

  handleButtonRef(buttonRef: HTMLButtonElement | null): void {
    if (buttonRef) {
      this.setState({ buttonWidth: buttonRef.offsetWidth });

      const { buttonRef: buttonRefFn } = this.props;
      if (buttonRefFn) {
        buttonRefFn(buttonRef);
      }
    }
  }

  render() {
    const {
      className = '',
      inputOffsetTop = 0,
      inputOffsetWidth = 0,
      disabled = false,
      toggleShowCalendar,
    } = this.props;

    const { buttonWidth } = this.state;

    return (
      <button
        type="button"
        ref={this.handleButtonRef}
        className={className}
        style={generateStyleObject(inputOffsetTop, inputOffsetWidth, buttonWidth)}
        disabled={disabled}
        onClick={toggleShowCalendar}
      />
    );
  }
}

export default CalendarToggleButton;
