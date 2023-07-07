import React, { FunctionComponent } from 'react';
import { BodyShort, ExpansionCard, Heading } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Buldings3Icon } from '@navikt/aksel-icons';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { ArbeidsforholdFodselOgTilrettelegging, ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import styles from './arbeidsgiverFieldArray.module.css';
import TilretteleggingForArbeidsgiverPanel from './tilrettelegging/TilretteleggingForArbeidsgiverPanel';

interface OwnProps {
  readOnly: boolean;
  sorterteArbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const ArbeidsgiverFieldArray: FunctionComponent<OwnProps> = ({
  sorterteArbeidsforhold,
  arbeidsgiverOpplysningerPerId,
  readOnly,
}) => {
  const { control } = useFormContext();
  const { fields } = useFieldArray({
    control,
    name: 'arbeidsforhold',
  });

  return (
    <>
      {fields.map((field, index: number) => {
        const opplysning = arbeidsgiverOpplysningerPerId[sorterteArbeidsforhold[index].arbeidsgiverReferanse];
        return (
          <React.Fragment key={field.id}>
            <ExpansionCard aria-label="arbeidsgiver" defaultOpen className={styles.card}>
              <ExpansionCard.Header>
                <ExpansionCard.Title size="small">
                  <FlexContainer>
                    <FlexRow alignItemsToBaseline>
                      <FlexColumn>
                        <Buldings3Icon />
                      </FlexColumn>
                      <FlexColumn>
                        <Heading size="small">{opplysning.navn}</Heading>
                      </FlexColumn>
                      <FlexColumn>
                        <BodyShort size="small">{opplysning.identifikator}</BodyShort>
                      </FlexColumn>
                    </FlexRow>
                  </FlexContainer>
                </ExpansionCard.Title>
              </ExpansionCard.Header>
              <ExpansionCard.Content>
                <TilretteleggingForArbeidsgiverPanel
                  stateIndex={index}
                  readOnly={readOnly}
                  sorterteArbeidsforhold={sorterteArbeidsforhold}
                />
              </ExpansionCard.Content>
            </ExpansionCard>
            <VerticalSpacer thirtyTwoPx />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default ArbeidsgiverFieldArray;
