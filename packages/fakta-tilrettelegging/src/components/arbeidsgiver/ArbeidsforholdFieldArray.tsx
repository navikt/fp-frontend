import React, { FunctionComponent } from 'react';
import { BodyShort, ExpansionCard, Heading, Tag } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Buldings3Icon } from '@navikt/aksel-icons';
import { useFieldArray, useFormContext } from 'react-hook-form';
import {
  AoIArbeidsforhold,
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsgiverOpplysningerPerId,
} from '@navikt/fp-types';

import { FormattedMessage } from 'react-intl';
import styles from './arbeidsforholdFieldArray.module.css';
import ArbeidsforholdPanel from './tilrettelegging/ArbeidsforholdPanel';

const finnArbeidsforhold = (
  alleIafAf: AoIArbeidsforhold[],
  internArbeidsforholdReferanse?: string,
): AoIArbeidsforhold | undefined => {
  if (alleIafAf.length > 1) {
    return alleIafAf.find(iafAf => iafAf.internArbeidsforholdId === internArbeidsforholdReferanse);
  }
  return alleIafAf.length === 1 ? alleIafAf[0] : undefined;
};

interface OwnProps {
  readOnly: boolean;
  sorterteArbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
  aoiArbeidsforhold: AoIArbeidsforhold[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const ArbeidsforholdFieldArray: FunctionComponent<OwnProps> = ({
  sorterteArbeidsforhold,
  aoiArbeidsforhold,
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

        const alleIafAf = aoiArbeidsforhold.filter(
          iaya => iaya.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverReferanse,
        );
        const af = finnArbeidsforhold(alleIafAf, arbeidsforhold.internArbeidsforholdReferanse);

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
                        <Tag size="small" variant="neutral">
                          <FormattedMessage
                            id="ArbeidsforholdFieldArray.Stillingsprosent"
                            values={{ stillingsprosent: af ? af.stillingsprosent : 100 }}
                          />
                        </Tag>
                      </FlexColumn>
                      <FlexColumn>
                        <Tag size="small" variant="neutral">
                          <FormattedMessage
                            id={
                              arbeidsforhold.skalBrukes
                                ? 'ArbeidsforholdFieldArray.SkalHaSvp'
                                : 'ArbeidsforholdFieldArray.SkalIkkeHaSvp'
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
