import { bemUtils } from '@navikt/ft-utils';
import React from 'react';
import Step, { StepProps } from './Step';
import styles from './processMenu.module.css';

interface ProcessMenuProps {
  steps: StepProps[];
  onClick?: (index: number) => void;
  stepArrowContainerStyle?: string;
}

const processMenuCls = bemUtils('processMenu');

export const ProcessMenu = ({ steps, onClick, stepArrowContainerStyle }: ProcessMenuProps): JSX.Element => (
  <ol className={styles[processMenuCls.block]}>
    {steps.map((step, index) => (
      <Step
        key={step.label.split(' ').join('')}
        index={index}
        onClick={onClick}
        {...step}
        stepArrowContainerStyle={stepArrowContainerStyle}
      />
    ))}
  </ol>
);
export default ProcessMenu;
