import React, { FunctionComponent } from 'react';
import { BodyShort, ExpansionCard, Heading, Tag } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Buldings3Icon } from '@navikt/aksel-icons';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { ArbeidsforholdFodselOgTilrettelegging, ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { FormattedMessage } from 'react-intl';
import styles from './arbeidsforholdFieldArray.module.css';
import ArbeidsforholdPanel from './tilrettelegging/ArbeidsforholdPanel';

interface OwnProps {
  readOnly: boolean;
  sorterteArbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const ArbeidsforholdFieldArray: FunctionComponent<OwnProps> = ({
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
        const arbeidsforhold = sorterteArbeidsforhold[index];
        const arbeidsgiverOpplysning = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverReferanse];
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
                        <Heading size="small">{arbeidsgiverOpplysning.navn}</Heading>
                      </FlexColumn>
                      <FlexColumn>
                        <BodyShort size="small">{arbeidsgiverOpplysning.identifikator}</BodyShort>
                      </FlexColumn>
                      <FlexColumn className={styles.tagMargin}>
                        <Tag variant="neutral">100% stilling</Tag>
                      </FlexColumn>
                      <FlexColumn>
                        <Tag variant="neutral">
                          <FormattedMessage
                            id={
                              arbeidsforhold.skalBrukes
                                ? 'ArbeidsgiverFieldArray.SkalHaSvp'
                                : 'ArbeidsgiverFieldArray.SkalIkkeHaSvp'
                            }
                          />
                        </Tag>
                      </FlexColumn>
                    </FlexRow>
                  </FlexContainer>
                </ExpansionCard.Title>
              </ExpansionCard.Header>
              <ExpansionCard.Content>
                <ArbeidsforholdPanel arbeidsforhold={arbeidsforhold} arbeidsforholdIndex={index} readOnly={readOnly} />
              </ExpansionCard.Content>
            </ExpansionCard>
            <VerticalSpacer thirtyTwoPx />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default ArbeidsforholdFieldArray;
