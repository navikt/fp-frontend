import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage, useIntl } from 'react-intl';
import { Alert, Label, BodyShort, HStack } from '@navikt/ds-react';

import { DateLabel, VerticalSpacer, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { Datepicker, InputField } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidInteger, maxValue, minValue, required } from '@navikt/ft-form-validators';
import { FaktaBegrunnelseTextFieldNew, isFieldEdited } from '@navikt/fp-fakta-felles';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, FamilieHendelse, Soknad } from '@navikt/fp-types';
import { BekreftTerminbekreftelseAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import { useFormContext } from 'react-hook-form';
import styles from './termindatoFaktaForm.module.css';

const minValue1 = minValue(1);
const maxValue9 = maxValue(9);

const erTerminbekreftelseUtstedtForTidlig = (
  isFormValidAndSubmitted: boolean,
  utstedtdato?: string,
  termindato?: string,
): boolean =>
  isFormValidAndSubmitted && !moment(utstedtdato).isAfter(moment(termindato).subtract(18, 'weeks').subtract(4, 'days'));

export type FormValues = {
  utstedtdato?: string;
  termindato?: string;
  antallBarn?: number;
  begrunnelse?: string;
};

interface OwnProps {
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
  readOnly: boolean;
  submittable: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

interface StaticFunctions {
  buildInitialValues: (soknad: Soknad, familiehendelse: FamilieHendelse, aksjonspunkt: Aksjonspunkt) => FormValues;
  transformValues: (values: FormValues) => BekreftTerminbekreftelseAp;
}

/**
 * TermindatoFaktaForm
 *
 * Setter opp aksjonspunktet for avklaring av termindato (Fødselsvilkåret).
 */
export const TermindatoFaktaForm: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  soknad,
  gjeldendeFamiliehendelse,
  submittable,
  alleMerknaderFraBeslutter,
}) => {
  const intl = useIntl();
  const editedStatus = isFieldEdited(soknad, gjeldendeFamiliehendelse);

  const {
    watch,

    formState: { isValid, isSubmitted },
  } = useFormContext<FormValues>();

  const termindato = watch('termindato');
  const utstedtdato = watch('utstedtdato');
  const begrunnelse = watch('begrunnelse');
  const isForTidligTerminbekreftelse = erTerminbekreftelseUtstedtForTidlig(
    isValid && isSubmitted,
    utstedtdato,
    termindato,
  );

  const { avklartBarn } = gjeldendeFamiliehendelse;
  const fodselsdatoTps = avklartBarn && avklartBarn.length > 0 ? avklartBarn[0].fodselsdato : undefined;
  const antallBarnTps = avklartBarn ? avklartBarn.length : 0;
  const isOverridden = gjeldendeFamiliehendelse.erOverstyrt || false;

  return (
    <>
      <FaktaGruppe
        title={intl.formatMessage({ id: 'TermindatoFaktaForm.ApplicationInformation' })}
        merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktCode.TERMINBEKREFTELSE]}
      >
        <HStack gap="4">
          <Datepicker
            name="utstedtdato"
            label={intl.formatMessage({ id: 'TermindatoFaktaForm.UtstedtDato' })}
            validate={[required, hasValidDate]}
            isReadOnly={readOnly}
            isEdited={editedStatus.utstedtdato}
          />
          <Datepicker
            name="termindato"
            label={intl.formatMessage({ id: 'TermindatoFaktaForm.Termindato' })}
            validate={[required, hasValidDate]}
            isReadOnly={readOnly}
            isEdited={editedStatus.termindato}
          />
          <InputField
            name="antallBarn"
            label={intl.formatMessage({ id: 'TermindatoFaktaForm.AntallBarn' })}
            parse={value => {
              const parsedValue = parseInt(value.toString(), 10);
              return Number.isNaN(parsedValue) ? value : parsedValue;
            }}
            validate={[required, hasValidInteger, minValue1, maxValue9]}
            readOnly={readOnly}
            className={styles.bredde}
            isEdited={editedStatus.antallBarn}
          />
        </HStack>
      </FaktaGruppe>
      {fodselsdatoTps && !isOverridden && (
        <FaktaGruppe title={intl.formatMessage({ id: 'TermindatoFaktaForm.OpplysningerTPS' })}>
          <HStack gap="10">
            <div>
              <Label size="small">
                <FormattedMessage id="TermindatoFaktaForm.FodselsdatoTps" />
              </Label>
              <VerticalSpacer fourPx />
              <BodyShort size="small">
                <DateLabel dateString={fodselsdatoTps} />
              </BodyShort>
            </div>
            <div>
              <Label size="small">
                <FormattedMessage id="TermindatoFaktaForm.AntallBarnTps" />
              </Label>
              <VerticalSpacer fourPx />
              <BodyShort size="small">{antallBarnTps}</BodyShort>
            </div>
          </HStack>
        </FaktaGruppe>
      )}
      <VerticalSpacer sixteenPx />
      <FaktaBegrunnelseTextFieldNew isSubmittable={submittable} isReadOnly={readOnly} hasBegrunnelse={!!begrunnelse} />
      {isForTidligTerminbekreftelse && (
        <>
          <VerticalSpacer sixteenPx />
          <Alert variant="warning" className={styles.marginBottom}>
            <FormattedMessage id="TermindatoFaktaForm.AdvarselForTidligUtstedtdato" />
          </Alert>
        </>
      )}
    </>
  );
};

TermindatoFaktaForm.buildInitialValues = (soknad, familiehendelse, aksjonspunkt): FormValues => {
  const antallBarn = soknad.antallBarn ? soknad.antallBarn : NaN;
  return {
    utstedtdato: familiehendelse.utstedtdato ? familiehendelse.utstedtdato : soknad.utstedtdato,
    termindato: familiehendelse.termindato ? familiehendelse.termindato : soknad.termindato,
    antallBarn: familiehendelse.antallBarnTermin ? familiehendelse.antallBarnTermin : antallBarn,
    ...FaktaBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkt),
  };
};

TermindatoFaktaForm.transformValues = (values: FormValues): BekreftTerminbekreftelseAp => ({
  kode: AksjonspunktCode.TERMINBEKREFTELSE,
  utstedtdato: values.utstedtdato!,
  termindato: values.termindato!,
  antallBarn: values.antallBarn!,
  ...FaktaBegrunnelseTextFieldNew.transformValues(values),
});

export default TermindatoFaktaForm;
