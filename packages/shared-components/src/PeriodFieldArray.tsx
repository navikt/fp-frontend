import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';
import React, { FunctionComponent, ReactNode } from 'react';
import { IntlShape } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import addCircleIcon from '@fpsak-frontend/assets/images/add-circle.svg';
import NavFieldGroup from '@fpsak-frontend/form/src/NavFieldGroup';

import Image from './Image';
import VerticalSpacer from './VerticalSpacer';
import getPackageIntl from '../i18n/getPackageIntl';

import styles from './periodFieldArray.less';

// TODO Denne komponenten bør flyttast ut av shared-components da den drar inn avhengighet til redux og redux-form

const onClick = (fields: FieldArrayFieldsProps<any>, emptyPeriodTemplate?: any) => (): void => {
  fields.push(emptyPeriodTemplate);
};

const onKeyDown = (fields: FieldArrayFieldsProps<any>, emptyPeriodTemplate?: any) => ({ keyCode }: React.KeyboardEvent): void => {
  if (keyCode === 13) {
    fields.push(emptyPeriodTemplate);
  }
};

const getRemoveButton = (index: number, fields: FieldArrayFieldsProps<any>) => (className?: string): ReactNode | undefined => {
  if (index > 0) {
    return (
      <button
        className={className || styles.buttonRemove}
        type="button"
        onClick={() => {
          fields.remove(index);
        }}
      />
    );
  }
  return undefined;
};

const showErrorMessage = (meta?: FieldArrayMetaProps): boolean => meta && meta.error && (meta.dirty || meta.submitFailed);

const finnFeilmelding = (intl: IntlShape, meta?: FieldArrayMetaProps): string => (Array.isArray(meta.error)
  ? intl.formatMessage({ id: meta.error[0].id }, meta.error[0].values)
  : intl.formatMessage({ id: meta.error.id }, meta.error.values));

interface OwnProps {
  children: (id: any, index: number, removeButtonElmt?: (className?: string) => ReactNode) => ReactNode;
  fields: FieldArrayFieldsProps<any>;
  meta?: FieldArrayMetaProps;
  readOnly?: boolean;
  titleText?: string;
  bodyText?: string;
  emptyPeriodTemplate?: any;
  shouldShowAddButton?: boolean;
  createAddButtonInsteadOfImageLink?: boolean;
}

/**
 * PeriodFieldArray
 *
 * Overbygg over FieldArray (Redux-form) som håndterer å legge til og fjerne perioder
 */
const PeriodFieldArray: FunctionComponent<OwnProps> = ({
  fields,
  readOnly = true,
  meta,
  titleText,
  bodyText,
  emptyPeriodTemplate = {
    periodeFom: '',
    periodeTom: '',
  },
  shouldShowAddButton = true,
  createAddButtonInsteadOfImageLink = false,
  children,
}) => {
  const intl = getPackageIntl();
  const text = bodyText || intl.formatMessage({ id: 'PeriodFieldArray.LeggTilPeriode' });
  return (
    <NavFieldGroup
      title={titleText}
      errorMessage={showErrorMessage(meta) ? finnFeilmelding(intl, meta) : null}
    >
      {fields.map((periodeElementFieldId, index) => children(periodeElementFieldId, index, getRemoveButton(index, fields)))}
      {shouldShowAddButton && (
        <Row>
          <Column xs="12">
            {!createAddButtonInsteadOfImageLink && !readOnly
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              && (
              <div
                onClick={onClick(fields, emptyPeriodTemplate)}
                onKeyDown={onKeyDown(fields, emptyPeriodTemplate)}
                className={styles.addPeriode}
                role="button"
                tabIndex={0}
              >
                <Image className={styles.addCircleIcon} src={addCircleIcon} alt={text} />
                <Undertekst className={styles.imageText}>
                  {text}
                </Undertekst>
              </div>
              )}
            {createAddButtonInsteadOfImageLink && !readOnly && (
              <button
                type="button"
                onClick={onClick(fields, emptyPeriodTemplate)}
                className={styles.buttonAdd}
              >
                {text}
              </button>
            )}
            <VerticalSpacer sixteenPx />
          </Column>
        </Row>
      )}
    </NavFieldGroup>
  );
};

export default PeriodFieldArray;
