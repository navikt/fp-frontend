import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Label, Heading } from '@navikt/ds-react';
import moment from 'moment';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';

import {
  AvsnittSkiller, VerticalSpacer, FlexColumn, FlexRow,
} from '@navikt/ft-ui-komponenter';
import { ArbeidsforholdFodselOgTilrettelegging, ArbeidsgiverOpplysningerPerId } from '@fpsak-frontend/types';

const getEndCharFromId = (
  id?: string,
) : string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

const lagArbeidsforholdNavn = (
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging,
  arbeidsgiverOpplysningerPrId: ArbeidsgiverOpplysningerPerId,
): string => {
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

interface OwnProps {
  arbeidsgiverOpplysningerPrId: ArbeidsgiverOpplysningerPerId,
  arbeidsforholdSomIkkeKanTilrettelegges: ArbeidsforholdFodselOgTilrettelegging[],
}

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
          <Heading size="small">
            <FormattedMessage id="FodselOgTilretteleggingFaktaForm.ArbeidsforholdDetErSoktTilretteleggingForKanIkkeInnvilges" />
          </Heading>
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
                  <Label size="small">{lagArbeidsforholdNavn(arbeidsforhold, arbeidsgiverOpplysningerPrId)}</Label>
                </FlexColumn>
              </FlexRow>
              <FlexRow>
                <FlexColumn>
                  <BodyShort size="small">
                    <FormattedMessage id="TilretteleggingArbeidsforholdSection.DatepickerField.TilretteleggingFra" />
                  </BodyShort>
                </FlexColumn>
                <FlexColumn>
                  <BodyShort size="small">
                    {moment(arbeidsforhold.tilretteleggingBehovFom).format(DDMMYYYY_DATE_FORMAT)}
                  </BodyShort>
                </FlexColumn>
              </FlexRow>
              <VerticalSpacer sixteenPx />
            </React.Fragment>
          ))}
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
    </>
  );
};

export default UtilgjengeligeArbeidsforhold;
