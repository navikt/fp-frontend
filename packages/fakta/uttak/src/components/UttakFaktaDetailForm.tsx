import { useEffect, useState } from 'react';
import { useForm, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { TrashIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Label, Radio, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfDatepicker, RhfForm, RhfRadioGroup, RhfSelect } from '@navikt/ft-form-hooks';
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
  arsakstype: Årsakstype;
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
};

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
    valgtPeriode.arbeidsforhold?.arbeidsgiverReferanse !== 'undefined'
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
          values.arbeidsgiverId.split('-')[0] === 'undefined' ? undefined : values.arbeidsgiverId.split('-')[0],
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
      <RhfForm formMethods={formMethods} onSubmit={onSubmit}>
        <VStack gap="space-16">
          <HStack gap="space-8" align="end">
            <RhfDatepicker
              name="fom"
              control={formMethods.control}
              label={<FormattedMessage id="UttakFaktaDetailForm.Fom" />}
              validate={[required, hasValidDate]}
              isReadOnly={readOnly}
              defaultMonth={defaultMonth}
            />
            <RhfDatepicker
              name="tom"
              control={formMethods.control}
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
          <HStack gap="space-8">
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
              <RhfRadioGroup
                name="arsakstype"
                control={formMethods.control}
                label={<FormattedMessage id="UttakFaktaDetailForm.Periodetype" />}
                validate={[required]}
                isReadOnly={readOnly}
              >
                <HStack gap="space-16">
                  {Object.values(Årsakstype).map(type => (
                    <Radio key={type} value={type} size="small">
                      <FormattedMessage id={ÅRSAKSTYPE_TEKST_KODER[type]} />
                    </Radio>
                  ))}
                </HStack>
              </RhfRadioGroup>
            )}
          </HStack>
          {(årsakstype === Årsakstype.UTTAK || årsakstype === Årsakstype.OVERFØRING) && (
            <RhfSelect
              name="uttakPeriodeType"
              control={formMethods.control}
              label={<FormattedMessage id="UttakFaktaDetailForm.Stonadskonto" />}
              validate={[required]}
              className={styles['select']}
              selectValues={sorterteUttakPeriodeTyper.map(vt => (
                <option key={vt.kode} value={vt.kode}>
                  {vt.navn}
                </option>
              ))}
              readOnly={readOnly}
            />
          )}
          {årsakstype !== Årsakstype.UTTAK && (
            <HStack gap="space-16">
              {årsakstype === Årsakstype.UTSETTELSE && (
                <RhfSelect
                  name="utsettelseÅrsak"
                  control={formMethods.control}
                  label={<FormattedMessage id="UttakFaktaDetailForm.Årsak" />}
                  validate={[required]}
                  className={styles['selectArsak']}
                  selectValues={sorterteUtsettelseÅrsaker.map(vt => (
                    <option key={vt.kode} value={vt.kode}>
                      {vt.navn}
                    </option>
                  ))}
                  readOnly={readOnly}
                />
              )}
              {årsakstype === Årsakstype.OVERFØRING && (
                <RhfSelect
                  name="overføringÅrsak"
                  control={formMethods.control}
                  label={<FormattedMessage id="UttakFaktaDetailForm.Årsak" />}
                  validate={[required]}
                  className={styles['selectArsak']}
                  selectValues={sorterteOverføringÅrsaker.map(vt => (
                    <option key={vt.kode} value={vt.kode}>
                      {vt.navn}
                    </option>
                  ))}
                  readOnly={readOnly}
                />
              )}
              {årsakstype === Årsakstype.OPPHOLD && (
                <RhfSelect
                  name="oppholdÅrsak"
                  control={formMethods.control}
                  label={<FormattedMessage id="UttakFaktaDetailForm.Årsak" />}
                  validate={[required]}
                  className={styles['selectArsak']}
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
            <RhfSelect
              name="morsAktivitet"
              control={formMethods.control}
              label={<FormattedMessage id="UttakFaktaDetailForm.MorsAktivitet" />}
              className={styles['select']}
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
                <RhfCheckbox
                  name="flerbarnsdager"
                  control={formMethods.control}
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
            <HStack gap="space-8" className={styles['marginBtn']}>
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
      </RhfForm>
    </>
  );
};
