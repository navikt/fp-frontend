import React, {
  FunctionComponent, useCallback, useState, useMemo, ReactElement, useEffect,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
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
import { Button } from '@navikt/ds-react';
import { DDMMYYYY_DATE_FORMAT, guid, omitMany } from '@navikt/ft-utils';

import {
  AlleKodeverk, ArbeidsgiverOpplysningerPerId, FaktaArbeidsforhold, KontrollerFaktaPeriode, ArbeidsgiverOpplysninger,
} from '@fpsak-frontend/types';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import uttakArbeidType from '@fpsak-frontend/kodeverk/src/uttakArbeidType';
import uttakPeriodeType from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';

import FordelingPeriodeKilde from '../kodeverk/fordelingPeriodeKilde';

import styles from './uttakFaktaDetailForm.less';

type FormValues = KontrollerFaktaPeriode & {
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

const utledÅrsakstype = (valgtPeriode: KontrollerFaktaPeriode): Årsakstype => {
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

const lagDefaultVerdier = (valgtPeriode: KontrollerFaktaPeriode): FormValues => {
  const arsakstype = utledÅrsakstype(valgtPeriode);
  return {
    ...valgtPeriode,
    arsakstype,
    arbeidsgiverId: valgtPeriode.arbeidsforhold?.arbeidsgiverReferanse
      ? `${valgtPeriode.arbeidsforhold.arbeidsgiverReferanse}-${valgtPeriode.arbeidsforhold.arbeidType}`
      : undefined,
  };
};

const transformValues = (values: FormValues): KontrollerFaktaPeriode => ({
  ...omitMany(values, ['arsakstype', 'arbeidsgiverId']),
  arbeidsforhold: values.arbeidsgiverId ? {
    arbeidsgiverReferanse: values.arbeidsgiverId.split('-')[0],
    arbeidType: values.arbeidsgiverId.split('-')[1],
  } : undefined,
});

const requiredNårGraderingErOppgitt = (
  getValues: UseFormGetValues<FormValues>,
) => (arbeidsgiverId?: string) => (getValues('arbeidstidsprosent') ? required(arbeidsgiverId) : null);

interface OwnProps {
  valgtPeriode?: KontrollerFaktaPeriode;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  slettPeriode?: () => void;
  avbrytEditering: () => void;
  readOnly: boolean;
  oppdaterPeriode: (uttaksperiode: KontrollerFaktaPeriode) => void;
  alleKodeverk: AlleKodeverk;
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
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: valgtPeriode ? lagDefaultVerdier(valgtPeriode) : undefined,
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
        onSubmit={(values) => oppdaterPeriode(transformValues({
          ...values,
          periodeKilde: FordelingPeriodeKilde.SØKNAD,
        }))}
      >
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Datepicker
                name="fom"
                label={<FormattedMessage id="UttakFaktaDetailForm.Fom" />}
                validate={[required, hasValidDate]}
                isReadOnly={readOnly}
              />
            </FlexColumn>
            <FlexColumn>
              <Datepicker
                name="tom"
                label={<FormattedMessage id="UttakFaktaDetailForm.Tom" />}
                validate={[required, hasValidDate]}
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
