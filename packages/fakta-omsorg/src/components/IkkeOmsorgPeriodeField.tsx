import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { UseFormGetValues } from 'react-hook-form';
import { Column, Row } from 'nav-frontend-grid';
import { Datepicker, formHooks, PeriodFieldArray } from '@navikt/ft-form-hooks';
import {
  dateAfterOrEqual,
  dateBeforeOrEqual, dateRangesNotOverlapping, hasValidDate, required,
} from '@navikt/ft-form-validators';
import { Undertekst } from 'nav-frontend-typografi';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { TIDENES_ENDE } from '@navikt/ft-utils';

const PERIODER_FELT_NAVN = 'ikkeOmsorgPerioder';

type Periode = {
  periodeFom: string;
  periodeTom: string;
}

const showAddButton = (
  perioder: Periode[],
): boolean => {
  if (perioder.length > 0) {
    return (perioder[perioder.length - 1].periodeFom !== undefined && perioder[perioder.length - 1].periodeTom !== undefined);
  }
  return false;
};

const validerOverlappendePerioder = (
  getValues: UseFormGetValues<{ ikkeOmsorgPerioder: Periode[] }>,
) => () => {
  const allePerioder = getValues(PERIODER_FELT_NAVN);
  const perioderArray = allePerioder
    .filter((periode) => !!periode.periodeFom)
    .map((periode) => [periode.periodeFom, periode.periodeTom || TIDENES_ENDE]);
  return allePerioder.length > 1 ? dateRangesNotOverlapping(perioderArray) : null;
};

interface OwnProps {
  readOnly: boolean;
}

const IkkeOmsorgPeriodeField: FunctionComponent<OwnProps> = ({
  readOnly,
}) => {
  const intl = useIntl();

  const {
    control, watch, getValues, trigger, formState: { isSubmitted },
  } = formHooks.useFormContext<{ [PERIODER_FELT_NAVN]: Periode[] }>();
  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: PERIODER_FELT_NAVN,
  });

  const perioder = watch(PERIODER_FELT_NAVN);

  return (
    <>
      <Undertekst>
        <FormattedMessage id="IkkeOmsorgPeriodeField.Periode" />
      </Undertekst>
      <VerticalSpacer eightPx />
      <PeriodFieldArray<Periode>
        fields={fields}
        bodyText={intl.formatMessage({ id: 'IkkeOmsorgPeriodeField.Add' })}
        shouldShowAddButton={!readOnly && showAddButton(perioder)}
        createAddButtonInsteadOfImageLink
        readOnly={readOnly}
        remove={remove}
        append={append}
      >
        {(field, index, getRemoveButton) => (
          <React.Fragment key={field.id}>
            <Row>
              <Column xs="5">
                <Datepicker
                  name={`${PERIODER_FELT_NAVN}.${index}.periodeFom`}
                  label={intl.formatMessage({ id: 'IkkeOmsorgPeriodeField.PeriodeFom' })}
                  validate={[
                    required,
                    hasValidDate,
                    () => {
                      const fomVerdi = getValues(`${PERIODER_FELT_NAVN}.${index}.periodeFom`);
                      const tomVerdi = getValues(`${PERIODER_FELT_NAVN}.${index}.periodeTom`);
                      return tomVerdi && fomVerdi ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : null;
                    },
                    validerOverlappendePerioder(getValues),
                  ]}
                  isReadOnly={readOnly}
                  onChange={() => (isSubmitted ? trigger() : undefined)}
                />
              </Column>
              <Column xs="5">
                <Datepicker
                  name={`${PERIODER_FELT_NAVN}.${index}.periodeTom`}
                  label={intl.formatMessage({ id: 'IkkeOmsorgPeriodeField.PeriodeTom' })}
                  validate={[
                    hasValidDate,
                    () => {
                      const fomVerdi = getValues(`${PERIODER_FELT_NAVN}.${index}.periodeFom`);
                      const tomVerdi = getValues(`${PERIODER_FELT_NAVN}.${index}.periodeTom`);
                      return tomVerdi && fomVerdi ? dateAfterOrEqual(fomVerdi)(tomVerdi) : null;
                    },
                    validerOverlappendePerioder(getValues),
                  ]}
                  isReadOnly={readOnly}
                  onChange={() => (isSubmitted ? trigger() : undefined)}
                />
              </Column>
              {!readOnly && (
              <Column xs="2">
                {getRemoveButton()}
              </Column>
              )}
            </Row>
            <VerticalSpacer sixteenPx />
          </React.Fragment>
        )}
      </PeriodFieldArray>
    </>
  );
};

export default IkkeOmsorgPeriodeField;
