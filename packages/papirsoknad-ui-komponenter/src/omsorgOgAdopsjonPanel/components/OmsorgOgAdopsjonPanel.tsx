import React, { FunctionComponent, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Heading } from '@navikt/ds-react';
import {
  BorderBox, FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import {
  dateBeforeOrEqualToToday, hasValidDate, hasValidInteger, isDatesEqual, maxValue, minValue, required,
} from '@navikt/ft-form-validators';
import {
  Datepicker, formHooks, InputField, RadioGroupPanel,
} from '@navikt/ft-form-hooks';

import { familieHendelseType as fht } from '@navikt/fp-kodeverk';

import styles from './omsorgOgAdopsjonPanel.module.css';

const MAX_ANTALL_BARN = 10;

const minAntall = minValue(1);
const maxAntall = maxValue(10);

const OMSORG_NAME_PREFIX = 'omsorg';

export type FormValues = {
  omsorgsovertakelsesdato?: string;
  antallBarn?: string;
  foedselsDato?: { id: number, dato?: string }[];
}

export type TransformedFormValues = {
  omsorgsovertakelsesdato?: string;
  antallBarn?: string;
  foedselsDato?: string[];
}

const getValideringMotAnnenFødselsdato = (
  index: number,
  fodselsdato?: string | string[],
) => (
  fDato?: string,
) => {
  if (index === 0 && fodselsdato && fDato) {
    return isDatesEqual(fDato, Array.isArray(fodselsdato) ? fodselsdato[0] : fodselsdato);
  }
  return undefined;
};

interface OwnProps {
  familieHendelseType: string;
  readOnly?: boolean;
  isForeldrepengerFagsak: boolean;
  fodselsdatoer?: string | string[];
}

interface StaticFunctions {
  transformValues: (formValues: FormValues) => TransformedFormValues;
}

/**
 * OmsorgOgAdopsjonPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad ved adopsjon og omsorgsovertakelse.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.
 */
const OmsorgOgAdopsjonPanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly = true,
  familieHendelseType,
  isForeldrepengerFagsak,
  fodselsdatoer,
}) => {
  const { formatMessage } = useIntl();

  const { control, watch } = formHooks.useFormContext<{ [OMSORG_NAME_PREFIX]: FormValues }>();
  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: `${OMSORG_NAME_PREFIX}.foedselsDato`,
  });

  const antallBarnState = watch(`${OMSORG_NAME_PREFIX}.antallBarn`);
  const antallBarn = antallBarnState ? parseInt(antallBarnState, 10) : 0;

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
      <Heading size="small">
        <FormattedMessage id={familieHendelseType === fht.ADOPSJON ? 'Registrering.Adopsjon.Title' : 'Registrering.Adopsjon.OmsorgTitle'} />
      </Heading>
      <VerticalSpacer sixteenPx />
      <FlexContainer>
        {isForeldrepengerFagsak && familieHendelseType === fht.ADOPSJON && (
          <>
            <FlexRow>
              <FlexColumn className={styles.col}>
                <RadioGroupPanel
                  name={`${OMSORG_NAME_PREFIX}.erEktefellesBarn`}
                  label={<FormattedMessage id="Registrering.Adopsjon.GjelderEktefellesBarn" />}
                  validate={[required]}
                  isReadOnly={readOnly}
                  isTrueOrFalseSelection
                  isHorizontal
                  radios={[{
                    label: formatMessage({ id: 'Registrering.Adopsjon.Ja' }),
                    value: 'true',
                  }, {
                    label: formatMessage({ id: 'Registrering.Adopsjon.Nei' }),
                    value: 'false',
                  }]}
                />
              </FlexColumn>
            </FlexRow>
            <VerticalSpacer sixteenPx />
          </>
        )}
        <FlexRow>
          <FlexColumn>
            <Datepicker
              name={`${OMSORG_NAME_PREFIX}.omsorgsovertakelsesdato`}
              label={formatMessage({
                id: familieHendelseType === fht.ADOPSJON
                  ? 'Registrering.Adopsjon.DatoForOvertakelsenStebarn' : 'Registrering.Adopsjon.DatoForOvertakelsen',
              })}
              isReadOnly={readOnly}
              validate={familieHendelseType === fht.ADOPSJON ? [required, hasValidDate] : [hasValidDate]}
            />
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer sixteenPx />
        <FlexRow>
          {familieHendelseType === fht.ADOPSJON && (
            <FlexColumn>
              <Datepicker
                name={`${OMSORG_NAME_PREFIX}.ankomstdato`}
                label={formatMessage({ id: 'Registrering.Adopsjon.Ankomstdato' })}
                isReadOnly={readOnly}
                validate={[hasValidDate]}
              />
            </FlexColumn>
          )}
          <FlexColumn className={styles.col}>
            <InputField
              name={`${OMSORG_NAME_PREFIX}.antallBarn`}
              label={formatMessage({ id: 'Registrering.Adopsjon.AntallBarn' })}
              readOnly={readOnly}
              parse={(value) => {
                const parsedValue = parseInt(value.toString(), 10);
                return Number.isNaN(parsedValue) ? value : parsedValue;
              }}
              className={styles.barnInput}
              validate={familieHendelseType === fht.ADOPSJON
                ? [required, hasValidInteger, minAntall, maxAntall]
                : [hasValidInteger, (value) => (value ? minAntall(value) : undefined), (value) => (value ? maxAntall(value) : undefined)]}
            />
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn className={styles.col}>
            {fields.map((field, index) => (
              <React.Fragment key={field.id}>
                <VerticalSpacer sixteenPx />
                <Datepicker
                  name={`${OMSORG_NAME_PREFIX}.foedselsDato.${index}.dato`}
                  isReadOnly={readOnly}
                  validate={familieHendelseType === fht.ADOPSJON
                    ? [required, hasValidDate, dateBeforeOrEqualToToday, getValideringMotAnnenFødselsdato(index, fodselsdatoer)]
                    : [hasValidDate, dateBeforeOrEqualToToday, getValideringMotAnnenFødselsdato(index, fodselsdatoer)]}
                  label={formatMessage({ id: 'Registrering.Adopsjon.FodselsdatoBarnN' }, { n: index + 1 })}
                />
              </React.Fragment>
            ))}
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </BorderBox>
  );
};

OmsorgOgAdopsjonPanel.transformValues = (values) => ({
  ...values,
  foedselsDato: values.foedselsDato && values.foedselsDato.length > 0 ? values.foedselsDato.map((f) => f.dato) : undefined,
});

export default OmsorgOgAdopsjonPanel;
