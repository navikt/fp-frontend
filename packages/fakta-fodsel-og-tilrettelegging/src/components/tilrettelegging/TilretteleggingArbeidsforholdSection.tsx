import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import moment from 'moment';
import { Label } from '@navikt/ds-react';
import { Datepicker, CheckboxField, formHooks } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';

import { ArbeidsgiverOpplysningerPerId, KodeverkMedNavn, ArbeidsforholdFodselOgTilrettelegging } from '@navikt/fp-types';

import TilretteleggingFieldArray from './TilretteleggingFieldArray';
import VelferdspermisjonSection from './VelferdspermisjonSection';

import styles from './tilretteleggingArbeidsforholdSection.less';

const validerTidligereEnn = (
  intl: IntlShape,
  getValues,
  formSectionName: string,
) => (): string | null => {
  const tilretteleggingBehovFom = getValues(`${formSectionName}.tilretteleggingBehovFom`);
  const termindato = getValues('termindato');
  const fødselsdato = getValues('fødselsdato');

  const tilretteleggingFomDato = moment(tilretteleggingBehovFom);
  const treUkerFørTermindato = moment(termindato).subtract(3, 'week');
  const tidligsteTidspunkt = fødselsdato ? moment.min(treUkerFørTermindato, moment(fødselsdato)) : treUkerFørTermindato;

  if (tilretteleggingFomDato.isValid() && !tilretteleggingFomDato.isBefore(tidligsteTidspunkt)) {
    return intl.formatMessage({
      id: 'FodselOgTilretteleggingFaktaForm.TilretteleggingTidligereEnn',
    }, {
      dato: tidligsteTidspunkt.format(DDMMYYYY_DATE_FORMAT),
    });
  }
  return null;
};

const utledArbeidsforholdTittel = (
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  uttakArbeidTyper: KodeverkMedNavn[],
): string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverReferanse];
  let tittel = '';
  if (arbeidsforhold.arbeidsgiverReferanse && arbeidsgiverOpplysninger) {
    tittel = `${arbeidsgiverOpplysninger.navn} (${arbeidsgiverOpplysninger.identifikator})`;
  } else {
    const arbeidType = uttakArbeidTyper.find((type) => type.kode === arbeidsforhold.uttakArbeidType);
    tittel = arbeidType?.navn;
  }
  if (arbeidsforhold.eksternArbeidsforholdReferanse) {
    let ref = arbeidsforhold.eksternArbeidsforholdReferanse;
    if (ref.length > 4) {
      ref = ref.slice(-4);
    }
    tittel += `....${ref}`;
  }
  return tittel;
};

type FormValues = {
  skalBrukes: boolean;
}

interface OwnProps {
  readOnly: boolean;
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging;
  formSectionName: string;
  erOverstyrer: boolean;
  stillingsprosentArbeidsforhold?: number;
  setOverstyrtUtbetalingsgrad: (erOverstyrt: boolean) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  uttakArbeidTyper: KodeverkMedNavn[],
}

const TilretteleggingArbeidsforholdSection: FunctionComponent<OwnProps> = ({
  readOnly,
  arbeidsforhold,
  formSectionName,
  erOverstyrer,
  stillingsprosentArbeidsforhold,
  setOverstyrtUtbetalingsgrad,
  arbeidsgiverOpplysningerPerId,
  uttakArbeidTyper,
}) => {
  const intl = useIntl();

  const {
    watch, getValues,
  } = formHooks.useFormContext<Record<string, FormValues>>();

  const visTilrettelegginger = watch(`${formSectionName}.skalBrukes`);

  const tittel = useMemo(() => utledArbeidsforholdTittel(arbeidsforhold, arbeidsgiverOpplysningerPerId, uttakArbeidTyper),
    [arbeidsforhold, arbeidsgiverOpplysningerPerId, uttakArbeidTyper]);

  return (
    <>
      <Label size="small" className={styles.arbeidsforholdTittel}>
        {tittel}
      </Label>
      <VerticalSpacer sixteenPx />
      <CheckboxField
        readOnly={readOnly}
        name={`${formSectionName}.skalBrukes`}
        label={intl.formatMessage({ id: 'TilretteleggingArbeidsforholdSection.Checkbox.SoekerSkalhaTilrettelegging' })}
      />
      <VerticalSpacer sixteenPx />
      {visTilrettelegginger && (
        <FlexContainer>
          <FlexRow alignItemsToBaseline>
            <FlexColumn>
              <Datepicker
                name={`${formSectionName}.tilretteleggingBehovFom`}
                label={intl.formatMessage({ id: 'TilretteleggingArbeidsforholdSection.DatepickerField.TilretteleggingFra' })}
                validate={[required, hasValidDate, validerTidligereEnn(intl, getValues, formSectionName)]}
                isReadOnly={readOnly}
              />
              <VerticalSpacer eightPx />
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn>
              <Label size="small">
                <FormattedMessage id="TilretteleggingFieldArray.BehovForTilrettelegging" />
              </Label>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn>
              <TilretteleggingFieldArray
                readOnly={readOnly}
                formSectionName={formSectionName}
                erOverstyrer={erOverstyrer}
                velferdspermisjoner={arbeidsforhold.velferdspermisjoner}
                stillingsprosentArbeidsforhold={stillingsprosentArbeidsforhold}
                setOverstyrtUtbetalingsgrad={setOverstyrtUtbetalingsgrad}
              />
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      )}
      {arbeidsforhold.velferdspermisjoner.map((permisjon) => (
        <VelferdspermisjonSection
          key={`${permisjon.permisjonFom}.${permisjon.permisjonTom}`}
          permisjon={permisjon}
          readOnly={readOnly}
          formSectionName={formSectionName}
        />
      ))}
    </>
  );
};

export default TilretteleggingArbeidsforholdSection;
