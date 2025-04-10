import { type ReactElement, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Alert, HStack } from '@navikt/ds-react';
import { CheckboxField, NumberField, SelectField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { dateFormat, guid } from '@navikt/ft-utils';

import { KodeverkType, UttakArbeidType } from '@navikt/fp-kodeverk';
import type {
  AlleKodeverk,
  ArbeidsgiverOpplysninger,
  ArbeidsgiverOpplysningerPerId,
  FaktaArbeidsforhold,
} from '@navikt/fp-types';

import type { KontrollerFaktaPeriodeMedApMarkering } from '../typer/kontrollerFaktaPeriodeMedApMarkering';

import styles from './graderingOgSamtidigUttakPanel.module.css';

export enum Årsakstype {
  UTTAK = 'UTTAK',
  OVERFØRING = 'OVERFØRING',
  UTSETTELSE = 'UTSETTELSE',
  OPPHOLD = 'OPPHOLD',
}

export type FormValues = KontrollerFaktaPeriodeMedApMarkering & {
  arbeidsgiverId?: string;
  harGradering?: boolean;
  harSamtidigUttaksprosent?: boolean;
};

// Todo: gjør dette til delt kode delt kode
const getEndCharFromId = (id: string | undefined) => (id ? `...${id.substring(id.length - 4, id.length)}` : '');
const lagVisningsNavn = (ago: ArbeidsgiverOpplysninger, eksternArbeidsforholdId?: string): string => {
  if (ago.erPrivatPerson) {
    return `${ago.navn.substring(0, 5)}...(${dateFormat(ago.fødselsdato)})`;
  } else {
    return `${ago.navn} (${ago.identifikator})${getEndCharFromId(eksternArbeidsforholdId)}`;
  }
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
      periodeArbeidsforhold = alleKodeverk[KodeverkType.UTTAK_ARBEID_TYPE].find(k => k.kode === arbeidType)?.navn ?? '';
    } else if (arbeidsgiverOpplysninger) {
      periodeArbeidsforhold = lagVisningsNavn(arbeidsgiverOpplysninger);
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

  const { unregister } = useFormContext<FormValues>();

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
      <HStack gap="2">
        <CheckboxField
          name="harGradering"
          label={<FormattedMessage id="UttakFaktaDetailForm.HarGradering" />}
          readOnly={readOnly}
          onChange={toggleGradering}
        />
        <CheckboxField
          name="harSamtidigUttaksprosent"
          label={<FormattedMessage id="UttakFaktaDetailForm.HarSamtidigUttaksprosent" />}
          readOnly={readOnly}
          onChange={toggleSamtidigUttaksprosent}
        />
      </HStack>
      {!readOnly && arbeidsgiverFinnesIkke && (
        <div className={styles.alert}>
          <Alert variant="info">
            <FormattedMessage id="UttakFaktaDetailForm.UkjentArbeidsgiver" values={{ aRef }} />
          </Alert>
        </div>
      )}
      {(visGradering || visSamtidigUttaksgradering) && (
        <HStack gap="6">
          {visGradering && faktaArbeidsforhold && (
            <>
              <NumberField
                name="arbeidstidsprosent"
                label={<FormattedMessage id="UttakFaktaDetailForm.GraderingProsent" />}
                forceTwoDecimalDigits
                validate={[required]}
                className={styles.gradering}
                readOnly={readOnly}
              />
              <SelectField
                name="arbeidsgiverId"
                label={<FormattedMessage id="UttakFaktaDetailForm.Arbeidsgiver" />}
                validate={[required]}
                selectValues={mapArbeidsforhold(faktaArbeidsforhold, alleKodeverk, arbeidsgiverOpplysningerPerId)}
                readOnly={readOnly}
              />
            </>
          )}
          {visSamtidigUttaksgradering && (
            <NumberField
              name="samtidigUttaksprosent"
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
