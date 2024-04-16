import React, { FunctionComponent, useCallback, useState, useMemo, useEffect } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import dayjs from 'dayjs';
import { useForm, UseFormGetValues } from 'react-hook-form';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { Datepicker, RadioGroupPanel, Form, SelectField, CheckboxField } from '@navikt/ft-form-hooks';
import { FlexColumn, FlexContainer, FlexRow, OkAvbrytModal, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { TrashIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Label } from '@navikt/ds-react';
import { omitMany } from '@navikt/ft-utils';

import { AlleKodeverk, ArbeidsgiverOpplysningerPerId, Fagsak, FaktaArbeidsforhold } from '@navikt/fp-types';
import { KodeverkType, StonadskontoType } from '@navikt/fp-kodeverk';

import { RelasjonsRolleType } from '@navikt/ft-kodeverk';
import FordelingPeriodeKilde from '../kodeverk/fordelingPeriodeKilde';

import styles from './uttakFaktaDetailForm.module.css';
import KontrollerFaktaPeriodeMedApMarkering from '../typer/kontrollerFaktaPeriodeMedApMarkering';
import GraderingOgSamtidigUttakPanel, {
  FormValues as FormValuesGraderingOgSamtidigUttak,
} from './GraderingOgSamtidigUttakPanel';

type FormValues = FormValuesGraderingOgSamtidigUttak & {
  arsakstype: string;
};

export enum Årsakstype {
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
} as Record<string, string>;

export const utledÅrsakstype = (valgtPeriode: KontrollerFaktaPeriodeMedApMarkering): Årsakstype => {
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

  const aRef =
    valgtPeriode.arbeidsforhold?.arbeidsgiverReferanse !== 'null'
      ? valgtPeriode.arbeidsforhold?.arbeidsgiverReferanse
      : undefined;
  const aOpplysninger = aRef ? arbeidsgiverOpplysningerPerId[aRef] : undefined;

  let arbeidsgiverId;

  if ((!!aRef && aOpplysninger) || (valgtPeriode.arbeidsforhold && !aRef)) {
    arbeidsgiverId = `${valgtPeriode.arbeidsforhold?.arbeidsgiverReferanse}-${valgtPeriode.arbeidsforhold?.arbeidType}`;
  }

  return {
    ...valgtPeriode,
    arsakstype,
    arbeidsgiverId,
    harGradering: !!valgtPeriode.arbeidstidsprosent,
    harSamtidigUttaksprosent: !!valgtPeriode.samtidigUttaksprosent,
  };
};

const transformValues = (values: FormValues): KontrollerFaktaPeriodeMedApMarkering => ({
  ...omitMany(values, ['arsakstype', 'arbeidsgiverId', 'harGradering', 'harSamtidigUttaksprosent']),
  arbeidsforhold: values.arbeidsgiverId
    ? {
        arbeidsgiverReferanse:
          values.arbeidsgiverId.split('-')[0] === 'null' ? undefined : values.arbeidsgiverId.split('-')[0],
        arbeidType: values.arbeidsgiverId.split('-')[1],
      }
    : undefined,
  periodeKilde: FordelingPeriodeKilde.SAKSBEHANDLER,
  aksjonspunktType: undefined,
  arbeidstidsprosent: values.arbeidstidsprosent,
  samtidigUttaksprosent: values.samtidigUttaksprosent,
});

const validerTomEtterFom = (intl: IntlShape, getValues: UseFormGetValues<FormValues>) => (tom?: string) =>
  dayjs(tom).isBefore(getValues('fom')) ? intl.formatMessage({ id: 'UttakFaktaDetailForm.TomForFom' }) : null;

interface OwnProps {
  fagsak: Fagsak;
  valgtPeriode?: KontrollerFaktaPeriodeMedApMarkering;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  slettPeriode?: () => void;
  avbrytEditering: () => void;
  readOnly: boolean;
  oppdaterPeriode: (uttaksperiode: KontrollerFaktaPeriodeMedApMarkering) => void;
  alleKodeverk: AlleKodeverk;
  defaultMonth?: Date;
}

const UttakFaktaDetailForm: FunctionComponent<OwnProps> = ({
  fagsak,
  valgtPeriode,
  arbeidsgiverOpplysningerPerId,
  faktaArbeidsforhold,
  slettPeriode,
  avbrytEditering,
  oppdaterPeriode,
  readOnly,
  alleKodeverk,
  defaultMonth,
}) => {
  const intl = useIntl();

  const defaultValues = useMemo(
    () => (valgtPeriode ? lagDefaultVerdier(valgtPeriode, arbeidsgiverOpplysningerPerId) : undefined),
    [valgtPeriode, arbeidsgiverOpplysningerPerId],
  );

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  const [visSletteDialog, settVisSletteDialog] = useState(false);
  const slettUttaksperiode = useCallback(() => {
    settVisSletteDialog(false);
    if (slettPeriode) {
      slettPeriode();
    }
  }, []);

  const sorterteUttakPeriodeTyper = useMemo(
    () =>
      [...alleKodeverk[KodeverkType.UTTAK_PERIODE_TYPE]]
        .sort((k1, k2) => k1.navn.localeCompare(k2.navn)),
    [],
  );
  const sorterteOverføringÅrsaker = useMemo(
    () => [...alleKodeverk[KodeverkType.OVERFOERING_AARSAK_TYPE]].sort((k1, k2) => k1.navn.localeCompare(k2.navn)),
    [],
  );
  const sorterteUtsettelseÅrsaker = useMemo(
    () => [...alleKodeverk[KodeverkType.UTSETTELSE_AARSAK_TYPE]].sort((k1, k2) => k1.navn.localeCompare(k2.navn)),
    [],
  );
  const sorterteOppholdÅrsaker = useMemo(
    () => [...alleKodeverk[KodeverkType.OPPHOLD_ARSAK]].sort((k1, k2) => k1.navn.localeCompare(k2.navn)),
    [],
  );
  const sorterteMorsAktiviteter = useMemo(
    () => [...alleKodeverk[KodeverkType.MORS_AKTIVITET]].sort((k1, k2) => k1.navn.localeCompare(k2.navn)),
    [],
  );

  const årsakstype = formMethods.watch('arsakstype');
  const flerbarnsdager = formMethods.watch('flerbarnsdager');
  const stønadskonto = formMethods.watch('uttakPeriodeType');
  const begrunnelse = formMethods.watch('begrunnelse');

  useEffect(() => {
    if (defaultValues?.arsakstype !== årsakstype) {
      formMethods.unregister('uttakPeriodeType');
      formMethods.unregister('overføringÅrsak');
      formMethods.unregister('oppholdÅrsak');
      formMethods.unregister('utsettelseÅrsak');
      formMethods.unregister('arbeidstidsprosent');
      formMethods.unregister('utsettelseÅrsak');
      formMethods.unregister('arbeidsgiverId');
      formMethods.unregister('samtidigUttaksprosent');
      formMethods.unregister('morsAktivitet');
      formMethods.unregister('flerbarnsdager');
    }
  }, [årsakstype]);

  const onSubmit = useCallback((values: FormValues) => oppdaterPeriode(transformValues(values)), [oppdaterPeriode]);

  const erUttakOgFellesperiodeEllerForeldrepenger =
    årsakstype === Årsakstype.UTTAK &&
    (stønadskonto === StonadskontoType.FELLESPERIODE || stønadskonto === StonadskontoType.FORELDREPENGER);
  const visMorsAktivitet =
    fagsak.relasjonsRolleType !== RelasjonsRolleType.MOR &&
    (erUttakOgFellesperiodeEllerForeldrepenger || årsakstype === Årsakstype.UTSETTELSE);

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
      <Form formMethods={formMethods} onSubmit={onSubmit}>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Datepicker
                name="fom"
                label={<FormattedMessage id="UttakFaktaDetailForm.Fom" />}
                validate={[required, hasValidDate]}
                isReadOnly={readOnly}
                defaultMonth={defaultMonth}
              />
            </FlexColumn>
            <FlexColumn>
              <Datepicker
                name="tom"
                label={<FormattedMessage id="UttakFaktaDetailForm.Tom" />}
                validate={[required, hasValidDate, validerTomEtterFom(intl, formMethods.getValues)]}
                isReadOnly={readOnly}
                defaultMonth={defaultMonth}
              />
            </FlexColumn>
            {slettPeriode && !readOnly && (
              <FlexColumn className={styles.marginBtn}>
                <Button
                  size="small"
                  variant="tertiary"
                  type="button"
                  icon={<TrashIcon />}
                  onClick={() => settVisSletteDialog(true)}
                >
                  <FormattedMessage id="UttakFaktaDetailForm.Slett" />
                </Button>
              </FlexColumn>
            )}
          </FlexRow>
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn>
              {readOnly && (
                <>
                  <Label size="small">
                    <FormattedMessage id="UttakFaktaDetailForm.Periodetype" />
                  </Label>
                  <BodyShort size="small">
                    <FormattedMessage id={ÅRSAKSTYPE_TEKST_KODER[årsakstype]} />
                  </BodyShort>
                </>
              )}
              {!readOnly && (
                <RadioGroupPanel
                  name="arsakstype"
                  label={<FormattedMessage id="UttakFaktaDetailForm.Periodetype" />}
                  validate={[required]}
                  isReadOnly={readOnly}
                  isHorizontal
                  radios={Object.keys(Årsakstype).map(type => ({
                    value: type,
                    label: intl.formatMessage({ id: ÅRSAKSTYPE_TEKST_KODER[type] }),
                  }))}
                />
              )}
            </FlexColumn>
          </FlexRow>
          {(årsakstype === Årsakstype.UTTAK || årsakstype === Årsakstype.OVERFØRING) && (
            <>
              <VerticalSpacer sixteenPx />
              <FlexRow>
                <FlexColumn>
                  <SelectField
                    name="uttakPeriodeType"
                    label={<FormattedMessage id="UttakFaktaDetailForm.Stonadskonto" />}
                    validate={[required]}
                    selectValues={sorterteUttakPeriodeTyper.map(vt => (
                      <option key={vt.kode} value={vt.kode}>
                        {vt.navn}
                      </option>
                    ))}
                    readOnly={readOnly}
                  />
                </FlexColumn>
              </FlexRow>
            </>
          )}
          {årsakstype !== Årsakstype.UTTAK && (
            <>
              <VerticalSpacer sixteenPx />
              <FlexRow>
                <FlexColumn>
                  {årsakstype === Årsakstype.UTSETTELSE && (
                    <SelectField
                      name="utsettelseÅrsak"
                      label={<FormattedMessage id="UttakFaktaDetailForm.Årsak" />}
                      validate={[required]}
                      className={styles.selectArsak}
                      selectValues={sorterteUtsettelseÅrsaker.map(vt => (
                        <option key={vt.kode} value={vt.kode}>
                          {vt.navn}
                        </option>
                      ))}
                      readOnly={readOnly}
                    />
                  )}
                  {årsakstype === Årsakstype.OVERFØRING && (
                    <SelectField
                      name="overføringÅrsak"
                      label={<FormattedMessage id="UttakFaktaDetailForm.Årsak" />}
                      validate={[required]}
                      className={styles.selectArsak}
                      selectValues={sorterteOverføringÅrsaker.map(vt => (
                        <option key={vt.kode} value={vt.kode}>
                          {vt.navn}
                        </option>
                      ))}
                      readOnly={readOnly}
                    />
                  )}
                  {årsakstype === Årsakstype.OPPHOLD && (
                    <SelectField
                      name="oppholdÅrsak"
                      label={<FormattedMessage id="UttakFaktaDetailForm.Årsak" />}
                      validate={[required]}
                      className={styles.selectArsak}
                      selectValues={sorterteOppholdÅrsaker.map(vt => (
                        <option key={vt.kode} value={vt.kode}>
                          {vt.navn}
                        </option>
                      ))}
                      readOnly={readOnly}
                    />
                  )}
                </FlexColumn>
              </FlexRow>
            </>
          )}
          {årsakstype === Årsakstype.UTTAK && (
            <GraderingOgSamtidigUttakPanel
              valgtPeriode={valgtPeriode}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
              faktaArbeidsforhold={faktaArbeidsforhold}
              readOnly={readOnly}
              alleKodeverk={alleKodeverk}
            />
          )}
          {visMorsAktivitet && (
            <>
              <VerticalSpacer sixteenPx />
              <FlexRow>
                <FlexColumn>
                  <SelectField
                    name="morsAktivitet"
                    label={<FormattedMessage id="UttakFaktaDetailForm.MorsAktivitet" />}
                    className={styles.select}
                    selectValues={sorterteMorsAktiviteter.map(vt => (
                      <option key={vt.kode} value={vt.kode}>
                        {vt.navn}
                      </option>
                    ))}
                    readOnly={readOnly}
                  />
                </FlexColumn>
              </FlexRow>
            </>
          )}
          {årsakstype === Årsakstype.UTTAK && (
            <>
              <VerticalSpacer sixteenPx />
              <FlexRow>
                <FlexColumn>
                  {readOnly && (
                    <>
                      <Label size="small">
                        <FormattedMessage id="UttakFaktaDetailForm.HarFlerbarnsdager" />
                      </Label>
                      <BodyShort size="small">
                        <FormattedMessage
                          id={flerbarnsdager === true ? 'UttakFaktaDetailForm.Ja' : 'UttakFaktaDetailForm.Nei'}
                        />
                      </BodyShort>
                    </>
                  )}
                  {!readOnly && (
                    <CheckboxField
                      name="flerbarnsdager"
                      label={<FormattedMessage id="UttakFaktaDetailForm.Flerbarnsdager" />}
                    />
                  )}
                </FlexColumn>
              </FlexRow>
            </>
          )}
          {begrunnelse && (
            <>
              <VerticalSpacer sixteenPx />
              <Label size="small">
                <FormattedMessage id="UttakFaktaDetailForm.Begrunnelse" />
              </Label>
              <BodyShort size="small">{begrunnelse}</BodyShort>
            </>
          )}
          {!readOnly && (
            <>
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
                  <Button size="small" variant="tertiary" onClick={avbrytEditering} disabled={readOnly} type="button">
                    <FormattedMessage id="UttakFaktaDetailForm.Avbryt" />
                  </Button>
                </FlexColumn>
              </FlexRow>
            </>
          )}
        </FlexContainer>
        <VerticalSpacer thirtyTwoPx />
      </Form>
    </>
  );
};

export default UttakFaktaDetailForm;
