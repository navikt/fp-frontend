import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage, useIntl } from 'react-intl';
import { useFormContext } from 'react-hook-form';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';
import AlertStripe from 'nav-frontend-alertstriper';

import { DateLabel, VerticalSpacer, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { Datepicker, InputField } from '@fpsak-frontend/form-hooks';
import {
  hasValidDate, hasValidInteger, maxValue, minValue, required,
} from '@navikt/ft-utils';
import { FaktaBegrunnelseTextFieldNew, isFieldEdited } from '@fpsak-frontend/fakta-felles';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt, FamilieHendelse, Soknad } from '@fpsak-frontend/types';
import { BekreftTerminbekreftelseAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import styles from './termindatoFaktaForm.less';

const minValue1 = minValue(1);
const maxValue9 = maxValue(9);

const erTerminbekreftelseUtstedtForTidlig = (utstedtdato?: string, termindato?: string): boolean => utstedtdato !== undefined
  && termindato !== undefined
  && !moment(utstedtdato).isAfter(moment(termindato).subtract(18, 'weeks').subtract(4, 'days'));

export type FormValues = {
  utstedtdato?: string;
  termindato?: string;
  antallBarn?: number;
  begrunnelse?: string;
};

interface OwnProps {
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
  aksjonspunkt: Aksjonspunkt;
  readOnly: boolean;
  submittable: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface StaticFunctions {
  buildInitialValues?: (soknad: Soknad, familiehendelse: FamilieHendelse, aksjonspunkt: Aksjonspunkt) => FormValues;
  transformValues?: (values: FormValues) => BekreftTerminbekreftelseAp;
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

  const { watch } = useFormContext<FormValues>();

  const termindato = watch('termindato');
  const utstedtdato = watch('utstedtdato');
  const begrunnelse = watch('begrunnelse');
  const isForTidligTerminbekreftelse = erTerminbekreftelseUtstedtForTidlig(utstedtdato, termindato);

  const { avklartBarn } = gjeldendeFamiliehendelse;
  const fodselsdatoTps = avklartBarn && avklartBarn.length > 0 ? avklartBarn[0].fodselsdato : undefined;
  const antallBarnTps = avklartBarn ? avklartBarn.length : 0;
  const isOverridden = gjeldendeFamiliehendelse.erOverstyrt || false;

  return (
    <>
      <FaktaGruppe
        title={intl.formatMessage({ id: 'TermindatoFaktaForm.ApplicationInformation' })}
        merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.TERMINBEKREFTELSE]}
      >
        <Row>
          <Column xs="3">
            <Datepicker
              name="utstedtdato"
              label={intl.formatMessage({ id: 'TermindatoFaktaForm.UtstedtDato' })}
              validate={[required, hasValidDate]}
              isReadOnly={readOnly}
              isEdited={editedStatus.utstedtdato}
            />
          </Column>
          <Column xs="3">
            <Datepicker
              name="termindato"
              label={intl.formatMessage({ id: 'TermindatoFaktaForm.Termindato' })}
              validate={[required, hasValidDate]}
              isReadOnly={readOnly}
              isEdited={editedStatus.termindato}
            />
          </Column>
          <Column xs="6">
            <InputField
              name="antallBarn"
              label={intl.formatMessage({ id: 'TermindatoFaktaForm.AntallBarn' })}
              parse={(value: string) => {
                const parsedValue = parseInt(value, 10);
                return Number.isNaN(parsedValue) ? value : parsedValue;
              }}
              validate={[required, hasValidInteger, minValue1, maxValue9]}
              bredde="XS"
              readOnly={readOnly}
              isEdited={editedStatus.antallBarn}
            />
          </Column>
        </Row>
      </FaktaGruppe>
      {fodselsdatoTps && !isOverridden && (
        <FaktaGruppe title={intl.formatMessage({ id: 'TermindatoFaktaForm.OpplysningerTPS' })}>
          <Row>
            <Column xs="6"><Normaltekst><FormattedMessage id="TermindatoFaktaForm.FodselsdatoTps" /></Normaltekst></Column>
            <Column xs="6"><Normaltekst><FormattedMessage id="TermindatoFaktaForm.AntallBarnTps" /></Normaltekst></Column>
          </Row>
          <Row>
            <Column xs="6">
              <Normaltekst><DateLabel dateString={fodselsdatoTps} /></Normaltekst>
            </Column>
            <Column xs="6">
              <Normaltekst>{antallBarnTps}</Normaltekst>
            </Column>
          </Row>
        </FaktaGruppe>
      )}
      <VerticalSpacer sixteenPx />
      <FaktaBegrunnelseTextFieldNew isSubmittable={submittable} isReadOnly={readOnly} hasBegrunnelse={!!begrunnelse} />
      {isForTidligTerminbekreftelse && (
        <>
          <VerticalSpacer sixteenPx />
          <AlertStripe type="advarsel" className={styles.marginBottom}>
            <FormattedMessage
              id="TermindatoFaktaForm.AdvarselForTidligUtstedtdato"
            />
          </AlertStripe>
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
  kode: aksjonspunktCodes.TERMINBEKREFTELSE,
  utstedtdato: values.utstedtdato,
  termindato: values.termindato,
  antallBarn: values.antallBarn,
  ...FaktaBegrunnelseTextFieldNew.transformValues(values),
});

export default TermindatoFaktaForm;
