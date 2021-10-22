import React, { FunctionComponent, ReactNode } from 'react';
import { FieldArrayMethodProps } from 'react-hook-form';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import addCircleIcon from '@fpsak-frontend/assets/images/add-circle.svg';
import { Image, VerticalSpacer } from '@fpsak-frontend/shared-components';

import SkjemaGruppeMedFeilviser from './SkjemaGruppeMedFeilviser';

import styles from './periodFieldArray.less';

const onClick = (
  append: (value: Partial<unknown> | Partial<unknown>[], options?: FieldArrayMethodProps) => void,
  emptyPeriodTemplate?: any,
) => (): void => {
  append(emptyPeriodTemplate);
};

const onKeyDown = (
  append: (value: Partial<unknown> | Partial<unknown>[], options?: FieldArrayMethodProps) => void,
  emptyPeriodTemplate?: any,
) => ({ key }: React.KeyboardEvent): void => {
  if (key === 'Enter') {
    append(emptyPeriodTemplate);
  }
};

const getRemoveButton = (
  index: number,
  remove: (index?: number | number[]) => void,
) => (className?: string): ReactNode | undefined => {
  if (index > 0) {
    return (
      <button
        className={className || styles.buttonRemove}
        type="button"
        onClick={() => {
          remove(index);
        }}
      />
    );
  }
  return undefined;
};

interface OwnProps {
  children: (id: any, index: number, removeButtonElmt?: (className?: string) => ReactNode) => ReactNode;
  fields: Record<string, string>[];
  readOnly?: boolean;
  titleText?: string;
  bodyText: string;
  emptyPeriodTemplate?: any;
  shouldShowAddButton?: boolean;
  createAddButtonInsteadOfImageLink?: boolean;
  remove: (index?: number | number[]) => void,
  append: (value: Partial<unknown> | Partial<unknown>[], options?: FieldArrayMethodProps) => void
}

/**
 * PeriodFieldArray
 *
 * Overbygg over FieldArray (Redux-form) som håndterer å legge til og fjerne perioder
 */
const PeriodFieldArray = <PERIOD_TYPE, >({
  fields,
  readOnly = true,
  titleText,
  bodyText,
  emptyPeriodTemplate = {
    periodeFom: '',
    periodeTom: '',
  },
  shouldShowAddButton = true,
  createAddButtonInsteadOfImageLink = false,
  children,
  remove,
  append,
}: OwnProps) => (
  <SkjemaGruppeMedFeilviser
    name="dummy"
    description={titleText}
  >
    {fields.map((field, index) => children(field, index, getRemoveButton(index, remove)))}
    {shouldShowAddButton && (
      <Row>
        <Column xs="12">
          {!createAddButtonInsteadOfImageLink && !readOnly
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            && (
            <div
              onClick={onClick(append, emptyPeriodTemplate)}
              onKeyDown={onKeyDown(append, emptyPeriodTemplate)}
              className={styles.addPeriode}
              role="button"
              tabIndex={0}
            >
              <Image className={styles.addCircleIcon} src={addCircleIcon} alt={bodyText} />
              <Undertekst className={styles.imageText}>
                {bodyText}
              </Undertekst>
            </div>
            )}
          {createAddButtonInsteadOfImageLink && !readOnly && (
            <button
              type="button"
              onClick={onClick(append, emptyPeriodTemplate)}
              className={styles.buttonAdd}
            >
              {bodyText}
            </button>
          )}
          <VerticalSpacer sixteenPx />
        </Column>
      </Row>
    )}
  </SkjemaGruppeMedFeilviser>
  );

export default PeriodFieldArray;
