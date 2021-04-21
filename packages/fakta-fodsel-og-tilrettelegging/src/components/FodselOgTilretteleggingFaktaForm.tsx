import React, { useMemo, useState, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { InjectedFormProps, reduxForm, Validator } from 'redux-form';
import moment from 'moment';
import { FormattedMessage, IntlShape } from 'react-intl';
import { createSelector } from 'reselect';
import { Normaltekst, Element } from 'nav-frontend-typografi';
import { AlertStripeInfo, AlertStripeFeil } from 'nav-frontend-alertstriper';

import tilretteleggingType from '@fpsak-frontend/kodeverk/src/tilretteleggingType';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer, AvsnittSkiller, Image,
} from '@fpsak-frontend/shared-components';
import { DatepickerField, TextAreaField } from '@fpsak-frontend/form';
import {
  hasValidDate, hasValidText, maxLength, required, requiredIfNotPristine,
} from '@fpsak-frontend/utils';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import {
  Arbeidsforhold as IayArbeidsforhold, Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Kodeverk, KodeverkMedNavn, FodselOgTilrettelegging,
  ArbeidsforholdFodselOgTilrettelegging, ArbeidsforholdTilretteleggingDato,
} from '@fpsak-frontend/types';
import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel_ny.svg';
import { BekreftSvangerskapspengerAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import TilretteleggingArbeidsforholdSection from './tilrettelegging/TilretteleggingArbeidsforholdSection';
import { finnPermisjonFieldName, skalTaHensynTilPermisjon } from './tilrettelegging/VelferdspermisjonSection';
import { finnUtbetalingsgradForTilrettelegging } from './tilrettelegging/TilretteleggingFieldArray';

import styles from './fodselOgTilretteleggingFaktaForm.less';

const FODSEL_TILRETTELEGGING_FORM = 'FodselOgTilretteleggingForm';
const maxLength1500 = maxLength(1500);
const EMPTY_LIST = [];
const getAksjonspunkt = (aksjonspunkter: Aksjonspunkt[]): string => aksjonspunkter
  .filter((ap) => ap.definisjon.kode === aksjonspunktCodes.FODSELTILRETTELEGGING)[0].begrunnelse;

const utledFormSectionName = (
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  uttakArbeidTyper: KodeverkMedNavn[],
): string => {
  let navn = '';
  if (arbeidsforhold.arbeidsgiverReferanse) {
    const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverReferanse];
    if (arbeidsgiverOpplysninger) {
      navn += arbeidsgiverOpplysninger.navn.replace(new RegExp(/\./, 'g'), '_');
    }
    navn += arbeidsforhold.arbeidsgiverReferanse;
  } else {
    const arbeidType = uttakArbeidTyper.find((type) => type.kode === arbeidsforhold.uttakArbeidType.kode);
    navn = arbeidType?.navn;
  }
  if (arbeidsforhold.internArbeidsforholdReferanse) {
    navn += arbeidsforhold.internArbeidsforholdReferanse;
  }
  return navn;
};

const erInnenforIntervall = (tilretteleggingBehovFom: string, fomDato?: string, tomDato?: string): boolean => {
  const dato = moment(tilretteleggingBehovFom);
  return !(dato.isBefore(moment(fomDato)) || dato.isAfter(moment(tomDato)));
};

const skalViseInfoAlert = (
  iayArbeidsforhold: IayArbeidsforhold[],
  tilretteleggingArbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[],
): boolean => !tilretteleggingArbeidsforhold
  .filter((ta) => ta.arbeidsgiverReferanse)
  .every((ta) => iayArbeidsforhold.some((ia) => ta.arbeidsgiverReferanse === ia.arbeidsgiverReferanse
    && erInnenforIntervall(ta.tilretteleggingBehovFom, ia.fomDato, ia.tomDato)));

const finnArbeidsforhold = (alleIafAf: IayArbeidsforhold[], internArbeidsforholdReferanse: string): IayArbeidsforhold | undefined => {
  if (alleIafAf.length > 1) {
    return alleIafAf.find((iafAf) => iafAf.arbeidsforholdId === internArbeidsforholdReferanse);
  }
  return alleIafAf.length === 1 ? alleIafAf[0] : undefined;
};

type FormValues = {
  termindato: string;
  fødselsdato: string;
  begrunnelse: string;
};

interface PureOwnProps {
  behandlingVersjon: number;
  readOnly: boolean;
  hasOpenAksjonspunkter: boolean;
  submittable: boolean;
  erOverstyrer: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
  iayArbeidsforhold: IayArbeidsforhold[];
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: BekreftSvangerskapspengerAp) => Promise<void>;
  uttakArbeidTyper: KodeverkMedNavn[],
  intl: IntlShape;
}
interface MappedOwnProps {
  fødselsdato?: string;
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
  initialValues: Partial<FormValues>;
  validate: Validator;
  onSubmit: (formValues: FormValues) => void;
}

/**
 * Svangerskapspenger
 * Presentasjonskomponent - viser tillrettlegging før svangerskapspenger
 */
export const FodselOgTilretteleggingFaktaForm: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  behandlingVersjon,
  readOnly,
  hasOpenAksjonspunkter,
  fødselsdato,
  submittable,
  arbeidsforhold,
  iayArbeidsforhold,
  erOverstyrer,
  arbeidsgiverOpplysningerPerId,
  uttakArbeidTyper,
  ...formProps
}) => {
  const visInfoAlert = useMemo(() => skalViseInfoAlert(iayArbeidsforhold, arbeidsforhold), [behandlingVersjon]);
  const [harOverstyrtUtbetalingsgrad, setOverstyrtUtbetalingsgrad] = useState(false);

  return (
    <form onSubmit={formProps.handleSubmit}>
      <FlexContainer wrap>
        <FlexRow>
          <FlexColumn>
            <DatepickerField
              name="termindato"
              label={{ id: 'FodselOgTilretteleggingFaktaForm.Termindato' }}
              validate={[required, hasValidDate]}
              readOnly={readOnly}
            />
          </FlexColumn>
          { fødselsdato && (
          <FlexColumn>
            <DatepickerField
              name="fødselsdato"
              label={{ id: 'FodselOgTilretteleggingFaktaForm.Fodselsdato' }}
              validate={[required, hasValidDate]}
              readOnly={readOnly}
            />
          </FlexColumn>
          )}
        </FlexRow>
        <VerticalSpacer sixteenPx />
        <FlexRow>
          <FlexColumn>
            <VerticalSpacer eightPx />
            <Normaltekst className={styles.arbeidsforholdTittel}>
              <FormattedMessage id="FodselOgTilretteleggingFaktaForm.ArbeidsforholdDetErSoktTilretteleggingFor" />
            </Normaltekst>
          </FlexColumn>
        </FlexRow>
        {visInfoAlert && (
          <FlexRow>
            <FlexColumn className={styles.fullBredde}>
              <VerticalSpacer eightPx />
              <AlertStripeInfo className={styles.info}>
                <FormattedMessage id="FodselOgTilretteleggingFaktaForm.UndersokNarmere" />
              </AlertStripeInfo>
            </FlexColumn>
          </FlexRow>
        )}
        <FlexRow>
          {formProps.error && (
            <FlexColumn className={styles.fullBredde}>
              <VerticalSpacer sixteenPx />
              <AlertStripeFeil>
                <FormattedMessage id={formProps.error} />
              </AlertStripeFeil>
            </FlexColumn>
          )}
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            {arbeidsforhold.map((a, index) => {
              const alleIafAf = iayArbeidsforhold.filter((iaya) => iaya.arbeidsgiverReferanse === a.arbeidsgiverReferanse);
              const af = finnArbeidsforhold(alleIafAf, a.internArbeidsforholdReferanse);
              const formSectionName = utledFormSectionName(a, arbeidsgiverOpplysningerPerId, uttakArbeidTyper);
              return (
                <React.Fragment key={formSectionName}>
                  <VerticalSpacer sixteenPx />
                  <AvsnittSkiller />
                  <VerticalSpacer twentyPx />
                  <TilretteleggingArbeidsforholdSection
                    key={formSectionName}
                    readOnly={readOnly}
                    arbeidsforhold={a}
                    formSectionName={formSectionName}
                    erOverstyrer={erOverstyrer}
                    changeField={formProps.change}
                    stillingsprosentArbeidsforhold={af ? af.stillingsprosent : 100}
                    setOverstyrtUtbetalingsgrad={setOverstyrtUtbetalingsgrad}
                    formName={FODSEL_TILRETTELEGGING_FORM}
                    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                    uttakArbeidTyper={uttakArbeidTyper}
                  />
                  {index === arbeidsforhold.length - 1 && (
                    <AvsnittSkiller />
                  )}
                </React.Fragment>
              );
            })}
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer sixteenPx />
        <FlexRow>
          <FlexColumn className={styles.halvBredde}>
            <VerticalSpacer eightPx />
            <TextAreaField
              name="begrunnelse"
              label={{ id: 'FodselOgTilretteleggingFaktaForm.BegrunnEndringene' }}
              validate={[requiredIfNotPristine, maxLength1500, hasValidText]}
              maxLength={1500}
              readOnly={readOnly}
            />
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer eightPx />
        {harOverstyrtUtbetalingsgrad && (
          <FlexRow>
            <FlexColumn>
              <Image src={advarselIkonUrl} />
            </FlexColumn>
            <FlexColumn>
              <Element><FormattedMessage id="FodselOgTilretteleggingFaktaForm.BegrunnOverstyring" /></Element>
            </FlexColumn>
          </FlexRow>
        )}
        <VerticalSpacer sixteenPx />
        <FlexRow>
          <FlexColumn>
            <FaktaSubmitButton
              formName={FODSEL_TILRETTELEGGING_FORM}
              isSubmittable={submittable && !formProps.error}
              isReadOnly={readOnly}
              hasOpenAksjonspunkter={hasOpenAksjonspunkter}
            />
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </form>
  );
};

FodselOgTilretteleggingFaktaForm.defaultProps = {
  fødselsdato: '',
};

const finnOverstyrtUtbetalingsgrad = (
  type: Kodeverk,
  stillingsprosent: number,
  stillingsprosentArbeidsforhold: number,
  overstyrtUtbetalingsgrad: string,
  oldOverstyrtUtbetalingsgrad: number,
  velferdspermisjonprosent: number,
): string => {
  if (oldOverstyrtUtbetalingsgrad || type.kode === tilretteleggingType.HEL_TILRETTELEGGING) {
    return overstyrtUtbetalingsgrad;
  }

  let erLikOverstyrtVerdi = type.kode === tilretteleggingType.INGEN_TILRETTELEGGING && parseFloat(overstyrtUtbetalingsgrad) === 100;
  if (type.kode === tilretteleggingType.DELVIS_TILRETTELEGGING) {
    erLikOverstyrtVerdi = parseFloat(overstyrtUtbetalingsgrad) === parseFloat(finnUtbetalingsgradForTilrettelegging(
      stillingsprosentArbeidsforhold, velferdspermisjonprosent, stillingsprosent,
    ));
  }

  if (erLikOverstyrtVerdi) {
    return undefined;
  }
  return overstyrtUtbetalingsgrad;
};

const transformValues = (
  values: FormValues,
  iayArbeidsforhold: IayArbeidsforhold[],
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  uttakArbeidTyper: KodeverkMedNavn[],
): BekreftSvangerskapspengerAp => ({
  kode: aksjonspunktCodes.FODSELTILRETTELEGGING,
  ...values,
  bekreftetSvpArbeidsforholdList: arbeidsforhold.map((a) => {
    const value = values[utledFormSectionName(a, arbeidsgiverOpplysningerPerId, uttakArbeidTyper)];
    const alleIafAf = iayArbeidsforhold.filter((iaya) => iaya.arbeidsgiverReferanse === a.arbeidsgiverReferanse);
    const af = finnArbeidsforhold(alleIafAf, a.internArbeidsforholdReferanse);
    const stillingsprosentArbeidsforhold = af ? af.stillingsprosent : 100;
    const velferdspermisjonprosent = a.velferdspermisjoner.filter((p) => skalTaHensynTilPermisjon(value.tilretteleggingBehovFom, p))
      .filter((p) => value[finnPermisjonFieldName(p)])
      .map((p) => p.permisjonsprosent)
      .reduce((sum, prosent) => sum + prosent, 0);
    return {
      ...value,
      tilretteleggingDatoer: value.tilretteleggingDatoer.map((t) => ({
        fom: t.fom,
        type: t.type,
        stillingsprosent: t.stillingsprosent,
        overstyrtUtbetalingsgrad: finnOverstyrtUtbetalingsgrad(t.type, t.stillingsprosent, stillingsprosentArbeidsforhold,
          t.overstyrtUtbetalingsgrad, t.oldOverstyrtUtbetalingsgrad, velferdspermisjonprosent),
      })),
      velferdspermisjoner: a.velferdspermisjoner.filter((p) => skalTaHensynTilPermisjon(value.tilretteleggingBehovFom, p)).map((p) => ({
        ...p,
        erGyldig: value[finnPermisjonFieldName(p)],
      })),
    };
  }),
});

const finnAntallDatoerMappedByDato = (datoer: string[]): Record<string, number> => datoer.reduce((acc, dato) => ({
  ...acc,
  [dato]: (acc[dato] || 0) + 1,
}), {});

export const validateForm = (
  values: Partial<FormValues>,
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  uttakArbeidTyper: KodeverkMedNavn[],
  intl: IntlShape,
) => {
  let errors = {};
  if (Object.keys(values).length === 0) {
    return errors;
  }
  const formSectionNames = arbeidsforhold.map((a) => utledFormSectionName(a, arbeidsgiverOpplysningerPerId, uttakArbeidTyper));
  const validerArbeidsforholdList = formSectionNames.map((name) => values[name]);
  const ingenTilretteleggingSkalBrukes = validerArbeidsforholdList.every((a) => (a.skalBrukes === false));
  if (ingenTilretteleggingSkalBrukes) {
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    errors._error = intl.formatMessage({ id: 'FodselOgTilretteleggingFaktaForm.MinstEnTilretteleggingMåBrukes' });
  }

  const { termindato } = values;
  Object.keys(values)
    .filter((key) => formSectionNames.includes(key))
    .filter((key) => values[key].skalBrukes)
    .forEach((key) => {
      const tilretteleggingForm = moment(values[key].tilretteleggingBehovFom);
      if (tilretteleggingForm.isValid() && !moment(termindato).isAfter(tilretteleggingForm)) {
        errors[key] = {
          tilretteleggingBehovFom: intl.formatMessage({ id: 'FodselOgTilretteleggingFaktaForm.TermindatoForDato' }),
        };
        errors = {
          ...errors,
          termindato: intl.formatMessage({ id: 'FodselOgTilretteleggingFaktaForm.TermindatoForDato' }),
        };
      }
    });

  Object.keys(values)
    .filter((key) => formSectionNames.includes(key))
    .forEach((key) => {
      const td = values[key].tilretteleggingDatoer;
      const antallMappedByDato = finnAntallDatoerMappedByDato(td.map((d) => d.fom));
      const harDuplikat = Object.keys(antallMappedByDato).some((k) => antallMappedByDato[k] > 1);
      if (harDuplikat) {
        const tilretteleggingDatoerErrors = td
          .reduce((acc, t) => (antallMappedByDato[t.fom] > 1
            ? acc.concat({ fom: intl.formatMessage({ id: 'FodselOgTilretteleggingFaktaForm.DuplikateDatoer' }) }) : acc.concat({})), []);
        errors[key] = {
          tilretteleggingDatoer: tilretteleggingDatoerErrors,
        };
      }
    });

  return errors;
};

const getArbeidsforhold = createSelector([
  (ownProps: PureOwnProps) => ownProps.svangerskapspengerTilrettelegging,
  (ownProps: PureOwnProps) => ownProps.arbeidsgiverOpplysningerPerId,
], (tilrettelegging, arbeidsgiverOpplysningerPerId): ArbeidsforholdFodselOgTilrettelegging[] => {
  const arbeidsforhold = tilrettelegging ? tilrettelegging.arbeidsforholdListe : [];

  if (arbeidsforhold === undefined || arbeidsforhold === null) {
    return EMPTY_LIST;
  }

  arbeidsforhold.sort((a, b) => {
    const arbeidsgiverOpplysningerA1 = arbeidsgiverOpplysningerPerId[a.arbeidsgiverReferanse];
    const arbeidsgiverOpplysningerA2 = arbeidsgiverOpplysningerPerId[b.arbeidsgiverReferanse];
    return arbeidsgiverOpplysningerA1 && arbeidsgiverOpplysningerA2
      ? arbeidsgiverOpplysningerA1.navn.localeCompare(arbeidsgiverOpplysningerA2.navn)
      : 0;
  });
  return arbeidsforhold;
});

const utledUtbetalingsgrad = (
  tilretteleggingsdato: ArbeidsforholdTilretteleggingDato,
  stillingsprosentArbeidsforhold: number,
  velferdspermisjonprosent: number,
): number | string | null => {
  if (tilretteleggingsdato.type.kode === tilretteleggingType.HEL_TILRETTELEGGING) {
    return null;
  }
  if (tilretteleggingsdato.overstyrtUtbetalingsgrad) {
    return tilretteleggingsdato.overstyrtUtbetalingsgrad;
  }
  return tilretteleggingsdato.type.kode === tilretteleggingType.INGEN_TILRETTELEGGING ? 100
    : finnUtbetalingsgradForTilrettelegging(stillingsprosentArbeidsforhold, velferdspermisjonprosent, tilretteleggingsdato.stillingsprosent);
};

const getInitialArbeidsforholdValues = createSelector([
  (ownProps: PureOwnProps) => ownProps.svangerskapspengerTilrettelegging,
  (ownProps: PureOwnProps) => ownProps.iayArbeidsforhold,
  (ownProps: PureOwnProps) => ownProps.arbeidsgiverOpplysningerPerId,
  (ownProps: PureOwnProps) => ownProps.uttakArbeidTyper,
], (tilrettelegging, iayArbeidsforhold, arbeidsgiverOpplysningerPerId, uttakArbeidTyper): Record<string, any> => {
  const arbeidsforhold = tilrettelegging ? tilrettelegging.arbeidsforholdListe : [];
  if (arbeidsforhold === undefined || arbeidsforhold === null) {
    return EMPTY_LIST;
  }
  return arbeidsforhold.reduce((res, a) => {
    const alleIafAf = iayArbeidsforhold.filter((iaya) => iaya.arbeidsgiverReferanse === a.arbeidsgiverReferanse);
    const af = finnArbeidsforhold(alleIafAf, a.internArbeidsforholdReferanse);
    const stillingsprosentArbeidsforhold = af ? af.stillingsprosent : 100;
    const velferdspermisjonprosent = a.velferdspermisjoner.filter((p) => p.erGyldig)
      .map((p) => p.permisjonsprosent)
      .reduce((sum, prosent) => sum + prosent, 0);

    const permisjoner = a.velferdspermisjoner.reduce((acc, permisjon) => ({
      ...acc,
      [finnPermisjonFieldName(permisjon)]: permisjon.erGyldig,
    }), {});

    return {
      ...res,
      [utledFormSectionName(a, arbeidsgiverOpplysningerPerId, uttakArbeidTyper)]: {
        ...a,
        tilretteleggingDatoer: a.tilretteleggingDatoer.map((tilretteleggingsdato) => ({
          ...tilretteleggingsdato,
          stillingsprosent: tilretteleggingsdato.stillingsprosent,
          oldOverstyrtUtbetalingsgrad: tilretteleggingsdato.overstyrtUtbetalingsgrad,
          overstyrtUtbetalingsgrad: utledUtbetalingsgrad(tilretteleggingsdato, stillingsprosentArbeidsforhold, velferdspermisjonprosent),
        })),
        ...permisjoner,
      },
    };
  }, {});
});

const getFødselsdato = createSelector([
  (ownProps: PureOwnProps) => ownProps.svangerskapspengerTilrettelegging,
], (tilrettelegging): string => (tilrettelegging ? tilrettelegging.fødselsdato : ''));

const getInitialValues = createSelector(
  [(ownProps: PureOwnProps) => ownProps.aksjonspunkter,
    (ownProps: PureOwnProps) => ownProps.svangerskapspengerTilrettelegging,
    getInitialArbeidsforholdValues,
    getFødselsdato],
  (aksjonspunkter, tilrettelegging, arbeidsforholdValues, fødselsdato) => ({
    termindato: tilrettelegging ? tilrettelegging.termindato : '',
    fødselsdato,
    begrunnelse: getAksjonspunkt(aksjonspunkter),
    ...arbeidsforholdValues,
  }),
);

const getOnSubmit = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback,
  (ownProps: PureOwnProps) => ownProps.iayArbeidsforhold,
  (ownProps: PureOwnProps) => ownProps.arbeidsgiverOpplysningerPerId,
  (ownProps: PureOwnProps) => ownProps.uttakArbeidTyper,
  getArbeidsforhold,
],
(submitCallback, iayArbeidsforhold, arbeidsgiverOpplysningerPerId, uttakArbeidTyper, arbeidsforhold) => (
  values,
) => submitCallback(transformValues(values, iayArbeidsforhold, arbeidsforhold, arbeidsgiverOpplysningerPerId, uttakArbeidTyper)));

const getValidate = createSelector([
  getArbeidsforhold,
  (ownProps: PureOwnProps) => ownProps.arbeidsgiverOpplysningerPerId,
  (ownProps: PureOwnProps) => ownProps.uttakArbeidTyper,
  (ownProps: PureOwnProps) => ownProps.intl,
], (arbeidsforhold, arbeidsgiverOpplysningerPerId, uttakArbeidTyper, intl) => (
  values,
) => validateForm(values, arbeidsforhold, arbeidsgiverOpplysningerPerId, uttakArbeidTyper, intl));

const mapStateToProps = (_state, ownProps: PureOwnProps): MappedOwnProps => ({
  initialValues: getInitialValues(ownProps),
  fødselsdato: getFødselsdato(ownProps),
  arbeidsforhold: getArbeidsforhold(ownProps),
  validate: getValidate(ownProps),
  onSubmit: getOnSubmit(ownProps),
});

// https://jira.adeo.no/browse/TFP-3098 - https://github.com/redux-form/redux-form/issues/3276
const shouldValidate = ({
  values,
  nextProps,
  props,
  initialRender,
  lastFieldValidatorKeys,
  fieldValidatorKeys,
  structure,
}) => {
  if (initialRender) {
    return true;
  }
  return (
    !structure.deepEqual(values, nextProps.values)
    || !structure.deepEqual(lastFieldValidatorKeys, fieldValidatorKeys)
    || props.registeredFields !== nextProps.registeredFields
  );
};

export default connect(mapStateToProps)(reduxForm({
  form: FODSEL_TILRETTELEGGING_FORM,
  shouldValidate,
  destroyOnUnmount: false,
})(FodselOgTilretteleggingFaktaForm));
