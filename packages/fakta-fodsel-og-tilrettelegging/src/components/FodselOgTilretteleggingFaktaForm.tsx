import React, {
  useMemo, useState, FunctionComponent,
} from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { FormattedMessage, useIntl } from 'react-intl';
import { Alert, Label, Heading } from '@navikt/ds-react';
import {
  Image, FlexColumn, FlexContainer, FlexRow, VerticalSpacer, AvsnittSkiller, AksjonspunktHelpTextTemp,
} from '@navikt/ft-ui-komponenter';
import { Form, Datepicker, TextAreaField } from '@navikt/ft-form-hooks';
import {
  hasValidDate, hasValidText, maxLength, required,
} from '@navikt/ft-form-validators';

import tilretteleggingType from '@fpsak-frontend/kodeverk/src/tilretteleggingType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { FaktaSubmitButtonNew } from '@fpsak-frontend/fakta-felles';
import {
  AoIArbeidsforhold, Aksjonspunkt, ArbeidsgiverOpplysningerPerId, KodeverkMedNavn, FodselOgTilrettelegging,
  ArbeidsforholdFodselOgTilrettelegging, ArbeidsforholdTilretteleggingDato,
} from '@fpsak-frontend/types';
import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel_ny.svg';
import { BekreftSvangerskapspengerAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import TilretteleggingArbeidsforholdSection from './tilrettelegging/TilretteleggingArbeidsforholdSection';
import { finnSkalTaHensynTilPermisjon } from './tilrettelegging/VelferdspermisjonSection';
import { finnUtbetalingsgradForTilrettelegging } from './tilrettelegging/TilretteleggingFieldArray';

import styles from './fodselOgTilretteleggingFaktaForm.less';
import UtilgjengeligeArbeidsforhold from './tilrettelegging/UtilgjengeligeArbeidsforhold';

const maxLength1500 = maxLength(1500);
const EMPTY_LIST = [];

type FormValues = {
  termindato: string;
  fødselsdato: string;
  begrunnelse: string;
};

const getIsBegrunnelseRequired = (
  isDirty: boolean,
) => (value?: string) => value !== undefined || isDirty;

const getAksjonspunkt = (
  aksjonspunkter: Aksjonspunkt[],
): string => aksjonspunkter
  .filter((ap) => ap.definisjon === aksjonspunktCodes.FODSELTILRETTELEGGING)[0].begrunnelse;

const getAlleArbeidsforhold = (
  tilrettelegging: FodselOgTilrettelegging,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ArbeidsforholdFodselOgTilrettelegging[] => {
  const arbeidsforhold = tilrettelegging?.arbeidsforholdListe || [];
  arbeidsforhold.sort((a, b) => {
    const arbeidsgiverOpplysningerA1 = arbeidsgiverOpplysningerPerId[a.arbeidsgiverReferanse];
    const arbeidsgiverOpplysningerA2 = arbeidsgiverOpplysningerPerId[b.arbeidsgiverReferanse];
    return arbeidsgiverOpplysningerA1 && arbeidsgiverOpplysningerA2
      ? arbeidsgiverOpplysningerA1.navn.localeCompare(arbeidsgiverOpplysningerA2.navn)
      : 0;
  });
  return arbeidsforhold;
};

const utledFormSectionName = (
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  uttakArbeidTyper: KodeverkMedNavn[],
): string => {
  let navn = '';
  if (arbeidsforhold.arbeidsgiverReferanse) {
    const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverReferanse];
    if (arbeidsgiverOpplysninger) {
      navn += arbeidsgiverOpplysninger.navn.replaceAll(/[-.,']/ig, '_');
    }
    navn += arbeidsforhold.arbeidsgiverReferanse;
  } else {
    const arbeidType = uttakArbeidTyper.find((type) => type.kode === arbeidsforhold.uttakArbeidType);
    navn = arbeidType?.navn;
  }
  if (arbeidsforhold.internArbeidsforholdReferanse) {
    navn += arbeidsforhold.internArbeidsforholdReferanse;
  }
  return navn;
};

const erInnenforIntervall = (
  tilretteleggingBehovFom: string,
  fomDato?: string,
  tomDato?: string,
): boolean => {
  const dato = moment(tilretteleggingBehovFom);
  return !(dato.isBefore(moment(fomDato)) || dato.isAfter(moment(tomDato)));
};

const skalViseInfoAlert = (
  iayArbeidsforhold: AoIArbeidsforhold[],
  tilretteleggingArbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[],
): boolean => !tilretteleggingArbeidsforhold
  .filter((ta) => ta.arbeidsgiverReferanse)
  .every((ta) => iayArbeidsforhold.some((ia) => ta.arbeidsgiverReferanse === ia.arbeidsgiverIdent
    && erInnenforIntervall(ta.tilretteleggingBehovFom, ia.fom, ia.tom)));

const finnArbeidsforhold = (
  alleIafAf: AoIArbeidsforhold[],
  internArbeidsforholdReferanse: string,
): AoIArbeidsforhold | undefined => {
  if (alleIafAf.length > 1) {
    return alleIafAf.find((iafAf) => iafAf.internArbeidsforholdId === internArbeidsforholdReferanse);
  }
  return alleIafAf.length === 1 ? alleIafAf[0] : undefined;
};

const utledUtbetalingsgrad = (
  tilretteleggingsdato: ArbeidsforholdTilretteleggingDato,
  stillingsprosentArbeidsforhold: number,
  velferdspermisjonprosent: number,
): number | string | null => {
  if (tilretteleggingsdato.type === tilretteleggingType.HEL_TILRETTELEGGING) {
    return null;
  }
  if (tilretteleggingsdato.overstyrtUtbetalingsgrad) {
    return tilretteleggingsdato.overstyrtUtbetalingsgrad;
  }
  return tilretteleggingsdato.type === tilretteleggingType.INGEN_TILRETTELEGGING ? 100
    : finnUtbetalingsgradForTilrettelegging(stillingsprosentArbeidsforhold, velferdspermisjonprosent, tilretteleggingsdato.stillingsprosent);
};

const getInitialArbeidsforholdValues = (
  tilrettelegging: FodselOgTilrettelegging,
  iayArbeidsforhold: AoIArbeidsforhold[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  uttakArbeidTyper: KodeverkMedNavn[],
): Record<string, any> => {
  const arbeidsforhold = tilrettelegging ? tilrettelegging.arbeidsforholdListe : [];
  if (arbeidsforhold === undefined || arbeidsforhold === null) {
    return EMPTY_LIST;
  }
  return arbeidsforhold.reduce((res, a) => {
    const alleIafAf = iayArbeidsforhold.filter((iaya) => iaya.arbeidsgiverIdent === a.arbeidsgiverReferanse);
    const af = finnArbeidsforhold(alleIafAf, a.internArbeidsforholdReferanse);
    const stillingsprosentArbeidsforhold = af ? af.stillingsprosent : 100;
    const velferdspermisjonprosent = a.velferdspermisjoner.filter((p) => p.erGyldig)
      .map((p) => p.permisjonsprosent)
      .reduce((sum, prosent) => sum + prosent, 0);

    const permisjoner = a.velferdspermisjoner.reduce((acc, permisjon) => ({
      ...acc,
      [`permisjon${permisjon.permisjonFom}`]: permisjon.erGyldig,
    }), {});

    return {
      ...res,
      [utledFormSectionName(a, arbeidsgiverOpplysningerPerId, uttakArbeidTyper)]: {
        ...a,
        tilretteleggingDatoer: a.tilretteleggingDatoer.map((tilretteleggingsdato) => ({
          ...tilretteleggingsdato,
          stillingsprosent: tilretteleggingsdato.stillingsprosent,
          oldOverstyrtUtbetalingsgrad: tilretteleggingsdato.overstyrtUtbetalingsgrad,
          overstyrtUtbetalingsgrad: tilretteleggingsdato.overstyrtUtbetalingsgrad !== undefined
            && tilretteleggingsdato.overstyrtUtbetalingsgrad !== null ? tilretteleggingsdato.overstyrtUtbetalingsgrad
            : utledUtbetalingsgrad(tilretteleggingsdato, stillingsprosentArbeidsforhold, velferdspermisjonprosent),
        })),
        ...permisjoner,
      },
    };
  }, {});
};

const getInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging,
  iayArbeidsforhold: AoIArbeidsforhold[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  uttakArbeidTyper: KodeverkMedNavn[],
) => ({
  termindato: svangerskapspengerTilrettelegging ? svangerskapspengerTilrettelegging.termindato : '',
  fødselsdato: svangerskapspengerTilrettelegging ? svangerskapspengerTilrettelegging.fødselsdato : '',
  begrunnelse: getAksjonspunkt(aksjonspunkter),
  ...getInitialArbeidsforholdValues(svangerskapspengerTilrettelegging, iayArbeidsforhold, arbeidsgiverOpplysningerPerId, uttakArbeidTyper),
});

const finnOverstyrtUtbetalingsgrad = (
  type: string,
  stillingsprosent: number,
  stillingsprosentArbeidsforhold: number,
  overstyrtUtbetalingsgrad: string,
  oldOverstyrtUtbetalingsgrad: number,
  velferdspermisjonprosent: number,
): string => {
  if (oldOverstyrtUtbetalingsgrad || type === tilretteleggingType.HEL_TILRETTELEGGING) {
    return overstyrtUtbetalingsgrad;
  }

  let erLikOverstyrtVerdi = type === tilretteleggingType.INGEN_TILRETTELEGGING && parseFloat(overstyrtUtbetalingsgrad) === 100;
  if (type === tilretteleggingType.DELVIS_TILRETTELEGGING) {
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
  iayArbeidsforhold: AoIArbeidsforhold[],
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  uttakArbeidTyper: KodeverkMedNavn[],
): BekreftSvangerskapspengerAp => ({
  kode: aksjonspunktCodes.FODSELTILRETTELEGGING,
  termindato: values.termindato,
  fødselsdato: values.fødselsdato,
  begrunnelse: values.begrunnelse,
  bekreftetSvpArbeidsforholdList: arbeidsforhold.map((a) => {
    const value = values[utledFormSectionName(a, arbeidsgiverOpplysningerPerId, uttakArbeidTyper)];
    const alleIafAf = iayArbeidsforhold.filter((iaya) => iaya.arbeidsgiverIdent === a.arbeidsgiverReferanse);
    const af = finnArbeidsforhold(alleIafAf, a.internArbeidsforholdReferanse);
    const stillingsprosentArbeidsforhold = af ? af.stillingsprosent : 100;
    const velferdspermisjonprosent = a.velferdspermisjoner.filter((p) => finnSkalTaHensynTilPermisjon(value.tilretteleggingBehovFom, p))
      .filter((p) => value[`permisjon${p.permisjonFom}`])
      .map((p) => p.permisjonsprosent)
      .reduce((sum, prosent) => sum + prosent, 0);
    return {
      ...value,
      skalBrukes: value.skalBrukes && value.kanTilrettelegges,
      tilretteleggingDatoer: value.tilretteleggingDatoer.map((t) => ({
        fom: t.fom,
        type: t.type,
        stillingsprosent: t.stillingsprosent,
        overstyrtUtbetalingsgrad: finnOverstyrtUtbetalingsgrad(t.type, t.stillingsprosent, stillingsprosentArbeidsforhold,
          t.overstyrtUtbetalingsgrad, t.oldOverstyrtUtbetalingsgrad, velferdspermisjonprosent),
      })),
      velferdspermisjoner: a.velferdspermisjoner.filter((p) => finnSkalTaHensynTilPermisjon(value.tilretteleggingBehovFom, p)).map((p) => ({
        ...p,
        erGyldig: value[`permisjon${p.permisjonFom}`],
      })),
    };
  }),
});

interface OwnProps {
  behandlingVersjon: number;
  readOnly: boolean;
  hasOpenAksjonspunkter: boolean;
  erOverstyrer: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
  arbeidsforhold: AoIArbeidsforhold[];
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: BekreftSvangerskapspengerAp) => Promise<void>;
  uttakArbeidTyper: KodeverkMedNavn[],
  submittable: boolean;
  formData: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * FodselOgTilretteleggingFaktaForm
 *
 * Viser tillrettlegging før svangerskapspenger
 */
const FodselOgTilretteleggingFaktaForm: FunctionComponent<OwnProps> = ({
  behandlingVersjon,
  readOnly,
  hasOpenAksjonspunkter,
  arbeidsforhold,
  erOverstyrer,
  arbeidsgiverOpplysningerPerId,
  aksjonspunkter,
  svangerskapspengerTilrettelegging,
  uttakArbeidTyper,
  submitCallback,
  submittable,
  formData,
  setFormData,
}) => {
  const intl = useIntl();

  const alleArbeidsforhold = useMemo(() => getAlleArbeidsforhold(
    svangerskapspengerTilrettelegging, arbeidsgiverOpplysningerPerId), [behandlingVersjon]);

  const visInfoAlert = useMemo(() => skalViseInfoAlert(arbeidsforhold, alleArbeidsforhold), [behandlingVersjon]);

  const [harOverstyrtUtbetalingsgrad, setOverstyrtUtbetalingsgrad] = useState(false);
  const arbeidsforholdSomIkkeKanTilrettelegges = alleArbeidsforhold.filter((a) => !a.kanTilrettelegges);

  const initialValues = useMemo(() => getInitialValues(
    aksjonspunkter, svangerskapspengerTilrettelegging, arbeidsforhold, arbeidsgiverOpplysningerPerId, uttakArbeidTyper,
  ), [behandlingVersjon]);

  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const isRequiredFn = getIsBegrunnelseRequired(formMethods.formState.isDirty);

  const fødselsdato = svangerskapspengerTilrettelegging?.fødselsdato || '';

  const formValues = formMethods.watch();

  const formSectionNames = useMemo(() => alleArbeidsforhold.map((a) => utledFormSectionName(a, arbeidsgiverOpplysningerPerId, uttakArbeidTyper)),
    [alleArbeidsforhold, arbeidsgiverOpplysningerPerId, uttakArbeidTyper]);

  const erIngenTilretteleggingValgt = formSectionNames
    .map((name) => formValues[name])
    .every((a) => (a.skalBrukes === false));

  return (
    <Form
      formMethods={formMethods}
      setDataOnUnmount={setFormData}
      onSubmit={(values: FormValues) => submitCallback(
        transformValues(values, arbeidsforhold, alleArbeidsforhold, arbeidsgiverOpplysningerPerId, uttakArbeidTyper))}
    >
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>
        {[<FormattedMessage id="FodselOgTilretteleggingInfoPanel.Aksjonspunkt" key="svangerskapspengerAp" />]}
      </AksjonspunktHelpTextTemp>
      <VerticalSpacer eightPx />
      <FlexContainer wrap>
        <FlexRow>
          <FlexColumn>
            <Datepicker
              name="termindato"
              label={intl.formatMessage({ id: 'FodselOgTilretteleggingFaktaForm.Termindato' })}
              validate={[required, hasValidDate]}
              isReadOnly={readOnly}
            />
          </FlexColumn>
          { fødselsdato && (
          <FlexColumn>
            <Datepicker
              name="fødselsdato"
              label={intl.formatMessage({ id: 'FodselOgTilretteleggingFaktaForm.Fodselsdato' })}
              validate={[required, hasValidDate]}
              isReadOnly={readOnly}
            />
          </FlexColumn>
          )}
        </FlexRow>
        <VerticalSpacer sixteenPx />
        <FlexRow>
          <FlexColumn>
            <VerticalSpacer eightPx />
            <Heading size="small" className={styles.arbeidsforholdTittel}>
              <FormattedMessage id="FodselOgTilretteleggingFaktaForm.ArbeidsforholdDetErSoktTilretteleggingFor" />
            </Heading>
          </FlexColumn>
        </FlexRow>
        {visInfoAlert && (
          <FlexRow>
            <FlexColumn className={styles.fullBredde}>
              <VerticalSpacer eightPx />
              <Alert variant="info" className={styles.info}>
                <FormattedMessage id="FodselOgTilretteleggingFaktaForm.UndersokNarmere" />
              </Alert>
            </FlexColumn>
          </FlexRow>
        )}
        {erIngenTilretteleggingValgt && (
          <FlexRow>
            <FlexColumn className={styles.fullBredde}>
              <VerticalSpacer sixteenPx />
              <Alert variant="error">
                <FormattedMessage id="FodselOgTilretteleggingFaktaForm.MinstEnTilretteleggingMåBrukes" />
              </Alert>
            </FlexColumn>
          </FlexRow>
        )}
        <FlexRow>
          <FlexColumn>
            {alleArbeidsforhold.filter((a) => a.kanTilrettelegges).map((a, index) => {
              const alleIafAf = arbeidsforhold.filter((iaya) => iaya.arbeidsgiverIdent === a.arbeidsgiverReferanse);
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
                    stillingsprosentArbeidsforhold={af ? af.stillingsprosent : 100}
                    setOverstyrtUtbetalingsgrad={setOverstyrtUtbetalingsgrad}
                    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                    uttakArbeidTyper={uttakArbeidTyper}
                  />
                  {index === alleArbeidsforhold.length - 1 && (
                    <AvsnittSkiller />
                  )}
                </React.Fragment>
              );
            })}
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer sixteenPx />
        <UtilgjengeligeArbeidsforhold
          arbeidsgiverOpplysningerPrId={arbeidsgiverOpplysningerPerId}
          arbeidsforholdSomIkkeKanTilrettelegges={arbeidsforholdSomIkkeKanTilrettelegges}
        />
        <FlexRow>
          <FlexColumn className={styles.halvBredde}>
            <VerticalSpacer eightPx />
            <TextAreaField
              name="begrunnelse"
              label={intl.formatMessage({ id: 'FodselOgTilretteleggingFaktaForm.BegrunnEndringene' })}
              validate={[isRequiredFn, maxLength1500, hasValidText]}
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
              <Label size="small"><FormattedMessage id="FodselOgTilretteleggingFaktaForm.BegrunnOverstyring" /></Label>
            </FlexColumn>
          </FlexRow>
        )}
        <VerticalSpacer sixteenPx />
        <FlexRow>
          <FlexColumn>
            <FaktaSubmitButtonNew
              isSubmittable={submittable && !erIngenTilretteleggingValgt}
              isReadOnly={readOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </Form>
  );
};

export default FodselOgTilretteleggingFaktaForm;
