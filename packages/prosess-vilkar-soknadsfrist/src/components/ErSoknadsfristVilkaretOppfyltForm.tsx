import React, { FunctionComponent } from 'react';
import { createSelector } from 'reselect';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { connect } from 'react-redux';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';
import moment from 'moment';
import Panel from 'nav-frontend-paneler';
import { Column, Row } from 'nav-frontend-grid';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { Normaltekst, Undertekst, Undertittel } from 'nav-frontend-typografi';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import { ISO_DATE_FORMAT, required, getKodeverknavnFn } from '@fpsak-frontend/utils';
import { DateLabel, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import {
  ProsessStegBegrunnelseTextField, ProsessStegSubmitButton,
} from '@fpsak-frontend/prosess-felles';
import {
  Aksjonspunkt, Behandling, FamilieHendelse, Kodeverk, KodeverkMedNavn, Soknad, Vilkar,
} from '@fpsak-frontend/types';
import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import SoknadsfristAp from '@fpsak-frontend/types-avklar-aksjonspunkter/src/prosess/SoknadsfristAp';

import styles from './erSoknadsfristVilkaretOppfyltForm.less';

const findRadioButtonTextCode = (erVilkarOk?: boolean): string => (erVilkarOk
  ? 'ErSoknadsfristVilkaretOppfyltForm.VilkarOppfylt' : 'ErSoknadsfristVilkaretOppfyltForm.VilkarIkkeOppfylt');

const findSoknadsfristDate = (mottattDato: string, antallDagerSoknadLevertForSent?: string): string => (
  moment(mottattDato)
    .subtract(antallDagerSoknadLevertForSent, 'days')
    .format(ISO_DATE_FORMAT)
);

const isEdited = (hasAksjonspunkt: boolean, erVilkarOk?: boolean): boolean => hasAksjonspunkt && erVilkarOk !== undefined;

type FormValues = {
  erVilkarOk?: boolean;
  begrunnelse?: string;
}

interface PureOwnProps {
  behandlingsresultat?: Behandling['behandlingsresultat'];
  vilkar: Vilkar[];
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
  aksjonspunkter: Aksjonspunkt[];
  status: string;
  submitCallback: (aksjonspunktData: SoknadsfristAp) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

interface MappedOwnProps {
  getKodeverknavn: (kodeverk: Kodeverk, undertype?: string) => string;
  antallDagerSoknadLevertForSent?: string;
  dato?: string;
  textCode: string;
  hasAksjonspunkt: boolean;
  erVilkarOk?: boolean;
  onSubmit: (formValues: FormValues) => any;
  initialValues: FormValues;
}

/**
 * ErSoknadsfristVilkaretOppfyltForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for vurdering av søknadsfristvilkåret.
 */
export const ErSoknadsfristVilkaretOppfyltFormImpl: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps & InjectedFormProps> = ({
  intl,
  readOnly,
  readOnlySubmitButton,
  soknad,
  antallDagerSoknadLevertForSent,
  textCode,
  dato,
  erVilkarOk,
  behandlingsresultat,
  hasAksjonspunkt,
  getKodeverknavn,
  ...formProps
}) => (
  <form onSubmit={formProps.handleSubmit}>
    <Undertittel>{intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.Soknadsfrist' })}</Undertittel>
    <span className="typo-normal">
      <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart1" />
      <span className={styles.days}>
        <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart2" values={{ numberOfDays: antallDagerSoknadLevertForSent }} />
      </span>
      <FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart3" />
      {soknad.mottattDato && antallDagerSoknadLevertForSent && (
        <DateLabel dateString={findSoknadsfristDate(soknad.mottattDato, antallDagerSoknadLevertForSent)} />
      )}
    </span>
    <Row>
      <Column xs="6">
        <Panel className={styles.panel}>
          <SkjemaGruppe legend={intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.Consider' })}>
            <ul className={styles.hyphen}>
              <li><FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Question1" /></li>
              <li><FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Question2" /></li>
              <li><FormattedMessage id="ErSoknadsfristVilkaretOppfyltForm.Question3" /></li>
            </ul>
          </SkjemaGruppe>
        </Panel>
      </Column>
      <Column xs="6">
        <Panel className={styles.panelDates}>
          <Row>
            <Column xs="6">
              <Undertekst>{intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.MottattDato' })}</Undertekst>
              <span className="typo-normal">
                {soknad.mottattDato && <DateLabel dateString={soknad.mottattDato} />}
              </span>
            </Column>
            <Column xs="6">
              {textCode && <Undertekst>{intl.formatMessage({ id: textCode })}</Undertekst>}
              <span className="typo-normal">
                {dato && <DateLabel dateString={dato} />}
              </span>
            </Column>
          </Row>
          <VerticalSpacer twentyPx />
          <Row>
            <Column xs="11">
              <Undertekst>{intl.formatMessage({ id: 'ErSoknadsfristVilkaretOppfyltForm.ExplanationFromApplication' })}</Undertekst>
              <span className="typo-normal">
                {soknad.begrunnelseForSenInnsending || '-'}
              </span>
            </Column>
          </Row>
        </Panel>
      </Column>
    </Row>
    <VerticalSpacer sixteenPx />
    {!readOnly && (
      <Row>
        <Column xs="6">
          <RadioGroupField name="erVilkarOk" validate={[required]}>
            <RadioOption
              label={(
                <FormattedMessage
                  id={findRadioButtonTextCode(true)}
                  values={{
                    b: (chunks: any) => <b>{chunks}</b>,
                  }}
                />
              )}
              value
            />
            <RadioOption
              label={(
                <FormattedMessage
                  id={findRadioButtonTextCode(false)}
                  values={{
                    b: (chunks: any) => <b>{chunks}</b>,
                  }}
                />
              )}
              value={false}
            />
          </RadioGroupField>
        </Column>
      </Row>
    )}
    {readOnly && (
      <>
        <RadioGroupField name="dummy" className={styles.text} readOnly={readOnly} isEdited={isEdited(hasAksjonspunkt, erVilkarOk)}>
          {[<RadioOption
            key="dummy"
            label={(
              <FormattedMessage
                id={findRadioButtonTextCode(erVilkarOk)}
                values={{
                  b: (chunks: any) => <b>{chunks}</b>,
                }}
              />
                  )}
            value=""
          />]}
        </RadioGroupField>
        {erVilkarOk === false && !!behandlingsresultat?.avslagsarsak && (
          <Normaltekst>{getKodeverknavn(behandlingsresultat.avslagsarsak, vilkarType.SOKNADFRISTVILKARET)}</Normaltekst>
        )}
      </>
    )}
    <ProsessStegBegrunnelseTextField readOnly={readOnly} />
    <VerticalSpacer sixteenPx />
    <ProsessStegSubmitButton
      formName={formProps.form}
      isReadOnly={readOnly}
      isSubmittable={!readOnlySubmitButton}
    />
  </form>
);

export const buildInitialValues = createSelector([
  (ownProps: PureOwnProps) => ownProps.aksjonspunkter, (ownProps: PureOwnProps) => ownProps.status],
(aksjonspunkter, status): FormValues => ({
  erVilkarOk: isAksjonspunktOpen(aksjonspunkter[0].status.kode) ? undefined : vilkarUtfallType.OPPFYLT === status,
  ...ProsessStegBegrunnelseTextField.buildInitialValues(aksjonspunkter),
}));

const transformValues = (values: Required<FormValues>): SoknadsfristAp => ({
  erVilkarOk: values.erVilkarOk,
  kode: AksjonspunktKode.SOKNADSFRISTVILKARET,
  ...ProsessStegBegrunnelseTextField.transformValues(values),
});

const findDate = createSelector([
  (ownProps: PureOwnProps) => ownProps.soknad,
  (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse],
(soknad, familiehendelse): string | undefined => {
  if (soknad.soknadType.kode === soknadType.FODSEL) {
    const soknadFodselsdato = soknad.fodselsdatoer ? Object.values(soknad.fodselsdatoer)[0] : undefined;
    const fodselsdato = familiehendelse && familiehendelse.avklartBarn && familiehendelse.avklartBarn.length > 0
      ? familiehendelse.avklartBarn[0].fodselsdato : soknadFodselsdato;
    const termindato = familiehendelse && familiehendelse.termindato ? familiehendelse.termindato : soknad.termindato;
    return fodselsdato || termindato;
  }
  return familiehendelse && familiehendelse.omsorgsovertakelseDato ? familiehendelse.omsorgsovertakelseDato : soknad.omsorgsovertakelseDato;
});

const findTextCode = createSelector([
  (ownProps: PureOwnProps) => ownProps.soknad, (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse], (soknad, familiehendelse): string => {
  if (soknad.soknadType.kode === soknadType.FODSEL) {
    const soknadFodselsdato = soknad.fodselsdatoer ? Object.values(soknad.fodselsdatoer)[0] : undefined;
    const fodselsdato = familiehendelse && familiehendelse.avklartBarn && familiehendelse.avklartBarn.length > 0
      ? familiehendelse.avklartBarn[0].fodselsdato : soknadFodselsdato;
    return fodselsdato ? 'ErSoknadsfristVilkaretOppfyltForm.Fodselsdato' : 'ErSoknadsfristVilkaretOppfyltForm.Termindato';
  }
  return 'ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato';
});

const formName = 'ErSoknadsfristVilkaretOppfyltForm';

const lagSubmitFn = createSelector([(ownProps: PureOwnProps) => ownProps.submitCallback],
  (submitCallback) => (values: Required<FormValues>) => submitCallback(transformValues(values)));

const mapStateToPropsFactory = (_initialState: any, initialOwnProps: PureOwnProps) => {
  const {
    aksjonspunkter, vilkar, alleKodeverk,
  } = initialOwnProps;
  const vilkarCodes = aksjonspunkter.flatMap((a) => (a.vilkarType ? [a.vilkarType.kode] : []));
  const funnetVilkar = vilkar.find((v) => vilkarCodes.includes(v.vilkarType.kode));
  const antallDagerSoknadLevertForSent = funnetVilkar?.merknadParametere.antallDagerSoeknadLevertForSent;
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk, kodeverkTyper);

  return (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
    getKodeverknavn,
    antallDagerSoknadLevertForSent,
    onSubmit: lagSubmitFn(ownProps),
    initialValues: buildInitialValues(ownProps),
    dato: findDate(ownProps),
    textCode: findTextCode(ownProps),
    hasAksjonspunkt: aksjonspunkter.length > 0,
    ...formValueSelector(formName)(state, 'textCode', 'dato', 'erVilkarOk'),
  });
};

export default connect(mapStateToPropsFactory)(reduxForm({
  form: formName,
  destroyOnUnmount: false,
})(injectIntl(ErSoknadsfristVilkaretOppfyltFormImpl)));
