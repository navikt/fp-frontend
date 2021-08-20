import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst, Element, Undertittel } from 'nav-frontend-typografi';
import moment from 'moment';
import { DDMMYYYY_DATE_FORMAT } from '@fpsak-frontend/utils';

import {
  AvsnittSkiller, FlexColumn, FlexRow, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { ArbeidsforholdFodselOgTilrettelegging, ArbeidsgiverOpplysningerPerId } from '@fpsak-frontend/types';

interface OwnProps {
  arbeidsgiverOpplysningerPrId: ArbeidsgiverOpplysningerPerId,
  arbeidsforholdSomIkkeKanTilrettelegges: ArbeidsforholdFodselOgTilrettelegging[],
}

const getEndCharFromId = (id?: string) : string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

const lagArbeidsforholdNavn = (arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging, arbeidsgiverOpplysningerPrId: ArbeidsgiverOpplysningerPerId): string => {
  const agOpplysninger = arbeidsgiverOpplysningerPrId[arbeidsforhold.arbeidsgiverReferanse];
  const {
    navn, fødselsdato, erPrivatPerson, identifikator,
  } = agOpplysninger;
  if (erPrivatPerson) {
    return fødselsdato
      ? `${navn} (${moment(fødselsdato).format(DDMMYYYY_DATE_FORMAT)})${getEndCharFromId(arbeidsforhold.eksternArbeidsforholdReferanse)}`
      : navn;
  }
  return identifikator
    ? `${navn} (${identifikator})${getEndCharFromId(arbeidsforhold.eksternArbeidsforholdReferanse)}`
    : navn;
};

const UtilgjengeligeArbeidsforhold: FunctionComponent<OwnProps> = ({
  arbeidsforholdSomIkkeKanTilrettelegges,
  arbeidsgiverOpplysningerPrId,
}) => {
  if (!arbeidsforholdSomIkkeKanTilrettelegges || arbeidsforholdSomIkkeKanTilrettelegges.length < 1) {
    return null;
  }
  return (
    <>
      <FlexRow>
        <FlexColumn>
          <Undertittel>
            <FormattedMessage id="FodselOgTilretteleggingFaktaForm.ArbeidsforholdDetErSoktTilretteleggingForKanIkkeInnvilges" />
          </Undertittel>
          <VerticalSpacer eightPx />
          <AvsnittSkiller />
          <VerticalSpacer eightPx />
        </FlexColumn>
      </FlexRow>

      <FlexRow>
        <FlexColumn>
          {arbeidsforholdSomIkkeKanTilrettelegges.map((arbeidsforhold) => (
            <React.Fragment key={`${arbeidsforhold.arbeidsgiverReferanse}.arbeidsforhold_som_ikke_kan_brukes`}>
              <FlexRow>
                <FlexColumn>
                  <Element>{lagArbeidsforholdNavn(arbeidsforhold, arbeidsgiverOpplysningerPrId)}</Element>
                </FlexColumn>
              </FlexRow>
              <VerticalSpacer eightPx />
              <FlexRow>
                <FlexColumn>
                  <Normaltekst>
                    <FormattedMessage id="TilretteleggingArbeidsforholdSection.DatepickerField.TilretteleggingFra" />
                  </Normaltekst>
                </FlexColumn>
                <FlexColumn>
                  <Normaltekst>
                    {moment(arbeidsforhold.tilretteleggingBehovFom).format(DDMMYYYY_DATE_FORMAT)}
                  </Normaltekst>
                </FlexColumn>
              </FlexRow>
            </React.Fragment>
          ))}
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
    </>
  );
};

export default UtilgjengeligeArbeidsforhold;
