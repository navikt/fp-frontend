import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
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
  const intl = useIntl();

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
          <>
            <div key={field.id} className={styles.card}>
              <ExpansionCard aria-label="default-demo">
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
            </div>
            <VerticalSpacer thirtyTwoPx />
          </>
        );
      })}
    </>
  );
};

export default ArbeidsgiverFieldArray;
