import { type ReactElement, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Alert, HStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfNumericField, RhfSelect } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { formaterArbeidsgiver, guid } from '@navikt/ft-utils';

import { UttakArbeidType } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, ArbeidsgiverOpplysningerPerId, FaktaArbeidsforhold } from '@navikt/fp-types';

import type { KontrollerFaktaPeriodeMedApMarkering } from '../typer/kontrollerFaktaPeriodeMedApMarkering';

import styles from './graderingOgSamtidigUttakPanel.module.css';

export type FormValues = KontrollerFaktaPeriodeMedApMarkering & {
  arbeidsgiverId?: string;
  harGradering?: boolean;
  harSamtidigUttaksprosent?: boolean;
};

const mapArbeidsforhold = (
  faktaArbeidsforhold: FaktaArbeidsforhold[],
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement[] =>
  faktaArbeidsforhold.map(andel => {
    const { arbeidType, arbeidsgiverReferanse } = andel;

    const arbeidsgiverOpplysninger = arbeidsgiverReferanse
      ? arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse]
      : undefined;

    let periodeArbeidsforhold = '';
    if (arbeidType && arbeidType !== UttakArbeidType.ORDINÆRT_ARBEID) {
      periodeArbeidsforhold = alleKodeverk['UttakArbeidType'].find(k => k.kode === arbeidType)?.navn ?? '';
    } else if (arbeidsgiverOpplysninger) {
      periodeArbeidsforhold = formaterArbeidsgiver(arbeidsgiverOpplysninger);
    }

    return (
      <option value={`${arbeidsgiverReferanse}-${arbeidType}`} key={guid()}>
        {periodeArbeidsforhold}
      </option>
    );
  });

interface Props {
  valgtPeriode?: KontrollerFaktaPeriodeMedApMarkering;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  faktaArbeidsforhold?: FaktaArbeidsforhold[];
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

export const GraderingOgSamtidigUttakPanel = ({
  valgtPeriode,
  arbeidsgiverOpplysningerPerId,
  faktaArbeidsforhold,
  readOnly,
  alleKodeverk,
}: Props) => {
  const aRef = valgtPeriode?.arbeidsforhold?.arbeidsgiverReferanse;
  const arbeidsgiverFinnesIkke = aRef && aRef !== 'null' && !arbeidsgiverOpplysningerPerId[aRef];

  const [visGradering, setVisGradering] = useState(!!valgtPeriode?.arbeidstidsprosent);
  const [visSamtidigUttaksgradering, setVisSamtidigUttaksgradering] = useState(!!valgtPeriode?.samtidigUttaksprosent);
  const toggleGradering = () => setVisGradering(old => !old);
  const toggleSamtidigUttaksprosent = () => setVisSamtidigUttaksgradering(old => !old);

  const { unregister, control } = useFormContext<FormValues>();

  useEffect(() => {
    if (!visGradering) {
      unregister('arbeidstidsprosent');
      unregister('arbeidsgiverId');
    }
  }, [visGradering]);
  useEffect(() => {
    if (!visSamtidigUttaksgradering) {
      unregister('samtidigUttaksprosent');
    }
  }, [visSamtidigUttaksgradering]);

  return (
    <>
      <HStack gap="space-8">
        <RhfCheckbox
          name="harGradering"
          control={control}
          label={<FormattedMessage id="UttakFaktaDetailForm.HarGradering" />}
          readOnly={readOnly}
          onChange={toggleGradering}
        />
        <RhfCheckbox
          name="harSamtidigUttaksprosent"
          control={control}
          label={<FormattedMessage id="UttakFaktaDetailForm.HarSamtidigUttaksprosent" />}
          readOnly={readOnly}
          onChange={toggleSamtidigUttaksprosent}
        />
      </HStack>
      {/*eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- [JOHANNES] vent til vi har bestemt strict index access*/}
      {!readOnly && arbeidsgiverFinnesIkke && (
        <div className={styles['alert']}>
          <Alert variant="info">
            <FormattedMessage id="UttakFaktaDetailForm.UkjentArbeidsgiver" values={{ aRef }} />
          </Alert>
        </div>
      )}
      {(visGradering || visSamtidigUttaksgradering) && (
        <HStack gap="space-24">
          {visGradering && faktaArbeidsforhold && (
            <>
              <RhfNumericField
                name="arbeidstidsprosent"
                control={control}
                label={<FormattedMessage id="UttakFaktaDetailForm.GraderingProsent" />}
                forceTwoDecimalDigits
                validate={[required]}
                className={styles['gradering']}
                readOnly={readOnly}
              />
              <RhfSelect
                name="arbeidsgiverId"
                control={control}
                label={<FormattedMessage id="UttakFaktaDetailForm.Arbeidsgiver" />}
                validate={[required]}
                selectValues={mapArbeidsforhold(faktaArbeidsforhold, alleKodeverk, arbeidsgiverOpplysningerPerId)}
                readOnly={readOnly}
              />
            </>
          )}
          {visSamtidigUttaksgradering && (
            <RhfNumericField
              name="samtidigUttaksprosent"
              control={control}
              label={<FormattedMessage id="UttakFaktaDetailForm.SamtidigUttaksprosent" />}
              validate={[required]}
              forceTwoDecimalDigits
              readOnly={readOnly}
            />
          )}
        </HStack>
      )}
    </>
  );
};
