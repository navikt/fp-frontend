import React, { ReactNode } from 'react';
import { FieldArrayMethodProps } from 'react-hook-form';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import addCircleIcon from '@fpsak-frontend/assets/images/add-circle.svg';
import { Image, VerticalSpacer } from '@fpsak-frontend/shared-components';

import SkjemaGruppeMedFeilviser from './SkjemaGruppeMedFeilviser';

import styles from './periodFieldArray.less';

function onClick<PERIOD_TYPE>(
  append: (value: PERIOD_TYPE, options?: FieldArrayMethodProps) => void,
  emptyPeriodTemplate?: any,
) {
  return (): void => { append(emptyPeriodTemplate); };
}

function onKeyDown<PERIOD_TYPE>(
  append: (value: PERIOD_TYPE, options?: FieldArrayMethodProps) => void,
  emptyPeriodTemplate?: any,
) {
  return ({ key }: React.KeyboardEvent): void => {
    if (key === 'Enter') {
      append(emptyPeriodTemplate);
    }
  };
}

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

interface OwnProps<PERIOD_TYPE> {
  children: (id: any, index: number, removeButtonElmt?: (className?: string) => ReactNode) => ReactNode;
  fields: PERIOD_TYPE[];
  readOnly?: boolean;
  titleText?: string;
  bodyText: string;
  emptyPeriodTemplate?: any;
  shouldShowAddButton?: boolean;
  createAddButtonInsteadOfImageLink?: boolean;
  remove: (index?: number | number[]) => void,
  append: (value: PERIOD_TYPE, options?: FieldArrayMethodProps) => void
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
}: OwnProps<PERIOD_TYPE>) => (
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
              onClick={onClick<PERIOD_TYPE>(append, emptyPeriodTemplate)}
              onKeyDown={onKeyDown<PERIOD_TYPE>(append, emptyPeriodTemplate)}
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
              onClick={onClick<PERIOD_TYPE>(append, emptyPeriodTemplate)}
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
