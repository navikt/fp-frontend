import React, { FunctionComponent } from 'react';
import dayjs from 'dayjs';
import { BodyShort, ExpansionCard, Heading, Tag } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Buldings3Icon, ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { useFieldArray, useFormContext } from 'react-hook-form';
import {
  AoIArbeidsforhold,
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsgiverOpplysningerPerId,
} from '@navikt/fp-types';

import { FormattedMessage, useIntl } from 'react-intl';
import styles from './arbeidsforholdFieldArray.module.css';
import ArbeidsforholdPanel from './ArbeidsforholdPanel';

const finnArbeidsforhold = (
  alleIafAf: AoIArbeidsforhold[],
  internArbeidsforholdReferanse?: string,
): AoIArbeidsforhold | undefined => {
  if (alleIafAf.length > 1) {
    return alleIafAf.find(iafAf => iafAf.internArbeidsforholdId === internArbeidsforholdReferanse);
  }
  return alleIafAf.length === 1 ? alleIafAf[0] : undefined;
};

const erInnenforIntervall = (tilretteleggingBehovFom: string, fomDato?: string, tomDato?: string): boolean => {
  const dato = dayjs(tilretteleggingBehovFom);
  return !(dato.isBefore(dayjs(fomDato)) || dato.isAfter(dayjs(tomDato)));
};

const finnSvpTagTekst = (skalBrukes: boolean, visInfoAlert: boolean) => {
  if (skalBrukes) {
    return 'ArbeidsforholdFieldArray.SkalHaSvp';
  }
  return visInfoAlert ? 'ArbeidsforholdFieldArray.SvpIkkeBeregnet' : 'ArbeidsforholdFieldArray.SkalIkkeHaSvp';
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
  const intl = useIntl();

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

        const visInfoAlert = !erInnenforIntervall(arbeidsforhold.tilretteleggingBehovFom, af?.fom, af?.tom);

        return (
          <React.Fragment key={field.id}>
            <ExpansionCard aria-label="arbeidsgiver" defaultOpen className={styles.card}>
              <ExpansionCard.Header>
                <div className={styles.padding}>
                  <FlexContainer>
                    <FlexRow>
                      <FlexColumn>
                        <Buldings3Icon color="var(--a-blue-600)" className={styles.image} />
                      </FlexColumn>
                      <FlexColumn>
                        <Heading size="small">{arbeidsgiverOpplysning.navn}</Heading>
                      </FlexColumn>
                      <FlexColumn className={styles.idMargin}>
                        <BodyShort size="small">{arbeidsgiverOpplysning.identifikator}</BodyShort>
                      </FlexColumn>
                      <FlexColumn className={styles.tagMargin}>
                        <Tag size="small" variant="neutral-moderate">
                          <FormattedMessage
                            id="ArbeidsforholdFieldArray.Stillingsprosent"
                            values={{ stillingsprosent: af ? af.stillingsprosent : 100 }}
                          />
                        </Tag>
                      </FlexColumn>
                      <FlexColumn>
                        <Tag size="small" variant="neutral-moderate">
                          <FormattedMessage id={finnSvpTagTekst(arbeidsforhold.skalBrukes, visInfoAlert)} />
                        </Tag>
                      </FlexColumn>
                      {arbeidsforhold.skalBrukes && visInfoAlert && (
                        <FlexColumn>
                          <ExclamationmarkTriangleFillIcon
                            title={intl.formatMessage({ id: 'ArbeidsforholdFieldArray.SvpIkkeBeregnet' })}
                            color="var(--a-orange-600)"
                            className={styles.image}
                          />
                        </FlexColumn>
                      )}
                    </FlexRow>
                  </FlexContainer>
                </div>
              </ExpansionCard.Header>
              <ExpansionCard.Content>
                <ArbeidsforholdPanel
                  arbeidsforhold={arbeidsforhold}
                  arbeidsforholdIndex={index}
                  readOnly={readOnly}
                  visInfoAlert={arbeidsforhold.skalBrukes && visInfoAlert}
                />
              </ExpansionCard.Content>
            </ExpansionCard>
            <VerticalSpacer twentyPx />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default ArbeidsforholdFieldArray;
