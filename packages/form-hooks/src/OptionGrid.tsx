import React, { ElementType, FunctionComponent } from 'react';
import {
  EditedIcon, FlexContainer, FlexRow, FlexColumn,
} from '@fpsak-frontend/shared-components';
import { range } from '@fpsak-frontend/utils';
import styles from './optionGrid.less';

export type Direction = 'horizontal' | 'vertical';

interface OwnProps {
  columns?: number;
  options: ElementType[];
  spaceBetween?: boolean;
  isEdited?: boolean;
  direction?: Direction;
  rows?: number;
}

export const OptionGrid: FunctionComponent<OwnProps> = ({
  columns,
  rows,
  options,
  spaceBetween,
  isEdited,
  direction,
}) => {
  if (direction === 'vertical') {
    const numRows = rows || options.length;
    return (
      <FlexContainer>
        <FlexColumn className={styles.fullBreddeIE}>
          {range(numRows)
            .map((rowIndex) => (
              <FlexRow key={`row${rowIndex}`} spaceBetween={spaceBetween}>
                {options.filter((_option, optionIndex) => optionIndex % numRows === rowIndex)}
                {isEdited && <EditedIcon className="radioEdited" />}
              </FlexRow>
            ))}
        </FlexColumn>
      </FlexContainer>
    );
  }
  const numColumns = columns || options.length;
  return (
    <FlexContainer>
      <FlexRow spaceBetween={spaceBetween}>
        {range(numColumns)
          .map((columnIndex) => (
            <FlexColumn key={`column${columnIndex}`}>
              {options.filter((_option, optionIndex) => optionIndex % numColumns === columnIndex)}
            </FlexColumn>
          ))}
        {isEdited && <EditedIcon className="radioEdited" />}
      </FlexRow>
    </FlexContainer>
  );
};

OptionGrid.defaultProps = {
  columns: 0,
  rows: 0,
  spaceBetween: false,
  isEdited: false,
  direction: 'horizontal',
};

export default OptionGrid;
