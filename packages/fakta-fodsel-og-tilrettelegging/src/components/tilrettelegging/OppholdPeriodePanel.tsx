import React, { FunctionComponent, useState } from 'react';
import dayjs from 'dayjs';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { UseFieldArrayRemove, UseFormGetValues, useFormContext } from 'react-hook-form';
import { BodyShort, Button, Table } from '@navikt/ds-react';
import { Datepicker, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { DateLabel, FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { ArbeidsforholdTilretteleggingDato, SvpAvklartOppholdPeriode } from '@navikt/fp-types';
import { dateRangesNotOverlapping, hasValidDate, required } from '@navikt/ft-form-validators';

const validerTomEtterFom = (intl: IntlShape, getValues: UseFormGetValues<any>, fomState) => (tom?: string) =>
  dayjs(tom).isBefore(getValues(fomState)) ? intl.formatMessage({ id: 'OppholdPeriodePanel.TomForFom' }) : null;

const validerAtPeriodeErGyldig =
  (intl: IntlShape, getValues: UseFormGetValues<any>, tilrettelegginger: ArbeidsforholdTilretteleggingDato[]) =>
  (dato?: string) => {
    const termindato = getValues('termindato');
    if (dayjs(dato).isAfter(dayjs(termindato).subtract(3, 'weeks').subtract(1, 'day'))) {
      return intl.formatMessage({ id: 'OppholdPeriodePanel.EtterTermindato' });
    }
    const førsteDato = tilrettelegginger.reduce<string>((a, t) => {
      if (a === undefined || dayjs(t.fom).isBefore(a)) {
        return t.fom;
      }
      return a;
    }, undefined);
    if (dayjs(dato).isBefore(førsteDato)) {
      return intl.formatMessage({ id: 'OppholdPeriodePanel.ForForsteDato' });
    }
    return null;
  };

const validerAtPeriodeIkkeOverlapper = (getValues: UseFormGetValues<any>, fieldPrefix: string) => () => {
  const perioder = getValues(fieldPrefix);
  const periodeMap = perioder.map(({ fom, tom }) => [fom, tom]);
  return periodeMap.length > 0 ? dateRangesNotOverlapping(periodeMap) : undefined;
};

export const defaultFormValues = {
  type: undefined,
  stillingsprosent: undefined,
  fom: undefined,
};

interface OwnProps {
  readOnly: boolean;
  fieldPrefix: string;
  fieldId: string;
  index: number;
  periode: SvpAvklartOppholdPeriode;
  remove: UseFieldArrayRemove;
  erNyPeriode: boolean;
  tilrettelegginger: ArbeidsforholdTilretteleggingDato[];
}

const OppholdPeriodePanel: FunctionComponent<OwnProps> = ({
  readOnly,
  fieldPrefix,
  periode,
  fieldId,
  index,
  remove,
  erNyPeriode,
  tilrettelegginger,
}) => {
  const intl = useIntl();

  const {
    getValues,
    trigger,
    formState: { isSubmitted },
  } = useFormContext<Record<string, SvpAvklartOppholdPeriode[]>>();

  const [erRadÅpen, setErRadÅpen] = useState(erNyPeriode);

  return (
    <Table.ExpandableRow
      key={fieldId}
      togglePlacement="right"
      open={erRadÅpen}
      onClick={() => setErRadÅpen(!erRadÅpen)}
      content={
        <FlexContainer>
          {periode.forVisning && (
            <FlexRow>
              <FlexColumn>
                <BodyShort>
                  <FormattedMessage id="AvklarteOppholdPerioderFieldArray.Inntektsmelding" />
                </BodyShort>
              </FlexColumn>
            </FlexRow>
          )}
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn>
              <Datepicker
                name={`${fieldPrefix}.${index}.fom`}
                isReadOnly={readOnly || periode.forVisning}
                label={intl.formatMessage({ id: 'AvklarteOppholdPerioderFieldArray.Fom' })}
                validate={[
                  hasValidDate,
                  required,
                  validerAtPeriodeErGyldig(intl, getValues, tilrettelegginger),
                  validerAtPeriodeIkkeOverlapper(getValues, fieldPrefix),
                ]}
                onChange={() => (isSubmitted ? trigger() : undefined)}
              />
            </FlexColumn>
            <FlexColumn>
              <Datepicker
                name={`${fieldPrefix}.${index}.tom`}
                isReadOnly={readOnly || periode.forVisning}
                label={intl.formatMessage({ id: 'AvklarteOppholdPerioderFieldArray.Tom' })}
                validate={[
                  hasValidDate,
                  required,
                  validerTomEtterFom(intl, getValues, `${fieldPrefix}.${index}.fom`),
                  validerAtPeriodeErGyldig(intl, getValues, tilrettelegginger),
                  validerAtPeriodeIkkeOverlapper(getValues, fieldPrefix),
                ]}
                onChange={() => (isSubmitted ? trigger() : undefined)}
              />
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn>
              <RadioGroupPanel
                name={`${fieldPrefix}.${index}.oppholdÅrsak`}
                label={intl.formatMessage({ id: 'AvklarteOppholdPerioderFieldArray.OppholdArsak' })}
                validate={[required]}
                isReadOnly={readOnly || periode.forVisning}
                radios={[
                  {
                    label: intl.formatMessage({ id: 'AvklarteOppholdPerioderFieldArray.Sykepenger' }),
                    value: 'SYKEPENGER',
                  },
                  {
                    label: intl.formatMessage({ id: 'AvklarteOppholdPerioderFieldArray.Ferie' }),
                    value: 'FERIE',
                  },
                ]}
              />
            </FlexColumn>
          </FlexRow>
          {!readOnly && !periode.forVisning && (
            <FlexRow spaceBetween>
              <FlexColumn />
              <FlexColumn>
                <VerticalSpacer sixteenPx />
                <Button size="small" type="button" variant="secondary" onClick={() => remove(index)}>
                  <FormattedMessage id="AvklarteOppholdPerioderFieldArray.SlettOpphold" />
                </Button>
              </FlexColumn>
            </FlexRow>
          )}
          <VerticalSpacer twentyPx />
        </FlexContainer>
      }
    >
      <Table.DataCell scope="row">{periode.fom ? <DateLabel dateString={periode.fom} /> : '-'}</Table.DataCell>
      <Table.DataCell>{periode.tom ? <DateLabel dateString={periode.tom} /> : '-'}</Table.DataCell>
      <Table.DataCell>
        {periode.oppholdÅrsak ? (
          <FormattedMessage
            id={
              periode.oppholdÅrsak === 'FERIE'
                ? 'AvklarteOppholdPerioderFieldArray.Ferie'
                : 'AvklarteOppholdPerioderFieldArray.Sykepenger'
            }
          />
        ) : (
          '-'
        )}
      </Table.DataCell>
    </Table.ExpandableRow>
  );
};

export default OppholdPeriodePanel;
