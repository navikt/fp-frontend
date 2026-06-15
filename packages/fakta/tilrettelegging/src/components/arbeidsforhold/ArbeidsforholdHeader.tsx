import { FormattedMessage } from 'react-intl';

import { Buildings3Icon, ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, ExpansionCard, HStack, Spacer, Tag, VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import type { ArbeidsgiverOpplysninger, KodeverkMedNavn } from '@navikt/fp-types';

import type { Tilrettelegging } from '../../types/TilretteleggingFormValues';
import { filtrerVelferdspermisjoner } from '../arbeidsforholdUtils';
import type { FAISUProps } from './faisuUtils';

interface Props {
  arbeidsgiverOpplysning: ArbeidsgiverOpplysninger | undefined;
  uttakArbeidTyper: KodeverkMedNavn<'UttakArbeidType'>[];
  visInfoAlert: boolean;
  faisu: FAISUProps | undefined;
  stillingsprosent: number | undefined;
  tilrettelegging: Tilrettelegging;
}

export const ArbeidsforholdHeader = ({
  faisu,
  tilrettelegging,
  uttakArbeidTyper,
  visInfoAlert,
  arbeidsgiverOpplysning,
  stillingsprosent,
}: Props) => {
  const arbeidType = uttakArbeidTyper.find(type => type.kode === tilrettelegging.uttakArbeidType);

  return (
    <HStack gap="space-16" align="center" wrap={false}>
      <VStack gap="space-8">
        <HStack gap="space-4 space-16" align="center">
          <Buildings3Icon fontSize="2rem" />
          <ExpansionCard.Title>{arbeidsgiverOpplysning?.navn ?? arbeidType?.navn}</ExpansionCard.Title>
          {arbeidsgiverOpplysning?.identifikator && (
            <BodyShort size="small">{arbeidsgiverOpplysning.identifikator}</BodyShort>
          )}
          {tilrettelegging.eksternArbeidsforholdReferanse && (
            <BodyShort size="small">{getEndCharFromId(tilrettelegging.eksternArbeidsforholdReferanse)}</BodyShort>
          )}
          <Spacer />
          <HStack gap="space-16" align="center">
            {faisu?.tag}
            <SVPTag skalBrukes={tilrettelegging.skalBrukes} visInfoAlert={visInfoAlert} />
          </HStack>
        </HStack>

        <BodyShort size="small">
          <HStack gap="space-8" align="center" as="span">
            <FormattedMessage
              id="ArbeidsforholdExpansionCard.AntallPeriode"
              tagName="span"
              values={{ antall: tilrettelegging.tilretteleggingDatoer.length }}
            />

            {dayjs(tilrettelegging.tilretteleggingBehovFom).isValid() && (
              <>
                <span>{'\u2022'}</span>
                <span>
                  <DateLabel dateString={tilrettelegging.tilretteleggingBehovFom} />
                </span>
              </>
            )}

            {tilrettelegging.velferdspermisjoner.length > 0 && (
              <>
                <span>{'\u2022'}</span>
                <FormattedMessage
                  id="ArbeidsforholdExpansionCard.AntallVelferdspermisjon"
                  tagName="span"
                  values={{
                    antall: filtrerVelferdspermisjoner(
                      tilrettelegging.velferdspermisjoner,
                      tilrettelegging.tilretteleggingBehovFom,
                    ).length,
                  }}
                />
              </>
            )}
            <>
              <span>{'\u2022'}</span>
              <FormattedMessage
                id="ArbeidsforholdExpansionCard.Stillingsprosent"
                tagName="span"
                values={{ stillingsprosent: stillingsprosent }}
              />
            </>
          </HStack>
        </BodyShort>
      </VStack>
    </HStack>
  );
};

const getEndCharFromId = (id?: string): string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

interface SVPTagProps {
  skalBrukes: boolean;
  visInfoAlert: boolean;
}

const SVPTag = ({ skalBrukes, visInfoAlert }: SVPTagProps) => {
  if (visInfoAlert && skalBrukes) {
    return (
      <Tag data-color="warning" size="xsmall" icon={<ExclamationmarkTriangleFillIcon />}>
        <FormattedMessage id="ArbeidsforholdExpansionCard.SvpIkkeBeregnet" />
      </Tag>
    );
  }
  return skalBrukes ? (
    <Tag data-color="success" size="xsmall">
      <FormattedMessage id="ArbeidsforholdExpansionCard.SkalHaSvp" />
    </Tag>
  ) : (
    <Tag data-color="danger" size="xsmall">
      <FormattedMessage id="ArbeidsforholdExpansionCard.SkalIkkeHaSvp" />
    </Tag>
  );
};
