import { useFieldArray, useFormContext, type UseFormGetValues, useWatch } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { PlusCircleIcon, TrashIcon } from '@navikt/aksel-icons';
import { Button, Detail, HelpText, HStack, Table } from '@navikt/ds-react';
import { Datepicker, ReadOnlyField } from '@navikt/ft-form-hooks';
import { dateAfterOrEqual, dateBeforeOrEqualToToday, hasValidDate, required } from '@navikt/ft-form-validators';
import dayjs from 'dayjs';

import { type FaktaKilde, getLabelForFaktaKilde } from '@navikt/fp-fakta-felles';
import type { FødselGjeldende } from '@navikt/fp-types';
import { dødsdatoAfterOrEqualFødselsdato, maxFodselsdato, minFodselsdato } from '@navikt/fp-utils';

import styles from './barnFieldArray.module.css';

const FIELD_ARRAY_NAME = 'barn';

export const defaultAntallBarn: FieldArrayRow = {
  fødselsdato: '',
  dødsdato: '',
  kanOverstyres: true,
  kilde: 'SAKSBEHANDLER',
};

type FieldArrayRow = {
  fødselsdato: string;
  dødsdato: string | null;
  kanOverstyres: boolean;
  kilde: FaktaKilde;
};

export type BarnFormValues = {
  [FIELD_ARRAY_NAME]: FieldArrayRow[];
};

interface Props {
  isReadOnly: boolean;
}

export const BarnFieldArray = ({ isReadOnly }: Props) => {
  const intl = useIntl();

  const {
    control,
    getValues,
    formState: { dirtyFields },
  } = useFormContext<BarnFormValues>();
  const { fields, remove, append } = useFieldArray({ control, name: FIELD_ARRAY_NAME });

  const barn = useWatch({
    control,
    name: FIELD_ARRAY_NAME,
  });
  const today = dayjs().toDate();

  const skalViseDødsdato = !isReadOnly || barn.some(b => b.dødsdato !== null);

  return (
    <>
      <Table className={styles.tableNoBorder} size="small">
        <Table.Header>
          <Table.Row>
            {fields.length > 1 && (
              <Table.HeaderCell>
                <FormattedMessage id="Label.Barn" />
              </Table.HeaderCell>
            )}
            <Table.HeaderCell>
              <FormattedMessage id="Label.Fodselsdato" />
            </Table.HeaderCell>
            {skalViseDødsdato && (
              <Table.HeaderCell>
                <FormattedMessage id="Label.Dodsdato" />
              </Table.HeaderCell>
            )}
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {fields.map((field, index) => {
            const isDirty = dirtyFields.barn?.[index].fødselsdato || dirtyFields.barn?.[index].dødsdato;
            const fieldArrayRow = `${FIELD_ARRAY_NAME}.${index}` as const;

            return (
              <Table.Row shadeOnHover={false} key={field.id}>
                {fields.length > 1 && (
                  <Table.DataCell>
                    <ReadOnlyField
                      size="medium"
                      label={<FormattedMessage id="Label.Barn" />}
                      value={index + 1}
                      hideLabel
                    />
                  </Table.DataCell>
                )}
                <Table.DataCell>
                  <Datepicker
                    size="medium"
                    name={`${fieldArrayRow}.fødselsdato`}
                    label={intl.formatMessage({ id: 'Label.Fodselsdato' })}
                    hideLabel
                    validate={[required, hasValidDate, dateAfterOrEqual(minFodselsdato()), dateBeforeOrEqualToToday]}
                    fromDate={minFodselsdato().toDate()}
                    toDate={maxFodselsdato().toDate()}
                    isReadOnly={isReadOnly}
                    disabled={!field.kanOverstyres}
                  />
                </Table.DataCell>
                {skalViseDødsdato && (
                  <Table.DataCell>
                    <Datepicker
                      size="medium"
                      name={`${fieldArrayRow}.dødsdato`}
                      label={intl.formatMessage({ id: 'Label.Dodsdato' })}
                      hideLabel
                      validate={[hasValidDate, dateBeforeOrEqualToToday, validerDødsdato(getValues, index)]}
                      toDate={today}
                      isReadOnly={isReadOnly}
                      disabled={!field.kanOverstyres}
                    />
                  </Table.DataCell>
                )}
                <Table.DataCell className={styles.rowDescription}>
                  <HStack gap="2" align="center">
                    <Detail>{getLabelForFaktaKilde(isDirty ? 'SAKSBEHANDLER' : field.kilde)}</Detail>
                    {!isReadOnly && (
                      <>
                        {!field.kanOverstyres && (
                          <HelpText>
                            <FormattedMessage id="BarnFieldArray.HelpText" />
                          </HelpText>
                        )}
                        {index !== 0 && field.kanOverstyres && (
                          <Button
                            size="medium"
                            type="button"
                            variant="tertiary-neutral"
                            icon={<TrashIcon />}
                            onClick={() => remove(index)}
                          />
                        )}
                      </>
                    )}
                  </HStack>
                </Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      {!isReadOnly && fields.length < 9 && (
        <div>
          <Button
            onClick={() => append(defaultAntallBarn)}
            type="button"
            variant="tertiary-neutral"
            icon={<PlusCircleIcon aria-hidden />}
            size="small"
          >
            <FormattedMessage id="BarnFieldArray.LeggTilBarn" />
          </Button>
        </div>
      )}
    </>
  );
};

BarnFieldArray.initialValues = (gjeldende: FødselGjeldende): BarnFormValues => ({
  barn:
    gjeldende.barn.length > 0
      ? gjeldende.barn.map(({ barn: { fødselsdato, dødsdato }, kanOverstyres, kilde }) => ({
          fødselsdato: fødselsdato,
          dødsdato: dødsdato ?? null,
          kanOverstyres,
          kilde,
        }))
      : lagBarn(gjeldende.termin?.antallBarn ?? 0),
});

BarnFieldArray.transformValues = (
  values: BarnFormValues,
  erBarnFødt: boolean,
): { barn?: { fødselsdato: string; dødsdato: string | undefined }[] } =>
  erBarnFødt
    ? {
        barn: values.barn.map(ab => ({
          fødselsdato: ab.fødselsdato,
          dødsdato: ab.dødsdato === '' || ab.dødsdato === null ? undefined : ab.dødsdato,
        })),
      }
    : {};

const lagBarn = (antallBarnFraSoknad: number): FieldArrayRow[] => {
  const antallBarn = antallBarnFraSoknad > 0 ? antallBarnFraSoknad : 1;
  return Array(antallBarn).fill({
    fødselsdato: '',
    dødsdato: null,
    kanOverstyres: true,
    kilde: 'SAKSBEHANDLER',
  });
};

const validerDødsdato = (getValues: UseFormGetValues<BarnFormValues>, index: number) => (dødsdato: string) => {
  const fødselsdato = getValues(`${FIELD_ARRAY_NAME}.${index}.fødselsdato`);
  return dødsdatoAfterOrEqualFødselsdato(fødselsdato, dødsdato);
};
