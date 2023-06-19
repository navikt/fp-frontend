import React, { FunctionComponent, ReactElement, useCallback, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';
import { required } from '@navikt/ft-form-validators';
import { DDMMYYYY_DATE_FORMAT, guid } from '@navikt/ft-utils';
import { ArbeidsgiverOpplysninger } from '@navikt/ft-types';
import { SelectField, NumberField, CheckboxField } from '@navikt/ft-form-hooks';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Alert } from '@navikt/ds-react';
import { uttakArbeidType, KodeverkType } from '@navikt/fp-kodeverk';

import { AlleKodeverk, ArbeidsgiverOpplysningerPerId, FaktaArbeidsforhold } from '@navikt/fp-types';
import { useFormContext } from 'react-hook-form';
import KontrollerFaktaPeriodeMedApMarkering from '../typer/kontrollerFaktaPeriodeMedApMarkering';

import styles from './graderingOgSamtidigUttakPanel.module.css';

export enum Årsakstype {
  UTTAK = 'UTTAK',
  OVERFØRING = 'OVERFØRING',
  UTSETTELSE = 'UTSETTELSE',
  OPPHOLD = 'OPPHOLD',
}

export type FormValues = KontrollerFaktaPeriodeMedApMarkering & {
  arbeidsgiverId: string;
  harGradering?: boolean;
  harSamtidigUttaksprosent?: boolean;
};

// vanlig arbeidsgivernavn (orgnr)...arbeidsforholdid
// privatperson - KLANG...(18.08.1980)
const formatDate = (dato: string): string => dayjs(dato).format(DDMMYYYY_DATE_FORMAT);
const getEndCharFromId = (id: any): string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

const lagVisningsNavn = (arbeidsgiverOpplysning: ArbeidsgiverOpplysninger, eksternArbeidsforholdId?: any) => {
  const { navn, fødselsdato, erPrivatPerson, identifikator } = arbeidsgiverOpplysning;

  let visningsNavn = `${navn}`;
  if (!erPrivatPerson) {
    visningsNavn = identifikator ? `${visningsNavn} (${identifikator})` : visningsNavn;
    visningsNavn = `${visningsNavn}${getEndCharFromId(eksternArbeidsforholdId)}`;
  } else {
    visningsNavn = `${navn.substring(0, 5)}...(${formatDate(fødselsdato)})`;
  }
  return visningsNavn;
};

const mapArbeidsforhold = (
  faktaArbeidsforhold: FaktaArbeidsforhold[],
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement[] =>
  faktaArbeidsforhold.map(andel => {
    const { arbeidType, arbeidsgiverReferanse } = andel;

    const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse];

    let periodeArbeidsforhold = '';
    if (arbeidType && arbeidType !== uttakArbeidType.ORDINÆRT_ARBEID) {
      periodeArbeidsforhold = alleKodeverk[KodeverkType.UTTAK_ARBEID_TYPE].find(k => k.kode === arbeidType)?.navn;
    } else {
      periodeArbeidsforhold = lagVisningsNavn(arbeidsgiverOpplysninger);
    }

    return (
      <option value={`${arbeidsgiverReferanse}-${arbeidType}`} key={guid()}>
        {periodeArbeidsforhold}
      </option>
    );
  });

interface OwnProps {
  valgtPeriode?: KontrollerFaktaPeriodeMedApMarkering;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

const GraderingOgSamtidigUttakPanel: FunctionComponent<OwnProps> = ({
  valgtPeriode,
  arbeidsgiverOpplysningerPerId,
  faktaArbeidsforhold,
  readOnly,
  alleKodeverk,
}) => {
  const aRef = valgtPeriode?.arbeidsforhold?.arbeidsgiverReferanse;
  const arbeidsgiverFinnesIkke = aRef && aRef !== 'null' && !arbeidsgiverOpplysningerPerId[aRef];

  const [visGradering, setGradering] = useState(!!valgtPeriode?.arbeidstidsprosent);
  const [visSamtidigUttaksgradering, setSamtidigUttaksgradering] = useState(!!valgtPeriode?.samtidigUttaksprosent);
  const toggleGradering = useCallback(() => setGradering(old => !old), []);
  const toggleSamtidigUttaksprosent = useCallback(() => setSamtidigUttaksgradering(old => !old), []);

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
      <VerticalSpacer sixteenPx />
      <FlexRow>
        <FlexColumn>
          <CheckboxField
            name="harGradering"
            label={<FormattedMessage id="UttakFaktaDetailForm.HarGradering" />}
            readOnly={readOnly}
            onChange={toggleGradering}
          />
        </FlexColumn>
        <FlexColumn>
          <CheckboxField
            name="harSamtidigUttaksprosent"
            label={<FormattedMessage id="UttakFaktaDetailForm.HarSamtidigUttaksprosent" />}
            readOnly={readOnly}
            onChange={toggleSamtidigUttaksprosent}
          />
        </FlexColumn>
      </FlexRow>
      {!readOnly && arbeidsgiverFinnesIkke && (
        <div className={styles.alert}>
          <VerticalSpacer sixteenPx />
          <Alert variant="info">
            <FormattedMessage id="UttakFaktaDetailForm.UkjentArbeidsgiver" values={{ aRef }} />
          </Alert>
        </div>
      )}
      {(visGradering || visSamtidigUttaksgradering) && (
        <>
          <VerticalSpacer sixteenPx />
          <FlexRow>
            {visGradering && (
              <>
                <FlexColumn>
                  <NumberField
                    name="arbeidstidsprosent"
                    label={<FormattedMessage id="UttakFaktaDetailForm.GraderingProsent" />}
                    forceTwoDecimalDigits
                    validate={[required]}
                    className={styles.gradering}
                    readOnly={readOnly}
                  />
                </FlexColumn>
                <FlexColumn className={styles.marginGradering}>
                  <SelectField
                    name="arbeidsgiverId"
                    label={<FormattedMessage id="UttakFaktaDetailForm.Arbeidsgiver" />}
                    validate={[required]}
                    selectValues={mapArbeidsforhold(faktaArbeidsforhold, alleKodeverk, arbeidsgiverOpplysningerPerId)}
                    readOnly={readOnly}
                  />
                </FlexColumn>
              </>
            )}
            {visSamtidigUttaksgradering && (
              <FlexColumn>
                <NumberField
                  name="samtidigUttaksprosent"
                  label={<FormattedMessage id="UttakFaktaDetailForm.SamtidigUttaksprosent" />}
                  validate={[required]}
                  forceTwoDecimalDigits
                  readOnly={readOnly}
                />
              </FlexColumn>
            )}
          </FlexRow>
        </>
      )}
    </>
  );
};

export default GraderingOgSamtidigUttakPanel;
