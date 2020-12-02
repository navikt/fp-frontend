import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { FieldArray, FormSection } from 'redux-form';
import { Normaltekst, Element } from 'nav-frontend-typografi';

import { DatepickerField, CheckboxField, behandlingFormValueSelector } from '@fpsak-frontend/form';
import { hasValidDate, required } from '@fpsak-frontend/utils';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import { ArbeidsgiverOpplysningerPerId, KodeverkMedNavn } from '@fpsak-frontend/types';

import ArbeidsforholdFodselOgTilrettelegging from '../../types/arbeidsforholdFodselOgTilretteleggingTsType';
import TilrettteleggingFieldArray from './TilretteleggingFieldArray';
import VelferdspermisjonSection from './VelferdspermisjonSection';

import styles from './tilretteleggingArbeidsforholdSection.less';

const utledArbeidsforholdTittel = (
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  arbeidTyper: KodeverkMedNavn[],
): string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverReferanse];

  let tittel = '';
  if (arbeidsforhold.arbeidsgiverReferanse && arbeidsgiverOpplysninger) {
    tittel = `${arbeidsgiverOpplysninger.navn} (${arbeidsgiverOpplysninger.identifikator})`;
  } else {
    const arbeidType = arbeidTyper.find((type) => type.kode === arbeidsforhold.arbeidType.kode);
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
  behandlingId: number;
  behandlingVersjon: number;
  erOverstyrer: boolean;
  changeField: (field: string, value: any) => void;
  stillingsprosentArbeidsforhold?: number;
  setOverstyrtUtbetalingsgrad: (erOverstyrt: boolean) => void;
  formName: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  arbeidTyper: KodeverkMedNavn[],
}

interface MappedOwnProps {
  visTilrettelegginger: boolean;
}

export const TilretteleggingArbeidsforholdSection: FunctionComponent<PureOwnProps & MappedOwnProps> = ({
  readOnly,
  arbeidsforhold,
  formSectionName,
  visTilrettelegginger,
  behandlingId,
  behandlingVersjon,
  erOverstyrer,
  changeField,
  stillingsprosentArbeidsforhold,
  setOverstyrtUtbetalingsgrad,
  formName,
  arbeidsgiverOpplysningerPerId,
  arbeidTyper,
}) => (
  <FormSection name={formSectionName}>
    <Normaltekst className={styles.arbeidsforholdTittel}>
      {utledArbeidsforholdTittel(arbeidsforhold, arbeidsgiverOpplysningerPerId, arbeidTyper)}
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
            <Normaltekst>
              <FormattedMessage id="TilretteleggingArbeidsforholdSection.DatepickerField.TilretteleggingFra" />
            </Normaltekst>
          </FlexColumn>
          <FlexColumn>
            <DatepickerField
              name="tilretteleggingBehovFom"
              label=""
              validate={[required, hasValidDate]}
              readOnly={readOnly}
            />
            <VerticalSpacer eightPx />
          </FlexColumn>
        </FlexRow>
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
              component={TilrettteleggingFieldArray}
              readOnly={readOnly}
              formSectionName={formSectionName}
              behandlingId={behandlingId}
              behandlingVersjon={behandlingVersjon}
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
        behandlingId={behandlingId}
        behandlingVersjon={behandlingVersjon}
        formSectionName={formSectionName}
        formName={formName}
      />

    ))}
  </FormSection>
);

const mapStateToProps = (state, ownProps: PureOwnProps): MappedOwnProps => ({
  visTilrettelegginger: behandlingFormValueSelector(ownProps.formName,
    ownProps.behandlingId, ownProps.behandlingVersjon)(state, `${ownProps.formSectionName}.skalBrukes`),
});

export default connect(mapStateToProps)(TilretteleggingArbeidsforholdSection);
