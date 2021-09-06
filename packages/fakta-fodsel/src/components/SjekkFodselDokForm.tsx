import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import {
  FieldArray, formValueSelector, InjectedFormProps, reduxForm,
} from 'redux-form';
import { createSelector } from 'reselect';
import { Column } from 'nav-frontend-grid';

import { FaktaBegrunnelseTextField, FieldEditedInfo, isFieldEdited } from '@fpsak-frontend/fakta-felles';
import {
  ArrowBox, VerticalSpacer, FaktaGruppe,
} from '@fpsak-frontend/shared-components';
import FodselSammenligningIndex from '@fpsak-frontend/prosess-fakta-fodsel-sammenligning';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt, FamilieHendelse, Kodeverk, Soknad, AvklartBarn,
} from '@fpsak-frontend/types';
import { SjekkManglendeFodselAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import avklartBarnFieldArray from './AvklartBarnFieldArray';

import styles from './SjekkFodselDokForm.less';

export const AVKLARTE_BARN_FORM_NAME_PREFIX = 'avklartBarn';

export const avklarteBarnFieldArrayName = 'avklartBarn';

type CustomAvklartBarn = {
  fodselsdato: string;
  dodsdato?: string;
  isBarnDodt?: boolean;
}

const createNewChildren = (antallBarnFraSoknad: number): CustomAvklartBarn[] => {
  let antallBarn = antallBarnFraSoknad;
  if (antallBarn === 0 || !antallBarn) {
    antallBarn = 1;
  }
  const childrenArray: CustomAvklartBarn[] = [];
  while (antallBarn > 0) {
    childrenArray.push({ fodselsdato: '', isBarnDodt: false, dodsdato: '' });
    antallBarn -= 1;
  }
  return childrenArray;
};

type FormValues = {
  fodselsdato?: string;
  dokumentasjonForeligger?: boolean;
  brukAntallBarnITps?: boolean;
  avklartBarn?: CustomAvklartBarn[];
  begrunnelse?: string;
  antallBarnFodt?: number;
}

interface PureOwnProps {
  gjeldendeFamiliehendelse: FamilieHendelse;
  aksjonspunkt: Aksjonspunkt;
  soknad: Soknad;
  avklartBarn: AvklartBarn[];
  submitHandler: (data: SjekkManglendeFodselAp) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  behandlingType: Kodeverk;
  soknadOriginalBehandling?: Soknad;
  familiehendelseOriginalBehandling?: FamilieHendelse;
}

interface MappedOwnProps {
  initialValues: FormValues;
  avklartBarn?: any;
  dokumentasjonForeligger?: boolean;
  dokumentasjonForeliggerIsEdited?: boolean;
  termindato?: string;
  vedtaksDatoSomSvangerskapsuke?: number;
  onSubmit: (values: FormValues) => any;
}

/**
 * FodselInfoPanel
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for avklaring av manglende fødsel (Fødselsvilkåret).
 */
export const SjekkFodselDokForm: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps & WrappedComponentProps> = ({
  intl,
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
      title={intl.formatMessage({ id: 'SjekkFodselDokForm.DokumentasjonAvFodsel' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL]}
    >
      <div className={styles.horizontalForm}>
        <RadioGroupField name="dokumentasjonForeligger" validate={[required]} readOnly={readOnly} isEdited={dokumentasjonForeliggerIsEdited}>
          <RadioOption label={<FormattedMessage id="SjekkFodselDokForm.DokumentasjonForeligger" />} value />
          <RadioOption label={<FormattedMessage id="SjekkFodselDokForm.DokumentasjonForeliggerIkke" />} value={false} />
        </RadioGroupField>
      </div>

      {dokumentasjonForeligger && (
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

const addIsBarnDodt = (avklarteBarn: AvklartBarn[]): CustomAvklartBarn[] => {
  const avklarteBarnMedDodFlagg: CustomAvklartBarn[] = [];
  avklarteBarn.forEach((barn, index) => {
    avklarteBarnMedDodFlagg.push(barn);
    if (barn.dodsdato) {
      avklarteBarnMedDodFlagg[index].isBarnDodt = true;
    }
  });
  return avklarteBarnMedDodFlagg;
};

const hentAlleBarn = (avklarteBarn: CustomAvklartBarn[]): AvklartBarn[] => {
  const komplettBarn: AvklartBarn[] = [];
  avklarteBarn.forEach((barn, index) => {
    komplettBarn.push(barn);
    if (!barn.isBarnDodt) {
      // @ts-ignore Fiks
      komplettBarn[index].dodsdato = null;
    }
  });
  return komplettBarn;
};

export const buildInitialValues = createSelector([
  (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse,
  (ownProps: PureOwnProps) => ownProps.aksjonspunkt,
  (ownProps: PureOwnProps) => ownProps.soknad.antallBarn],
(familiehendelse, aksjonspunkt, soknadAntallBarn): FormValues => ({
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
    (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse],
  (soknad, gjeldendeFamiliehendelse): FieldEditedInfo => (
    isFieldEdited(soknad, gjeldendeFamiliehendelse)
  ),
);

const transformValues = (values: FormValues, fodselInfo: AvklartBarn[]): SjekkManglendeFodselAp => ({
  kode: aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL,
  dokumentasjonForeligger: values.dokumentasjonForeligger,
  uidentifiserteBarn: hentAlleBarn(values.avklartBarn),
  brukAntallBarnITps: fodselInfo && !!fodselInfo.length ? values.brukAntallBarnITps : false,
  ...FaktaBegrunnelseTextField.transformValues(values),
});

export const sjekkFodselDokForm = 'SjekkFodselDokForm';

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitHandler,
  (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse],
(submitCallback, gjeldendeFamiliehendelse) => (
  values: FormValues,
) => submitCallback(transformValues(values, gjeldendeFamiliehendelse.avklartBarn)));

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => {
  const { gjeldendeFamiliehendelse } = ownProps;
  return {
    onSubmit: lagSubmitFn(ownProps),
    initialValues: buildInitialValues(ownProps),
    avklartBarn: formValueSelector(sjekkFodselDokForm)(state, 'avklartBarn'),
    dokumentasjonForeliggerIsEdited: getEditedStatus(ownProps).dokumentasjonForeligger,
    dokumentasjonForeligger: formValueSelector(sjekkFodselDokForm)(state, 'dokumentasjonForeligger'),
    termindato: gjeldendeFamiliehendelse.termindato,
    vedtaksDatoSomSvangerskapsuke: gjeldendeFamiliehendelse.vedtaksDatoSomSvangerskapsuke,
  };
};

export default connect(mapStateToProps)(reduxForm({
  form: sjekkFodselDokForm,
  destroyOnUnmount: false,
})(injectIntl(SjekkFodselDokForm)));
