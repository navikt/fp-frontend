import React, { FunctionComponent } from 'react';
import { createSelector } from 'reselect';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { connect } from 'react-redux';
import { InjectedFormProps } from 'redux-form';
import moment from 'moment';
import Panel from 'nav-frontend-paneler';
import { Column, Row } from 'nav-frontend-grid';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { Normaltekst, Undertekst, Undertittel } from 'nav-frontend-typografi';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import { ISO_DATE_FORMAT, required, getKodeverknavnFn } from '@fpsak-frontend/utils';
import { DateLabel, VerticalSpacer } from '@fpsak-frontend/shared-components';
import {
  RadioGroupField, RadioOption, behandlingForm, behandlingFormValueSelector, hasBehandlingFormErrorsOfType, isBehandlingFormDirty,
  isBehandlingFormSubmitting,
} from '@fpsak-frontend/form';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import {
  ProsessStegBegrunnelseTextField, ProsessStegSubmitButton,
} from '@fpsak-frontend/prosess-felles';
import {
  Aksjonspunkt, Behandling, FamilieHendelse, Kodeverk, KodeverkMedNavn, Soknad, Vilkar, Behandlingsresultat,
} from '@fpsak-frontend/types';

import styles from './erSoknadsfristVilkaretOppfyltForm.less';

const findRadioButtonTextCode = (erVilkarOk?: boolean) => (erVilkarOk
  ? 'ErSoknadsfristVilkaretOppfyltForm.VilkarOppfylt' : 'ErSoknadsfristVilkaretOppfyltForm.VilkarIkkeOppfylt');

const findSoknadsfristDate = (mottattDato: string, antallDagerSoknadLevertForSent?: string) => (
  moment(mottattDato)
    .subtract(antallDagerSoknadLevertForSent, 'days')
    .format(ISO_DATE_FORMAT)
);

const isEdited = (hasAksjonspunkt: boolean, erVilkarOk?: boolean) => hasAksjonspunkt && erVilkarOk !== undefined;
const showAvslagsarsak = (erVilkarOk?: boolean, avslagsarsak?: Behandlingsresultat['avslagsarsak']) => erVilkarOk === false && avslagsarsak;

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  vilkar: Vilkar[];
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
  aksjonspunkter: Aksjonspunkt[];
  status: string;
  submitCallback: (aksjonspunktData: { kode: string }[]) => Promise<any>;
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
  behandlingId,
  behandlingVersjon,
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
        {showAvslagsarsak(erVilkarOk, behandlingsresultat?.avslagsarsak) && (
          <Normaltekst>{getKodeverknavn(behandlingsresultat.avslagsarsak, vilkarType.SOKNADFRISTVILKARET)}</Normaltekst>
        )}
      </>
    )}
    <ProsessStegBegrunnelseTextField readOnly={readOnly} />
    <VerticalSpacer sixteenPx />
    <ProsessStegSubmitButton
      formName={formProps.form}
      behandlingId={behandlingId}
      behandlingVersjon={behandlingVersjon}
      isReadOnly={readOnly}
      isSubmittable={!readOnlySubmitButton}
      isBehandlingFormSubmitting={isBehandlingFormSubmitting}
      isBehandlingFormDirty={isBehandlingFormDirty}
      hasBehandlingFormErrorsOfType={hasBehandlingFormErrorsOfType}
    />
  </form>
);

export const buildInitialValues = createSelector([
  (ownProps: PureOwnProps) => ownProps.aksjonspunkter, (ownProps: PureOwnProps) => ownProps.status],
(aksjonspunkter, status) => ({
  erVilkarOk: isAksjonspunktOpen(aksjonspunkter[0].status.kode) ? undefined : vilkarUtfallType.OPPFYLT === status,
  ...ProsessStegBegrunnelseTextField.buildInitialValues(aksjonspunkter),
}));

interface FormValues {
  erVilkarOk: boolean;
  begrunnelse: string;
}

const transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]) => ({
  erVilkarOk: values.erVilkarOk,
  kode: aksjonspunkter[0].definisjon.kode,
  ...ProsessStegBegrunnelseTextField.transformValues(values),
});

const findDate = createSelector([
  (ownProps: PureOwnProps) => ownProps.soknad,
  (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse],
(soknad, familiehendelse) => {
  if (soknad.soknadType.kode === soknadType.FODSEL) {
    const soknadFodselsdato = soknad.fodselsdatoer ? Object.values(soknad.fodselsdatoer)[0] : undefined;
    const fodselsdato = familiehendelse && familiehendelse.avklartBarn.length > 0 ? familiehendelse.avklartBarn[0].fodselsdato : soknadFodselsdato;
    const termindato = familiehendelse && familiehendelse.termindato ? familiehendelse.termindato : soknad.termindato;
    return fodselsdato || termindato;
  }
  return familiehendelse && familiehendelse.omsorgsovertakelseDato ? familiehendelse.omsorgsovertakelseDato : soknad.omsorgsovertakelseDato;
});

const findTextCode = createSelector([
  (ownProps: PureOwnProps) => ownProps.soknad, (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse], (soknad, familiehendelse) => {
  if (soknad.soknadType.kode === soknadType.FODSEL) {
    const soknadFodselsdato = soknad.fodselsdatoer ? Object.values(soknad.fodselsdatoer)[0] : undefined;
    const fodselsdato = familiehendelse && familiehendelse.avklartBarn.length > 0 ? familiehendelse.avklartBarn[0].fodselsdato : soknadFodselsdato;
    return fodselsdato ? 'ErSoknadsfristVilkaretOppfyltForm.Fodselsdato' : 'ErSoknadsfristVilkaretOppfyltForm.Termindato';
  }
  return 'ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato';
});

const formName = 'ErSoknadsfristVilkaretOppfyltForm';

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
(submitCallback, aksjonspunkter) => (values: FormValues) => submitCallback([transformValues(values, aksjonspunkter)]));

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const {
    aksjonspunkter, vilkar, alleKodeverk,
  } = initialOwnProps;
  const vilkarCodes = aksjonspunkter.map((a) => a.vilkarType.kode);
  const antallDagerSoknadLevertForSent = vilkar
    .find((v) => vilkarCodes.includes(v.vilkarType.kode)).merknadParametere.antallDagerSoeknadLevertForSent;
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk, kodeverkTyper);

  return (state: any, ownProps: PureOwnProps) => {
    const { behandlingId, behandlingVersjon } = ownProps;
    return {
      getKodeverknavn,
      antallDagerSoknadLevertForSent,
      onSubmit: lagSubmitFn(ownProps),
      initialValues: buildInitialValues(ownProps),
      dato: findDate(ownProps),
      textCode: findTextCode(ownProps),
      hasAksjonspunkt: aksjonspunkter.length > 0,
      ...behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'textCode', 'dato', 'erVilkarOk'),
    };
  };
};

export default connect(mapStateToPropsFactory)(injectIntl(behandlingForm({
  form: formName,
})(ErSoknadsfristVilkaretOppfyltFormImpl)));
