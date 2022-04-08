import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { FieldArray, FormSection, formValueSelector } from 'redux-form';
import { Normaltekst, Element } from 'nav-frontend-typografi';

import { DatepickerField, CheckboxField } from '@fpsak-frontend/form';
import { hasValidDate, required } from '@fpsak-frontend/utils';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';
import { ArbeidsgiverOpplysningerPerId, KodeverkMedNavn, ArbeidsforholdFodselOgTilrettelegging } from '@fpsak-frontend/types';

import TilrettteleggingFieldArray from './TilretteleggingFieldArray';
import VelferdspermisjonSection from './VelferdspermisjonSection';

import styles from './tilretteleggingArbeidsforholdSection.less';

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

interface PureOwnProps {
  readOnly: boolean;
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging;
  formSectionName: string;
  erOverstyrer: boolean;
  changeField: (field: string, value: any) => void;
  stillingsprosentArbeidsforhold?: number;
  setOverstyrtUtbetalingsgrad: (erOverstyrt: boolean) => void;
  formName: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  uttakArbeidTyper: KodeverkMedNavn[],
}

interface MappedOwnProps {
  visTilrettelegginger: boolean;
}

export const TilretteleggingArbeidsforholdSection: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps> = ({
  intl,
  readOnly,
  arbeidsforhold,
  formSectionName,
  visTilrettelegginger,
  erOverstyrer,
  changeField,
  stillingsprosentArbeidsforhold,
  setOverstyrtUtbetalingsgrad,
  formName,
  arbeidsgiverOpplysningerPerId,
  uttakArbeidTyper,
}) => (
  <FormSection name={formSectionName}>
    <Normaltekst className={styles.arbeidsforholdTittel}>
      {utledArbeidsforholdTittel(arbeidsforhold, arbeidsgiverOpplysningerPerId, uttakArbeidTyper)}
    </Normaltekst>
    <VerticalSpacer sixteenPx />
    <CheckboxField
      readOnly={readOnly}
      name="skalBrukes"
      label={{ id: 'TilretteleggingArbeidsforholdSection.Checkbox.SoekerSkalhaTilrettelegging' }}
    />
    <VerticalSpacer sixteenPx />
    {visTilrettelegginger && (
      <FlexContainer>
        <FlexRow alignItemsToBaseline>
          <FlexColumn>
            <DatepickerField
              name="tilretteleggingBehovFom"
              label={intl.formatMessage({ id: 'TilretteleggingArbeidsforholdSection.DatepickerField.TilretteleggingFra' })}
              validate={[required, hasValidDate]}
              readOnly={readOnly}
            />
            <VerticalSpacer eightPx />
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer sixteenPx />
        <FlexRow>
          <FlexColumn>
            <Element>
              <FormattedMessage id="TilretteleggingFieldArray.BehovForTilrettelegging" />
            </Element>
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer sixteenPx />
        <FlexRow>
          <FlexColumn>
            <FieldArray
              name="tilretteleggingDatoer"
              // @ts-ignore
              component={TilrettteleggingFieldArray}
              readOnly={readOnly}
              formSectionName={formSectionName}
              erOverstyrer={erOverstyrer}
              changeField={changeField}
              velferdspermisjoner={arbeidsforhold.velferdspermisjoner}
              stillingsprosentArbeidsforhold={stillingsprosentArbeidsforhold}
              setOverstyrtUtbetalingsgrad={setOverstyrtUtbetalingsgrad}
              formName={formName}
            />
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    )}
    {arbeidsforhold.velferdspermisjoner.map((permisjon) => (
      <VelferdspermisjonSection
        permisjon={permisjon}
        readOnly={readOnly}
        formSectionName={formSectionName}
        formName={formName}
      />

    ))}
  </FormSection>
);

const mapStateToProps = (state, ownProps: PureOwnProps): MappedOwnProps => ({
  visTilrettelegginger: formValueSelector(ownProps.formName)(state, `${ownProps.formSectionName}.skalBrukes`),
});

export default connect(mapStateToProps)(injectIntl(TilretteleggingArbeidsforholdSection));
