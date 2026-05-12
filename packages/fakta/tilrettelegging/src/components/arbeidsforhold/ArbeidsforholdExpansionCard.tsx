import { type FieldArrayWithId } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Buildings3Icon, ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, ExpansionCard, HStack, Tag } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import type {
  Arbeidsforhold,
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsgiverOpplysninger,
  KodeverkMedNavn,
} from '@navikt/fp-types';

import type { TilretteleggingFormValues } from '../../types/TilretteleggingFormValues';
import { filtrerVelferdspermisjoner } from '../arbeidsforholdUtils';
import { ArbeidsforholdPanel } from './ArbeidsforholdPanel';
import type { FAISUProps } from './faisuUtils.tsx';

interface Props {
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging;
  index: number;
  readOnly: boolean;
  aoiArbeidsforhold: Arbeidsforhold[];
  arbeidsgiverOpplysning: ArbeidsgiverOpplysninger | undefined;
  uttakArbeidTyper: KodeverkMedNavn<'UttakArbeidType'>[];
  field: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold', 'id'>;
  faisu: FAISUProps | undefined;
}

export const ArbeidsforholdExpansionCard = ({
  arbeidsforhold,
  arbeidsgiverOpplysning,
  index,
  aoiArbeidsforhold,
  uttakArbeidTyper,
  field,
  readOnly,
  faisu,
}: Props) => {
  const alleIafAf = aoiArbeidsforhold.filter(iaya => iaya.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverReferanse);

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
    <ExpansionCard defaultOpen key={field.id} aria-label="arbeidsgiver">
      <ExpansionCard.Header>
        <HStack gap="space-16" align="center">
          <Buildings3Icon fontSize="2rem" />
          <div>
            <HStack gap="space-16" align="baseline">
              <ExpansionCard.Title>{arbeidsgiverOpplysning?.navn ?? arbeidType?.navn}</ExpansionCard.Title>
              <HStack gap="space-16" align="center">
                {arbeidsgiverOpplysning?.identifikator && (
                  <BodyShort size="small">{arbeidsgiverOpplysning.identifikator}</BodyShort>
                )}
                {arbeidsforhold.eksternArbeidsforholdReferanse && (
                  <BodyShort size="small">{getEndCharFromId(arbeidsforhold.eksternArbeidsforholdReferanse)}</BodyShort>
                )}

                {faisu?.tag}

                <Tag data-color="info" size="small">
                  <FormattedMessage id="ArbeidsforholdExpansionCard.Stillingsprosent" values={{ stillingsprosent }} />
                </Tag>

                {utledSVPTags(arbeidsforhold.skalBrukes, visInfoAlert)}
              </HStack>
            </HStack>

            <HStack gap="space-16" align="center">
              <BodyShort size="small">
                <FormattedMessage
                  id="ArbeidsforholdExpansionCard.AntallPeriode"
                  values={{ antall: arbeidsforhold.tilretteleggingDatoer.length }}
                />
              </BodyShort>

              <BodyShort size="small">
                {dayjs(arbeidsforhold.tilretteleggingBehovFom).isValid() && (
                  <DateLabel dateString={arbeidsforhold.tilretteleggingBehovFom} />
                )}
              </BodyShort>

              {arbeidsforhold.velferdspermisjoner.length > 0 && (
                <BodyShort size="small">
                  <FormattedMessage
                    id="ArbeidsforholdExpansionCard.AntallVelferdspermisjon"
                    values={{
                      antall: filtrerVelferdspermisjoner(
                        arbeidsforhold.velferdspermisjoner,
                        arbeidsforhold.tilretteleggingBehovFom,
                      ).length,
                    }}
                  />
                </BodyShort>
              )}
            </HStack>
          </div>
        </HStack>
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        <ArbeidsforholdPanel
          arbeidsforhold={arbeidsforhold}
          arbeidsforholdIndex={index}
          readOnly={readOnly}
          visInfoAlert={arbeidsforhold.skalBrukes && visInfoAlert}
          stillingsprosentArbeidsforhold={stillingsprosent ?? 0}
          faisu={faisu}
        />
      </ExpansionCard.Content>
    </ExpansionCard>
  );
};

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

const utledSVPTags = (skalBrukes: boolean, visInfoAlert: boolean) => {
  if (visInfoAlert && skalBrukes) {
    return (
      <Tag data-color="warning" size="small" icon={<ExclamationmarkTriangleFillIcon />}>
        <FormattedMessage id="ArbeidsforholdExpansionCard.SvpIkkeBeregnet" />
      </Tag>
    );
  }
  return skalBrukes ? (
    <Tag data-color="success" size="small">
      <FormattedMessage id="ArbeidsforholdExpansionCard.SkalHaSvp" />
    </Tag>
  ) : (
    <Tag data-color="danger" size="small">
      <FormattedMessage id="ArbeidsforholdExpansionCard.SkalIkkeHaSvp" />
    </Tag>
  );
};

const finnStillingsprosent = (aoiArbeidsforhold: Arbeidsforhold[], tilretteleggingBehovFom: string) => {
  const aoiListe = aoiArbeidsforhold.filter(a => erInnenforIntervall(tilretteleggingBehovFom, a.fom, a.tom));
  return aoiListe.reduce((sum, aoi) => sum + (aoi.stillingsprosent ?? 0), 0);
};
