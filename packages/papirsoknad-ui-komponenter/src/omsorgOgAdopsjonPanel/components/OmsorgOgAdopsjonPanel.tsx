import React, { FunctionComponent, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { Column, Container, Row } from 'nav-frontend-grid';
import { Undertekst } from 'nav-frontend-typografi';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  dateBeforeOrEqualToToday, hasValidDate, required,
} from '@navikt/ft-form-validators';
import {
  Datepicker, formHooks, InputField, RadioGroupField, RadioOption,
} from '@navikt/ft-form-hooks';

import fht from '@fpsak-frontend/kodeverk/src/familieHendelseType';

import styles from './omsorgOgAdopsjonPanel.less';

// const MIN_ANTALL_BARN = 1;
const MAX_ANTALL_BARN = 10;

const OMSORG_NAME_PREFIX = 'omsorg';

export type FormValues = {
  omsorgsovertakelsesdato?: string;
  antallBarn?: string;
  foedselsDato?: string[];
}

interface OwnProps {
  familieHendelseType: string;
  readOnly?: boolean;
  isForeldrepengerFagsak: boolean;
}

/**
 * OmsorgOgAdopsjonPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad ved adopsjon og omsorgsovertakelse.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.
 */
const OmsorgOgAdopsjonPanel: FunctionComponent<OwnProps> = ({
  readOnly = true,
  familieHendelseType,
  isForeldrepengerFagsak,
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
      remove(antallBarn);
    } else if (fields.length < Math.min(antallBarn, MAX_ANTALL_BARN)) {
      append({});
    }
  }, [antallBarn]);

  return (
    <BorderBox>
      <SkjemaGruppe legend={formatMessage({
        id: familieHendelseType === fht.ADOPSJON ? 'Registrering.Adopsjon.Title' : 'Registrering.Adopsjon.OmsorgTitle',
      })}
      >
        <Container fluid className={styles.formContainer}>
          {isForeldrepengerFagsak && familieHendelseType === fht.ADOPSJON
          && (
          <Row>
            <Column xs="6">
              <Undertekst>
                <FormattedMessage id="Registrering.Adopsjon.GjelderEktefellesBarn" />
              </Undertekst>
              <VerticalSpacer eightPx />
              <RadioGroupField
                name={`${OMSORG_NAME_PREFIX}.erEktefellesBarn`}
                readOnly={readOnly}
                validate={[required]}
                parse={(value: string) => value === 'true'}
              >
                <RadioOption
                  label={formatMessage({ id: 'Registrering.Adopsjon.Ja' })}
                  value="true"
                />
                <RadioOption
                  label={formatMessage({ id: 'Registrering.Adopsjon.Nei' })}
                  value="false"
                />
              </RadioGroupField>
            </Column>
          </Row>
          )}
          <Row>
            <Column xs="6" className={styles.inputMinimumWidth}>
              <Datepicker
                name={`${OMSORG_NAME_PREFIX}.omsorgsovertakelsesdato`}
                label={formatMessage({
                  id: familieHendelseType === fht.ADOPSJON
                    ? 'Registrering.Adopsjon.DatoForOvertakelsenStebarn' : 'Registrering.Adopsjon.DatoForOvertakelsen',
                })}
                isReadOnly={readOnly}
                validate={familieHendelseType === fht.ADOPSJON ? [required, hasValidDate] : [hasValidDate]}
              />
            </Column>
          </Row>
          <Row>
            {familieHendelseType === fht.ADOPSJON
              && (
              <Column xs="3" className={styles.inputMinimumWidth}>
                <Datepicker
                  name={`${OMSORG_NAME_PREFIX}.ankomstdato`}
                  label={formatMessage({ id: 'Registrering.Adopsjon.Ankomstdato' })}
                  isReadOnly={readOnly}
                  validate={[hasValidDate]}
                />
              </Column>
              )}
            <Column xs="6">
              <InputField
                name={`${OMSORG_NAME_PREFIX}.antallBarn`}
                label={formatMessage({ id: 'Registrering.Adopsjon.AntallBarn' })}
                readOnly={readOnly}
                parse={(value) => {
                  const parsedValue = parseInt(value.toString(), 10);
                  return Number.isNaN(parsedValue) ? value : parsedValue;
                }}
                bredde="XS"
              />
            </Column>
          </Row>
          <Row>
            <Column xs="6">
              {fields.map((name, index) => (
                <Datepicker
                  key={name}
                  name={name}
                  readOnly={readOnly}
                  validate={familieHendelseType === fht.ADOPSJON
                    ? [required, hasValidDate, dateBeforeOrEqualToToday] : [hasValidDate, dateBeforeOrEqualToToday]}
                  label={formatMessage({ id: 'Registrering.Adopsjon.FodselsdatoBarnN' }, { n: index + 1 })}
                />
              ))}
            </Column>
          </Row>
        </Container>
      </SkjemaGruppe>
    </BorderBox>
  );
};

/*
const validateIncludingRequired = (antallBarn: number) => required(antallBarn)
|| hasValidInteger(antallBarn) || minValue(MIN_ANTALL_BARN)(antallBarn) || maxValue(MAX_ANTALL_BARN)(antallBarn);

const validateExcludingRequired = (antallBarn: number) => {
  if (!antallBarn) {
    return undefined;
  }
  return hasValidInteger(antallBarn) || minValue(MIN_ANTALL_BARN)(antallBarn) || maxValue(MAX_ANTALL_BARN)(antallBarn);
};

const validateAntallBarn = (antallBarn: number, familieHendelseType: string) => (familieHendelseType === fht.ADOPSJON
  ? validateIncludingRequired(antallBarn) : validateExcludingRequired(antallBarn));

const validateFodselsdatoer = (foedselsDato: string[], otherFodselsdato: string) => {
  const hasFodselsdato1 = foedselsDato && foedselsDato.length > 0 && foedselsDato[0];
  const hasFodseldsato2 = otherFodselsdato && otherFodselsdato.length > 0 && otherFodselsdato[0];
  if (hasFodselsdato1 && hasFodseldsato2) {
    const datesError = isDatesEqual(foedselsDato[0], otherFodselsdato[0]);
    if (datesError) {
      return [datesError];
    }
  }
  return undefined;
};

OmsorgOgAdopsjonPanel.validate = (values: FormValues, otherFodselsdato: string, familieHendelseType: string) => {
  const errors = {
    omsorgsovertakelsesdato: undefined,
    antallBarn: undefined,
    foedselsDato: undefined,
  };
  if (!values) {
    return errors;
  }
  const { foedselsDato, antallBarn } = values;

  const antallBarnError = validateAntallBarn(antallBarn, familieHendelseType);
  if (antallBarnError) {
    errors.antallBarn = antallBarnError;
  }
  const fodselsdatoCrossValidationError = validateFodselsdatoer(foedselsDato, otherFodselsdato);
  if (fodselsdatoCrossValidationError) {
    errors.foedselsDato = fodselsdatoCrossValidationError;
  }

  return errors;
};*/

export default OmsorgOgAdopsjonPanel;
