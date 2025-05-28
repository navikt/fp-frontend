import { useEffect, useState } from 'react';
import { useForm, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { TrashIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Label, VStack } from '@navikt/ds-react';
import { CheckboxField, Datepicker, Form, RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { OkAvbrytModal } from '@navikt/ft-ui-komponenter';
import { omitMany } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { FordelingPeriodeKilde, RelasjonsRolleType, UttakArbeidType, UttakPeriodeType } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, ArbeidsgiverOpplysningerPerId, Fagsak, FaktaArbeidsforhold } from '@navikt/fp-types';

import { type KontrollerFaktaPeriodeMedApMarkering } from '../typer/kontrollerFaktaPeriodeMedApMarkering';
import {
  type FormValues as FormValuesGraderingOgSamtidigUttak,
  GraderingOgSamtidigUttakPanel,
} from './GraderingOgSamtidigUttakPanel';

import styles from './uttakFaktaDetailForm.module.css';

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
        arbeidType: values.arbeidsgiverId.split('-')[1] as UttakArbeidType,
      }
    : undefined,
  periodeKilde: FordelingPeriodeKilde.SAKSBEHANDLER,
  aksjonspunktType: undefined,
  arbeidstidsprosent: values.arbeidstidsprosent,
  samtidigUttaksprosent: values.samtidigUttaksprosent,
});

const validerTomEtterFom = (intl: IntlShape, getValues: UseFormGetValues<FormValues>) => (tom?: string) =>
  dayjs(tom).isBefore(getValues('fom')) ? intl.formatMessage({ id: 'UttakFaktaDetailForm.TomForFom' }) : null;

interface Props {
  fagsak: Fagsak;
  valgtPeriode?: KontrollerFaktaPeriodeMedApMarkering;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  faktaArbeidsforhold?: FaktaArbeidsforhold[];
  slettPeriode?: () => void;
  avbrytEditering: () => void;
  readOnly: boolean;
  oppdaterPeriode: (uttaksperiode: KontrollerFaktaPeriodeMedApMarkering) => void;
  alleKodeverk: AlleKodeverk;
  defaultMonth?: Date;
}

export const UttakFaktaDetailForm = ({
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
}: Props) => {
  const intl = useIntl();

  const defaultValues = valgtPeriode ? lagDefaultVerdier(valgtPeriode, arbeidsgiverOpplysningerPerId) : undefined;

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  const [visSletteDialog, setVisSletteDialog] = useState(false);
  const slettUttaksperiode = () => {
    setVisSletteDialog(false);
    if (slettPeriode) {
      slettPeriode();
    }
  };

  const sorterteUttakPeriodeTyper = alleKodeverk['UttakPeriodeType'].toSorted((k1, k2) =>
    k1.navn.localeCompare(k2.navn),
  );
  const sorterteOverføringÅrsaker = alleKodeverk['OverføringÅrsak'].toSorted((k1, k2) =>
    k1.navn.localeCompare(k2.navn),
  );
  const sorterteUtsettelseÅrsaker = alleKodeverk['UtsettelseÅrsak'].toSorted((k1, k2) =>
    k1.navn.localeCompare(k2.navn),
  );
  const sorterteOppholdÅrsaker = alleKodeverk['OppholdÅrsak'].toSorted((k1, k2) => k1.navn.localeCompare(k2.navn));
  const sorterteMorsAktiviteter = alleKodeverk['MorsAktivitet'].toSorted((k1, k2) => k1.navn.localeCompare(k2.navn));

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

  const onSubmit = (values: FormValues) => oppdaterPeriode(transformValues(values));

  const erUttakOgFellesperiodeEllerForeldrepenger =
    årsakstype === Årsakstype.UTTAK &&
    (stønadskonto === UttakPeriodeType.FELLESPERIODE || stønadskonto === UttakPeriodeType.FORELDREPENGER);
  const visMorsAktivitet =
    fagsak.relasjonsRolleType !== RelasjonsRolleType.MOR &&
    (erUttakOgFellesperiodeEllerForeldrepenger || årsakstype === Årsakstype.UTSETTELSE);

  return (
    <>
      {visSletteDialog && (
        <OkAvbrytModal
          text={intl.formatMessage({ id: 'UttakFaktaDetailForm.VilDuSlette' })}
          submit={slettUttaksperiode}
          cancel={() => setVisSletteDialog(false)}
          showModal
        />
      )}
      <Form formMethods={formMethods} onSubmit={onSubmit}>
        <VStack gap="4">
          <HStack gap="2" align="end">
            <Datepicker
              name="fom"
              label={<FormattedMessage id="UttakFaktaDetailForm.Fom" />}
              validate={[required, hasValidDate]}
              isReadOnly={readOnly}
              defaultMonth={defaultMonth}
            />
            <Datepicker
              name="tom"
              label={<FormattedMessage id="UttakFaktaDetailForm.Tom" />}
              validate={[required, hasValidDate, validerTomEtterFom(intl, formMethods.getValues)]}
              isReadOnly={readOnly}
              defaultMonth={defaultMonth}
            />
            {slettPeriode && !readOnly && (
              <Button
                size="small"
                variant="tertiary"
                type="button"
                icon={<TrashIcon />}
                onClick={() => setVisSletteDialog(true)}
              >
                <FormattedMessage id="UttakFaktaDetailForm.Slett" />
              </Button>
            )}
          </HStack>
          <HStack gap="2">
            {readOnly && (
              <div>
                <Label size="small">
                  <FormattedMessage id="UttakFaktaDetailForm.Periodetype" />
                </Label>
                <BodyShort size="small">
                  <FormattedMessage id={ÅRSAKSTYPE_TEKST_KODER[årsakstype]} />
                </BodyShort>
              </div>
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
          </HStack>
          {(årsakstype === Årsakstype.UTTAK || årsakstype === Årsakstype.OVERFØRING) && (
            <SelectField
              name="uttakPeriodeType"
              label={<FormattedMessage id="UttakFaktaDetailForm.Stonadskonto" />}
              validate={[required]}
              className={styles.select}
              selectValues={sorterteUttakPeriodeTyper.map(vt => (
                <option key={vt.kode} value={vt.kode}>
                  {vt.navn}
                </option>
              ))}
              readOnly={readOnly}
            />
          )}
          {årsakstype !== Årsakstype.UTTAK && (
            <HStack gap="4">
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
            </HStack>
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
          )}
          {årsakstype === Årsakstype.UTTAK && (
            <>
              {readOnly && (
                <div>
                  <Label size="small">
                    <FormattedMessage id="UttakFaktaDetailForm.HarFlerbarnsdager" />
                  </Label>
                  <BodyShort size="small">
                    <FormattedMessage
                      id={flerbarnsdager === true ? 'UttakFaktaDetailForm.Ja' : 'UttakFaktaDetailForm.Nei'}
                    />
                  </BodyShort>
                </div>
              )}
              {!readOnly && (
                <CheckboxField
                  name="flerbarnsdager"
                  label={<FormattedMessage id="UttakFaktaDetailForm.Flerbarnsdager" />}
                />
              )}
            </>
          )}
          {begrunnelse && (
            <div>
              <Label size="small">
                <FormattedMessage id="UttakFaktaDetailForm.Begrunnelse" />
              </Label>
              <BodyShort size="small">{begrunnelse}</BodyShort>
            </div>
          )}
          {!readOnly && (
            <HStack gap="2" className={styles.marginBtn}>
              <Button
                size="small"
                variant="secondary"
                loading={false}
                disabled={!formMethods.formState.isDirty || readOnly}
              >
                <FormattedMessage id="UttakFaktaDetailForm.Oppdater" />
              </Button>
              <Button size="small" variant="tertiary" onClick={avbrytEditering} disabled={readOnly} type="button">
                <FormattedMessage id="UttakFaktaDetailForm.Avbryt" />
              </Button>
            </HStack>
          )}
        </VStack>
      </Form>
    </>
  );
};
