import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage, useIntl } from 'react-intl';
import { Alert, Label, BodyShort } from '@navikt/ds-react';

import {
  DateLabel, VerticalSpacer, FaktaGruppe, FlexContainer, FlexRow, FlexColumn,
} from '@navikt/ft-ui-komponenter';
import { Datepicker, InputField, formHooks } from '@navikt/ft-form-hooks';
import {
  hasValidDate, hasValidInteger, maxValue, minValue, required,
} from '@navikt/ft-form-validators';
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

  const { watch } = formHooks.useFormContext<FormValues>();

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
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Datepicker
                name="utstedtdato"
                label={intl.formatMessage({ id: 'TermindatoFaktaForm.UtstedtDato' })}
                validate={[required, hasValidDate]}
                isReadOnly={readOnly}
                isEdited={editedStatus.utstedtdato}
              />
            </FlexColumn>
            <FlexColumn>
              <Datepicker
                name="termindato"
                label={intl.formatMessage({ id: 'TermindatoFaktaForm.Termindato' })}
                validate={[required, hasValidDate]}
                isReadOnly={readOnly}
                isEdited={editedStatus.termindato}
              />
            </FlexColumn>
            <FlexColumn>
              <InputField
                name="antallBarn"
                label={intl.formatMessage({ id: 'TermindatoFaktaForm.AntallBarn' })}
                parse={(value: string) => {
                  const parsedValue = parseInt(value, 10);
                  return Number.isNaN(parsedValue) ? value : parsedValue;
                }}
                validate={[required, hasValidInteger, minValue1, maxValue9]}
                readOnly={readOnly}
                className={styles.bredde}
                isEdited={editedStatus.antallBarn}
              />
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </FaktaGruppe>
      {fodselsdatoTps && !isOverridden && (
        <FaktaGruppe title={intl.formatMessage({ id: 'TermindatoFaktaForm.OpplysningerTPS' })}>
          <FlexContainer>
            <FlexRow>
              <FlexColumn className={styles.leftCol}>
                <Label size="small"><FormattedMessage id="TermindatoFaktaForm.FodselsdatoTps" /></Label>
                <VerticalSpacer fourPx />
                <BodyShort size="small"><DateLabel dateString={fodselsdatoTps} /></BodyShort>
              </FlexColumn>
              <FlexColumn>
                <Label size="small"><FormattedMessage id="TermindatoFaktaForm.AntallBarnTps" /></Label>
                <VerticalSpacer fourPx />
                <BodyShort size="small">{antallBarnTps}</BodyShort>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </FaktaGruppe>
      )}
      <VerticalSpacer sixteenPx />
      <FaktaBegrunnelseTextFieldNew isSubmittable={submittable} isReadOnly={readOnly} hasBegrunnelse={!!begrunnelse} />
      {isForTidligTerminbekreftelse && (
        <>
          <VerticalSpacer sixteenPx />
          <Alert variant="warning" className={styles.marginBottom}>
            <FormattedMessage
              id="TermindatoFaktaForm.AdvarselForTidligUtstedtdato"
            />
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
  kode: aksjonspunktCodes.TERMINBEKREFTELSE,
  utstedtdato: values.utstedtdato,
  termindato: values.termindato,
  antallBarn: values.antallBarn,
  ...FaktaBegrunnelseTextFieldNew.transformValues(values),
});

export default TermindatoFaktaForm;
