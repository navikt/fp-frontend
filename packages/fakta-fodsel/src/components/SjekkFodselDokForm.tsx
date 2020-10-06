import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { FieldArray, InjectedFormProps } from 'redux-form';
import { createSelector } from 'reselect';
import { Column } from 'nav-frontend-grid';

import { FaktaBegrunnelseTextField, isFieldEdited } from '@fpsak-frontend/fakta-felles';
import {
  ArrowBox, VerticalSpacer, FaktaGruppe,
} from '@fpsak-frontend/shared-components';
import FodselSammenligningIndex from '@fpsak-frontend/prosess-fakta-fodsel-sammenligning';
import {
  RadioGroupField, RadioOption, behandlingForm, behandlingFormValueSelector,
} from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt, FamilieHendelse, FamilieHendelseSamling, Kodeverk, Personopplysninger, Soknad,
} from '@fpsak-frontend/types';

import avklartBarnFieldArray from './AvklartBarnFieldArray';

import styles from './SjekkFodselDokForm.less';

export const AVKLARTE_BARN_FORM_NAME_PREFIX = 'avklartBarn';

export const avklarteBarnFieldArrayName = 'avklartBarn';

const createNewChildren = (antallBarnFraSoknad: number) => {
  let antallBarn = antallBarnFraSoknad;
  if (antallBarn === 0 || !antallBarn) {
    antallBarn = 1;
  }
  const childrenArray = [];
  while (antallBarn > 0) {
    childrenArray.push({ fodselsdato: '', isBarnDodt: false, dodsDato: '' });
    antallBarn -= 1;
  }
  return childrenArray;
};

interface OwnProps {
  readOnly: boolean;
  dokumentasjonForeligger?: boolean;
  avklartBarn?: FamilieHendelse['avklartBarn'];
  dokumentasjonForeliggerIsEdited?: boolean;
  submittable: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  behandlingType: Kodeverk;
  termindato?: string;
  vedtaksDatoSomSvangerskapsuke?: string;
  soknad: Soknad;
  soknadOriginalBehandling: Soknad;
  familiehendelseOriginalBehandling: FamilieHendelseSamling;
  initialValues: {
    begrunnelse: string;
  };
}

/**
 * FodselInfoPanel
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for avklaring av manglende fødsel (Fødselsvilkåret).
 */
export const SjekkFodselDokForm: FunctionComponent<OwnProps & InjectedFormProps> = ({
  readOnly,
  dokumentasjonForeliggerIsEdited,
  dokumentasjonForeligger,
  initialValues,
  submittable,
  avklartBarn,
  behandlingType,
  termindato,
  vedtaksDatoSomSvangerskapsuke,
  soknad,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
  alleMerknaderFraBeslutter,
}) => (
  <>
    <FodselSammenligningIndex
      behandlingsTypeKode={behandlingType.kode}
      avklartBarn={avklartBarn}
      termindato={termindato}
      vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke}
      soknad={soknad}
      soknadOriginalBehandling={soknadOriginalBehandling}
      familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
    />
    <FaktaGruppe
      titleCode="SjekkFodselDokForm.DokumentasjonAvFodsel"
      merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL]}
    >
      <div className={styles.horizontalForm}>
        <RadioGroupField name="dokumentasjonForeligger" validate={[required]} readOnly={readOnly} isEdited={dokumentasjonForeliggerIsEdited}>
          <RadioOption label={<FormattedMessage id="SjekkFodselDokForm.DokumentasjonForeligger" />} value />
          <RadioOption label={<FormattedMessage id="SjekkFodselDokForm.DokumentasjonForeliggerIkke" />} value={false} />
        </RadioGroupField>
      </div>

      {dokumentasjonForeligger
      && (
        <div className={styles.clearfix}>
          <Column xs="12">
            <ArrowBox>
              <FormattedMessage id="SjekkFodselDokForm.FyllInnDokumenterteOpplysninger" />
              <FieldArray<any>
                name={avklarteBarnFieldArrayName}
                component={avklartBarnFieldArray}
                readOnly={readOnly}
                avklartBarn={avklartBarn}
              />
            </ArrowBox>
          </Column>
        </div>
      )}
    </FaktaGruppe>
    <VerticalSpacer sixteenPx />
    <FaktaBegrunnelseTextField isSubmittable={submittable} isReadOnly={readOnly} hasBegrunnelse={!!initialValues.begrunnelse} />
  </>
);

SjekkFodselDokForm.defaultProps = {
  dokumentasjonForeliggerIsEdited: false,
  avklartBarn: [],
};

const addIsBarnDodt = (avklarteBarn: FamilieHendelse['avklartBarn']) => {
  const avklarteBarnMedDodFlagg: any = [];
  avklarteBarn.forEach((barn: any, index: any) => {
    avklarteBarnMedDodFlagg.push(barn);
    if (barn.dodsdato) {
      avklarteBarnMedDodFlagg[index].isBarnDodt = true;
    }
  });
  return avklarteBarnMedDodFlagg;
};

const allaBarn = (avklarteBarn: FamilieHendelse['avklartBarn']) => {
  const komplettBarn: any = [];
  avklarteBarn.forEach((barn: any, index: any) => {
    komplettBarn.push(barn);
    if (!barn.isBarnDodt) {
      komplettBarn[index].dodsdato = null;
    }
  });
  return komplettBarn;
};

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  gjeldendeFamiliehendelse: FamilieHendelse;
  aksjonspunkt: Aksjonspunkt;
  soknad: Soknad;
  personopplysninger: Personopplysninger;
  avklartBarn: FamilieHendelse['avklartBarn'];
  submitHandler: (values: any) => any;
}

export const buildInitialValues = createSelector([
  (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse,
  (ownProps: PureOwnProps) => ownProps.aksjonspunkt,
  (ownProps: PureOwnProps) => ownProps.soknad.antallBarn],
(familiehendelse, aksjonspunkt, soknadAntallBarn) => ({
  dokumentasjonForeligger: familiehendelse.dokumentasjonForeligger !== null
    ? familiehendelse.dokumentasjonForeligger : undefined,
  brukAntallBarnITps: familiehendelse.brukAntallBarnFraTps !== null
    ? familiehendelse.brukAntallBarnFraTps : undefined,
  avklartBarn: (familiehendelse.avklartBarn && familiehendelse.avklartBarn.length > 0)
    ? addIsBarnDodt(familiehendelse.avklartBarn) : createNewChildren(soknadAntallBarn || 0),
  ...FaktaBegrunnelseTextField.buildInitialValues(aksjonspunkt),
}));

const getEditedStatus = createSelector(
  [(ownProps: PureOwnProps) => ownProps.soknad,
    (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse,
    (ownProps: PureOwnProps) => ownProps.personopplysninger],
  (soknad, familiehendelse, personopplysning) => (
    isFieldEdited(soknad, familiehendelse, personopplysning)
  ),
);

const getAntallBarn = (brukAntallBarnITps: boolean, antallBarnLagret: number, antallBarnFraSoknad: number, antallBarnFraTps: number) => {
  if (antallBarnFraTps === 0) {
    return antallBarnLagret;
  }
  return brukAntallBarnITps ? antallBarnFraTps : antallBarnFraSoknad;
};

const transformValues = (values: any, antallBarnFraSoknad: number, antallBarnFraTps: number, fodselInfo: FamilieHendelse['avklartBarn']) => ({
  kode: aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL,
  fodselsdato: values.fodselsdato,
  antallBarnFodt: values.dokumentasjonForeligger
    ? getAntallBarn(values.brukAntallBarnITps, values.antallBarnFodt, antallBarnFraSoknad, antallBarnFraTps) : undefined,
  dokumentasjonForeligger: values.dokumentasjonForeligger,
  uidentifiserteBarn: allaBarn(values.avklartBarn),
  brukAntallBarnITps: fodselInfo && !!fodselInfo.length ? values.brukAntallBarnITps : false,
  ...FaktaBegrunnelseTextField.transformValues(values),
});

export const sjekkFodselDokForm = 'SjekkFodselDokForm';

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitHandler,
  (ownProps: PureOwnProps) => ownProps.avklartBarn,
  (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse,
  (ownProps: PureOwnProps) => ownProps.soknad],
(submitCallback, avklartBarn, gjeldendeFamiliehendelse, soknad) => (values: any) => submitCallback(transformValues(values, soknad.antallBarn,
  avklartBarn.length, gjeldendeFamiliehendelse.avklartBarn)));

const mapStateToProps = (state: any, ownProps: PureOwnProps) => {
  const {
    behandlingId, behandlingVersjon, gjeldendeFamiliehendelse,
  } = ownProps;
  return {
    onSubmit: lagSubmitFn(ownProps),
    initialValues: buildInitialValues(ownProps),
    fodselInfo: gjeldendeFamiliehendelse.avklartBarn,
    avklartBarn: behandlingFormValueSelector(sjekkFodselDokForm, behandlingId, behandlingVersjon)(state, 'avklartBarn'),
    dokumentasjonForeliggerIsEdited: getEditedStatus(ownProps).dokumentasjonForeligger,
    dokumentasjonForeligger: behandlingFormValueSelector(sjekkFodselDokForm, behandlingId, behandlingVersjon)(state, 'dokumentasjonForeligger'),
    termindato: gjeldendeFamiliehendelse.termindato,
    vedtaksDatoSomSvangerskapsuke: gjeldendeFamiliehendelse.vedtaksDatoSomSvangerskapsuke,
  };
};

export default connect(mapStateToProps)(behandlingForm({
  form: sjekkFodselDokForm,
})(SjekkFodselDokForm));
