import React from 'react';
import dayjs from 'dayjs';
import { BodyShort, ExpansionCard, Heading, HStack, Tag } from '@navikt/ds-react';
import { Buildings3Icon, ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { useFieldArray, useFormContext } from 'react-hook-form';
import {
  AoIArbeidsforhold,
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsgiverOpplysningerPerId,
  KodeverkMedNavn,
} from '@navikt/fp-types';

import { FormattedMessage } from 'react-intl';
import styles from './arbeidsforholdFieldArray.module.css';
import { ArbeidsforholdPanel } from './ArbeidsforholdPanel';

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

interface Props {
  readOnly: boolean;
  sorterteArbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
  aoiArbeidsforhold: AoIArbeidsforhold[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  uttakArbeidTyper: KodeverkMedNavn[];
}

export const ArbeidsforholdFieldArray = ({
  sorterteArbeidsforhold,
  aoiArbeidsforhold,
  arbeidsgiverOpplysningerPerId,
  readOnly,
  uttakArbeidTyper,
}: Props) => {
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

        const visInfoAlert = af
          ? !erInnenforIntervall(arbeidsforhold.tilretteleggingBehovFom, af.fom, af.tom)
          : alleIafAf.length > 0 &&
            alleIafAf.every(a => !erInnenforIntervall(arbeidsforhold.tilretteleggingBehovFom, a.fom, a.tom));

        const arbeidType = uttakArbeidTyper.find(type => type.kode === arbeidsforhold.uttakArbeidType);

        return (
          <React.Fragment key={field.id}>
            <ExpansionCard aria-label="arbeidsgiver" defaultOpen className={styles.card}>
              <ExpansionCard.Header>
                <div className={styles.padding}>
                  <HStack gap="14" align="center">
                    <HStack gap="4" align="center">
                      <Buildings3Icon color="var(--a-blue-600)" className={styles.image} />
                      <Heading size="small">{arbeidsgiverOpplysning?.navn || arbeidType?.navn}</Heading>
                      {arbeidsgiverOpplysning?.identifikator && (
                        <BodyShort size="small">{arbeidsgiverOpplysning.identifikator}</BodyShort>
                      )}
                      {arbeidsforhold.eksternArbeidsforholdReferanse && (
                        <BodyShort size="small">
                          {getEndCharFromId(arbeidsforhold.eksternArbeidsforholdReferanse)}
                        </BodyShort>
                      )}
                    </HStack>
                    <HStack gap="4" align="center">
                      <Tag size="small" variant="neutral-moderate">
                        <FormattedMessage
                          id="ArbeidsforholdFieldArray.Stillingsprosent"
                          values={{ stillingsprosent: arbeidsforhold.stillingsprosentStartTilrettelegging }}
                        />
                      </Tag>
                      <Tag size="small" variant="neutral-moderate">
                        {finnSvpTagTekst(arbeidsforhold.skalBrukes, visInfoAlert)}
                      </Tag>
                      {arbeidsforhold.skalBrukes && visInfoAlert && (
                        <ExclamationmarkTriangleFillIcon color="var(--a-orange-600)" className={styles.image} />
                      )}
                    </HStack>
                  </HStack>
                </div>
              </ExpansionCard.Header>
              <ExpansionCard.Content>
                <ArbeidsforholdPanel
                  arbeidsforhold={arbeidsforhold}
                  arbeidsforholdIndex={index}
                  readOnly={readOnly}
                  visInfoAlert={arbeidsforhold.skalBrukes && visInfoAlert}
                  stillingsprosentArbeidsforhold={arbeidsforhold.stillingsprosentStartTilrettelegging}
                />
              </ExpansionCard.Content>
            </ExpansionCard>
          </React.Fragment>
        );
      })}
    </>
  );
};
