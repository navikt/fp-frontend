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
  KodeverkMedNavn,
} from '@navikt/fp-types';

import { FormattedMessage } from 'react-intl';
import styles from './arbeidsforholdFieldArray.module.css';
import ArbeidsforholdPanel from './ArbeidsforholdPanel';

const getEndCharFromId = (id?: string): string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

const finnArbeidsforhold = (
  alleIafAf: AoIArbeidsforhold[],
  internArbeidsforholdReferanse?: string,
): AoIArbeidsforhold | undefined => {
  if (alleIafAf.length > 1) {
    return alleIafAf.find(iafAf => iafAf.internArbeidsforholdId === internArbeidsforholdReferanse);
  }
  return alleIafAf.length === 1 ? alleIafAf[0] : undefined;
};

const erInnenforIntervall = (tilretteleggingBehovFom: string, fomDato: string, tomDato: string): boolean => {
  const dato = dayjs(tilretteleggingBehovFom);
  return !(dato.isBefore(dayjs(fomDato)) || dato.isAfter(dayjs(tomDato)));
};

const finnSvpTagTekst = (skalBrukes: boolean, visInfoAlert: boolean) => {
  if (visInfoAlert && skalBrukes) {
    return <FormattedMessage id="ArbeidsforholdFieldArray.SvpIkkeBeregnet" />;
  }
  return skalBrukes ? (
    <FormattedMessage id="ArbeidsforholdFieldArray.SkalHaSvp" />
  ) : (
    <FormattedMessage id="ArbeidsforholdFieldArray.SkalIkkeHaSvp" />
  );
};

interface OwnProps {
  readOnly: boolean;
  sorterteArbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
  aoiArbeidsforhold: AoIArbeidsforhold[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  uttakArbeidTyper: KodeverkMedNavn[];
}

const ArbeidsforholdFieldArray: FunctionComponent<OwnProps> = ({
  sorterteArbeidsforhold,
  aoiArbeidsforhold,
  arbeidsgiverOpplysningerPerId,
  readOnly,
  uttakArbeidTyper,
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
        const alleAf = alleIafAf.filter(a => a.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverReferanse);

        const visInfoAlert = af
          ? !erInnenforIntervall(arbeidsforhold.tilretteleggingBehovFom, af.fom, af.tom)
          : alleAf.every(a => !erInnenforIntervall(arbeidsforhold.tilretteleggingBehovFom, a.fom, a.tom));

        const stillingsprosentArbeidsforhold = af ? af.stillingsprosent : 100;

        const arbeidType = uttakArbeidTyper.find(type => type.kode === arbeidsforhold.uttakArbeidType);

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
                        <Heading size="small">{arbeidsgiverOpplysning?.navn || arbeidType?.navn}</Heading>
                      </FlexColumn>
                      {arbeidsgiverOpplysning?.identifikator && (
                        <FlexColumn className={styles.idMargin}>
                          <BodyShort size="small">{arbeidsgiverOpplysning.identifikator}</BodyShort>
                        </FlexColumn>
                      )}
                      {arbeidsforhold.eksternArbeidsforholdReferanse && (
                        <FlexColumn className={styles.idMargin}>
                          <BodyShort size="small">
                            {getEndCharFromId(arbeidsforhold.eksternArbeidsforholdReferanse)}
                          </BodyShort>
                        </FlexColumn>
                      )}
                      <FlexColumn className={styles.tagMargin}>
                        <Tag size="small" variant="neutral-moderate">
                          <FormattedMessage
                            id="ArbeidsforholdFieldArray.Stillingsprosent"
                            values={{ stillingsprosent: stillingsprosentArbeidsforhold }}
                          />
                        </Tag>
                      </FlexColumn>
                      <FlexColumn>
                        <Tag size="small" variant="neutral-moderate">
                          {finnSvpTagTekst(arbeidsforhold.skalBrukes, visInfoAlert)}
                        </Tag>
                      </FlexColumn>
                      {arbeidsforhold.skalBrukes && visInfoAlert && (
                        <FlexColumn>
                          <ExclamationmarkTriangleFillIcon color="var(--a-orange-600)" className={styles.image} />
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
                  stillingsprosentArbeidsforhold={stillingsprosentArbeidsforhold}
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
