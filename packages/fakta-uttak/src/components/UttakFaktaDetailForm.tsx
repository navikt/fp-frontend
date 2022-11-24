import React, {
  FunctionComponent, useCallback, useState, useMemo, ReactElement, useEffect,
} from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import dayjs from 'dayjs';
import { useForm, UseFormGetValues } from 'react-hook-form';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import {
  Datepicker, RadioGroupPanel, Form, SelectField, CheckboxField, NumberField,
} from '@navikt/ft-form-hooks';
import {
  FlexColumn, FlexContainer, FlexRow, OkAvbrytModal, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { Delete } from '@navikt/ds-icons';
import { Alert, Button } from '@navikt/ds-react';
import { DDMMYYYY_DATE_FORMAT, guid, omitMany } from '@navikt/ft-utils';

import {
  AlleKodeverk, ArbeidsgiverOpplysningerPerId, FaktaArbeidsforhold, ArbeidsgiverOpplysninger,
} from '@fpsak-frontend/types';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import uttakArbeidType from '@fpsak-frontend/kodeverk/src/uttakArbeidType';
import uttakPeriodeType from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';

import FordelingPeriodeKilde from '../kodeverk/fordelingPeriodeKilde';

import styles from './uttakFaktaDetailForm.less';
import KontrollerFaktaPeriodeMedApMarkering, { PeriodeApType } from '../typer/kontrollerFaktaPeriodeMedApMarkering';

type FormValues = KontrollerFaktaPeriodeMedApMarkering & {
  arsakstype: string;
  arbeidsgiverId: string;
};

enum Årsakstype {
  UTTAK = 'UTTAK',
  OVERFØRING = 'OVERFØRING',
  UTSETTELSE = 'UTSETTELSE',
  OPPHOLD = 'OPPHOLD',
}

const ÅRSAKSTYPE_TEKST_KODER = {
  [Årsakstype.UTTAK]: 'UttakFaktaDetailForm.Uttak',
  [Årsakstype.OVERFØRING]: 'UttakFaktaDetailForm.Overføring',
  [Årsakstype.UTSETTELSE]: 'UttakFaktaDetailForm.Utsettelse',
  [Årsakstype.OPPHOLD]: 'UttakFaktaDetailForm.Opphold',
};

// vanlig arbeidsgivernavn (orgnr)...arbeidsforholdid
// privatperson - KLANG...(18.08.1980)
const formatDate = (dato: string): string => dayjs(dato).format(DDMMYYYY_DATE_FORMAT);
const getEndCharFromId = (id: any): string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

const lagVisningsNavn = (arbeidsgiverOpplysning: ArbeidsgiverOpplysninger, eksternArbeidsforholdId?: any) => {
  const {
    navn, fødselsdato, erPrivatPerson, identifikator,
  } = arbeidsgiverOpplysning;

  let visningsNavn = `${navn}`;
  if (!erPrivatPerson) {
    visningsNavn = identifikator ? `${visningsNavn} (${identifikator})` : visningsNavn;
    visningsNavn = `${visningsNavn}${getEndCharFromId(eksternArbeidsforholdId)}`;
  } else {
    visningsNavn = `${navn.substr(0, 5)}...(${formatDate(fødselsdato)})`;
  }
  return visningsNavn;
};

const mapArbeidsforhold = (
  faktaArbeidsforhold: FaktaArbeidsforhold[],
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement[] => faktaArbeidsforhold.map((andel) => {
  const { arbeidType, arbeidsgiverReferanse } = andel;

  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse];

  let periodeArbeidsforhold = '';
  if (arbeidType && arbeidType !== uttakArbeidType.ORDINÆRT_ARBEID) {
    periodeArbeidsforhold = alleKodeverk[KodeverkType.UTTAK_ARBEID_TYPE].find((k) => k.kode === arbeidType)?.navn;
  } else {
    periodeArbeidsforhold = lagVisningsNavn(arbeidsgiverOpplysninger);
  }

  return (
    <option value={`${arbeidsgiverReferanse}-${arbeidType}`} key={guid()}>
      {periodeArbeidsforhold}
    </option>
  );
});

const utledÅrsakstype = (valgtPeriode: KontrollerFaktaPeriodeMedApMarkering): Årsakstype => {
  if (valgtPeriode.utsettelseÅrsak) {
    return Årsakstype.UTSETTELSE;
  }
  if (valgtPeriode.overføringÅrsak) {
    return Årsakstype.OVERFØRING;
  }
  if (valgtPeriode.oppholdÅrsak) {
    return Årsakstype.OPPHOLD;
  }
  return Årsakstype.UTTAK;
};

const lagDefaultVerdier = (
  valgtPeriode: KontrollerFaktaPeriodeMedApMarkering,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): FormValues => {
  const arsakstype = utledÅrsakstype(valgtPeriode);

  const aRef = valgtPeriode.arbeidsforhold?.arbeidsgiverReferanse;
  const arbeidsgiverFinnes = aRef ? !!arbeidsgiverOpplysningerPerId[aRef] : false;

  return {
    ...valgtPeriode,
    arsakstype,
    arbeidsgiverId: arbeidsgiverFinnes
      ? `${valgtPeriode.arbeidsforhold.arbeidsgiverReferanse}-${valgtPeriode.arbeidsforhold.arbeidType}`
      : undefined,
  };
};

const transformValues = (values: FormValues): KontrollerFaktaPeriodeMedApMarkering => ({
  ...omitMany(values, ['arsakstype', 'arbeidsgiverId']),
  arbeidsforhold: values.arbeidsgiverId ? {
    arbeidsgiverReferanse: values.arbeidsgiverId.split('-')[0],
    arbeidType: values.arbeidsgiverId.split('-')[1],
  } : undefined,
  periodeKilde: FordelingPeriodeKilde.SØKNAD,
  aksjonspunktType: undefined,
});

const requiredNårGraderingErOppgitt = (
  getValues: UseFormGetValues<FormValues>,
) => (arbeidsgiverId?: string) => (getValues('arbeidstidsprosent') ? required(arbeidsgiverId) : null);

const validerTomEtterFom = (
  intl: IntlShape,
  getValues: UseFormGetValues<FormValues>,
) => (tom?: string) => (dayjs(tom).isBefore(getValues('fom')) ? intl.formatMessage({ id: 'UttakFaktaDetailForm.TomForFom' }) : null);

const validerPeriodeFra = (
  førsteUttaksdato: string,
  intl: IntlShape,
  valgtPeriode?: KontrollerFaktaPeriodeMedApMarkering,
) => (fomDato: string) => {
  if (valgtPeriode?.aksjonspunktType === PeriodeApType.START_FOM && !dayjs(fomDato).isSame(førsteUttaksdato)) {
    return intl.formatMessage({ id: 'UttakFaktaDetailForm.ErIkkeLikForsteUttaksdato' });
  }

  return dayjs(fomDato).isBefore(førsteUttaksdato) ? intl.formatMessage({ id: 'UttakFaktaDetailForm.ErTidligereEnnForsteUttaksdato' }) : null;
};

interface OwnProps {
  valgtPeriode?: KontrollerFaktaPeriodeMedApMarkering;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  slettPeriode?: () => void;
  avbrytEditering: () => void;
  readOnly: boolean;
  oppdaterPeriode: (uttaksperiode: KontrollerFaktaPeriodeMedApMarkering) => void;
  alleKodeverk: AlleKodeverk;
  førsteUttaksdato: string;
}

const UttakFaktaDetailForm: FunctionComponent<OwnProps> = ({
  valgtPeriode,
  arbeidsgiverOpplysningerPerId,
  faktaArbeidsforhold,
  slettPeriode,
  avbrytEditering,
  oppdaterPeriode,
  readOnly,
  alleKodeverk,
  førsteUttaksdato,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: valgtPeriode ? lagDefaultVerdier(valgtPeriode, arbeidsgiverOpplysningerPerId) : undefined,
  });

  const [visSletteDialog, settVisSletteDialog] = useState(false);
  const slettUttaksperiode = useCallback(() => {
    settVisSletteDialog(false);
    slettPeriode();
  }, []);

  const sorterteUttakPeriodeTyper = useMemo(() => [...alleKodeverk[KodeverkType.UTTAK_PERIODE_TYPE]]
    .sort((k1, k2) => k1.navn.localeCompare(k2.navn))
    .filter((k) => k.kode !== uttakPeriodeType.ANNET),
  []);
  const sorterteOverføringÅrsaker = useMemo(() => [...alleKodeverk[KodeverkType.OVERFOERING_AARSAK_TYPE]].sort((k1, k2) => k1.navn.localeCompare(k2.navn)), []);
  const sorterteUtsettelseÅrsaker = useMemo(() => [...alleKodeverk[KodeverkType.UTSETTELSE_AARSAK_TYPE]].sort((k1, k2) => k1.navn.localeCompare(k2.navn)), []);
  const sorterteOppholdÅrsaker = useMemo(() => [...alleKodeverk[KodeverkType.OPPHOLD_ARSAK]].sort((k1, k2) => k1.navn.localeCompare(k2.navn)), []);
  const sorterteMorsAktiviteter = useMemo(() => [...alleKodeverk[KodeverkType.MORS_AKTIVITET]].sort((k1, k2) => k1.navn.localeCompare(k2.navn)), []);

  const årsakstype = formMethods.watch('arsakstype');

  useEffect(() => {
    if (årsakstype !== Årsakstype.OVERFØRING) {
      formMethods.unregister('overføringÅrsak');
    }
    if (årsakstype !== Årsakstype.OPPHOLD) {
      formMethods.unregister('oppholdÅrsak');
    }
    if (årsakstype !== Årsakstype.UTSETTELSE) {
      formMethods.unregister('utsettelseÅrsak');
    }
  }, [årsakstype]);

  const aRef = valgtPeriode?.arbeidsforhold?.arbeidsgiverReferanse;
  const arbeidsgiverFinnesIkke = (aRef && !arbeidsgiverOpplysningerPerId[aRef]);

  return (
    <>
      {visSletteDialog && (
        <OkAvbrytModal
          text={intl.formatMessage({ id: 'UttakFaktaDetailForm.VilDuSlette' })}
          submit={slettUttaksperiode}
          cancel={() => settVisSletteDialog(false)}
          showModal
        />
      )}
      <Form
        formMethods={formMethods}
        onSubmit={(values) => oppdaterPeriode(transformValues(values))}
      >
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Datepicker
                name="fom"
                label={<FormattedMessage id="UttakFaktaDetailForm.Fom" />}
                validate={[required, hasValidDate, validerPeriodeFra(førsteUttaksdato, intl, valgtPeriode)]}
                isReadOnly={readOnly}
              />
            </FlexColumn>
            <FlexColumn>
              <Datepicker
                name="tom"
                label={<FormattedMessage id="UttakFaktaDetailForm.Tom" />}
                validate={[required, hasValidDate, validerTomEtterFom(intl, formMethods.getValues)]}
                isReadOnly={readOnly}
              />
            </FlexColumn>
            {slettPeriode && (
              <FlexColumn className={styles.marginBtn}>
                <Button
                  size="small"
                  variant="tertiary"
                  type="button"
                  icon={<Delete />}
                  onClick={() => settVisSletteDialog(true)}
                  disabled={readOnly}
                >
                  <FormattedMessage id="UttakFaktaDetailForm.Slett" />
                </Button>
              </FlexColumn>
            )}
          </FlexRow>
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn>
              <RadioGroupPanel
                name="arsakstype"
                label={<FormattedMessage id="UttakFaktaDetailForm.Periodetype" />}
                validate={[required]}
                isReadOnly={readOnly}
                isHorizontal
                radios={Object.keys(Årsakstype).map((type) => ({
                  value: type,
                  label: intl.formatMessage({ id: ÅRSAKSTYPE_TEKST_KODER[type] }),
                }))}
              />
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer sixteenPx />
          {(årsakstype === Årsakstype.UTTAK || årsakstype === Årsakstype.OVERFØRING) && (
            <FlexRow>
              <FlexColumn>
                <SelectField
                  name="uttakPeriodeType"
                  label={<FormattedMessage id="UttakFaktaDetailForm.Stonadskonto" />}
                  validate={[required]}
                  selectValues={sorterteUttakPeriodeTyper.map((vt) => <option key={vt.kode} value={vt.kode}>{vt.navn}</option>)}
                  readOnly={readOnly}
                />
              </FlexColumn>
            </FlexRow>
          )}
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn>
              {årsakstype === Årsakstype.UTSETTELSE && (
                <SelectField
                  name="utsettelseÅrsak"
                  label={<FormattedMessage id="UttakFaktaDetailForm.Årsak" />}
                  validate={[required]}
                  className={styles.selectArsak}
                  selectValues={sorterteUtsettelseÅrsaker.map((vt) => <option key={vt.kode} value={vt.kode}>{vt.navn}</option>)}
                  readOnly={readOnly}
                />
              )}
              {årsakstype === Årsakstype.OVERFØRING && (
                <SelectField
                  name="overføringÅrsak"
                  label={<FormattedMessage id="UttakFaktaDetailForm.Årsak" />}
                  validate={[required]}
                  className={styles.selectArsak}
                  selectValues={sorterteOverføringÅrsaker.map((vt) => <option key={vt.kode} value={vt.kode}>{vt.navn}</option>)}
                  readOnly={readOnly}
                />
              )}
              {årsakstype === Årsakstype.OPPHOLD && (
                <SelectField
                  name="oppholdÅrsak"
                  label={<FormattedMessage id="UttakFaktaDetailForm.Årsak" />}
                  validate={[required]}
                  className={styles.selectArsak}
                  selectValues={sorterteOppholdÅrsaker.map((vt) => <option key={vt.kode} value={vt.kode}>{vt.navn}</option>)}
                  readOnly={readOnly}
                />
              )}
            </FlexColumn>
          </FlexRow>
          {årsakstype === Årsakstype.UTTAK && (
            <>
              <VerticalSpacer sixteenPx />
              {arbeidsgiverFinnesIkke && (
                <>
                  <Alert variant="info">
                    <FormattedMessage id="UttakFaktaDetailForm.UkjentArbeidsgiver" values={{ aRef }} />
                  </Alert>
                  <VerticalSpacer sixteenPx />
                </>
              )}
              <FlexRow>
                <FlexColumn>
                  <NumberField
                    name="arbeidstidsprosent"
                    label={<FormattedMessage id="UttakFaktaDetailForm.GraderingProsent" />}
                    forceTwoDecimalDigits
                    className={styles.gradering}
                    readOnly={readOnly}
                  />
                </FlexColumn>
                <FlexColumn>
                  <SelectField
                    name="arbeidsgiverId"
                    label={<FormattedMessage id="UttakFaktaDetailForm.Arbeidsgiver" />}
                    validate={[requiredNårGraderingErOppgitt(formMethods.getValues)]}
                    selectValues={mapArbeidsforhold(faktaArbeidsforhold, alleKodeverk, arbeidsgiverOpplysningerPerId)}
                  />
                </FlexColumn>
                <FlexColumn>
                  <NumberField
                    name="samtidigUttaksprosent"
                    label={<FormattedMessage id="UttakFaktaDetailForm.SamtidigUttaksprosent" />}
                    forceTwoDecimalDigits
                    readOnly={readOnly}
                  />
                </FlexColumn>
              </FlexRow>
            </>
          )}
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn>
              <SelectField
                name="morsAktivitet"
                label={<FormattedMessage id="UttakFaktaDetailForm.MorsAktivitet" />}
                className={styles.select}
                selectValues={sorterteMorsAktiviteter.map((vt) => <option key={vt.kode} value={vt.kode}>{vt.navn}</option>)}
                readOnly={readOnly}
              />
            </FlexColumn>
          </FlexRow>
          {årsakstype === Årsakstype.UTTAK && (
            <>
              <VerticalSpacer sixteenPx />
              <FlexRow>
                <FlexColumn>
                  <CheckboxField
                    name="flerbarnsdager"
                    readOnly={readOnly}
                    label={<FormattedMessage id="UttakFaktaDetailForm.Flerbarnsdager" />}
                  />
                </FlexColumn>
              </FlexRow>
            </>
          )}
          <VerticalSpacer thirtyTwoPx />
          <FlexRow>
            <FlexColumn>
              <Button
                size="small"
                variant="secondary"
                loading={false}
                disabled={!formMethods.formState.isDirty || readOnly}
              >
                <FormattedMessage id="UttakFaktaDetailForm.Oppdater" />
              </Button>
            </FlexColumn>
            <FlexColumn>
              <Button
                size="small"
                variant="tertiary"
                onClick={avbrytEditering}
                disabled={readOnly}
                type="button"
              >
                <FormattedMessage id="UttakFaktaDetailForm.Avbryt" />
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
        <VerticalSpacer thirtyTwoPx />
      </Form>
    </>
  );
};

export default UttakFaktaDetailForm;
