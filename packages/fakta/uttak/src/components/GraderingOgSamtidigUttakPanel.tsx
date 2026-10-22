import { type ReactElement, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Alert, HStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfNumericField, RhfSelect } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { formaterArbeidsgiver } from '@navikt/ft-utils';

import type { AlleKodeverk, ArbeidsgiverOpplysningerPerId, FaktaArbeidsforhold } from '@navikt/fp-types';
import { useReadOnly } from '@navikt/fp-utils';

import type { KontrollerFaktaPeriodeMedApMarkering } from '../typer/kontrollerFaktaPeriodeMedApMarkering';

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
    if (arbeidType && arbeidType !== 'ORDINÆRT_ARBEID') {
      periodeArbeidsforhold = alleKodeverk['UttakArbeidType'].find(k => k.kode === arbeidType)?.navn ?? '';
    } else if (arbeidsgiverOpplysninger) {
      periodeArbeidsforhold = formaterArbeidsgiver(arbeidsgiverOpplysninger);
    }

    return (
      <option value={`${arbeidsgiverReferanse}-${arbeidType}`} key={`${arbeidsgiverReferanse}-${arbeidType}`}>
        {periodeArbeidsforhold}
      </option>
    );
  });

interface Props {
  valgtPeriode?: KontrollerFaktaPeriodeMedApMarkering;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  faktaArbeidsforhold?: FaktaArbeidsforhold[];
  alleKodeverk: AlleKodeverk;
}

export const GraderingOgSamtidigUttakPanel = ({
  valgtPeriode,
  arbeidsgiverOpplysningerPerId,
  faktaArbeidsforhold,
  alleKodeverk,
}: Props) => {
  const readOnly = useReadOnly();
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
  }, [visGradering, unregister]);
  useEffect(() => {
    if (!visSamtidigUttaksgradering) {
      unregister('samtidigUttaksprosent');
    }
  }, [visSamtidigUttaksgradering, unregister]);

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
      {!readOnly && arbeidsgiverFinnesIkke && (
        <Alert variant="info" className="self-start" size="small">
          <FormattedMessage id="UttakFaktaDetailForm.UkjentArbeidsgiver" values={{ aRef }} />
        </Alert>
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
                htmlSize={8}
                readOnly={readOnly}
              />
              <RhfSelect
                name="arbeidsgiverId"
                control={control}
                label={<FormattedMessage id="UttakFaktaDetailForm.Arbeidsgiver" />}
                validate={[required]}
                selectValues={mapArbeidsforhold(faktaArbeidsforhold, alleKodeverk, arbeidsgiverOpplysningerPerId)}
                className="self-start"
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
              htmlSize={8}
              readOnly={readOnly}
            />
          )}
        </HStack>
      )}
    </>
  );
};
