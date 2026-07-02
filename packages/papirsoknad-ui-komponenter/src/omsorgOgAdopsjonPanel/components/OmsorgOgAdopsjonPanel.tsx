import React, { useEffect } from 'react';
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Heading, HStack, Radio, VStack } from '@navikt/ds-react';
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

import type { FamilieHendelseType, OmsorgDto } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { OMSORG_NAME_PREFIX } from '../constant';

type OmsorgOgAdopsjonFormValues = {
  [OMSORG_NAME_PREFIX]: {
    erEktefellesBarn?: boolean;
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    fødselsdato?: { dato?: string }[];
  };
};

const MAX_ANTALL_BARN = 10;

const getValideringMotAnnenFødselsdato = (index: number, fødselsdato?: string | string[]) => (fDato?: string) => {
  const fødselsdatoList = [fødselsdato].flat().filter(f => f !== undefined);
  const førsteFodselsdato = fødselsdatoList.at(0);
  if (index === 0 && førsteFodselsdato && fDato) {
    return isDatesEqual(fDato, førsteFodselsdato);
  }
  return undefined;
};

interface Props {
  familieHendelseType: FamilieHendelseType;
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
  const erAdopsjon = familieHendelseType === 'ADPSJN';
  const { formatMessage } = useIntl();

  const { control } = useFormContext<OmsorgOgAdopsjonFormValues>();
  const { fields, remove, append } = useFieldArray({
    control,
    name: `${OMSORG_NAME_PREFIX}.fødselsdato`,
  });

  const antallBarn = useWatch({ control, name: `${OMSORG_NAME_PREFIX}.antallBarn` });

  useEffect(() => {
    if (antallBarn === undefined || antallBarn <= 0) {
      return undefined;
    }
    const ønsketAntall = Math.min(Math.max(antallBarn, 0), MAX_ANTALL_BARN);
    if (fields.length > ønsketAntall) {
      remove(Array.from({ length: fields.length - ønsketAntall }, (_, i) => ønsketAntall + i));
    } else if (fields.length < ønsketAntall) {
      append(Array.from({ length: ønsketAntall - fields.length }, () => ({ dato: undefined })));
    }
  }, [antallBarn, append, remove, fields]);

  return (
    <BorderBox>
      <VStack gap="space-16">
        <Heading size="small" level="3">
          {erAdopsjon ? (
            <FormattedMessage id="Registrering.Adopsjon.Title" />
          ) : (
            <FormattedMessage id="Registrering.Adopsjon.OmsorgTitle" />
          )}
        </Heading>
        {isForeldrepengerFagsak && erAdopsjon && (
          <RhfRadioGroup
            name={`${OMSORG_NAME_PREFIX}.erEktefellesBarn`}
            control={control}
            legend={<FormattedMessage id="Registrering.Adopsjon.GjelderEktefellesBarn" />}
            validate={[required]}
            readOnly={readOnly}
          >
            <HStack gap="space-16">
              <Radio value={true} size="small">
                <FormattedMessage id="Registrering.Adopsjon.Ja" />
              </Radio>
              <Radio value={false} size="small">
                <FormattedMessage id="Registrering.Adopsjon.Nei" />
              </Radio>
            </HStack>
          </RhfRadioGroup>
        )}
        <RhfDatepicker
          name={`${OMSORG_NAME_PREFIX}.omsorgsovertakelsesdato`}
          control={control}
          label={
            erAdopsjon
              ? formatMessage({ id: 'Registrering.Adopsjon.DatoForOvertakelsenStebarn' })
              : formatMessage({ id: 'Registrering.Adopsjon.DatoForOvertakelsen' })
          }
          readOnly={readOnly}
          validate={erAdopsjon ? [required, hasValidDate] : [hasValidDate]}
        />
        <HStack gap="space-16">
          <RhfTextField
            name={`${OMSORG_NAME_PREFIX}.antallBarn`}
            control={control}
            label={formatMessage({ id: 'Registrering.Adopsjon.AntallBarn' })}
            readOnly={readOnly}
            htmlSize={8}
            parse={value => {
              const parsedValue = Number.parseInt(value.toString(), 10);
              return Number.isNaN(parsedValue) ? value : parsedValue;
            }}
            validate={[...(erAdopsjon ? [required] : []), hasValidInteger, minValue(1), maxValue(10)]}
          />
        </HStack>
        {fields.map((field, index) => (
          <React.Fragment key={field.id}>
            <RhfDatepicker
              name={`${OMSORG_NAME_PREFIX}.fødselsdato.${index}.dato`}
              control={control}
              readOnly={readOnly}
              validate={
                erAdopsjon
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

OmsorgOgAdopsjonPanel.transformValues = ({
  omsorg,
}: OmsorgOgAdopsjonFormValues): { [OMSORG_NAME_PREFIX]: OmsorgDto } => {
  return {
    [OMSORG_NAME_PREFIX]: {
      ...omsorg,
      fødselsdato:
        omsorg.fødselsdato && omsorg.fødselsdato.length > 0 ? omsorg.fødselsdato.map(f => notEmpty(f.dato)) : undefined,
    },
  };
};
