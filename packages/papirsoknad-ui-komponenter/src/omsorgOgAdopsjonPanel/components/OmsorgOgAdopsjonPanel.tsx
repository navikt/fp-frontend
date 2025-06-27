import React, { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Heading, HStack, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfRadioGroup, RhfTextField } from '@navikt/ft-form-hooks';
import {
  dateBeforeOrEqualToToday,
  hasValidDate,
  hasValidInteger,
  isDatesEqual,
  maxValue,
  minValue,
  required,
} from '@navikt/ft-form-validators';
import { BorderBox } from '@navikt/ft-ui-komponenter';

import { FamilieHendelseType } from '@navikt/fp-kodeverk';

import { OMSORG_NAME_PREFIX } from '../constant';
import type { OmsorgOgAdopsjonFormValues, TransformedFormValue } from './types';

import styles from './omsorgOgAdopsjonPanel.module.css';

const MAX_ANTALL_BARN = 10;

const validateMinAntall = (value: number) => (value ? minValue(1)(value) : undefined);
const validateMaxAntall = (value: number) => (value ? maxValue(10)(value) : undefined);

const getValideringMotAnnenFødselsdato = (index: number, fodselsdato?: string | string[]) => (fDato?: string) => {
  if (index === 0 && fodselsdato && fDato) {
    return isDatesEqual(fDato, Array.isArray(fodselsdato) ? fodselsdato[0] : fodselsdato);
  }
  return undefined;
};

interface Props {
  familieHendelseType: string;
  readOnly?: boolean;
  isForeldrepengerFagsak: boolean;
  fodselsdatoer?: string | string[];
}

/**
 * OmsorgOgAdopsjonPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad ved adopsjon og omsorgsovertakelse.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.
 */
export const OmsorgOgAdopsjonPanel = ({
  readOnly = true,
  familieHendelseType,
  isForeldrepengerFagsak,
  fodselsdatoer,
}: Props) => {
  const { formatMessage } = useIntl();

  const { control, watch } = useFormContext<OmsorgOgAdopsjonFormValues>();
  const { fields, remove, append } = useFieldArray({
    control,
    name: `${OMSORG_NAME_PREFIX}.foedselsDato`,
  });

  const antallBarn = watch(`${OMSORG_NAME_PREFIX}.antallBarn`) ?? 0;

  useEffect(() => {
    if (fields.length > Math.max(antallBarn, 0)) {
      for (let i = fields.length; i > antallBarn; i -= 1) {
        remove(i - 1);
      }
    } else if (fields.length < Math.min(antallBarn, MAX_ANTALL_BARN)) {
      for (let i = fields.length; i < antallBarn; i += 1) {
        append({ id: i, dato: undefined });
      }
    }
  }, [antallBarn]);

  return (
    <BorderBox>
      <VStack gap="4">
        <Heading size="small">
          <FormattedMessage
            id={
              familieHendelseType === FamilieHendelseType.ADOPSJON
                ? 'Registrering.Adopsjon.Title'
                : 'Registrering.Adopsjon.OmsorgTitle'
            }
          />
        </Heading>
        {isForeldrepengerFagsak && familieHendelseType === FamilieHendelseType.ADOPSJON && (
          <RhfRadioGroup
            name={`${OMSORG_NAME_PREFIX}.erEktefellesBarn`}
            control={control}
            label={<FormattedMessage id="Registrering.Adopsjon.GjelderEktefellesBarn" />}
            validate={[required]}
            isReadOnly={readOnly}
            isTrueOrFalseSelection
            isHorizontal
            radios={[
              {
                label: formatMessage({ id: 'Registrering.Adopsjon.Ja' }),
                value: 'true',
              },
              {
                label: formatMessage({ id: 'Registrering.Adopsjon.Nei' }),
                value: 'false',
              },
            ]}
          />
        )}
        <RhfDatepicker
          name={`${OMSORG_NAME_PREFIX}.omsorgsovertakelsesdato`}
          control={control}
          label={formatMessage({
            id:
              familieHendelseType === FamilieHendelseType.ADOPSJON
                ? 'Registrering.Adopsjon.DatoForOvertakelsenStebarn'
                : 'Registrering.Adopsjon.DatoForOvertakelsen',
          })}
          isReadOnly={readOnly}
          validate={familieHendelseType === FamilieHendelseType.ADOPSJON ? [required, hasValidDate] : [hasValidDate]}
        />
        <HStack gap="4">
          {familieHendelseType === FamilieHendelseType.ADOPSJON && (
            <RhfDatepicker
              name={`${OMSORG_NAME_PREFIX}.ankomstdato`}
              control={control}
              label={formatMessage({ id: 'Registrering.Adopsjon.Ankomstdato' })}
              isReadOnly={readOnly}
              validate={[hasValidDate]}
            />
          )}
          <RhfTextField
            name={`${OMSORG_NAME_PREFIX}.antallBarn`}
            control={control}
            label={formatMessage({ id: 'Registrering.Adopsjon.AntallBarn' })}
            readOnly={readOnly}
            className={styles.barnInput}
            parse={value => {
              const parsedValue = parseInt(value.toString(), 10);
              return Number.isNaN(parsedValue) ? value : parsedValue;
            }}
            validate={[
              ...(familieHendelseType === FamilieHendelseType.ADOPSJON ? [required] : []),
              hasValidInteger,
              validateMinAntall,
              validateMaxAntall,
            ]}
          />
        </HStack>
        {fields.map((field, index) => (
          <React.Fragment key={field.id}>
            <RhfDatepicker
              name={`${OMSORG_NAME_PREFIX}.foedselsDato.${index}.dato`}
              control={control}
              isReadOnly={readOnly}
              validate={
                familieHendelseType === FamilieHendelseType.ADOPSJON
                  ? [
                      required,
                      hasValidDate,
                      dateBeforeOrEqualToToday,
                      getValideringMotAnnenFødselsdato(index, fodselsdatoer),
                    ]
                  : [hasValidDate, dateBeforeOrEqualToToday, getValideringMotAnnenFødselsdato(index, fodselsdatoer)]
              }
              label={formatMessage({ id: 'Registrering.Adopsjon.FodselsdatoBarnN' }, { n: index + 1 })}
            />
          </React.Fragment>
        ))}
      </VStack>
    </BorderBox>
  );
};

OmsorgOgAdopsjonPanel.initialValues = (): OmsorgOgAdopsjonFormValues => ({ [OMSORG_NAME_PREFIX]: {} });

OmsorgOgAdopsjonPanel.transformValues = ({ omsorg }: OmsorgOgAdopsjonFormValues): TransformedFormValue => ({
  [OMSORG_NAME_PREFIX]: {
    ...omsorg,
    foedselsDato:
      omsorg.foedselsDato && omsorg.foedselsDato.length > 0 ? omsorg.foedselsDato.map(f => f.dato) : undefined,
  },
});
