import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Buildings3Icon, ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, ExpansionCard, Heading, HStack, Tag } from '@navikt/ds-react';
import dayjs from 'dayjs';

import type {
  AoIArbeidsforhold,
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsgiverOpplysningerPerId,
  KodeverkMedNavn,
} from '@navikt/fp-types';

import type { TilretteleggingFormValues } from '../../types/TilretteleggingFormValues';
import { ArbeidsforholdPanel } from './ArbeidsforholdPanel';

import styles from './arbeidsforholdFieldArray.module.css';

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

const finnStillingsprosent = (aoiArbeidsforhold: AoIArbeidsforhold[], tilretteleggingBehovFom: string) => {
  const aoiListe = aoiArbeidsforhold.filter(a => erInnenforIntervall(tilretteleggingBehovFom, a.fom, a.tom));
  return aoiListe.reduce((sum, aoi) => sum + aoi.stillingsprosent, 0);
};

interface Props {
  readOnly: boolean;
  sorterteArbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
  aoiArbeidsforhold: AoIArbeidsforhold[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  uttakArbeidTyper: KodeverkMedNavn<'UttakArbeidType'>[];
}

export const ArbeidsforholdFieldArray = ({
  sorterteArbeidsforhold,
  aoiArbeidsforhold,
  arbeidsgiverOpplysningerPerId,
  readOnly,
  uttakArbeidTyper,
}: Props) => {
  const { control } = useFormContext<TilretteleggingFormValues>();
  const { fields } = useFieldArray({
    control,
    name: 'arbeidsforhold',
  });

  return (
    <>
      {fields.map((field, index: number) => {
        const arbeidsforhold = sorterteArbeidsforhold[index];
        const arbeidsgiverOpplysning = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverReferanse ?? ''];

        const alleIafAf = aoiArbeidsforhold.filter(
          iaya => iaya.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverReferanse,
        );

        const af = finnArbeidsforhold(alleIafAf, arbeidsforhold.internArbeidsforholdReferanse ?? undefined);

        const visInfoAlert = af
          ? !erInnenforIntervall(arbeidsforhold.tilretteleggingBehovFom, af.fom, af.tom)
          : alleIafAf.length > 0 &&
            alleIafAf.every(a => !erInnenforIntervall(arbeidsforhold.tilretteleggingBehovFom, a.fom, a.tom));

        const stillingsprosentArbeidsforhold = af
          ? af.stillingsprosent
          : finnStillingsprosent(alleIafAf, arbeidsforhold.tilretteleggingBehovFom);

        const arbeidType = uttakArbeidTyper.find(type => type.kode === arbeidsforhold.uttakArbeidType);

        return (
          <React.Fragment key={field.id}>
            <ExpansionCard aria-label="arbeidsgiver" defaultOpen className={styles.card}>
              <ExpansionCard.Header className={styles.cardHeader}>
                <div className={styles.padding}>
                  <HStack gap="space-56" align="center">
                    <HStack gap="space-16" align="center">
                      <Buildings3Icon color="var(--ax-accent-700)" className={styles.image} />
                      <Heading size="small" level="3">
                        {/*eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- [JOHANNES] vent til vi har bestemt strict index access*/}
                        {arbeidsgiverOpplysning?.navn ?? arbeidType?.navn}
                      </Heading>
                      {/*eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- [JOHANNES] vent til vi har bestemt strict index access*/}
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
                      <Tag size="small" variant="neutral-moderate">
                        <FormattedMessage
                          id="ArbeidsforholdFieldArray.Stillingsprosent"
                          values={{ stillingsprosent: stillingsprosentArbeidsforhold }}
                        />
                      </Tag>
                      <Tag size="small" variant="neutral-moderate">
                        {finnSvpTagTekst(arbeidsforhold.skalBrukes, visInfoAlert)}
                      </Tag>
                      {arbeidsforhold.skalBrukes && visInfoAlert && (
                        <ExclamationmarkTriangleFillIcon color="var(--ax-warning-700)" className={styles.image} />
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
                  stillingsprosentArbeidsforhold={stillingsprosentArbeidsforhold}
                />
              </ExpansionCard.Content>
            </ExpansionCard>
          </React.Fragment>
        );
      })}
    </>
  );
};
