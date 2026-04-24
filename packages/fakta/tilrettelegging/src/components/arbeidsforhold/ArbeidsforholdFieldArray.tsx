import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Buildings3Icon, ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, ExpansionCard, Heading, HStack, Tag } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { type Arbeidsforhold, type ArbeidsgiverOpplysningerPerId, type KodeverkMedNavn } from '@navikt/fp-types';

import type { TilretteleggingFormValues } from '../../types/TilretteleggingFormValues';
import { ArbeidsforholdPanel } from './ArbeidsforholdPanel';

import styles from './arbeidsforholdFieldArray.module.css';

const getEndCharFromId = (id?: string): string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

const finnArbeidsforhold = (
  alleIafAf: Arbeidsforhold[],
  internArbeidsforholdReferanse?: string,
): Arbeidsforhold | undefined => {
  if (alleIafAf.length > 1) {
    return alleIafAf.find(iafAf => iafAf.internArbeidsforholdId === internArbeidsforholdReferanse);
  }
  return alleIafAf.length === 1 ? alleIafAf[0] : undefined;
};

const erInnenforIntervall = (tilretteleggingBehovFom: string, fomDato: string, tomDato: string): boolean => {
  const dato = dayjs(tilretteleggingBehovFom);
  return !(dato.isBefore(dayjs(fomDato || undefined)) || dato.isAfter(dayjs(tomDato || undefined)));
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

const finnStillingsprosent = (aoiArbeidsforhold: Arbeidsforhold[], tilretteleggingBehovFom: string) => {
  const aoiListe = aoiArbeidsforhold.filter(a => erInnenforIntervall(tilretteleggingBehovFom, a.fom, a.tom));
  return aoiListe.reduce((sum, aoi) => sum + (aoi.stillingsprosent ?? 0), 0);
};

interface Props {
  readOnly: boolean;
  aoiArbeidsforhold: Arbeidsforhold[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  uttakArbeidTyper: KodeverkMedNavn<'UttakArbeidType'>[];
}

export const ArbeidsforholdFieldArray = ({
  aoiArbeidsforhold,
  arbeidsgiverOpplysningerPerId,
  readOnly,
  uttakArbeidTyper,
}: Props) => {
  const { control, watch } = useFormContext<TilretteleggingFormValues>();
  const { fields } = useFieldArray({
    control,
    name: 'arbeidsforhold',
  });

  const arbeidsforholdListe = watch('arbeidsforhold');

  return (
    <>
      {fields.map((field, index: number) => {
        const arbeidsforhold = arbeidsforholdListe[index];

        if (!arbeidsforhold) {
          return null;
        }

        const arbeidsgiverOpplysning = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverReferanse ?? ''];

        const alleIafAf = aoiArbeidsforhold.filter(
          iaya => iaya.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverReferanse,
        );

        const af = finnArbeidsforhold(alleIafAf, arbeidsforhold.internArbeidsforholdReferanse);

        const visInfoAlert = af
          ? !erInnenforIntervall(arbeidsforhold.tilretteleggingBehovFom, af.fom, af.tom)
          : alleIafAf.length > 0 &&
            alleIafAf.every(a => !erInnenforIntervall(arbeidsforhold.tilretteleggingBehovFom, a.fom, a.tom));

        const stillingsprosent = af
          ? af.stillingsprosent
          : finnStillingsprosent(alleIafAf, arbeidsforhold.tilretteleggingBehovFom);

        const arbeidType = uttakArbeidTyper.find(type => type.kode === arbeidsforhold.uttakArbeidType);

        return (
          <React.Fragment key={field.id}>
            <ExpansionCard aria-label="arbeidsgiver" defaultOpen className={styles['card']} data-color="info">
              <ExpansionCard.Header className={styles['cardHeader']}>
                <HStack gap="space-8 space-56" align="center" paddingBlock="space-8">
                  <HStack gap="space-16" align="center">
                    <Buildings3Icon color="var(--ax-accent-700)" fontSize="1.5rem" />
                    <Heading size="small" level="3">
                      {arbeidsgiverOpplysning?.navn ?? arbeidType?.navn}
                    </Heading>
                    {arbeidsgiverOpplysning?.identifikator && (
                      <BodyShort size="small">{arbeidsgiverOpplysning.identifikator}</BodyShort>
                    )}
                    {arbeidsforhold.eksternArbeidsforholdReferanse && (
                      <BodyShort size="small">
                        {getEndCharFromId(arbeidsforhold.eksternArbeidsforholdReferanse)}
                      </BodyShort>
                    )}
                  </HStack>
                  <HStack gap="space-16" align="center">
                    <Tag data-color="neutral" size="small" variant="moderate">
                      <FormattedMessage id="ArbeidsforholdFieldArray.Stillingsprosent" values={{ stillingsprosent }} />
                    </Tag>
                    <Tag data-color="neutral" size="small" variant="moderate">
                      {finnSvpTagTekst(arbeidsforhold.skalBrukes, visInfoAlert)}
                    </Tag>
                    {arbeidsforhold.skalBrukes && visInfoAlert && (
                      <ExclamationmarkTriangleFillIcon color="var(--ax-warning-700)" fontSize="1.5rem" />
                    )}
                  </HStack>
                </HStack>
              </ExpansionCard.Header>
              <ExpansionCard.Content>
                <ArbeidsforholdPanel
                  arbeidsforhold={arbeidsforhold}
                  arbeidsforholdIndex={index}
                  readOnly={readOnly}
                  visInfoAlert={arbeidsforhold.skalBrukes && visInfoAlert}
                  stillingsprosentArbeidsforhold={stillingsprosent ?? 0}
                />
              </ExpansionCard.Content>
            </ExpansionCard>
          </React.Fragment>
        );
      })}
    </>
  );
};
